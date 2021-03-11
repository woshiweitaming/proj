<template>
	<view class="withdraw">
		<Record />
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import Record from '@/layouts/withdraw_record/record.vue'
	export default {
		name: 'Withdraw',
		mixins: [langMixins],
		components: {
			Record
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('withdraw_p1')
			})
		}
	}
</script>

<style>
</style>
