<template>
	<view class="safe"></view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Safe',
		mixins: [langMixins],
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('safe_p1')
			})
		}
	}
</script>

<style>
</style>
