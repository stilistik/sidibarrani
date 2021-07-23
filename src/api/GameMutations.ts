import { API, Auth, graphqlOperation } from "aws-amplify";
import { useMutation } from "vue-query";

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
  mutation StartGame($id: String!) {
    startGame(id: $id) {
      id
    }
  }
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
  mutation LeaveGame($input: LeaveGameInput!) {
    leaveGame(input: $input)
  }
`;

export const useLeaveTeamMutation = () => {
  const res = useMutation(async (variables: any) => {
    const cognitoUser = await Auth.currentAuthenticatedUser();
    const input = {
      ...(variables.input || {}),
      userID: cognitoUser.attributes.sub,
    };
    const { data } = (await API.graphql(
      graphqlOperation(leaveGame, { input })
    )) as any;
    return data.leaveGame;
  });
  return res;
};
