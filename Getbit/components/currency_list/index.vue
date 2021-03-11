<template>
	<view :class="['wrap card', borderRadius ? 'border_radius' : 'no_border_radius']">
		<view class="type" v-if="showHeader">
			<view @click="changeMenu(index)" :class="['type_label', typeActive == index ? 'on' : '']" v-for="(curItem, index) in typeList" :key="index">
			   {{curItem}}
			   <view class="line"></view>
			</view>
		</view>
		<view class="currency_list">
			<view class="currency_list_label" @click="toPage(curItem.id, curItem.name, curItem.fromcid)" v-for="(curItem, index) in getDataList" :key="index">
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
	</view>
</template>

<script>
	/**
	 * 币种列表
	 */
	import { mapGetters } from 'vuex'
	import { getContractList } from '@/apis/contract.js'
	import storage from '@/utils/storage.js'
	import common_mixins from '@/mixins/common_mixins.js'
	export default {
		name: 'CurrencyList',
		mixins: [common_mixins],
		props: {
			showHeader: {
				type: Boolean,
				default: true
			},
			borderRadius: {
				type: Boolean,
				default: true
			},
			keywords: {
				type: String,
				default: ''
			}
		},
		data(){
			return {
				typeList: ['币币', '合约', '期权'],
				typeActive: 0,
				currencyList: [],
				contactList: []
			}
		},
		methods: {
			changeMenu(index){
				this.typeActive = index
				if(this.typeActive == 1){
					this.getContractListHandler()
				}
			},
			toPage(id, name, fromcid){
				uni.navigateTo({
					url: '/pages/kline/index?id='+id+'&name='+name+'&fromcid='+fromcid
				})
			},
			async getContractListHandler(){
				const uid = storage.getLocalData('uid')
				if(uid == null || uid == ''){
					this.showToast('登陆失效')
					return setTimeout(() => {
						uni.reLaunch({
							url: '../../pages/login_phone/index'
						})
					}, 2000)
				}
				const res = await getContractList({uid: 0})
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
			getDataList(){
				if(this.typeActive == 0){
					return this.currencyList.length > 0 ? this.currencyList : this.getQuotation
				}
				if(this.typeActive == 1){
					return this.contactList
				}
			},
			...mapGetters({
				getQuotation: 'getQuotation'
			})
		},
		watch: {
			keywords: {
				handler(val){
					if(val.length > 0){
						this.currencyList = this.getQuotation.filter(res => res.fromcname.indexOf(val.toUpperCase()) > -1)
					}else{
						this.currencyList = []
					}
				},
				deep: true,
				immediate: true
			}
		}
	}
</script>

<style scoped>
	.wrap{
		width: 100%;
	}
	.type{
		margin-bottom: 40upx;
		display: flex;
		width: 100%;
	}
	.type .type_label{
		line-height: 60upx;
		font-size: 30upx;
		margin-right: 40upx;
	}
	.type .type_label.on{
		color: #007AFF;
		font-weight: bold;
	}
	.type .type_label.on .line{
		border-bottom: 2px solid #007AFF;
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
