<template>
	<view class="redpack_balance">
		<view class="exchange_reocrd" @click="toPage">{{getLang('redpack_p2')}}</view>
		<view class="balance">
			<view class="money">¥0</view>
		</view>
	</view>
</template>
<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Balance',
		mixins: [langMixins],
		methods: {
			toPage(){
				uni.navigateTo({
					url: '/pages/withdraw_record/index'
				})
			}
		}
	}
</script>

<style scoped>
	.redpack_balance{
		height: 300upx;
		background: #007AFF;
		position: relative;
	}
	.exchange_reocrd{
		text-align: right;
		color: #fff;
		padding: 0 20upx;
	}
	.icon{
		width: 40upx;
	}
	.balance{
		text-align: center;
		margin-top: 40upx;
		display: flex;
		justify-content: center;
	}
	.balance .money{
		font-weight: bold;
		color: #fff;
		font-size: 50upx;
		line-height: 40upx;
		padding-left: 20upx;
	}
	.fee{
		text-align: center;
		color: rgba(255,255,255,.5);
		font-size: 24upx;
		margin-top: 40upx;
	}
</style>
