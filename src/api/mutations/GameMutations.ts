import { API, Auth, graphqlOperation } from "aws-amplify";
import { useMutation } from "vue-query";
import { gameFragment } from "../fragments/GameFragment";

const createNewGame = /* GraphQL */ `
  mutation CreateNewGame($input: CreateNewGameInput) {
    createNewGame(input: $input) {
      id
    }
  }
`;

export const useCreateNewGameMutation = () => {
  const res = useMutation(async (variables: any) => {
    const { data } = (await API.graphql(
      graphqlOperation(createNewGame, variables)
    )) as any;
    return data.createNewGame;
  });
  return res;
};

const startGame = /* GraphQL */ `
  mutation StartGame($gameID: String!) {
    startGame(gameID: $gameID) {
      ...GameFragment
    }
  }
  ${gameFragment}
`;

export const useStartGameMutation = () => {
  const res = useMutation(async (variables: any) => {
    const { data } = (await API.graphql(
      graphqlOperation(startGame, variables)
    )) as any;
    return data.startGame;
  });
  return res;
};

const leaveGame = /* GraphQL */ `
  mutation LeaveGame($gameID: String!) {
    leaveGame(gameID: $gameID) {
      ...GameFragment
    }
  }
  ${gameFragment}
`;

export const useLeaveGameMutation = () => {
  const res = useMutation(async (variables: any) => {
    const cognitoUser = await Auth.currentAuthenticatedUser();
    const { data } = (await API.graphql(
      graphqlOperation(leaveGame, variables)
    )) as any;
    return data.leaveGame;
  });
  return res;
};
