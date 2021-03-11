<template>
	<view class="record card">
		<view class="menu">
			<view @click="changeMenu(index)" :class="['label', menuActive === index ? 'on' : '']" v-for="(curItem, index) in menuList">{{curItem}}</view>
		</view>
		<view class="record_box">
			<view class="record_labels" v-for="(curItem, index) in dataList" :key="index">
				<view class="label">
					<view :class="['tag', curItem.direction == 'buy' ? 'tagred' : 'taggreen']">{{getTag(curItem.direction)}}</view>
					<view class="currency">{{getData.name}}</view>
					<view class="date">{{formatDate(curItem.inputtime)}}</view>
				</view>
				<view class="label label_list">
					<view class="items">
						<view class="name">委托数量</view>
						<view class="value">{{Number(curItem.donenums).toFixed(6)}} {{getData.fromcname}}</view>
					</view>
					<view class="items">
						<view class="name">委托价格</view>
						<view class="value">{{curItem.doneprice}} {{getData.tocname}}</view>
					</view>
					<view class="items">
						<view class="name">已成交量</view>
						<view class="value">0.000000 {{getData.fromname}}</view>
					</view>
					<view class="items">
						<view class="name">成交均价</view>
						<view class="value">-</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import trade_mixins from '@/mixins/trade_mixins.js'
	import common_mixins from '@/mixins/common_mixins.js'
	import { getEntrust, getDoneLog } from '@/apis/coins.js'
	import { endEutrust } from '@/apis/exc.js'
	import storage from '@/utils/storage.js'
	import tips from '@/utils/tips.js'
	export default {
		name: 'Record',
		props: ['active'],
		mixins: [trade_mixins, common_mixins],
		data(){
			return {
				menuList: ['当前委托','历史委托'],
				menuActive: 0,
				dataList: []
			}
		},
		methods: {
			async changeMenu(index){
				this.menuActive = index
				if(index == 0){
					this.getEntrustHandler()
				}
				if(index == 1){
					this.getDoneLogHandler()
				}
			},
			async getEntrustHandler(){
				const res = await getEntrust({excpairs: this.getData.fromcid})
				this.dataList = res
			},
			async getDoneLogHandler(){
				const res = await getDoneLog({excpairs: this.getData.fromcid})
				this.dataList = res
			}
		},
		computed: {
			getTag(){
				return d => {
					return d == 'buy' ? '买' : '卖'
				}
			}
		},
		created() {
			this.menuActive == 0 ? this.getEntrustHandler() : this.getDoneLogHandler()
		},
		watch: {
			getData(val){
				if(this.menuActive == 0){
					this.getEntrustHandler()
				}
			}
		}
	}
</script>

<style scoped>
	.record{
		display: block;
	}
	.record .menu{
		display: flex;
		margin-bottom: 40upx;
	}
	.record .menu .label{
		margin-right: 40upx;
		line-height: 70upx;
	}
	.record .menu .label.on{
		color: #007AFF;
		border-bottom: 2px solid #007AFF;
	}
	.record_labels .label{
		width: 100%;
		display: flex;
		font-size: 24upx;
		margin-bottom: 20upx;
	}
	.tag{
		height: 40upx;
		width: 40upx;
		border-radius: 2px;
		color: #fff;
		text-align: center;
	}
	.taggreen{
		background: #00ad90 !important;
	}
	.tagred{
		background: #d14b64 !important;
	}
	.currency{
		padding: 0 20upx;
	}
	.date{
		color: #999;
	}
	.items{
		width: 50%;
		display: flex;
		margin-bottom: 10upx;
	}
	.label_list{
		flex-wrap: wrap;
	}
	.name{
		width: 40%;
		text-align: left;
		color: #999;
	}
	.value{
		width: 60%;
		color: #131E31;
		font-size: 24upx
	}
</style>
