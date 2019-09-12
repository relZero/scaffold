import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './app.vue'
import axios from 'axios'

import '../assets/styles/global.scss'
import createRouter from '../router'
import createStore from '../store'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.prototype.$http = axios

const router = createRouter()
const store = createStore()

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#root')
