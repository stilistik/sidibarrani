import { API, graphqlOperation } from "aws-amplify";
import { reactive, Ref } from "vue";
import { useQuery } from "vue-query";

const getUserHand = /* GraphQL */ `
  query getUserHand($roundID: String!, $handType: HandType!) {
    getUserHand(roundID: $roundID, handType: $handType) {
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
          handType: "NORMAL",
        })
      )) as any;
      return data.getUserHand;
    },
    options
  );
  return res;
};
