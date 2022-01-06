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
}


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
    ddb.update_table(TableName=TABLE_DEFINITIONS['ACTIONTABLE'],
                     GlobalSecondaryIndexUpdates=[{
                         'Create': {
                             'IndexName':
                             'byStack',
                             'KeySchema': [{
                                 'KeyType': 'HASH',
                                 'AttributeName': 'stackID',
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
        create_ddb_tables()
        self.fake = Faker()
        return super().setUp()

    def tearDown(self) -> None:
        teardown_ddb_tables()
        return super().tearDown()
