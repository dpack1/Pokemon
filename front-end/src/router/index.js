import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Kanto from '../views/Kanto.vue'
import Jhoto from '../views/Jhoto.vue'
import Hoenn from '../views/Hoenn.vue'




Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/kanto',
    name: 'kanto',
    component: Kanto
  },
  {
    path: '/jhoto',
    name: 'jhoto',
    component: Jhoto
  },
  {
    path: '/hoenn',
    name: 'hoenn',
    component: Hoenn
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
