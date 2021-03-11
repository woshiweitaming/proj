<template>
	<view class="redpack_card">
		<view class="card">
			<view class="mark">￥</view>
			<view class="money">0</view>
			<view class="text">{{getLang('redpack_p4')}}</view>
			<view class="btns">{{getLang('redpack_p3')}}</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'RedpackCard',
		mixins: [langMixins],
	}
</script>

<style scoped>
	.redpack_card{
		padding: 40upx;
		position: relative;
		top: -100upx;
	}
	.card{
		height: 140upx;
		padding: 20upx;
		background: #fff;
		border-radius: 80upx;
		position: relative;
		display: flex;
		line-height: 100upx;
	}
	.card .mark,
	.card .money{
		color: #007AFF;
	}
	.card .money{
		font-size: 46upx;
	}
	.card .text{
		color: #999;
		font-size: 24upx;
		margin-left: 20upx;
	}
	.card .btns{
		width: 140upx;
		height: 80upx;
		border-radius: 40upx;
		background: #eee;
		line-height: 80upx;
		text-align: center;
		position: absolute;
		right: 20upx;
		color: #aaa;
		top: 30upx;
	}
</style>
