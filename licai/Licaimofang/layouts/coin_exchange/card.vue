<template>
	<view class="card">
		<view class="main">
			<view class="box">
				<view class="labels">{{getLang('shop_p2')}}</view>
				<view class="labels value">{{total_coin}}</view>
				<view class="labels last">{{getLang('shop_p3')}}</view>
			</view>
			<view class="box">
				<view class="labels">{{getLang('shop_p4')}}</view>
				<view class="labels value">{{usable_coin}}</view>
				<view class="labels last">{{getLang('shop_p5')}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Card',
		mixins: [langMixins],
		data(){
			return {
				noticeList: [
					'寒雨连江夜入吴',
				],
				total_coin: 0,
				usable_coin: 0
			}
		}
	}
</script>

<style scoped>
	.card{
		padding: 20upx;
		width: 100%;
		position: relative;
	}
	.card .main{
		padding: 20upx;
		background: #fff;
		border-radius: 40upx;
		box-shadow: 0 0 20upx 0 rgba(0,0,0,.05);
		display: flex;
	}
	.card .main .box{
		width: 50%;
		font-size: 24upx
	}
	.card .main .value{
		font-size: 36upx
	}
	.card .main .last{
		color: #999;
	}
	.card .main .box:last-child{
		padding-left: 20upx;
		border-left: 1px solid #eee;
	}
</style>
