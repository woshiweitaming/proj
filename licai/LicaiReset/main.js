import Vue from 'vue'
import App from './App'
import store from './store/index.js'
App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
