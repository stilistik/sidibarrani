import os
from models.game import GameModel
from models.round import RoundModel, RoundStatus

DEV = os.environ.get('ENV') == 'dev'


def finish_round(event):
    if not DEV:
        raise Exception("Function not available.")

    game_id = event['arguments'].get('gameID')
    game = GameModel.find_by_id(game_id)

    result = {
        game.teamAID: 100,
        game.teamBID: 50,
    }

    RoundModel.set_result(game.activeRoundID, result)
    RoundModel.set_round_status(game.activeRoundID, RoundStatus.ENDED)
    return vars(GameModel.set_result(game_id, result))