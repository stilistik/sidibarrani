import { API, Auth, graphqlOperation } from "aws-amplify";
import { ref } from "vue";
import { getUser } from "../graphql/queries";
import { actions } from "../store/Store";
import { Message } from "../utils/Message";

export async function login(email: string, password: string) {
  const { setIsAuthenticated } = actions;
  try {
    await Auth.signIn({
      username: email,
      password,
    });
    setIsAuthenticated(true);
  } catch (err) {
    Message.error("Error during login");
  }
}

export async function checkExistingSession() {
  const { setIsAuthenticated } = actions;

  try {
    const user = await Auth.currentAuthenticatedUser();
    if (user) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  } catch (err) {
    Message.error("Error during check for existing session");
  }
}

export async function signUp(
  email: string,
  password: string,
  username: string
) {
  try {
    const result = await Auth.signUp({
      username: email,
      password,
      attributes: {
        email,
        nickname: username,
      },
    });
    return result.user;
  } catch (err) {
    Message.error("Error during sign up process");
  }
}

export async function confirmEmail(username: string, code: string) {
  try {
    const result = await Auth.confirmSignUp(username, code);
    return result;
  } catch (error) {
    Message.error("Error during email verification");
  }
}

export async function logout() {
  try {
    await Auth.signOut({ global: true });
  } catch (err) {
    console.log(err);

    Message.error("Error during logout process");
  }
}

async function getCurrentAppUser() {
  const cognitoUser = await Auth.currentAuthenticatedUser();
  const res = (await API.graphql(
    graphqlOperation(getUser, { id: cognitoUser.attributes.sub })
  )) as any;
  return res.data.getUser;
}

const userRef = ref(null);
export const useCurrentUser = () => {
  if (!userRef.value) {
    getCurrentAppUser().then((user) => (userRef.value = user));
  }
  return userRef;
};
