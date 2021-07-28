import { API, Auth, graphqlOperation } from "aws-amplify";
import { useMutation } from "vue-query";

const playCard = /* GraphQL */ `
  mutation PlayCard($roundID: String!, $value: String!) {
    playCard(roundID: $roundID, value: $value) {
      id
    }
  }
`;

export const usePlayCardMutation = () => {
  const res = useMutation(async (variables: any) => {
    const { data } = (await API.graphql(
      graphqlOperation(playCard, variables)
    )) as any;
    return data.playCard;
  });
  return res;
};
