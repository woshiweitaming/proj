<template>
	<view class="list">
		<view class="wrap">
			<view class="title">{{data.name}} <text class="sub"></text></view>
			<view class="list_main">
				<view class="labels">
					<view class="n1">申购时间</view>
					<view class="n2">{{toDate(data.ctime)}}</view>
				</view>
				<view class="labels">
					<view class="n1">配置时间</view>
					<view class="n2">{{toDate(data.rtime)}} 后</view>
				</view>
				<view class="labels">
					<view class="n1">认购时间</view>
					<view class="n2">{{toDate(data.etime)}}</view>
				</view>
				<view class="labels">
					<view class="n1">上市时间</view>
					<view class="n2">{{toDate(data.stime)}}</view>
				</view>
				<view class="labels">
					<view class="n1">发行价(USDT)</view>
					<view class="n2">{{data.price}}</view>
				</view>
				<view class="labels">
					<view class="n1">发行数量</view>
					<view class="n2">{{data.num}}</view>
				</view>
			</view>
			<view class="introduce">
				<view class="title">币种简介</view>
				<view class="list_main">
					<rich-text :nodes="data.synopsis"></rich-text>
				</view>
			</view>
			<view class="bottom">
				<view class="cells">
					<view class="buttons" @click="applyForPurchaseHandler(0)">申购</view>
				</view>
				<view class="cells">
					<view class="buttons" @click="applyForPurchaseHandler(1)">认购</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { applyForPurchase } from '@/api/user.js'
	import validate from '@/utils/validate.js'
	import commonMixins from '@/mixins/common_mixins.js'
	import tips from '@/utils/tips.js'
	export default {
		name: 'Subsribe',
		mixins: [commonMixins],
		data(){
			return {
				data: {}
			}
		},
		methods: {
			toDate(ts){
				  var date = new Date(parseFloat(ts) * 1000);
				  var YY = date.getFullYear() + '-';
				  var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
				  var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
				  var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
				  var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
				  var ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
				  return YY + MM + DD +" "+hh + mm + ss; 
			},
			async applyForPurchaseHandler(type){
					const that = this
					uni.showModal({
						title: type == 0 ? '申购确认' : '认购确认',
						content: `您正在${type == 0 ? '申购' : '认购'}新币${that.data.name}，获得配售额度后方可${type == 0 ? '申购' : '认购'}，确认继续？`, 
						success: async (btn) => {
							if(btn.confirm){
								const params = {
									type: type,
									id: that.data.id
								}
								const res = await applyForPurchase(params)
								if(validate.checkCode(res)){
									tips.showToast('成功')
								}else{
									this.backTips(res)
								}
							}
						}
					})
			}
		},
		onLoad(opt) {
			this.data = opt
		}
	}
</script>

<style scoped>
	.list{
		height: 100%;
		padding-bottom: 100upx;
		background: #fff;
		box-sizing: border-box;
	}
	.wrap{
		height: 100%;
		padding: 20upx;
	}
	.sub{
		color: #999;
		font-size: 26upx;
		padding-left: 60upx;
	}
	.title{
		background: #fff;
		padding: 10upx 10upx 10upx 40upx;
		border-left: 3px solid #007AFF;
		border-bottom: 1px solid #eee;
		margin-bottom: 40upx;
		font-size: 32upx;
		font-weight: bold
	}
	.cell{
		padding: 20upx;
	}
	.cell .date{
		font-size: 32upx;
		font-weight: bold;
		padding-bottom: 10upx;
		border-bottom: 1px solid #eee;
	}
	.labels{
		display: flex;
	}
	.n1{
		width: 50%;
		font-size: 28upx;
		line-height: 60upx;
		color: #999;
	}
	.n2{
		width: 50%;
		font-size: 28upx;
		color: #000;
		line-height: 60upx;
		text-align: left;
	}
	.items:nth-child(3){
		text-align: right
	}
	.bottom{
		position: fixed;
		bottom: 0;
		height: 100upx;
		display: flex;
		width: 100%;
		left: 0;
		z-index: 1;
	}
	.bottom .cells{
		width: 50%;
		text-align: center;
		font-size: 32upx;
		padding: 10upx;
	}
	.buttons{
		background: #007AFF;
		color: #fff;
		line-height: 80upx;
		border-radius: 20upx;
	}
	.introduce{
		margin-top: 40upx;
	}
</style>
