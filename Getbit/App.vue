<script>
	import { mapGetters, mapMutations } from 'vuex'
	import appConfig from '@/config/appConfig.js'
	import fileUtils from '@/utils/files.js'
	import { getExcGetexcpairs, getExcDonetrade } from '@/apis/exc.js'
	import hash_permission from '@/datas/hash_permission.js'
	export default {
		async onLaunch(){
			fileUtils.readFile('/static/language/simplified_chinese.txt')
		},
		data(){
			return {
				timer: null
			}
		},
		onShow(){
			this.getExcGetexcpairsHandler()
			this.setTimer()
		},
		onHide(){
			this.clearTimer()
		},
		methods: {
			async getExcGetexcpairsHandler(){
				const res = await getExcGetexcpairs()
				this.setQuotation(res)
			},
			async getExcDonetradeHandler(excpairs){
				const res = await getExcDonetrade({excpairs: excpairs})
			},
			setTimer(){
				const that = this
				this.timer = setInterval(() => {
					that.getExcGetexcpairsHandler()
				}, 2000)
			},
			clearTimer(){
				this.timer = null
				clearInterval(this.timer)
			},
			...mapMutations({
				setQuotation: 'SET_QUOTATION'
			})
		},
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "uview-ui/index.scss";
	@import './skin/skin.css';
	@import './static/fonts/iconfont.css';
</style>
