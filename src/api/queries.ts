import { API, Auth, graphqlOperation } from "aws-amplify";
import { useQuery } from "vue-query";
import { listUsers, listGames, getUser } from "../graphql/queries";

export const useListUsersQuery = () => {
  const res = useQuery("users", async () => {
    const { data } = (await API.graphql(graphqlOperation(listUsers))) as any;
    return data.listUsers;
  });
  return res;
};

export const useListGamesQuery = () => {
  const res = useQuery("games", async () => {
    const { data } = (await API.graphql(graphqlOperation(listGames))) as any;
    return data.listGames;
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
