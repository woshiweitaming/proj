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
				menuList: ['exchange_p2', 'exchange_p3', 'exchange_p4', 'exchange_p5']
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('exchange_p1')
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
		width: 25%;
		line-height: 60upx;
		border-bottom: 1px solid #eee;
		color: #666;
	}
</style>
