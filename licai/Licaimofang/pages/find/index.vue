<template>
	<view class="wrap">
		<view class="find">
			<TitleView />
			<Recommend />
			<Product />
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import Recommend from '@/layouts/find/recommend.vue'
	import Product from '@/layouts/find/product.vue'
	import TitleView from '@/layouts/home/title_view.vue'
	export default {
		name: 'Find',
		mixins: [langMixins],
		components: {
			TitleView,
			Recommend,
			Product
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('find')
			})
		}
	}
</script>

<style scoped>
	.find{
		padding-top: calc(100upx + var(--status-bar-height));
	}
</style>
