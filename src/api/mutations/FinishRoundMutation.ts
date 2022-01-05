import { API, graphqlOperation } from "aws-amplify";
import { useMutation, useQueryClient } from "vue-query";

const finishRound = /* GraphQL */ `
  mutation FinishRound($gameID: String!) {
    finishRound(gameID: $gameID) {
      id
    }
  }
`;

export const useFinishRoundMutation = () => {
  const res = useMutation(async (variables: any) => {
    const { data } = (await API.graphql(
      graphqlOperation(finishRound, variables)
    )) as any;
    return data.finishRound;
  });
  return res;
};
