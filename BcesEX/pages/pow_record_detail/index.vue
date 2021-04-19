<template>
	<view class="pow_class">
		<view class="pow_record_label">
			<view class="title">{{data.mineMachineName}}</view>
			<view class="labels">
			  <view class="name">{{getLangs('powp7')}}</view>
			  <view class="value">{{data.name}}</view>
			</view>
			<view class="labels">
			  <view class="name">{{getLangs('powp45')}}</view>
			  <view class="value">{{data.algorithm}}</view>
			</view>
			<view class="labels">
			  <view class="name">{{getLangs('powp3')}}</view>
			  <view class="value">{{data.mineRate}}{{data.unit}}</view>
			</view>
			<view class="labels">
			  <view class="name">{{getLangs('powp36')}}</view>
			  <view class="value">{{data.earnings}}</view>
			</view>
			<view class="labels">
			  <view class="name">{{getLangs('powp41')}}</view>
			  <view class="value">{{data.mineRate}}</view>
			</view>
			<view class="labels">
			  <view class="name">{{getLangs('type')}}</view>
			  <view class="value type">{{toBuyType(data.buyType)}}</view>
			</view>
			<view class="labels">
			  <view class="name">{{getLangs('orderStatus')}}</view>
			  <view class="value status">{{toStatus(data.status)}}</view>
			</view>
			<view class="labels">
			  <view class="name">{{getLangs('orderNumber')}}</view>
			  <view class="value">{{data.orderNo}}</view>
			</view>		
			<view class="labels">
			  <view class="name">{{getLangs('powp40')}}</view>
			  <view class="value">{{data.endDate}}</view>
			</view>			
		</view>
	</view>
</template>

<script>
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import { getPowOrderDetail } from '@/api/user.js'
	export default {
		name: 'PowSuccess',
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				data: {},
				oid: '',
				menuList: ['powp34', 'powp35'],
				buyType: ['powp49', 'powp50']
			}
		},
		methods: {
			async getPowOrderDetailHandler(){
				const params = {oid: this.oid}
				const res = await getPowOrderDetail(params)
				this.data = res.data
			},
			toBuyType(type){
				return this.getLangs(this.buyType[type])
			},
			toStatus(status){
				return this.getLangs(this.menuList[status])
			}
		},
		onLoad(opt) {
			this.oid = opt.oid
		},
		onShow() {
			this.setTitle(this.getLangs('powp48'))
			this.getPowOrderDetailHandler()
		},
	}
</script>

<style scoped>
	page{
		background: #f9f9f9;
	}
	.pow_class{
		text-align: center;
		height: 100%;
		background: #f9f9f9;
		border-top: 1px solid #f9f9f9;
	}
	.pow_menu{
		height: 80upx;
		background: #242B46;
		text-align: left;
	}
	.pow_menu .items{
		display: inline-block;
		padding: 0 20upx;
		text-align: center;
		color: #fff;
		line-height: 80upx;
		color: rgba(255,255,255,.5);
	}
	.pow_menu .items.on{
		font-size: 36upx;
		color: #fff;
	}
	.pow_main{
		height: calc(100% - 80upx);
	}
	.pow_record_label{
		padding: 20upx;
		border-bottom: 1px solid #eee;
		background: #fff;
	}
	.pow_record_label .title{
		font-size: 32upx;
		color: #081723;
		font-weight: bold;
		text-align: left;
		margin-bottom: 20upx;
	}
	.pow_record_label .labels{
		display: flex;
		font-size: 26upx;
		margin-bottom: 10upx;
	}
	.pow_record_label .name{
		flex: 1;
		text-align: left;
		color: #AAAAAA;
	}
	.pow_record_label .value{
		flex: 2;
		text-align: right;
		font-weight: bold;
	}
	.pow_record_label .value.type{
		color: #007AFF;
	}
	.pow_record_label .value.status{
		color: #18B566
	}
	.scroll{
		height: 100%;
	}
</style>
