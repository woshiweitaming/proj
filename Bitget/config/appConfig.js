/**
 * 应用配置
 */
const appConfig = {
	// domain: 'https://api.scrapget.com',
	// wsDomain: 'wss://api.scrapget.com',
	domain: 'https://api.bitgetold.me',
	wsDomain: 'wss://api.bitgetold.me',
	//应用名称
	appName: 'Bitget',
	//外链
	links: [],
	//默认倒计时时间 - 秒数
	countTimer: 60,
	//第三方登录
	thirdLogin: {
		h5: [
			{
				name: '微信',
				type: 1,
				icon: '/static/images/icons/wechat.png'
			},
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