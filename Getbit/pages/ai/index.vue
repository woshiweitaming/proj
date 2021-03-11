<template>
	<view class="inner">
		<Join />
		<Spacer />
		<AiList />
		<Trader />
	</view>
</template>

<script>
	import Spacer from '@/components/spacer/spacer.vue'
	import Join from '@/layouts/ai/join.vue'
	import AiList from '@/layouts/ai/ai_list.vue'
	import Trader from '@/layouts/ai/trader.vue'
	export default {
		name: 'AI',
		components: {
			Spacer,
			Join,
			AiList,
			Trader
		},
		methods: {
			toPage(path){
				uni.navigateTo({
					url: path
				})
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: '社区'
			})
		}
	}
</script>

<style scoped>
</style>
