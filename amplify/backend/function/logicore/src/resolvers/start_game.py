from models.game import GameModel, GameStatus
from models.team import TeamModel
from models.round import RoundModel
from models.deck import Deck
from models.hand import HandModel
from models.stack import StackModel


def validate_team_config(game_id):
    teams = TeamModel.get_teams(game_id)

    if len(teams) != 2:
        raise Exception("Game did not have 2 teams")

    team1users = TeamModel.get_team_users(teams[0]['id'])
    team2users = TeamModel.get_team_users(teams[1]['id'])

    if len(team1users) != len(team2users):
        raise Exception("Teams must have the same number of players")

    shuffled_teams = []
    for pair in zip(team1users, team2users):
        shuffled_teams.append(pair[0])
        shuffled_teams.append(pair[1])

    return shuffled_teams


def validate_game_status(game_id):
    game = GameModel.find_by_id(game_id)

    if game['status'] != GameStatus.CREATED.name:
        raise Exception("Game already started")


def start_game(event):
    game_id = event['arguments'].get('id')

    # validate_game_status(game_id)
    team_users = validate_team_config(game_id)
    stack_size = len(team_users)

    deck = Deck()
    round = RoundModel.create(game_id)
    stack = StackModel.create(round['id'], stack_size)

    RoundModel.set_active_stack(round['id'], stack['id'])

    starting_player_id = None
    for team_user in team_users:
        cards = deck.deal_hand()

        if '7D' in cards:
            starting_player_id = team_user['userID']

        HandModel.create(round['id'], team_user['userID'], cards)

    turn_sequence = list(map(lambda x: x['userID'], team_users))

    if not starting_player_id:
        starting_player_id = turn_sequence[0]

    RoundModel.set_turn_sequence(round['id'], turn_sequence)
    RoundModel.set_turn(round['id'], starting_player_id)
    GameModel.set_active_round(game_id, round['id'])

    return GameModel.start(game_id)
