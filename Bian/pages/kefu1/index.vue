<template>
	<web-view src="https://pay.binanapp.com"></web-view>
</template>

<script>
	/**
	 * 客服
	 */
	import langsMixins from '@/mixins/lang_mixins.js'
	import commonMixins from '@/mixins/common_mixins.js'
	import kefuMixins from '@/mixins/kefu_mixins.js'
	export default {
		name: 'Kefu',
		mixins: [langsMixins, commonMixins, kefuMixins],
		onShow() {
			this.setTitle(this.getLangs('onlineService'))
			// var currentWebview = this.$mp.page.$getAppWebview() 
			// const title = this.getLangs('onlineService')
			// currentWebview.evalJS('document.title="改变的标题二"')
		}
	}
</script>

<style scoped>
</style>
