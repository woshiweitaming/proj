<template>
	<view class="page">
		<Balance @toggleMoneyStatus="toggleMoneyStatus" :moneyStatus="moneyStatus" :dollar="total" :leftmoney="total"/>
		<view class="main">
			<WalletTab @changeAccountType="changeAccountType" :accountType="accountType" :moneyStatus="moneyStatus" :dollar="total" :leftmoney="total" />
			<Spacer />
			<AccountList :dataList="dataList" :moneyStatus="moneyStatus" :accountType="accountType"  />
		</view>
	</view>
</template>

<script>
	import Balance from '@/layouts/assets/balance.vue'
	import WalletTab from '@/layouts/assets/wallet_tab.vue'
	import AccountList from '@/layouts/assets/account_list.vue'
	import Spacer from '@/components/spacer/spacer.vue'
	import { getWalletBalance, getMyWelletInfo, getWalletIndex } from '@/apis/wallet.js'
	import { contractAccountInfo } from '@/apis/contract.js'
	import storage from '@/utils/storage.js'
	export default {
		name: 'Assets',
		data(){
			return {
				moneyStatus: false,
				accountType: 0,
				dataList: [],
				total: 0
			}
		},
		components: {
			Balance,
			WalletTab,
			AccountList,
			Spacer
		},
		methods: {
			toggleMoneyStatus(){
				this.moneyStatus = !this.moneyStatus
			},
			changeAccountType(index){
				this.accountType = index
				this.contractAccountInfoHandler()
			},
			async getWalletBalanceHandler(){
				const uid = storage.getLocalData('token')
				const res = await getWalletBalance({uid: uid})
			},
			async getWalletIndexHandler(){
				const uid = storage.getLocalData('token')
				const res = await getWalletIndex({uid: uid})
				this.total = Number(res.total)
				this.dataList = res.coin_wallet
			},
			async contractAccountInfoHandler(){
				const uid = storage.getLocalData('token')
				const res = await contractAccountInfo({uid: uid, rqType: 'contract'})
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: '资产'
			})
			// this.getWalletBalanceHandler()
			this.getWalletIndexHandler()
		}
	}
</script>

<style scoped>
	.main{
		padding: 20upx;
		box-sizing: border-box;
		height: calc(100% - 360upx);
		overflow: auto;
	}
</style>
