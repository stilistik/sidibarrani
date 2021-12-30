from models.stack import StackModel
from models.round import RoundModel
from models.game import GameModel
from botocore.exceptions import ClientError


def clear_stack(event):
    round_id = event['arguments'].get('roundID')
    round = RoundModel.find_by_id(round_id)

    try:
        key = RoundModel.lock(round_id)
        stack = StackModel.find_by_id(round.activeStackID)
        if round.activeStackID != stack.id:
            # Stack has already been cleared
            return vars(GameModel.find_by_id(round.gameID))
        new_stack = StackModel.create(round_id, stack.size)
        RoundModel.set_active_stack(round_id, new_stack.id)

        return vars(GameModel.find_by_id(round.gameID))

    finally:
        RoundModel.unlock(round_id, key)