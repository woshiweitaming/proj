<template>
	<view class="product">
		<view class="titlebar"><view class="title">{{getLang('find_p7')}}<text class="sub">{{getLang('find_p8')}} | {{getLang('find_p9')}}</text></view></view>
		<view class="product_label" @click="toPage()" v-for="(curItem, index) in productList" :key="index">
			<view class="name">
			   {{curItem.name}} <text class="sub">| {{curItem.sub}}</text>
			   <view class="tag">
				   <u-tag :text="el" v-for="(el, idx) in curItem.tag.split(',')" size="mini" type="primary" :key="idx" />
			   </view>
			</view>
			<view class="info">
				<view class="labels">
					<view class="ratio">{{curItem.ratio}}%</view>
					<view class="txt">{{getLang('find_p10')}}</view>
				</view>
				<view class="labels">
					<view class="days">{{curItem.days}}{{getLang('find_p14')}}{{getLang('find_p15')}}</view>
					<view class="txt">{{curItem.min}}{{getLang('find_p11')}}</view>
				</view>
				<view class="labels">
					<view class="btns">{{getLang('find_p12')}}</view>
				</view>
			</view>
			<view class="progress">
				<view class="bar">
					<u-line-progress :show-percent="false" active-color="#2979ff" :percent="curItem.rate"></u-line-progress>
				</view>
				<view class="value">{{curItem.rate}}%</view>
			</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Product',
		mixins: [langMixins],
		data(){
			return {
				productList: [
					{
						name: '基金',
						sub: '科创板IPO:中望软件688088',
						tag: '本金保障, 常',
						ratio: 5.74,
						days: 60,
						rate: 62.6,
						min: 2000
					},
				]
			}
		},
		methods: {
			toPage(){
				uni.navigateTo({
					url: '/pages/product/index'
				})
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
		padding-right: 200upx;
		position: relative
	}
	.product .tag{
		position: absolute;
		right: 0;
		top: 0;
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
		right: 20upx;
		background: #007AFF;
		color: #fff;
		line-height: 60upx;
		width: 140upx;
		border-radius: 40upx;
		text-align: center;
		top: 30upx;
		font-size: 26upx;
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
</style>