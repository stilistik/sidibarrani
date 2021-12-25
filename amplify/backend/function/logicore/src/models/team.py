import os
from uuid import uuid4 as uuid
import boto3
from boto3.dynamodb.conditions import Key
from utils.utils import get_iso_date_string, get_random_name, clear_table
from typing import List

ddb = boto3.resource('dynamodb')
team_table_name = os.environ.get('TEAMTABLE')
team_table = ddb.Table(team_table_name)


class Team():
    def __init__(self, **kwargs) -> None:
        self.id: str = kwargs['id']
        self.name: str = kwargs['name']
        self.gameID: str = kwargs['gameID']
        self.createdAt: str = kwargs['createdAt']
        self.updatedAt: str = kwargs['updatedAt']
        self.color: str = kwargs['color']


class TeamModel:
    @staticmethod
    def create(game_id, name=None, color="red") -> Team:
        date_now = get_iso_date_string()
        name = get_random_name() if name is None else name
        team = Team(
            id=str(uuid()),
            name=name,
            gameID=game_id,
            createdAt=date_now,
            updatedAt=date_now,
            color=color,
        )
        team_table.put_item(Item=vars(team))
        return team

    @staticmethod
    def find_by_id(team_id: str) -> Team:
        response = team_table.get_item(Key={
            'id': team_id,
        })
        return Team(**response['Item'])

    @staticmethod
    def find_by_game(game_id: str) -> List[Team]:
        response = team_table.query(
            IndexName="byGame",
            KeyConditionExpression=Key("gameID").eq(game_id))
        return [Team(**item) for item in response['Items']]

    @staticmethod
    def get_opponent_team(team_id) -> Team:
        team = TeamModel.find_by_id(team_id)
        teams = TeamModel.find_by_game(team.gameID)
        return next((team for team in teams if team.id != team_id), None)

    @staticmethod
    def clear_data():
        clear_table(team_table)
