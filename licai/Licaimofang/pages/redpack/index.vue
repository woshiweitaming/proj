<template>
	<view class="redpack">
		<Balance />	
		<MofenCard />
		<Record />
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import Balance from '@/layouts/redpack/balance.vue'
	import MofenCard from '@/layouts/redpack/redpack_card.vue'
	import Record from '@/layouts/redpack/record.vue'
	export default {
		name: 'Mofen',
		mixins: [langMixins],
		components: {
			Balance,
			MofenCard,
			Record
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('redpack_p1')
			})
		}
	}
</script>

<style>
</style>
