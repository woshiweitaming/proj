<template>
	<view class="find">
		<Tab />
		<News />
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import Tab from '@/layouts/find/tab.vue'
	import News from '@/layouts/find/news.vue'
	export default {
		name: 'Find',
		mixins: [langMixins],
		components: {
			Tab,
			News
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('find')
			})
		}
	}
</script>

<style scoped>
	page,
	.find{
		height: 100%;
	}
</style>
