import { API, graphqlOperation } from "aws-amplify";
import { useMutation } from "vue-query";

const createMessage = /* GraphQL */ `
  mutation CreateNewMessage($gameID: String!, $text: String!) {
    createNewMessage(gameID: $gameID, text: $text) {
      id
    }
  }
`;

export const useCreateMessageMutatio = () => {
  const res = useMutation(async (variables: any) => {
    const { data } = (await API.graphql(
      graphqlOperation(createMessage, variables)
    )) as any;
    return data.createMessage;
  });
  return res;
};
