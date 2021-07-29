from models.stack import StackModel, ActionType
from models.round import RoundModel
from models.hand import HandModel
from models.game import GameModel


def get_rank(action):
    return action['value'][0:-1]


def get_suit(action):
    return action['value'][-1]


def set_winner(stack):
    actions = StackModel.get_actions(stack['id'])
    suit_played = actions[0]['value'][-1]
    winner = actions[0]

    for action in actions:
        suit = get_suit(action)
        rank = get_rank(action)

        if suit == suit_played:
            if rank > get_rank(winner):
                winner = action

    return winner


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

    stack_complete = StackModel.is_complete(stack['id'])
    if stack_complete:
        winner = set_winner(stack)
        StackModel.set_winner(stack['id'], winner['userID'])
        RoundModel.set_turn(round_id, winner['userID'])

    return GameModel.find_by_id(round['gameID'])
