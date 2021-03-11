<template>
	<view class="rank">
		<view class="rank_bar">
			<view class="name">{{getLang('fund_p9')}}</view>
			<view class="sub">{{getLang('fund_p10')}}</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Rank',
		mixins: [langMixins]
	}
</script>

<style scoped>
	.rank{
		padding: 20upx;
		position: relative;
		height: 200upx;
	}
	.rank_bar{
		background: #fff;
		border-radius: 40upx;
		padding: 20upx;
		position: relative;
		top: -100upx;
		height: 200upx;
		box-sizing: border-box;
	}
	.rank_bar .name{
		text-align: center;
		font-size: 32upx;
		font-weight: bold;
		line-height: 100upx;
	}
	.rank_bar .sub{
		text-align: center;
		font-size: 24upx;
		color: #999;
		line-height: 30upx;
	}
</style>
