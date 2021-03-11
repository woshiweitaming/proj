import request from '../request/request.js'
import * as APIS from './api_url.js'


export const getContractList = (data) => {
	return request({
		url: APIS.CONTRACT_LIST_API,
		method: 'get',
		data
	})
}

export const contractAccountInfo = (data) => {
	return request({
		url: APIS.CONTRACT_ACCOUNTINFO_API,
		method: 'get',
		data
	})
}
