import { API, graphqlOperation } from "aws-amplify";
import { ComputedRef, reactive } from "vue-demi";
import { useQuery } from "vue-query";
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

export const useListGamesQuery = () => {
  const res = useQuery("listGames", async () => {
    const { data } = (await API.graphql(
      graphqlOperation(listGames, {
        filter: { private: { eq: false } },
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