/**
 * 更新混入组件
 */
import appConfig from '@/config/appConfig.js'
import { getUpdate } from '@/apis/publics.js'
import { getDownload } from '@/js_sdk/zhouWei-APPUpdate/APPUpdate.js';
const updaterMixins = {
	methods: {
		// 如果客户端的版本不是最新的,提示更新且自动下载最新的app
		async checkVersionUpdate () {
			const type = uni.getSystemInfoSync().platform
			if(typeof plus === 'undefined') return
			plus.runtime.getProperty(plus.runtime.appid, async function(inf) {
				uni.request({
				    url: `${appConfig.domain}/pub/getUpdate?edition=${inf.version}&type=${type}`,
				    success: (res) => {
				        if (res.data.state == 0 ) {
				        	getDownload({downloadUrl: res.data.url, forceUpdate: true})
				        }
				    },
					fail(err) {
						console.log(err)
					}
				});
			});
		},
	}
}

export default updaterMixins