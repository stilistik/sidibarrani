from test.testutils import LogiCoreTestCase


class TestActionModel(LogiCoreTestCase):
    def test_create_and_retrieve_action(self):
        from models.action import ActionModel, ActionType
        user_id = self.fake.uuid4()
        stack_id = self.fake.uuid4()
        value = self.fake.uuid4()
        action = ActionModel.create(ActionType.PLAY, user_id, stack_id, value)
        action = ActionModel.find_by_id(action.id)
        self.assertEqual(action.userID, user_id)
        self.assertEqual(action.stackID, stack_id)
        self.assertEqual(action.value, value)

    def test_find_by_stack(self):
        from models.action import ActionModel, ActionType
        user_id = self.fake.uuid4()
        stack_id = self.fake.uuid4()
        value = self.fake.uuid4()
        ActionModel.create(ActionType.PLAY, user_id, stack_id, value)
        actions = ActionModel.find_by_stack(stack_id)
        self.assertEqual(len(actions), 1)

    def test_clear_data(self):
        from models.action import ActionModel, ActionType
        user_id = self.fake.uuid4()
        stack_id = self.fake.uuid4()
        value = self.fake.uuid4()
        action = ActionModel.create(ActionType.PLAY, user_id, stack_id, value)
        ActionModel.clear_data()
        action = ActionModel.find_by_id(action.id)
        self.assertEqual(action, None)

    def test_action_value_parsing(self):
        from models.action import Action, ActionType
        action = Action(id=self.fake.uuid4(),
                        userID=self.fake.uuid4(),
                        stackID=self.fake.uuid4(),
                        updatedAt=self.fake.date(),
                        createdAt=self.fake.date(),
                        type=ActionType.BET,
                        value="TRUMP_H:40")
        self.assertEqual(action.get_value(), 40)
