import { API, graphqlOperation } from "aws-amplify";
import { useMutation, useQueryClient } from "vue-query";
import { gameFragment } from "../fragments/GameFragment";

const endRound = /* GraphQL */ `
  mutation EndRound($roundID: String!) {
    endRound(roundID: $roundID) {
      ...GameFragment
    }
  }
  ${gameFragment}
`;

export const useEndRoundMutation = () => {
  const qc = useQueryClient();

  const res = useMutation(
    async (variables: any) => {
      const { data } = (await API.graphql(
        graphqlOperation(endRound, variables)
      )) as any;
      return data.endRound;
    },
    {
      onSuccess: () => {
        qc.invalidateQueries("getGame");
      },
    }
  );
  return res;
};
