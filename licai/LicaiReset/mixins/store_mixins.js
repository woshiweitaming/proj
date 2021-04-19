/**
 * 混入 - 操作store
 */
import { mapGetters, mapMutations } from 'vuex'
const storeMixins = {
	methods: {
		...mapMutations({
			setUserInfo: 'SET_USER_INFO'
		})
	},
	computed: {
		...mapGetters({
			getUserInfo: 'getUserInfo'
		})
	}
}

export default storeMixins