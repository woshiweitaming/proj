<template>
	<view class="pow_class">
		<view class="pow_menu">
			<view @tap="change(index)" :class="['items', params.status === index ? 'on' : '']" v-for="(items, index) in menuList" :key="index">{{getLangs(items)}}</view>
		</view>
		<view class="pow_main">
			<scroll-view class="scroll" style="height: 100%"  scroll-y="true" @scrolltolower="scrolltolower">
				<view class="pow_record_label" @tap="navigateTo('/pages/pow_record_detail/index', {oid: items.oid})" v-for="(items, index) in dataList" :key="index">
					<view class="title">{{items.mineMachineName}}</view>
					<view class="labels">
					  <view class="name">{{getLangs('powp24')}}</view>
					  <view class="value">{{items.orderNo}}</view>
					</view>
					<view class="labels">
					  <view class="name">{{getLangs('powp36')}}</view>
					  <view class="value">{{items.earnings}}</view>
					</view>
					<view class="labels">
					  <view class="name">{{getLangs('powp37')}}</view>
					  <view class="value type">{{toBuyType(items.buyType)}}</view>
					</view>
					<view class="labels">
					  <view class="name">{{getLangs('orderStatus')}}</view>
					  <view class="value status">{{getLangs(toStatus(items.status))}}</view>
					</view>
				</view>
				<view class="loading_more">{{lock ? getLangs('noMore') : getLangs('loadingMore')}}</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import { getPowOrderList } from '@/api/user.js'
	export default {
		name: 'PowSuccess',
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				menuList: ['powp34', 'powp35'],
				params: {
					status: 0,
					pageSize: 10,
					pageNumber: 1
				},
				dataList: [],
				lock: false,
				buyType: ['powp49', 'powp50']
			}
		},
		methods: {
			change(val){
				this.params.status = val
				this.params.pageNumber = 1
				this.getPowOrderListHandler()
			},
			async getPowOrderListHandler(){
				const res = await getPowOrderList(this.params)
				//默认数据
				if(this.params.pageNumber === 1){
					this.dataList = res.data.list
					if(res.data.list.length < 10){
						this.showLoadingText = false
						this.lock = true
					}else{
						this.showLoadingText = false
						this.lock = false
					}
				}
				//下拉加载更多
				if(this.params.pageNumber > 1){
					//没有新的数据
					if(res.data.list.length === 0) {
						this.showLoadingText = false
						this.lock = true
					}else{
					    res.data.list.forEach((items, index) => {
					    	this.dataList.push(items)
					    })	
					}
				}
			},
			scrolltolower(e){
				if(!this.lock){
					this.showLoadingText = true
					this.params.pageNumber++
					this.getPowOrderListHandler()
				}
			},
			toBuyType(type){
				return this.getLangs(this.buyType[type])
			},
			toStatus(status){
				return this.menuList[status]
			}
		},
		onShow() {
			this.setTitle(this.getLangs('powp48'))
			this.getPowOrderListHandler()
		},
		onBackPress(e) {
			if (e.from === 'navigateBack') {  
			   return false;  
			}  
			const pages = getCurrentPages()
			const coinPoolPage = pages.findIndex(res => res.route == 'pages/pool/index')
			uni.navigateBack({
			    delta: pages.length - 1 - coinPoolPage
			});
			return true
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
