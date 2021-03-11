import request from '../request/request.js'
import * as APIS from './api_url.js'

export const getDoneLog = (data) => {
	return request({
		url: APIS.GETDONELOG_API,
		method: 'get',
		data
	})
}

export const getEntrust= (data) => {
	return request({
		url: APIS.GETENTRUST_API,
		method: 'get',
		data
	})
}