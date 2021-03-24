<template>
	<view class="my_investment">
		<Menu />
		<Result  />
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import Menu from '@/layouts/my_invsertment/menu.vue'
	import Result from '@/layouts/my_invsertment/result.vue'
	export default {
		name: 'MyInvestment',
		mixins: [langMixins],
		components: {
			Menu,
			Result 
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('my_investment_p1')
			})
		}
	}
</script>

<style scoped>
</style>
