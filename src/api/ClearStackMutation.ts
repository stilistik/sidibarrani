import { API, graphqlOperation } from "aws-amplify";
import { useMutation, useQueryClient } from "vue-query";

const clearStack = /* GraphQL */ `
  mutation ClearStack($roundID: String!) {
    clearStack(roundID: $roundID) {
      id
    }
  }
`;

export const useClearStackMutation = () => {
  const qc = useQueryClient();

  const res = useMutation(
    async (variables: any) => {
      const { data } = (await API.graphql(
        graphqlOperation(clearStack, variables)
      )) as any;
      return data.clearStack;
    },
    {
      onSuccess: () => {
        qc.invalidateQueries("getGame");
      },
    }
  );
  return res;
};
