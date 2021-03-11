<template>
	<view class="page inner">
		<Nodata />
	</view>
</template>

<script>
	import Nodata from '@/components/no_data/index.vue'
	export default {
		name: 'CommissionHistory',
		components: {
			Nodata
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: '历史委托'
			})
		}
	}
</script>

<style scoped>
	.page{
		background: #fff;
	}
</style>
