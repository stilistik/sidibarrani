from testutils import LogiCoreTestCase


class TestStackModel(LogiCoreTestCase):
    def setUp(self):
        from models.round import RoundModel
        from models.game import GameModel
        super().setUp()
        self.game = GameModel.create()
        self.round = RoundModel.create(self.game.id, 2)

    def test_create_stack(self):
        from models.stack import StackModel
        stack = StackModel.create(self.round.id, 2)
        self.assertIsNotNone(stack.id)
        self.assertIsNotNone(stack.createdAt)
        self.assertIsNotNone(stack.updatedAt)
        self.assertEqual(stack.roundID, self.round.id)
        self.assertEqual(stack.size, 2)
        self.assertIsNone(stack.winnerID)
        self.assertIsNone(stack.points)
        self.assertFalse(stack.isLastStack)

    def test_find_by_id(self):
        from models.stack import StackModel
        created_stack = StackModel.create(self.round.id, 2)
        retrieved_stack = StackModel.find_by_id(created_stack.id)
        self.assertEqual(created_stack.id, retrieved_stack.id)

    def test_find_by_id_returns_none_if_not_found(self):
        from models.stack import StackModel
        stack = StackModel.find_by_id('non-existent-id')
        self.assertIsNone(stack)

    def test_find_by_round(self):
        from models.stack import StackModel
        for i in range(3):
            StackModel.create(self.round.id, 2)

        stacks = StackModel.find_by_round(self.round.id)
        self.assertEqual(len(stacks), 3)

    def test_should_be_incomplete(self):
        from models.stack import StackModel
        stack = StackModel.create(self.round.id, 2)
        is_complete = StackModel.is_complete(stack.id)
        self.assertFalse(is_complete)

    def test_should_be_complete(self):
        from models.stack import StackModel
        from models.action import ActionModel, ActionType
        size = 2
        stack = StackModel.create(self.round.id, size)
        for _ in range(size):
            ActionModel.create(ActionType.PLAY, self.user_a.id, stack.id,
                               '10H')
        is_complete = StackModel.is_complete(stack.id)
        self.assertTrue(is_complete)

    def test_should_set_the_winner(self):
        from models.stack import StackModel
        team_user_id = self.fake.uuid4()
        stack = StackModel.create(self.round.id, 2)
        stack = StackModel.set_winner(stack.id, team_user_id)
        self.assertEqual(stack.winnerID, team_user_id)

    def test_set_points(self):
        from models.stack import StackModel
        points = 10
        stack = StackModel.create(self.round.id, 2)
        stack = StackModel.set_points(stack.id, points)
        self.assertEqual(stack.points, points)

    def test_set_last_stack(self):
        from models.stack import StackModel
        points = 10
        stack = StackModel.create(self.round.id, 2)
        stack = StackModel.set_points(stack.id, points)
        stack = StackModel.set_last_stack(stack.id)
        self.assertEqual(stack.points, points + 5)
        self.assertTrue(stack.isLastStack)