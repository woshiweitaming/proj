<template>
	<view class="bank_list">
		<BankListWrap />
		<BottomBtn />
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import BankListWrap from '@/layouts/bank_list/bank_list.vue'
	import BottomBtn from '@/layouts/bank_list/bottom_btn.vue'
	export default {
		name: 'BankList',
		mixins: [langMixins],
		components: {
			BankListWrap,
			BottomBtn
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('banklist_p1')
			})
		}
	}
</script>

<style scoped>
	.bank_list{
		padding: 20upx;
	}
</style>
