<template>
	<view class="account">
		<AccountCard />
		<UserInfo />
		<Tasks />
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import AccountCard from '@/layouts/account/account_card.vue'
	import UserInfo from '@/layouts/account/user_info.vue'
	import Tasks from '@/layouts/account/tasks.vue'
	export default {
		name: 'Account',
		mixins: [langMixins],
		components: {
			AccountCard,
			UserInfo,
			Tasks
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('account_p1')
			})
		}
	}
</script>

<style scoped>
</style>
