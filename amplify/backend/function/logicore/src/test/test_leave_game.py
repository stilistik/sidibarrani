from test.testutils import LogiCoreTestCase


class TestLeaveGamme(LogiCoreTestCase):
    def setUp(self) -> None:
        from models.game import GameModel, GameStatus
        from models.team import TeamModel
        from models.team_user import TeamUserModel
        from models.user import UserModel

        super().setUp()
        game = GameModel.create()
        team_a = TeamModel.create()
        team_b = TeamModel.create()

        self.user_1 = UserModel.create()
        self.user_2 = UserModel.create()
        self.user_3 = UserModel.create()
        self.user_4 = UserModel.create()

        TeamUserModel.create(team_a.id, self.user_1.id)
        TeamUserModel.create(team_a.id, self.user_2.id)
        TeamUserModel.create(team_b.id, self.user_3.id)
        TeamUserModel.create(team_b.id, self.user_4.id)

        GameModel.set_team(game.id, team_a.id, 'teamAID')
        GameModel.set_team(game.id, team_b.id, 'teamBID')
        self.game = GameModel.set_status(game.id, GameStatus.WAITING)

    def _get_event(self, game_id, user_id):
        return {
            'arguments': {
                'gameID': game_id
            },
            'identity': {
                'claims': {
                    'sub': user_id
                }
            }
        }

    def test_leave_game(self):
        from resolvers.leave_game import leave_game
        from models.team_user import TeamUserModel

        response = leave_game(self._get_event(self.game.id, self.user_1.id))
        self.assertIsNotNone(response['teamAID'])
        self.assertIsNotNone(response['teamBID'])

        # team id depends on the users in the team, so it must change
        self.assertNotEqual(response['teamAID'], self.game.teamAID)

        team_a_users = TeamUserModel.find_by_team(response['teamAID'])
        self.assertEqual(len(team_a_users), 1)
        self.assertNotEqual(team_a_users[0].userID, self.user_1.id)

    def test_should_set_team_none_if_all_users_left_game(self):
        from resolvers.leave_game import leave_game

        response = leave_game(self._get_event(self.game.id, self.user_1.id))
        response = leave_game(self._get_event(self.game.id, self.user_2.id))

        self.assertIsNone(response['teamAID'])
        self.assertIsNotNone(response['teamBID'])

    def test_should_set_game_status_to_created_if_everyone_left(self):
        from resolvers.leave_game import leave_game
        from models.game import GameStatus

        leave_game(self._get_event(self.game.id, self.user_1.id))
        leave_game(self._get_event(self.game.id, self.user_2.id))
        leave_game(self._get_event(self.game.id, self.user_3.id))
        response = leave_game(self._get_event(self.game.id, self.user_4.id))

        self.assertIsNone(response['teamAID'])
        self.assertIsNone(response['teamBID'])
        self.assertEqual(response['status'], GameStatus.CREATED)
