<template>
	<view class="product">
		<view class="main">
			<Question />
		</view>
		<BottomBar />
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import Question from '@/layouts/common/question.vue'
	import BottomBar from '@/layouts/product/bottom_bar.vue'
	export default {
		name: 'Product',
		mixins: [langMixins],
		components: {
			Question,
			BottomBar
		}
	}
</script>

<style scoped>
	page,
	.product{
		height: 100%;
	}
	.main{
		height: 100%;
	}
	.product{
		padding-bottom: 100upx;
	}
</style>
