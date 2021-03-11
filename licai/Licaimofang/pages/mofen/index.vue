<template>
	<view class="mofen">
		<Balance />	
		<MofenCard />
		<Tasks />
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import Balance from '@/layouts/mofen/balance.vue'
	import MofenCard from '@/layouts/mofen/mofen_card.vue'
	import Tasks from '@/layouts/mofen/tasks.vue'
	export default {
		name: 'Mofen',
		mixins: [langMixins],
		components: {
			Balance,
			MofenCard,
			Tasks
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('mofen_p1')
			})
		}
	}
</script>

<style>
</style>
