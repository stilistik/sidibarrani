import os
from uuid import uuid4 as uuid
import boto3
from enum import Enum
from boto3.dynamodb.conditions import Key
from utils.utils import get_iso_date_string, get_random_name

ddb = boto3.resource('dynamodb')
game_table_name = os.environ.get("GAMETABLE")
game_table = ddb.Table(game_table_name)


class GameStatus(Enum):
    CREATED = 'CREATED',
    STARTED = 'STARTED',
    ENDED = 'ENDED'


class GameModel:
    @staticmethod
    def create(name=get_random_name(), private=False):
        date_now = get_iso_date_string()

        game = {
            'id': str(uuid()),
            'name': name,
            'status': 'CREATED',
            'private': private,
            'createdAt': date_now,
            'updatedAt': date_now,
            '__typename': 'Game'
        }

        game_table.put_item(
            Item=game
        )

        return game

    @staticmethod
    def start(game_id):
        date_now = get_iso_date_string()
        response = game_table.update_item(
            Key={
                'id': game_id
            },
            AttributeUpdates={
                'status': {
                    'Value': "STARTED"
                },
                'updatedAt': {
                    'Value': date_now
                },
            },
            ReturnValues="ALL_NEW"
        )
        return response['Attributes']

    @staticmethod
    def set_active_round(game_id, round_id):
        date_now = get_iso_date_string()
        response = game_table.update_item(
            Key={
                'id': game_id
            },
            AttributeUpdates={
                'activeRoundID': {
                    'Value': round_id
                },
                'updatedAt': {
                    'Value': date_now
                },
            },
            ReturnValues="ALL_NEW"
        )
        return response['Attributes']

    @staticmethod
    def find_by_id(game_id):
        response = game_table.get_item(
            Key={
                'id': game_id
            }
        )
        return response['Item']
