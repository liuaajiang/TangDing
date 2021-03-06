// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import "babel-polyfill"
import store from './vuex/store'
import $ from 'jquery'
let Base64 = require('js-base64').Base64
import utils from '../static/js/utils.js'  

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(utils);//使用方法
/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
