import os
import uuid
import boto3
from boto3.dynamodb.conditions import Key
from datetime import datetime

client = boto3.resource('dynamodb')

teamuser_table_name = os.environ.get("TEAMUSERTABLE")
team_table_name = os.environ.get('TEAMTABLE')

# get the tables 
team_table = client.Table(team_table_name)
teamuser_table = client.Table(teamuser_table_name)

def getGameID(teamID): 
    response = team_table.get_item(
        Key={
            'id':  teamID
        }
    )
    return response['Item']['gameID']


def getOtherTeamID(teamID):
    gameID = getGameID(teamID)

    response = team_table.query(
        IndexName="byGame",
        KeyConditionExpression=Key("gameID").eq(gameID)
    )
    gameTeams = response['Items']

    otherTeam = next((team for team in gameTeams if team['id'] != teamID), None)
    return otherTeam['id']

def removeUserFromTeam(teamID, userID):

    response = teamuser_table.query(
        IndexName="byTeam",
        KeyConditionExpression=Key("teamID").eq(teamID)
    )

    otherTeamUsers = response['Items']

    foundUserInOtherTeam = next((item for item in otherTeamUsers if item['userID'] == userID), None)
    if foundUserInOtherTeam: 
        teamuser_table.delete_item(
            Key={
                'id': foundUserInOtherTeam['id']
            }
        )


def main(event):
    date_now = datetime.now().strftime("%Y-%m-%dT%H:%M:%SZ") 
    input = event['arguments'].get('input', {})
    teamID = input.get('teamID')
    userID = input.get('userID')

    otherTeamID = getOtherTeamID(teamID)

    removeUserFromTeam(teamID, userID)
    removeUserFromTeam(otherTeamID, userID)

    teamuser = {
        'id': str(uuid.uuid4()),
        'teamID': teamID,
        'userID': userID,
        'createdAt': date_now,
        'updatedAt': date_now,
    }

    teamuser_table.put_item(
        Item=teamuser
    )

    return teamuser


def handler(event, context):
    print('received event:')
    print(event)

    teamuser = main(event)

    return teamuser
