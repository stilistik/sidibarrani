from models.stack import StackModel, Stack
from models.round import RoundModel, Round, RoundMode
from models.game import GameModel
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


def compute_stack_points(stack: Stack, round: Round):
    if not stack.winnerID:
        return 0
    else:
        actions = ActionModel.find_by_stack(stack.id)
        points = 0
        for action in actions:
            if action.type != ActionType.PLAY:
                continue

            card_value = get_card_value(action.value, round.mode)
            points += card_value
        return points


def finalize_active_stack(round: Round) -> Stack:
    stack = StackModel.find_by_id(round.activeStackID)
    points = compute_stack_points(stack, round)
    return StackModel.set_points(stack.id, points)


def clear_stack(event):
    round_id = event['arguments'].get('roundID')
    round = RoundModel.find_by_id(round_id)

    key = None
    try:
        key = RoundModel.lock(round.id)
        stack = finalize_active_stack(round)

        if not StackModel.is_complete(round.activeStackID):
            # incomplete stacks cannot be finalized
            raise Exception('Attempted to clear incomplete stack')

        new_stack = StackModel.create(round.id, stack.size)
        RoundModel.set_active_stack(round.id, new_stack.id)
        return vars(GameModel.find_by_id(round.gameID))

    finally:
        # needs to run in finally block so it always runs, even if other exceptions are raised
        if key: RoundModel.unlock(round.id, key)
