<template>
	<view class="page custom">
		<Titlebar />
		<UserCard :userInfo="userInfo" />
		<Spacer />
		<ShortcutList />
	</view>
</template>

<script>
	import Titlebar from '@/layouts/accounts/titlebar.vue'
	import UserCard from '@/layouts/accounts/user_card.vue'
	import ShortcutList from '@/layouts/accounts/shortcut_list.vue'
	import Spacer from '@/components/spacer/spacer.vue'
	import CommonMixins from '@/mixins/common_mixins.js'
	import { getAuthStatus } from '@/apis/user.js'
	import storage from '@/utils/storage.js'
	export default {
		name: 'Account',
		mixins: [CommonMixins],
		components: {
			Titlebar,
			UserCard,
			ShortcutList,
			Spacer
		},
		data(){
			return {
				userInfo: {}
			}
		},
		methods: {
			async getAuthStatusHandler(){
				const uid = storage.getLocalData('token')
				const res = await getAuthStatus({uid: uid})
				this.userInfo = res
			}
		},
		onLoad() {
			this.getAuthStatusHandler()
			uni.setNavigationBarTitle({
				title: '我的'
			})
		}
	}
</script>

<style scoped>
</style>
