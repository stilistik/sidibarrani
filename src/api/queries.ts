import { API, Auth, graphqlOperation } from "aws-amplify";
import { useQuery } from "vue-query";
import { UseQueryOptions, QueryKey } from "vue-query/types";
import { listUsers, listGames, getUser, getGame } from "../graphql/queries";
import { getAWSTimeStamp } from "../utils/Utils";

export const useListUsersQuery = (
  options?: UseQueryOptions<any, unknown, any, QueryKey>
) => {
  const res = useQuery(
    "users",
    async () => {
      const { data } = (await API.graphql(graphqlOperation(listUsers))) as any;
      return data.listUsers;
    },
    options
  );
  return res;
};

export const useListOnlineUsersQuery = (
  options?: UseQueryOptions<any, unknown, any, QueryKey>
) => {
  const res = useQuery(
    "onlineUsers",
    async () => {
      const { data } = (await API.graphql(
        graphqlOperation(listUsers, {
          filter: { lastOnline: { gt: getAWSTimeStamp() - 30 } },
        })
      )) as any;
      return data.listUsers;
    },
    options
  );
  return res;
};

export const useListGamesQuery = () => {
  const res = useQuery("listGames", async () => {
    const { data } = (await API.graphql(graphqlOperation(listGames))) as any;
    return data.listGames;
  });
  return res;
};

export const useLobbyQuery = (gameId: string) => {
  const res = useQuery(["lobby", gameId], async () => {
    const { data } = (await API.graphql(
      graphqlOperation(getGame, {
        id: gameId,
      })
    )) as any;
    return data.getGame;
  });
  return res;
};

export const useCurrentUserQuery = () => {
  const res = useQuery("currentUser", async () => {
    const cognitoUser = await Auth.currentAuthenticatedUser();
    const { data } = (await API.graphql(
      graphqlOperation(getUser, { id: cognitoUser.attributes.sub })
    )) as any;
    return data.getUser;
  });
  return res;
};
