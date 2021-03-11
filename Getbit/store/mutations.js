const mutations = {
	//设置全局语言
	['SET_GLOBAL_LANGUAGE'](state, data){
		state.globalLanguage = data
	},
	//设置全局模式
	['SET_GLOBAL_MODE'](state, data){
		state.mode = data
	},
	//设置区号
	['SET_ARE'](state, data){
		state.are = data
	},
	//设置行情
	['SET_QUOTATION'](state, data){
		state.quotation = data
	}
}

export default mutations