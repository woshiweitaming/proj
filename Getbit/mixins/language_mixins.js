/**
 * 语言组件
 */
import { mapGetters, mapMutations } from 'vuex'
const languageMixins = {
	methods: {
		//初始化语言
		init(){
			
		},
		...mapMutations({
			setGlobalLanguage: 'SET_GLOBAL_LANGUAGE'
		})
	},
	computed: {
		...mapGetters({
			getGlobalLanguage: 'getGlobalLanguage'
		})
	}
}

export default languageMixins