<template>
	<view class="card no_border_radius">
		<view class="data_list">
			<view class="labels" @click="chooseAvatar">
				<view class="name">头像</view>
				<image class="icon" :src="getAvatarImg"></image>
			</view> 
			<view class="labels">
				<view class="name">昵称</view>
				<view class="value">{{opt.username}}</view>
			</view>
			<view class="labels">
				<view class="name">账户</view>
				<view class="value">{{opt.username}}</view>
			</view>
			<view class="labels">
				<view class="name">ID</view>
				<view class="value">{{opt.uid}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import appConfig from '@/config/appConfig.js'
	import * as APIS from '@/apis/api_url.js'
	import { fileUpload } from '@/apis/public.js'
	import { getAuthStatus } from '@/apis/user.js'
	import storage from '@/utils/storage.js'
	export default {
		name: 'PersonalData',
		data(){
			return {
				opt: {}
			}
		},
		computed: {
			getAvatarImg(){
				if(this.opt.auth_img == 'undefined' || this.opt.auth_img == null){
					return '../../static/images/icons/common/account_icon.png'
				}
				return this.opt.auth_img
			}
		},
		methods: {
			async chooseAvatar(){
				uni.chooseImage({
				    count: 1, 
				    sourceType: ['album'],
				    success: async (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						uni.uploadFile({
						    url: appConfig.domain + APIS.FILE_UPLOAD,
						    filePath: tempFilePaths[0],
						    name: 'file',
						    formData: {
						        'file': chooseImageRes.tempFiles[0].name
						    },
						    success: (uploadFileRes) => {
								console.log(uploadFileRes)
						        //this.opt.auth_img = uploadFileRes.data.return.url
						    }
						});
				    }
				});
			},
			async getAuthStatusHandler(){
				const uid = storage.getLocalData('token')
				const res = await getAuthStatus({uid: uid})
				this.opt = res
			}
		},
		onLoad(opt) {
			this.getAuthStatusHandler()
			uni.setNavigationBarTitle({
				title: '个人资料'
			})
		}
	}
</script>

<style scoped>
	page{
		background: #fff;
	}
	.data_list{
		width: 100%;
	}
	.data_list .labels:first-child{
		border-top: 1px solid #f9f9f9
	}
	.data_list .labels{
		width: 100%;
		padding: 20upx 0;
		border-bottom: 1px solid #f9f9f9;
		position: relative;
	}
	.data_list .labels .name{
		line-height: 80upx;
	}
	.data_list .labels .value{
		position: absolute;
		right: 0;
		top: 40upx;
		color: #aaa;
	}
	.data_list .labels .icon{
		width: 70upx;
		height: 70upx;
		position: absolute;
		bottom: 25upx;
		right: 0;
	}
</style>
