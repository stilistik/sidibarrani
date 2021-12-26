from typing import Dict
from models.seqnum import SequenceNumberModel
import os
from uuid import uuid4 as uuid
import boto3
from enum import Enum
from boto3.dynamodb.conditions import Key
from utils.utils import get_iso_date_string, get_random_name, clear_table

ddb = boto3.resource('dynamodb')
game_table_name = os.environ.get("GAMETABLE")
game_table = ddb.Table(game_table_name)


class GameStatus(str, Enum):
    CREATED = 'CREATED',
    STARTED = 'STARTED',
    ENDED = 'ENDED'


class GameMode(str, Enum):
    DUO = 'DUO',
    QUATTRO = 'QUATTRO'


class Game():
    def __init__(self, **kwargs) -> None:
        self.id: str = kwargs['id']
        self.name: str = kwargs['name']
        self.nameLowerCase: str = self.name.lower()
        self.status: GameStatus = GameStatus(kwargs['status'])
        self.mode: GameMode = GameMode(kwargs['mode'])
        self.private: bool = kwargs['private']
        self.createdAt: str = kwargs['createdAt']
        self.updatedAt: str = kwargs['updatedAt']
        self.index: int = int(kwargs['index'])
        self.activeRoundID: str = kwargs.get('activeRoundID', None)


class GameModel:
    @staticmethod
    def create(**kwargs) -> Game:
        date_now = get_iso_date_string()

        game = Game(id=str(uuid()),
                    name=kwargs.get('name', get_random_name()),
                    mode=kwargs.get('mode', GameMode.DUO),
                    status=GameStatus.CREATED,
                    private=kwargs.get('private', False),
                    createdAt=date_now,
                    updatedAt=date_now,
                    index=SequenceNumberModel.get_index('Game'))

        game_table.put_item(Item=vars(game))

        return game

    @staticmethod
    def start(game_id) -> Game:
        date_now = get_iso_date_string()
        response = game_table.update_item(Key={'id': game_id},
                                          AttributeUpdates={
                                              'status': {
                                                  'Value': "STARTED"
                                              },
                                              'updatedAt': {
                                                  'Value': date_now
                                              },
                                          },
                                          ReturnValues="ALL_NEW")
        return Game(**response['Attributes'])

    @staticmethod
    def set_active_round(game_id, round_id) -> Game:
        date_now = get_iso_date_string()
        response = game_table.update_item(Key={'id': game_id},
                                          AttributeUpdates={
                                              'activeRoundID': {
                                                  'Value': round_id
                                              },
                                              'updatedAt': {
                                                  'Value': date_now
                                              },
                                          },
                                          ReturnValues="ALL_NEW")
        return Game(**response['Attributes'])

    @staticmethod
    def find_by_id(game_id) -> Game:
        response = game_table.get_item(Key={'id': game_id})
        return Game(**response['Item'])

    @staticmethod
    def clear_data():
        clear_table(game_table)
