from resolvers.start_game import start_game
from resolvers.create_game import create_game
from resolvers.join_team import join_team
from resolvers.leave_team import leave_team

resolvers = {
    'Mutation': {
        'joinTeam': join_team,
        'createNewGame': create_game,
        'startGame': start_game,
        'leaveTeam': leave_team,
    }
}


def handler(event, context):
    print('received event:')
    print(event)

    typeHandler = resolvers[event['typeName']]
    if typeHandler:
        resolver = typeHandler[event['fieldName']]
        if resolver:
            return resolver(event)

    raise Exception("Resolver not found.")
