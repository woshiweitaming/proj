/**
 * 公用混入组件
 */
import { mapMutations, mapGetters } from 'vuex'
import appConfig from '@/config/appConfig.js'
import system from '@/utils/system.js'
import Utils from '@/utils/Utils.js'
import validate from '@/utils/validate.js'
const commonMixins = {
	data(){
		return {
			currentOS: ''
		}
	},
	methods: {
		//直接跳转
		navigateTo(path, params){
			const urlParams = typeof params === 'undefined' || JSON.stringify(params) === '{}'
			                  ? ''
							  : `?${Utils.convertObj(params)}`			  
			uni.navigateTo({
			    url: path + urlParams
			});
		},
		//关闭当前页面跳转
		redirectTo(path){
			uni.redirectTo({
			    url: path
			});
		},
		//关闭所有页面，打开到应用内的某个页面。
		reLaunch(path){
			uni.reLaunch({
			    url: path
			});
		},
		//跳转到tabbar某个页面
		switchTab(path){
			uni.switchTab({
			    url: path
			});
		},
		//返回
		back(){
			const os = system.getOS()
			if(os === 'ios' || os === 'android'){
				return uni.navigateBack()
			} 
			return history.back(-1)
		},		
		//设置导航栏标题
		setTitle(title){
			uni.setNavigationBarTitle({
			    title: typeof title === 'undefined' || title === '' ? appConfig.appName : title
			});
		},
		//禁止移动
		moveHandle(){
			return
		},
		//获取当前页面数据
		getCurrentPageData(action){
			const pages = getCurrentPages()
			const page = pages[pages.length - 1]
			switch (action) {
				case 'opt' :
				   return page.options
				case 'route' :
				   return page.route
				default :
				   return page
			}
		},
		/**
		 * 返回指定页面
		 */
		backToPage(path){
			const os = system.getOS()
			// #ifdef APP-PLUS
			this.back()
			// #endif
			this.navigateTo(path)
		},
		//显示后端提示
		backTips(data){
			if(validate.checkCode(data)){
				return this.$tips.showToast(this.getLangs('success'))
			}
			// this.$tips.showToast(this.getGlobalLang === 'cn' ? data.rpMsg : (data.enMsg ? data.enMsg : 'fail'))
			this.$tips.showToast(data.rpMsg)
		},
		//跳转客服
		toServcie(){
			this.navigateTo('/pages/kefu/index')
		},
		customBack(){
			// #ifdef H5
			return window.location.href = '/'
			// #endif 
			return uni.navigateBack()
		},
		UTCDateToLocalDate(dateStr) {
		    var date1 = new Date();
		    var offsetMinute = date1.getTimezoneOffset();
		    var offsetHours = offsetMinute / 60;
		    var date2 = new Date(dateStr);
		    date2.setHours(date2.getHours() - offsetHours);
		    return date2;
		}
	},
	computed:{
		createOSClass(){
			// #ifdef APP-PLUS
			return 'app'
			// #endif 
			return 'h5'
		},
		...mapGetters({
			getWSData: 'getWSData',
			getProductData: 'getProductData',
		})
	},
	onLoad() {
		this.currentOS = system.getOS()
	},
}

export default commonMixins