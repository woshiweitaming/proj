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
		width: 50%;
		position: fixed;
		bottom: 20upx;
		left: 50%;
		margin-left: -25%;
		right: 20upx;
	}
</style>

