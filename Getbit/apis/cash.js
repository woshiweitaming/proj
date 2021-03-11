import request from '../request/request.js'
import * as APIS from './api_url.js'


export const walletCashAddressList = (data) => {
	return request({
		url: APIS.WALLET_CASH_ADDRESS_LIST,
		method: 'get',
		data
	})
}

export const addWalletCashAddress = (data) => {
	return request({
		url: APIS.ADD_WALLET_CASH_ADDRESS,
		method: 'post',
		data
	})
}