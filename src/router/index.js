// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/about',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/hangmangame',
    component: () => import('@/views/HangmanGame.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
