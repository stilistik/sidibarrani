import { API, graphqlOperation } from "aws-amplify";
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
