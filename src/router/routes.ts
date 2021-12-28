import LoginPage from "/src/pages/LoginPage.vue";
import SignupPage from "/src/pages/SignupPage.vue";
import HomePage from "/src/pages/HomePage.vue";
import LobbyPage from "/src/pages/LobbyPage.vue";
import GamePage from "/src/pages/game/GamePage.vue";
import GameProvider from "/src/components/GameProvider.vue";
import SpringTest from "/src/spring/SpringTest.vue";

const routes = [
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/signup",
    name: "SignupPage",
    component: SignupPage,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/spring",
    name: "SpringTest",
    component: SpringTest,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/game",
    name: "Game",
    component: GameProvider,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "lobby",
        name: "LobbyPage",
        component: LobbyPage,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "play",
        name: "GamePage",
        component: GamePage,
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
];

export default routes;
