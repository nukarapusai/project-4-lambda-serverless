import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({});

export const handler = async (event) => {

  const body = JSON.parse(event.body);

  const item = {
    id: { S: Date.now().toString() },
    name: { S: body.name }
  };

  await client.send(new PutItemCommand({
    TableName: "items-table",
    Item: item
  }));

  return {
    statusCode: 201,
    body: JSON.stringify({ message: "Item created" })
  };
};