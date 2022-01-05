from models.game import GameModel, GameStatus, Game, GameMode
from models.team import TeamModel
from models.team_user import TeamUserModel, TeamUser
from models.round import RoundModel
from models.deck import Deck
from models.hand import HandModel, HandType
from models.stack import StackModel
from typing import List


def validate_team_config(game_id: str, mode: GameMode) -> List[TeamUser]:
    teams = TeamModel.find_by_game(game_id)

    if len(teams) != 2:
        raise Exception("Game did not have 2 teams")

    team1users = TeamUserModel.find_by_team(teams[0].id)
    team2users = TeamUserModel.find_by_team(teams[1].id)

    count_team_1 = len(team1users)
    count_team_2 = len(team2users)

    if count_team_2 != count_team_1:
        raise Exception("Teams must have the same number of players")
    elif mode == "QUATTRO" and (count_team_1 != 2 or count_team_2 != 2):
        raise Exception("Mode: Quattro requires 2 players on each team.")
    elif mode == "DUO" and (count_team_1 != 1 or count_team_2 != 1):
        raise Exception("Mode: Duo requires one player on each team.")

    shuffled_teams: List[TeamUser] = []
    for pair in zip(team1users, team2users):
        shuffled_teams.append(pair[0])
        shuffled_teams.append(pair[1])

    return shuffled_teams


def new_round_duo(game: Game):
    players = validate_team_config(game.id, GameMode.DUO)
    stack_size = 2

    deck = Deck()
    round = RoundModel.create(game.id)
    stack = StackModel.create(round.id, stack_size)

    RoundModel.set_active_stack(round.id, stack.id)

    for player in players:
        normal_cards = deck.deal_hand(6)
        open_cards = deck.deal_hand(6)
        hidden_cards = deck.deal_hand(6)

        HandModel.create(round.id, player.userID, HandType.NORMAL,
                         normal_cards)
        HandModel.create(round.id, player.userID, HandType.OPEN, open_cards)
        HandModel.create(round.id,
                         player.userID,
                         HandType.HIDDEN, ['X'] * 6,
                         hidden_cards=hidden_cards)

    turn_sequence = list(map(lambda p: p.userID, players))
    RoundModel.set_turn_sequence(round.id, turn_sequence)
    RoundModel.set_turn(round.id, players[0].userID)
    return vars(GameModel.set_active_round(game.id, round.id))


def new_round_quattro(game: Game):
    players = validate_team_config(game.id, GameMode.QUATTRO)
    stack_size = 4

    deck = Deck()
    round = RoundModel.create(game.id)
    stack = StackModel.create(round.id, stack_size)

    RoundModel.set_active_stack(round.id, stack.id)

    starting_player_id = None
    for player in players:
        cards = deck.deal_hand()

        if '7D' in cards:
            starting_player_id = player.userID

        HandModel.create(round.id, player.userID, HandType.NORMAL, cards)

    turn_sequence = list(map(lambda p: p.userID, players))

    if not starting_player_id:
        starting_player_id = turn_sequence[0]

    RoundModel.set_turn_sequence(round.id, turn_sequence)
    RoundModel.set_turn(round.id, starting_player_id)
    return vars(GameModel.set_active_round(game.id, round.id))


def new_round(event):
    game_id = event['arguments'].get('gameID')
    game = GameModel.find_by_id(game_id)

    if game.mode == GameMode.DUO:
        return new_round_duo(game)
    elif game.mode == GameMode.QUATTRO:
        return new_round_quattro(game)


def start_game(event):
    game_id = event['arguments'].get('gameID')
    game = GameModel.find_by_id(game_id)

    if game.status == GameStatus.STARTED:
        raise Exception("Game already started")
    elif game.status == GameStatus.ENDED:
        raise Exception("Game has ended.")

    if game.mode == GameMode.DUO:
        new_round_duo(game)
    elif game.mode == GameMode.QUATTRO:
        new_round_quattro(game)

    return vars(GameModel.set_status(game_id, GameStatus.STARTED))
