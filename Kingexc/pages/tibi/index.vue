<template>
	<WithdrawApply :status="status" />
</template>

<script>
	/**
	 * 提现
	 */
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import userMixins from '@/mixins/user_mixins.js'
	import WithdrawApply from '@/layouts/fund/withdraw_apply1.vue'
	export default {
		name: 'Withdraw',
		mixins: [commonMixins, langsMixins, userMixins],
		data(){
			return {
				status: false
			}
		},
		components: {
			WithdrawApply
		},
		onShow(){
			this.checkCertInfoHandler()
			this.status = !this.status
			this.setTitle(this.getLangs('withdraw'))
		},
		onNavigationBarButtonTap(e) {
		   this.navigateTo('/pages/order_list/index?type=1')
		},
	}
</script>

<style scoped>
</style>
