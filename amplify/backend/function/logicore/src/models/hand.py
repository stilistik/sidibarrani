import os
from uuid import uuid4 as uuid
import boto3
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
