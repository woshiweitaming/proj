<template>
	<view class="account_bg">
		<view class="account_main">
			<image class="icon" src="/static/images/member/person.png" mode="widthFix"></image>
			<view class="btns">{{getLang('account_p2')}}</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'AccountCard',
		mixins: [langMixins],
	}
</script>

<style scoped>
	.account_bg{
		background-image: -moz-linear-gradient( 90deg, rgb(248,251,253) 0%, rgb(0,122,255) 79%, rgb(0,122,255) 100%);
		background-image: -webkit-linear-gradient( 90deg, rgb(248,251,253) 0%, rgb(0,122,255) 79%, rgb(0,122,255) 100%);
		background-image: -ms-linear-gradient( 90deg, rgb(248,251,253) 0%, rgb(0,122,255) 79%, rgb(0,122,255) 100%);
		height: 400upx;
		padding: 20upx;
	}
	.account_main{
		border-radius: 20upx;
		background: #fff;
		height: 350upx;
		text-align: center;
		padding: 40upx;
	}
	.account_main .icon{
		width: 140upx;
		margin-bottom: 20upx;
	}
	.account_main .btns{
		background: #007AFF;
		color: #fff;
		width: 40%;
		border-radius: 80upx;
		line-height:  80upx;
		margin: auto;
	}
</style>
