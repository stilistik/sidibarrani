import os
from re import M
from uuid import uuid4 as uuid
import boto3
from enum import Enum
from boto3.dynamodb.conditions import Key
from utils.utils import get_iso_date_string

ddb = boto3.resource('dynamodb')
round_table_name = os.environ.get("ROUNDTABLE")
round_table = ddb.Table(round_table_name)


class RoundStatus(Enum):
    BET = 'BET',
    PLAY = 'PLAY',
    ENDED = 'ENDED'


class RoundMode(Enum):
    TOP_DOWN = 'TOP_DOWN',
    BOTTOM_UP = 'BOTTOM_UP',
    SLALOM_TOP = 'SLALOM_TOP',
    SLALOM_BOTTOM = 'SLALOM_BOTTOM',
    TRUMP_D = 'TRUMP_D',
    TRUMP_H = 'TRUMP_H',
    TRUMP_C = 'TRUMP_C',
    TRUMP_S = 'TRUMP_S',

    @staticmethod
    def from_str(label):
        if label == 'TOP_DOWN':
            return RoundMode.TOP_DOWN
        elif label == 'BOTTOM_UP':
            return RoundMode.BOTTOM_UP
        elif label == 'SLALOM_TOP':
            return RoundMode.SLALOM_TOP
        elif label == 'SLALOM_BOTTOM':
            return RoundMode.SLALOM_BOTTOM
        elif label == 'TRUMP_D':
            return RoundMode.TRUMP_D
        elif label == 'TRUMP_H':
            return RoundMode.TRUMP_H
        elif label == 'TRUMP_S':
            return RoundMode.TRUMP_S
        elif label == 'TRUMP_C':
            return RoundMode.TRUMP_C
        else:
            raise NotImplementedError


class RoundModel:
    @staticmethod
    def create(game_id, stack_count=9):
        date_now = get_iso_date_string()
        round = {
            'id': str(uuid()),
            'gameID': game_id,
            'status': RoundStatus.BET.name,
            'stackCount': stack_count,
            'createdAt': date_now,
            'updatedAt': date_now
        }
        round_table.put_item(
            Item=round,
        )
        return round

    @staticmethod
    def find_by_id(round_id):
        response = round_table.get_item(
            Key={
                'id': round_id,
            }
        )
        return response['Item']

    @staticmethod
    def set_round_status(round_id, status: RoundStatus):
        date_now = get_iso_date_string()
        response = round_table.update_item(
            Key={
                'id': round_id,
            },
            AttributeUpdates={
                'status': {
                    'Value': status.name
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

    @staticmethod
    def set_turn(round_id, user_id):
        date_now = get_iso_date_string()
        response = round_table.update_item(
            Key={
                'id': round_id,
            },
            AttributeUpdates={
                'turn': {
                    'Value': user_id
                },
                'updatedAt': {
                    'Value': date_now
                }
            },
            ReturnValues="ALL_NEW"
        )
        return response['Attributes']

    @staticmethod
    def next_turn(round_id):
        date_now = get_iso_date_string()
        response = round_table.get_item(
            Key={
                'id': round_id
            }
        )
        turn_sequence = response['Item']['turnSequence']
        turn = response['Item']['turn']

        idx = turn_sequence.index(turn)
        next_turn = turn_sequence[(idx + 1) % len(turn_sequence)]
        response = round_table.update_item(
            Key={
                'id': round_id,
            },
            AttributeUpdates={
                'turn': {
                    'Value': next_turn,
                },
                'updatedAt': {
                    'Value': date_now,
                },
            },
            ReturnValues="ALL_NEW"
        )
        return response['Attributes']

    @staticmethod
    def set_turn_sequence(round_id, user_ids):
        date_now = get_iso_date_string()
        response = round_table.update_item(
            Key={
                'id': round_id,
            },
            AttributeUpdates={
                'turnSequence': {
                    'Value': user_ids
                },
                'updatedAt': {
                    'Value': date_now
                }
            },
            ReturnValues="ALL_NEW"
        )
        return response['Attributes']

    @staticmethod
    def set_mode(round_id, mode: RoundMode):
        date_now = get_iso_date_string()
        response = round_table.update_item(
            Key={
                'id': round_id,
            },
            AttributeUpdates={
                'mode': {
                    'Value': mode.name
                },
                'updatedAt': {
                    'Value': date_now
                }
            },
            ReturnValues="ALL_NEW"
        )
        return response['Attributes']

    @staticmethod
    def set_result(round_id, result):
        date_now = get_iso_date_string()
        response = round_table.update_item(
            Key={
                'id': round_id,
            },
            AttributeUpdates={
                'result': {
                    'Value': result
                },
                'updatedAt': {
                    'Value': date_now
                }
            },
            ReturnValues="ALL_NEW"
        )
        return response['Attributes']

    @staticmethod
    def set_locked(round_id, locked):
        date_now = get_iso_date_string()
        response = round_table.update_item(
            Key={
                'id': round_id,
            },
            AttributeUpdates={
                'locked': {
                    'Value': locked
                },
                'updatedAt': {
                    'Value': date_now
                }
            },
            ReturnValues="ALL_NEW"
        )
        return response['Attributes']

    @staticmethod
    def lock(round_id):
        return RoundModel.set_locked(round_id, True)
    
    @staticmethod
    def unlock(round_id):
        return RoundModel.set_locked(round_id, False)


