from models.game import GameModel, GameStatus
from models.team import TeamModel
from models.team_user import TeamUserModel


def join_team(event):
    team_id = event['arguments']['teamID']
    user_id = event['identity']['claims'].get('sub')

    other_team = TeamModel.get_opponent_team(team_id)

    TeamUserModel.delete(team_id, user_id)
    TeamUserModel.delete(other_team.id, user_id)

    TeamUserModel.create(team_id, user_id)

    return vars(GameModel.set_status(other_team.gameID, GameStatus.WAITING))
