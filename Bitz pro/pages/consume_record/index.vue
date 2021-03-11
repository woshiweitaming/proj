<template>
	<view class="consume_record_class">
		<view :class="['consume_query', createOSClass]" >
			<view class="query_main" @tap="openFilter">
				<view class="screen">
					<image class="query_icon" src="../../static/images/query_icon.png"></image>
					<text>{{getLangs('screen')}}</text>
				</view>
				<image src="../../static/images/down_arrow.png" class="down_arrow"></image>
			</view>
		</view>
		<view :class="['query_content', createOSClass]" v-if="status">
			<view class="query_list">
				<text class="title">{{getLangs('tradeType')}}</text>
				<view class="query_list_main">
					<view @tap="selectType(index)" :class="['query_list_label', index === type ? 'on' : '']"  v-for="(items, index) in fromData.list" :key="index">{{getLangs(items)}}</view>
				</view>
				<view class="bottom_btn">
					<view class="btn_items" @tap="onClick(index)" v-for="(items, index) in btns" :key="index">{{getLangs(items)}}</view>
				</view>
			</view>
		</view>
		<view class="bill_class">
			<view class="bill_main">
				<view class="no_data" v-if="dataList.length === 0">{{getLangs('noData')}}</view>
				<scroll-view class="scroll" scroll-y="true" v-else @scrolltolower="scrolltolower" :lower-threshol="200">
					<view class="bill_label" v-for="(items, index) in dataList" :key="index">
						<view class="labels left currency">{{getOType(items.otype)}} {{getAccountText}}</view>
						<view :class="['labels right profit', Number(items.price) > 0 ? 'green' : 'red']">{{items.price}} {{items.bname}}</view>
						<view class="labels left type">{{items.explain}}</view>
						<view class="labels right date">{{getDate(items.time)}}</view>
					</view>
					<view class="loading_more">{{lock ? getLangs('noMore') : getLangs('loadingMore')}}</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 帐变记录
	 */
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import accountLeftmoneyMixins from '@/mixins/account_leftmoney_mixins.js'
	import { getPaylog } from '@/api/user.js'
	import Utils from '@/utils/Utils.js'
	export default {
		name: 'ComsumeRecord',
		mixins: [commonMixins, langsMixins, accountLeftmoneyMixins],
		data(){
			return {
				status: false,
				type: '',
				btns: ['reset', 'confirm'],
				num: 1,
				dataList: [],
				showLoadingText: false,
				lock: false
			}
		},
		methods: {
			/**
			 * 打开过滤
			 */
			openFilter(){
				this.status = !this.status
			},
			/**
			 * 切换账户类型
			 */
			selectType(index){
				this.type = index
			},
			/**
			 * 点击
			 */
			onClick(index){
				if(index == 0){
					this.type = ''
				}
				if(index == 1){
					this.openFilter()
					this.num = 1
					this.showLoadingText = false
					this.lock = false
					this.getPaylogHandler()
				}
			},
			async getPaylogHandler(){
				const params = {
					type: this.type,
					num: this.num
				}
				const res = await getPaylog(params)
				//默认数据
				if(this.num === 1){
					this.dataList = res.data
					if(res.data.length < 10){
						this.showLoadingText = false
						this.lock = true
					}else{
						this.showLoadingText = false
						this.lock = false
					}
				}
				//下拉加载更多
				if(this.num > 1){
					//没有新的数据
					if(res.data.length === 0) {
						this.showLoadingText = false
						this.lock = true
					}else{
					    res.data.forEach((items, index) => {
					    	this.dataList.push(items)
					    })	
					}
				}
			},
			getDate(ts){
				return Utils.toDate(Number(ts) * 1000)
			},
			scrolltolower(e){
				if(!this.lock){
					this.showLoadingText = true
					this.num++
					this.getPaylogHandler()
				}
			},
		},
		computed: {
			getOType(){
				return type => {
					if(type == 0){
						return this.getLangs('futuresText')
					}
					if(type == 1){
						return this.getLangs('contractText')
					}
					if(type == 2){
						return this.getLangs('coinText')
					}
					if(type == 3){
						return this.getLangs('poolp1')
					}
				}
			},
			getAccountText(){
				switch(this.getGlobalLang){
					case 'cn' :
					   return '账户'
					case 'cns' :
					   return '帳戶'
					case 'en' :
					   return 'account'
					case 'ja' :
					   return 'アカウント'
					case 'ko' :
					   return '계좌'
					case 'vi' :
					   return 'tài khoản'
				}
			}
		},
		onShow() {
			this.setTitle(this.getLangs('bill'))
			this.getPaylogHandler()
		},
	}
