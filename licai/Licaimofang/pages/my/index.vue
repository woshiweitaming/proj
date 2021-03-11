<template>
	<view class="my">
		<Cell />
		<Bottom />
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import Cell from '@/layouts/user/cell.vue'
	import Bottom from '@/layouts/user/bottom.vue'
	export default {
		name: 'My',
		mixins: [langMixins],
		components: {
			Cell,
			Bottom
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('user_p1')
			})
		}
	}
</script>

<style>
</style>
