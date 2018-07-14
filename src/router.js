import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Login from './views/user/Login'
import Signup from './views/user/Signup'
import Verify from './views/user/VerifyEmail'
import Dashboard from './views/user/Dashboard'
import Profile from './views/user/Profile'
import Logout from './views/user/Logout'
import store from "./store";

Vue.use(Router);

export default new Router({
    mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
      {
          path: '/login',
          name: 'login',
          component: Login,
          meta: {requiresVisitor: true}
      },
      {
          path: '/signup',
          name: 'signup',
          component: Signup,
          meta: {requiresVisitor: true}
      },
      {
          path: '/verify',
          name: 'verify',
          component: Verify,
          meta: {requiresVisitor: true}
      },
      {
          path: '/profile',
          name: 'profile',
          component: Profile,
          meta: {requiresAuth: true},
          children: [
              {
                  path: 'dashboard',
                  name: 'dashboard',
                  component: Dashboard,
                  meta: {requiresAdmin: true},
                 beforeEnter: (to, from, next) => {
                     if (store.getters.isAdmin) {
                         next()
                     } else {
                         next('/profile')
                     }
                 }
              },
          ]
      },
      {
          path: '/logout',
          name: 'logout',
          component: Logout,
          meta: {requiresAuth: true}
      },
      {
          path: '*',
          redirect: {
              name: 'home'
          }
      }
  ]
})
