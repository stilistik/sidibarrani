from models.team_user import TeamUserModel
from models.game import GameModel, GameStatus
from models.round import RoundModel, RoundStatus, RoundMode, Round
from models.stack import StackModel
from models.action import ActionModel, ActionType

card_mode_values = {
    RoundMode.TOP_DOWN: {
        'A*': 11,
        'K*': 4,
        'Q*': 3,
        'J*': 2,
        '10*': 10,
        '8*': 8
    },
    RoundMode.BOTTOM_UP: {
        '6*': 11,
        'K*': 4,
        'Q*': 3,
        'J*': 2,
        '10*': 10,
        '8*': 8
    },
    RoundMode.SLALOM_BOTTOM: {
        '6*': 11,
        'K*': 4,
        'Q*': 3,
        'J*': 2,
        '10*': 10,
        '8*': 8
    },
    RoundMode.SLALOM_TOP: {
        '6*': 11,
        'K*': 4,
        'Q*': 3,
        'J*': 2,
        '10*': 10,
        '8*': 8
    },
    RoundMode.TRUMP_C: {
        'JC': 20,
        '9C': 14,
        'A*': 11,
        'K*': 4,
        'Q*': 3,
        'J*': 2,
        '10*': 10,
    },
    RoundMode.TRUMP_D: {
        'JD': 20,
        '9D': 14,
        'A*': 11,
        'K*': 4,
        'Q*': 3,
        'J*': 2,
        '10*': 10,
    },
    RoundMode.TRUMP_H: {
        'JH': 20,
        '9H': 14,
        'A*': 11,
        'K*': 4,
        'Q*': 3,
        'J*': 2,
        '10*': 10,
    },
    RoundMode.TRUMP_S: {
        'JS': 20,
        '9S': 14,
        'A*': 11,
        'K*': 4,
        'Q*': 3,
        'J*': 2,
        '10*': 10,
    }
}


def get_suit(value: str):
    return value[-1]


def get_rank(value: str):
    return value[0:-1]


def get_card_value(action_value: str, mode: RoundMode):
    card_values = card_mode_values[mode]

    if action_value in card_values:
        return card_values[action_value]
    else:
        rank = get_rank(action_value)
        rank_generic = rank + '*'
        if rank_generic in card_values:
            return card_values[rank_generic]

    return 0


def compute_result(round: Round):
    result = {}
    stacks = StackModel.find_by_round(round.id)
    for i, stack in enumerate(stacks):
        if not stack.winnerID:
            continue

        actions = ActionModel.find_by_stack(stack.id)
        stack_winner_result = result.get(stack.winnerID, 0)
        for action in actions:
            if action.type != ActionType.PLAY:
                continue

            card_value = get_card_value(action.value, round.mode)
            stack_winner_result += card_value

        # the last stack is awarded 5 points
        if i == len(stacks) - 1:
            stack_winner_result += 5

        team_user = TeamUserModel.find_by_id(stack.winnerID)

        prev_result = result.get(team_user.teamID, 0)
        result[team_user.teamID] = prev_result + stack_winner_result

    return result


def end_round(event):
    round_id = event['arguments'].get('roundID')
    round = RoundModel.set_round_status(round_id, RoundStatus.ENDED)
    result = compute_result(round)
    RoundModel.set_result(round_id, result)
    game = GameModel.find_by_id(round.gameID)
    game_result = {
        k: game.result.get(k, 0) + result.get(k, 0)
        for k in game.result.keys() | result.keys()
    }
    game = GameModel.set_result(game.id, game_result)

    for k in game.result.keys():
        if game.result[k] > game.winCondition:
            game = GameModel.set_status(game.id, GameStatus.ENDED)

    return vars(game)
