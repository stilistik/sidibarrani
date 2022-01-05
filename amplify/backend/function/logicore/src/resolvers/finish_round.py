import os
from models.game import GameModel
from models.round import RoundModel
from resolvers.end_round import do_end_round

DEV = os.environ.get('ENV') == 'dev'


def finish_round(event):
    if not DEV:
        raise Exception("Function not available.")

    game_id = event['arguments'].get('gameID')
    game = GameModel.find_by_id(game_id)
    round = RoundModel.find_by_id(game.activeRoundID)
    return do_end_round(round)
