import Vue from 'vue'
import uView from "uview-ui";
import App from './App'
import store from './store/index.js'
App.mpType = 'app'


Vue.use(uView);


const app = new Vue({
	store,
    ...App
})
app.$mount()
