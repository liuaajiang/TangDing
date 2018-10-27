import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Register from '@/components/Register'
import ForgetPass from '@/components/ForgetPass'
import CompanyLogin from '@/components/CompanyLogin'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },{
      path: '/Index',
      name: 'Index',
      component: Index
    },{
      path:'/Register',
      name: 'Register',
      component:Register
    },{
      path:'/ForgetPass',
      name: 'ForgetPass',
      component:ForgetPass
    },{
      path:'/CompanyLogin',
      name: 'CompanyLogin',
      component:CompanyLogin
    }
  ]
})
