<template>
	<view class="account_list card">
		<view class="tools">
			<u-switch size="40" v-model="checked"></u-switch>
			<text class="tips">隐藏小额币种</text>
		</view>
		<CurrencyList :dataList="dataList" :moneyStatus="moneyStatus" :accountType="accountType" />
	</view>
</template>

<script>
	import CurrencyList from './currency_list.vue'
	export default {
		name: 'AccountList',
		props: {
			moneyStatus: {
				type: Boolean,
				default: false
			},
			accountType: {
				type: Number,
				default: 0
			},
			dataList: {
				type: Array,
				default: []
			}
		},
		data(){
			return {
				checked: false,
			}
		},
		components: {
			CurrencyList
		}
	}
</script>

<style scoped>
	.tips{
		vertical-align: top;	
		margin-left: 20upx;
		color: #aaa;
		font-size: 26upx;
	}
</style>
