const aws = require("aws-sdk");
const ddb = new aws.DynamoDB();

exports.handler = async (event, context, callback) => {
  console.log("Running lambda", event);
  try {
    if (event.request.userAttributes.sub) {
      const date = new Date();

      const params = {
        Item: {
          __typename: { S: "User" },
          id: { S: event.request.userAttributes.sub },
          username: { S: event.request.userAttributes.nickname },
          email: { S: event.request.userAttributes.email },
          createdAt: { S: date.toISOString() },
          updatedAt: { S: date.toISOString() },
          lastOnline: { N: date.valueOf().toString() }, // aws timestamp in seconds
          _lastChangedAt: { N: date.valueOf().toString() }, // timestamp in milliseconds
          _version: { N: "1" },
        },
        TableName: process.env.USERTABLE,
      };

      await ddb.putItem(params).promise();
      console.log("Successfully synchronized Cognito user with DynamoDB");
    } else {
      console.log("Nothing was added to DynamoDB");
    }
  } catch (err) {
    console.error(err);
  } finally {
    callback(null, event);
  }
};
