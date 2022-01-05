from collections import defaultdict
from resolvers.clear_stack import finalize_active_stack
from models.team_user import TeamUserModel
from models.game import GameModel, GameStatus
from models.round import RoundModel, RoundStatus, Round
from models.stack import StackModel


def compute_result(round: Round):
    result = defaultdict(int)
    stacks = StackModel.find_by_round(round.id)
    for i, stack in enumerate(stacks):
        if not stack.winnerID or not stack.points:
            continue

        # the last stack is awarded 5 points
        if i == len(stacks) - 1:
            stack = StackModel.set_last_stack(stack.id)

        team_user = TeamUserModel.find_by_id(stack.winnerID)
        result[team_user.teamID] += stack.points

    return result


def is_round_complete(round: Round) -> bool:
    stacks = StackModel.find_by_round(round.id)
    return len(stacks) == round.stackCount


def do_end_round(round: Round):
    finalize_active_stack(round)
    round = RoundModel.set_round_status(round.id, RoundStatus.ENDED)
    result = compute_result(round)
    winner_team_id = max(result.keys(), key=(lambda key: result[key]))

    staking_team_id = None
    non_staking_team_id = None
    stake_value = round.stake['value']

    for key in result.keys():
        if key == round.stake['teamID']:
            staking_team_id = key
        else:
            non_staking_team_id = key

    if result[staking_team_id] >= stake_value:
        result[staking_team_id] += stake_value
    else:
        result[non_staking_team_id] += stake_value

    RoundModel.set_result(round.id, result)

    RoundModel.set_winner(round.id, winner_team_id)

    game = GameModel.find_by_id(round.gameID)
    game_result = {
        k: game.result.get(k, 0) + result.get(k, 0)
        for k in game.result.keys() | result.keys()
    }
    game = GameModel.set_result(game.id, game_result)

    for team_id in game.result.keys():
        if game.result[team_id] > game.winCondition:
            game = GameModel.set_status(game.id, GameStatus.ENDED)
            game = GameModel.set_winner(game.id, team_id)

    return vars(game)


def end_round(event):
    round_id = event['arguments'].get('roundID')
    round = RoundModel.find_by_id(round_id)

    key = None
    try:
        key = RoundModel.lock(round_id)

        if round.status == RoundStatus.ENDED:
            raise Exception('Round has already ended.')
        if not is_round_complete(round):
            raise Exception('Round is not complete yet')

        return do_end_round(round)
    finally:
        RoundModel.unlock(round_id, key)