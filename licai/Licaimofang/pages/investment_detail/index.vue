<template>
	<view class="investment_detail">
		<Info />
		<Record />
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import Info from '@/layouts/investment_detail/Info.vue'
	import Record from '@/layouts/investment_detail/record.vue'
	export default {
		name: 'InvestmentDetail',
		mixins: [langMixins],
		components: {
			Info,
			Record
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('investment_detail_p1')
			})
		}
	}
</script>

<style scoped>
</style>
 