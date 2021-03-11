import { mapGetters, mapMutations } from 'vuex'
import appConfig from '@/config/appConfig.js'
let langs = require('@/lang/lang.json');
const langMixins = {
	methods: {
		setTabbar(){
			const that = this
			const list = appConfig.tabbar
			list.forEach((curItem, index) => {
				uni.setTabBarItem({
				  index: index,
				  text: that.getLang(curItem.text),
				  iconPath: curItem.iconPath,
				  selectedIconPath: curItem.selectedIconPath
				})
			})
		},
		getLang(value){
			return langs[this.getCurLang][value]
		},
	},
	computed: {
		...mapGetters({
			getCurLang: 'getCurLang'
		})
	},
	onShow(){
		
	}
}

export default langMixins