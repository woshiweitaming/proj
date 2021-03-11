<template>
		<view class="currency_list">
			<view class="currency_list_label" @click="toPage(curItem.id, curItem.name, curItem.fromcid)" v-for="(curItem, index) in dataList" :key="index">
				<view class="label">
					<view class="td">{{curItem.fromcname}}<text class="sub">/{{curItem.tocname}}</text></view>
					<view class="hd">24H量 {{(parseFloat(curItem.quotation.amount)/1000).toFixed(2)}}K</view>
				</view>
				<view class="label">
					<view class="td">{{getClose(curItem.quotation.close)}}</view>
					<view class="hd">≈ ${{getClose(curItem.quotation.close)}}</view>
				</view>
				<view class="label">
					<view :class="['block', getRatio(curItem.quotation.close, curItem.quotation.open) > 0 ? 'green' : 'red']">{{getRatio(curItem.quotation.close, curItem.quotation.open)}}%</view>
				</view>
			</view>
		</view>
</template>

<script>
	/**
	 * 币种列表
	 */
	import { mapGetters } from 'vuex'
	import common_mixins from '@/mixins/common_mixins.js'
	import { getContractList } from '@/apis/contract.js'
	import storage from '@/utils/storage.js'
	let timer = null
	export default {
		name: 'ContractList',
		mixins: [common_mixins],
		methods: {
			toPage(id, name, fromcid){
				uni.navigateTo({
					url: '/pages/kline/index?id='+id+'&name='+name+'&fromcid='+fromcid
				})
			},
			async getContractListHandler(){
				const uid = storage.getLocalData('token')
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
		data(){
			return {
				dataList: []
			}
		},
		computed: {
			getClose(){
				return close => {
					return parseFloat(close).toFixed(2)
				}
			},
			getRatio(){
				return (close, open) => {
					const res = ((close - open) / close * 100).toFixed(2)
					return res > 0 ? `+${res}` : res
				}
			},
		},
		created() {
			this.getContractListHandler()
			this.setTimer()
		},
		destroyed(){
			this.clearTimer()
		}
		// watch: {
		// 	keywords: {
		// 		handler(val){
		// 			if(val.length > 0){
		// 				this.currencyList = this.getQuotation.filter(res => res.fromcname.indexOf(val.toUpperCase()) > -1)
		// 			}else{
		// 				this.currencyList = []
		// 			}
		// 		},
		// 		deep: true,
		// 		immediate: true
		// 	}
		// }
	}
</script>

<style scoped>
	.wrap{
		width: 100%;
	}
	.currency_list{
		width: 100%;
	}
	.currency_list_label{
		margin-bottom: 40upx;
		display: flex;
	}
	.currency_list_label .label{
		width: 33.333%;
	}
	.currency_list_label .label:nth-child(2){
		text-align: left;
	}
	.currency_list_label .label .td{
		font-size: 32upx;
		color: #14181F;
		margin-bottom: 5px;
	}
	.currency_list_label .label .sub{
		color: #AAAAAA;
		font-size: 24upx;
	}
	.currency_list_label .label .hd{
		color: #AAAAAA;
		font-size: 24upx;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.currency_list_label .label:nth-child(3){
		text-align: right;
	}
	.block{
		width: 80%;
		color: #fff;
		border-radius: 10upx;
		text-align: center;
		line-height: 70upx;
		display: inline-block;
	}
	.block.green{
		background: #10bd96;
		color: #fff !important;
	}
	.block.red{
		background: #d14b64;
		color: #fff !important;
	}
	.no_border_radius{
		border-radius: 0 !important;
	}
</style>
