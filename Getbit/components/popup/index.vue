<template>
	<view class="popup_wrap">
		<view class="title">币币</view>
		<view class="sub">
			<text class="text">USDT</text>
		</view>
		<view class="list">
			<view class="labels" @click="toPage(curItem.id, curItem.name, curItem.fromcid)" v-for="(curItem, index) in getQuotation" :key="index">
				<view class="name">{{curItem.fromcname}}<text class="ex">/USDT</text></view>
				<view :class="['value', getRatio(curItem.quotation.close, curItem.quotation.open)]">{{parseFloat(curItem.quotation.close).toFixed(6)}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		name: 'Popup',
		computed: {
			getClose(){
				return close => {
					return parseFloat(close).toFixed(6)
				}
			},
			getRatio(){
				return (close, open) => {
					const res = ((close - open) / close * 100)
					return res > 0 ? 'green' : 'red'
				}
			},
			...mapGetters({
				getQuotation: 'getQuotation'
			})
		},
		methods: {
			toPage(id, name, fromcid){
				uni.redirectTo({
					url: '/pages/kline/index?id='+id+'&name='+name+'&fromcid='+fromcid
				})
			}
		}
	}
</script>

<style scoped>
	.title{
		text-align: center;
		font-size: 32upx;
		font-weight: bold;
		line-height: 80upx;
	}
	.sub{
		padding: 0 20upx;
		border-bottom: 1px solid #f9f9f9;
		height: 59upx;
	}
	.sub .text{
		line-height: 60upx;
		color: #007AFF;
		border-bottom: 2px solid #007AFF;
	}
	.labels{
		border-bottom: 1px solid #f9f9f9;
		display: flex;
		padding: 0 20upx;
	}
	.labels .name,
	.labels .value{
		width: 50%;
		line-height: 80upx;
	}
	.labels .name{
		font-weight: bold;
	}
	.labels .ex{
		font-size: 24upx;
		color: #666;
	}
	.labels .value{
		text-align: right;
		font-size: 24upx;
		font-weight: bold
	}
</style>
