<template>
	<view class="page inner">
		<Nodata />
	</view>
</template>

<script>
	import Nodata from '@/components/no_data/index.vue'
	export default {
		name: 'RechargeOrder',
		components: {
			Nodata
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: '提现记录'
			})
		}
	}
</script>

<style scoped>
	.page{
		background: #fff;
	}
</style>
