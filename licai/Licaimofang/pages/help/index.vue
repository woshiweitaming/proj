<template>
	<view class="help"></view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Help',
		mixins: [langMixins],
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('help_p1')
			})
		}
	}
</script>

<style scoped>
</style>
