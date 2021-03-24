<template>
	<view class="fund">
		<Balance />
		<Rank />
		<Shortcut />
		<!-- <Footer /> -->
	</view>
</template>

<script>
	import Balance from '@/layouts/fund/balance.vue'
	import Rank from '@/layouts/fund/rank.vue'
	import Shortcut from '@/layouts/fund/shortcut.vue'
	import Footer from '@/layouts/common/footer.vue'
	export default {
		name: 'Fund',
		components: {
			Rank,
			Balance,
			Shortcut,
			Footer
		},
		onLoad(){
		    // uni.startPullDownRefresh();
		},
		onPullDownRefresh() {
		    setTimeout(() => {
		        uni.stopPullDownRefresh();
		    }, 1000);
		}
	}
</script>

<style scoped>
</style>
