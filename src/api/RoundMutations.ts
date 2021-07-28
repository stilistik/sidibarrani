import { API, Auth, graphqlOperation } from "aws-amplify";
import { randomUUID } from "crypto";
import { computed, ComputedRef, reactive, ref } from "vue";
import { QueryClient, useMutation, useQueryClient } from "vue-query";
import router from "../router";

const playCard = /* GraphQL */ `
  mutation PlayCard($roundID: String!, $value: String!) {
    playCard(roundID: $roundID, value: $value) {
      id
    }
  }
`;

async function getGameOptimisticUpdate(
  qc: QueryClient,
  gameId: ComputedRef<string>,
  variables: any
) {
  const key = reactive(["getGame", { gameId }]);
  const data = reactive(await qc.getQueryData(key)) as any;
  data.ActiveRound.activeStack.actions.items.push({
    id: "abcdefg",
    type: "PLAY",
    value: variables.value,
  });
  qc.setQueryData(key, data);
}

async function getHandOptimisticUpdate(qc: QueryClient, variables: any) {
  const roundID = ref(variables.roundID);
  const key = reactive(["hand", { roundID }]);
  const data = reactive(await qc.getQueryData(key)) as any;
  data.cards = data.cards.filter((el: string) => el !== variables.value);
  qc.setQueryData(key, data);
}

export const usePlayCardMutation = () => {
  const qc = useQueryClient();
  const gameId = computed(
    () => router.currentRoute.value.query.gameId as string
  );
  const res = useMutation(
    async (variables: any) => {
      const { data } = (await API.graphql(
        graphqlOperation(playCard, variables)
      )) as any;
      return data.playCard;
    },
    {
      onMutate: async (variables) => {
        await getGameOptimisticUpdate(qc, gameId, variables);
        await getHandOptimisticUpdate(qc, variables);
      },
      onError: async () => {
        const key = reactive(["getGame", { gameId }]);
        const data = reactive(await qc.getQueryData(key)) as any;
        data.ActiveRound.activeStack.actions.items.pop();
        qc.setQueryData(key, data);
      },
    }
  );
  return res;
};
