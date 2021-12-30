import os
from uuid import uuid4 as uuid
import boto3
from enum import Enum
from boto3.dynamodb.conditions import Key, Attr
from utils.utils import get_iso_date_string, clear_table
from typing import List
from botocore.exceptions import ClientError

ddb = boto3.resource('dynamodb')
round_table_name = os.environ.get("ROUNDTABLE")
round_table = ddb.Table(round_table_name)


class RoundStatus(str, Enum):
    BET = 'BET',
    PLAY = 'PLAY',
    ENDED = 'ENDED'


class RoundMode(str, Enum):
    TOP_DOWN = 'TOP_DOWN',
    BOTTOM_UP = 'BOTTOM_UP',
    SLALOM_TOP = 'SLALOM_TOP',
    SLALOM_BOTTOM = 'SLALOM_BOTTOM',
    TRUMP_D = 'TRUMP_D',
    TRUMP_H = 'TRUMP_H',
    TRUMP_C = 'TRUMP_C',
    TRUMP_S = 'TRUMP_S',


class Round():
    def __init__(self, **kwargs) -> None:
        self.id: str = kwargs['id']
        self.gameID: str = kwargs['gameID']
        self.status: RoundStatus = RoundStatus(kwargs['status'])
        self.stackCount: int = int(kwargs['stackCount'])
        self.createdAt: str = kwargs['createdAt']
        self.updatedAt: str = kwargs['updatedAt']
        self.activeStackID: str = kwargs.get('activeStackID', None)
        self.turn: str = kwargs.get('turn', None)
        self.mode: RoundMode = RoundMode(
            kwargs['mode']) if kwargs.get('mode') is not None else None
        self.betPoints: int = kwargs.get('betPoints', None)
        self.result: dict = kwargs.get('result', None)
        self.turnSequence: List[str] = kwargs.get('turnSequence', [])


class RoundModel:
    @staticmethod
    def create(game_id, stack_count=9) -> Round:
        date_now = get_iso_date_string()
        round = Round(
            id=str(uuid()),
            gameID=game_id,
            status=RoundStatus.BET,
            stackCount=stack_count,
            createdAt=date_now,
            updatedAt=date_now,
        )

        round_table.put_item(Item=vars(round))
        return round

    @staticmethod
    def find_by_id(round_id) -> Round:
        response = round_table.get_item(Key={
            'id': round_id,
        })
        return Round(**response['Item'])

    @staticmethod
    def set_round_status(round_id, status: RoundStatus) -> Round:
        date_now = get_iso_date_string()
        response = round_table.update_item(Key={'id': round_id},
                                           AttributeUpdates={
                                               'status': {
                                                   'Value': status
                                               },
                                               'updatedAt': {
                                                   'Value': date_now
                                               }
                                           },
                                           ReturnValues="ALL_NEW")
        return Round(**response['Attributes'])

    @staticmethod
    def set_active_stack(round_id, stack_id) -> Round:
        date_now = get_iso_date_string()
        response = round_table.update_item(Key={'id': round_id},
                                           AttributeUpdates={
                                               'activeStackID': {
                                                   'Value': stack_id
                                               },
                                               'updatedAt': {
                                                   'Value': date_now
                                               }
                                           },
                                           ReturnValues="ALL_NEW")
        return Round(**response['Attributes'])

    @staticmethod
    def set_turn(round_id, user_id) -> Round:
        date_now = get_iso_date_string()
        response = round_table.update_item(Key={'id': round_id},
                                           AttributeUpdates={
                                               'turn': {
                                                   'Value': user_id
                                               },
                                               'updatedAt': {
                                                   'Value': date_now
                                               }
                                           },
                                           ReturnValues="ALL_NEW")
        return Round(**response['Attributes'])

    @staticmethod
    def next_turn(round_id) -> Round:
        date_now = get_iso_date_string()
        response = round_table.get_item(Key={'id': round_id})
        turn_sequence = response['Item']['turnSequence']
        turn = response['Item']['turn']

        idx = turn_sequence.index(turn)
        next_turn = turn_sequence[(idx + 1) % len(turn_sequence)]
        response = round_table.update_item(Key={'id': round_id},
                                           AttributeUpdates={
                                               'turn': {
                                                   'Value': next_turn,
                                               },
                                               'updatedAt': {
                                                   'Value': date_now,
                                               },
                                           },
                                           ReturnValues="ALL_NEW")
        return Round(**response['Attributes'])

    @staticmethod
    def set_turn_sequence(round_id, user_ids) -> Round:
        date_now = get_iso_date_string()
        response = round_table.update_item(Key={'id': round_id},
                                           AttributeUpdates={
                                               'turnSequence': {
                                                   'Value': user_ids
                                               },
                                               'updatedAt': {
                                                   'Value': date_now
                                               }
                                           },
                                           ReturnValues="ALL_NEW")
        return Round(**response['Attributes'])

    @staticmethod
    def set_mode(round_id, mode: RoundMode) -> Round:
        date_now = get_iso_date_string()
        response = round_table.update_item(Key={'id': round_id},
                                           AttributeUpdates={
                                               'mode': {
                                                   'Value': mode
                                               },
                                               'updatedAt': {
                                                   'Value': date_now
                                               }
                                           },
                                           ReturnValues="ALL_NEW")
        return Round(**response['Attributes'])

    @staticmethod
    def set_result(round_id, result) -> Round:
        date_now = get_iso_date_string()
        response = round_table.update_item(Key={'id': round_id},
                                           AttributeUpdates={
                                               'result': {
                                                   'Value': result
                                               },
                                               'updatedAt': {
                                                   'Value': date_now
                                               }
                                           },
                                           ReturnValues="ALL_NEW")
        return Round(**response['Attributes'])

    @staticmethod
    def lock(round_id):
        try:
            key = str(uuid())
            round_table.update_item(
                Key={'id': round_id},
                UpdateExpression="set locked = :val",
                ConditionExpression="attribute_not_exists(locked)",
                ExpressionAttributeValues={':val': key},
                ReturnValues="ALL_NEW")
            return key
        except ClientError as e:
            if e.response['Error'][
                    'Code'] == "ConditionalCheckFailedException":
                raise Exception("Game is busy.")
            else:
                raise

    @staticmethod
    def unlock(round_id: str, key: str):
        response = round_table.update_item(
            Key={'id': round_id},
            UpdateExpression="remove locked",
            ConditionExpression="locked = :val",
            ExpressionAttributeValues={':val': key},
            ReturnValues="ALL_NEW")
        return Round(**response['Attributes'])

    @staticmethod
    def clear_data():
        clear_table(round_table)
