<template>
	<view class="passwd">
		<PasswdCell />
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import PasswdCell from '@/layouts/passwd/cell.vue'
	export default {
		name: 'Passwd',
		mixins: [langMixins],
		components: {
			PasswdCell
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('passwd_p1')
			})
		}
	}
</script>

<style scoped>
	.bank_list{
		padding: 20upx;
	}
</style>
