import { API, graphqlOperation } from "aws-amplify";
import { useMutation } from "vue-query";
import { gameFragment } from "../fragments/GameFragment";

const skipBet = /* GraphQL */ `
  mutation SkipBet($roundID: String!) {
    skipBet(roundID: $roundID) {
      ...GameFragment
    }
  }
  ${gameFragment}
`;

export const useSkipBetMutation = () => {
  const res = useMutation(async (variables: any) => {
    const { data } = (await API.graphql(
      graphqlOperation(skipBet, variables)
    )) as any;
    return data.skipBet;
  });
  return res;
};
