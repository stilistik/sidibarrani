import { API, graphqlOperation } from "aws-amplify";
import { reactive, Ref } from "vue";
import { useQuery } from "vue-query";

const getUserHand = /* GraphQL */ `
  query getUserHand($roundID: String!) {
    getUserHand(roundID: $roundID) {
      id
      cards
    }
  }
`;

export const useHandQuery = (roundID: Ref<string>) => {
  const key = reactive(["hand", { roundID }]);
  const options = reactive({ enabled: roundID.value && true });
  const res = useQuery(
    key,
    async () => {
      const { data } = (await API.graphql(
        graphqlOperation(getUserHand, {
          roundID: roundID.value,
        })
      )) as any;
      return data.getUserHand;
    },
    options
  );
  return res;
};
