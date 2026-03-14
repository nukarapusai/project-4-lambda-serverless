import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({});

export const handler = async () => {

  const data = await client.send(new ScanCommand({
    TableName: "items-table"
  }));

  return {
    statusCode: 200,
    body: JSON.stringify(data.Items)
  };
};