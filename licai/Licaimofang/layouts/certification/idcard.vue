<template>
	<view class="upload_class">
		<view class="images_list">
			<view @tap="chooseIdcardHandler(index)" class="labels" v-for="(items, index) in idcardList" :key="index">
				<image v-if="form['p'+(index + 1)] === ''" class="img" :src="items.pic"></image>
				<text v-if="form['p'+(index + 1)] === ''"class="tips">{{getLang(items.name)}}</text>
				<image class="img" v-else :src="form['p'+(index + 1)]"></image>
			</view>
			<view class="form_wrap">
				<view class="btns">{{getLang('certification_p11')}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 上传证件
	 */
	import appConfig from '@/config/appConfig.js'
	import langMixins from '@/mixins/lang_mixins.js'
	import storage from '@/utils/storage.js'
	import tips from '@/utils/tips.js'
	export default {
		name: 'Idcard',
		mixins: [langMixins],
		data(){
			return {
				form: {
					p1: '',
					p2: '',
					p3: ''
				},
				idcardList: [
					{
						pic: '/static/images/sfz/rz1.png',
						name: 'certification_p12'
					}, 
					{
						pic: '/static/images/sfz/rz2.png',
						name: 'certification_p13'
					},
					{
						pic: '/static/images/sfz/rz3.png',
						name: 'certification_p14'
					},
				]
			}
		},
		methods: {
			/**
			 * 上传身份证
			 */
			chooseIdcardHandler(index){
				const token = storage.getLocalData('token')
				let url = `${appConfig.domain}/user/uploadIdImg/${(index+1)}`
				let name = `${(index+1)}`
				// #ifdef H5
				return uni.chooseImage({
				    success: (chooseImageRes) => {
				        const tempFilePaths = chooseImageRes.tempFilePaths;
						uni.uploadFile({
						    url: url,
							header: {
								'token': token,
							},
							name: 'f',
							filePath: tempFilePaths[0],
						    success: (uploadFileRes) => {
						       const res = JSON.parse(uploadFileRes.data)
							   this.form['p'+(index+1)] = tempFilePaths[0]
						    }
						});
				   },
				})
				// #endif
				plus.nativeUI.actionSheet({  
				    cancel: this.getLang('certification_p8'),
				        buttons: [{  
				                title: this.getLang('certification_p9')//相机国际化文字  
				            },  
				            {  
				                title: this.getLang('certification_p10')//相册国际化文字  
				            }  
				        ]  
				    },  
				    async (tap) => {  
						if (tap.index === 1) {  
							let RearCamera = plus.camera.getCamera( 1 );  
							RearCamera.captureImage((file)=>{
								uni.uploadFile({
								    url: url,
									header: {
										'token': token,
									},
									name: 'f',
									filePath: file,
								    success: (uploadFileRes) => {
								       const res = JSON.parse(uploadFileRes.data)
									   this.form['p'+(index+1)] = file
								    }
								});
							},(err)=>{  
								tips.showToast(this.getLang('common_p3'))
							},{"optimize":false})  
						}else if (tap.index === 2) {  
							    plus.gallery.pick((data)=>{
									const file = data.files[0]
							        uni.uploadFile({
							            url: url,
							        	header: {
							        		'token': token,
							        	},
							        	name: 'f',
							        	filePath: file,
							            success: (uploadFileRes) => {
							               const res = JSON.parse(uploadFileRes.data)
							        	   this.form['p'+(index+1)] = file
							            }
							        });
							    },(err)=>{  
							        this.$tips.showToast(this.getLangs('common_p3'))
							    },{  
							        maximum:1,  
							        multiple:true  
							    });  
						}
				 })
			},
			/**
			 * 提交上传
			 */
			async uploadIdcardHandler(){	
				
			},
		}
	}
</script>

<style scoped>
	.images_list{
		padding: 40upx;
	}
	.images_list .labels{
		width: 100%;
		height: 380upx;
		margin: 20upx auto;
		position: relative;
	}
	.images_list .labels .img{
		width: 100%;
		height: 380upx;
	}
	.tips{
		width: 100%;
		position: absolute;
		top: 70%;
		left: 0;
		text-align: center;
	}
</style>
