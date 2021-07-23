import { API, graphqlOperation } from "aws-amplify";
import { useQuery } from "vue-query";

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
      id
      private
      status
      name
      createdAt
      updatedAt
      ActiveRound {
        id
        hands {
          items {
            id
            userID
            cards
            user {
              id
              username
            }
          }
        }
      }
      Teams {
        items {
          id
          gameID
          name
          color
          createdAt
          updatedAt
        }
        nextToken
      }
      Rounds {
        items {
          id
          gameID
          status
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;

export const useGameQuery = (gameId: string) => {
  const res = useQuery(
    ["getGame", gameId],
    async () => {
      const { data } = (await API.graphql(
        graphqlOperation(getGame, {
          id: gameId,
        })
      )) as any;
      return data.getGame;
    },
    {
      enabled: Boolean(gameId),
    }
  );
  return res;
};
