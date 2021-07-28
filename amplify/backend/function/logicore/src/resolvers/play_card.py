from models.stack import StackModel, ActionType
from models.round import RoundModel
from models.hand import HandModel


def play_card(event):
    round_id = event['arguments'].get('roundID')
    value = event['arguments'].get('value')
    user_id = event['identity']['claims'].get('sub')

    round = RoundModel.find_by_id(round_id)

    if round['turn'] != user_id:
        raise Exception("Its not your turn to play")

    hands = HandModel.find_by_round(round_id)

    user_hand = next(hand for hand in hands if hand['userID'] == user_id)

    HandModel.remove_card(user_hand['id'], value)

    stack_id = round['activeStackID']

    RoundModel.next_turn(round_id)

    return StackModel.add_action(ActionType.PLAY.name, user_id, stack_id, value)
