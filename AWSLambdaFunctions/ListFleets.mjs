import { GameLiftClient, ListFleetsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import

export const handler = async (event) => {

  const client = new GameLiftClient({region: "us-west-2"});

  try {
    const input = {};
    const command = new ListFleetsCommand(input);
    const response = await client.send(command);
    return response;
  } catch (error) {
    return error;
  }
};
