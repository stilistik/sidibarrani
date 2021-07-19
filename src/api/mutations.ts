import { API, Auth, graphqlOperation } from "aws-amplify";
import { useMutation } from "vue-query";
import { createNewGame, updateUser } from "../graphql/mutations";

export const useUpdateSelfMutation = () => {
  const res = useMutation(async (variables: any) => {
    const cognitoUser = await Auth.currentAuthenticatedUser();
    const input = {
      ...(variables?.input || {}),
      id: cognitoUser.attributes.sub,
    };
    const { data } = (await API.graphql(
      graphqlOperation(updateUser, {
        input,
      })
    )) as any;
    return data.updateUser;
  });
  return res;
};

export const useCreateNewGameMutation = () => {
  const res = useMutation(async (variables: any) => {
    const { data } = (await API.graphql(
      graphqlOperation(createNewGame, variables)
    )) as any;
    return data.createNewGame;
  });
  return res;
};
