import { API, Auth, graphqlOperation } from "aws-amplify";
import { useMutation } from "vue-query";
import { gameFragment } from "../fragments/GameFragment";

const joinTeam = /* GraphQL */ `
  mutation JoinTeam($input: JoinTeamInput!) {
    joinTeam(input: $input) {
      ...GameFragment
    }
  }
  ${gameFragment}
`;

export const useJoinTeamMutation = () => {
  const res = useMutation(async (variables: any) => {
    const cognitoUser = await Auth.currentAuthenticatedUser();
    const input = {
      ...(variables.input || {}),
      userID: cognitoUser.attributes.sub,
    };
    const { data } = (await API.graphql(
      graphqlOperation(joinTeam, { input })
    )) as any;
    return data.joinTeam;
  });
  return res;
};
