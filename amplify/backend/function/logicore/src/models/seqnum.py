import os
from uuid import uuid4 as uuid
import boto3
from boto3.dynamodb.conditions import Key

ddb = boto3.resource('dynamodb')
seqnum_table_name = os.environ.get("SEQUENCENUMBERTABLE")
seqnum_table = ddb.Table(seqnum_table_name)


class SequenceNumberModel:
    @staticmethod
    def get_index(model):
        response = seqnum_table.update_item(
            Key={
                'id': model
            },
            UpdateExpression='ADD indexNumber :inc',
            ExpressionAttributeValues={':inc': 1},
            ReturnValues='ALL_NEW'
        )
        return int(response['Attributes']['indexNumber'])
