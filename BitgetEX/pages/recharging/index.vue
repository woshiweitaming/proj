<template>
	<view class="wallet_class">
		<view class="order_labels">
			<view class="order" @tap="navigateTo('/pages/order_list/index?type=0')"><text class="iconfont icon-document_fill"></text>{{getLangs('order')}}</view>
		</view>
		<view class="recharge_main">
			<view class="qrcode">
				<canvas canvas-id="qrcode" style="width: 185px;height: 185px;" />
				<u-button @tap="capture" type="primary" plain size="mini">{{getLangs('saveQrcode')}}</u-button>
			</view>
			<text class="addr_title">{{getLangs('rechargeAddress')}}</text>
			<view class="addr">{{addr}}</view>
			<u-button @tap="copy" plain size="mini">{{getLangs('copy')}}</u-button>
		</view>
		<view class="title">{{getLangs('rechargeCoin')}}</view>
		<!-- <view class="currency_label">{{name}}</view> -->
		<view class="recharge_input_main">
			<input type="idcard" v-model="amount" class="input_bar" :placeholder="getLangs('numEmptyTips')" @input="checkInput"/>
		</view>
		<view class="linked_main">
			<view class="name">{{getLangs('linkname')}}</view>
			<view class="linked_list">
				<view v-show="items.val !== '' || items.name !== ''" @tap="changeChain(items.name)" :class="['linked_label', items.name === chainName ? 'on' : '']" v-for="(items, index) in chainList" :key="index">{{items.name}}</view>
			</view>
		</view>
		<view class="linked_main">
			<view class="name">{{getLangs('uploadPicture')}}</view>
			<view class="upload" @tap="upload" v-if="img === ''">
				<view class="upload_main">
					<text class="iconfont icon-add"></text>
					<text class="name">{{getLangs('uploadText')}}</text>
				</view>
			</view>
			<image class="img" v-else :src="img"></image>
		</view>
		<view class="linked_main">
			<view class="name">{{getLangs('rechargeTipsText')}}</view>
		    <view class="tips">
		    	<rich-text :nodes="getLangs('rechargeTips')"></rich-text>
		    </view>
		</view>
		<view class="form_class">
			<button @tap="submitRecharge" class="button">{{getLangs('rechargeBtn')}}</button>
		</view>
	</view>
</template>

