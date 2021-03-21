<template>
	<view class="fund_func_class">
		<view class="label" @tap="toPage(items.path, items.name)" v-for="(items, index) in fundFuncList" :key="index">
			<image class="icon" :src="items.icon"></image>
			<text class="name">{{getLangs(items.name)}}</text>
		</view>
	</view>
</template>

<script>
	/**
	 * 资金操作
	 */
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'FundFunc',
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				fundFuncList: [
					{
						name: 'rechargeText',
						icon: '/static/images/recharge_icon.png',
						path: '/pages/recharge/index'
					},
					{
						name: 'withdrawText',
						icon: '/static/images/withdraw_icon.png',
						path: '/pages/withdraw/index'
					},
					{
						name: 'exchangeText',
						icon: '/static/images/exchange_icon.png',
						path: '/pages/tibi/index'
					},
					{
						name: 'transferText',
						icon: '/static/images/transfer_icon.png',
						path: '/pages/transfer/index'
					}
				]
			}
		},
		methods: {
			toPage(path, name){
				if(name === 'withdrawText1'){
					return this.$tips.showToast(this.getLangs('noOpen'))
				}
				this.navigateTo(path)
			}
		}
	}
</script>

<style scoped>
	.fund_func_class{
		padding: 0 20upx 30upx 0;
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		background-color:#151936
	}
	.fund_func_class .label{
		width: 25%;
		text-align: center;
	}
	.fund_func_class .icon{
		width: 60upx;
		height: 60upx;
	}
	.fund_func_class .name{
		font-size: 26upx;
		display: block;
		color: #fff;
	}
</style>
