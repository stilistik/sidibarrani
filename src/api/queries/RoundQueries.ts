import { API, graphqlOperation } from "aws-amplify";
import { reactive, ref, Ref } from "vue";
import { useQuery } from "vue-query";

const getHandCards = /* GraphQL */ `
  query getHandCards(
    $roundID: String!
    $userID: String!
    $handType: HandType!
  ) {
    getHandCards(roundID: $roundID, userID: $userID, handType: $handType)
  }
`;

export const useHandQuery = (
  roundID: Ref<string>,
  userID: Ref<string>,
  type: string = "NORMAL"
) => {
  const typeRef = ref(type);
  const key = reactive(["hand", { roundID, userID, typeRef }]);
  const options = reactive({ enabled: roundID.value && userID.value && true });

  const res = useQuery(
    key,
    async () => {
      const { data } = (await API.graphql(
        graphqlOperation(getHandCards, {
          roundID: roundID.value,
          userID: userID.value,
          handType: typeRef.value,
        })
      )) as any;
      return data.getHandCards;
    },
    options
  );
  return res;
};
