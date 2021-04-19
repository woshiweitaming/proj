<template>
	<view class="recharge">
		<view class="card">
			<view class="name">{{getLang('recharge_p2')}}</view>
			<view class="value">¥ {{balance}}</view>
		</view>
		<view class="card card2">
			<view class="name">{{getLang('recharge_p3')}}</view>
			<view class="card_input">
				<view class="mark">¥</view>
				<input type="text" v-model="amount" class="input_bar" />
			</view>
		</view>
		<view class="card card3">
			<view class="name" @click="upload" v-if="head_img === ''">+{{getLang('recharge_p4')}}</view>
			<image class="head_img" :src="head_img" v-else></image>
		</view>
		<view class="btns" @click="pay">{{getLang('recharge_p5')}}</view>
		<view class="btns border" @click="toPage">{{getLang('recharge_p6')}}</view>
		<view class="tips">{{getLang('recharge_p10')}}</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import { getBalance } from '@/apis/users.js'
	import tips from '@/utils/tips.js'
	import storage from '@/utils/storage.js'
	import appConfig from '@/config/appConfig.js'
	export default {
		name: 'Recharge',
		mixins: [langMixins],
		data(){
			return{
				balance: 0,
				head_img: '',
				amount: ''
			}
		},
		methods: {
			async getBalanceHandler(){
				const res = await getBalance()
				this.balance = res.data.balance
			},
			toPage(){
				uni.navigateTo({
					url: '/pages/kefu_webview/index'
				})
			},
			async upload(){
				// #ifdef H5
				return uni.chooseImage({
				    success: (chooseImageRes) => {
				        const tempFilePaths = chooseImageRes.tempFilePaths;
						this.head_img = tempFilePaths[0]
						tips.showToast(this.getLang('common_p6'))
				   },
				})
				// #endif
				plus.nativeUI.actionSheet({
				    cancel: this.getLang('common_p7'),
				        buttons: [{  
				                title: this.getLang('common_p8')//相机国际化文字  
				            },  
				            {  
				                title: this.getLang('common_p9')//相册国际化文字  
				            }  
				        ]  
				    },  
				    async (tap) => {  
				        if (tap.index === 1) {  
				            let RearCamera = plus.camera.getCamera( 1 );  
				            RearCamera.captureImage((file)=>{  
				                this.head_img = file
				            },(err)=>{  
				                console.log(err)  
				            },{"optimize":false})  
				        } else if (tap.index === 2) {  
				            plus.gallery.pick((res)=>{  
				                this.head_img = res.files[0]  
				            },(err)=>{  
				                console.log(err)  
				            },{  
				                maximum:1,  
				                multiple:true  
				            });  
				        }  
				    })
			},
			pay(){
				if(this.amount.length === 0){
					return tips.showToast(this.getLang('recharge_p7'))
				}
				if(this.head_img.length === 0){
					return tips.showToast(this.getLang('recharge_p8'))
				}
				const token = storage.getLocalData('token')
				const url = `${appConfig.domain}/user/pay`
				tips.showLoading(this.getLang('common_p1'))
				uni.uploadFile({
				    url: url,
					header: {
						'token': token,
					},
					name: 'head_img',
					formData: {amount: this.amount},
					filePath: this.head_img,
				    success: (uploadFileRes) => {
						tips.hideLoading()
				        const res = JSON.parse(uploadFileRes.data)
						uni.navigateTo({
							url: '/pages/recharge_success/index'
						})
				    }
				})
			}
		},
		onShow(){
			this.getBalanceHandler()
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('recharge_p1')
			})
		}
	}
</script>

<style scoped>
	.recharge{
		padding: 20upx;
	}
	.card{
		padding: 20upx;
		background: #fff;
		border-radius: 20upx;
		box-shadow: 0 0 10upx 0 rgba(0,0,0,.1);
		display: flex;
		margin-bottom: 20upx;
	}
	.card .name,
	.card .value{
		width: 50%;
	}
	.card .name{
		font-weight: bold;
	}
	.card .value{
		text-align: right;
		font-size: 32upx;
		color: #0077FF;
	}
	.card2{
		flex-wrap: wrap;
	}
	.card2 .name{
		width: 100% !important;
	}
	.card .mark{
		width: 10%;
		font-size: 80upx;
	}
	.card .card_input{
		width: 90%;
		display: flex;
	}
	.card .card_input .input_bar{
		line-height: 112upx;
		height: 112upx;
		font-size: 80upx;
		font-weight: bold;
		padding-left: 20rpx;
	}
	.btns{
		border-radius: 40upx;
		background: #0077FF;
		line-height: 80upx;
		text-align: center;
		color: #fff;
		margin-top: 40upx;
	}
	.btns.border{
		line-height: 76upx;
		background: none;
		border: 1px solid #0077FF;
		color: #0077FF;
		box-sizing: border-box;
	}
	.card3{
		background: #f9f9f9;
		padding: 0;
		text-align: center;
		height: 400upx;
		line-height: 400upx;
		position: relative;
	}
	.card3 .name{
		width: 100%;
		position: absolute;
		left: 50%;
		margin-left: -50%;
		color: #aaa;
	}
	.img_bar{
		height: 400upx;
	}
	.head_img{
		width: 100%;
		height: 400upx;
	}
	.tips{
		font-size: 24upx;
		padding: 40upx 10upx;
		color: #DD524D;
	}
</style>
