<template>
	<view class="coin_pool_success">
		<image class="success_icon" src="../../static/images/success_img.png"></image>
		<!-- <view class="title">{{getLangs(title)}}</view> -->
		<view class="desc">{{getLangs('powp47')}}</view>
		<view class="btn1" @tap="navigateTo('/pages/pow_record/index')">{{getLangs('viewOrder')}}</view>
	</view>
</template>

<script>
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'PowSuccess',
		mixins: [commonMixins, langsMixins],
		onShow() {
			this.setTitle(this.getLangs('powp46'))
		},
	}
</script>

<style scoped>
	page{
		background: #f9f9f9;
	}
	.coin_pool_success{
		height: 100%;
		background: #fff;
		padding-top: 40upx;
	}
	.coin_pool_class{
		text-align: center;
	}
	.success_icon{
		width: 390upx;
		height: 240upx;
		display: block;
		padding: 40upx auto;
		margin: auto;
	}
	.title{
		font-size:40upx;
		color: #1f3f59;
		margin-bottom: 40upx;
		text-align: center;
	}
	.desc{
		text-align: center;
		font-size: 30upx;
		color: #90a2b0;
		margin-bottom: 80upx;
	}
	.btn1{
		max-width: 380upx;
		height: 80upx;
		line-height: 80upx;
		text-align: center;
		background: #2351bd;
		border-radius: 40upx;
		color: #fff;
		display: block;
		margin: auto;
	}
	.btn2{
		text-align: center;
		display: block;
		margin-top: 40upx;
		color: #2351bd;
	}
</style>
