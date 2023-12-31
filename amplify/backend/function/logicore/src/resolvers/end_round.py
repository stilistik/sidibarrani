from resolvers.clear_stack import finalize_active_stack
from models.team_user import TeamUserModel
from models.game import GameModel, GameStatus
from models.round import RoundModel, RoundStatus, Round
from models.stack import StackModel
from models.team import TeamModel, Team
from typing import List


def compute_round_result(round: Round, teams: List[Team]):
    result = {team.id: {'value': 0, 'stake_bonus': None} for team in teams}
    stacks = StackModel.find_by_round(round.id)
    for i, stack in enumerate(stacks):
        if not stack.winnerID or not stack.points:
            continue

        # the last stack is awarded 5 points
        if i == len(stacks) - 1:
            stack = StackModel.set_last_stack(stack.id)

        team_user = TeamUserModel.find_by_id(stack.winnerID)
        if not team_user.teamID in result:
            raise Exception("Team of user could not be found in result")
        else:
            result[team_user.teamID]['value'] += stack.points

    return result


def is_round_complete(round: Round) -> bool:
    stacks = StackModel.find_by_round(round.id)
    return len(stacks) == round.stackCount


def do_end_round(round: Round):
    finalize_active_stack(round)
    round = RoundModel.set_round_status(round.id, RoundStatus.ENDED)
    teams = TeamModel.find_by_game(round.gameID)
    round_result = compute_round_result(round, teams)
    winner_team_id = max(round_result.keys(),
                         key=(lambda key: round_result[key]['value']))

    staking_team_id = None
    non_staking_team_id = None
    stake_value = round.stake['value']

    for key in round_result.keys():
        if key == round.stake['teamID']:
            staking_team_id = key
        else:
            non_staking_team_id = key

    if round_result[staking_team_id]['value'] >= stake_value:
        round_result[staking_team_id]['value'] += stake_value
        round_result[staking_team_id]['stake_bonus'] = stake_value
    else:
        round_result[non_staking_team_id]['value'] += stake_value
        round_result[non_staking_team_id]['stake_bonus'] = stake_value

    RoundModel.set_result(round.id, round_result)
    RoundModel.set_winner(round.id, winner_team_id)

    game = GameModel.find_by_id(round.gameID)

    old_result = game.result or {}
    new_result = {
        k: {
            'value':
            old_result.get(k, {}).get('value', 0) +
            round_result.get(k, {}).get('value', 0)
        }
        for k in old_result.keys() | round_result.keys()
    }
    game = GameModel.set_result(game.id, new_result)

    for team_id in game.result.keys():
        if game.result[team_id]['value'] > game.winCondition:
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