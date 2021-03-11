<template>
	<view class="fund_card">
		<view class="user_info">
			<view class="nickname"><!-- {{getUserInfoData.ncikname}} --> {{getLangs('fundp1')}} (USDT)</view>
			<view class="leftmoney">{{getLeftmoney}}</view>
			<view class="sub">≈ {{getCny}} {{getText}}</view>
		</view>
		<image class="fund_card_img" src="../../static/images/fund_card.png"></image>
	</view>
</template>

<script>
	/**
	 * 资产卡片
	 */
	import { mapMutations, mapGetters } from 'vuex'
	import { getWinConfig } from '@/api/user.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'FundCard',
		mixins: [langsMixins],
		computed: {
			...mapGetters({
				getUserInfoData: 'getUserInfoData',
				getLeftmoney: 'getLeftmoney',
				getCny: 'getCny'
			})
		},
	}
</script>

<style scoped>
	.fund_card{
		padding: 20upx 10upx;
		position: relative;
		z-index: 1;
		background-color: #fff;
	}
	.fund_card_img{
		width: 100%;
		height: 280upx;
	}
	.fund_card .user_info{
		width: 100%;
		position: absolute;
		top: 60upx;
		left: 80upx;
		z-index: 2;
	}
	.fund_card .user_info .nickname{
		color: #b0c9fe;
		font-size: 30upx;
		line-height: 60upx;
	}
	.fund_card .user_info .leftmoney{
		color: #fff;
		font-size: 60upx;
		line-height: 60upx;
		font-weight: bold;
	}
	.fund_card .sub{
		font-size: 24upx;
		line-height: 60upx;
		color: #fff;
	}
</style>
