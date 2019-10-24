import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Searchbread from './views/Searchbread.vue'
import Recognition from './views/Recognition.vue'
import Community   from './views/Community.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    // {
    //   path: '/register',
    //   name: 'register',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/Register.vue')
    // },
    {
      path: '/index',
      name: 'Index',
      component: () => import(/* webpackChunkName: "about" */ './views/Index.vue')
    },
    {
      path: '/searchbread',
      name: 'Searchbread',
      component:Searchbread
    },
    {
      path: '/recognition',
      name: 'Recognition',
      component:Recognition
    },
    {
      path: '/community',
      name: 'Community',
      component:Community
    },
    
  ]
})
