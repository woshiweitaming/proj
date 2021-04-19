<template>
	<view :class="['main_class', createOSClass]">
		<view class="nav_title">
			{{getLangs('personalCenter')}}
		</view>
		<view class="user_main">
			<image src="../../static/images/avatar.png" class="avatar"></image>
			<text class="nickname">{{getUserInfoData.ncikname}}</text>
			<!-- <text class="leftmoney">{{getLeftmoney}}</text>
			<text class="name">{{getLangs('leftmoney')}}</text> -->
			<view class="recharge_btn">
				<button @tap="navigateTo('/pages/recharge/index')" class="btns">{{getLangs('recharge')}}</button>
			</view>
			<view class="user_func">
				<UserFunc />
			</view>
		</view>
	</view>
</template>

<script>
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import userMixins from '@/mixins/user_mixins.js'
	import validate from '@/utils/validate.js'
	import { userLoginOut } from '@/api/user.js'
	import UserFunc from '@/layouts/user/user_func.vue'
	let timer = null
	export default {
		name: 'User',
		mixins: [commonMixins, langsMixins, userMixins],
		components: {
			UserFunc
		},
		onShow() {
			this.getUserInfoHandler()
		}
	}
</script>

<style scoped>
	.main_class{
		height: 100%;
		overflow-x: hidden;
		padding: var(--status-bar-height) 0 0 0;
	}
	.nav_title{
		padding: 0 20upx;
		color: #222;
		font-size: 34upx;
		height: 80upx;
	}
	.user_main{
		height: calc(100% - 100upx);
		border-radius: 60upx 60upx 0 0;
		background: #f9f9f9;
		box-sizing: border-box;
		padding: 40upx;
		text-align: center;
		overflow: auto;
	}
	.user_main .avatar{
		width: 160upx;
		height: 160upx;
		display: inline-block;
	}
	.user_main .nickname,
	.user_main .leftmoney,
	.user_main .name{
		display: block;
		font-size: 28upx;
		line-height: 60upx;
	}
	.user_main .name{
		font-size: 24upx;
		color: rgba(0,0,0,.6);
	}
	.user_main .leftmoney{
		font-size: 40upx;
		color: #4944B3;
		font-weight: bold;
	}
	.user_main .recharge_btn{
		padding: 40upx 20upx 0 20upx;
		border-top: 1px solid #eee;
		margin-top: 20upx;
	}
	.user_main .recharge_btn .btns{
		border: 1px solid #4944B3;
		border-radius: 40upx;
		text-align: center;
		line-height: 80upx;
		font-size: 28upx;
		color: #4944B3;
	}
</style>
