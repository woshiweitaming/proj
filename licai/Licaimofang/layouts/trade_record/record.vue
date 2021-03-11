<template>
	<view class="record">
		<view class="record_menu">
			<view @click="changeMenu(index)" :class="['labels', index == cur ? 'on' : '']" v-for="(curItem, index) in menuList" :key="index">{{getLang(curItem)}}</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'TradeRecord',
		mixins: [langMixins],
		data(){
			return {
				menuList: ['trade_record_p2', 'trade_record_p3', 'trade_record_p4', 'trade_record_p5', 'trade_record_p6', 'trade_record_p7'],
				cur: 0
			}
		},
		methods: {
			changeMenu(index){
				this.cur = index
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('trade_record_p1')
			})
		}
	}
</script>

<style scoped>
	.record_menu{
		display: flex;
		background: #fff;
	}
	.record_menu .labels{
		font-size: 26upx;
		text-align: center;
		width: 16.666666%;
		line-height: 60upx;
		border-bottom: 1px solid #eee;
		color: #666;
	}
	.record_menu .labels.on{
		color: #007AFF;
		border-bottom: 2px solid #007AFF;
	}
</style>
