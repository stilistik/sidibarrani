import { API, graphqlOperation } from "aws-amplify";
import { computed, ComputedRef, reactive, ref } from "vue";
import { QueryClient, useMutation, useQueryClient } from "vue-query";
import { gameFragment } from "../fragments/GameFragment";
import router from "../../router";
import { Message } from "../../utils/Message";

const playCard = /* GraphQL */ `
  mutation PlayCard($roundID: String!, $value: String!) {
    playCard(roundID: $roundID, value: $value) {
      ...GameFragment
    }
  }
  ${gameFragment}
`;

async function getGameOptimisticUpdate(
  qc: QueryClient,
  gameId: ComputedRef<string>,
  variables: any
) {
  const key = reactive(["getGame", { gameId }]);
  qc.cancelQueries(key);
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
  qc.cancelQueries(key);
  const data = reactive(await qc.getQueryData(key)) as any;
  const prevData = Object.assign({}, data);
  data.cards = data.cards.filter((el: string) => el !== variables.value);
  qc.setQueryData(key, data);
  return prevData;
}

async function restorePrevStack(qc: QueryClient, gameId: ComputedRef<string>) {
  const key = reactive(["getGame", { gameId }]);
  const data = reactive(await qc.getQueryData(key)) as any;
  data.ActiveRound.activeStack.actions.items.pop();
  qc.setQueryData(key, data);
}

async function restorePrevHand(qc: QueryClient, prevHand: any, variables: any) {
  const roundID = ref(variables.roundID);
  const key = reactive(["hand", { roundID }]);
  qc.setQueryData(key, prevHand);
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
        const prevData = await getHandOptimisticUpdate(qc, variables);
        return prevData;
      },
      onError: async (res: any, variables, prev) => {
        Message.error(res.errors[0].message);
        await restorePrevStack(qc, gameId);
        await restorePrevHand(qc, prev, variables);
      },
    }
  );
  return res;
};
