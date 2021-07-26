from datetime import date
import os
from uuid import uuid4 as uuid
import boto3
from enum import Enum
from boto3.dynamodb.conditions import Key
from utils.utils import get_iso_date_string, get_random_name

ddb = boto3.resource('dynamodb')
stack_table_name = os.environ.get("STACKTABLE")
action_table_name = os.environ.get("ACTIONTABLE")
stack_table = ddb.Table(stack_table_name)
action_table = ddb.Table(action_table_name)


class ActionType(Enum):
    PLAY = 'PLAY',
    BET = 'BET'
    SKIP = 'SKIP'


class StackModel:
    @staticmethod
    def create(round_id):
        date_now = get_iso_date_string()
        round = {
            'id': str(uuid()),
            'gameID': round_id,
            'createdAt': date_now,
            'updatedAt': date_now
        }
        stack_table.put_item(
            Item=round,
        )
        return round

    @staticmethod
    def add_action(type: ActionType, user_id, stack_id, value):
        date_now = get_iso_date_string()
        action = {
            'id': str(uuid()),
            'type': type,
            'userID': user_id,
            'stackID': stack_id,
            'value': value,
            'createdAt': date_now,
            'updatedAt': date_now,
        }

        action_table.put_item(
            Item=action
        )

        return action
