/**
 * 应用配置
 */
const appConfig = {
	// domain: 'http://180.178.39.226:8080',
	// wsDomain: 'ws://180.178.39.226:8080',
	// domain: 'http://216.118.231.149:8080',
	// wsDomain: 'ws://216.118.231.149:8080',
	domain: 'https://api.euronexts.com',
	wsDomain: 'wss://api.euronexts.com',
	//应用名称
	appName: 'Euronext',
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