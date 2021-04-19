<template>
	<view :class="['main_class', createOSClass]">
		<!--资金卡片-->
		<FundCard />
		<!--资金操作-->
		<FundFunc />
		<!--账户-->
		<Account />
	</view>
</template>

<script>
	import { mapMutations, mapGetters } from 'vuex'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import userMixins from '@/mixins/user_mixins.js'
	import FundCard from '@/layouts/fund/fund_card.vue'
	import FundFunc from '@/layouts/fund/fund_func.vue'
	import Account from '@/layouts/fund/Account.vue'
	import system from '@/utils/system.js'
	import validate from '@/utils/validate.js'
	export default {
		name: 'Fund',
		mixins: [commonMixins, langsMixins, userMixins],
		components: {	
			FundCard,
			FundFunc,
			Account
		},
		onShow() {
			this.clearTimer()
			this.getUserInfoHandler()
			this.getUserLeftmoneyHandler()
			this.setTimer()
			this.$once('hook:onUnload', () => {
			    this.clearTimer()                              
			})
			this.$once('hook:onHide', () => {
			    this.clearTimer()                              
			})
			this.setTitle(this.getLangs('fund'))
		}
	}
</script>

<style scoped>
	page{
		background: #20222c;
	}
	.main_class{
		height: 100%;
		padding: 0;
		overflow: hidden;
	}
</style>
