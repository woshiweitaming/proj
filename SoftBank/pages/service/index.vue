<template>
	<view class="service">
		<view class="center">
			<text class="slogan">全球视野，聚焦软银</text>
			<image class="img" src="../../static/images/customer_service.png" mode="aspectFit"></image>
			<view class="form_class">
				<view class="button" @click="toKefu">{{getLangs('onlineService')}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import langsMixins from '@/mixins/lang_mixins.js'
	import commonMixins from '@/mixins/common_mixins.js'
	export default {
		name: 'CustomerService',
		mixins: [langsMixins, commonMixins],
		methods: {
			toKefu(){
				this.navigateTo('/pages/kefu/index')
			}
		}
	}
</script>

<style>
	page{
		background: #fff;
	}
</style>
<style scoped>
	.service{
		text-align: center;
		display: flex;
		align-items:center;
	    flex-direction: row;
		height: 100%;
	}
	.form_class{
		width: 60%;
		margin: 0 auto;
	}
	.center{
		text-align: center;
		width: 100%;
		position: relative;
		top: -100upx;
	}
	.slogan{
		margin-bottom: 40upx;
		display: block;
		font-size: 40upx
	}
</style>
