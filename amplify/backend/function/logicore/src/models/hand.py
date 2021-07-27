import os
from uuid import uuid4 as uuid
import boto3
from boto3.dynamodb.conditions import Key
from utils.utils import get_iso_date_string, get_random_name

ddb = boto3.resource('dynamodb')
hand_table_name = os.environ.get("HANDTABLE")
hand_table = ddb.Table(hand_table_name)


class HandModel:
    @staticmethod
    def create(round_id, user_id, cards):
        date_now = get_iso_date_string()

        hand = {
            'id': str(uuid()),
            'roundID': round_id,
            'userID': user_id,
            'createdAt': date_now,
            'updateAt': date_now,
            'cards': cards
        }

        hand_table.put_item(
            Item=hand
        )

        return hand

    @staticmethod
    def find_by_round(round_id):
        response = hand_table.query(
            IndexName="byRound",
            KeyConditionExpression=Key("roundID").eq(round_id),
        )

        return response['Items']

    @staticmethod
    def remove_card(hand_id, card):
        response = hand_table.get_item(
            Key={
                'id': hand_id,
            }
        )
        
        try:
            cards = response['Item']['cards']
            index = cards.index(card)
        except ValueError:
            raise Exception(
                'Card cannot be played because it is not in your hand')

        response = hand_table.update_item(
            Key={
                'id': hand_id,
            },
            UpdateExpression='remove cards[{}]'.format(index),
            ReturnValues="ALL_NEW"
        )
        return response['Attributes']
