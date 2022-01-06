from testutils import LogiCoreTestCase


class TestStartGame(LogiCoreTestCase):
    def setUp(self) -> None:
        from models.game import GameModel
        from models.team import TeamModel

        super().setUp()
        self.game = GameModel.create()
        self.team_a = TeamModel.create()
        self.team_b = TeamModel.create()

        self.event = {
            'arguments': {
                'gameID': self.game.id
            },
            'identity': {
                'claims': {
                    'sub': self.user_a.id
                }
            }
        }

    def test_should_start_game_in_duo_mode(self):
        from resolvers.start_game import start_game
        from models.game import GameModel, GameStatus
        from models.team_user import TeamUserModel
        from models.round import RoundModel, RoundStatus
        from models.stack import StackModel
        from models.hand import HandModel, HandType

        TeamUserModel.create(self.team_a.id, self.user_a.id)
        TeamUserModel.create(self.team_b.id, self.user_b.id)

        GameModel.set_team(self.game.id, self.team_a.id, 'teamAID')
        GameModel.set_team(self.game.id, self.team_b.id, 'teamBID')

        game = start_game(self.event)
        self.assertEqual(game['status'], GameStatus.STARTED)
        self.assertIsNotNone(game['activeRoundID'])

        round = RoundModel.find_by_id(game['activeRoundID'])
        self.assertEqual(round.status, RoundStatus.BET)
        self.assertEqual(round.stackCount, 19)
        self.assertEqual(round.turn, self.user_a.id)
        self.assertEqual(round.turnSequence, [self.user_a.id, self.user_b.id])
        self.assertEqual(round.gameID, game['id'])
        self.assertIsNone(round.result)
        self.assertIsNone(round.mode)
        self.assertIsNone(round.stake)
        self.assertIsNone(round.winnerID)
        self.assertIsNotNone(round.activeStackID)

        stack = StackModel.find_by_id(round.activeStackID)
        self.assertEqual(stack.size, 2)

        hands = HandModel.find_by_round(round.id)
        self.assertEqual(len(hands), 6)

        hidden_hands = [hand for hand in hands if hand.type == HandType.HIDDEN]
        open_hands = [hand for hand in hands if hand.type == HandType.OPEN]
        normal_hands = [hand for hand in hands if hand.type == HandType.NORMAL]

        self.assertEqual(len(normal_hands), 2)
        for hand in normal_hands:
            self.assertEqual(len(hand.cards), 6)
            self.assertEqual(len(hand.hiddenCards), 0)

        self.assertEqual(len(open_hands), 2)
        for hand in open_hands:
            self.assertEqual(len(hand.cards), 6)
            self.assertEqual(len(hand.hiddenCards), 0)

        self.assertEqual(len(hidden_hands), 2)
        for hand in hidden_hands:
            self.assertEqual(len(hand.cards), 6)
            self.assertEqual(len(hand.hiddenCards), 6)
            self.assertTrue(all(card == 'X' for card in hand.cards))

    def test_raise_if_game_does_not_have_2_teams(self):
        from resolvers.start_game import start_game
        from models.game import GameModel
        from models.team_user import TeamUserModel

        TeamUserModel.create(self.team_a.id, self.user_a.id)
        TeamUserModel.create(self.team_b.id, self.user_b.id)

        GameModel.set_team(self.game.id, self.team_b.id, 'teamBID')

        with self.assertRaises(Exception):
            start_game(self.event)

    def test_raise_if_teams_do_not_have_same_count_of_users(self):
        from resolvers.start_game import start_game
        from models.game import GameModel
        from models.team_user import TeamUserModel

        TeamUserModel.create(self.team_a.id, self.user_a.id)

        GameModel.set_team(self.game.id, self.team_a.id, 'teamAID')
        GameModel.set_team(self.game.id, self.team_b.id, 'teamBID')

        with self.assertRaises(Exception):
            start_game(self.event)

    def test_raises_if_teams_have_more_than_one_user_in_duo_mode(self):
        from resolvers.start_game import start_game
        from models.game import GameModel
        from models.team_user import TeamUserModel

        TeamUserModel.create(self.team_a.id, self.user_a.id)
        TeamUserModel.create(self.team_b.id, self.user_b.id)
        TeamUserModel.create(self.team_a.id, self.user_a.id)
        TeamUserModel.create(self.team_b.id, self.user_b.id)

        GameModel.set_team(self.game.id, self.team_a.id, 'teamAID')
        GameModel.set_team(self.game.id, self.team_b.id, 'teamBID')

        with self.assertRaises(Exception):
            start_game(self.event)

    def test_raises_if_game_already_started(self):
        from resolvers.start_game import start_game
        from models.game import GameModel, GameStatus
        from models.team_user import TeamUserModel

        TeamUserModel.create(self.team_a.id, self.user_a.id)
        TeamUserModel.create(self.team_b.id, self.user_b.id)

        GameModel.set_team(self.game.id, self.team_a.id, 'teamAID')
        GameModel.set_team(self.game.id, self.team_b.id, 'teamBID')

        game = start_game(self.event)
        self.assertEqual(game['status'], GameStatus.STARTED)

        with self.assertRaises(Exception):
            start_game(self.event)