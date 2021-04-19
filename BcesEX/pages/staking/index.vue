<template>
	<view class="staking_inner_class">
		<Header :isBackground="true" background="#fff" title="poolp1" theme="black" />
		<text class="title_right" @tap="navigateTo('/pages/pool_statking_order/index')">{{getLangs('order')}}</text>
		<view class="staking_list">
			<view class="staking_items" @tap="navigateTo('/pages/pool_trade/index', {pid: items.mid, name: items.name})" v-for="(items, index) in dataList" :key="index">
				<view class="labels">
					<view class="items">
						<image class="icon" :src="items.logo"></image>
						<text class="name">{{items.name}}</text>
					</view>
					<view class="items">
						<view class="p1">{{items.D90}}%</view>
					</view>
				</view>
				<view class="labels">
					<view class="items">
						<u-tag class="tags" :text="toType(items.type)" size="mini"></u-tag>
						<u-tag class="tags" type="success" :text="items.min_amount + items.name" size="mini"></u-tag>
					</view>
					<view class="items">
						<view class="p2">{{getLangs('poolp8')}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Header from '@/layouts/common/header.vue'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import { getMiningPoolProcuteList } from '@/api/user.js'
	export default {
		name: 'Staking',
		mixins: [commonMixins, langsMixins],
		components: {
			Header
		},
		data(){
			return {
				dataList: [],
				typeList: ['poolp45','poolp46','poolp47']
			}
		},
		methods: {
			async getMiningPoolProcuteListHandler(){
				const res = await getMiningPoolProcuteList()
				this.dataList = res.list
			},
			toType(status){
				return this.getLangs(this.typeList[status])
			}
		},
		onShow() {
			this.setTitle(this.getLangs('poolp11'))
			this.getMiningPoolProcuteListHandler()
		}
	}
</script>

<style scoped>
	.staking_inner_class{
		padding-top: calc(var(--status-bar-height) + 88upx);
		height: 100%;
		background: #f9f9f9;
	}
	.staking_list{
		margin-top: 20upx;
		background: #fff;
		padding: 20upx;
	}
	.staking_list .staking_items{
		border-bottom: 1px solid #f9f9f9;
		padding-bottom: 20upx;
		padding-top: 10upx;
	}
	.staking_list .staking_items:last-child{
		border-bottom: none
	}
	.icon{
		width: 40upx;
		height: 40upx;
		display: inline-block;
	}
	.staking_list .staking_items .labels{
		display: flex;
	}
	.staking_list .staking_items .labels .items{
		width: 50%;
		margin-bottom: 10upx;
		vertical-align: top;
	}
	.staking_list .staking_items .labels .items .p1{
		text-align: right;
		color: #007AFF;
		font-size: 36upx
	}
	.staking_list .staking_items .labels .items .p2{
		font-size: 24upx;
		color: #aaa;
		text-align: right;
	}
	.staking_list .staking_items .labels .items .tags{
		margin-right: 2px;
	}
	.title_right{
		position: fixed;
		right: 20upx;
		display: block;
		line-height: 88upx;
		color: #007AFF;
		top: var(--status-bar-height);
		z-index: 20000001;
	}
</style>
