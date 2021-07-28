from resolvers.play_card import play_card
from resolvers.start_game import start_game
from resolvers.create_game import create_game
from resolvers.join_team import join_team
from resolvers.leave_game import leave_game
from resolvers.get_user_hand import get_user_hand

resolvers = {
    'Mutation': {
        'joinTeam': join_team,
        'createNewGame': create_game,
        'startGame': start_game,
        'leaveGame': leave_game,
        'playCard': play_card,
    },
    'Query': {
        'getUserHand': get_user_hand,
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

    raise Exception("Resolver not found")
