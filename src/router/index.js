import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import Cocktail from '../views/Cocktail.vue'
import LetterSearch from '../views/LetterSearch.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/search/:search',
    name: 'Search',
    component: Search
  },
  {
    path: '/cocktail/:id',
    name: 'Cocktail',
    component: Cocktail
  },
  {
    path: '/drinks/:letter',
    name: 'LetterSearch',
    component: LetterSearch
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
