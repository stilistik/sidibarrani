import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/pages/Home.vue'
import GameList from '/src/pages/GameList.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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