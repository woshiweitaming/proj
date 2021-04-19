<template>
	<view class="mask" v-show="showStatus">
		<view class="dialog">
			<view class="dialog_wrap">
				<view class="title">{{getLang('home_p31')}}</view>
				<image class="img" src="/static/images/home/sign.png" mode="widthFix"></image>
				<view class="name">{{getLang('home_p32')}}</view>
				<view class="label"><text class="money">{{bounds}}</text><text class="sub">{{getLang('home_p33')}}</text></view>
				<view class="tips">{{getLang('home_p34')}}</view>
				<view class="btns" @click="close">{{getLang('home_p35')}}</view>
				<image class="close" src="/static/images/home/close.png" mode="widthFix" @click="close"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import { signin } from '@/apis/users.js'
	export default {
		name: 'Dialog',
		mixins: [langMixins],
		props: ['showStatus', 'bounds'],
		methods: {
			close(){
				this.$emit('closeCallback', false)
			}
		},
	}
</script>

<style scoped>
	.mask{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10000;
		background: rgba(0,0,0,.8);
	}
	.dialog{
		width: 500upx;
		height: 650upx;
		position: fixed;
		top: 50%;
		left: 50%;
		z-index: 10001;
		margin-left: -250upx;
		margin-top: -400upx;
		background: #fff;
		border-radius: 40upx;
		padding: 0 40upx;
	}
	.dialog_wrap{
		height: 100%;
		position: relative;
	}
	.img{
		width: 60%;
		margin: auto;
		display: block;
	}
	.title{
		line-height: 120upx;
		text-align: center;
		font-weight: bold;
		font-size: 32upx
	}
	.name{
		text-align: center;
		font-size: 30upx;
		font-weight: bold;
	}
	.label{
		text-align: center;
	}
	.money{
		font-size: 80upx;
		color: #BD2C00;
		font-weight: bold;
	}
	.sub{
		color: #BD2C00;
		font-weight: bold;
		font-size: 40upx
	}
	.tips{
		text-align: center;
		line-height: 60upx;
		color: #aaa;
	}
	.btns{
		width: 50%;
		text-align: center;
		background: #007AFF;
		color: #fff;
		border-radius: 60upx;
		line-height: 60upx;
		margin: 30upx auto;
	}
	.close{
		width: 60upx;
		position: absolute;
		top: -100upx;
		right: -40upx;
	}
</style>
