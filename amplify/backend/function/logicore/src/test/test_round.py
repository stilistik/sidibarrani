from test.testutils import LogiCoreTestCase


class TestRoundModel(LogiCoreTestCase):
    def setUp(self) -> None:
        from models.game import GameModel
        super().setUp()

        self.game = GameModel.create()

    def test_create(self):
        from models.round import RoundModel, RoundStatus
        stack_count = 2
        round = RoundModel.create(self.game.id, stack_count)
        self.assertIsNotNone(round.id)
        self.assertIsNotNone(round.createdAt)
        self.assertIsNotNone(round.updatedAt)
        self.assertEqual(round.gameID, self.game.id)
        self.assertEqual(round.status, RoundStatus.BET)
        self.assertEqual(round.stackCount, stack_count)
        self.assertIsNone(round.activeStackID)
        self.assertIsNone(round.turn)
        self.assertIsNone(round.turnSequence)
        self.assertIsNone(round.mode)
        self.assertIsNone(round.stake)
        self.assertIsNone(round.result)
        self.assertIsNone(round.winnerID)

    def test_find_by_id(self):
        from models.round import RoundModel
        created = RoundModel.create(self.game.id, 2)
        retrieved = RoundModel.find_by_id(created.id)
        self.assertEqual(created.id, retrieved.id)

    def test_set_round_status(self):
        from models.round import RoundModel, RoundStatus
        created = RoundModel.create(self.game.id, 2)
        updated = RoundModel.set_round_status(created.id, RoundStatus.PLAY)
        self.assertEqual(created.id, updated.id)
        self.assertEqual(created.status, RoundStatus.BET)
        self.assertEqual(updated.status, RoundStatus.PLAY)

    def test_set_active_stack(self):
        from models.round import RoundModel
        stack_id = self.fake.uuid4()
        created = RoundModel.create(self.game.id, 2)
        updated = RoundModel.set_active_stack(created.id, stack_id)
        self.assertEqual(created.id, updated.id)
        self.assertIsNone(created.activeStackID)
        self.assertEqual(updated.activeStackID, stack_id)

    def test_set_turn(self):
        from models.round import RoundModel
        created = RoundModel.create(self.game.id, 2)
        updated = RoundModel.set_turn(created.id, self.user_a.id)
        self.assertEqual(created.id, updated.id)
        self.assertIsNone(created.turn)
        self.assertEqual(updated.turn, self.user_a.id)

    def test_set_turn_sequence(self):
        from models.round import RoundModel
        turn_seq = ['a', 'b', 'c']
        created = RoundModel.create(self.game.id, 2)
        updated = RoundModel.set_turn_sequence(created.id, turn_seq)
        self.assertEqual(created.id, updated.id)
        self.assertIsNone(created.turnSequence)
        self.assertEqual(updated.turnSequence, turn_seq)

    def test_next_turn(self):
        from models.round import RoundModel
        turn_seq = ['a', 'b', 'c']
        round = RoundModel.create(self.game.id, 2)
        RoundModel.set_turn_sequence(round.id, turn_seq)
        turn_b = RoundModel.set_turn(round.id, turn_seq[1])
        turn_c = RoundModel.next_turn(round.id)
        turn_a = RoundModel.next_turn(round.id)
        self.assertEqual(turn_a.turn, 'a')
        self.assertEqual(turn_b.turn, 'b')
        self.assertEqual(turn_c.turn, 'c')

    def test_set_mode(self):
        from models.round import RoundModel, RoundMode
        created = RoundModel.create(self.game.id, 2)
        updated = RoundModel.set_mode(created.id, RoundMode.TRUMP_D)
        self.assertEqual(created.id, updated.id)
        self.assertIsNone(created.mode)
        self.assertEqual(updated.mode, RoundMode.TRUMP_D)

    def test_set_result(self):
        from models.round import RoundModel
        result = {'a': {'value': 20}}
        created = RoundModel.create(self.game.id, 2)
        updated = RoundModel.set_result(created.id, result)
        self.assertEqual(created.id, updated.id)
        self.assertIsNone(created.result)
        self.assertEqual(updated.result, result)

    def test_set_stake(self):
        from models.round import RoundModel
        stake = {'teamID': 'a', 'value': 20}
        created = RoundModel.create(self.game.id, 2)
        updated = RoundModel.set_stake(created.id, stake)
        self.assertEqual(created.id, updated.id)
        self.assertIsNone(created.stake)
        self.assertEqual(updated.stake, stake)

    def test_set_stake(self):
        from models.round import RoundModel
        winner_id = self.fake.uuid4()
        created = RoundModel.create(self.game.id, 2)
        updated = RoundModel.set_winner(created.id, winner_id)
        self.assertEqual(created.id, updated.id)
        self.assertIsNone(created.winnerID)
        self.assertEqual(updated.winnerID, winner_id)

    def test_lock_and_unlock_and_relock_round(self):
        from models.round import RoundModel
        round = RoundModel.create(self.game.id, 2)
        key = RoundModel.lock(round.id)
        self.assertIsNotNone(key)

        round = RoundModel.unlock(round.id, key)
        self.assertIsNotNone(round)

        key = RoundModel.lock(round.id)
        self.assertIsNotNone(key)

    def test_raises_if_lock_has_already_been_acquired(self):
        from models.round import RoundModel
        round = RoundModel.create(self.game.id, 2)
        key = RoundModel.lock(round.id)
        self.assertIsNotNone(key)
        with self.assertRaises(Exception):
            key = RoundModel.lock(round.id)

    def test_raises_if_round_unlocked_with_wrong_key(self):
        from models.round import RoundModel
        round = RoundModel.create(self.game.id, 2)
        key = RoundModel.lock(round.id)
        self.assertIsNotNone(key)
        round = RoundModel.unlock(round.id, 'some_key')
        self.assertIsNone(round)
