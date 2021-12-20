import { API, graphqlOperation } from "aws-amplify";
import { computed, Ref } from "vue";
import { ComputedRef, reactive } from "vue-demi";
import { useQuery } from "vue-query";
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
        name
        createdAt
        updatedAt
        Teams {
          nextToken
          items {
            id
            name
            color
          }
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
  searchTerm: Ref<string>,
  nextToken: Ref<string>,
  limit: number = 20
) => {
  const key = reactive(["listGames", { searchTerm, nextToken, limit }]);
  const res = useQuery(key, async () => {
    const filter: any = {
      private: { eq: false },
      status: { eq: "CREATED" },
    };
    if (searchTerm.value) {
      filter.nameLowerCase = { contains: searchTerm.value };
    }
    const { data } = (await API.graphql(
      graphqlOperation(listGames, {
        filter,
        limit,
        nextToken: nextToken.value,
      })
    )) as any;
    return data.listGames;
  });
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
