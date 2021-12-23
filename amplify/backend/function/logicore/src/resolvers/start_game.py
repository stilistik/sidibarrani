from models.game import GameModel, GameStatus
from models.team import TeamModel
from models.round import RoundModel
from models.deck import Deck
from models.hand import HandModel, HandType
from models.stack import StackModel


def validate_team_config(game_id, mode):
    teams = TeamModel.get_teams(game_id)

    if len(teams) != 2:
        raise Exception("Game did not have 2 teams")

    team1users = TeamModel.get_team_users(teams[0]['id'])
    team2users = TeamModel.get_team_users(teams[1]['id'])

    count_team_1 = len(team1users)
    count_team_2 = len(team2users)

    if count_team_2 != count_team_1:
        raise Exception("Teams must have the same number of players")
    elif mode == "QUATTRO" and (count_team_1 != 2 or count_team_2 != 2):
        raise Exception("Mode: Quattro requires 2 players on each team.")
    elif mode == "DUO" and (count_team_1 != 1 or count_team_2 != 1):
        raise Exception("Mode: Duo requires one player on each team.")

    shuffled_teams = []
    for pair in zip(team1users, team2users):
        shuffled_teams.append(pair[0])
        shuffled_teams.append(pair[1])

    return shuffled_teams


def validate_game_status(game_id):
    game = GameModel.find_by_id(game_id)

    if game['status'] != GameStatus.CREATED.name:
        raise Exception("Game already started")


def new_round_duo(game):
    players = validate_team_config(game['id'], "DUO")
    stack_size = 2

    deck = Deck()
    round = RoundModel.create(game['id'])
    stack = StackModel.create(round['id'], stack_size)

    RoundModel.set_active_stack(round['id'], stack['id'])

    hidden_hands = {}
    for player in players:
        normal_hand = deck.deal_hand(6)
        open_hand = deck.deal_hand(6)
        hidden_hands[player['userID']] = deck.deal_hand(6)

        HandModel.create(round['id'], player['userID'],
                         HandType.NORMAL, normal_hand)
        HandModel.create(round['id'], player['userID'],
                         HandType.OPEN, open_hand)
        HandModel.create(round['id'], player['userID'],
                         HandType.HIDDEN, ['X']*6)

    RoundModel.save_hidden_hands(round['id'], hidden_hands)
    turn_sequence = list(map(lambda x: x['userID'], players))
    RoundModel.set_turn_sequence(round['id'], turn_sequence)
    RoundModel.set_turn(round['id'], players[0]['userID'])
    return GameModel.set_active_round(game['id'], round['id'])


def new_round_quattro(game):
    players = validate_team_config(game['id'], "QUATTRO")
    stack_size = 4

    deck = Deck()
    round = RoundModel.create(game['id'])
    stack = StackModel.create(round['id'], stack_size)

    RoundModel.set_active_stack(round['id'], stack['id'])

    starting_player_id = None
    for player in players:
        cards = deck.deal_hand()

        if '7D' in cards:
            starting_player_id = player['userID']

        HandModel.create(round['id'], player['userID'],
                         HandType.NORMAL, cards)

    turn_sequence = list(map(lambda x: x['userID'], players))

    if not starting_player_id:
        starting_player_id = turn_sequence[0]

    RoundModel.set_turn_sequence(round['id'], turn_sequence)
    RoundModel.set_turn(round['id'], starting_player_id)
    return GameModel.set_active_round(game['id'], round['id'])


def new_round(event):
    game_id = event['arguments'].get('gameID')
    game = GameModel.find_by_id(game_id)

    if game['mode'] == 'DUO':
        return new_round_duo(game)
    elif game['mode'] == 'QUATTRO':
        return new_round_quattro(game)


def start_game(event):
    game_id = event['arguments'].get('gameID')

    validate_game_status(game_id)

    new_round(event)

    return GameModel.start(game_id)
