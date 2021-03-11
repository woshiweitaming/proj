<template>
	<web-view :src="url"></web-view>
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
			// // #ifdef H5
			// window.open(this.url)
			// return uni.navigateBack()
			// // #endif
			// plus.runtime.openURL(this.url)
			// return uni.navigateBack()
		}
	}
</script>

<style scoped>
</style>
