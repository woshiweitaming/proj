//获取全局语言
export const getGlobalLang = state => state.globalLang
//获取全局语言包
export const getLangData = state => state.langData
//获取产品列表
export const getProductData = state => state.product.productData
//获取ws数据
export const getWSData = state => state.ws
//获取侧边ws数据
export const getLeftWsData = state => state.leftWs
//获取余额
export const getLeftmoney = state => state.leftmoney
//获取人民币
export const getCny = state => state.cny
//获取实名信息
export const getCertInfo = state => state.certInfo
//获取用户信息
export const getUserInfoData = state => state.userInfo
//获取订单列表数据
export const getPositionRecordData = state => state.positionRecordData
//获取历史列表数据
export const getHistoryRecordData = state => state.historyRecordData
//获取交易方向
export const getTradeAction = state => state.tradeAction
//获取各个账户余额
export const getAccountBanlance = state => state.accountBanlance
//获取交易数据
export const getTradeParams = state => state.tradeParams
//获取汇率
export const getRate = state => state.rate
//获取高级认证步骤
export const getAdvancedCertCurrent = state => state.advancedCert.current
//获取当前交易类型
export const getCurrentTradeType = state => state.currentTradeType
//获取币池数据
export const getCoinInfoData = state => state.coinInfoData
export const getTimerStatus = state => state.timerstatus
export const getTimerStatus2 = state => state.timerstatus2