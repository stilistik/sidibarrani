from test.testutils import LogiCoreTestCase


class TestClearStack(LogiCoreTestCase):
    def setUp(self) -> None:
        super().setUp()
        self.create_duo_mode_test_scenario()

    def _get_event(self, round_id: str):
        return {
            'arguments': {
                'roundID': round_id,
            }
        }

    def test_should_raise_if_stack_is_incomplete(self):
        from resolvers.clear_stack import clear_stack
        event = self._get_event(self.round.id)
        with self.assertRaises(Exception) as e:
            clear_stack(event)
        self.assertEqual(str(e.exception),
                         'Attempted to clear incomplete stack')

    def test_should_switch_round_mode_in_slalom_top_mode(self):
        from models.round import RoundModel, RoundMode
        from models.action import ActionModel, ActionType
        from resolvers.clear_stack import clear_stack

        RoundModel.set_mode(self.round.id, RoundMode.SLALOM_TOP)
        for _ in range(self.stack.size):
            ActionModel.create(ActionType.PLAY, self.user_a.id, self.stack.id,
                               'value')
        event = self._get_event(self.round.id)
        clear_stack(event)
        round = RoundModel.find_by_id(self.round.id)
        self.assertEqual(round.mode, RoundMode.SLALOM_BOTTOM)

    def test_should_switch_round_mode_in_slalom_bottom_mode(self):
        from models.round import RoundModel, RoundMode
        from models.action import ActionModel, ActionType
        from resolvers.clear_stack import clear_stack

        RoundModel.set_mode(self.round.id, RoundMode.SLALOM_BOTTOM)
        for _ in range(self.stack.size):
            ActionModel.create(ActionType.PLAY, self.user_a.id, self.stack.id,
                               'value')
        event = self._get_event(self.round.id)
        clear_stack(event)
        round = RoundModel.find_by_id(self.round.id)
        self.assertEqual(round.mode, RoundMode.SLALOM_TOP)
