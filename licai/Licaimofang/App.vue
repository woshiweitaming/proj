<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		mixins: [langMixins],
		onLaunch(){
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