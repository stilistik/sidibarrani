import { API, Auth, graphqlOperation } from "aws-amplify";
import { useMutation } from "vue-query";

const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
    }
  }
`;

export const useUpdateSelfMutation = () => {
  const res = useMutation(async (variables: any) => {
    const cognitoUser = await Auth.currentAuthenticatedUser();
    const input = {
      ...(variables?.input || {}),
      id: cognitoUser.attributes.sub,
    };
    const { data } = (await API.graphql(
      graphqlOperation(updateUser, { input })
    )) as any;
    return data.updateUser;
  });
  return res;
};
