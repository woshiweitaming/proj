import request from '../request/request.js'
import * as APIS from './api_url.js'


export const getExcGetexcpairs = (data) => {
	return request({
		url: APIS.EXC_GETEXCPAIRS_API,
		method: 'get',
		data
	})
}

export const getExcDonetrade = (data) => {
	return request({
		url: APIS.EXC_DONETRADE_API,
		method: 'get',
		data
	})
}

export const getExcDepth = (data) => {
	return request({
		url: APIS.EXC_DEPTH_API,
		method: 'get',
		data
	})
}

export const getExcQuotation = (data) => {
	return request({
		url: APIS.EXC_QUOTATION_API,
		method: 'get',
		data
	})
}

export const getExcKline = (data) => {
	return request({
		url: APIS.EXC_KLINE_API,
		method: 'get',
		data
	})
}

export const getExCoinInfo = (data) => {
	return request({
		url: APIS.EXC_GET_COIN_INFO_API,
		method: 'get',
		data
	})
}

export const createTrans = (data) => {
	return request({
		url: APIS.CREATE_TRANS_API,
		method: 'post',
		data
	})
}

export const startEutrust = (data) => {
	return request({
		url: APIS.START_ENTRUST_API,
		method: 'post',
		data
	})
}

export const endEutrust = (data) => {
	return request({
		url: APIS.END_ENTRUST_API,
		method: 'post',
		data
	})
}