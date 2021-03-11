<template>
	<view class="page bottom_page">
		<view class="inner">
			<view class="label">身份信息</view>
			<view class="form_label">
				<view class="name">姓名</view>
				<input class="input_bar input_bar_bottom" placeholder="请输入真实姓名" v-model="data.auth_name"/>
			</view>
			<view class="form_label">
				<view class="name">身份证号</view>
				<input class="input_bar input_bar_bottom" placeholder="请输入身份证号码" v-model="data.auth_sn" />
			</view>
			<view class="label l2">身份信息</view>
			<view class="idcard">
				<view class="p p1" @click="upload(0)">
					<view class="box" v-if="data.auth_sfzzm == ''">
						<view class="plus">+</view>
						<text class="name">上传身份证正面照片</text>
					</view>
					<image v-else class="icon" :src="data.auth_sfzzm"></image>
				</view>
				<view class="p p2">
					<view class="box" @click="upload(1)" v-if="data.auth_sfzfm == ''">
						<view class="plus">+</view>
						<text class="name">上传身份证背面照片</text>
					</view>
					<image v-else class="icon" :src="data.auth_sfzzm"></image>
				</view>
				<view class="p p3"><image class="icon" mode="widthFix" src="../../static/images/icons/certfication.png"></image></view>
				<view class="p p4" @click="upload(2)">
					<view class="box" v-if="data.auth_scsfz == ''">
						<view class="plus">+</view>
						<text class="name">上传手持身份证</text>
					</view>
					<image v-else class="icon" :src="data.auth_scsfz"></image>
				</view>
			</view>
			<view class="bottom_btn_bar">
				<view class="buttons" @click="authApplayHandler">提交</view>
			</view>
		</view>
	</view>
</template>

<script>
	import appConfig from '@/config/appConfig.js'
	import * as APIS from '@/apis/api_url.js'
	import { authApplay } from '@/apis/user.js'
	import storage from '@/utils/storage.js'
	import tips from '@/utils/tips.js'
	export default {
		name: 'Certification',
		data(){
			return {
				data: {	
					auth_sn: '',
					auth_name: '',
					auth_sfzzm: '',
					auth_sfzfm: '',
					auth_scsfz: '',
					auth_type: 0
				},
				finishStatus: false
			}
		},
		methods: {
			upload(type){
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
								const imgUrl = JSON.parse(uploadFileRes.data).return.url
								if(type == 0){
									this.data.auth_sfzzm = imgUrl 
								}
						        if(type == 1){
						        	this.data.auth_sfzfm = imgUrl 
						        }
								if(type == 2){
									this.data.auth_scsfz = imgUrl 
								}
						    }
						});
				    }
				});
			},
			async authApplayHandler(){
				if(this.data.auth_name.length === 0){
					return tips.showToast('姓名不能为空')
				}
				if(this.data.auth_sn.length === 0){
					return tips.showToast('身份证不能为空')
				}
				if(this.data.auth_sfzzm.length === 0){
					return tips.showToast('请上传身份证正面')
				}
				if(this.data.auth_sfzfm.length === 0){
					return tips.showToast('请上传身份证反面')
				}
				if(this.data.auth_scsfz.length === 0){
					return tips.showToast('请上传手持身份证')
				}
				const params = {
					uid: storage.getLocalData('token'),
					data: this.data
				}
				const res = await authApplay(params)
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: '实名认证'
			})
		}
	}
</script>

<style scoped>
	.page{
		background: #fff;
		height: 100%;
		box-sizing: border-box;
	}
	.label{
		line-height: 80upx;
		border-bottom: 1px solid #eee;
		font-size: 32upx;
		color: #666;
		margin-bottom: 40upx;
	}
	.label.l2{
		margin-top: 80upx;
	}
	.idcard{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.idcard .p{
		width: 50%;
		margin-bottom: 20upx;
		padding: 10upx;
		height: 208upx;
	}
	.icon{
		width: 100%;
		height: 208upx;
	}
	.box{
		height: 210upx;
		border: 1px dashed #ccc;
		text-align: center;
		color: #aaa;
		border-radius: 10upx;
	}
	.box .plus{
		text-align: center;
		width: 100%;
		margin-top: 30upx;
		font-size: 60upx
	}
	.box .name{
		font-size: 24upx
	}
</style>
