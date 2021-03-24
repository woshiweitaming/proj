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
				<view class="labels_items"  @tap="toK">
					<image class="icon" src="../../static/images/trade_icon.png"></image>
					<text class="name">{{getLangs('contractTrading')}}</text>
				</view>
				<view class="labels_items"  @tap="navigateTo('/pages/help/index')">
					<image class="icon" src="../../static/images/help_icon.png"></image>
					<text class="name">{{getLangs('helpCenter')}}</text>
				</view>
			</view>
		</view>
		<view class="coin_pool_class">
			<image class="img" @tap="navigateTo('/pages/coin_pool_rules/index')" :src="getImg"></image>
		</view>
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
			toK(){
				const currency = this.getWSData[0].name
				const id = this.getWSData[0].id
				const params = {
					currency: currency,
					id: id,
					type: 1
				}
				this.navigateTo('/pages/k/index', params)
			}
		},
		computed: {
			getImg(){
				if(this.getGlobalLang == 'cn' || this.getGlobalLang == 'cns') return  `/static/images/pool/1.jpg`
				return `/static/images/pool/2.jpg`
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
