import { Auth } from "aws-amplify";
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
