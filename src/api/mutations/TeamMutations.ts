import { API, Auth, graphqlOperation } from "aws-amplify";
import { useMutation, useQueryClient } from "vue-query";
import { updateTeam } from "../../graphql/mutations";
import { gameFragment } from "../fragments/GameFragment";

const joinTeam = /* GraphQL */ `
  mutation JoinTeam($gameID: String!, $teamKey: String!) {
    joinTeam(gameID: $gameID, teamKey: $teamKey) {
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

export const useUpdateTeamMutation = () => {
  const qc = useQueryClient();
  const res = useMutation(
    async (variables: any) => {
      const { data } = (await API.graphql(
        graphqlOperation(updateTeam, variables)
      )) as any;
      return data.updateTeam;
    },
    {
      onSuccess: () => {
        qc.invalidateQueries("getGame");
        qc.refetchQueries("listGames");
      },
    }
  );
  return res;
};
