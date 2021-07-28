from models.stack import StackModel, ActionType
from models.round import RoundModel
from models.hand import HandModel
from models.game import GameModel


def play_card(event):
    round_id = event['arguments'].get('roundID')
    value = event['arguments'].get('value')
    user_id = event['identity']['claims'].get('sub')

    round = RoundModel.find_by_id(round_id)
    stack = StackModel.find_by_id(round['activeStackID'])
    hands = HandModel.find_by_round(round_id)

    if round['turn'] != user_id:
        raise Exception("It's not your turn to play")

    if (StackModel.is_complete(stack['id'])):
        raise Exception("Stack is complete. Please clear the current stack")

    user_hand = next(hand for hand in hands if hand['userID'] == user_id)
    HandModel.remove_card(user_hand['id'], value)
    RoundModel.next_turn(round_id)
    StackModel.add_action(ActionType.PLAY.name, user_id, stack['id'], value)
    return GameModel.find_by_id(round['gameID'])