</script>

<style scoped>
	page{
		background: #f9f9f9;
	}
	.consume_record_class{
		height: 100%;
	}
	.consume_query{
		width: 100%;
		height: 80upx;
		position: fixed;
		left: 0;
		z-index: 100;
		background: #fff;
		border-top: 1px solid rgba(255,255,255,.1);
		border-bottom: 1px solid rgba(255,255,255,.1);
		box-sizing: border-box;
		padding: 20upx;
		top: 0;
	}
	.consume_query.h5{
		top: 88upx;
	}
	.consume_query .query_main{
		position: relative;
		line-height: 40upx;
		padding-left: 40upx;
		color: #90A2B0;
	}
	.query_icon{
		width: 30upx;
		height: 30upx;
		position: absolute;
		left: 0;
		top: 3px;
	}
	.down_arrow{
		position: absolute;
		width: 30upx;
		height: 30upx;
		top: 3upx;
		right: 0;
	}
	.query_content{
		width: 100%;
		height: 100%;
		background: #f9f9f9;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 99;
		padding-top: 80upx;
	}
	.query_content.h5{
		padding-top: 168upx;
	}
	.query_content .query_list{
		width: 100%;
		padding: 40upx 0 0 0;
		background: #fff;
		border-top: 1px solid #f9f9f9;
	}
	.query_content .query_list .title{
		font-size: 32upx;
		color: #333;
		font-weight: bold;
		margin-bottom: 20upx;
		display: flex;
		padding-left: 40upx;
	}
	.query_content .query_list .query_list_main{
		display: flex;
		padding: 0 40upx;
	}
	.query_content .query_list .query_list_label{
		width: 30%;
		background: #f7f7fa;
		color: #62759a;
		line-height: 60upx;
		height: 60upx;
		margin-right: 20upx;
		text-align: center;
		border-radius: 10upx;
		font-size: 28upx
	}
	.query_content .query_list .query_list_label.on{
		background: #007AFF;
		color: #fff;
	}
	.query_content .bottom_btn{
		border-top: 1px solid rgba(255,255,255,.1);
		display: flex;
		margin-top: 40upx;
	}
	.query_content .btn_items{
		text-align: center;
		width: 50%;
		line-height: 100upx;
		color: #333;
	}
	.query_content .btn_items:last-child{
		background: #007AFF;
		color: #fff;
	}
	.bill_class{
		height: 100%;
		padding-top: 100upx;
		box-sizing: border-box;
		overflow: auto;
	}
	.bill_class .bill_main{
		/* background: #fff; */
		background: #fff;
		height: 100%;
	}
	.bill_class .bill_label{
		padding: 20upx;
		border-bottom: 1px solid #f9f9f9;
		display: flex;
		flex-wrap: wrap;
		background: #fff;
	}
	.bill_class .bill_label .labels{
		width: 50%;
		line-height: 60upx;
	}
	.bill_class .bill_label .labels.right{
		text-align: right
	}
	.bill_class .bill_label .labels.currency{
		font-size: 30upx;
		color: #333;
	}
	.bill_class .bill_label .labels.profit{
		font-size: 30upx;
		font-weight: bold;
	}
	.bill_class .bill_label .labels.type,
	.bill_class .bill_label .labels.date{
		font-size: 24upx;
		color: #8d9dbc;
	}
	.scroll{
		height: 100%;
	}
	.loading_more{
		background: #f9f9f9;
		color: #333;
	}
</style>
