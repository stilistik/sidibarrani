import os
import boto3

ddb = boto3.resource('dynamodb')
user_table_name = os.environ.get("USERTABLE")
user_table = ddb.Table(user_table_name)


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
    def find_by_id(user_id: str) -> User:
        print(user_id)
        response = user_table.get_item(Key={'id': user_id})
        return User(**response['Item'])