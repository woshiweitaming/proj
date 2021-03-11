/**
 * 客服系统
 */
import { getNConfig } from '@/api/public.js'
const kefuMixins = {
	data(){
		return {
			wv: null,
			url: ''
		}
	},
	methods: {
		/**
		 * 初始化客服
		 */
		init(){
			
		},
		/**
		 * 打开客服
		 */
		open(){
			
		},
		/**
		 * 关闭客服
		 */
		close(){
			
		},
		/**
		 * 获取客服
		 */
		async getKefuHandler(){
			const res = await getNConfig()
			this.url = res.data.kfUrl
		},
	},
	onLoad(){
		
	},
	onShow(){
		this.getKefuHandler()
	},
	onHide(){
		
	}
}

export default kefuMixins