import { API, graphqlOperation } from "aws-amplify";
import { useMutation } from "vue-query";
import { gameFragment } from "../fragments/GameFragment";

const placeBet = /* GraphQL */ `
  mutation PlaceBet($roundID: String!, $value: String!) {
    placeBet(roundID: $roundID, value: $value) {
      ...GameFragment
    }
  }
  ${gameFragment}
`;

export const usePlaceBetMutation = () => {
  const res = useMutation(async (variables: any) => {
    const { data } = (await API.graphql(
      graphqlOperation(placeBet, variables)
    )) as any;
    return data.placeBet;
  });
  return res;
};
