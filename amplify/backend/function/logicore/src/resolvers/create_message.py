from models.message import MessageModel
from models.game import GameModel


def create_message(event):
    text = event['arguments'].get('text')
    game_id = event['arguments'].get('gameID')
    user_id = event['identity']['claims'].get('sub')

    if not text:
        raise Exception("Empty message text submitted.")

    MessageModel.create(game_id, user_id, text)

    return vars(GameModel.find_by_id(game_id))