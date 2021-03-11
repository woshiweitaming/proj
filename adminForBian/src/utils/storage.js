const APP_NAME_KEY = 'DBS_65df2b'
const storage = {
	setLocalData: (key, value) => {
		localStorage.setItem(APP_NAME_KEY + key, value);
	},
	//取出本地数据
	getLocalData: (key) => {
		return localStorage.getItem(APP_NAME_KEY + key)
	},
	//删除本地数据
	delLocalData: (key) => {
		localStorage.removeItem(APP_NAME_KEY + key)
	},
	//清理本地数据
	clearLocalData: () => {
		localStorage.clear()
	}
}

export default storage