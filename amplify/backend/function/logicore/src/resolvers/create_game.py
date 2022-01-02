from models.game import GameModel
from models.team import TeamModel


def create_game(event):
    input = event['arguments'].get('input', {})
    game = GameModel.create(**input)
    return vars(game)
