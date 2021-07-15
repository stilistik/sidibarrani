import { API, graphqlOperation } from "aws-amplify";
import { useQuery } from "vue-query";
import { listUsers, listGames } from "../graphql/queries";

export const useListUsersQuery = () => {
  const res = useQuery("users", async () => {
    const { data } = (await API.graphql(graphqlOperation(listUsers))) as any;
    return data.listUsers;
  });
  console.log(res);

  return res;
};

export const useListGamesQuery = () => {
  const res = useQuery("games", async () => {
    const { data } = (await API.graphql(graphqlOperation(listGames))) as any;
    return data.listGames;
  });
  return res;
};
