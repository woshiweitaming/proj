<template>
	<view class="record">
		<view class="record_main">
			<u-empty :text="getLang('common_p5')" mode="list" v-if="dataList.length === 0"></u-empty>
			<view class="record_label" v-else v-for="(curItem, index) in dataList" :key="index">
				<view class="title_bar">
					<view class="name">{{getLang('recharge_p1')}}</view>
					<view class="status">
						<u-tag v-if="curItem.status == 0" :text="getLang('recharge_record_p7')" type="warning" />
						<u-tag v-if="curItem.status == 1" :text="getLang('recharge_record_p8')" type="success" />
						<u-tag v-if="curItem.status == 2" :text="getLang('recharge_record_p9')" type="error" />
					</view>
				</view>
				<view class="list">
					<view class="labels">
						<view class="name">{{getLang('recharge_record_p3')}}</view>
						<view class="value">{{curItem.amount}}</view>
					</view>
					<view class="labels">
						<view class="name">{{getLang('recharge_record_p5')}}</view>
						<view class="value">{{curItem.submit_time}}</view>
					</view>
					<view class="labels" v-if="curItem.note.length > 0">
						<view class="name">{{getLang('recharge_record_p6')}}</view>
						<view class="value">{{curItem.note}}</view>
					</view>
				</view>
			</view>
			<u-divider v-if="num > 1" :height="80" bg-color="#f8fbfd" color="#999">{{getLang('common_p4')}}</u-divider>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import { payList } from '@/apis/users.js'
	export default {
		name: 'RechargeRecord',
		mixins: [langMixins],
		data(){
			return {
				dataList: [],
				num: 1
			}
		},
		methods: {
			async payListHandler(){
				const res = await payList({num: this.num})
				if(this.num == 1){
					this.dataList = res.data
				}else{
					res.data.forEach((curItem, index) => {
						this.dataList.push(curItem)
					})
				}
				uni.stopPullDownRefresh()
			}
		},
		onShow(){
			uni.startPullDownRefresh()
		},
		onLoad(){
			uni.setNavigationBarTitle({
				title: this.getLang('recharge_record_p1')
			})
		},
		onPullDownRefresh() {
			this.num = 1
			this.payListHandler()
		},
		onReachBottom(data){
			this.num++
			this.payListHandler()
		},
	}
</script>

<style scoped>
	page{
		height: 100%;
	}
	.record{
		height: 100%;
	}
	.record_label{
		padding: 0;
	}
	.title_bar{
		background: #f9f9f9;
		border-bottom: 1px solid #f9f9f9;
		display: flex;
		border-radius: 20upx 20upx 0 0;
	}
	.title_bar .name,
	.title_bar .status{
		width: 50%;
	}
	.title_bar .name{
		line-height: 80upx;
		padding-left: 20upx;
		font-weight: bold;
		font-size: 30upx
	}
	.title_bar .status{
		width: 50%;
		text-align: right;
		padding-right: 20upx;
		padding-top: 15upx;
	}
	.list{
		padding: 20upx;
	}
	.list .labels{
		display: flex;
		line-height: 80upx;
		border-bottom: 1px solid #eee;
	}
	.list .labels:last-child{
		border-bottom: none;
	}
	.list .labels .name,
	.list .labels .value{
		width: 50%;
	}
	.list .labels .name{
		color: #666;
		font-size: 26upx
	}
	.list .labels .value{
		text-align: right;
		font-weight: bold;
	}
</style>
