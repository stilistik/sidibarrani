from datetime import date
import os
from uuid import uuid4 as uuid
import boto3
from enum import Enum
from boto3.dynamodb.conditions import Key
from utils.utils import get_iso_date_string

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
    def create(round_id, size):
        date_now = get_iso_date_string()
        stack = {
            'id': str(uuid()),
            'gameID': round_id,
            'createdAt': date_now,
            'updatedAt': date_now,
            'size': size,
        }
        stack_table.put_item(
            Item=stack,
        )
        return stack

    @staticmethod
    def find_by_id(stack_id):
        response = stack_table.get_item(
            Key={
                'id': stack_id,
            }
        )
        return response['Item']

    @staticmethod
    def is_complete(stack_id):
        response = stack_table.get_item(
            Key={
                'id': stack_id,
            }
        )
        size = response['Item']['size']
        response = action_table.query(
            IndexName="byStack",
            KeyConditionExpression=Key("stackID").eq(stack_id)
        )
        actions = response['Items']
        return len(actions) >= size

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
