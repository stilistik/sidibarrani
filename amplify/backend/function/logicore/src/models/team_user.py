import os
from uuid import uuid4 as uuid
import boto3
from boto3.dynamodb.conditions import Key
from utils.utils import get_iso_date_string, get_random_name, clear_table
from typing import List
from .team import TeamModel

ddb = boto3.resource('dynamodb')
teamuser_table_name = os.environ.get("TEAMUSERTABLE")
teamuser_table = ddb.Table(teamuser_table_name)


class TeamUser():
    def __init__(self, **kwargs) -> None:
        self.id: str = kwargs['id']
        self.teamID: str = kwargs['teamID']
        self.userID: str = kwargs['userID']
        self.createdAt: str = kwargs['createdAt']
        self.updatedAt: str = kwargs['updatedAt']


class TeamUserModel:
    @staticmethod
    def create(team_id, user_id):
        date_now = get_iso_date_string()
        team_user = TeamUser(
            id=str(uuid()),
            teamID=team_id,
            userID=user_id,
            createdAt=date_now,
            updatedAt=date_now,
        )
        teamuser_table.put_item(Item=vars(team_user))
        return team_user

    @staticmethod
    def delete(team_id, user_id):
        team_users = TeamUserModel.find_by_team(team_id)
        team_user_to_delete = next(
            (team_user
             for team_user in team_users if team_user.userID == user_id), None)

        if team_user_to_delete:
            teamuser_table.delete_item(Key={'id': team_user_to_delete.id})
            return True

        return False

    @staticmethod
    def find_by_team(team_id: str) -> List[TeamUser]:
        response = teamuser_table.query(
            IndexName="byTeam",
            KeyConditionExpression=Key("teamID").eq(team_id))

        return [TeamUser(**item) for item in response['Items']]

    @staticmethod
    def find_by_id(team_user_id: str) -> TeamUser:
        response = teamuser_table.get_item(Key={
            'id': team_user_id,
        }, )
        return TeamUser(**response['Item']) if response.get('Item') else None

    @staticmethod
    def find_by_game(game_id: str) -> List[TeamUser]:
        game_team_users = []
        teams = TeamModel.find_by_game(game_id)
        for team in teams:
            team_users = TeamUserModel.find_by_team(team.id)
            game_team_users += team_users
        return game_team_users

    @staticmethod
    def find_by_game_user(game_id: str, user_id: str):
        team_users = TeamUserModel.find_by_game(game_id)
        return next(team_user for team_user in team_users
                    if team_user.userID == user_id)

    @staticmethod
    def clear_data():
        clear_table(teamuser_table)
