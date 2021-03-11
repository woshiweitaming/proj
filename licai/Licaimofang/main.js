import Vue from 'vue'
import uView from 'uview-ui'
import App from './App'
import store from './store/index.js'
import tips from '@/utils/tips.js'
import storage from '@/utils/storage.js'
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
App.mpType = 'app'

//挂载提示
Vue.prototype.$tips = tips
//挂载本地储存
Vue.prototype.$storage = storage
Vue.use(uView)
Vue.component('mescroll-body', MescrollBody)

const app = new Vue({
	store,
    ...App
})
app.$mount()
