import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '../views/SignUpView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },
  {
  path: '/login',
  name: 'login',
  component: LoginView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
