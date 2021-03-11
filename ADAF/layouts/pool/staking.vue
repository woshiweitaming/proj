<template>
	<view class="staking_class">
		<view class="title">{{getLangs('poolp6')}}<text @tap="navigateTo('/pages/staking/index')" class="more">{{getLangs('poolp7')}} ></text></view>
		<view class="staking_list">
			<scroll-view :scroll-x="true" class="staking_scroller">
				<view class="staking_labels" v-for="(items, index) in dataList" :key="index" @tap="navigateTo('/pages/pool_trade/index', {pid: items.mid, name: items.name})">
					<image class="icon" :src="items.logo"></image>
					<view class="name">{{items.name}}</view>
					<view class="value">
					   {{items.D90}}%
					   <view class="tips">{{getLangs('poolp8')}}</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import { getMiningPoolProcuteList } from '@/api/user.js'
	export default {
		name: 'Staking',
		mixins: [commonMixins, langsMixins],
		props: ['show'],
		data(){
			return {
				dataList: []
			}
		},
		methods: {
			async getMiningPoolProcuteListHandler(){
				const res = await getMiningPoolProcuteList()
				this.dataList = res.list
				this.$emit('callback')
			}
		},
		watch: {
			show: {
				handler(val){
					this.getMiningPoolProcuteListHandler()
				},
				deep: true,
				immediate: true
			}
		}
	}
</script>

<style scoped>
	.staking_class{
		background: #fff;
	}
	.staking_class .title{
		line-height: 70upx;
		border-bottom: 1px solid #f9f9f9;
		padding: 0 20upx;
		position: relative;
		font-weight: bold;
		color: #333;
	}
	.staking_class .title .more{
		position: absolute;
		right: 20upx;
		color: #aaa;
		font-weight: normal;
		font-size: 24upx
	}
	.staking_class .staking_scroller{
		white-space: nowrap; 
		width: 100%;
		padding: 20upx;
	}
	.staking_class .staking_labels{
		height: 90upx;
		width: 33.333%;
		display: inline-block;
		position: relative;
	}
	.staking_class .staking_labels .icon{
		width: 40upx;
		height: 40upx;
		display: inline-block;
	}
	.staking_class .staking_labels .name{
		display: inline-block;
		line-height: 40upx;
		vertical-align: top;
		margin-left: 5px;
	}
	.staking_class .staking_labels .value{
		font-size: 36upx;
		color: #38a2fb;
		padding: 10upx 0;
		font-weight: bold;
		margin-top: 20upx;
	}
	.staking_class .staking_labels .tips{
		color: #AAAAAA;
		font-size: 20upx;
		padding-top: 20upx;
		font-weight: normal;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		word-break: break-all;
	}
</style>
