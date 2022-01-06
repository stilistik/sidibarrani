import os
from uuid import UUID, uuid4, uuid5, NAMESPACE_DNS
import boto3
from boto3.dynamodb.conditions import Key
from utils.utils import get_iso_date_string, get_random_name, clear_table
from typing import List
from .game import GameModel

ddb = boto3.resource('dynamodb')
team_table_name = os.environ.get('TEAMTABLE')
team_table = ddb.Table(team_table_name)

uuid_namespace = UUID('eeade8cc-2c08-4df8-92f7-664a29f52375')


class Team():
    def __init__(self, **kwargs) -> None:
        self.id: str = kwargs['id']
        self.name: str = kwargs['name']
        self.createdAt: str = kwargs['createdAt']
        self.updatedAt: str = kwargs['updatedAt']


class TeamModel:
    @staticmethod
    def get_team_id_from_user_ids(user_ids: List[str]) -> str:
        return str(uuid5(uuid_namespace, ''.join(user_ids)))

    @staticmethod
    def create(id: str = str(uuid4()), name: str = get_random_name()) -> Team:
        date_now = get_iso_date_string()
        team = Team(
            id=id,
            name=name,
            createdAt=date_now,
            updatedAt=date_now,
        )
        team_table.put_item(Item=vars(team))
        return team

    @staticmethod
    def find_by_id(team_id: str) -> Team:
        response = team_table.get_item(Key={
            'id': team_id,
        })
        return Team(**response['Item']) if response.get('Item') else None

    @staticmethod
    def find_by_game(game_id: str) -> List[Team]:
        game = GameModel.find_by_id(game_id)
        team_a = TeamModel.find_by_id(game.teamAID)
        team_b = TeamModel.find_by_id(game.teamBID)
        return [team_a, team_b]

    @staticmethod
    def set_name(team_id: str, name: str) -> Team:
        date_now = get_iso_date_string()
        response = team_table.update_item(Key={'id': team_id},
                                          AttributeUpdates={
                                              'name': {
                                                  'Value': name
                                              },
                                              'updatedAt': {
                                                  'Value': date_now
                                              }
                                          },
                                          ReturnValues="ALL_NEW")
        return Team(**response['Attributes'])

    @staticmethod
    def clear_data():
        clear_table(team_table)
