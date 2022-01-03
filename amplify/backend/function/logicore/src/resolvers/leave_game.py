from resolvers.join_team import get_or_create_team
from models.team import TeamModel
from models.team_user import TeamUserModel
from models.game import GameModel, GameStatus


def leave_game(event):
    game_id = event['arguments']['gameID']
    user_id = event['identity']['claims'].get('sub')

    game = GameModel.find_by_id(game_id)
    team_a = TeamModel.find_by_id(game.teamAID) if game.teamAID else None
    team_b = TeamModel.find_by_id(game.teamBID) if game.teamBID else None

    team_a_users = TeamUserModel.find_by_team(team_a.id) if team_a else []
    team_b_users = TeamUserModel.find_by_team(team_b.id) if team_b else []

    found_in_team_a = next(
        (True for team_user in team_a_users if team_user.userID == user_id),
        False)
    if found_in_team_a:
        rest_user_ids = [
            team_user.userID for team_user in team_a_users
            if team_user.userID != user_id
        ]
        if len(rest_user_ids):
            team = get_or_create_team(rest_user_ids)
            game = GameModel.set_team(game_id, team.id, 'teamAID')
        else:
            game = GameModel.set_team(game_id, None, 'teamAID')

    found_in_team_b = next(
        (True for team_user in team_b_users if team_user.userID == user_id),
        False)
    if found_in_team_b:
        rest_user_ids = [
            team_user.userID for team_user in team_b_users
            if team_user.userID != user_id
        ]
        if len(rest_user_ids):
            team = get_or_create_team(rest_user_ids)
            game = GameModel.set_team(game_id, team.id, 'teamBID')
        else:
            game = GameModel.set_team(game_id, None, 'teamBID')

    if not game.teamAID and not game.teamBID:
        game = GameModel.set_status(game_id, GameStatus.CREATED)

    return vars(GameModel.find_by_id(game_id))
