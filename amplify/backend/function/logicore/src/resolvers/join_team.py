from models.game import GameModel, GameStatus
from models.team import TeamModel, Team
from models.team_user import TeamUserModel
from typing import List


def get_or_create_team(user_ids: List[str]) -> Team:
    team_id = TeamModel.get_team_id_from_user_ids(user_ids)
    team = TeamModel.find_by_id(team_id)
    if team:
        return team
    else:
        team = TeamModel.create(team_id)
        for user_id in user_ids:
            TeamUserModel.create(team.id, user_id)
        return team


def join_team(event):
    game_id = event['arguments']['gameID']
    team_key = event['arguments']['teamKey']
    user_id = event['identity']['claims'].get('sub')

    game = GameModel.find_by_id(game_id)

    if team_key == 'A':
        team_id = game.teamAID
        opponent_team_key = 'B'
        opponent_team_id = game.teamBID
    elif team_key == 'B':
        team_id = game.teamBID
        opponent_team_key = 'A'
        opponent_team_id = game.teamAID
    else:
        raise Exception(f"Invalid team key {team_key}. Must be 'A' or 'B'")

    user_ids = [user_id]
    if team_id:
        # game has a team registered
        team_users = TeamUserModel.find_by_team(team_id)
        for team_user in team_users:
            user_ids.append(team_user.userID)

        team = get_or_create_team(user_ids)
        GameModel.set_team(game_id, team.id, f'team{team_key}ID')

    if opponent_team_id:
        team_users = TeamUserModel.find_by_team(opponent_team_id)
        found_in_opponent_team = next((team_user for team_user in team_users
                                       if team_user.userID == user_id))
        if found_in_opponent_team:
            user_ids = [
                team_user.userID for team_user in team_users
                if team_user.userID != user_id
            ]
            opponent_team = get_or_create_team(user_ids)
            GameModel.set_team(game_id, opponent_team.id,
                               f'team{opponent_team_key}ID')

    return vars(GameModel.set_status(game_id, GameStatus.WAITING))
