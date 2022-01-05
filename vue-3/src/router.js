import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/home/Home.vue'
import Shop from './components/shop/Shop.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/shop',
    component: Shop
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})