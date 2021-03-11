<template>
	<view class="quatation_list">
		<view class="menu">
			<u-subsection @change="sectionChange" :list="menuList" bg-color="#fff" inactive-color="#000" active-color="#fff" button-color="#0084ff" :current="menuActive"></u-subsection>
		</view>
		<Spacer />
		<view class="quatation_wrap card">
			<view class="currency" v-if="menuActive !== 0">{{getCurrency}}</view>
			<view class="thead">
				<view class="th" v-for="(curItem, index) in theadList" :key="index">{{curItem}}</view>
			</view>
			<view class="main_list" :style="{height: calcHeight}">
				<CurrencyList :dataList="dataList" />
			</view>
		</view>
	</view>
</template>

<script>
	import { mapGetters } from 'vuex'
	import Spacer from '@/components/spacer/spacer.vue'
	import CurrencyList from '@/layouts/quotation/coins_list.vue'
	import { getContractList } from '@/apis/contract.js'
	import storage from '@/utils/storage.js'
	let timer = null
	export default {
		name: 'QuatationList',
		components: {
			Spacer,
			CurrencyList
		},
		data(){
			return {
				menuList: [
					{
						name: '自选'
					}, 
					{
						name: '币币'
					}, 
					{
						name: '永续合约'
					}
				],
				theadList: ['24H成交量', '最新价', '24H涨跌幅'],
				menuActive: 0,
				dataList: []
			}
		},
		methods: {
			sectionChange(index){
				this.menuActive = index
			},
			async getContractListHandler(){
				const uid = storage.getLocalData('uid')
				if(uid == '' || uid == null){
					this.showToast('登陆失效')
					return setTimeout(() => {
						uni.reLaunch({
							url: '/pages/login_phone/index'
						})
					}, 2000)
				}
				const res = await getContractList({uid: uid, type: 3, rqType: 'contract'})
				this.dataList = res
			},
			setTimer(){
				const that = this
				timer = setInterval(() => {
					that.getContractListHandler()
				}, 2000)
			},
			clearTimer(){
				clearInterval(timer)
				timer = null
			}
		},
		computed: {
			getCurrency(){
				this.clearTimer()
				if(this.menuActive == 1){
					this.dataList = this.getQuotation
					return 'USDT'
				}
				if(this.menuActive == 2){
					this.dataList = []
					// this.getContractListHandler()
					// this.setTimer()
					return 'USDT合约'
				}
			},
			calcHeight(){
				return this.menuActive == 0 ? 'calc(100% - 80upx)' : 'calc(100% - 160upx)'
			},
			...mapGetters({
				getQuotation: 'getQuotation'
			})
		}
	}
</script>

<style scoped>
	.quatation_list{
		padding-top: 70upx;
		height: 100%;
		box-sizing: border-box;
		position: relative;	
	}
	.menu{
		width: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}
	.quatation_wrap{
		height: 100%;
		padding-bottom: 0;
	}
	.thead{
		display: flex;
		width: 100%;
		height: 60upx;
		margin-bottom: 20upx;
	}
	.thead .th{
		width: 33.333%;
		font-size: 24upx;
		color: #aaa;
		line-height: 60upx;
		height: 60upx;
	}
	.thead .th:nth-child(2){
		text-align: center;
	}
	.thead .th:nth-child(3){
		text-align: right;
	}
	.main_list{
		display: flex;
		width: 100%;
	}
	.currency{
		color: #007AFF;
		border-bottom: 2px solid #007AFF;
		margin-bottom: 20upx;
	}
</style>
