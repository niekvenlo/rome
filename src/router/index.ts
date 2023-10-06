import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShowDetails from '../views/ShowDetails.vue'
import SearchPage from '../views/SearchPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/search',
      component: SearchPage
    },
    {
      path: '/shows/:id',
      component: ShowDetails
    }
  ]
})

export default router
