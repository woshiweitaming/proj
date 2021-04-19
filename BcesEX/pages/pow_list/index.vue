<template>
	<view class="pow_list_class">
		<view class="list">
			<u-empty v-if="dataList.length == 0" :text="getLangs('noData')" mode="list"></u-empty>
			<view v-else class="labels" v-for="(items, index) in dataList" :key="index" @tap="navigateTo('/pages/pow_trade/index',{mpid: items.mpid})">
				<view class="hd">
					<image :src="items.logo" class="icon"></image>
					<view class="name">{{items.mineMachineName}}</view>
					<view class="algorithm">{{items.algorithm}}{{getLangs('powp10')}}</view>
					<view class="rate">{{items.mineRate}}{{items.unit}}</view>
				</view>
				<view class="bottom">
					<view class="items">
						<view class="value">{{items.mineMonthPrice}}</view>
						<view class="name">{{getLangs('powp21')}}(USDT)</view>
					</view>
					<view class="items">
						<view class="value">{{items.minePrice}}</view>
						<view class="name">{{getLangs('powp23')}}(USDT)</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import { getMiningProcuteList } from '@/api/user.js'
	export default {
		name: 'PowProductList',
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				dataList: []
			}
		},
		methods: {
			async getMiningProcuteListHandler(){
				const res = await getMiningProcuteList()
				this.dataList = res.list
			}
		},
		onShow(){
			this.getMiningProcuteListHandler()
		}
	}
</script>

<style scoped>
	page{
		background: #f9f9f9;
	}
	.pow_list_class{
		height: 100%;
		padding-bottom: 140upx;
		border-top: 1px solid #f9f9f9;
		background: #f9f9f9;
	}
	.list{
		padding: 20upx;
	}
	.list .labels{
		padding: 20upx;
		border-radius: 20upx;
		padding: 20upx;
		background: #fff;
		border-bottom: 20upx;
		box-shadow: 0 10upx 20upx 0 rgba(0,0,0,.05);
		margin-bottom: 20upx;
		position: relative;
	}
	.list .algorithm{
		font-size: 26upx;
		color: #aaa
	}
	.list .name{
		font-size: 32upx;
		color: #14181F;
	}
	.list .bottom{
		border-top: 1px solid #f9f9f9;
		margin-top: 20upx;
		padding-top: 20upx;
		display: flex;
	}
	.list .bottom .items{
		width: 50%;
		text-align: center;
	}
	.list .bottom .items .name{
		color: #7C91C0;
		font-size: 24upx;
	}
	.list .bottom .items .value{
		color: #242B46;
		font-weight: bold
	}
	.list .hd{
		padding-left: 80upx;
		position: relative;
	}
	.list .hd .icon{
		width: 60upx;
		height: 60upx;
		position: absolute;
		left: 0;
		top: 10upx;
	}
	.list .hd .rate{
		font-size: 36upx;
		position: absolute;
		right: 0;
		top: 15upx;
		font-weight: bold;
		color: #605cf0;
	}
</style>
