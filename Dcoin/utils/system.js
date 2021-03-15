/**
 * 系统类
 */
const system = {
	/**
	 * 设置statusbar状态栏颜色
	 */
	setStatusBarColor(color){
		
	},
	/**
	 * 检测网络状态
	 */
	checkNetWorkStatus(){
		
	},
	/**
	 * 获取系统类型
	 */
	getOS(){
		const os = uni.getSystemInfoSync().platform
		return os
	}
}

export default system