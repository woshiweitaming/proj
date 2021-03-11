<template>
	<view class="mofen_balance">
		<view class="exchange_reocrd" @click="toPage">{{getLang('mofen_p2')}}</view>
		<view class="balance">
			<image src="/static/images/member/mofen3.png" class="icon" mode="widthFix"></image>
			<view class="money">0</view>
		</view>
		<view class="fee">{{getLang('mofen_p3')}}0.00{{getLang('mofen_p4')}}</view>
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
					url: '/pages/exchange_record/index'
				})
			}
		}
	}
</script>

<style scoped>
	.mofen_balance{
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
