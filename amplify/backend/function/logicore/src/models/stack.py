import os
from uuid import uuid4 as uuid
import boto3
from typing import List
from boto3.dynamodb.conditions import Key
from utils.utils import get_iso_date_string, clear_table
from .action import ActionModel

ddb = boto3.resource('dynamodb')
stack_table_name = os.environ.get("STACKTABLE")
stack_table = ddb.Table(stack_table_name)


class Stack():
    def __init__(self, **kwargs) -> None:
        self.id: str = kwargs['id']
        self.roundID: str = kwargs['roundID']
        self.createdAt: str = kwargs['createdAt']
        self.updatedAt: str = kwargs['updatedAt']
        self.size: int = kwargs['size']
        self.winnerID: str = kwargs.get('winnerID', None)
        self.points: int = kwargs.get('points', None)
        self.isLastStack: bool = kwargs.get('isLastStack', False)


class StackModel:
    @staticmethod
    def create(round_id, size):
        date_now = get_iso_date_string()
        stack = Stack(
            id=str(uuid()),
            roundID=round_id,
            createdAt=date_now,
            updatedAt=date_now,
            size=size,
        )
        stack_table.put_item(Item=vars(stack))
        return stack

    @staticmethod
    def find_by_id(stack_id):
        response = stack_table.get_item(Key={'id': stack_id})
        return Stack(**response['Item'])

    @staticmethod
    def find_by_round(round_id) -> List[Stack]:
        response = stack_table.query(
            IndexName="byRound",
            KeyConditionExpression=Key("roundID").eq(round_id))
        return [Stack(**item) for item in response['Items']]

    @staticmethod
    def is_complete(stack_id) -> bool:
        stack = StackModel.find_by_id(stack_id)
        actions = ActionModel.find_by_stack(stack_id)
        return len(actions) >= stack.size

    @staticmethod
    def set_winner(stack_id, team_user_id) -> Stack:
        date_now = get_iso_date_string()
        response = stack_table.update_item(Key={'id': stack_id},
                                           AttributeUpdates={
                                               'winnerID': {
                                                   'Value': team_user_id,
                                               },
                                               'updatedAt': {
                                                   'Value': date_now
                                               }
                                           },
                                           ReturnValues="ALL_NEW")
        return Stack(**response['Attributes'])

    @staticmethod
    def set_points(stack_id: str, points: int) -> Stack:
        date_now = get_iso_date_string()
        response = stack_table.update_item(Key={'id': stack_id},
                                           AttributeUpdates={
                                               'points': {
                                                   'Value': points,
                                               },
                                               'updatedAt': {
                                                   'Value': date_now
                                               }
                                           },
                                           ReturnValues="ALL_NEW")
        return Stack(**response['Attributes'])

    @staticmethod
    def set_last_stack(stack_id: str) -> Stack:
        date_now = get_iso_date_string()
        response = stack_table.update_item(
            Key={'id': stack_id},
            UpdateExpression=
            'SET isLastStack = :ils, updatedAt = :dt ADD points :inc',
            ExpressionAttributeValues={
                ':ils': True,
                ':inc': 5,
                ':dt': date_now
            },
            ReturnValues="ALL_NEW")
        return Stack(**response['Attributes'])

    @staticmethod
    def clear_data():
        clear_table(stack_table)
