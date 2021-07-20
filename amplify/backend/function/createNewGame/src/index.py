import os
import uuid
import boto3
from faker import Faker
from datetime import datetime

client = boto3.client('dynamodb')
fake = Faker()

game_table_name = os.environ.get("GAMETABLE")
team_table_name = os.environ.get("TEAMTABLE")


def getRandomName(num_words=3):
    result = ' '
    fakeWords = map(lambda x: x.capitalize(), fake.words(num_words))
    return result.join(fakeWords)


def main(event):
    date_now = datetime.now().strftime("%Y-%m-%dT%H:%M:%SZ") 
    input = event['arguments'].get('input', {})

    game = {
        'id': str(uuid.uuid4()),
        'name': input.get('name', getRandomName()),
        'status': 'CREATED',
        'private': input.get('private', False),
        'createdAt': date_now,
        'updatedAt': date_now,
    }

    client.put_item(
        TableName=game_table_name,
        Item={
            'id': {
                'S': game['id']
            },
            'name': {
                'S': game['name']
            },
            'status': {
                'S': game['status']
            },
            'private': {
                'BOOL': game['private']
            },
            'createdAt': {
                'S': game['createdAt']
            },
            'updatedAt': {
                'S': game['updatedAt']
            },
            '__typename': {
                'S': 'Game'
            }
        }
    )

    client.put_item(
        TableName=team_table_name,
        Item={
            'id': {
                'S': str(uuid.uuid4()),
            },
            'name': {
                'S': input.get('team1name', getRandomName()),
            },
            'gameID': {
                'S': game['id'],
            },
            'createdAt': {
                'S': date_now,
            },
            'updatedAt': {
                'S': date_now,
            },
            '__typename': {
                'S': 'Team'
            }
        }
    )

    client.put_item(
        TableName=team_table_name,
        Item={
            'id': {
                'S': str(uuid.uuid4()),
            },
            'name': {
                'S': input.get('team2name', getRandomName()),
            },
            'gameID': {
                'S': game['id'],
            },
            'createdAt': {
                'S': date_now,
            },
            'updatedAt': {
                'S': date_now,
            },
            '__typename': {
                'S': 'Team'
            }
        }
    )

    return game


def handler(event, context):
    print('received event:')
    print(event)

    game = main(event)

    return game
