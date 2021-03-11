<template>
	<view class="mofangbao">
		<view class="main">
			<view class="box">
				<Profit />
				<Chart />
			</view>
			<view class="box border_top">
				<Introduce />
			</view>
			<view class="box border_top">
				<TradeRecord />
			</view>
		</view>
		<BottomBar />
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import Profit from '@/layouts/mofangbao/profit.vue'
	import Chart from '@/layouts/mofangbao/chart.vue'
	import Introduce from '@/layouts/mofangbao/introduce.vue'
	import TradeRecord from '@/layouts/mofangbao/trade_record.vue'
	import BottomBar from '@/layouts/mofangbao/bottom_bar.vue'
	export default {
		name: 'Find',
		mixins: [langMixins],
		components: {
			Profit,
			Chart,
			Introduce,
			TradeRecord,
			BottomBar
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('mofangbao_p1')
			})
		}
	}
</script>

<style scoped>
	page,
	.mofangbao{
		height: 100%;
	}
	.mofangbao{
		padding-bottom: 100upx;
	}
	.box{
		background: #fff;
		border-bottom: 1px solid #eee;
		margin-bottom: 20upx;
	}
	.border_top{
		border-top: 1px solid #eee;
	}
</style>
