from testutils import LogiCoreTestCase


class TestTeamModel(LogiCoreTestCase):
    def test_create_team_without_parameters(self):
        from models.team import TeamModel
        team = TeamModel.create()
        self.assertIsNotNone(team.id)
        self.assertIsNotNone(team.name)
        self.assertIsNotNone(team.createdAt)
        self.assertIsNotNone(team.updatedAt)

    def test_create_team_with_params(self):
        from models.team import TeamModel
        id = self.fake.uuid4()
        name = self.fake.name()
        team = TeamModel.create(id, name)
        self.assertEqual(team.id, id)
        self.assertEqual(team.name, name)
        self.assertIsNotNone(team.createdAt)
        self.assertIsNotNone(team.updatedAt)

    def test_find_by_id_returns_none_if_not_found(self):
        from models.team import TeamModel
        team = TeamModel.find_by_id('non-existent-id')
        self.assertIsNone(team)

    def test_find_by_id_returns_team(self):
        from models.team import TeamModel
        created_team = TeamModel.create()
        retrieved_team = TeamModel.find_by_id(created_team.id)
        self.assertEqual(created_team.id, retrieved_team.id)
        self.assertEqual(created_team.name, retrieved_team.name)
        self.assertEqual(created_team.createdAt, retrieved_team.createdAt)
        self.assertEqual(created_team.updatedAt, retrieved_team.updatedAt)

    def test_find_teams_by_game(self):
        from models.game import GameModel
        from models.team import TeamModel

        game = GameModel.create()
        teamA = TeamModel.create()
        teamB = TeamModel.create()

        GameModel.set_team(game.id, teamA.id, 'teamAID')
        GameModel.set_team(game.id, teamA.id, 'teamBID')

        teams = TeamModel.find_by_game(game.id)
        self.assertEqual(len(teams), 2)
        self.assertEqual(teams[0].id, teamA.id)
        self.assertEqual(teams[1].id, teamB.id)

    def test_set_name_updates_team_name(self):
        from models.team import TeamModel
        old_name = 'old'
        new_name = 'new'
        team = TeamModel.create(self.fake.uuid4(), old_name)
        self.assertEqual(team.name, old_name)
        team = TeamModel.set_name(team.id, new_name)
        self.assertEqual(team.name, new_name)

    def test_generates_deterministic_id_based_on_user_ids(self):
        from models.team import TeamModel
        user_ids = [self.fake.uuid4(), self.fake.uuid4()]
        id_1 = TeamModel.get_team_id_from_user_ids(user_ids)
        id_2 = TeamModel.get_team_id_from_user_ids(user_ids)
        id_3 = TeamModel.get_team_id_from_user_ids([self.fake.uuid4()])
        self.assertEqual(id_1, id_2)
        self.assertNotEqual(id_1, id_3)