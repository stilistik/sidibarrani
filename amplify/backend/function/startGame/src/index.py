import os
import boto3
from datetime import datetime
from boto3.dynamodb.conditions import Key

client = boto3.resource('dynamodb')

game_table_name = os.environ.get("GAMETABLE")
team_table_name = os.environ.get("TEAMTABLE")
teamuser_table_name = os.environ.get("TEAMUSERTABLE")


game_table = client.Table(game_table_name)
team_table = client.Table(team_table_name)
teamuser_table = client.Table(teamuser_table_name)

def setGameStarted(gameID, date_now):
    response = game_table.update_item(
        Key={
            'id': gameID
        },
        AttributeUpdates={
            'status': {
                'Value': "STARTED"
            },
            'updatedAt': {
                'Value': date_now
            },
        },
        ReturnValues="ALL_NEW"
    )
    return response['Attributes']

def getTeamUsers(teamID):
    response = teamuser_table.query(
        IndexName="byTeam",
        KeyConditionExpression=Key("teamID").eq(teamID)
    )
    return response['Items']

def getGameTeams(gameID):
    response = team_table.query(
        IndexName="byGame",
        KeyConditionExpression=Key("gameID").eq(gameID)
    )
    return response['Items']

def checkTeamConfig(gameID):
    teams = getGameTeams(gameID)

    if len(teams) != 2:
        raise Exception("Game did not have 2 teams")

    team1users = getTeamUsers(teams[0]['id'])
    team2users = getTeamUsers(teams[1]['id'])
    
    if len(team1users) != len(team2users): 
        raise Exception("Teams must have the same number of players")

    return



def main(event):
    date_now = datetime.now().strftime("%Y-%m-%dT%H:%M:%SZ") 
    gameID = event['arguments'].get('id')

    checkTeamConfig(gameID)

    return setGameStarted(gameID, date_now)



def handler(event, context):
    print('received event:')
    print(event)
  
    game = main(event)

    return game