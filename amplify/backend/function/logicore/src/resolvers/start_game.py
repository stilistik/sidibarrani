from models.game import GameModel, GameStatus
from models.team import TeamModel
from models.round import RoundModel
from models.deck import Deck
from models.hand import HandModel


def validate_team_config(game_id):
    teams = TeamModel.get_teams(game_id)

    if len(teams) != 2:
        raise Exception("Game did not have 2 teams")

    team1users = TeamModel.get_team_users(teams[0]['id'])
    team2users = TeamModel.get_team_users(teams[1]['id'])

    if len(team1users) != len(team2users):
        raise Exception("Teams must have the same number of players")

    return team1users + team2users


def validate_game_status(game_id):
    game = GameModel.find_by_id(game_id)

    if game['status'] != GameStatus.CREATED.name:
        raise Exception("Game already started")


def start_game(event):
    game_id = event['arguments'].get('id')

    # validate_game_status(game_id)
    team_users = validate_team_config(game_id)

    deck = Deck()
    round = RoundModel.create(game_id)

    for team_user in team_users:
        cards = deck.deal_hand()
        HandModel.create(round['id'], team_user['userID'], cards)

    GameModel.set_active_round(game_id, round['id'])

    return GameModel.start(game_id)
