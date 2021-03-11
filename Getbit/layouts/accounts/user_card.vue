<template>
	<view class="user_card card">
		<view class="hd" @click="toPage('/pages/personal_data/index')">
			<image class="avatar_icon" :src="getAvatarImg"></image>
			<view class="uid">{{userInfo.username}}</view>
			<view :class="['status', `status${userInfo.status}`]">{{getStatus}}</view>
			<image src="../../static/images/icons/right_arrow.png" class="right_arrow"></image>
		</view>
		<view class="bd">
			<view class="labels" @click="toPage(curItem.path)" v-for="(curItem, index) in rechargeList" :key="index">
				<image class="icon" :src="curItem.icon"></image>
				<view class="name">{{curItem.name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import common_mixins from '@/mixins/common_mixins.js'
	export default {
		name: 'UserCard',
		props: ['userInfo'],
		mixins: [common_mixins],
		data(){
			return {
				rechargeList: [
					{
						name: '充币',
						path: '/pages/recharge/index',
						icon: '/static/images/icons/account/r1.png'
					},
					{
						name: '提币',
						path: '/pages/withdrawal/index',
						icon: '/static/images/icons/account/r2.png'
					},
					{
						name: '划转',
						path: '/pages/transfer/index',
						icon: '/static/images/icons/account/r3.png'
					}
				]
			}
		},
		methods: {
			toPage(path){
				uni.navigateTo({
					url: path
				})
			}
		},
		computed: {
			getStatus(){
				if(this.userInfo.status == 3){
					return '已认证'
				}
			},
			getAvatarImg(){
				return this.userInfo.auth_img == null ? '../../static/images/icons/common/account_icon.png' : this.userInfo.auth_img
			}
		}
	}
</script>

<style scoped>
	.card{
		border-radius: 0;
		padding: 40upx 20upx;
	}
	.hd{
		width: 100%;
		position: relative;
		padding-left: 100upx;
	}
	.hd .avatar_icon{
		width: 90upx;
		height: 90upx;
		position: absolute;
		left: 0;
		top: 0;
	}
	.hd .uid{
		font-weight: bold;
		padding-left: 20upx;
		font-size: 36upx
	}
	.hd .status{
		color: #FA3534;
		padding-left: 20upx;
		font-size: 26upx;
	}
	.hd .status3{
		color: #999;
	}
	.hd .right_arrow{
		width: 30upx;
		height: 30upx;
		position: absolute;
		right: 0;
		top: 30upx;
	}
	.bd{
		display: flex;
		width: 100%;
		margin-top: 60upx;
	}
	.bd .labels{
		width: 33.3333%;
		text-align: center;
	}
	.bd .labels .icon{
		width: 100upx;
		height: 100upx;
	}
</style>
