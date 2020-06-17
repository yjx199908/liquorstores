import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginBlock from '../components/login/loginblock'
Vue.use(VueRouter)

  const routes = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/login',
    component:LoginBlock
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
