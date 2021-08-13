from models.game import GameModel
from models.round import RoundModel, RoundStatus


def end_round(event):
    round_id = event['arguments'].get('roundID')
    round = RoundModel.set_round_status(round_id, RoundStatus.ENDED)
    return GameModel.find_by_id(round['gameID'])
