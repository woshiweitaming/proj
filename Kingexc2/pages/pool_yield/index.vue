<template>
	<Yield />
</template>

<script>
	import Yield from '@/layouts/pool/yield.vue'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'PoolYield',
		mixins: [commonMixins, langsMixins],
		components: {
			Yield
		},
		onLoad() {
			
		},
		onShow() {
			this.setTitle(this.getLangs('poolp2'))
		}
	}
</script>

<style scoped>
	page,
	.page{
		background: #f9f9f9;
	}
	.page{
		height: 100%;
	}
</style>
