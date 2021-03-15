<template>
	<WithdrawRecord />
</template>

<script>
	/**
	 * 提现记录
	 */
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import WithdrawRecord from '@/layouts/fund/withdraw_record.vue'
	export default {
		name: 'Withdraw',
		mixins: [commonMixins, langsMixins],
		components: {
			WithdrawRecord
		},
		onShow(){
			this.setTitle(this.getLangs('extractingRecords'))
		}
	}
</script>

<style>
</style>
