<template>
	<view class="page custom">
		<Titlebar />
		<view class="inner">
			<QuatationList  />
		</view>
	</view>
</template>

<script>
	import Titlebar from '@/layouts/quotation/titlebar.vue'
	import QuatationList from '@/layouts/quotation/list.vue'
	export default {
		name: 'Quotation',
		components: {
			Titlebar,
			QuatationList 
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: '行情'
			})
		}
	}
</script>

<style>
</style>