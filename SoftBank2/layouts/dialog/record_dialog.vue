<template>
	<view class="dialog_class" v-if="show">
		<view class="dialog_main fadelogIn">
			<view class="dialog_title">
			   {{getLangs('realTimeTrading')}}
			   <text class="iconfont icon-close close" @tap="close"></text>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 订单界面弹窗
	 */
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'RecordDialog',
		props: ['show', 'action', 'currency'],
		mixins: [commonMixins, langsMixins],
		methods:{
			/**
			 *  关闭弹窗
			 */
			close(){
				this.$emit('close')
			},
		}
	}
</script>

<style>
</style>
