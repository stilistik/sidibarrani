import { createRouter, createWebHistory } from 'vue-router'
import Login from '/src/pages/Login.vue'
import GameList from '/src/pages/GameList.vue'
import Signup from '/src/pages/Signup.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/games',
    name: 'Games',
    component: GameList,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router