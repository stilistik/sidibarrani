import os
import uuid
import boto3
from faker import Faker
from datetime import datetime

client = boto3.resource('dynamodb')
fake = Faker()

game_table_name = os.environ.get("GAMETABLE")
team_table_name = os.environ.get("TEAMTABLE")

game_table = client.Table(game_table_name)
team_table = client.Table(team_table_name)


def getRandomName(num_words=3):
    result = ' '
    fakeWords = map(lambda x: x.capitalize(), fake.words(num_words))
    return result.join(fakeWords)


def create_game(event):
    date_now = datetime.now().strftime("%Y-%m-%dT%H:%M:%SZ") 
    input = event['arguments'].get('input', {})

    game = {
        'id': str(uuid.uuid4()),
        'name': input.get('name', getRandomName()),
        'status': 'CREATED',
        'private': input.get('private', False),
        'createdAt': date_now,
        'updatedAt': date_now,
        '__typename': 'Game'
    }

    game_table.put_item(
        Item=game
    )

    team_table.put_item(
        Item={
            'id': str(uuid.uuid4()),
            'name':input.get('team1name', getRandomName()),
            'gameID': game['id'],
            'createdAt':date_now,
            'updatedAt': date_now,
            'color': input.get('team1color', 'red'),
            '__typename': 'Team'
        }
    )

    team_table.put_item(
        Item={
            'id':  str(uuid.uuid4()),
            'name': input.get('team2name', getRandomName()),
            'gameID':game['id'],
            'createdAt':date_now,
            'updatedAt':date_now,
            'color': input.get('team2color', 'blue'),
            '__typename':'Team'
        }
    )

    return game