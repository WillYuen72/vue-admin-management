import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import about from './route/about'
import demo from './route/demo'

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

instance.addRoutes(about)
instance.addRoutes(demo)

instance.beforeEach((to, from, next) => {
  /* must call `next` */
  console.log(from, to)
  next()
})

export default instance
