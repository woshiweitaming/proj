import request from '../request/request.js'
import * as APIS from './api_url.js'


export const userLogin = (data) => {
	return request({
		url: APIS.LOGIN_API,
		method: 'post',
		data
	})
}

export const updEmail = (data) => {
	return request({
		url: APIS.UPD_EMAIL_API,
		method: 'post',
		data
	})
}

export const updPhone = (data) => {
	return request({
		url: APIS.UPD_PHONE_API,
		method: 'post',
		data
	})
}

export const editName = (data) => {
	return request({
		url: APIS.EDIT_NAME_API,
		method: 'post',
		data
	})
}

export const editPassword = (data) => {
	return request({
		url: APIS.EDIT_PASSWORD_API,
		method: 'post',
		data
	})
}

export const forgetPassword = (data) => {
	return request({
		url: APIS.FORGET_PASSWORD_API,
		method: 'post',
		data
	})
}

export const updAvatar = (data) => {
	return request({
		url: APIS.UPD_AVATAR_API,
		method: 'post',
		data
	})
}

export const authApplay = (data) => {
	return request({
		url: APIS.AUTH_SUBMIT_APPLY_API,
		method: 'post',
		data
	})
}

export const getAuthStatus = (data) => {
	return request({
		url: APIS.GET_AUTH_STATUS_API,
		method: 'get',
		data
	})
}

