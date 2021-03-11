/**
 * 状态
 */
const state = {
	//语言
	globalLang: 'cn',
	//语言包
	langData: '',
	//产品
	product: {
		productData: []
	},
	//webscoket
	ws: {},
	//侧边数据
	leftWs: [],
	//余额
	leftmoney: 0,
	//人民币
	cny: 0,
	//实名信息
	certInfo: {
	   balance: '',
	   phone: '',
	   banknumber:  '',
	   bname:  '',
	   badds:  '',
	   idcard:  '',
	   qbdizhi:  '',
	   bankname:  ''
	},
	//用户信息
	userInfo: {},
	//持仓订单
	positionRecordData: [],
	//历史订单
	historyRecordData: {},
	//买卖方向
	tradeAction: 0,
	//各个账户数据
	accountBanlance: [],
	//交易数据
	tradeParams: {},
	//账户兑换汇率
	rate: {},
	//高级认证
	advancedCert: {
		current: 0
	},
	//交易类型
	currentTradeType: 0,
	//币池数据
	coinInfoData: {}
}

export default state