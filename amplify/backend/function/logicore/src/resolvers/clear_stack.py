from models.stack import StackModel
from models.round import RoundModel
from models.game import GameModel


def clear_stack(event):
    round_id = event['arguments'].get('roundID')
    round = RoundModel.find_by_id(round_id)
    stack = StackModel.find_by_id(round.activeStackID)

    stack_complete = StackModel.is_complete(stack['id'])

    if not stack_complete:
        raise Exception('The stack is not yet complete!')

    new_stack = StackModel.create(round_id, stack['size'])
    RoundModel.set_active_stack(round_id, new_stack['id'])

    return vars(GameModel.find_by_id(round.gameID))
