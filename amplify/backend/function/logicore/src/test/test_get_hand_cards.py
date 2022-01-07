from testutils import LogiCoreTestCase


class TestGetHandCards(LogiCoreTestCase):

    def setUp(self) -> None:
        from models.game import GameModel
        from models.round import RoundModel
        from models.hand import HandModel, HandType

        super().setUp()
        game = GameModel.create()
        round = RoundModel.create(game.id, 2)
        self.cards_visible = ['a', '__played__']
        self.cards_hidden = ['X', '__played__']

        self.normal_hand = HandModel.create(round.id, self.user_a.id,
                                            HandType.NORMAL,
                                            self.cards_visible)
        self.open_hand = HandModel.create(round.id, self.user_a.id,
                                          HandType.OPEN, self.cards_visible)
        self.hidden_hand = HandModel.create(round.id, self.user_a.id,
                                            HandType.HIDDEN, self.cards_hidden)

    def _get_event(self, hand_id, user_id):
        return {
            'source': {
                'id': hand_id,
            },
            'identity': {
                'claims': {
                    'sub': user_id,
                }
            }
        }

    def test_should_return_users_normal_hand_cards(self):
        from resolvers.get_hand_cards import get_hand_cards
        event = self._get_event(self.normal_hand.id, self.user_a.id)
        retrieved_cards = get_hand_cards(event)
        self.assertEqual(retrieved_cards, self.cards_visible)

    def test_should_return_users_hidden_hand_cards(self):
        from resolvers.get_hand_cards import get_hand_cards
        event = self._get_event(self.hidden_hand.id, self.user_a.id)
        retrieved_cards = get_hand_cards(event)
        self.assertEqual(retrieved_cards, self.cards_hidden)

    def test_should_return_users_open_hand_cards(self):
        from resolvers.get_hand_cards import get_hand_cards
        event = self._get_event(self.open_hand.id, self.user_a.id)
        retrieved_cards = get_hand_cards(event)
        self.assertEqual(retrieved_cards, self.cards_visible)

    def test_should_return_opponents_normal_hand_cards_as_unknown(self):
        from resolvers.get_hand_cards import get_hand_cards
        event = self._get_event(self.normal_hand.id, self.user_b.id)
        retrieved_cards = get_hand_cards(event)
        self.assertEqual(retrieved_cards, self.cards_hidden)

    def test_should_return_opponents_hidden_hand_cards(self):
        from resolvers.get_hand_cards import get_hand_cards
        event = self._get_event(self.hidden_hand.id, self.user_a.id)
        retrieved_cards = get_hand_cards(event)
        self.assertEqual(retrieved_cards, self.cards_hidden)

    def test_should_return_opponents_open_hand_cards(self):
        from resolvers.get_hand_cards import get_hand_cards
        event = self._get_event(self.open_hand.id, self.user_a.id)
        retrieved_cards = get_hand_cards(event)
        self.assertEqual(retrieved_cards, self.cards_visible)
