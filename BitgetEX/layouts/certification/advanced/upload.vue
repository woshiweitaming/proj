<template>
	<view class="upload_class">
		<view class="images_list">
			<view @tap="chooseIdcardHandler(index)" class="labels" v-for="(items, index) in idcardList" :key="index">
				<image v-if="form['p'+(index + 1)] === ''" class="img" :src="items.pic"></image>
				<text v-if="form['p'+(index + 1)] === ''"class="tips">{{getLangs(items.name)}}</text>
				<image class="img" v-else :src="form['p'+(index + 1)]"></image>
			</view>
			<view class="form_class">
				<view @tap="uploadIdcardHandler" class="button">{{getLangs('confirm')}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 上传证件
	 */
	import { mapMutations, mapGetters } from 'vuex'
	import appConfig from '@/config/appConfig.js'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import { uploadIdcard, uploadConfirm } from '@/api/user.js'
	import validate from '@/utils/validate.js'
	// import permision from "@/js_sdk/wa-permission/permission.js"
	export default {
		name: 'Upload',
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				form: {
					p1: '',
					p2: '',
					p3: ''
				},
				idcardList: [
					{
						pic: '/static/images/rz1.png',
						name: 'idcardp1'
					}, 
					{
						pic: '/static/images/rz2.png',
						name: 'idcardp2'
					},
					{
						pic: '/static/images/rz3.png',
						name: 'idcardp3'
					},
				]
			}
		},
		methods: {
			/**
			 * 提交
			 */
			submit(index){
				this.setAdvancedCertCurrent(2)
			},
			/**
			 * 上传身份证
			 */
			async chooseIdcardHandler(index){
				let ens = ''
				let title = ''
				switch (this.getGlobalLang) {
					case 'cn' :
					    ens = 0
						title = '请设置打开相机及相册权限'
						break;
					case 'en' :
					    ens = 1
						title = 'Please set the permission to open the camera and album'
						break;
					case 'ja' :
					    ens = 2
						title = 'カメラとアルバムを開く許可を設定してください'
						break;
					case 'ko' :
					    ens = 3
						title = '카메라와 앨범을 열 수있는 권한을 설정하십시오'
						break;
					case 'cns' :
					    ens = 4
						title = '請設置打開相機及相冊權限'
						break;
					case 'vi' :
					    ens = 5
						title = 'Vui lòng đặt quyền để mở máy ảnh và album'
						break;
				}
				
				const token = this.$storage.getLocalData('token')
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
								ens: ens
							},
							name: 'f',
							filePath: tempFilePaths[0],
						    success: (uploadFileRes) => {
						       const res = JSON.parse(uploadFileRes.data)
							   this.backTips(res)
							   if(validate.checkCode(res)){
								   this.form['p'+(index+1)] = tempFilePaths[0]
							   }
						    }
						});
				   },
				})
				// #endif
				plus.nativeUI.actionSheet({  
				    cancel: this.getLangs('cancel'),
				        buttons: [{  
				                title: this.getLangs('camera')//相机国际化文字  
				            },  
				            {  
				                title: this.getLangs('album')//相册国际化文字  
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
										ens: ens
									},
									name: 'f',
									filePath: file,
								    success: (uploadFileRes) => {
								       const res = JSON.parse(uploadFileRes.data)
									   this.backTips(res)
									   if(validate.checkCode(res)){
									   		this.form['p'+(index+1)] = file
									   }
								    }
								});
							},(err)=>{  
								console.log(err)
								this.$tips.showToast(this.getLangs('error'))
							},{"optimize":false})  
						}else if (tap.index === 2) {  
							    plus.gallery.pick((data)=>{
									const file = data.files[0]
							        uni.uploadFile({
							            url: url,
							        	header: {
							        		'token': token,
											ens: ens
							        	},
							        	name: 'f',
							        	filePath: file,
							            success: (uploadFileRes) => {
											console.log(uploadFileRes)
							               const res = JSON.parse(uploadFileRes.data)
							        	   this.backTips(res)
							        	   if(validate.checkCode(res)){
							        	   		this.form['p'+(index+1)] = file
							        	   }
							            }
							        });
							    },(err)=>{  
							        this.$tips.showToast(this.getLangs('error'))
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
				if(this.form.p1 === '' || this.form.p2 === '' || this.form.p3 === ''){
					return this.$tips.showToast(this.getLangs('uploadEmptyTips'))
				}
				const res = await uploadConfirm({end: true})
			    this.backTips(res)
			    if(validate.checkCode(res)){
			    	 this.setAdvancedCertCurrent(1)
			    }
			},
			...mapMutations({
				setAdvancedCertCurrent: 'SET_ADVANCED_CERT_CURRENT'
			})
		},
		computed: {
			...mapGetters({
				getGlobalLang: 'getGlobalLang'
			})
		},
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
