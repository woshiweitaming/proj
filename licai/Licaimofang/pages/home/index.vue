<template>
	<view class="wrap">
		<TitleView />
		<TopBar />
		<Shortcut />
		<Product />
		<Dialog />
		<!-- <Opinion /> -->
		<!-- <Footer /> -->
	</view>
</template>

<script>
	import TopBar from '@/layouts/home/topbar.vue'
	import TitleView from '@/layouts/home/title_view.vue'
	import Product from '@/layouts/home/product.vue'
	import Shortcut from '@/layouts/home/shortcut.vue'
	import Dialog from '@/layouts/home/dialog.vue'
	export default {
		name: 'Index',
		components: {
			TopBar,
			TitleView,
			Product,
			Shortcut,
			Dialog
		},
	}
</script>

<style scoped>
</style>
