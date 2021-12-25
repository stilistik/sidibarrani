import { API, Auth, graphqlOperation } from "aws-amplify";
import { useMutation } from "vue-query";
import { gameFragment } from "../fragments/GameFragment";

const joinTeam = /* GraphQL */ `
  mutation JoinTeam($teamID: String!) {
    joinTeam(teamID: $teamID) {
      ...GameFragment
    }
  }
  ${gameFragment}
`;

export const useJoinTeamMutation = () => {
  const res = useMutation(async (variables: any) => {
    const { data } = (await API.graphql(
      graphqlOperation(joinTeam, variables)
    )) as any;
    return data.joinTeam;
  });
  return res;
};
