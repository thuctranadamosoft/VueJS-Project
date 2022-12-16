import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dashboard from '../views/Dashboard.vue'
import SetupExample from '../views/SetupExample.vue'
import SignIn from "@/views/SignIn.vue";
import MyMap from './../views/MyMap.vue'
import FormValidation from '../views/FormValidation.vue'
import FormSetup from '../views/FormSetup.vue'
import FirstChild from '../views/FirstChild.vue'
import SecondChild from '../views/SecondChild.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/setup-example',
    name: 'setupexample',
    component: SetupExample,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/sign-in',
    name: 'signin',
    component: SignIn,
  },
  {
    path: '/my-map',
    name: 'MyMap',
    component: MyMap,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/form-validation',
    name: 'FormValidation',
    component: FormValidation,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/form-setup',
    name: 'FormSetup',
    component: FormSetup,
    meta: {
      requiresAuth: false
    },
    children: [
      {
        path: '',
        name: 'firstchild',
        component: FirstChild
      },
      {
        path: 'second-child',
        name: 'secondtchild',
        component: SecondChild
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  console.log('to', to)
  if (to.matched.some(record => record.meta.requiresAuth)) {
  // if(to.path !== '/sign-in') {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
      next({ name: 'signin' })
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})

export default router
