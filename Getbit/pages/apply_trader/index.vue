<template>
	<view class="page custom">
		<Titlebar />
		<view class="content">
			<text class="p">
				申请成为交易员满足以下条件:
			</text>
			<text class="p">
				实名认证
			</text>
			<text class="p">
				近三周交易总额大于10万USDT;
			</text>
			<text class="p">
				近三周交易笔数大于15笔;
			</text>
			<text class="p">
				近三周胜率必须大于55%;
			</text>
			<text class="p">
				近三周账户收益率大于30%;
				账户历史入金大于1000USDT;
			</text>
			<view class="buttons">确认申请即同意协定</view>
		</view>
	</view>
</template>

<script>
	import Titlebar from '@/layouts/apply_trader/titlebar.vue'
	export default {
		name: 'ApplyTrader',
		components: {
			Titlebar
		}
	}
</script>

<style scoped>
	.content{
		padding: 40upx 20upx 20upx 20upx;
	}
	.p{
		display: block;
		margin-bottom: 20upx;
	}
	.buttons{
		margin-top: 80upx;
	}
</style>
