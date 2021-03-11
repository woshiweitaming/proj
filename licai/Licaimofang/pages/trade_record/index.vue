<template>
	<view class="trade_record">
		<Record />
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import Record from '@/layouts/trade_record/record.vue'
	export default {
		name: 'TradeRecord',
		mixins: [langMixins],
		components: {
			Record
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('trade_record_p1')
			})
		}
	}
</script>

<style>
</style>
