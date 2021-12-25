from enum import Enum
from typing import List
import os
from uuid import uuid4 as uuid
import boto3
from boto3.dynamodb.conditions import Key
from utils.utils import get_iso_date_string, clear_table

ddb = boto3.resource('dynamodb')
hand_table_name = os.environ.get("HANDTABLE")
hand_table = ddb.Table(hand_table_name)


class HandType(str, Enum):
    NORMAL = 'NORMAL',
    HIDDEN = 'HIDDEN',
    OPEN = 'OPEN'


class Hand:
    def __init__(self, **kwargs) -> None:
        self.id: str = kwargs['id']
        self.roundID: str = kwargs['roundID']
        self.userID: str = kwargs['userID']
        self.createdAt: str = kwargs['createdAt']
        self.updatedAt: str = kwargs['updatedAt']
        self.cards: List[str] = kwargs['cards']
        self.type: HandType = HandType(kwargs['type'])


class HandModel:
    @staticmethod
    def create(round_id, user_id, type: HandType, cards):
        date_now = get_iso_date_string()
        hand = Hand(
            id=str(uuid()),
            roundID=round_id,
            userID=user_id,
            createdAt=date_now,
            updateAt=date_now,
            cards=cards,
            type=type,
        )
        hand_table.put_item(Item=vars(hand))
        return hand

    @staticmethod
    def find_by_round(round_id) -> List[Hand]:
        response = hand_table.query(
            IndexName="byRound",
            KeyConditionExpression=Key("roundID").eq(round_id),
        )

        return [Hand(**item) for item in response['Items']]

    @staticmethod
    def remove_card(hand_id, card) -> Hand:
        response = hand_table.get_item(Key={
            'id': hand_id,
        })

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
            ReturnValues="ALL_NEW")
        return Hand(**response['Attributes'])

    @staticmethod
    def clear_data():
        clear_table(hand_table)
