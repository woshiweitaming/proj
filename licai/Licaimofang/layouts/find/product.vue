<template>
	<view class="product">
		<view class="titlebar"><view class="title">{{column.column_name || getLang('find_p22')}}<text class="sub">{{column.describe_text}}</text></view></view>
		<view class="product_label" v-for="(curItem, index) in productList" :key="index">
			<view class="name">
			   <view class="pro_name">{{curItem.pro_name}}</view>
			   <view class="tag">
				   <u-tag :text="el" v-for="(el, idx) in curItem.label" :type="getTagType(el)" :key="idx" />
			   </view>
			</view>
			<view class="status">
				<view :class="['statubar', getStatus(curItem.status)]">{{getStatusText(curItem.status)}}</view>
				<view class="btns" @click="toPage(curItem)" v-if="curItem.status == 0">{{getLang('find_p12')}}</view>
				<view class="btns un" v-else>{{getLang('find_p12')}}</view>
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
			<image v-if="curItem.status == 1" src="/static/images/find/full.png" mode="widthFix" class="icon"></image>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import tips from '@/utils/tips.js'
	export default {
		name: 'Recommend',
		mixins: [langMixins],
		props: ['column', 'productList'],
		methods: {
			toPage(json){
				const urlParams = this.convertObj(json)
				uni.navigateTo({
					url: '/pages/product/index?'+urlParams
				})
			},
			convertObj(data) {
			    let _result = [];
			    for (let key in data) {
			      let value = data[key];
			      if (value.constructor == Array) {
			        value.forEach((_value) => {
			          _result.push(key + "=" + _value);
			        });
			      } else {
			        _result.push(key + '=' + value);
			      }
			    }
			    return _result.join('&');
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
		},
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
		display: flex;
	}
	.product .pro_name{
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		width: 50%;
		font-weight: bold;
	}
	.product .tag{
		width: 50%;
	}
	.product .info{
		display: flex;
		padding-top: 20upx;
	}
	.product .info .labels{
		width: 40%;
		height:80upx;
		position: relative;
		vertical-align: top;
	}
	.product .info .labels:last-child{
		width: 20%;
	}
	.product .info .labels .txt{
		font-size: 24upx;
		color: #aaa;
		line-height: 40upx;
	}
	.product .info .labels .ratio{
		font-size: 40upx;
		color: #DD4A68;
		font-weight: bold;
		line-height: 40upx;
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
		top: -8upx;
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
		width: 86%;
	}
	.progress .value{
		width: 15%;
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
		padding-bottom: 8upx;
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
		margin-top: 10upx;
		padding: 0 20upx;
		font-size: 24upx;
		line-height: 40upx;
		color: #4866af;
	}
	.detail .value{
		font-weight: bold;
	}
	.money{
		color: #34ab6b;
		font-size: 42upx;
		line-height: 40upx;
	}
	.days{
		color: #497bc2;
		font-size: 42upx;
		line-height: 40upx;
	}
	.icon{
		width: 120upx;
		position: absolute;
		top: 10upx;
		left: 160upx;
	}
	.u-tag{
		margin-bottom: 10upx;
	}
</style>