<script>
	/**
	 * 充值完成
	 */
	import { mapMutations, mapGetters } from 'vuex'
	import appConfig from '@/config/appConfig.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import commonMixins from '@/mixins/common_mixins.js'
	import { getWalletAddr, getPayUrlAdds } from '@/api/user.js'
	import validate from '@/utils/validate.js'
	import uQRCode from '@/js_sdk/Sansnn-uQRCode/uqrcode.js'
	import h5Copy from '@/js_sdk/junyi-h5-copy/junyi-h5-copy.js'

	export default {
		name: 'Recharging',
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				addr: '',
				id: '',
				amount: '',
				name: '',
				chainList: [],
				chainName: '',
				rechareStatus: false,
				qrcode: '',
				img: ''
			}
		},
		computed: {
			...mapGetters({
				getGlobalLang: 'getGlobalLang'
			})
		},
		methods: {
			/**
			 * 获取钱包地址
			 */
			async getPayAddsHanlder(orderno){
				const params = {
					orderno: orderno
				}
				const res = await getWalletAddr(params)
				if(validate.checkCode(res)){
					this.addr = res.data
				}
			},
			/**
			 * 获取链名称
			 */
			async getPayUrlAddsHandler(){
				const params = {
					id: this.id
				}
				const res = await getPayUrlAdds(params)
				this.chainList = res.data
				this.addr = res.data[0].val
				this.chainName = res.data[0].name
				this.createQrCode()
			},
			/**
			 * 生成二维码
			 */
			createQrCode() {
				  const that = this
			      uQRCode.make({
			        canvasId: 'qrcode',
			        componentInstance: this,
			        text: that.addr,
			        size: 185,
			        margin: 10,
			        backgroundColor: '#ffffff',
			        foregroundColor: '#000000',
			        fileType: 'jpg',
			        correctLevel: uQRCode.defaults.correctLevel,
			        success: res => { 
						this.qrcode = res
					}
			      })
			},
			/**
			 * 复制
			 */
			copy(){
				let content = this.addr 
				// #ifdef APP-PLUS
				uni.setClipboardData({
					data: content
				});
				this.$tips.showToast(this.getLangs('success'))
				//#endif
				const result = h5Copy(content)
				if (result === false) {
					this.$tips.showToast('当前环境不支持')
				} else {
					this.$tips.showToast(this.getLangs('success'))
				}
			},
			/**
			* 上传凭证
			*/
			upload(){
				// uni.chooseImage({
				//     success: (chooseImageRes) => {
				//         const tempFilePaths = chooseImageRes.tempFilePaths;
				// 		this.img = tempFilePaths[0]
				// 		this.$tips.showToast(this.getLangs('success'))
				//    },
				// })
				// #ifdef H5
				return uni.chooseImage({
				    success: (chooseImageRes) => {
				        const tempFilePaths = chooseImageRes.tempFilePaths;
						this.img = tempFilePaths[0]
						this.$tips.showToast(this.getLangs('success'))
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
				                this.img = file
				            },(err)=>{  
				                console.log(err)  
				            },{"optimize":false})  
				        } else if (tap.index === 2) {  
				            plus.gallery.pick((res)=>{  
				                this.img = res.files[0]  
				            },(err)=>{  
				                console.log(err)  
				            },{  
				                maximum:1,  
				                multiple:true  
				            });  
				        }  
				    })
			},
			/**
			 * 切换链名称
			 */
			changeChain(name){
				this.chainName = name
				this.addr = this.chainList.filter(res => res.name === name)[0].val
				this.createQrCode()
			},
			/**
			 * 提交充币
			 */
			async submitRecharge(){
				if(this.amount.length === 0){
					return this.$tips.showToast(this.getLangs('numEmptyTips'))
				}
				if(this.img === ''){
					return this.$tips.showToast(this.getLangs('uploadEmptyTips'))
				}
				const that = this
				const token = this.$storage.getLocalData('token')
				const url = `${appConfig.domain}/user/pay`
				const params = {
					id: this.id,
					amount: this.amount,
					add: this.chainName
				}
				this.$tips.showLoading(this.getLangs('loadingText'))
				let ens = ''
				switch (this.getGlobalLang) {
					case 'cn' :
					    ens = 0
						break;
					case 'en' :
					    ens = 1
						break;
					case 'ja' :
					    ens = 2
						break;
					case 'ko' :
					    ens = 3
						break;
					case 'cns' :
					    ens = 4
						break;
					case 'vi' :
					    ens = 5
						break;
				}
				uni.uploadFile({
				    url: url,
					header: {
						'token': token,
						ens: ens
					},
					name: 'head_img',
					formData: params,
					filePath: this.img,
				    success: (uploadFileRes) => {
						this.$tips.hideLoading()
				        const res = JSON.parse(uploadFileRes.data)
						this.backTips(res)
						if(validate.checkCode(res)){
							setTimeout(() => {
								this.redirectTo('/pages/success_tips/index?name=recharge')
							},1500)
						}
				    }
				})
			},
			/**
			 * 保存二维码
			 */
			capture(){
				const that = this
				uni.saveImageToPhotosAlbum({  
				    filePath: that.qrcode,
				        success(){  
				            that.$tips.showToast(that.getLangs('success'))
				        },
						fail() {
							that.$tips.showToast(that.getLangs('error'))
						}
				});  
			},
			checkInput(e){
				setTimeout(() => {
					const regs = /^(\d+|\d+\.\d{0,4})$/;
					const val = e.detail.value
					if(regs.test(val)){
						this.amount = val
					}else{
						const arr = val.split('.')
						const zs = arr[0]
						const xs = arr[1]
						if(xs.length > 4){
							this.amount = zs+'.'+xs.substring(0,4)
						}else{
							this.amount = zs+'.'+xs
						}
						//this.amount = val.substring(0, val.length-1)
					}
				},20)
			}
		},
		onLoad(opt) {
			if(opt.id){
				this.id = opt.id
				// this.amount = opt.amount
				this.name = opt.name
				this.getPayUrlAddsHandler()
			}else{
				this.$tips.showToast(this.getLangs('noData'))
			}
		},
		onShow() {
			this.setTitle(this.getLangs('recharging'))
			//this.createQrCode()
		}
	}
