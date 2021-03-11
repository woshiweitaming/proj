import request from '../request/request.js'
import * as APIS from './api_url.js'


export const getCoinList = (data) => {
	return request({
		url: APIS.WALLET_GETCOINLIST_API,
		method: 'get',
		data
	})
}

export const getTrans = (data) => {
	return request({
		url: APIS.TRANS_GETTRANS_API,
		method: 'get',
		data
	})
}


export const getWalletBalance = (data) => {
	return request({
		url: APIS.GET_WALLET_BALANCE_API,
		method: 'get',
		data
	})
}

export const getOrder = (data) => {
	return request({
		url: APIS.GET_ORDER_API,
		method: 'get',
		data
	})
}

export const getMyWelletInfo = (data) => {
	return request({
		url: APIS.MY_WALLET_INFO,
		method: 'get',
		data
	})
}


export const getWalletIndex = (data) => {
	return request({
		url: APIS.GET_WALLET_INDEX,
		method: 'get',
		data
	})
}