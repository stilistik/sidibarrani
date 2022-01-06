from testutils import LogiCoreTestCase


class TestJoinTeam(LogiCoreTestCase):
    def setUp(self) -> None:
        from models.game import GameModel
        super().setUp()
        self.game = GameModel.create()
        self.event = {
            "arguments": {
                "gameID": self.game.id,
                "teamKey": "A"
            },
            "identity": {
                "claims": {
                    "sub": self.user_a.id
                }
            }
        }

    def test_user_can_join_team(self):
        from resolvers.join_team import join_team
        from models.team import TeamModel
        game = join_team(self.event)
        self.assertIsNotNone(game['teamAID'])

        team = TeamModel.find_by_id(game["teamAID"])
        self.assertEqual(team.name, self.user_a.username)

    def test_raises_if_trying_to_join_team_twice(self):
        from resolvers.join_team import join_team
        game = join_team(self.event)
        self.assertIsNotNone(game['teamAID'])
        with self.assertRaises(Exception):
            join_team(self.event)

    def test_leaves_previous_team_when_joining_other_team(self):
        from resolvers.join_team import join_team
        game = join_team(self.event)
        self.assertIsNotNone(game['teamAID'])
        self.assertIsNone(game['teamBID'])
        event_team_b = self.event.copy()
        event_team_b['arguments']['teamKey'] = 'B'
        game = join_team(event_team_b)
        self.assertIsNone(game['teamAID'])
        self.assertIsNotNone(game['teamBID'])

    def test_raises_if_more_than_one_user_tries_to_join_in_duo_mode(self):
        from resolvers.join_team import join_team
        join_team(self.event)
        event_user_b = self.event.copy()
        event_user_b['identity']['claims']['sub'] = self.user_b.id
        with self.assertRaises(Exception):
            join_team(event_user_b)
