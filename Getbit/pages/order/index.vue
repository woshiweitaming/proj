<template>
	<view class="page">
		<Tab />
		<view class="record">
			<Record />
		</view>
	</view>
</template>

<script>
	import Tab from '@/layouts/order/tab.vue'
	import Record from '@/layouts/order/record.vue'
	export default {
		name: 'Order',
		components: {
			Tab,
			Record
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: '订单记录'
			})
		}
	}
</script>

<style scoped>
	.record{
		height: calc(100% - 82upx);
	}
</style>
