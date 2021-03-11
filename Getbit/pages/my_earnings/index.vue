<template>
	<view class="page">
		<Titlebar />
		<Commissions />
		<Record />
	</view>
</template>

<script>
	import Titlebar from '@/layouts/my_earnings/titlebar.vue'
	import Commissions from '@/layouts/my_earnings/commissions.vue'
	import Record from '@/layouts/my_earnings/record.vue'
	export default {
		name: 'MyEarnings',
		components: {
			Titlebar,
			Commissions,
			Record
		},
		methods: {
			
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: '我的收益'
			})
		}
	}
</script>

<style scoped>
	.page{
		background: #fff;
		padding-top: 40upx;
	}
</style>
