<template>
	<view class="card">
		<view class="block">
			<view class="name">{{info.name}}<image src="/static/images/member/arrow.png" class="icon"></image></view>
		</view>
		<view class="block">
			<view class="level">{{getLang('member_p16')}} {{info.difference}} {{getLang('member_p17')}}</view>
		</view>
		<view class="tag">{{getLang('member_p19')}}</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Card',
		mixins: [langMixins],
		props: ['info']
	}
</script>

<style scoped>
	.card{
		width: 95%;
		background: #efefef;
		margin: auto;
		border-radius: 10upx;
		padding: 20upx;
		position: relative;
	}
	.card .block{
		margin-bottom: 20upx;
	}
	.level{
		font-size: 24upx;
		font-weight: bold;
	}
	.name{
		font-size: 32upx;
		font-weight: bold;
	}
	.tag{
		background-image: -moz-linear-gradient( -179deg, rgb(251,243,230) 0%, rgb(233,219,192) 100%);
		background-image: -webkit-linear-gradient( -179deg, rgb(251,243,230) 0%, rgb(233,219,192) 100%);
		background-image: -ms-linear-gradient( -179deg, rgb(251,243,230) 0%, rgb(233,219,192) 100%);
		padding: 10upx;
		font-size: 24rpx;
		border-radius: 40upx;
		position: absolute;
		right: 20upx;
		top: 20upx;
		font-weight: bold;
	}
	.icon{
		width: 30upx;
		height: 30upx;
		margin-left: 20upx;
	}
</style>
