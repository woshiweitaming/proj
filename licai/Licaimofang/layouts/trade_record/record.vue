<template>
	<view class="record">
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'TradeRecord',
		mixins: [langMixins],
		data(){
			return {
			}
		},
		methods: {
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('trade_record_p1')
			})
		}
	}
</script>

<style scoped>
</style>
