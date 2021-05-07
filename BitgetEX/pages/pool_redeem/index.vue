<template>
	<view class="pool_order_confirm_class">
		<view class="pool_order_label">
			<view class="logo">
				<image :src="data.logo" class="icon"></image>
			</view>
			<view class="name">{{data.name}}</view>
			<view class="detail">
				<view class="items">
					<view class="value">{{data.period}}{{getLangs('poolp18')}}</view>
					<view class="text">{{getLangs('poolp15')}}</view>
				</view>
				<view class="items">
					<view class="value">{{data.period}}{{getLangs('poolp18')}}</view>
					<view class="text">{{getLangs('poolp15')}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'PoolRedeem',
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				data: {}
			}
		},
		onLoad(opt){
			this.data = opt
		},
		onShow() {
			this.setTitle(this.getLangs('poolp23'))
		}
	}
</script>

<style scoped>
	page{
		background: #f9f9f9;
	}
	.pool_order_confirm_class{
		padding: 20upx;
	}
	.pool_order_label{
		padding: 20upx;
		background: #fff;
		border-radius: 40upx;
		border: 1px solid #eee
	}
	.logo{
		text-align: center;
	}
	.logo .icon{
		width: 120upx;
		height: 120upx;
		display: inline-block;
	}
	.name{
		text-align: center;
		line-height: 120upx;
		font-size: 32upx
	}
	.detail{
		text-align: center;
		display: flex;
	}
	.detail .items{
		width: 50%;
		margin-bottom: 20upx;
	}
	.detail .items .text{
		font-size: 24upx;
		color: #aaa;
	}
	.detail .items .value{
		font-size: 32upx;
		color: #007AFF;
	}
</style>
