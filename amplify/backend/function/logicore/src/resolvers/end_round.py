from models.team import TeamModel
from models.game import GameModel
from models.round import RoundModel, RoundStatus, RoundMode
from models.stack import StackModel, ActionType

card_mode_values = {
    RoundMode.TOP_DOWN.name: {
        'A*': 11,
        'K*': 4,
        'Q*': 3,
        'J*': 2,
        '10*': 10,
        '8*': 8
    },
    RoundMode.BOTTOM_UP.name: {
        '6*': 11,
        'K*': 4,
        'Q*': 3,
        'J*': 2,
        '10*': 10,
        '8*': 8
    },
    RoundMode.SLALOM_BOTTOM.name: {
        '6*': 11,
        'K*': 4,
        'Q*': 3,
        'J*': 2,
        '10*': 10,
        '8*': 8
    },
    RoundMode.SLALOM_TOP.name: {
        '6*': 11,
        'K*': 4,
        'Q*': 3,
        'J*': 2,
        '10*': 10,
        '8*': 8
    },
    RoundMode.TRUMP_C.name: {
        'JC': 20,
        '9C': 14,
        'A*': 11,
        'K*': 4,
        'Q*': 3,
        'J*': 2,
        '10*': 10,
    },
    RoundMode.TRUMP_D.name: {
        'JD': 20,
        '9D': 14,
        'A*': 11,
        'K*': 4,
        'Q*': 3,
        'J*': 2,
        '10*': 10,
    },
    RoundMode.TRUMP_H.name: {
        'JH': 20,
        '9H': 14,
        'A*': 11,
        'K*': 4,
        'Q*': 3,
        'J*': 2,
        '10*': 10,
    },
    RoundMode.TRUMP_S.name: {
        'JS': 20,
        '9S': 14,
        'A*': 11,
        'K*': 4,
        'Q*': 3,
        'J*': 2,
        '10*': 10,
    }
}


def get_suit(value):
    return value[-1]


def get_rank(value):
    return value[0:-1]


def get_card_value(action_value, mode):
    card_values = card_mode_values[mode]

    if action_value in card_values:
        return card_values[action_value]
    else:
        rank = get_rank(action_value)
        rank_generic = rank + '*'
        if rank_generic in card_values:
            return card_values[rank_generic]

    return 0


def compute_result(round):
    result = {}
    stacks = StackModel.find_by_round(round['id'])
    for stack in stacks:
        if not 'winnerID' in stack:
            continue

        actions = StackModel.get_actions(stack['id'])
        stack_winner_result = result.get(stack['winnerID'], 0)
        for action in actions:
            if action['type'] != ActionType.PLAY.name:
                continue

            card_value = get_card_value(action['value'], round['mode'])
            stack_winner_result += card_value

        team_user = TeamModel.find_team_user_by_id(stack['winnerID'])

        prev_result = result.get(team_user['teamID'], 0)
        result[team_user['teamID']] = prev_result + stack_winner_result

    return result


def end_round(event):
    round_id = event['arguments'].get('roundID')
    round = RoundModel.set_round_status(round_id, RoundStatus.ENDED)
    result = compute_result(round)
    RoundModel.set_result(round_id, result)
    return GameModel.find_by_id(round.gameID)
