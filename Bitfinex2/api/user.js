import request from '../request/request.js'
import qs from 'qs'

//登录
export const userLogin = (data) => {
	return request({
		url: '/pub/login',
		method: 'post',
		data
	})
}

//注册
export const userRegister = (data) => {
	return request({
		url: '/user/register',
		method: 'post',
		data
	})
}

//第三方登录
export const userThirdLogin = (data) => {
	return request({
		url: '/pub/getLoginUrl',
		method: 'get',
		data
	})
}

//手机登录
export const userPhoneLogin = (data) => {
	return request({
		url: '/pub/phoneLogin',
		method: 'post',
		data
	})
}

//获取余额
export const getUserLeftmoney = (data) => {
	return request({
		url: '/user/getBalance',
		method: 'get',
		data
	})
}

//退出账户
export const userLoginOut = (data) => {
	return request({
		url: '/user/loginOut',
		method: 'get',
		data
	})
}

//获取实名信息
export const checkCertInfo = (data = {}) => {
	return request({
		url: '/user/checkIn',
		method: 'post',
		data
	})
}

//提交实名信息
export const userCertInfo = (data = {}) => {
	return request({
		url: '/user/getCheckIn',
		method: 'get',
		data
	})
}

//更新密码
export const updPwd = (data = {}) => {
	return request({
		url: '/user/updPwd',
		method: 'post',
		data
	})
}

//更新联系方式
export const updPhone = (data = {}) => {
	return request({
		url: '/user/updPhone',
		method: 'post',
		data
	})
}

//充值渠道
export const getPayList = (data = {}) => {
	return request({
		url: '/user/getPayList',
		method: 'get',
		data
	})
}

//提交充值
export const pay = (data = {}) => {
	return request({
		url: '/user/pay',
		method: 'post',
		data
	})
}

//获取钱包地址
export const getWalletAddr = (data = {}) => {
	return request({
		url: '/user/getPayAdds',
		method: 'get',
		data
	})
}

//提现申请
export const withdrawal = (data = {}) => {
	return request({
		url: '/user/withdrawal',
		method: 'post',
		data
	})
}

//忘记密码
export const retrievePwd = (data = {}) => {
	return request({
		url: '/pub/retrievePwd',
		method: 'post',
		data
	})
}

//平仓
export const closePosition = (data = {}) => {
	return request({
		url: '/user/endOrder',
		method: 'get',
		data
	})
}

//个人信息
export const getUserInfo = (data = {}) => {
	return request({
		url: '/user/getUserInfo',
		method: 'get',
		data
	})
}

//买卖
export const transaction = (data = {}) => {
	return request({
		url: '/user/transaction',
		method: 'post',
		data
	})
}

//期货交易
export const futuresTrade = (data = {}) => {
	return request({
		url: '/user/futuresTrade',
		method: 'post',
		data
	})
}

//修改昵称
export const updNickName = (data = {}) => {
	return request({
		url: '/user/updNickName',
		method: 'get',
		data
	})
}

//获取各账户
export const getAllBalance = (data = {}) => {
	return request({
		url: '/user/getAllBanlace',
		method: 'get',
		data
	})
}

/**
 * 兑换汇率
 */
export const getExchangeRate = (data = {}) => {
	return request({
		url: '/user/getExchangeRate',
		method: 'get',
		data
	})
}

/**
 * 确认兑换
 */
export const confirmExchange = (data = {}) => {
	return request({
		url: '/user/confirmExchange',
		method: 'post',
		data
	})
}

/**
 * 提交划转
 */
export const balanceTransfer = (data = {}) => {
	return request({
		url: '/user/balanceTransfer',
		method: 'post',
		data
	})
}

/**
 * 上传身份证
 */
export const uploadIdcard = (data = {}) => {
	return request({
		url: '/user/uploadIdImg',
		method: 'post',
		data
	})
}

/**
 * 币币交易
 */
export const spotTrading = (data = {}) => {
	return request({
		url: '/user/spotTrading',
		method: 'post',
		data
	})
}

/**
 * 获取充值链
 */
export const getPayUrlAdds = (data = {}) => {
	return request({
		url: '/user/getPayUrlAdds',
		method: 'get',
		data
	})
}

/**
 * 获取提现配置
 */
export const getWinConfig = (data = {}) => {
	return request({
		url: '/user/getWinConfig',
		method: 'get',
		data
	})
}

//获取帐变记录
export const getPaylog = (data = {}) => {
	return request({
		url: '/user/getPaylog',
		method: 'get',
		data
	})
}

//获取钱包地址
export const getPayAddList = (data = {}) => {
	return request({
		url: '/user/getPayAddList',
		method: 'get',
		data
	})
}


//保存钱包地址
export const saveGetPayAdd = (data = {}) => {
	return request({
		url: '/user/saveGetPayAdd',
		method: 'post',
		data
	})
}

//删除钱包地址
export const delPayAddress = (data = {}) => {
	return request({
		url: '/user/delPayAddress',
		method: 'get',
		data
	})
}

//结算
export const endDetails = (data = {}) => {
	return request({
		url: '/user/endDetails',
		method: 'get',
		data
	})
}

