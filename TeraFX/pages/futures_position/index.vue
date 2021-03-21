<template>
	<view class="position_class">
		<view class="common_list_class">
			
		</view>
	</view>
</template>

<script>
	/**
	 * 期货持仓订单
	 */
	import langsMixins from '@/mixins/lang_mixins.js'
	import commonMixins from '@/mixins/common_mixins.js'
	export default {
		name: 'Position',
		mixins: [langsMixins, commonMixins],
		onShow() {
			this.setTitle(this.getLangs('positionOrder'))
		}
	}
</script>

<style scoped>
	page{
		background: #f7f7f9;
	}
	.position_class{
		height: 100%;
	}
</style>
