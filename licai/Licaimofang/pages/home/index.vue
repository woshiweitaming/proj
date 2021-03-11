<template>
	<view class="wrap">
		<TitleView />
		<TopBar />
		<Product />
		<Opinion />
		<Footer />
	</view>
</template>

<script>
	import TopBar from '@/layouts/home/topbar.vue'
	import TitleView from '@/layouts/home/title_view.vue'
	import Product from '@/layouts/home/product.vue'
	import Opinion from '@/layouts/home/opinion.vue'
	import Footer from '@/layouts/common/footer.vue'
	export default {
		name: 'Index',
		components: {
			TopBar,
			TitleView,
			Product,
			Opinion,
			Footer
		}
	}
</script>

<style scoped>
</style>
