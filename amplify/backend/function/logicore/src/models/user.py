import os
import boto3
from uuid import uuid4 as uuid
from utils.utils import get_iso_date_string
from faker import Faker

ddb = boto3.resource('dynamodb')
user_table_name = os.environ.get("USERTABLE")
user_table = ddb.Table(user_table_name)

faker = Faker()


class User:
    def __init__(self, **kwargs) -> None:
        self.id = kwargs['id']
        self.username = kwargs['username']
        self.email = kwargs['email']
        self.lastOnline = kwargs['lastOnline']
        self.createdAt = kwargs['createdAt']
        self.updatedAt = kwargs['updatedAt']


class UserModel:
    @staticmethod
    def create(**kwargs):
        date_now = get_iso_date_string()
        user = User(id=str(uuid()),
                    username=kwargs.get('username', faker.name()),
                    email=kwargs.get('email', faker.email()),
                    lastOnline=date_now,
                    createdAt=date_now,
                    updatedAt=date_now)
        user_table.put_item(Item=vars(user))
        return user

    @staticmethod
    def find_by_id(user_id: str) -> User:
        response = user_table.get_item(Key={'id': user_id})
        return User(**response['Item'])