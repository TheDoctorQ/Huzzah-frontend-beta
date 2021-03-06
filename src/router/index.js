import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EventView from '../views/EventView.vue'
import FeastView from '../views/FeastView.vue'
import VendorView from '../views/VendorView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/events',
    name: 'events',
    component: EventView
  },
  {
    path: '/feasts',
    name: 'feasts',
    component: FeastView
  },
  {
    path: '/vendors',
    name: 'vendors',
    component: VendorView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

