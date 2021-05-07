/**
 * 反馈方法
 */
import appConfig from '@/config/appConfig.js'
const tips = {
	//显示提示框
	showToast: (title) => {
		return uni.showToast({
			title: title,
			icon: 'none'
		})
	},
	//显示Loding框
	showLoading: (title) => {
		return uni.showLoading({
			title: title,
			mask: true
		})
	},
	//隐藏loading框
	hideLoading: () => {
		uni.hideLoading()
	},
	//模态框
	showModel: (title, content, cancelText, confirmText, cb, showCancel) => {
		uni.showModal({
		    title: title,
		    content: content,
			showCancel: showCancel,
			cancelText: cancelText,
			confirmText: confirmText,
		    success: function (res) {
		        return cb(res)
		    }
		})
	}
}

export default tips