const mutations = {
	//设置语言
	['SET_GLOBAL_LANG'](state, data){
		state.globalLang = data
	},
	//设置语言包
	['SET_LANG_DATA'](state, data){
		state.langData = data
	},
	//设置产品列表
	['SET_PRODUCT_DATA'](state, data){
		state.product.productData = data
	},
	//设置ws
	['SET_WS_DATA'](state, data){
		state.ws = data
	},
	//设置侧边WS数据
	['SET_LEFT_WS_DATA'](state, data){
		state.leftWs = data
	},
	//设置余额
	['SET_LEFTMONEY'](state, data){
		state.leftmoney = data
	},
	//设置人民币
	['SET_CNY'](state, data){
		state.cny = data
	},
	//设置实名信息
	['SET_CERT_INFO'](state, data){
		state.certInfo = data
	},
	//设置用户信息
	['SET_USER_INFO_DATA'](state, data){
		state.userInfo = data
	},
	//设置持仓订单数据
	['SET_POSITION_RECORD_DATA'](state, data){
		state.positionRecordData = data
	},
	//设置历史订单数据
	['SET_HISTORY_RECORD_DATA'](state, data){
		state.historyRecordData = data
	},
	//设置交易方向
	['SET_TRADE_ACTION'](state, data){
		state.tradeAction = data
	},
	//设置各个账户余额
	['SET_ACCOUNT_BANLANCE'](state, data){
		state.accountBanlance = data
	},
	//设置交易数据
	['SET_TRADE_PARAMS'](state, data){
		state.tradeParams = data
	},
	//设置汇率
	['SET_RATE'](state, data){
		state.rate = data
	},
	//设置高级认证步骤
	['SET_ADVANCED_CERT_CURRENT'](state, data){
		state.advancedCert.current = data
	},
	//设置交易类型
	['SET_CURRENT_TRADE_TYPE'](state, data){
		state.currentTradeType = data
	},
	//设置币池数据
	['SET_COIN_INFO_DATA'](state, data){
		state.coinInfoData = data
	},
}

export default mutations