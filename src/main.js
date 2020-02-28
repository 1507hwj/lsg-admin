import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control
import i18n from './lang' // Internationalization
// import { mockXHR } from '../mock'
// if (process.env.NODE_ENV === 'production') {
//   mockXHR()
// }

// 引入axios,就不需要每个页面都引入
import axios from 'axios'

const instance1 = axios.create({
  baseURL: 'http://39.107.33.189:8443'
  //   baseURL: 'http://39.107.33.189:8443'

})
const instance2 = axios.create({
  baseURL: 'http://39.107.33.189:8443'
  //   baseURL: 'http://39.107.33.189:8443'
})

const instance3 = axios.create({
  baseURL: 'http://39.107.33.189:8443'
  //   baseURL: 'http://39.107.33.189:8443'
})

Vue.prototype.$axios = axios
Vue.prototype.$instance1 = instance1
Vue.prototype.$instance2 = instance2
Vue.prototype.$instance3 = instance3

// const getQueryOpenPositions = axios.create({
//   baseURL: 'http://39.107.33.189:8443/openposition/queryOpenPositions'
// })
// Vue.prototype.$getQueryOpenPositions = getQueryOpenPositions

// set ElementUI lang to EN
// Vue.use(ElementUI, {
//   locale
// })

// 如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
