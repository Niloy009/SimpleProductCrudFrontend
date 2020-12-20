import Vue from 'vue'
import VueRouter from 'vue-router'
import AllProduct from "../views/AllProduct";
import Login from "../views/Login";
import Register from "../views/Register";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AllProduct',
    component: AllProduct
  },
  {
    path: '/all-products',
    name: 'AllProduct',
    component: AllProduct
  },
  {
    path: '/login',
    name: 'Login',
    component: Login

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
