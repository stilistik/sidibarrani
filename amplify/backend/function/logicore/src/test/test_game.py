from test.testutils import LogiCoreTestCase


class TestGameModel(LogiCoreTestCase):
    def test_create(self):
        from models.game import GameModel, GameMode, GameStatus
        game = GameModel.create()
        self.assertIsNotNone(game.id)
        self.assertIsNotNone(game.createdAt)
        self.assertIsNotNone(game.updatedAt)
        self.assertEqual(game.status, GameStatus.CREATED)
        self.assertEqual(game.mode, GameMode.DUO)
        self.assertEqual(game.teamAColor, 'red')
        self.assertEqual(game.teamBColor, 'blue')
        self.assertEqual(game.index, 1)
        self.assertEqual(game.winCondition, 1000)
        self.assertEqual(game.public, False)
        self.assertIsNone(game.winnerID)
        self.assertIsNone(game.teamAID)
        self.assertIsNone(game.teamBID)
        self.assertIsNone(game.result)
        self.assertIsNone(game.activeRoundID)

    def test_find_by_id(self):
        from models.game import GameModel
        game = GameModel.create()
        retrieved = GameModel.find_by_id(game.id)
        self.assertEqual(game.id, retrieved.id)

    def test_find_by_id_returns_none_if_not_exists(self):
        from models.game import GameModel
        game = GameModel.find_by_id('some_id')
        self.assertIsNone(game)

    def test_set_status(self):
        from models.game import GameModel, GameStatus
        created = GameModel.create()
        updated = GameModel.set_status(created.id, GameStatus.ENDED)
        self.assertEqual(created.id, updated.id)
        self.assertEqual(created.status, GameStatus.CREATED)
        self.assertEqual(updated.status, GameStatus.ENDED)

    def test_set_active_round(self):
        from models.game import GameModel
        active_round_id = self.fake.uuid4()
        created = GameModel.create()
        updated = GameModel.set_active_round(created.id, active_round_id)
        self.assertEqual(created.id, updated.id)
        self.assertIsNone(created.activeRoundID)
        self.assertEqual(updated.activeRoundID, active_round_id)

    def test_set_winner(self):
        from models.game import GameModel
        winner_id = self.fake.uuid4()
        created = GameModel.create()
        updated = GameModel.set_winner(created.id, winner_id)
        self.assertEqual(created.id, updated.id)
        self.assertIsNone(created.winnerID)
        self.assertEqual(updated.winnerID, winner_id)

    def test_set_team(self):
        from models.game import GameModel
        team_a_id = self.fake.uuid4()
        team_b_id = self.fake.uuid4()
        created = GameModel.create()
        updated = GameModel.set_team(created.id, team_a_id, 'teamAID')
        updated = GameModel.set_team(created.id, team_b_id, 'teamBID')
        self.assertEqual(created.id, updated.id)
        self.assertIsNone(created.teamAID)
        self.assertIsNone(created.teamBID)
        self.assertEqual(updated.teamAID, team_a_id)
        self.assertEqual(updated.teamBID, team_b_id)

    def test_set_result(self):
        from models.game import GameModel
        result = {'a': {'value': 20}}
        created = GameModel.create()
        updated = GameModel.set_result(created.id, result)
        self.assertEqual(created.id, updated.id)
        self.assertIsNone(created.result)
        self.assertEqual(updated.result, result)
