/**
 * 应用配置
 */
const appConfig = {
	// //app
	// domain: 'http://182.16.20.18:8080',
	// wsDomain: 'ws://182.16.20.18:8080',
	//h5
	domain: 'https://api.nccfit.com',
	wsDomain: 'wss://api.nccfit.com',
	// domain: 'http://180.178.39.226:8080',
	// wsDomain: 'ws://180.178.39.226:8080',
	//应用名称
	appName: 'NCC',
	//外链
	links: [],
	//默认倒计时时间 - 秒数
	countTimer: 60,
	//第三方登录
	thirdLogin: {
		h5: [
			// {
			// 	name: '微信',
			// 	type: 1,
			// 	icon: '/static/images/icons/wechat.jpg'
			// },
			// {
			// 	name: 'QQ',
			// 	type: 2,
			// 	icon: '/static/images/icons/qq.jpg'
			// },
			// {
			// 	name: '手机',
			// 	type: 3,
			// 	icon: '/static/images/icons/phone.png'
			// }
		],
		app: [
			// {
			// 	name: '手机',
			// 	type: 3,
			// 	icon: '/static/images/icons/phone.png'
			// }
		]
	},
	//提现是否需要输入相关信息
	isDrawithInput: true,
	//是否开启更新
	isUpdate: true
}

export default appConfig