from models.round import RoundModel, RoundStatus
from models.stack import StackModel, ActionType
from models.game import GameModel
from models.team import TeamModel


def round_to_base(x, base=10):
    return base * round(x/base)


def place_bet(event):
    round_id = event['arguments'].get('roundID')
    value = event['arguments'].get('value')
    user_id = event['identity']['claims'].get('sub')

    round = RoundModel.find_by_id(round_id)
    stack = StackModel.find_by_id(round['activeStackID'])

    if round['turn'] != user_id:
        raise Exception("It's not your turn to place a bet")

    [mode, amount_str] = value.split(":")

    if not mode:
        raise Exception("Mode must be defined")
    if not amount_str:
        raise Exception("Bet amount must be defined")

    amount = int(amount_str)

    if amount >= 157:
        amount = 157
        StackModel.add_action(ActionType.BET.name, user_id,
                              stack['id'], '{mode}:{amount}'.format(mode=mode, amount=amount))
        new_stack = StackModel.create(round_id, stack['size'])
        RoundModel.set_active_stack(round_id, new_stack['id'])
        RoundModel.set_round_status(round_id, RoundStatus.PLAY)
    else:
        amount = round_to_base(amount, 10)
        StackModel.add_action(ActionType.BET.name, user_id,
                              stack['id'], '{mode}:{amount}'.format(mode=mode, amount=amount))
        RoundModel.next_turn(round_id)

    return GameModel.find_by_id(round['gameID'])


def skip_bet(event):
    round_id = event['arguments'].get('roundID')
    user_id = event['identity']['claims'].get('sub')

    round = RoundModel.find_by_id(round_id)
    stack = StackModel.find_by_id(round['activeStackID'])
    game_id = round['gameID']

    if round['turn'] != user_id:
        raise Exception("It's not your turn to place a bet")

    StackModel.add_action(ActionType.SKIP.name, user_id, stack['id'], None)
    RoundModel.next_turn(round_id)

    actions = StackModel.get_actions(stack['id'])
    game_user_count = len(TeamModel.find_team_users_by_game(game_id))

    last_actions = actions[-game_user_count:]

    if all(action['type'] == ActionType.SKIP.name for action in last_actions):
        RoundModel.set_round_status(round_id, RoundStatus.PLAY)
        new_stack = StackModel.create(round_id, stack['size'])
        RoundModel.set_active_stack(round_id, new_stack['id'])

    return GameModel.find_by_id(game_id)
