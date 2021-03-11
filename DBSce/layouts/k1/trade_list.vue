<template>
	<view class="trade_list_class">
		<view class="menu">
			<view class="labels" v-for="(items, index) in menuList" :key="index">{{getLangs(items)}}</view>
		</view>
		<view class="list">
			<view class="labels" v-for="(items, index) in dataList" :key="index">
				<view class="item">{{items.name}}</view>
				<view class="item">{{items.price}}</view>
				<view :class="['item', items.type === 0 ? 'green' : 'red']">{{items.type === 0 ? getLangs('tradep1') : getLangs('tradep2')}}</view>
				<view class="item">{{items.time}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import { getQhDynamic } from '@/api/user.js'
	export default {
		name: 'Tradelist',
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				dataList: [],
				menuList: ['currency', 'strikePrice', 'direction', 'time'],
				timer: null
			}
		},
		methods: {
			async getQhDynamicHandler(){
				const res = await getQhDynamic()
				this.dataList = res.data
			},
			clearTimer(){
				clearInterval(this.timer)
				this.timer = null
			},
			setTimer(){
				this.timer = setInterval(() => {
					this.getQhDynamicHandler()
				}, 3000)
			}
		},
		created() {
			const that = this
			this.getQhDynamicHandler()
			this.setTimer()
		},
		destroyed(){
			this.clearTimer()
		},
	}
</script>

<style scoped>
	.menu{
		display: flex;
	}
	.menu .labels{
		width: 25%;
		text-align: center;
		line-height: 60upx;
		color: #8d9dbc;
		font-size: 24upx
	}
	.list .labels{
		border-bottom: 1px solid rgba(255,255,255,.05);
		display: flex;
		background: rgba(0,0,0,.1);
	}
	.list .labels .item{
		width: 25%;
		text-align: center;
		font-size: 24upx;
		color: #fff;
		line-height: 60upx;
	}
</style>
