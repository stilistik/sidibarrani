import { API, graphqlOperation } from "aws-amplify";
import { reactive, Ref } from "vue";
import { useQuery } from "vue-query";

const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
      id
      gameID
      name
      createdAt
      updatedAt
      TeamUsers {
        items {
          id
          teamID
          userID
          createdAt
          updatedAt
          user {
            id
            username
          }
        }
        nextToken
      }
    }
  }
`;

export const useTeamQuery = (teamId: Ref<string>) => {
  const key = reactive(["team", { teamId }]);
  const res = useQuery(key, async () => {
    const { data } = (await API.graphql(
      graphqlOperation(getTeam, {
        id: teamId.value,
      })
    )) as any;
    return data.getTeam;
  });
  return res;
};
