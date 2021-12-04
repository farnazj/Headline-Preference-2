import Vue from 'vue'
import Router from 'vue-router'
import Consent from './views/Consent.vue'
import Headlines from './views/Headlines.vue'
import Demographics from './views/Demographics.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'consent',
      component: Consent
    },
    {
      path: '/headlines',
      name: 'headlines',
      component: Headlines,
      props: true
    },
    {
      path: '/survey',
      name: 'demographics',
      component: Demographics
    },
    {
      path: '*',
      component: Consent
    }
  ]
})

export default router;
