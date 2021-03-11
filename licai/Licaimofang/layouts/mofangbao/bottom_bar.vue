<template>
	<view class="bottom_bar">{{getLang('mofangbao_p6')}}</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'BottomBar',
		mixins: [langMixins],
	}
</script>

<style scoped>
	.bottom_bar{
		width: 100%;
		height: 100upx;
		position: fixed;
		bottom: 0;
		z-index: 1;
		left: 0;
		background: #007AFF;
		text-align: center;
		line-height: 100upx;
		color: #fff;
		font-weight: bold;
		font-size: 32upx
	}
</style>
