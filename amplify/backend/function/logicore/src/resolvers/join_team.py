from models.team import TeamModel


def join_team(event):
    input = event['arguments'].get('input', {})
    team_id = input.get('teamID')
    user_id = input.get('userID')

    other_team = TeamModel.get_opponent_team(team_id)

    TeamModel.remove_user(team_id, user_id)
    TeamModel.remove_user(other_team['id'], user_id)

    return TeamModel.add_user(team_id, user_id)
