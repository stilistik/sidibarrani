from models.game import GameModel
from models.team import TeamModel


def create_game(event):
    input = event['arguments'].get('input', {})

    game = GameModel.create(**input)

    TeamModel.create(game.id, input.get('team1name'),
                     input.get('team1color', 'red'))

    TeamModel.create(game.id, input.get('team2name'),
                     input.get('team2color', 'blue'))

    return game
