<script>
	import appConfig from '@/config/appConfig.js'
	import getUrl from '@/api/public.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import updaterMixins from '@/mixins/updater_mixins.js'
	import websocketMixins from '@/mixins/websocket_mixins.js'
	export default {
		mixins: [updaterMixins, langsMixins, websocketMixins],
		onLaunch(){
			this.getLanguageHandler()
			this.$storage.delLocalData('currentCurrency')
			const lang = this.$storage.getLocalData('lang')
			if(lang == null || lang == '' || typeof lang == 'undefined'){
				const sysLang = this.currentSysHanlder()
				this.$storage.setLocalData('lang', sysLang)
				this.setGlobalLang(sysLang)
			}else{
				this.setGlobalLang(lang)
			}
			//this.createWSData(0)
			this.checkVersionUpdate()
			this.$storage.setLocalData('curKActive', 1)
		},
		onShow(){
			this.createWSData(0)
			this.setTabbarText()
		},
		onHide(){
			uni.closeSocket({
				success: () => {
					console.log('...')
				},
				fail: () => {
					console.log('fail')
				}
				
				
			})
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "uview-ui/index.scss";
	@import url('/static/fonts/iconfont.css');
	@import './skin/skin.css';
	.dark_page{
		background: #20222c;
	}
</style>
