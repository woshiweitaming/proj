import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './skin/skin.styl'
import 'normalize.css'
import App from './App.vue'
import router from './router'
import store from './store'
import tips from './utils/tips'
import storage from './utils/storage'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$tips = tips
Vue.prototype.$storage = storage

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
