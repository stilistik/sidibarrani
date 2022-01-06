from testutils import LogiCoreTestCase


class TestCreateGame(LogiCoreTestCase):
    def test_creating_a_new_game_without_input(self):
        from models.game import GameMode, GameStatus
        from resolvers.create_game import create_game
        event = {'arguments': {'input': {}}}
        game = create_game(event)
        self.assertIsNotNone(game['id'])
        self.assertEqual(game['status'], GameStatus.CREATED)
        self.assertEqual(game['mode'], GameMode.DUO)
        self.assertEqual(game['public'], False)
        self.assertEqual(game['teamAColor'], 'red')
        self.assertEqual(game['teamBColor'], 'blue')
        self.assertEqual(game['winCondition'], 1000)
        self.assertIsNone(game['result'])
        self.assertIsNotNone(game['createdAt'])
        self.assertIsNotNone(game['updatedAt'])
        self.assertIsNone(game['winnerID'])
        self.assertIsNone(game['activeRoundID'])
        self.assertIsNone(game['teamAID'])
        self.assertIsNone(game['teamBID'])

    def test_create_new_game_with_input(self):
        from models.game import GameMode, GameStatus
        from resolvers.create_game import create_game
        event = {
            'arguments': {
                'input': {
                    'teamAColor': 'green',
                    'teamBColor': 'orange',
                    'public': True
                }
            }
        }
        game = create_game(event)
        self.assertIsNotNone(game['id'])
        self.assertEqual(game['status'], GameStatus.CREATED)
        self.assertEqual(game['mode'], GameMode.DUO)
        self.assertEqual(game['public'], True)
        self.assertEqual(game['teamAColor'], 'green')
        self.assertEqual(game['teamBColor'], 'orange')
        self.assertEqual(game['winCondition'], 1000)
        self.assertIsNotNone(game['createdAt'])
        self.assertIsNotNone(game['updatedAt'])
        self.assertIsNone(game['result'])
        self.assertIsNone(game['winnerID'])
        self.assertIsNone(game['activeRoundID'])
        self.assertIsNone(game['teamAID'])
        self.assertIsNone(game['teamBID'])