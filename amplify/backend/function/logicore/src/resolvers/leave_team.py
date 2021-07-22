from models.team import TeamModel


def leave_team(event):
    input = event['arguments'].get('input', {})
    team_id = input.get('teamID')
    user_id = input.get('userID')
    return TeamModel.remove_user(team_id, user_id)
