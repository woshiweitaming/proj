<template>
	<view class="introduce">
		<view class="title">
			<image src="/static/images/mfb/mfb.png" class="icon" mode="widthFix"></image>
			<text class="text">{{getLang('mofangbao_p1')}}</text>
			<view class="more">{{getLang('mofangbao_p4')}}></view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Profit',
		mixins: [langMixins],
	}
</script>

<style scoped>
	.introduce{
		padding: 20upx;
	}
	.introduce .title{
		position: relative;
	}
	.introduce .icon{
		width: 40upx;
	}
	.introduce .text{
		vertical-align: top;
		font-weight: bold;
		padding-left: 20upx;
	}
	.introduce .more{
		position: absolute;
		right: 0;
		font-weight: bold;
		color: #007AFF;
		font-size: 24upx;
		top: 5upx
	}
</style>
