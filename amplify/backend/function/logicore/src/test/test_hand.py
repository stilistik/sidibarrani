from test.testutils import LogiCoreTestCase


class TestHandModel(LogiCoreTestCase):
    def setUp(self) -> None:
        from models.game import GameModel
        from models.round import RoundModel

        super().setUp()
        game = GameModel.create()
        self.cards = ['A', 'B', 'C']
        self.round = RoundModel.create(game.id, 2)

    def test_create_hand(self):
        from models.hand import HandModel, HandType
        hand = HandModel.create(self.round.id, self.user_a.id, HandType.NORMAL,
                                self.cards)
        self.assertIsNotNone(hand.id)
        self.assertIsNotNone(hand.createdAt)
        self.assertIsNotNone(hand.updatedAt)
        self.assertEqual(hand.roundID, self.round.id)
        self.assertEqual(hand.type, HandType.NORMAL)
        self.assertEqual(hand.cards, self.cards)
        self.assertEqual(hand.hiddenCards, [])

    def test_find_by_id(self):
        from models.hand import HandModel, HandType
        hand = HandModel.create(self.round.id, self.user_a.id, HandType.NORMAL,
                                self.cards)
        retrieved = HandModel.find_by_id(hand.id)
        self.assertEqual(hand.id, retrieved.id)

    def test_find_by_round(self):
        from models.hand import HandModel, HandType
        hand = HandModel.create(self.round.id, self.user_a.id, HandType.NORMAL,
                                self.cards)
        hands = HandModel.find_by_round(self.round.id)
        self.assertEqual(len(hands), 1)
        self.assertEqual(hands[0].id, hand.id)

    def test_set_card_played(self):
        from models.hand import HandModel, HandType
        hand = HandModel.create(self.round.id, self.user_a.id, HandType.NORMAL,
                                self.cards)
        card = 'B'
        hand = HandModel.set_card_played(hand.id, card)
        self.assertEqual(
            hand.cards, ['__played__' if c == card else c for c in self.cards])

    def test_get_card_index(self):
        from models.hand import HandModel, HandType
        hand = HandModel.create(self.round.id, self.user_a.id, HandType.NORMAL,
                                self.cards)
        card = 'B'
        index = HandModel.get_card_index(hand.id, card)
        self.assertEqual(index, self.cards.index(card))

    def test_should_raise_if_card_not_found(self):
        from models.hand import HandModel, HandType
        hand = HandModel.create(self.round.id, self.user_a.id, HandType.NORMAL,
                                self.cards)
        card = 'inexistent'
        with self.assertRaises(Exception):
            HandModel.get_card_index(hand.id, card)

    def test_unhide_card(self):
        from models.hand import HandModel, HandType
        hidden_cards = ['D', 'E', 'F']
        hand = HandModel.create(self.round.id,
                                self.user_a.id,
                                HandType.HIDDEN, ['X' for _ in hidden_cards],
                                hidden_cards=hidden_cards)
        index = 1
        hand = HandModel.unhide_card(hand.id, 1)
        self.assertEqual(hand.cards, [
            hidden_cards[i] if i == index else 'X'
            for i in range(len(hidden_cards))
        ])
        self.assertEqual(hand.hiddenCards, hidden_cards)

    def test_should_raise_if_trying_to_unhide_in_non_hidden_hand(self):
        from models.hand import HandModel, HandType
        hidden_cards = ['D', 'E', 'F']
        hand = HandModel.create(self.round.id,
                                self.user_a.id,
                                HandType.NORMAL, ['X' for _ in hidden_cards],
                                hidden_cards=hidden_cards)
        with self.assertRaises(Exception):
            HandModel.unhide_card(hand.id, 1)
