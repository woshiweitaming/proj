<template>
	<view class="detail">
		<view class="menu">
			<view @click="changeMenu(index)" :class="['labels', index === active ? 'on' : '']" v-for="(curItem, index) in menuList" :key="index">
				{{getLang(curItem)}}
				<view class="line"></view>
			</view>
		</view>
		<view class="list">
			<view class="labels">
				<view class="name">{{getLang('product_p17')}}</view>
				<view class="value">{{details.period}}{{getLang('product_p6')}}</view>
			</view>
			<view class="labels">
				<view class="name">{{getLang('product_p18')}}</view>
				<view class="value">{{details.progress}}%</view>
			</view>
			<view class="labels">
				<view class="name">{{getLang('product_p19')}}</view>
				<view class="value">{{details.deal_rate}}%</view>
			</view>
			<view class="labels">
				<view class="name">{{getLang('product_p20')}}</view>
				<view class="value">投资期间未满仓时，不可复投</view>
			</view>
			<view class="labels">
				<view class="name">{{getLang('product_p21')}}</view>
				<view class="value">{{Number(details.min_amount).toFixed(2)}}{{getLang('product_p22')}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Detail',
		mixins: [langMixins],
		props: ['details'],
		data(){
			return {
				menuList: ['product_p14', 'product_p15', 'product_p16'],
				active: 0
			}
		},
		methods: {
			changeMenu(index){
				this.active = index
			}
		}
	}
</script>

<style scoped>
	.menu{
		display: flex;
		padding-bottom: 10upx;
		padding-top: 10upx;
		border-bottom: 1px solid #eee;
	}
	.menu .labels{
		width: 33.333%;
		text-align: center;
		line-height: 60upx;
		color: #999;
	}
	.menu .labels.on{
		color: #007AFF;
		font-weight: bold;
	}
	.menu .labels .line{
		width: 50upx;
		height: 8upx;
		border-radius: 10upx;
		background: #007AFF;
		margin: auto;
		display: none;
	}
	.menu .labels.on .line{
		display: block;
	}
	.list{
		padding: 20upx;
	}
	.list .labels{
		display: flex;
	}
	.list .labels .name{
		width: 40%;
		line-height: 60upx;
		font-size: 26upx;
		color: #666;
	}
	.list .labels .value{
		width: 60%;
		text-align: right;
		line-height: 60upx;
	}
</style>
