import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AdministrationView from '../views/AdministrationView.vue';
import ReloadView from '../views/ReloadView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/connexion',
    name: 'connexion',
    component: () => import('../views/ConnexionView.vue')
  },
  {
    path: '/createPost',
    name: 'createPost',
    component: () => import('../components/Post/CreatePost.vue')
  },
  {
    path: '/administration',
    name: 'administration',
    component: AdministrationView
  },
  {
    path: '/reload',
    name: 'reload',
    component: ReloadView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active'
})

export default router
