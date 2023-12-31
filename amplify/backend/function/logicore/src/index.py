from resolvers.finish_round import finish_round
from resolvers.create_message import create_message
from resolvers.get_hand_cards import get_hand_cards
from resolvers.place_bet import place_bet, skip_bet
from resolvers.play_card import play_card
from resolvers.start_game import start_game, new_round
from resolvers.create_game import create_game
from resolvers.join_team import join_team
from resolvers.leave_game import leave_game
from resolvers.clear_stack import clear_stack
from resolvers.end_round import end_round
from resolvers.clear_data import clear_data

resolvers = {
    'Mutation': {
        'joinTeam': join_team,
        'createNewGame': create_game,
        'startGame': start_game,
        'leaveGame': leave_game,
        'playCard': play_card,
        'clearStack': clear_stack,
        'newRound': new_round,
        'placeBet': place_bet,
        'skipBet': skip_bet,
        'endRound': end_round,
        'clearData': clear_data,
        'finishRound': finish_round,
        'createNewMessage': create_message
    },
    'Hand': {
        'cards': get_hand_cards,
    }
}


def handler(event, context):
    print('received event:', event)

    typeHandler = resolvers[event['typeName']]
    if typeHandler:
        resolver = typeHandler[event['fieldName']]
        if resolver:
            return resolver(event)

    raise Exception("Resolver not found")
