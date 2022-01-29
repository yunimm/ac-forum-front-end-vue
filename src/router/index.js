import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'

Vue.use(VueRouter)
// 路由清單
const routes = [
  {
    path: '/signin',
    name: 'sing-in',
    component: SignIn
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
