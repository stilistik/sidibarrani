from models.round import RoundModel, RoundStatus, RoundMode
from models.stack import StackModel
from models.game import GameModel
from models.team import TeamModel
from models.team_user import TeamUserModel
from models.action import ActionModel, ActionType, Action


def place_bet(event):
    round_id = event['arguments'].get('roundID')
    value: str = event['arguments'].get('value')
    user_id = event['identity']['claims'].get('sub')

    round = RoundModel.find_by_id(round_id)
    stack = StackModel.find_by_id(round.activeStackID)

    if round.turn != user_id:
        raise Exception("It's not your turn to place a bet")

    [mode, amount_str] = value.split(":")

    if not mode:
        raise Exception("Mode must be defined")
    if not amount_str:
        raise Exception("Bet amount must be defined")

    amount = int(amount_str)

    actions = ActionModel.find_by_stack(round.activeStackID)
    max_value_action = max(actions, key=get_max_action, default=None)

    if max_value_action and amount < max_value_action.get_value():
        raise Exception("Bet amount must be higher than current highest bet.")

    if amount >= 157:
        amount = 157
        ActionModel.create(ActionType.BET, user_id, stack.id,
                           '{mode}:{amount}'.format(mode=mode, amount=amount))

        # set the winner of the bet stack
        team_user = TeamUserModel.find_by_game_user(round.gameID, user_id)
        StackModel.set_winner(stack.id, team_user.id)

        # create a new stack and set as active
        new_stack = StackModel.create(round_id, stack.size)
        RoundModel.set_active_stack(round_id, new_stack.id)

        # put round into play status
        RoundModel.set_round_status(round_id, RoundStatus.PLAY)
        RoundModel.set_turn(round_id, user_id)
        RoundModel.set_mode(round_id, mode)
        RoundModel.set_stake(round_id, {
            'teamID': team_user.teamID,
            'value': amount
        })
    else:
        ActionModel.create(ActionType.BET, user_id, stack.id,
                           '{mode}:{amount}'.format(mode=mode, amount=amount))
        RoundModel.next_turn(round_id)

    game = GameModel.find_by_id(round.gameID)
    print(vars(game))
    return vars(game)


def get_max_action(action: Action):
    if action.type == ActionType.SKIP:
        return -1
    else:
        return action.get_value()


def skip_bet(event):
    round_id = event['arguments'].get('roundID')
    user_id = event['identity']['claims'].get('sub')

    round = RoundModel.find_by_id(round_id)
    stack = StackModel.find_by_id(round.activeStackID)
    game_id = round.gameID

    if round.turn != user_id:
        raise Exception("It's not your turn to place a bet")

    ActionModel.create(ActionType.SKIP, user_id, stack.id, None)
    RoundModel.next_turn(round_id)

    actions = ActionModel.find_by_stack(stack.id)
    game_user_count = len(TeamUserModel.find_by_game(game_id))

    if len(actions) > game_user_count and not all(
            action.type == ActionType.SKIP for action in actions):
        last_actions = actions[-game_user_count:]
        max_amount_action = max(actions, key=get_max_action)
        mode = RoundMode(max_amount_action.value.split(":")[0])

        if all(action.type == ActionType.SKIP for action in last_actions):
            # set the winner of the bet stack to the user with the max amount bet
            team_user = TeamUserModel.find_by_game_user(
                game_id, max_amount_action.userID)
            StackModel.set_winner(stack.id, team_user.id)

            # set the round to play status
            RoundModel.set_round_status(round_id, RoundStatus.PLAY)
            RoundModel.set_turn(round_id, max_amount_action.userID)

            # create a new stack and set as active
            new_stack = StackModel.create(round_id, stack.size)
            RoundModel.set_active_stack(round_id, new_stack.id)

            # set the play mode of the round
            RoundModel.set_mode(round_id, mode)

            # set the stake
            RoundModel.set_stake(round_id, {
                'teamID': team_user.teamID,
                'value': max_amount_action.get_value()
            })

    return vars(GameModel.find_by_id(game_id))
