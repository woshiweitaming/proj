import appConfig from '@/config/appConfig.js'
const storage = {
	//设置本地数据
	setLocalData: (key, value) => {
		uni.setStorageSync(appConfig.privateKey + key, value);
	},
	//取出本地数据
	getLocalData: (key) => {
		return uni.getStorageSync(appConfig.privateKey + key)
	},
	//删除本地数据
	delLocalData: (key) => {
		uni.removeStorage({
		    key: appConfig.privateKey + key,
		});
	},
	//清理本地数据
	clearLocalData: (key) => {
		uni.clearStorage()
	}
}

export default storage