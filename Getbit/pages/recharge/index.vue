<template>
	<view class="page">
		<view class="select_currency" @click="show = true">
			<view class="name">{{form.getCurrency}}</view>
			<view class="sub">选择币种</view>
			<image src="../../static/images/icons/right_arrow.png" class="right_arrow"></image>
		</view>
		<view class="qrcode_bar">
			<view class="qrcode_main">
				<view class="l1">
					<image class="img" src="../../static/images/icons/scan/1.png"></image>
				</view>
				<view class="l2">
					<image class="img" src="../../static/images/icons/scan/2.png"></image>
				</view>
				<view class="l3">
					<image class="img" src="../../static/images/icons/scan/3.png"></image>
				</view>
				<view class="l4">
					<image class="img" src="../../static/images/icons/scan/4.png"></image>
				</view>
				<view class="qrcode_img">
					<image src="../../static/images/icons/qrcode.png" mode="widthFix" class="qrcode_image"></image>
				</view>
			</view>
		</view>
		<view class="names">地址</view>
		<view class="select_currency address">
		   {{form.address}}
		   <image src="../../static/images/icons/copy.png" class="copy"></image>
		</view>
		<view class="btn_bar">
			<view class="buttons">保存截图</view>
			<text class="txt">请勿向上述充值任何非--资产，否则资产将不可找回</text>
		</view>
		<u-action-sheet @click="clickHandler" :list="list" v-model="show"></u-action-sheet>
	</view>
</template>

<script>
	export default {
		name: 'Recharge',
		data(){
			return {
				form: {
					getCurrency: 'LTC',
					address: '',
					pic: ''
				},
				show: false,
				list: [{
					text: 'LTC',
				},
				{
					text: 'BTC',
				}],
			}
		},
		methods: {
			clickHandler(index){
				this.form.getCurrency = this.list[index].text
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: '充值'
			})
			this.show = true
		},
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url: '/pages/recharge_order/index'
			})
		}
	}
</script>

<style scoped>
	.page{
		padding: 20upx;
	}
	.select_currency{
		padding: 20upx;
		background: #e4e8ee;
		border-radius: 20upx;
		position: relative;
	}
	.right_arrow{
		width: 30upx;
		height: 30upx;
		position: absolute;
		right: 20upx;
		top: 25upx;
	}
	.select_currency .sub{
		position: absolute;
		right: 60upx;
		top: 20upx;
		font-size: 26upx;
		color: #666;
	}
	.address{
		height: 80upx;
		line-height: 80upx;
		position: relative;
	}
	.names{
		margin-top: 40upx;
		line-height: 60upx;
		text-align: center;
	}
	.btn_bar{
		margin-top:80upx;
	}
	.copy{
		width: 40upx;
		height: 40upx;
		position: absolute;
		right: 20upx;
	}
	.qrcode_bar{
		margin-top: 40upx;
		height: 600upx;
		box-sizing: border-box;
		padding: 40upx 80upx;
		position: relative;
	}
	.qrcode_bar .qrcode_main{
		height: 100%;
		position: relative;
	}
	.img{
		width: 40upx;
		height: 40upx;
	}
	.qrcode_bar .l1{
		position: absolute;
		left: 0;
		top: 0;
	}
	.qrcode_bar .l2{
		position: absolute;
		right: 0;
		top: 0;
	}
	.qrcode_bar .l3{
		position: absolute;
		left: 0;
		bottom: 0;
	}
	.qrcode_bar .l4{
		position: absolute;
		right: 0;
		bottom: 0;
	}
	.txt{
		text-align: center;
		font-size: 24upx;
		display: block;
		line-height: 60upx;
	}
	.qrcode_img{
		text-align: center;
		padding-top: 50upx;
	}
	.qrcode_image{
		width: 400upx;
		height: 400upx;
	}
</style>
