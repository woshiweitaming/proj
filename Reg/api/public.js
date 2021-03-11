import request from '@/request/request.js'
import qs from 'qs'

//获取接口地址
export const getUrl = (data) => {
	return request({
		url: '/pub/getUrl',
		method: 'get',
		data,
	})
}

//获取语言
export const getLanguage = (data = {}) => {
	return request({
		url: '/pub/getLanguage',
		method: 'get',
		data,
	})
}

//发送短信验证码
export const sendSms = (data) => {
	return request({
		url: '/pub/sendSms',
		method: 'post',
		data,
	})
}

//发送邮箱验证码
export const sendEmail = (data) => {
	return request({
		url: '/pub/sendEmail',
		method: 'post',
		data,
	})
}

//获取图片验证码
export const getShearCaptcha = (data) => {
	return request({
		url: '/pub/getShearCaptcha',
		method: 'post',
		data,
	})
}

//获取产品列表
export const getProduct = (data) => {
	return request({
		url: '/pub/getProduct',
		method: 'get',
		data,
	})
}

//获取是否更新
export const getUpdate = (data) => {
	return request({
		url: '/pub/getUpdate',
		method: 'get',
		data,
	})
}

//获取期货配置
export const getQhConfig = (data) => {
	return request({		
		url: '/pub//getQfConfig',
		method: 'get',
		data,
	})
}

//获取产品介绍
export const getProductInfo = (data) => {
	return request({		
		url: '/pub/getProductInfo',
		method: 'get',
		data,
	})
}

//获取客服
export const getKefu = (data) => {
	return request({		
		url: '/pub/getKefu',
		method: 'get',
		data,
	})
}

//获取账户余额
export const getAccountBalance = (data) => {
	return request({		
		url: '/user/getAccountBalance',
		method: 'get',
		data,
	})
}

//获取产品id
export const getProductId = (data) => {
	return request({		
		url: '/pub/getProductId',
		method: 'get',
		data,
	})
}

//获取配置
export const getConfig = (data) => {
	return request({		
		url: '/pub/getConfig',
		method: 'get',
		data,
	})
}

//获取内页
export const getNoticeDetails = (data) => {
	return request({		
		url: '/pub/getNoticeDetails',
		method: 'get',
		data,
	})
}

//获取配置
export const getNConfig = (data) => {
	return request({		
		url: '/pub/getNConfig',
		method: 'get',
		data,
	})
}


//获取内页
export const getNNoticeDetails = (data) => {
	return request({		
		url: '/pub/getNNoticeDetails',
		method: 'get',
		data,
	})
}


//获取内页
export const getDownload = (data) => {
	return request({		
		url: '/pub/download',
		method: 'get',
		data,
	})
}