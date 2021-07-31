from models.team import TeamModel
from models.stack import StackModel, ActionType
from models.round import RoundModel
from models.hand import HandModel
from models.game import GameModel


def get_rank(value):
    rank_str = value[0:-1]
    if rank_str == 'J':
        return 11
    elif rank_str == 'Q':
        return 12
    elif rank_str == 'K':
        return 13
    elif rank_str == 'A':
        return 14
    else:
        return int(rank_str)


def get_suit(value):
    return value[-1]


def set_winner(round, stack):
    actions = StackModel.get_actions(stack['id'])
    suit_played = get_suit(actions[0]['value'])
    winner = actions[0]

    for action in actions:
        suit = get_suit(action['value'])
        rank = get_rank(action['value'])

        if suit == suit_played:
            if rank > get_rank(winner['value']):
                winner = action

    team_users = TeamModel.find_team_users_by_game(round['gameID'])
    winner_team_user = next(
        (team_user for team_user in team_users if team_user['userID'] == winner['userID']), None)

    StackModel.set_winner(stack['id'], winner_team_user['id'])
    RoundModel.set_turn(round['id'], winner['userID'])


def has_suit(hand, suit):
    hand_suits = list(map(lambda x: get_suit(x), hand['cards']))
    if suit in hand_suits:
        return True
    else:
        return False


def validate_card_played(stack_id, hand, value):
    actions = StackModel.get_actions(stack_id)
    first_played = actions[0]['value'] if len(actions) > 0 else None
    if first_played:
        if get_suit(first_played) != get_suit(value):
            if has_suit(hand, get_suit(first_played)):
                raise Exception("You must play the correct suit")


def play_card(event):
    round_id = event['arguments'].get('roundID')
    value = event['arguments'].get('value')
    user_id = event['identity']['claims'].get('sub')

    round = RoundModel.find_by_id(round_id)
    stack = StackModel.find_by_id(round['activeStackID'])
    hands = HandModel.find_by_round(round_id)
    hand = next(hand for hand in hands if hand['userID'] == user_id)

    if round['turn'] != user_id:
        raise Exception("It's not your turn to play")

    if (StackModel.is_complete(stack['id'])):
        raise Exception("Stack is complete. Please clear the current stack")

    validate_card_played(stack['id'], hand, value)

    HandModel.remove_card(hand['id'], value)
    RoundModel.next_turn(round_id)
    StackModel.add_action(ActionType.PLAY.name, user_id, stack['id'], value)

    stack_complete = StackModel.is_complete(stack['id'])
    if stack_complete:
        set_winner(round, stack)

    return GameModel.find_by_id(round['gameID'])
