from testutils import LogiCoreTestCase
import concurrent.futures
import time


class TestEndRound(LogiCoreTestCase):
    def setUp(self) -> None:
        from models.game import GameModel
        from models.round import RoundModel, RoundMode
        from models.team import TeamModel
        from models.team_user import TeamUserModel
        from models.stack import StackModel
        from models.action import ActionModel, ActionType
        from resolvers.clear_stack import finalize_active_stack

        super().setUp()
        self.game = GameModel.create()

        self.team_a = TeamModel.create()
        self.team_b = TeamModel.create()

        GameModel.set_team(self.game.id, self.team_a.id, 'teamAID')
        GameModel.set_team(self.game.id, self.team_b.id, 'teamBID')

        self.team_user_a = TeamUserModel.create(self.team_a.id, self.user_a.id)
        self.team_user_b = TeamUserModel.create(self.team_b.id, self.user_b.id)

        self.round = RoundModel.create(self.game.id, 2)
        self.stake = 20
        for i in range(self.round.stackCount):
            stack = StackModel.create(self.round.id, 2)
            for j in range(stack.size):
                user_id = self.user_a.id if j == 0 else self.user_b.id
                if i == 0:
                    ActionModel.create(
                        ActionType.BET,
                        self.user_a.id if j == 0 else self.user_b.id, stack.id,
                        f'TRUMP_H:{self.stake}')
                else:
                    ActionModel.create(ActionType.PLAY, user_id, stack.id,
                                       "10H")

            if i == 0:
                RoundModel.set_stake(self.round.id, {
                    'teamID': self.team_user_a.teamID,
                    'value': 20
                })

            StackModel.set_winner(stack.id, self.team_user_a.id)
            round = RoundModel.set_mode(self.round.id, RoundMode.TOP_DOWN)
            round = RoundModel.set_active_stack(self.round.id, stack.id)
            finalize_active_stack(round)

        self.event = {
            'arguments': {
                'roundID': self.round.id,
            },
            'identity': {
                'claims': {
                    'sub': self.user_a.id
                }
            }
        }

    def test_should_raise_if_round_is_not_complete(self):
        from resolvers.end_round import end_round
        from models.round import RoundModel

        round = RoundModel.create(self.game.id, 2)
        event = self.event.copy()
        event['arguments']['roundID'] = round.id
        with self.assertRaises(Exception):
            end_round(self.event)

    def test_should_end_the_round(self):
        from resolvers.end_round import end_round
        from models.round import RoundModel, RoundStatus
        game = end_round(self.event)
        round = RoundModel.find_by_id(self.round.id)
        self.assertEqual(round.status, RoundStatus.ENDED)

        ev_team_a = 45  # twice 10 of hearts, stake_bonus of 20, last stack bonus of 5
        ev_team_b = 0  # no stacks won, no stake_bonus
        self.assertEqual(
            round.result, {
                self.team_a.id: {
                    'value': ev_team_a,
                    'stake_bonus': self.stake,
                },
                self.team_b.id: {
                    'value': ev_team_b,
                    'stake_bonus': None
                }
            })
        self.assertEqual(
            game['result'], {
                self.team_a.id: {
                    'value': ev_team_a,
                },
                self.team_b.id: {
                    'value': ev_team_b
                }
            })

    def test_should_not_allow_to_run_mutation_in_parallel(self):
        from resolvers.end_round import end_round

        def first_process(self):
            try:
                end_round(self.event)
                return None
            except Exception as e:
                return e

        def second_process(self):
            time.sleep(0.000001)
            with self.assertRaises(Exception) as e:
                end_round(self.event)

            return str(e.exception)

        with concurrent.futures.ThreadPoolExecutor() as executor:
            t1 = executor.submit(first_process, self)
            t2 = executor.submit(second_process, self)
            result_1 = t1.result()
            result_2 = t2.result()

            self.assertIsNone(result_1)
            self.assertEqual(result_2, "Game is busy.")
