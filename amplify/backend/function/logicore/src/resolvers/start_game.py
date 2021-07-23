from models.game import GameModel, GameStatus
from models.team import TeamModel
from models.round import RoundModel


def validate_team_config(game_id):
    teams = TeamModel.get_teams(game_id)

    if len(teams) != 2:
        raise Exception("Game did not have 2 teams")

    team1users = TeamModel.get_team_users(teams[0]['id'])
    team2users = TeamModel.get_team_users(teams[1]['id'])

    if len(team1users) != len(team2users):
        raise Exception("Teams must have the same number of players")

    return


def validate_game_status(game_id):
    game = GameModel.find_by_id(game_id)

    if game['status'] != GameStatus.CREATED:
        raise Exception("Game already started")


def start_game(event):
    game_id = event['arguments'].get('id')

    validate_game_status(game_id)
    validate_team_config(game_id)

    round = RoundModel.create(game_id)
    GameModel.set_active_round(game_id, round['id'])

    return GameModel.start(game_id)
