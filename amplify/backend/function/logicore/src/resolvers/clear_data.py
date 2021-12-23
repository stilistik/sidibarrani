from models.game import GameModel
from models.hand import HandModel
from models.round import RoundModel
from models.seqnum import SequenceNumberModel
from models.stack import StackModel
from models.team import TeamModel


def clear_data(event):
    GameModel.clear_data()
    RoundModel.clear_data()
    HandModel.clear_data()
    SequenceNumberModel.clear_data()
    StackModel.clear_data()
    TeamModel.clear_data()
    return True
