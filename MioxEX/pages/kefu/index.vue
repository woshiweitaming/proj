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
		}
	}
</script>

<style scoped>
</style>
