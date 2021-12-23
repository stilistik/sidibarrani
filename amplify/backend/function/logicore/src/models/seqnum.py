import os
import boto3
from utils.utils import clear_table

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

    @staticmethod
    def clear_data():
        clear_table(seqnum_table)
