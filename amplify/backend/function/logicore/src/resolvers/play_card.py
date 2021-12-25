from models.team import TeamModel
from models.stack import StackModel, Stack
from models.action import ActionModel, ActionType, Action
from models.round import RoundModel, RoundMode, RoundStatus, Round
from models.hand import HandModel
from models.game import GameModel


def get_rank(value, is_trump=False):
    rank_str = value[0:-1]
    if rank_str == '9':
        if is_trump:
            return 50
        else:
            return 9
    if rank_str == 'J':
        if is_trump:
            return 100
        else:
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


def get_winner_top_down(actions):
    suit_played = get_suit(actions[0]['value'])
    winner = actions[0]

    for action in actions:
        suit = get_suit(action['value'])
        rank = get_rank(action['value'])

        if suit == suit_played:
            if rank > get_rank(winner['value']):
                winner = action

    return winner


def get_winner_bottom_up(actions):
    suit_played = get_suit(actions[0]['value'])
    winner = actions[0]

    for action in actions:
        suit = get_suit(action['value'])
        rank = get_rank(action['value'])

        if suit == suit_played:
            if rank < get_rank(winner['value']):
                winner = action

    return winner


def get_winner_trump(actions, trump_suit):
    suit_played = get_suit(actions[0]['value'])
    winner = actions[0]

    for action in actions:
        suit = get_suit(action['value'])

        if suit == trump_suit:
            rank = get_rank(action['value'], is_trump=True)
            if get_suit(winner['value']) == trump_suit:
                if rank > get_rank(winner['value'], is_trump=True):
                    winner = action
            else:
                winner = action

        elif suit == suit_played and get_suit(winner['value']) != trump_suit:
            rank = get_rank(action['value'])
            if rank > get_rank(winner['value']):
                winner = action

    return winner


def set_winner(round: Round, stack: Stack):
    actions = ActionModel.find_by_stack(stack.id)
    mode = round.mode

    win_action = None
    if mode == RoundMode.TOP_DOWN:
        win_action = get_winner_top_down(actions)
    elif mode == RoundMode.BOTTOM_UP:
        win_action = get_winner_bottom_up(actions)
    elif mode == RoundMode.TRUMP_C:
        win_action = get_winner_trump(actions, 'C')
    elif mode == RoundMode.TRUMP_D:
        win_action = get_winner_trump(actions, 'D')
    elif mode == RoundMode.TRUMP_H:
        win_action = get_winner_trump(actions, 'H')
    elif mode == RoundMode.TRUMP_S:
        win_action = get_winner_trump(actions, 'S')
    elif mode == RoundMode.SLALOM_TOP:
        win_action = get_winner_top_down(actions)
        RoundModel.set_mode(round.id, RoundMode.SLALOM_BOTTOM)
    elif mode == RoundMode.SLALOM_BOTTOM:
        win_action = get_winner_bottom_up(actions)
        RoundModel.set_mode(round.id, RoundMode.SLALOM_TOP)
    else:
        raise Exception('Unsupported round mode {}'.format(mode))

    team_users = TeamModel.find_team_users_by_game(round.gameID)
    winner_team_user = next((team_user for team_user in team_users
                             if team_user['userID'] == win_action.userID),
                            None)

    StackModel.set_winner(stack.id, winner_team_user['id'])
    RoundModel.set_turn(round.id, win_action.userID)


def has_suit(hand, suit):
    hand_suits = list(map(lambda x: get_suit(x), hand['cards']))
    if suit in hand_suits:
        return True
    else:
        return False


def is_trump(round: Round, value):
    mode = round.mode
    suit = get_suit(value)
    if mode == RoundMode.TRUMP_C.name and suit == 'C':
        return True
    elif mode == RoundMode.TRUMP_D.name and suit == 'D':
        return True
    elif mode == RoundMode.TRUMP_H.name and suit == 'H':
        return True
    elif mode == RoundMode.TRUMP_S.name and suit == 'S':
        return True
    else:
        return False


def validate_card_played(stack_id, round, hand, value):
    actions = StackModel.get_actions(stack_id)

    if is_trump(round, value):
        return True

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

    if round.locked is True:
        raise Exception("Concurrent update exception")

    try:
        round = RoundModel.lock(round_id)

        stack = StackModel.find_by_id(round.activeStackID)
        hands = HandModel.find_by_round(round_id)
        hand = next(hand for hand in hands if hand['userID'] == user_id)

        if round.status != RoundStatus.PLAY:
            raise Exception("You cannot play cards during the bidding stage")

        if round.turn != user_id:
            raise Exception("It's not your turn to play")

        if (StackModel.is_complete(stack['id'])):
            new_stack = StackModel.create(round_id, stack['size'])
            RoundModel.set_active_stack(round_id, new_stack['id'])
            stack = new_stack

        validate_card_played(stack['id'], round, hand, value)

        HandModel.remove_card(hand['id'], value)
        RoundModel.next_turn(round_id)
        StackModel.add_action(ActionType.PLAY.name, user_id, stack['id'],
                              value)

        stack_complete = StackModel.is_complete(stack['id'])
        if stack_complete:
            set_winner(round, stack)

        return GameModel.find_by_id(round.gameID)

    finally:
        RoundModel.unlock(round_id)
