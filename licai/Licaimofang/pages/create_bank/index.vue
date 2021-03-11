<template>
	<view class="create_bank">
		<Footer />
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import Footer from '@/layouts/common/footer.vue'
	export default {
		name: 'CreateBank',
		mixins: [langMixins],
		components: {
			Footer
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('createbank_p1')
			})
		}
	}
</script>

<style scoped>
	.bank_list{
		padding: 20upx;
	}
</style>