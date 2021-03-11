<template>
	<view class="quick_action_class">
		<view class="labels w60">
			<view class="labels_box bg" @tap="navigateTo('/pages/recharge/index')">
				<text class="quick_name">{{this.getLangs('quickFunc')}}</text>
				<image src="../../static/images/quick_func.png" class="quick_icon"></image>
				<text class="quick_desc">{{this.getLangs('quickDesc')}}</text>
			</view>
		</view>
		<view class="labels w40">
			<view class="labels_box">
				<view class="labels_items"  @tap="toPage('/pages/service_item/index')">
					<image class="icon" src="../../static/images/trade_icon.png"></image>
					<text class="name">{{getLangs('contractTrading')}}</text>
				</view>
				<view class="labels_items"  @tap="navigateTo('/pages/guide/index')">
					<image class="icon" src="../../static/images/help_icon.png"></image>
					<text class="name">{{getLangs('helpCenter')}}</text>
				</view>
			</view>
		</view>
		<!-- <view class="coin_pool_class">
			<image class="img" mode="widthFix" @tap="navigateTo('/pages/webview/index')" src="../../static/images/banner/banner5.jpg"></image>
		</view> -->
		<!-- <view class="coin_pool_class">
			<image class="img" @tap="navigateTo('/pages/pool/index')" src="/static/images/coin_pool.jpg"></image>
		</view> -->
	</view>
</template>

<script>
	/**
	 * 快捷操作
	 */
	import { mapGetters, mapMutations } from 'vuex'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import currencyMixins from '@/mixins/currency_mixins.js'
	export default {
		name: 'QuickAction',
		mixins: [commonMixins, langsMixins, currencyMixins],
		methods: {
			/**
			 * 跳转交易
			 */
			toPage(path){
				this.navigateTo(path)
			}
		},
		computed: {
			getImg(){
				return `/static/images/pool/${this.getGlobalLang}.png`
			},
			...mapGetters({
				getProductData: 'getProductData',
			})
		}
	}
</script>

<style scoped>
	.quick_action_class{
		padding: 20upx 10upx;
		background: #f9f9f9;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.quick_action_class .labels{
		box-sizing: border-box;
		padding: 0 10upx;
		height: 180upx;
	}
	.quick_action_class .labels.w60{
		width: 55%;
	}
	.quick_action_class .labels.w40{
		width: 45%;
	}
	.quick_action_class .labels .labels_box{
		width: 100%;
		box-sizing: border-box;
		height: 180upx;
		position: relative;
	}
	.quick_action_class .labels .labels_box.bg{
		background: #fff;
		padding: 20upx 120upx 20upx 20upx;
	}
	.quick_action_class .quick_name{
		color: #333;
		font-weight: bold;
		font-size: 32upx;
		display: block;
		width: 100%;
		line-height: 60upx;
        white-space:nowrap; 
        overflow:hidden; 
        text-overflow:ellipsis
	}
	.quick_action_class .quick_icon{
		position: absolute;
		right: 10px;
		top: 25px;
		width: 79upx;
		height: 70upx;
	}
	.quick_action_class .quick_desc{
		display: block;
		font-size: 24upx;
		color: #8b9eac;
		width: 100%;
		word-wrap: break-word;
		overflow: hidden;
	}
	.quick_action_class .labels_items{
		background: #fff;
		height: 80upx;
		box-sizing: border-box;
		text-align: left;
		padding-left: 40upx;
		position: relative;
	}
	.quick_action_class .labels_items:first-child{
		margin-bottom: 20upx;
	}
	.quick_action_class .labels_items:last-child{
		margin-top: 20upx;
	}
	.quick_action_class .labels_items .icon{
		width: 30upx;
		height: 30upx;
		display: inline-block;
		vertical-align: middle;
		position: absolute;
		left: 10upx;
		top: 25upx;
	}
	.quick_action_class .labels_items .name{
		width: 100%;
		color: #333;
		font-size: 28upx;
		padding-left: 20upx;
		line-height: 80upx;
		height: 80upx;
		display: inline-block;
		box-sizing: border-box;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.coin_pool_class{
		width: 100%;
		padding: 10upx;
		margin-top: 10upx;
	}
	.coin_pool_class .img{
		width: 100%;
		height: 140upx;
	}
</style>
