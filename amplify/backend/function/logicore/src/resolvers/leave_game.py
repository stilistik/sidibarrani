from models.team import TeamModel
from models.team_user import TeamUserModel
from models.game import GameModel, GameStatus


def leave_game(event):
    game_id = event['arguments']['gameID']
    user_id = event['identity']['claims'].get('sub')

    teams = TeamModel.find_by_game(game_id)

    team1users = TeamUserModel.find_by_team(teams[0].id)
    team2users = TeamUserModel.find_by_team(teams[1].id)

    found_in_team_1 = next(
        (True for team_user in team1users if team_user.userID == user_id),
        False)
    if found_in_team_1:
        TeamUserModel.delete(teams[0].id, user_id)

    found_in_team_2 = next(
        (True for team_user in team2users if team_user.userID == user_id),
        False)
    if found_in_team_2:
        TeamUserModel.delete(teams[1].id, user_id)

    all_users_in_game = TeamUserModel.find_by_game(game_id)
    if len(all_users_in_game) == 0:
        GameModel.set_status(game_id, GameStatus.CREATED)

    return vars(GameModel.find_by_id(game_id))
