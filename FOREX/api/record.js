import request from '@/request/request.js'
import qs from 'qs'

//获取提现记录
export const getWithdrawal = (data) => {
	return request({
		url: '/user/getWithdrawal',
		method: 'get',
		data,
	})
}

//获取充值记录
export const getPay = (data) => {
	return request({
		url: '/user/getPay',
		method: 'get',
		data,
	})
}

//获取持仓记录
export const getBonds = (data) => {
	return request({
		url: '/user/getBonds',
		method: 'get',
		data,
	})
}

//获取历史订单
export const getHistoryOrder = (data) => {
	return request({
		url: '/user/getHistoryOrder',
		method: 'get',
		data,
	})
}

//撤销充值
export const revokePay = (data) => {
	return request({
		url: '/user/revokePay',
		method: 'get',
		data,
	})
}
//获取持仓订单详情
export const getOrderDetails = (data) => {
	return request({
		url: '/user/getOrderDetails',
		method: 'get',
		data,
	})
}
//止损止盈
export const setEndProfit = (data) => {
	return request({
		url: '/user/setEndProfit',
		method: 'post',
		data,
	})
}

//获取期货持仓
export const getQhOrder = (data) => {
	return request({
		url: '/user/getQhOrder',
		method: 'get',
		data
	})
}

//获取期货历史
export const getQhHistoryOrder = (data) => {
	return request({
		url: '/user/getQhHisOrder',
		method: 'get',
		data
	})
}


//获取历史订单详情
export const getHisOrderDetails = (data) => {
	return request({
		url: '/user/getHisOrderDetails',
		method: 'get',
		data,
	})
}

//获取合约持仓及委托订单
export const getEntrustOrder = (data) => {
	return request({
		url: '/user/getEntrustOrder',
		method: 'get',
		data,
	})
}

//合约平仓
export const endContractOrder = (data) => {
	return request({
		url: '/user/endContractOrder',
		method: 'get',
		data,
	})
}

//撤销委托
export const revokeEntrust = (data) => {
	return request({
		url: '/user/revokeEntrust',
		method: 'get',
		data,
	})
}

//获取币币记录
export const getBbOrder = (data) => {
	return request({
		url: '/user/getBbOrder',
		method: 'get',
		data
	})
}


/**
 * 撤销币币委托
 */
export const revokeBbEntrust = (data) => {
	return request({
		url: '/user/revokeBbEntrust',
		method: 'get',
		data
	})
}

export const getWithdrawalBank = (data = {}) => {
	return request({
		url: '/user/getWithdrawalBank',
		method: 'get',
		data
	})
}