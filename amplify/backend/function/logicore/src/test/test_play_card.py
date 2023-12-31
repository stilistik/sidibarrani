from test.testutils import LogiCoreTestCase
from mock import patch


class TestPlayCard(LogiCoreTestCase):
    def setUp(self) -> None:
        super().setUp()
        self.create_duo_mode_test_scenario()

    def _get_event(self, round_id: str, value: str, user_id):
        return {
            'arguments': {
                'roundID': round_id,
                'value': value
            },
            'identity': {
                'claims': {
                    'sub': user_id
                }
            }
        }

    def test_should_raise_if_trying_to_play_cards_during_bet_stage(self):
        from resolvers.play_card import play_card
        from models.round import RoundModel, RoundStatus
        RoundModel.set_round_status(self.round.id, RoundStatus.BET)
        event = self._get_event(self.round.id, '6H', self.user_a.id)
        with self.assertRaises(Exception) as e:
            play_card(event)
        self.assertEqual(str(e.exception),
                         'You cannot play cards during the bidding stage')

    def test_should_raise_if_card_is_not_found_in_users_hand(self):
        from resolvers.play_card import play_card
        event = self._get_event(self.round.id, '6C', self.user_a.id)
        with self.assertRaises(Exception) as e:
            play_card(event)
        self.assertEqual(str(e.exception),
                         'Played card was not found in users hands.')

    def test_should_raise_if_its_not_the_users_turn(self):
        from resolvers.play_card import play_card
        event = self._get_event(self.round.id, '6H', self.user_b.id)
        with self.assertRaises(Exception) as e:
            play_card(event)
        self.assertEqual(str(e.exception), "It's not your turn to play")

    def test_should_raise_if_invalid_card_is_played(self):
        from resolvers.play_card import play_card
        event = self._get_event(self.round.id, 'ABCD', self.user_b.id)
        with self.assertRaises(Exception) as e:
            play_card(event)
        self.assertEqual(str(e.exception), "Invalid card played.")

    def test_should_be_possible_to_play_the_card(self):
        from resolvers.play_card import play_card
        from models.hand import HandModel
        card = '6H'
        card_index = self.normal_a.cards.index(card)
        event = self._get_event(self.round.id, card, self.user_a.id)
        response = play_card(event)
        self.assertEqual(response['id'], self.game.id)
        hand = HandModel.find_by_id(self.normal_a.id)
        self.assertEqual(hand.cards[card_index], '__played__')

    def test_should_unhide_hidden_card_if_open_card_is_played(self):
        from resolvers.play_card import play_card
        from models.hand import HandModel
        card = '7S'
        card_index = self.open_a.cards.index(card)
        event = self._get_event(self.round.id, card, self.user_a.id)
        response = play_card(event)
        self.assertEqual(response['id'], self.game.id)
        hand = HandModel.find_by_id(self.hidden_a.id)
        self.assertNotEqual(hand.cards[card_index], 'X')

    def test_should_create_a_new_stack_if_stack_is_complete_before_playing_card(
            self):
        from models.action import ActionModel, ActionType
        from models.round import RoundModel
        from resolvers.play_card import play_card
        for _ in range(self.stack.size):
            ActionModel.create(ActionType.PLAY, self.user_b.id, self.stack.id,
                               'val')
        card = '6H'
        event = self._get_event(self.round.id, card, self.user_a.id)
        response = play_card(event)
        round = RoundModel.find_by_id(response['activeRoundID'])
        self.assertNotEqual(round.activeStackID, self.stack.id)

    def test_should_determine_stack_winner_if_stack_is_complete_after_playing_card(
            self):
        from models.stack import StackModel
        from models.team_user import TeamUserModel
        from resolvers.play_card import play_card
        event_a = self._get_event(self.round.id, '6H', self.user_a.id)
        event_b = self._get_event(self.round.id, '7H', self.user_b.id)
        play_card(event_a)
        play_card(event_b)
        stack = StackModel.find_by_id(self.stack.id)
        team_user = TeamUserModel.find_by_game_user(self.game.id,
                                                    self.user_b.id)
        self.assertEqual(stack.winnerID, team_user.id)

    def test_should_lock_round_to_avoid_parallel_updates(self):
        from resolvers.play_card import play_card
        from models.round import RoundModel

        key = self.fake.uuid4()
        event = self._get_event(self.round.id, '6H', self.user_a.id)
        with patch.object(RoundModel, attribute='lock',
                          return_value=key) as mock_lock, patch.object(
                              RoundModel,
                              attribute='unlock',
                              return_value=self.round) as mock_unlock:
            play_card(event)
        mock_lock.assert_called_once()
        mock_unlock.assert_called_once()
        mock_unlock.assert_called_with(self.round.id, key)
