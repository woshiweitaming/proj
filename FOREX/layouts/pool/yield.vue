<template>
	<view class="yield_class">
		<view class="header">
			<image @tap="back" class="arrow" src="../../static/images/left_arrow_b.png"></image>
			<view class="menu">
				<u-subsection @change="change" :list="dataList" :current="current"></u-subsection>
			</view>
		</view>
		<view class="content">
			<view class="page_container" v-if="current === 0">
				<view class="table">
					<view class="talbe_list_container">
						<scroll-view style="height: 100%"  scroll-y="true" @scrolltolower="scrolltolower">
							<view class="labels" v-for="(items, index) in tableList" :key="index">
								<view class="labels_box">
									<view class="left type">{{items.name}}</view>
									<view class="right amount">{{items.amount > 0 ? '+'+items.amount : items.amount}}</view>
								</view>
								<view class="labels_box">
									<view class="left date">{{items.create_time}}</view>
									<view class="right action">{{items.action_before}}</view>
								</view>
							</view>
							<view class="loading_more">{{lock ? getLangs('noMore') : getLangs('loadingMore')}}</view>
						</scroll-view>
					</view>
				</view>
			</view>
			<view class="page_container" v-if="current === 1">
				<view class="table">
					<view class="no_data" v-if="tableList.length === 0">{{getLangs('noData')}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import { getMiningPoolProfitTotal, getMiningPoolBillListr } from '@/api/user.js'
	export default {
		name: 'Yield',
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				dataList: [],
				current: 0,
				tableList: [],
				params: {
					pageSize: 10,
					pageNumber: 1,
				},
				lock: false
			}
		},
		methods: {
			async getMiningPoolBillListrHandler(){
				const params = {
					billType: this.current
				}
				const res = await getMiningPoolBillListr(Object.assign(params, this.params))
				//默认数据
				if(this.params.pageNumber === 1){
					this.tableList = res.data.list
					if(res.data.list.length < 10 || res.data.list.length == 0){
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
					    	this.tableList.push(items)
					    })	
					}
				}
			},
			change(val){
				this.current = val
				this.params.pageNumber = 1
				this.getMiningPoolBillListrHandler()
			},
			scrolltolower(e){
				if(!this.lock){
					this.showLoadingText = true
					this.params.pageNumber++
					this.getMiningPoolBillListrHandler()
				}
			},
			actionType(action_type){
				const lang = this.getGlobalLang
				const langs = {
					cn: {
						0: '盈利', 
						1: '赎回',  
						2: '订购',
						3: '返回本金'
					},
					cns: {
						0: '盈利', 
						1: '贖回',  
						2: '訂購',
						3: '返回本金'
					},
					en: {
						0: 'Profit', 
						1: 'Redeem',  
						2: 'Order',
						3: 'Return of principal'
					},
					ja: {
						0: '利益を上げる', 
						1: '請け戻す',  
						2: '注文する',
						3: '元金を返す'
					},
					ko: {
						0: '이윤', 
						1: '저당물 을 되찾다',  
						2: '주문 하 다',
						3: '원금 을 갚다'
					},
					vi: {
						0: 'lợi nhuận', 
						1: 'bù',  
						2: 'Thứ',
						3: 'Thu hồi vốn'
					}
				}
				return langs[lang][action_type]
			}
		},
		created() {
			this.dataList = [
				{
					name: this.getLangs('poolp11')
				},
				{
					name: this.getLangs('poolp9')
				}
			]
			this.getMiningPoolBillListrHandler()
		},
	}
</script>

<style scoped>
	page{
		background: #f9f9f9;
	}
	.yield_class{
		padding-top: 20upx;
		height: 100%;
	}
	.talbe_list_container{
		height: 100%;
	}
	.header{
		width: 100%;
		height: calc(var(--status-bar-height) + 88upx);
		background: #fff;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2000000;
		padding-top: var(--status-bar-height) ;
	}
	.menu{
		width: 40%;
		margin: 5px auto 0 auto;
	}
	.content{
		background: #fff;
		height: 100%;
		padding-bottom: 0 !important;
		padding-top: calc(var(--status-bar-height) + 88upx);
	}
	.yield_hd{
		display: flex;
		padding-top: 40upx;
		border-bottom: 1px solid #f9f9f9;
		padding-bottom: 40upx;
	}
	.yield_hd .labels{
		width: 50%;
		text-align: center;
	}
	.yield_hd .name{
		font-size: 26upx;
		color: #999999
	}
	.yield_hd .value{
		font-weight: bold;
		font-size: 34upx;
		color: #007AFF;
	}
	.talbe_list_container .labels{
		border-bottom: 1px solid #f9f9f9;
		padding: 20upx;
	}
	.talbe_list_container .labels .labels_box{
		display: flex;
		margin-bottom: 20upx;
	}
	.talbe_list_container .labels .left,
	.talbe_list_container .labels .right{
		font-size: 28upx;
		width: 50%;
	}
	.talbe_list_container .labels .left{
		text-align: left;
	}
	.talbe_list_container .labels .right{
		text-align: right;
	}
	.talbe_list_container .labels .right.date{
		color: #aaa;
		font-size: 24upx
	}
	.talbe_list_container .labels .type{
		font-size: 36upx;
		color: #242B46
	}
	.talbe_list_container .labels .name{
		font-weight: bold;
	}
	.page_container{
		height: 100%;
		overflow: auto;
	}
	.header .arrow{
		width: 20upx;
		height: 40upx;
		position: fixed;
		left: 30upx;
		z-index: 20000001;
		top: calc(var(--status-bar-height) + 20upx)
	}
	.page_container .table{
		height: 100%;
	}
	.border{
		border-top: 1px solid #eee;
		padding-top: 20upx;
	}
	.action{
		color: #999;
		font-size: 24upx;
		font-weight: bold
	}
	.amount{
		font-weight: bold;
		color: #14181F;
	}
</style>
