import boto3
import unittest
import mock
import os
from faker import Faker
from moto import mock_dynamodb2

TABLE_DEFINITIONS = {
    'GAMETABLE': "Game-ddbtest",
    'TEAMTABLE': "Team-ddbtest",
    'TEAMUSERTABLE': "TeamUser-ddbtest",
    'ROUNDTABLE': "Round-ddbtest",
    'HANDTABLE': "Hand-ddbtest",
    'STACKTABLE': "Stack-ddbtest",
    'ACTIONTABLE': "Action-ddbtest",
    'SEQUENCENUMBERTABLE': "SequenceNumber-ddbtest",
    'USERTABLE': "User-ddbtest",
    'MESSAGETABLE': "Message-ddbtest",
}


@mock_dynamodb2
class LogiCoreTestCase(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.env_patcher = mock.patch.dict(os.environ, TABLE_DEFINITIONS)
        cls.env_patcher.start()
        super().setUpClass()

    @classmethod
    def tearDownClass(cls):
        super().tearDownClass()
        cls.env_patcher.stop()

    def setUp(self) -> None:
        from models.user import UserModel
        create_ddb_tables()
        self.fake = Faker()
        self.user_a = UserModel.create()
        self.user_b = UserModel.create()
        return super().setUp()

    def tearDown(self) -> None:
        teardown_ddb_tables()
        return super().tearDown()

    def create_duo_mode_test_scenario(self):
        from models.game import GameModel
        from models.team import TeamModel
        from models.team_user import TeamUserModel
        from models.round import RoundModel, RoundStatus, RoundMode
        from models.stack import StackModel
        from models.hand import HandModel, HandType

        self.game = GameModel.create()

        self.round = RoundModel.create(self.game.id, 2)
        RoundModel.set_round_status(self.round.id, RoundStatus.PLAY)
        RoundModel.set_mode(self.round.id, RoundMode.TOP_DOWN)
        RoundModel.set_turn(self.round.id, self.user_a.id)
        RoundModel.set_turn_sequence(self.round.id,
                                     [self.user_a.id, self.user_b.id])

        self.stack = StackModel.create(self.round.id, 2)
        RoundModel.set_active_stack(self.round.id, self.stack.id)

        GameModel.set_active_round(self.game.id, self.round.id)

        team_a = TeamModel.create()
        team_b = TeamModel.create()

        GameModel.set_team(self.game.id, team_a.id, 'teamAID')
        GameModel.set_team(self.game.id, team_b.id, 'teamBID')

        TeamUserModel.create(team_a.id, self.user_a.id)
        TeamUserModel.create(team_b.id, self.user_b.id)

        self.normal_a = HandModel.create(self.round.id, self.user_a.id,
                                         HandType.NORMAL,
                                         ['6H', '7H', '8H', '9H', '10H', 'JH'])
        self.open_a = HandModel.create(self.round.id, self.user_a.id,
                                       HandType.OPEN,
                                       ['6S', '7S', '8S', '9S', '10S', 'JS'])
        self.hidden_a = HandModel.create(
            self.round.id,
            self.user_a.id,
            HandType.HIDDEN, ['X'] * 6,
            hidden_cards=['6D', '7D', '8D', '9D', '10D', 'JD'])

        self.normal_b = HandModel.create(self.round.id, self.user_b.id,
                                         HandType.NORMAL,
                                         ['6H', '7H', '8H', '9H', '10H', 'JH'])
        self.open_b = HandModel.create(self.round.id, self.user_b.id,
                                       HandType.OPEN,
                                       ['6S', '7S', '8S', '9S', '10S', 'JS'])
        self.hidden_b = HandModel.create(
            self.round.id,
            self.user_b.id,
            HandType.HIDDEN, ['X'] * 6,
            hidden_cards=['6D', '7D', '8D', '9D', '10D', 'JD'])


def teardown_ddb_tables():
    ddb = boto3.client('dynamodb')
    # drop the tables
    for key in TABLE_DEFINITIONS.keys():
        ddb.delete_table(TableName=TABLE_DEFINITIONS[key])


def create_ddb_tables():
    ddb = boto3.client('dynamodb')

    # create the tables
    for key in TABLE_DEFINITIONS.keys():
        ddb.create_table(
            TableName=TABLE_DEFINITIONS[key],
            KeySchema=[{
                'KeyType': 'HASH',
                'AttributeName': 'id'
            }],
            AttributeDefinitions=[{
                'AttributeName': 'id',
                'AttributeType': 'S'
            }],
            ProvisionedThroughput={
                'ReadCapacityUnits': 5,
                'WriteCapacityUnits': 5
            },
        )

    # create global secondary indices
    _create_global_secondary_index(ddb,
                                   table=TABLE_DEFINITIONS['ACTIONTABLE'],
                                   name='byStack',
                                   key='stackID')

    _create_global_secondary_index(ddb,
                                   table=TABLE_DEFINITIONS['TEAMUSERTABLE'],
                                   name='byTeam',
                                   key='teamID')
    _create_global_secondary_index(ddb,
                                   table=TABLE_DEFINITIONS['HANDTABLE'],
                                   name='byRound',
                                   key='roundID')

    _create_global_secondary_index(ddb,
                                   table=TABLE_DEFINITIONS['MESSAGETABLE'],
                                   name='byGame',
                                   key='gameID')

    _create_global_secondary_index(ddb,
                                   table=TABLE_DEFINITIONS['STACKTABLE'],
                                   name='byRound',
                                   key='roundID')


def _create_global_secondary_index(ddb, **kwargs):
    ddb.update_table(TableName=kwargs['table'],
                     GlobalSecondaryIndexUpdates=[{
                         'Create': {
                             'IndexName':
                             kwargs['name'],
                             'KeySchema': [{
                                 'KeyType': 'HASH',
                                 'AttributeName': kwargs['key'],
                             }],
                             "Projection": {
                                 "ProjectionType": "ALL"
                             },
                             "ProvisionedThroughput": {
                                 "ReadCapacityUnits": 1,
                                 "WriteCapacityUnits": 1,
                             }
                         }
                     }])
