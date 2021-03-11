<template>
	<view class="exchange">
		<Record />
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import Record from '@/layouts/exchange_record/record.vue'
	export default {
		name: 'Exchange',
		mixins: [langMixins],
		components: {
			Record
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('exchange_p1')
			})
		}
	}
</script>

<style>
</style>
