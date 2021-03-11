<template>
	<view class="coin_pool_rules_class">
		<view class="coin_pool_intro">
			<view class="p">{{getLangs('coinPool')}}</view>
			<view class="p p1">{{getLangs('coinp1')}}</view>
			<view class="p p2">{{getLangs('coinp2')}}</view>
			<view class="p p3">{{getLangs('coinp3')}}</view>
			<view class="p p4">{{getLangs('coinp4')}}</view>
			<view class="section">
				<view class="title">{{getLangs('productHighlights')}}</view>
				<view class="desc">
					<view class="box">
						<view class="p p5">{{getLangs('coinp5')}}</view>
						<view class="p p6">{{getLangs('coinp6')}}</view>
					</view>
					<view class="box line"></view>
					<view class="box">
						<view class="p p7">{{getLangs('coinp7')}}</view>
						<view class="p p8">{{getLangs('coinp8')}}</view>
					</view>
				</view>
				<view class="desc fd">
					<view class="box">
						<image class="icon" src="/static/images/coin1.png"></image>
						<view class="p p9">{{getLangs('coinp9')}}</view>
						<view class="p p10">{{getLangs('coinp10')}}</view>
					</view>
					<view class="box">
						<image class="icon" src="/static/images/coin2.png"></image>
						<view class="p p11">{{getLangs('coinp11')}}</view>
						<view class="p p12">{{getLangs('coinp12')}}</view>
					</view>
					<view class="box">
						<image class="icon" src="/static/images/coin3.png"></image>
						<view class="p p13">{{getLangs('coinp13')}}</view>
						<view class="p p14">{{getLangs('coinp14')}}</view>
					</view>
				</view>
			</view>
			<view class="section">
				<view class="title">{{getLangs('coinp15')}}</view>
				<view class="article">
					<view class="h1">{{getLangs('coinp16')}}</view>
					<rich-text :nodes="getLangs('coinp17')"></rich-text>
				</view>
				<view class="article">
					<view class="h1">{{getLangs('coinp18')}}</view>
					<rich-text :nodes="getLangs('coinp19')"></rich-text>
				</view>
			</view>
		</view>
		<view class="bottom">
			<view class="btn" @tap="navigateTo('/pages/coin_pool/index')">{{getLangs('participate')}}</view>
		</view>
	</view>
</template>

<script>
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'CoinPoolRules',
		mixins: [commonMixins, langsMixins],
		onShow() {
			this.setTitle(this.getLangs('coinPool'))
		}
	}
</script>

<style scoped>
	.coin_pool_rules_class{
		height: 100%;
		/* background: url(../../static/images/coin_pool_rules_bg.png); */
		background: #323a5e;
		background-size: 100% 100%;
		padding-top: 40upx;
		padding-bottom: 130upx;
	}
	.coin_pool_intro{
		height: 100%;
		padding: 0 40upx;
		overflow: auto;
	}
	.coin_pool_intro .p{
		text-align: center;
		display: block;
		font-size: 50upx;
		color: #fff;
		font-weight: bold;
	}
	.coin_pool_intro .p1{
		font-size: 64upx;
	}
	.coin_pool_intro .p2,
	.coin_pool_intro .p3,
	.coin_pool_intro .p4{
		font-size: 30upx;
		font-weight: normal;
	}
	.coin_pool_intro .p4{
		margin-bottom: 40upx;
	}
	.section{
		padding: 20upx;
		background: #fff;
		border-radius: 20upx;
		margin-bottom: 20upx;
	}
	.section .title{
		text-align: center;
		font-size: 36upx;
		font-weight: bold;
		color: #1d8bee;
		margin-bottom: 20upx;
	}
	.section .desc{
		display: flex;
	}
	.section .desc .box{
		width: 49%;
	}
	.section .desc .box.line{    
		width: 1px;
	    height: 40upx;
	    background: #e7eaed;
		margin-top: 20upx;
	}
	.section .desc .box .p{
		display: block;
		color: #1f3f59;
		font-size: 32upx
	}
	.section .desc .box .p6,
	.section .desc .box .p8{
		color: #90a2b0;
		font-size: 22upx;
		font-weight: normal;
		margin-top: 10upx;
	}
	.section .desc.fd {
		margin-top: 40upx;
	}
	.section .desc.fd .box{
		width: 33%;
		text-align: center;
	}
	.section .desc.fd .box .icon{
		width: 60upx;
		height: 60upx;
	}
	.section .desc.fd .box .p{
		font-size: 22upx;
		color: #90a2b0;
		font-weight: normal;
	}
	.bottom{
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 1999999;
		width: 100%;
		height: 130upx;
		padding: 20upx;
	}
	.bottom .btn{
		background: #2351bd;
		width: 90%;
		height: 90upx;
		text-align: center;
		border-radius: 10upx;
		line-height: 90upx;
		font-size: 34upx;
		font-weight: bold;
		background:#1d8bee;
		margin: 0 auto;
		color: #fff;
	}
	.article .h1{
		font-size: 32upx;
		color: #1f3f59;
		font-weight: bold;
		margin-bottom: 20upx;
		margin-top: 20upx;
	}
	.article{
		font-size: 26upx;
		color: #697a87;
	}
</style>
