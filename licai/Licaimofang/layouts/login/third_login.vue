<template>
	<view class="third">
		<u-divider bg-color="#f8fbfd">{{getLang('login_p1')}}</u-divider>
		<view class="wechat">
			<image src="../../static/images/icon/weixin.png" class="icon"></image>
			<text class="txt">{{getLang('login_p2')}}</text>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'ThirdLogin',
		mixins: [langMixins],
	}
</script>

<style scoped>
	.third{
		margin-top: 40upx;
	}
	.wechat{
		width: 60%;
		border-radius: 40upx;
		text-align: center;
		line-height: 80upx;
		border:1px solid  #007AFF;
		color: #0077FF;
		margin: 40upx auto 0 auto;
		position: relative;
	}
	.wechat .icon{
		width: 50upx;
		height: 50upx;
		vertical-align: middle;
		padding-right: 20upx;
	}
</style>
