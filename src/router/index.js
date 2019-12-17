import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Register from '@/components/Register'
import ForgetPass from '@/components/ForgetPass'
import CompanyLogin from '@/components/CompanyLogin'
import product from '@/components/product'
import sever from '@/components/sever'
import ours from '@/components/ours'
import Message from '@/components/Message'
import messDetail from '@/components/Message/messDetail'
import Information from '@/components/Information'
import detail from '@/components/Information/detail'
import Laws from '@/components/Laws'
import NotFound from '@/components/NotFound'
Vue.use(Router)

export default new Router({
   mode: 'history',
  // base: '/dist/',             //添加根目录
  // 	scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      component: Index,
      redirect:'Index',
      meta: {
        title: '唐鼎耀华基金-大唐财富旗下基金销售公司',
        keepAlive: false // 不需要缓存
      }
    },{
      path: '/Index',
      name: 'Index',
      component: Index,
      meta: {
        title: '唐鼎耀华基金-大唐财富旗下基金销售公司',
        keepAlive: false // 不需要缓存
      }
    },{
      path:'/Register',
      name: 'Register',
      meta: {
        title: '注册',
        keepAlive: false // 不需要缓存
      },
      component:Register
    },{
      path:'/ForgetPass',
      name: 'ForgetPass',
      meta: {
        title: '忘记密码',
        keepAlive: false // 不需要缓存
      },
      component:ForgetPass
    },{
      path:'/CompanyLogin',
      name: 'CompanyLogin',
      meta: {
        title: '登录',
        keepAlive: false // 不需要缓存
      },
      component:CompanyLogin
    },{
      path:'/product',
      name: 'product',
      meta: {
        title: '产品|私募基金，公募基金，资管计划，企业金融',
        keepAlive: false // 不需要缓存
      },
      component:product
    },{
      path:'/sever',
      name: 'sever',
      meta: {
        title: '服务|财富师服务，私人顾问，理财知识',
        keepAlive: false // 不需要缓存
      },
      component:sever
    },{
      path:'/ours',
      name: 'ours',
      meta: {
        title: '关于我们|基金代销，唐鼎耀华，大唐财富',
        keepAlive: false // 不需要缓存
      },
      component:ours
    },{
      path:'/Message',
      name: 'Message',
      meta: {
        title: '公募金信息披露，平台通知',
        keepAlive: false // 不需要缓存
      },
      component:Message
    },{
      path:'/Information',
      name: 'Information',
      meta: {
        title: '大唐财富旗下基金销售公司',
        keepAlive: false // 不需要缓存
      },
      component:Information
    },{
      path:'/detail',
      name: 'detail',
      meta: {
        title: '大唐财富旗下基金销售公司',
        keepAlive: false // 不需要缓存
      },
      component:detail
    },{
      path:'/messDetail',
      name: 'messDetail',
      meta: {
        title: '大唐财富旗下基金销售公司',
        keepAlive: false // 不需要缓存
      },
      component:messDetail
    },{
      path:'/Laws',
      name: 'Laws',
      meta: {
        title: '大唐财富旗下基金销售公司',
        keepAlive: false // 不需要缓存
      },
      component:Laws
    },
   { path: '*', component: NotFound }
  ]
})
