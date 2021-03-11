import request from '../request/request.js'
import * as APIS from './api_url.js'


export const getComVailimg = (data) => {
	return request({
		url: APIS.GET_COM_VAILIMG,
		method: 'get',
		data
	})
}

export const getEmailCode = (data) => {
	return request({
		url: APIS.SEND_EMAIL,
		method: 'post',
		data
	})
}

export const getPhoneCode = (data) => {
	return request({
		url: APIS.SEND_PHONE,
		method: 'post',
		data
	})
}

export const fileUpload = (data) => {
	return request({
		url: APIS.FILE_UPLOAD,
		method: 'post',
		data
	})
}