<template>
	<view class="bank_list">
		<BankListWrap :dataList="dataList" @callback="callback" />
		<BottomBtn />
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import BankListWrap from '@/layouts/bank_list/bank_list.vue'
	import BottomBtn from '@/layouts/bank_list/bottom_btn.vue'
	import { getBankList, delBank } from '@/apis/users.js'
	export default {
		name: 'BankList',
		mixins: [langMixins],
		data(){
			return {
				dataList: []
			}
		},
		components: {
			BankListWrap,
			BottomBtn
		},
		methods: {
			async getBankListHandler(){
				const res = await getBankList()
				this.dataList = res.data
			},
			callback(){
				this.getBankListHandler()
			}
		},
		onShow(){
			this.getBankListHandler()
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('banklist_p1')
			})
		}
	}
</script>

<style scoped>
	page{
		height: 100%;
	}
	.bank_list{
		padding: 20upx 20upx 100upx 20upx;
		height: 100%;
	}
</style>
