import { createRouter, createWebHistory } from 'vue-router'
import Login from '/src/pages/Login.vue'
import Signup from '/src/pages/Signup.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
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