<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import updateMixins from '@/mixins/update_mixins.js'
	export default {
		mixins: [langMixins, updateMixins],
		onLaunch(){
			this.checkVersionUpdate()
		},
		onShow(){
			this.setTabbar()
		},
		onHide(){
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	@import './skin/skin.css';
</style>