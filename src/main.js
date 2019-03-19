import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'
import store from './store/store'
import * as types from './store/types'
import VueVideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
import VueParticles from 'vue-particles'
import VueCookies from 'vue-cookies'
import Quasar from 'quasar'
import Util from '@/plugins/util.js'

axios.defaults.baseURL = 'http://127.0.0.1'
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (store.state.token) {
      console.log(config)
      config.headers.Authorization = `token ${store.state.token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          store.commit(types.LOGOUT)

          // 只有在当前路由不是登录页面才跳转
          router.currentRoute.path !== 'login' &&
            router.replace({
              path: 'login',
              query: { redirect: router.currentRoute.path }
            })
      }
    }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    return Promise.reject(error.response.data)
  }
)

Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(qs)
Vue.use(VueVideoPlayer)
Vue.use(VueParticles)
Vue.use(Quasar)
Vue.prototype.$util = Util
// Vue.use(VueVideoPlayerADS)
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
