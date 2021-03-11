<template>
	<view class="page">
		<view class="success_tips">
			<image class="icon" src="../../static/images/success_img.png"></image>
			<view class="name">
				<text>{{getLangs('gtip1')}}</text>
			</view>
			<view class="desc">
				<text v-if="name === 'recharge'">{{getLangs('gtip2')}}</text>
				<!-- <text v-if="name === 'withdraw'">{{getLangs('gtip4')}}</text> -->
			</view>
			<view class="btn">
				<view @tap="toPage('/pages/order_list/index?type=0')" v-if="name === 'recharge'" class="btns">{{getLangs('gtip3')}}</view>
				<view @tap="toPage('/pages/order_list/index?type=1')"v-if="name === 'withdraw'" class="btns">{{getLangs('gtip5')}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import langsMixins from '@/mixins/lang_mixins.js'
	import commonMixins from '@/mixins/common_mixins.js'
	export default {
		name: 'SuccessTips',
		mixins: [langsMixins, commonMixins],
		data(){
			return {
				name: ''
			}
		},
		methods: {
			toPage(path){
				this.redirectTo(path)
			}
		},
		onLoad(opt) {
			this.name = opt.name
			if(this.name === 'recharge'){
				this.setTitle(this.getLangs('recharging'))
			}
		}
	}
</script>

<style scoped>
	page{
		background: #f9f9f9;
	}
	.page{
		background: #ffff;
		height: 100%;
	}
	.icon{
		width: 390upx;
		height: 240upx;
		display: block;
		padding: 40upx auto;
		margin: auto;
	}
	.name{
		text-align: center;
		line-height: 80upx;
		font-size: 32upx;
		font-weight: bold;
	}
	.desc{
		text-align: center;
		line-height: 80upx;
		font-size: 26upx;
		color: #999;
	}
	.btn{
		text-align: center;
	}
	.btn .btns{
		max-width: 300upx;
		height: 80upx;
		background: #007AFF;
		text-align: center;
		line-height: 80upx;
		color: #fff;
		border-radius: 20upx;
		margin: 40upx auto;
	}
</style>
