<template>
	<view :class="['kefu_icon', location]" @tap="toServcie">
		<text class="iconfont icon-customerservice_fill"></text>
	</view>
</template>

<script>
	/**
	 * 客服
	 */
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Kefu',
		props: ['location'],
		mixins: [commonMixins, langsMixins],
	}
</script>

<style scoped>
	.kefu_icon.left{
		left: 20px;
		right: initial;
		top:  calc(var(--status-bar-height) + 40upx);
	}
</style>
