from models.stack import StackModel
from models.round import RoundModel
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

    StackModel.set_winner(stack['id'], winner['userID'])


def clear_stack(event):
    round_id = event['arguments'].get('roundID')
    round = RoundModel.find_by_id(round_id)
    stack = StackModel.find_by_id(round['activeStackID'])

    stack_complete = StackModel.is_complete(stack['id'])

    if stack_complete:
        set_winner(stack)
        new_stack = StackModel.create(round_id, stack['size'])
        RoundModel.set_active_stack(round_id, new_stack['id'])

    return GameModel.find_by_id(round['gameID'])
