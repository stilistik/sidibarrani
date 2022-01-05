from models.team_user import TeamUserModel
from models.game import GameModel, GameStatus
from models.round import RoundModel, RoundStatus, RoundMode, Round
from models.stack import StackModel
from models.action import ActionModel, ActionType


def compute_result(round: Round):
    result = {}
    stacks = StackModel.find_by_round(round.id)
    for i, stack in enumerate(stacks):
        if not stack.winnerID:
            continue

        # the last stack is awarded 5 points
        if i == len(stacks) - 1:
            StackModel.set_last_stack(stack.id)

        team_user = TeamUserModel.find_by_id(stack.winnerID)

        prev_result = result.get(team_user.teamID, 0)
        result[team_user.teamID] = prev_result + stack_winner_result

    return result


def end_round(event):
    round_id = event['arguments'].get('roundID')
    round = RoundModel.set_round_status(round_id, RoundStatus.ENDED)
    result = compute_result(round)
    RoundModel.set_result(round_id, result)

    winner_team_id = max(result.keys(), key=(lambda key: result[key]))
    RoundModel.set_winner(round_id, winner_team_id)

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
