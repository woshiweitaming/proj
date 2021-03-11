<template>
	<view class="slogan">
		<view class="title">{{appName}} 红包</view>
		<view class="sub">英雄助力  瓜分福利</view>
		<view class="invite_main">
			<view class="layer3">
				<image class="img" mode="widthFix" src="../../static/images/icons/pop/l3.png"></image>
			</view>
			<view class="layer2">
				<image class="img" mode="widthFix" src="../../static/images/icons/pop/l2.png"></image>
			</view>
			<view class="layer1">
				<view class="text">
					<view class="box">我的邀请码</view>
					<view class="box">fjsoioweriwrwr</view>
				</view>
				<image class="img" mode="widthFix" src="../../static/images/icons/pop/l1.png"></image>
			</view>
			<view class="invite_code">
				<view class="copy">
					<view class="copy_text">复制邀请码</view>
				</view>
				<image class="img" mode="widthFix" src="../../static/images/icons/pop/invite_code.png" ></image>
			</view>
		</view>
		<view class="qrcode_main">
			<view class="card">
				<view class="qrcode_img">
					<image class="img" mode="widthFix" src="../../static/images/icons/qrcode.png"></image>
				</view>
				<view class="sm">扫码注册</view>
				<view class="btns">
					<view class="copy_link">
						<view class="b1">复制邀请链接</view>
					</view>
					<view class="check_team">
						<view class="b2" @click="toPage('/pages/my_earnings/index')">查看团队</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import appConfig from '@/config/appConfig.js'
	export default {
		name: 'PopMain',
		data(){
			return {
				appName: appConfig.appName
			}
		},
		methods: {
			toPage(path){
				uni.navigateTo({
					url: path
				})
			}
		}
	}
</script>

<style scoped>
	.title{
		text-align: center;
		line-height: 80upx;
		font-weight: bold;
		font-size: 50upx;
		color: #fff;
	}
	.sub{
		text-align: center;
		line-height: 80upx;
		color: #fff;
		font-size: 40upx
	}
	.invite_main{
		position: relative;
		padding-top: 200upx;
	}
	.layer3{
		width: 70%;
		height: 140upx;
		position: absolute;
		left: 50%;
		margin-left: -35%;
		z-index: 1;
		top: 20upx;
	}
	.layer3 .img{
		width: 100%;
	}
	.layer2{
		width: 80%;
		position: absolute;
		left: 50%;
		margin-left: -40%;
		z-index: 2;
		top: 40upx;
		height: 140upx;
	}
	.layer2 .img{
		width: 100%;
	}
	.layer1{
		width: 90%;
		position: absolute;
		left: 50%;
		margin-left: -45%;
		z-index: 3;
		top: 60upx;
		height: 140upx;
	}
	.layer1 .img{
		width: 100%;
	}
	.invite_code{
		width: 90%;
		margin: auto;
		position: relative;
	}
	.invite_code .img{
		width: 100%;
	}
	.text{
		position: absolute;
		bottom: 50upx;
		display: flex;
		z-index: 4;
		padding: 0 20upx;
		color: #fff;
		font-size: 32upx;
		width: 100%;
	}
	.text .box{
		width: 50%;
	}
	.text .box:last-child{
		text-align: right;
	}
	.copy{
		width: 80%;
		position: absolute;
		z-index: 4;
		height: 128upx;
		background: url(../../static/images/icons/pop/copy.png);
		background-size: cover;
		margin-left: -40%;
		left: 50%;
		top: 50%;
		margin-top: -64upx;
		text-align: center;
		color: #fff;
		font-size: 34upx;
		line-height: 128upx;
	}
	.card{
		flex-direction: column;
	}
	.qrcode_main{
		padding: 40upx;
		width: 100%;
	}
	.qrcode_img{
		width: 300upx;
		height: 300upx;
		padding: 20upx;
		background: #ff7e11;
		border-radius: 10upx;
		margin: auto;
	}
	.qrcode_img .img{
		width: 100%;
	}
	.sm{
		text-align: center;
		color: #aaa;
		line-height: 80upx;
	}
	.btns{
		display: flex;
		width: 100%;
	}
	.btns .copy_link,
	.btns .check_team{
		width: 50%;
		padding: 10upx;
	}
	.btns .b1{
		height: 80upx;
		background: url(../../static/images/icons/pop/b1.png);
		border-radius: 10upx;
		text-align: center;
		color: #fff;
		line-height: 80upx;
	}
	.btns .b2{
		height: 80upx;
		background: url(../../static/images/icons/pop/b2.png);
		border-radius: 10upx;
		text-align: center;
		color: #fff;
		line-height: 80upx;
	}
</style>
