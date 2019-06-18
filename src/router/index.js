import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import nintendo from './route/about'

Vue.use(Router)

const instance = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})

instance.addRoutes(nintendo)

instance.beforeEach((to, from, next) => {
  /* must call `next` */
  console.log(from, to)
  next()
})

export default instance
