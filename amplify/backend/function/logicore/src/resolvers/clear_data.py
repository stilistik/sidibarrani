import os
from models.action import ActionModel
from models.team_user import TeamUserModel
from models.game import GameModel
from models.hand import HandModel
from models.round import RoundModel
from models.seqnum import SequenceNumberModel
from models.stack import StackModel
from models.team import TeamModel

DEV = os.environ.get('ENV') == 'dev'


def clear_data(event):
    if not DEV:
        raise Exception("Function not available.")

    GameModel.clear_data()
    RoundModel.clear_data()
    HandModel.clear_data()
    SequenceNumberModel.clear_data()
    StackModel.clear_data()
    TeamModel.clear_data()
    TeamUserModel.clear_data()
    ActionModel.clear_data()
    return True
