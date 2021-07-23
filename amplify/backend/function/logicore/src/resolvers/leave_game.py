from models.team import TeamModel
from models.game import GameModel


def leave_game(event):
    input = event['arguments'].get('input', {})
    game_id = input.get('gameID')
    user_id = input.get('userID')

    teams = GameModel.get_teams(game_id)

    team1users = TeamModel.get_team_users(teams[0]['id'])
    team2users = TeamModel.get_team_users(teams[1]['id'])

    found_in_team_1 = next(
        (True for team_user in team1users if team_user['userID'] == user_id), False)
    if found_in_team_1:
        return TeamModel.remove_user(teams[0]['id'], user_id)

    found_in_team_2 = next(
        (True for team_user in team2users if team_user['userID'] == user_id), False)
    if found_in_team_2:
        return TeamModel.remove_user(teams[1]['id'], user_id)

    return False
