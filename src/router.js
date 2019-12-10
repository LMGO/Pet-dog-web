import Vue from 'vue'
import Router from 'vue-router'
// import Login from './views/Login.vue'
// import Searchbread from './views/Searchbread.vue'
// import Recognition from './views/Recognition.vue'
// import Community   from './views/Community.vue'
// import Me from './views/Me.vue'
Vue.use(Router) 

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import('./views/Index.vue')
    },
    {
      path: '/searchbread',
      name: 'Searchbread',
      component:() => import('./views/Searchbread.vue')
    },
    {
      path: '/recognition',
      name: 'Recognition',
      component:() => import('./views/Recognition.vue')
    },
    {
      path: '/community',
      name: 'Community',
      component:() => import(/* webpackChunkName: "about" */ './views/Community.vue')
    },
    {
      path: '/me',
      name: 'Me',
      component:() => import('./views/Me.vue')
    },
    
  ]
})
