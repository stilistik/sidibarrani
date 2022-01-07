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
