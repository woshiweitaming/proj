<template>
	<view class="audlt_class">
		<view class="tips">
			<rich-text :nodes="getLangs('audltTips')"></rich-text>
		</view>
		<view class="form_class">
			<view @tap="switchTab('/pages/user/index')" class="button">{{getLangs('backBtn')}}</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 资料审核
	 */
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Audlt',
		mixins: [commonMixins, langsMixins],
	}
</script>

<style scoped>
	.audlt_class{
		padding: 40upx;
		text-align: center;
		margin-top: 40upx;
		color: #7386b0;
		font-weight: bold;
	}
</style>
