<template>
	<view class="my">
		<Cell />
		<Bottom />
	</view>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex'
	import langMixins from '@/mixins/lang_mixins.js'
	import Cell from '@/layouts/user/cell.vue'
	import Bottom from '@/layouts/user/bottom.vue'
	import { getUserInfo } from '@/apis/users.js'
	export default {
		name: 'My',
		mixins: [langMixins],
		components: {
			Cell,
			Bottom
		},
		methods: {
			async getUserInfoHandler(){
				const res = await getUserInfo()
				this.setUserInfo(res.data)
			},
			...mapMutations({
				setUserInfo: 'SET_USER_INFO'
			})
		},
		onShow() {
			//this.getUserInfoHandler()
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('user_p1')
			})
		}
	}
</script>

<style>
</style>
