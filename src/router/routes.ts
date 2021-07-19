import Login from "/src/pages/Login.vue";
import Signup from "/src/pages/Signup.vue";
import Home from "/src/pages/Home.vue";
import Lobby from "/src/pages/Lobby.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/lobby",
    name: "Lobby",
    component: Lobby,
    meta: {
      requiresAuth: true,
    },
  },
];

export default routes;
