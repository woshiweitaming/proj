import { createStore } from 'vuex'
import state from './state'
import mutations from './mutations'
import * as getters from './getters'

export default createStore({
  state: state,
  mutations: mutations,
  getters: getters
})
