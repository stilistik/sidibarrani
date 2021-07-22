from models.game import GameModel
from models.team import TeamModel


def validate_team_config(game_id):
    teams = GameModel.get_teams(game_id)

    if len(teams) != 2:
        raise Exception("Game did not have 2 teams")

    team1users = TeamModel.get_team_users(teams[0]['id'])
    team2users = TeamModel.get_team_users(teams[1]['id'])

    if len(team1users) != len(team2users):
        raise Exception("Teams must have the same number of players")

    return


def start_game(event):
    gameID = event['arguments'].get('id')

    validate_team_config(gameID)

    return GameModel.start(gameID)
