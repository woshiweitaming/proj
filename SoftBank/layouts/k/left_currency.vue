<template>
	<view class="left_currency_class">
		<view class="title">{{getLangs('currency')}}</view>
		<view class="left_currency_list">
			<view class="labels" v-for="(items, index) in getWSData" :key="index" @tap="change(items.name, items.id)">
				<view class="items">
					<view class="label currency">{{items.name}}</view>
					<view :class="['label close', items.gain > 0 ? 'green' : 'red']">{{items.close}}</view>
				</view>
				<view class="items">
					<!-- <view class="label sub">{{items.name}}</view> -->
					<view :class="['label gain', items.gain > 0 ? 'green' : 'red']">{{items.gain}}%</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 左边币种切换
	 */
	import { mapGetters, mapMutations } from 'vuex'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import websocketMixins from '@/mixins/websocket_mixins.js'
	import currencyMixins from '@/mixins/currency_mixins.js'
	import userMixins from '@/mixins/user_mixins.js'
	export default {
		name: 'LeftCurrency',
		mixins: [commonMixins, langsMixins, websocketMixins, currencyMixins, userMixins],
		props: ['active'],
		methods: {
			change(currency, id){
				this.redirectTo('/pages/k_inner/index?currency='+currency+'&id='+id)
				//this.navigateTo('/pages/k/index', {currency: currency, id: id})
			}
		},
		computed:{
		},
		created() {
			//uni.closeSocket()
			//this.getProductDataHandler()
			//this.createWSAllData()
		}
	}
</script>

<style scoped>
	.left_currency_class{
		padding: var(--status-bar-height) 20upx 20upx 20upx;
		width: 500upx;
	}
	.left_currency_class .title{
		display: block;
		line-height: 120upx;
		font-size: 32upx;
		border-bottom: 1px solid #eee;
		margin-bottom: 20upx;
	}
	.left_currency_class .labels{
		margin-bottom: 20upx;
		position: relative;
	}
	.left_currency_class .items{
		display: flex;
	}
	.left_currency_class .items .label{
		flex: 1;
	}
	.left_currency_class .items .label:last-child{
		text-align: right
	}
	.left_currency_class .items .currency{
		color: #1C1D31;
		font-weight: bold;
		font-size: 28upx;
		line-height: 40upx;
		position: absolute;
		left: 0;
		top: 15upx;
	}
	.left_currency_class .items .market{
		font-size: 24upx;
		color: #72899A;
		font-weight: bold;
		line-height: 40upx;
	}
	.left_currency_class .items .close{
		font-size: 28upx;
		font-weight: bold;
		line-height: 40upx;
	}
	.left_currency_class .items .sub{
		font-size: 22upx;
		color: #72899A;
		font-weight: bold;
		line-height: 40upx;
	}
	.left_currency_class .items .gain{
		font-size: 28upx;
		font-weight: bold;
		line-height: 40upx;
	}
</style>
