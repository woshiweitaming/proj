const APP_NAME_KEY = 'DBS_s23j7mb'
const storage = {
	setLocalData: (key, value) => {
		uni.setStorageSync(APP_NAME_KEY + key, value);
	},
	//取出本地数据
	getLocalData: (key) => {
		return uni.getStorageSync(APP_NAME_KEY + key)
	},
	//删除本地数据
	delLocalData: (key) => {
		uni.removeStorage({
		    key: APP_NAME_KEY + key,
		});
	},
	//清理本地数据
	clearLocalData: (key) => {
		uni.clearStorage()
	}
}

export default storage