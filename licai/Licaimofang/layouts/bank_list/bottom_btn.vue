<template>
	<view class="btns">
		<u-button type="primary" @click="toPage">{{getLang('banklist_p2')}}</u-button>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'BottomBtn',
		mixins: [langMixins],
		methods: {
			toPage(){
				uni.navigateTo({
					url: '/pages/create_bank/index'
				})
			}
		}
	}
</script>

<style scoped>
	.btns{
		margin-top: 20upx;
	}
</style>

