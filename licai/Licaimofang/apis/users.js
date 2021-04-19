import request from '../request/request.js'

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
//发送手机验证码
export const sendSms = (data) => {
	return request({
		url: '/pub/sendSms',
		method: 'post',
		data
	})
}
//发送邮箱验证码
export const sendEmail = (data) => {
	return request({
		url: '/pub/sendEmail',
		method: 'post',
		data
	})
}
//签到
export const signin = (data) => {
	return request({
		url: '/user/signin',
		method: 'get',
		data
	})
}
//用户信息
export const getUserInfo = (data) => {
	return request({
		url: '/user/getUserInfo',
		method: 'get',
		data
	})
}
//日利宝
export const getRlbDetails = (data) => {
	return request({
		url: '/user/getRlbDetails',
		method: 'get',
		data
	})
}
//修改密码
export const updPwd = (data) => {
	return request({
		url: '/user/updPwd',
		method: 'post',
		data
	})
}
//修改手机
export const updPhone = (data) => {
	return request({
		url: '/user/updPhone',
		method: 'post',
		data
	})
}
//修改昵称
export const updNickName = (data) => {
	return request({
		url: '/user/updNickName',
		method: 'post',
		data
	})
}
//获取实名
export const getCheckIn = (data) => {
	return request({
		url: '/user/getCheckIn',
		method: 'get',
		data
	})
}
//获取实名
export const checkIn = (data) => {
	return request({
		url: '/user/checkIn',
		method: 'post',
		data
	})
}
//购买产品
export const purchase = (data) => {
	return request({
		url: '/user/purchase',
		method: 'post',
		data
	})
}
//充值记录
export const payList = (data) => {
	return request({
		url: '/user/payList',
		method: 'get',
		data
	})
}
//提现记录
export const getWithdrawal = (data) => {
	return request({
		url: '/user/withdrawalList',
		method: 'get',
		data
	})
}
//新增银行卡
export const addBank = (data) => {
	return request({
		url: '/user/addBank',
		method: 'post',
		data
	})
}
//获取银行卡列表
export const getBankList = (data) => {
	return request({
		url: '/user/bankList',
		method: 'get',
		data
	})
}
//删除银行卡
export const delBank = (data) => {
	return request({
		url: '/user/delBank',
		method: 'get',
		data
	})
}
//获取余额
export const getBalance = (data) => {
	return request({
		url: '/user/getBalance',
		method: 'get',
		data
	})
}
//提现
export const withdrawal = (data) => {
	return request({
		url: '/user/withdrawal',
		method: 'post',
		data
	})
}
//退出
export const loginOut = (data) => {
	return request({
		url: '/user/loginOut',
		method: 'post',
		data
	})
}
//获取投资记录
export const getMyProject = (data) => {
	return request({
		url: '/user/MyProject',
		method: 'get',
		data
	})
}
//获取返息记录
export const getMyProjectHistory = (data) => {
	return request({
		url: '/user/MyProjectHistory',
		method: 'get',
		data
	})
}
//获取产品详情数据
export const getProjectDetails = (data) => {
	return request({
		url: '/user/projectDetails',
		method: 'get',
		data
	})
}
//获取收货地址
export const getAdds = (data) => {
	return request({
		url: '/user/getAdds',
		method: 'get',
		data
	})
}
//添加收货地址
export const addAdds = (data) => {
	return request({
		url: '/user/addAdds',
		method: 'post',
		data
	})
}
//删除收货地址
export const delAdds = (data) => {
	return request({
		url: '/user/delAdds',
		method: 'get',
		data
	})
}
//会员等级
export const getLevel = (data) => {
	return request({
		url: '/user/getLevel',
		method: 'get',
		data
	})
}