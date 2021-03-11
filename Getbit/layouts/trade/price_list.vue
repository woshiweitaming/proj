<template>
	<view class="w40">
		<view class="price_list">
			<view class="price">{{getClose}}</view>
			<view class="usd">≈{{getClose}}</view>
			<view class="tbody">
				<view class="thead">
					<view class="th">价格</view>
					<view class="th">数量</view>
				</view>
				<view class="body">
					<view class="label" v-for="(curItem, index) in dataList" :key="index">
						<view class="block" v-for="(ele, key) in curItem" :key="key">
							<view class="td">{{ele[0].toFixed(2)}}</view>
							<view class="td">{{ele[1].toFixed(6)}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { getExcDepth } from '@/apis/exc.js'
	export default {
		name: 'PriceList',
		props: ['getClose', 'getData'],
		data(){
			return {
				dataList: []
			}
		},
		methods: {
			async getDataList(id){
				const res = await getExcDepth({excpairs: id})
				const asks = res.asks.slice(0, 5)
				const bids = res.bids.slice(0, 5)
				this.dataList = [asks, bids]	
			}
		},
		watch: {
			getData(val){
				this.getDataList(val.id)
			}
		}
	}
</script>

<style scoped>
	.w40{
		width: 40%;
	}
	.price_list{
		width: 100%;
		box-sizing: border-box;
		padding-left: 20upx;
	}
	.price{
		text-align: right;
		line-height: 60upx;
		font-weight: bold;
		color: #00ad90;
		width: 100%;
	}
	.usd{
		text-align: right;
		font-size: 24upx;
		color: #AAAAAA;
	}
	.tbody{
		width: 100%;
	}
	.tbody .thead{
		display: flex;
		margin-top: 20upx;
		margin-bottom: 10upx;
	}
	.tbody .thead .th{
		width: 50%;
		font-size: 24upx;
		color: #aaa;
	}
	.tbody .thead .th:first-child{
		text-align: left;
	}
	.tbody .thead .th:last-child{
		text-align: right;
	}
	.body .label .block{
		display: flex;
		font-size: 22upx;
	}
	.body .label:first-child{
		margin-bottom: 20upx;
	}
	.body .label .block .td{
		width: 50%;
		line-height: 45upx;
	}
	.body .label .block .td:first-child{
		color: #d14b64;
	}
	.body .label .block .td:last-child{
		text-align: right;
		color: #999
	}
</style>
