<template>
	<view class="inner bottom_page">
		<view class="bg"></view>
		<FundCard /> 
		<Record />
		<view class="bottom_btn_bar" @click="toPage">
			<image src="../../static/images/icons/c2c/7.png" class="icon"></image>
			<view class="name">划转</view>
		</view>
	</view>
</template>

<script>
	import FundCard from '@/layouts/c2c_detail/fund_card.vue'
	import Record from '@/layouts/c2c_detail/record.vue'
	export default {
		name: 'C2CDetail',
		components: {
			FundCard,
			Record
		},
		methods: {
			toPage(){
				uni.navigateTo({
					url: '/pages/transfer/index'
				})
			}
		}
	}
</script>

<style scoped>
	.inner{
		background: #fff;
	}
	.bg{
		width: 100%;
		height: 200upx;
		position: fixed;
		top: 0;
		left: 0;
		background: #291b1b;
	}
	.bottom_btn_bar{
		text-align: center;
	}
	.bottom_btn_bar .icon{
		width: 40upx;
		height: 40upx;
		display: inline-block;
	}
	.bottom_btn_bar .name{
		font-weight: bold;
		font-size: 28upx
	}
</style>
