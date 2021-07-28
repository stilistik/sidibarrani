import { API, graphqlOperation } from "aws-amplify";
import { useMutation, useQueryClient } from "vue-query";

const newRound = /* GraphQL */ `
  mutation NewRound($gameID: String!) {
    newRound(gameID: $gameID) {
      id
    }
  }
`;

export const useNewRoundMutation = () => {
  const qc = useQueryClient();

  const res = useMutation(
    async (variables: any) => {
      const { data } = (await API.graphql(
        graphqlOperation(newRound, variables)
      )) as any;
      return data.newRound;
    },
    {
      onSuccess: () => {
        qc.invalidateQueries("getGame");
      },
    }
  );
  return res;
};
