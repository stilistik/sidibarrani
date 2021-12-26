import os
from uuid import uuid4 as uuid
import boto3
from typing import List
from enum import Enum
from boto3.dynamodb.conditions import Key
from utils.utils import get_iso_date_string, clear_table

ddb = boto3.resource('dynamodb')
action_table_name = os.environ.get("ACTIONTABLE")
action_table = ddb.Table(action_table_name)


class ActionType(str, Enum):
    PLAY = 'PLAY',
    BET = 'BET'
    SKIP = 'SKIP'


class Action():
    def __init__(self, **kwargs) -> None:
        self.id: str = kwargs['id']
        self.type: ActionType = ActionType(kwargs['type'])
        self.userID: str = kwargs['userID']
        self.stackID: str = kwargs['stackID']
        self.value: str = kwargs['value']
        self.createdAt: str = kwargs['createdAt']
        self.updatedAt: str = kwargs['updatedAt']

    def get_value(self) -> int:
        return int(self.value.split(':')[-1]) if self.value else 0


class ActionModel:
    @staticmethod
    def create(type: ActionType, user_id, stack_id, value) -> Action:
        date_now = get_iso_date_string()
        action = Action(
            id=str(uuid()),
            type=type,
            userID=user_id,
            stackID=stack_id,
            value=value,
            createdAt=date_now,
            updatedAt=date_now,
        )

        action_table.put_item(Item=vars(action))
        return action

    @staticmethod
    def find_by_stack(stack_id) -> List[Action]:
        response = action_table.query(
            IndexName="byStack",
            KeyConditionExpression=Key("stackID").eq(stack_id))
        return [Action(**item) for item in response['Items']]

    @staticmethod
    def clear_data():
        clear_table(action_table)
