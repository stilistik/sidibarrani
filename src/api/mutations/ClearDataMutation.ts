import { API, graphqlOperation } from "aws-amplify";
import { useMutation, useQueryClient } from "vue-query";

const clearData = /* GraphQL */ `
  mutation ClearData {
    clearData
  }
`;

export const useClearDataMutation = () => {
  const qc = useQueryClient();

  const res = useMutation(
    async () => {
      const { data } = (await API.graphql(graphqlOperation(clearData))) as any;
      return data.clearData;
    },
    {
      onSuccess: () => {
        qc.clear();
      },
    }
  );
  return res;
};