</script>

<style scoped>
	.wallet_class{
		padding: 40upx;
		border-top: 1px solid rgba(255,255,255,.2);
		background: #151936;
	}
	.order_labels{
		text-align: right;
		color: #fff;
		width: 100%;
	}
	.wallet_class .title{
		font-size: 40upx;
		color: #aaa;
		font-weight: bold;	
	}
	.wallet_class .currency_label{
		background: #f9f9f9;
		margin-top: 20upx;
		line-height: 80upx;
		padding-left: 40upx;
		color: #0;
		font-weight: bold;
		border-radius: 10upx;
	}
	.linked_main .name{
		margin-top: 20upx;
		font-weight: bold;
		color: #aaa;
		display: block;
		line-height: 80upx;
		font-size: 32upx
	}
	.linked_main .linked_label{
		width: 160upx;
		display: inline-block;
		padding: 10upx;
		margin-right: 20upx;
		border-radius: 10upx;
		text-align: center;
		font-size: 28upx;
		color: #aaa;
	}
	.linked_main .linked_label.on{
		background: #2970e6;
		border: 1px solid #2970e6;
		color: #fff;
	}
	.recharge_main{
		background: #151936;
		padding: 40upx;
		text-align: center;
		margin-top: 40upx;
	}
	.recharge_main canvas{
		text-align: center;
		margin: 0 auto 20upx auto;
	}
	.recharge_main .btns{
		font-size: 24upx;
		background: #2970e6;
		margin-top: 20upx;
		padding: 10upx;
		border-radius: 10upx;
		text-align: center;
		width: 180upx;
		color: #fff;
	}
	.addr_title{
		font-size: 26upx;
		color: #8D9DBC;
		display: block;
		margin-top: 40upx;
		margin-bottom: 20upx;
	}
	.addr{
		display: block;
		line-height: 80upx;
		font-size: 26upx;
		color: #aaa;
		font-weight: bold;
		text-align: center;
	}
	.wallet_label{
		position: relative;
		padding-left: 90upx;
		margin-bottom: 30upx;
		padding-bottom: 30upx;
		border-bottom: 1px solid #eee;
	}
	.wallet_label .icon{
		width: 70upx;
		height: 70upx;
		border-radius: 50%;
		position: absolute;
		background: #f9f9f9;
		left: 0;
		top: 0;
		text-align: center;
		color: #343a5e;
		line-height: 50upx;
	}
	.wallet_label .icon .iconfont{
		font-size: 40upx
	}
	.wallet_label .name{
		font-size: 28upx;
		color: #72899a
	}
	.wallet_label .value{
		font-size: 32upx;
		color: #343a5e
	}
	.qrcode{
		margin-top: 10px;
	}
	.btns{
		font-size: 24upx;
		background: #343a5e;
		margin-top: 20upx;
		padding: 10upx;
		border-radius: 10upx;
		text-align: center;
		width: 180upx;
		color: #fff;
	}
	.upload_main{
		padding: 40upx;
		background: rgba(255,255,255,.1);
		box-sizing: border-box;
		width: 300upx;
		height: 300upx;
		text-align: center;
	}
	.upload_main .iconfont{
		display: block;
		line-height:140upx;
		font-size: 90upx;
		color: #c6ced3;
	}
	.upload_main .name{
		color: #c6ced3;
		font-size: 28upx;
		display: block;
		font-weight: normal;
		line-height: 0;
	}
	.tips{
		font-size: 24upx;
		color: #62759a;
	}
	.img{
		width: 300upx;
		height: 300upx;
	}
	.input_bar{
		font-size: 28upx;
		text-align: center;
		border: 1px solid rgba(255,255,255,.05);
		padding: 20upx 0;
		border-radius: 20upx;
		background: rgba(255,255,255,.05);
		color: #fff;
	}
</style>
