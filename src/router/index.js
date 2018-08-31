import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '@/components/Home'
// import about from '@/components/About'

Vue.use(VueRouter)

export default new VueRouter({
  // scrollBehavior(to, from, savedPosition) {
  //   if (to.hash) {
  //     return {
  //       selector: to.hash
  //     }
  //   } else if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     return { x: 0, y: 0}
  //   }
  // },
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'home',
      component: home
    },
  ]
})