//银行卡提现
export const withdrawalBank = (data = {}) => {
	return request({
		url: '/user/withdrawalBank',
		method: 'post',
		data
	})
}

//提币
export const withdrawalzw = (data = {}) => {
	return request({
		url: '/user/withdrawalzw',
		method: 'post',
		data
	})
}

//获取币池信息
export const getCoinPoolInfo = (data = {}) => {
	return request({
		url: '/user/getCoinPoolInfo',
		method: 'post',
		data
	})
}

//获取单个币种信息
export const getFinProductInfo = (data = {}) => {
	return request({
		url: '/user/getFinProductInfo',
		method: 'post',
		data
	})
}

//提交币种
export const submitOrder = (data = {}) => {
	return request({
		url: '/user/submitOrder',
		method: 'post',
		data
	})
}

//提交确认认购订单
export const payOrder = (data = {}) => {
	return request({
		url: '/user/payOrder',
		method: 'post',
		data
	})
}

//认购订单列表
export const getCoinPoolProductOrderList = (data = {}) => {
	return request({
		url: '/user/getCoinPoolProductOrderList',
		method: 'post',
		data
	})
}

//认购订单详情
export const getCoinPoolProductOrder = (data = {}) => {
	return request({
		url: '/user/getCoinPoolProductOrder',
		method: 'post',
		data
	})
}

//赎回订单确认
export const getCoinPoolRefundOrderInfo = (data = {}) => {
	return request({
		url: '/user/getCoinPoolRefundOrderInfo',
		method: 'post',
		data
	})
}

//赎回订单
export const refundOrder = (data = {}) => {
	return request({
		url: '/user/refundOrder',
		method: 'post',
		data
	})
}

//推广链接
export const getTgUrl = (data = {}) => {
	return request({
		url: '/user/getTgUrl',
		method: 'get',
		data
	})
}

//获取锁仓产品
export const getMiningPoolProcuteList = (data = {}) => {
	return request({
		url: '/user/getMiningPoolProcuteList',
		method: 'post',
		data
	})
}

//提交锁仓
export const submitMiningPoolOrder = (data = {}) => {
	return request({
		url: '/user/submitMiningPoolOrder',
		method: 'post',
		data
	})
}

//锁仓订单列表
export const getMiningPoolOrderList = (data = {}) => {
	return request({
		url: '/user/getMiningPoolOrderList',
		method: 'post',
		data
	})
}

//赎回订单详情
export const refundMiningPoolOrderInfo = (data = {}) => {
	return request({
		url: '/user/refundMiningPoolOrderInfo',
		method: 'post',
		data
	})
}

//赎回
export const refundMiningPoolOrder = (data = {}) => {
	return request({
		url: '/user/refundMiningPoolOrder',
		method: 'post',
		data
	})
}

//获取收益
export const getMiningPoolProfitTotal = (data = {}) => {
	return request({
		url: '/user/getMiningPoolProfitTotal',
		method: 'post',
		data
	})
}

//获取收益详情
export const getMiningPoolBillListr = (data = {}) => {
	return request({
		url: '/user/getMiningPoolBillList',
		method: 'post',
		data
	})
}

//提交锁仓订单
export const payMiningPoolOrder = (data = {}) => {
	return request({
		url: '/user/payMiningPoolOrder',
		method: 'post',
		data
	})
}

//确认上传
export const uploadConfirm = (data = {}) => {
	return request({
		url: '/user/uploadIdImg/99',
		method: 'post',
		data
	})
}

//pow列表
export const getMiningPoolList = (data = {}) => {
	return request({
		url: '/user/getMiningPoolList',
		method: 'get',
		data
	})
}

//pow详情
export const getMiningPoolInfo = (data = {}) => {
	return request({
		url: '/user/getMiningPoolInfo',
		method: 'get',
		data
	})
}

//pow产品列表
export const getMiningProcuteList = (data = {}) => {
	return request({
		url: '/user/getMiningProcuteList',
		method: 'get',
		data
	})
}

//pow产品详情
export const getMiningProcuteInfo = (data = {}) => {
	return request({
		url: '/user/getMiningProcuteInfo',
		method: 'post',
		data
	})
}

//pow交易
export const submitPowOrder = (data = {}) => {
	return request({
		url: '/user/submitPowOrder',
		method: 'post',
		data
	})
}

//pow记录
export const getPowOrderList = (data = {}) => {
	return request({
		url: '/user/getPowOrderList',
		method: 'post',
		data
	})
}

//pow记录详情
export const getPowOrderDetail = (data = {}) => {
	return request({
		url: '/user/getPowOrderInfo',
		method: 'post',
		data
	})
}

export const getQhDynamic = (data = {}) => {
	return request({
		url: '/pub/getQhDynamic',
		method: 'get',
		data
	})
}

export const getWithdrawalTypeList = (data = {}) => {
	return request({
		url: '/user/getWithdrawalTypeList',
		method: 'post',
		data
	})
}

export const setEndProfit = (data = {}) => {
	return request({
		url: '/user/setEndProfit',
		method: 'post',
		data
	})
}
