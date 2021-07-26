import os
from uuid import uuid4 as uuid
import boto3
from enum import Enum
from boto3.dynamodb.conditions import Key
from utils.utils import get_iso_date_string, get_random_name

ddb = boto3.resource('dynamodb')
round_table_name = os.environ.get("ROUNDTABLE")
round_table = ddb.Table(round_table_name)


class RoundStatus(Enum):
    DEAL = 'DEAL',
    BET = 'BET',
    PLAY = 'PLAY'


class RoundModel:
    @staticmethod
    def create(game_id):
        date_now = get_iso_date_string()
        round = {
            'id': str(uuid()),
            'gameID': game_id,
            'status': RoundStatus.DEAL.name,
            'createdAt': date_now,
            'updatedAt': date_now
        }
        round_table.put_item(
            Item=round,
        )
        return round

    @staticmethod
    def set_round_status(round_id, status: RoundStatus):
        date_now = get_iso_date_string()
        response = round_table.update_item(
            Key={
                'id': round_id,
            },
            AttributeUpdates={
                'status': {
                    'Value': status
                },
                'updatedAt': {
                    'Value': date_now
                }
            },
            ReturnValues="ALL_NEW"
        )
        return response['Attributes']

    @staticmethod
    def set_active_stack(round_id, stack_id):
        date_now = get_iso_date_string()
        response = round_table.update_item(
            Key={
                'id': round_id,
            },
            AttributeUpdates={
                'activeStackID': {
                    'Value': stack_id
                },
                'updatedAt': {
                    'Value': date_now
                }
            },
            ReturnValues="ALL_NEW"
        )
        return response['Attributes']
