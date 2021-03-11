<template>
	<view class="record">
		<view class="record_menu">
			<view class="labels" v-for="(curItem, index) in menuList" :key="index">{{getLang(curItem)}}</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Exchange',
		mixins: [langMixins],
		data(){
			return {
				menuList: ['withdraw_p2', 'withdraw_p3', 'withdraw_p4']
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('withdraw_p1')
			})
		}
	}
</script>

<style scoped>
	.record_menu{
		display: flex;
	}
	.record_menu .labels{
		font-size: 24upx;
		text-align: center;
		width: 33.3333%;
		line-height: 60upx;
		border-bottom: 1px solid #eee;
		color: #666;
	}
</style>
