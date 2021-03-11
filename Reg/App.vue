<script>
	import langsMixins from '@/mixins/lang_mixins.js'
	export default {
		mixins: [langsMixins],
		onLaunch(){
			this.getLanguageHandler()
			const lang = this.$storage.getLocalData('lang')
			if(lang == null || lang == '' || typeof lang == 'undefined'){
				const sysLang = this.currentSysHanlder()
				this.$storage.setLocalData('lang', sysLang)
				this.setGlobalLang(sysLang)
			}else{
				this.setGlobalLang(lang)
			}
		},
		onShow(){
		},
		onHide(){
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
