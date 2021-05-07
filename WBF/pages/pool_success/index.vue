<template>
	<view class="success">
		<image class="success_icon" src="../../static/images/success_img.png"></image>
		<view class="success_tips" v-if="type == 0">{{getLangs('successfulRedemption')}}</view>
		<view class="success_tips" v-if="type == 1">{{getLangs('poolp34')}}</view>
		<view class="btns" @tap="toPage">{{getLangs('backBtn')}}</view>
	</view>
</template>

<script>
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'PoolSuccess',
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				type: 0
			}
		},
		methods: {
			toPage(){
				// const pages = getCurrentPages()
				// const page = pages.findIndex(res => res.route == 'pages/pool/index')
				// const delta = pages.length - 1 - page
				// uni.navigateBack({
				// 	delta: delta
				// })
				this.switchTab('/pages/pool/index')
			}
		},
		onLoad(opt) {
			this.type = opt.type
		},
		onShow() {
			if(this.type == 0){
				this.setTitle(this.getLangs('successfulRedemption'))
			}else{
				this.setTitle(this.getLangs('poolp34'))
			}
		},
	}
</script>

<style scoped>
	page{
		background: #f9f9f9;
	}
	.success{
		background: #fff;
		height: 100%;
		padding-top: 40upx;
	}
	.success_icon{
		width: 390upx;
		height: 240upx;
		display: block;
		margin: auto;
	}
	.success_tips{
		text-align: center;
		line-height: 100upx;
		font-size: 32upx
	}
	.btns{
		background: #007AFF;
		line-height: 70upx;
		width: 200upx;
		text-align: center;
		color: #fff;
		margin: 40upx auto;
		border-radius: 20upx;
	}
</style>
