<template>
	<view class="profit_detail">
		<ProfitRecord />
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import ProfitRecord from '@/layouts/profit_detail/record.vue'
	export default {
		name: 'ProfitDetail',
		mixins: [langMixins],
		components: {
			ProfitRecord
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('profit_p1')
			})
		}
	}
</script>

<style>
</style>
