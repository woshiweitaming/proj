<template>
	<view class="page bottom_page">
		<view class="inner">
			<Nodata :text="desc" />
		</view>
		<view class="bottom_btn_bar">
			<view class="buttons" @click="show = true">添加收款地址</view>
		</view>
		<u-action-sheet @click="clickHandler" :list="list" v-model="show"></u-action-sheet>
	</view>
</template>

<script>
	import Nodata from '@/components/no_data/index.vue'
	export default {
		name: 'AccountNumber',
		components: {
			Nodata
		},
		data(){
			return {
				show: false,
				list: [{
					text: '银行卡',
					path: '/pages/bankcard/index'
				},
				{
					text: '支付宝',
					path: '/pages/alipay/index'
				},
				{
					text: '微信',
					path: '/pages/wechat/index'
				},
				{
					text: 'PayPal',
					path: '/pages/paypal/index'
				}],
				desc: '您还没有添加收款地址，快去添加吧'
			}
		},
		methods: {
			clickHandler(index){
				const path = this.list[index].path
				uni.navigateTo({
					url: path
				})
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: '收款账号'
			})
		}
	}
</script>

<style scoped>
	.page{
		background: #fff;
	}
	.inner{
		padding-bottom: 0;
	}
	.no_data{
		text-align: center;
		color: #2C405A;
		font-size: 24upx;
		margin-top: 40upx;
	}
	.no_data .icon{
		width: 20%;
	}
</style>
