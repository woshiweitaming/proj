<template>
	<view class="feature">
		<view class="title">
			<image src="/static/images/product/4.png" class="title_icon" mode="widthFix"></image>
		</view>
		<view class="list">
			<view class="labels">
				<image src="/static/images/product/1.png" class="icon"></image>
				<view class="name">{{getLang('product_p8')}}</view>
				<view class="desc">{{getLang('product_p9')}}</view>
			</view>
			<view class="labels">
				<image src="/static/images/product/2.png" class="icon"></image>
				<view class="name">{{getLang('product_p10')}}</view>
				<view class="desc">{{getLang('product_p11')}}</view>
			</view>
			<view class="labels">
				<image src="/static/images/product/3.png" class="icon"></image>
				<view class="name">{{getLang('product_p12')}}</view>
				<view class="desc">{{getLang('product_p13')}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Feature',
		mixins: [langMixins]
	}
</script>

<style scoped>
	.title{
		text-align: left;
		margin-bottom: 20upx;
		font-size: 30upx;
		font-weight: bold;
		padding: 0 20upx;
		line-height: 60upx;
	}
	.list{
		padding-bottom: 20upx;
	}
	.list .labels{
		padding: 0 0 0 100upx;	
		margin-bottom: 20upx;
		position: relative;
	}
	.list .labels .name{
		font-size: 28upx;
		color: #333;
		font-weight: bold;
	}
	.list .labels .desc{
		font-size: 24upx;
		color: #aaa;
	}
	.icon{
		width: 60upx;
		height: 70upx;
		position: absolute;
		left: 20upx;
		top: 0;
	}
	.title_icon{
		width: 200upx;
		padding-top: 20upx;
	}
</style>
