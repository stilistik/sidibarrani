import { API, graphqlOperation } from "aws-amplify";
import { reactive } from "vue";
import { useQueryClient } from "vue-query";
import { gameFragment } from "../fragments/GameFragment";

const onUpdateGameState = /* GraphQL */ `
  subscription OnUpdateGameState($id: ID!) {
    onUpdateGameState(id: $id) {
      ...GameFragment
    }
  }
  ${gameFragment}
`;

export const useGameSubscription = (gameId: string) => {
  const qc = useQueryClient();
  const subscription = (
    API.graphql(graphqlOperation(onUpdateGameState, { id: gameId })) as any
  ).subscribe({
    next: ({ value }: any) => {
      const key = reactive(["getGame", { gameId }]);

      if (value?.data?.onUpdateGameState) {
        qc.setQueryData(key, value.data.onUpdateGameState);
      }
    },
    error: (error: any) => console.warn(error),
  });
  return subscription;
};
