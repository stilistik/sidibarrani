from models.round import RoundModel
from models.stack import StackModel, ActionType
from models.game import GameModel


def place_bet(event):
    round_id = event['arguments'].get('roundID')
    value = event['arguments'].get('value')
    user_id = event['identity']['claims'].get('sub')

    round = RoundModel.find_by_id(round_id)
    stack = StackModel.find_by_id(round['activeStackID'])

    if round['turn'] != user_id:
        raise Exception("It's not your turn to place a bet")

    StackModel.add_action(ActionType.BET.name, user_id, stack['id'], value)
    RoundModel.next_turn(round_id)

    return GameModel.find_by_id(round['gameID'])
