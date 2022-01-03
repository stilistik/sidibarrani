from models.stack import StackModel
from models.round import RoundModel
from models.game import GameModel
from botocore.exceptions import ClientError


def clear_stack(event):
    round_id = event['arguments'].get('roundID')
    round = RoundModel.find_by_id(round_id)

    key = None
    try:
        key = RoundModel.lock(round_id)
        stack = StackModel.find_by_id(round.activeStackID)

        if round.activeStackID != stack.id:
            raise Exception("Attempted to clear non-active stack.")
        if not StackModel.is_complete(stack.id):
            raise Exception("Attempted to clear incomplete stack.")

        new_stack = StackModel.create(round_id, stack.size)
        RoundModel.set_active_stack(round_id, new_stack.id)

        return vars(GameModel.find_by_id(round.gameID))

    finally:
        # needs to run in finally block so it always runs, even if other exceptions are raised
        if key: RoundModel.unlock(round_id, key)
