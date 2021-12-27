import { API, graphqlOperation } from "aws-amplify";
import { reactive } from "vue";
import { useQueryClient } from "vue-query";
import { gameFragment } from "../fragments/GameFragment";

const onUpdateGameState = /* GraphQL */ `
  subscription OnUpdateGameState($id: ID!) {
    onUpdateGameState(id: $id) {
      id
    }
  }
`;

export const useGameSubscription = (gameId: string) => {
  const qc = useQueryClient();
  const subscription = (
    API.graphql(graphqlOperation(onUpdateGameState, { id: gameId })) as any
  ).subscribe({
    next: () => {
      // we have to refetch and cannot use the subscription data directly, because the data
      // created by the mutator may not be valid for the subscriber (i.e. cards from mutator are
      // different than cards from subscriber)
      qc.refetchQueries("getGame");
    },
    error: (error: any) => console.warn(error),
  });
  return subscription;
};
