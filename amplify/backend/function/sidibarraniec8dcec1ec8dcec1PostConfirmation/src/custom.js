const aws = require("aws-sdk");
const ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
  const date = new Date();

  try {
    if (event.request.userAttributes.sub) {
      const params = {
        Item: {
          __typename: { S: "User" },
          id: { S: event.request.userAttributes.sub },
          username: { S: event.userName },
          email: { S: event.request.userAttributes.email },
          createdAt: { S: date.toISOString() },
          updatedAt: { S: date.toISOString() },
        },
        TableName: process.env.USERTABLE,
      };
      await ddb.putItem(params).promise();
      console.log("Successfully synchronized Cognito user with DynamoDB");
    } else {
      console.log("Nothing was added to DynamoDB");
    }
  } catch (err) {
  } finally {
    context.done(null, event);
  }
};
