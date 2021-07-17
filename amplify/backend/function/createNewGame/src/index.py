import boto3
import os
import uuid

client = boto3.client('dynamodb')


def main(event, context):
    game = {
        'id': str(uuid.uuid4()),
        'name': event['arguments']['name'],
        'status': 'STARTED',
        'private': False,
    }

    client.put_item(
        TableName=os.environ.get('GAMETABLE'),
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
            }
        }
    )

    client.put_item(
        TableName=os.environ.get('TEAMTABLE'),
        Item={
            'id': {
                'S': str(uuid.uuid4()),
            },
            'name': {
                'S': event['arguments'].get('team1name', 'Team 1'),
            },
            'gameID': {
                'S': game['id'],
            }
        }
    )

    client.put_item(
        TableName=os.environ.get('TEAMTABLE'),
        Item={
            'id': {
                'S': str(uuid.uuid4()),
            },
            'name': {
                'S': event['arguments'].get('team2name', 'Team 2'),
            },
            'gameID': {
                'S': game['id'],
            }
        }
    )

    return game


def handler(event, context):
    print('received event:')
    print(event)

    game = main(event, context)

    return game
