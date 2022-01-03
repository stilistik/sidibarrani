import os
from uuid import uuid4 as uuid
import boto3
from typing import List
from enum import Enum
from boto3.dynamodb.conditions import Key
from utils.utils import get_iso_date_string, clear_table

ddb = boto3.resource('dynamodb')
message_table_name = os.environ.get("MESSAGETABLE")
message_table = ddb.Table(message_table_name)


class Message:
    def __init__(self, **kwargs) -> None:
        self.id = kwargs['id']
        self.text = kwargs['text']
        self.createdAt = kwargs['createdAt']
        self.updatedAt = kwargs['updatedAt']
        self.userID = kwargs['userID']
        self.gameID = kwargs['gameID']


class MessageModel:
    @staticmethod
    def create(game_id: str, user_id: str, text: str) -> Message:
        date_now = get_iso_date_string()
        message = Message(
            id=str(uuid()),
            gameID=game_id,
            text=text,
            userID=user_id,
            createdAt=date_now,
            updatedAt=date_now,
        )
        message_table.put_item(Item=vars(message))
        return message
