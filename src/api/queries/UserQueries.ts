import { API, Auth, graphqlOperation } from "aws-amplify";
import { useQuery } from "vue-query";
import { QueryKey, UseQueryOptions } from "vue-query/types";
import { getUser } from "../../graphql/queries";

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

const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        username
        lastOnline
        createdAt
        updatedAt
        teams {
          nextToken
        }
      }
      nextToken
    }
  }
`;

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
          filter: { lastOnline: { gt: new Date().toISOString() } },
        })
      )) as any;
      return data.listUsers;
    },
    options
  );
  return res;
};
