<template>
	<view class="currency_list">
		<view class="labels" v-for="(curItem,index) in dataList" :key="index">
			<view class="title">
				<view class="box">{{curItem.name}}</view>
				<view class="box" @click="toPage()">查看详情 ></view>
			</view>
			<view class="money">
				<view class="box">
					<view class="name">可用</view>
					<view class="value">{{curItem.usable.toFixed(6)}}</view>
				</view>
				<view class="box">
					<view class="name">冻结</view>
					<view class="value">{{curItem.freeze.toFixed(6)}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'CurrencyList',
		data(){
			return {
				dataList: [
					{
						name: 'BTC',
						usable: 0,
						freeze: 0
					},
					{
						name: 'EHT',
						usable: 0,
						freeze: 0
					}
				]
			}
		},
		methods: {
			toPage(){
				uni.navigateTo({
					url: '/pages/c2c_detail/index'
				})
			}
		}
	}
</script>

<style scoped>
	.currency_list{
		margin-top: 40upx;
	}
	.currency_list .labels{
		margin-bottom: 60upx;
	}
	.currency_list .labels .title{
		position: relative;
		display: flex;
	}
	.currency_list .labels .title .box{
		width: 50%;
		font-size: 32upx;
		font-weight: bold;
	}
	.currency_list .labels .title .box:last-child{
		text-align: right;
		font-size: 24upx;
		color: #aaa;
		font-weight: normal;
	}
	.money{
		display: flex;
		padding-top: 40upx;
	}
	.money .box{
		width: 50%;
	}
	.money .box .name{
		font-size: 24upx;
		color: #aaa;
	}
	.money .box .value{
		font-weight: bold;
		color: #0F1118;
	}
</style>
