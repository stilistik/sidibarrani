import { createRouter, createWebHistory } from 'vue-router'
import Login from '/src/pages/Login.vue'
import GameList from '/src/pages/GameList.vue'
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
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router