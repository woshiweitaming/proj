/**
 * 应用配置
 */
const appConfig = {
	domain: 'http://180.178.39.226:8080',
	wsDomain: 'ws://180.178.39.226:8080',
	tabbar: [
		{
			text: 'home',
			iconPath: '/static/images/icon/profit.png',
			selectedIconPath: '/static/images/icon/profit_ac.png',
		},
		{
			text: 'find',
			iconPath: '/static/images/icon/configure.png',
			selectedIconPath: '/static/images/icon/configure_ac.png',
		},
		{
			text: 'adviser',
			iconPath: '/static/images/icon/im.png',
			selectedIconPath: '/static/images/icon/im_ac.png',
		},
		{
			text: 'assets',
			iconPath: '/static/images/icon/me.png',
			selectedIconPath: '/static/images/icon/me_ac.png',
		}
	]
}

export default appConfig