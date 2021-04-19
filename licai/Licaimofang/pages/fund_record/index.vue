<template>
	<view class="fund_record">
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Withdraw',
		mixins: [langMixins],
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('fund_record_p1')
			})
		}
	}
</script>

<style>
</style>
