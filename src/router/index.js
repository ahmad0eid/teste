import Vue from 'vue'
import VueRouter from 'vue-router'
import timeline from '../views/Timeline'
import login from '../views/Login'
import signup from '../views/Signup'
import profile from '../views/Profile'
import messenger from '../views/Messenger'
import settings from '../views/Settings'
import explorePages from '../views/ExplorePages'
import test from '../views/test'
import firebase from 'firebase'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'timeline',
      component: timeline,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/settings',
      name: 'settings',
      component: settings,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/messenger',
      name: 'messenger',
      component: messenger,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/explorePages',
      name: 'explorePages',
      component: explorePages,
      meta: {
        requiresAuth: true
      }
    },



    {
      path: '/test',
      name: 'test',
      component: test,
      meta: {
        requiresAuth: true
      }
    }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(rec => rec.meta.requiresAuth)) {
    let user = firebase.auth().currentUser;
    if(user) {
      next();
    } else {
      next({name: 'login'})
    }
  } else {
    next();
  }
})

export default router
