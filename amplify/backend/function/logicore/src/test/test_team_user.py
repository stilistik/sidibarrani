from test.testutils import LogiCoreTestCase


class TestTeamUserModel(LogiCoreTestCase):
    def setUp(self) -> None:
        from models.team import TeamModel
        super().setUp()

        self.team = TeamModel.create()

    def test_create_team_user(self):
        from models.team_user import TeamUserModel
        team_user = TeamUserModel.create(self.team.id, self.user_a.id)
        self.assertIsNotNone(team_user.id)
        self.assertIsNotNone(team_user.createdAt)
        self.assertIsNotNone(team_user.updatedAt)
        self.assertEqual(team_user.userID, self.user_a.id)
        self.assertEqual(team_user.teamID, self.team.id)

    def test_find_by_id(self):
        from models.team_user import TeamUserModel
        created = TeamUserModel.create(self.team.id, self.user_a.id)
        retrieved = TeamUserModel.find_by_id(created.id)
        self.assertEqual(created.id, retrieved.id)

    def test_find_by_id_returns_none_if_not_found(self):
        from models.team_user import TeamUserModel
        retrieved = TeamUserModel.find_by_id('some_id')
        self.assertIsNone(retrieved)

    def test_should_delete_the_team_user_by_user_id_and_team_id(self):
        from models.team_user import TeamUserModel
        created = TeamUserModel.create(self.team.id, self.user_a.id)
        deleted = TeamUserModel.delete(self.team.id, self.user_a.id)
        retrieved = TeamUserModel.find_by_id(created.id)
        self.assertTrue(deleted)
        self.assertIsNone(retrieved)

    def test_find_by_team(self):
        from models.team_user import TeamUserModel
        team_user_1 = TeamUserModel.create(self.team.id, self.user_a.id)
        team_user_2 = TeamUserModel.create(self.team.id, self.user_b.id)
        team_users = TeamUserModel.find_by_team(self.team.id)
        self.assertEqual(len(team_users), 2)
        self.assertEqual(team_users[0].id, team_user_1.id)
        self.assertEqual(team_users[1].id, team_user_2.id)

    def test_find_by_game(self):
        from models.team import TeamModel
        from models.team_user import TeamUserModel
        from models.game import GameModel
        game = GameModel.create()
        team_a = TeamModel.create()
        team_b = TeamModel.create()
        GameModel.set_team(game.id, team_a.id, 'teamAID')
        GameModel.set_team(game.id, team_b.id, 'teamBID')
        tu_a = TeamUserModel.create(team_a.id, self.user_a.id)
        tu_b = TeamUserModel.create(team_b.id, self.user_b.id)
        team_users = TeamUserModel.find_by_game(game.id)
        self.assertEqual(len(team_users), 2)
        self.assertEqual(team_users[0].id, tu_a.id)
        self.assertEqual(team_users[1].id, tu_b.id)

    def test_find_by_game_and_user(self):
        from models.team import TeamModel
        from models.team_user import TeamUserModel
        from models.game import GameModel
        game = GameModel.create()
        GameModel.set_team(game.id, self.team.id, 'teamAID')
        created = TeamUserModel.create(self.team.id, self.user_a.id)
        retrieved = TeamUserModel.find_by_game_user(game.id, self.user_a.id)
        self.assertEqual(created.id, retrieved.id)
