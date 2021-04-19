<template>
	<view class="product">
		<view class="titlebar"><view class="title">{{getLang('find_p4')}}<text class="sub">{{getLang('find_p5')}} | {{getLang('find_p6')}}</text></view></view>
		<view class="product_label" @click="toPage()" v-for="(curItem, index) in productList" :key="index">
			<view class="name">
			   <view class="pro_name">{{curItem.pro_name}}</view>
			   <view class="tag">
				   <u-tag :text="el" v-for="(el, idx) in curItem.label" size="mini" :type="getTagType(el)" :key="idx" />
			   </view>
			</view>
			<view class="status">
				<view :class="['statubar', getStatus(curItem.status)]">{{getStatusText(curItem.status)}}</view>
				<view class="btns">{{getLang('find_p12')}}</view>
			</view>
			<view class="info">
				<view class="labels">
					<view class="money">{{curItem.min_amount}}</view>
					<view class="txt">{{getLang('find_p26')}}</view>
				</view>
				<view class="labels">
					<view class="days">{{curItem.period}}{{getLang('find_p14')}}</view>
					<view class="txt">{{getLang('find_p27')}}</view>
				</view>
				<view class="labels">
					<view class="ratio">{{curItem.expire_rate}}%</view>
					<view class="txt">{{getLang('find_p28')}}</view>
				</view>
			</view>
			<view class="progress">
				<view class="bar">
					<u-line-progress :height="15" :show-percent="false" active-color="#2979ff" :percent="Number(curItem.progress)"></u-line-progress>
				</view>
				<view class="value">{{curItem.progress}}%</view>
			</view>
			<view class="detail">
				<text class="value">{{curItem.total_amount}}</text>{{getLang('find_p25')}}
			</view>
			<image src="/static/images/find/full.png" mode="widthFix" class="icon"></image>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Recommend',
		mixins: [langMixins],
		data(){
			return {
				productList: [
					        {
					            "period": 15,
					            "expire_rate": 22.00,
					            "agency": "腾讯",
					            "is_repeat": 1,
					            "min_amount": "2000",
					            "describe_text": "",
					            "label": [
					                "回报高",
					                "波动低",
					                "低"
					            ],
					            "total_amount": "66666",
					            "progress": "35",
					            "logo": "https://sdfas.sdkf/upload/adminUpload/projectImg1616744656623.png",
					            "deal_rate": 1.50,
					            "user_level_id": 1,
					            "pro_name": "测试",
					            "status": 0
					        }
				]
			}
		},
		methods: {
			toPage(){
				uni.navigateTo({
					url: '/pages/product/index'
				})
			}
		},
		computed: {
			getTagType(){
				return (string) => {
					return string.length == 1 ? 'warning' : 'primary'
				}
			},
			getStatus(){
				return (status) => {
					return status == 0 ? 'green' : 'red'
				}
			},
			getStatusText(){
				return (status) => {
					return status == 0 ? this.getLang('find_p29') : this.getLang('find_p23')
				}
			}
		}
	}
</script>

<style scoped>
	.titlebar{
		line-height: 80upx;
	}
	.titlebar .title{
		font-size: 32upx;
		font-weight: bold;
	}
	.titlebar .sub{
		font-size: 26upx;
		color: #666;
		font-weight: normal;
		padding-left: 20upx;
	}
	.product .name{
		width: 100%;
		position: relative;
		font-weight: bold;
		display: flex;
	}
	.product .pro_name{
		width: 50%;
	}
	.product .tag{
		width: 50%;
		margin-left: 20upx;
	}
	.product .info{
		display: flex;
		padding-top: 20upx;
	}
	.product .info .labels{
		width: 40%;
		height: 120upx;
		position: relative;
		vertical-align: top;
	}
	.product .info .labels:last-child{
		width: 20%;
	}
	.product .info .labels .txt{
		font-size: 24upx;
		color: #aaa;
		line-height: 50upx;
	}
	.product .info .labels .ratio{
		font-size: 40upx;
		color: #DD4A68;
		font-weight: bold;
	}
	.product .info .labels .days{
		line-height: 60upx;
	}
	.btns{
		position: absolute;
		right: 0;
		background: #007AFF;
		color: #fff;
		line-height: 60upx;
		width: 140upx;
		border-radius: 40upx;
		text-align: center;
		top: 0;
		font-size: 26upx;
	}
	.btns.un{
		background: #ccc;
		color: #fff;
	}
	.progress{
		display: flex;
	}
	.progress .bar{
		width: 80%;
	}
	.progress .value{
		width: 20%;
		text-align: right;
		font-size: 24upx;
		vertical-align: top;
	}
	.status{
		margin-top: 20upx;
		position: relative;
		border-bottom: 1px solid #eee;
		padding-bottom: 20upx;
	}
	.statubar{
		font-size: 24upx;
		padding: 8upx 0;
		width: 100upx;
		text-align: center;
		border-radius: 10upx;
	}
	.statubar.red{
		background: #f3dbd9;
		color: #be3d51;
	}
	.statubar.green{
		background: #d0f8e0;
		color: #43ac69
	}
	.detail{
		border-radius: 20upx;
		background: #f0f5fb;
		margin-top: 20upx;
		padding: 0 20upx;
		font-size: 24upx;
		line-height: 60upx;
		color: #4866af;
	}
	.detail .value{
		font-weight: bold;
	}
	.money{
		color: #34ab6b;
		font-size: 50upx;
		line-height: 60upx;
	}
	.days{
		color: #497bc2;
		font-size: 50upx;
		line-height: 60upx;
	}
	.icon{
		width: 120upx;
		position: absolute;
		top: 10upx;
		left: 160upx;
	}
</style>
