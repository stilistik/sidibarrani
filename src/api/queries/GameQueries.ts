import { API, graphqlOperation } from "aws-amplify";
import { watch, computed, ref, Ref, watchEffect } from "vue";
import { ComputedRef, reactive } from "vue-demi";
import { useQuery } from "vue-query";
import { Game } from "../../graphql/types";
import router from "../../router";
import { gameFragment } from "../fragments/GameFragment";

const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        index
        private
        status
        mode
        winCondition
        createdAt
        updatedAt
        teamAColor
        teamBColor
        TeamA {
          id
          name
        }
        TeamB {
          id
          name
        }
        Rounds {
          nextToken
        }
      }
      nextToken
    }
  }
`;

export const useListGamesQuery = (
  nextToken: Ref<string>,
  limit: number = 20
) => {
  const key = reactive(["listGames", { nextToken, limit }]);
  const res = useQuery(
    key,
    async () => {
      const filter: any = {
        private: { eq: false },
        status: { eq: "WAITING" },
      };
      const { data } = (await API.graphql(
        graphqlOperation(listGames, {
          filter,
          limit,
          nextToken: nextToken.value,
        })
      )) as any;
      return data.listGames;
    },
    {
      refetchInterval: 2000,
    }
  );
  return res;
};

const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
      ...GameFragment
    }
  }
  ${gameFragment}
`;

export const useGameQuery = (gameId: ComputedRef<string>) => {
  const key = reactive(["getGame", { gameId }]);
  const options = reactive({ enabled: gameId.value && true });
  const res = useQuery(
    key,
    async () => {
      if (!gameId.value) return null;
      const { data } = (await API.graphql(
        graphqlOperation(getGame, {
          id: gameId.value,
        })
      )) as any;
      return data.getGame;
    },
    options
  );
  return res;
};

const gameRef: Ref<Game> = ref(null);
export const useCurrentGame = () => {
  const gameId = computed(
    () => router.currentRoute.value.query.gameId as string
  );
  const { data } = useGameQuery(gameId);
  watchEffect(() => {
    gameRef.value = data.value;
  });
  return gameRef;
};

export const useActiveRound = () => {
  const gameId = computed(
    () => router.currentRoute.value.query.gameId as string
  );
  const { data } = useGameQuery(gameId);
  const activeRound = computed(() => data.value?.ActiveRound);
  return activeRound;
};

export const useActiveStack = () => {
  const gameId = computed(
    () => router.currentRoute.value.query.gameId as string
  );
  const { data } = useGameQuery(gameId);
  const activeStack = computed(() => data.value?.ActiveRound?.activeStack);
  return activeStack;
};
