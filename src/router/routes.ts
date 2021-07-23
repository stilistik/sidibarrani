import LoginPage from "/src/pages/LoginPage.vue";
import SignupPage from "/src/pages/SignupPage.vue";
import HomePage from "/src/pages/HomePage.vue";
import LobbyPage from "/src/pages/LobbyPage.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/signup",
    name: "Signup",
    component: SignupPage,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/",
    name: "Home",
    component: HomePage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/lobby",
    name: "Lobby",
    component: LobbyPage,
    meta: {
      requiresAuth: true,
    },
  },
];

export default routes;
