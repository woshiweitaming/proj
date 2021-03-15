<template>
	<view class="fill_in_class">
		<view class="form_class">
			<view @tap="next" class="button">{{getLangs('next')}}</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 填写资料
	 */
	import { mapMutations } from 'vuex'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'FillIn',
		mixins: [commonMixins, langsMixins],
		methods: {
			/**
			 * 下一步
			 */
			next(){
				this.setAdvancedCertCurrent(1)
			},
			...mapMutations({
				setAdvancedCertCurrent: 'SET_ADVANCED_CERT_CURRENT'
			})
		}
	}
</script>

<style scoped>
</style>
