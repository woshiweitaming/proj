import Vue from 'vue'
import ElementUI from 'element-ui'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css'
// import './assets/fonts/iconfont.css'
import './assets/styles/transition.css'
import './assets/styles/global.styl'
import Blob from './blob/Blob.js'
import Export2Excel from './blob/Export2Excel.js'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VXETable)
window.menuList = []

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
