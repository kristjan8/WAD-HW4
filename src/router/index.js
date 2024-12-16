import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '../views/SignUpView.vue'
import LoginView from '../views/LoginView.vue'
import AddPostView from '../views/AddPostView.vue'
import ContactsView from '../views/ContactsView.vue'
import EditPostView from '../views/EditPostView.vue'

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
  },
  {
    path: '/addpost',
    name: 'addpost',
    component: AddPostView
  },  {
    path: '/editpost/:id',
    name: 'editpost',
    component: EditPostView
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router