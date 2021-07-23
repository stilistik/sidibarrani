import os
from uuid import uuid4 as uuid
import boto3
from boto3.dynamodb.conditions import Key
from utils.utils import get_iso_date_string, get_random_name

ddb = boto3.resource('dynamodb')
teamuser_table_name = os.environ.get("TEAMUSERTABLE")
team_table_name = os.environ.get('TEAMTABLE')
team_table = ddb.Table(team_table_name)
teamuser_table = ddb.Table(teamuser_table_name)


class TeamModel:
    @staticmethod
    def create(game_id, name=get_random_name(), color="red"):
        date_now = get_iso_date_string()

        team = {
            'id': str(uuid()),
            'name': name,
            'gameID': game_id,
            'createdAt': date_now,
            'updatedAt': date_now,
            'color': color,
            '__typename': 'Team'
        }

        team_table.put_item(
            Item=team
        )

        return team

    @staticmethod
    def remove_user(team_id, user_id):
        response = teamuser_table.query(
            IndexName="byTeam",
            KeyConditionExpression=Key("teamID").eq(team_id)
        )

        team_users = response['Items']

        found_in_team = next(
            (item for item in team_users if item['userID'] == user_id), None)

        if found_in_team:
            teamuser_table.delete_item(
                Key={
                    'id': found_in_team['id']
                }
            )
            return True

        return False

    @staticmethod
    def add_user(team_id, user_id):
        date_now = get_iso_date_string()
        team_user = {
            'id': str(uuid()),
            'teamID': team_id,
            'userID': user_id,
            'createdAt': date_now,
            'updatedAt': date_now,
        }

        teamuser_table.put_item(
            Item=team_user
        )

        return team_user

    @staticmethod
    def get_teams(game_id):
        response = team_table.query(
            IndexName="byGame",
            KeyConditionExpression=Key("gameID").eq(game_id)
        )
        return response['Items']

    @staticmethod
    def get_team_users(team_id):
        response = teamuser_table.query(
            IndexName="byTeam",
            KeyConditionExpression=Key("teamID").eq(team_id)
        )
        return response['Items']

    @staticmethod
    def get_opponent_team(team_id):
        response = team_table.get_item(
            Key={
                'id':  team_id
            }
        )
        game_id = response['Item']['gameID']
        response = team_table.query(
            IndexName="byGame",
            KeyConditionExpression=Key("gameID").eq(game_id)
        )
        game_teams = response['Items']

        return next((team for team in game_teams if team['id'] != team_id), None)
