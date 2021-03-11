<template>
	<view class="wallet_class">
		<!-- <view class="linked_main">
			<view class="name">{{getLangs('linkname')}}</view>
			<view class="linked_list">
				<view @tap="changeChain(items)" :class="['linked_label', chainname === items ? 'on' : '']" v-for="(items, index) in chainList" :key="index">{{items}}</view>
			</view>
		</view> -->
		<view class="linked_main">
		    <view class="name">{{getLangs('currency')}}</view>
		    <view class="select" @tap.stop="stopClick">
		    	<view class="select_label" @tap="show = !show">
		    		<view class="select_name">{{typeList.length > 0 && typeList[type].pname}}</view>
		    		<text class="iconfont icon-unfold"></text>
		    	</view>
		    	<view class="select_drop" v-show="show">
		    		<view class="selelct_drop_main" @tap.stop="stopClick">
		    			<view @tap="changeDrop(items.type)" class="select_drop_label" v-for="(items, key) in typeList"  :key="key">{{items.pname}}</view>
		    		</view>
		    	</view>
		    </view>
		</view>
		<view class="linked_main">
			<view class="name">{{getLangs('walletAddress')}}</view>
			<view class="currency_label input_bars">
				<input type="text" :placeholder="getLangs('addressInputTips')" v-model="address" class="input_bar" />
			</view>
		</view>
		<view class="linked_main">
			<view class="name">{{getLangs('remark')}}</view>
			<view class="currency_label input_bars">
				<input type="text" :placeholder="getLangs('remarkInputTips')" v-model="remarks" class="input_bar" />
			</view>
		</view>
		<view class="linked_main">
			<view class="name">{{getLangs('walletQrcode')}}</view>
			<view class="upload" @tap="upload">
				<view class="upload_main" v-if="img === ''">
					<text class="iconfont icon-add"></text>
					<text class="name">{{getLangs('walletQrcode')}}</text>
				</view>
				<image class="img" :src="img" v-else></image>
			</view>
		</view>
		<view class="form_class">
			<button @tap="saveGetPayAddHandler" class="button">{{getLangs('confirm')}}</button>
		</view>
	</view>
</template>

<script>
	/**
	 * 
	 */
	import appConfig from '@/config/appConfig.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import commonMixins from '@/mixins/common_mixins.js'
	import { saveGetPayAdd, getWithdrawalTypeList  } from '@/api/user.js'
	import validate from '@/utils/validate.js'
	export default {
		name: 'Recharging',
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				addr: '',
				id: '',
				chainList: ['OMINI','ERC20','TRC20'],
				chainname: 'OMINI',
				address: '',
				remarks: '',
				img: '',
				type: 0,
				typeList: [],
				show: false,
			}
		},
		methods: {
			openDrop(){
				this.show = !this.show
			},
			changeDrop(index){
				this.type = index
				this.show = false
			},
			stopClick(e){
				e.stopPropagation()
			},
			eventClick(){
				this.show = false
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
				this.addr = res.data[this.chainId].val
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
			        foregroundColor: '#151936',
			        fileType: 'jpg',
			        correctLevel: uQRCode.defaults.correctLevel,
			        success: res => { }
			      })
			},
			/**
			* 上传凭证
			*/
			upload(){
				const that = this
				const token = this.$storage.getLocalData('token')
				const url = `${appConfig.domain}/user/pay`
				// uni.chooseImage({
				//     success: (chooseImageRes) => {
				//         const tempFilePaths = chooseImageRes.tempFilePaths;
				// 		this.img = tempFilePaths[0]
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
				this.chainname = name
			},
			/**
			 * 保存钱包
			 */
			async saveGetPayAddHandler(){
				if(this.address === ''){
					return this.$tips.showToast(this.getLangs('addressInputTips'))
				}
				// if(this.remarks === ''){
				// 	return this.$tips.showToast(this.getLangs('remarkInputTips'))
				// }
				let finalParams = {}
				const params = {
					address: this.address,
					remarks: this.remarks,
					chainname: this.chainname,
					type: this.type
				}
				if(typeof this.id != 'undefined'){
					finalParams = Object.assign(params, {id: this.id})
				}
				const res = await saveGetPayAdd(params)
				this.backTips(res)
				if(validate.checkCode(res)){
					setTimeout(() => {
						this.back()
					}, 1500)
					
				}
			},
			async getWithdrawalTypeListHandler(){
				const res = await getWithdrawalTypeList()
				this.typeList = res.list
			},
		},
		onLoad(opt) {
			if(JSON.stringify(opt) !== '{}'){
				this.id = opt.id
				this.address = opt.address
				this.remarks = opt.remarks
				this.chainname = opt.chainname
			}
		},
		onShow() {
			this.setTitle(this.getLangs('addWalletAddress'))
			this.getWithdrawalTypeListHandler()
		}
	}
</script>

<style scoped>
	.wallet_class{
		height: 100%;
		padding: 40upx;
		border-top: 1px solid rgba(255,255,255,.1);
		background: #151936;
	}
	.wallet_class .title{
		font-size: 32upx;
		color: #aaa;
		font-weight: bold;	
	}
	.wallet_class .currency_label{
		background: rgba(255,255,255,.05);
		margin-top: 20upx;
		line-height: 80upx;
		padding-left: 40upx;
		color: #fff;
		font-weight: bold;
		border-radius: 10upx;
	}
	.linked_main .name{
		margin-top: 20upx;
		font-weight: bold;
		color: #aaa;
		display: block;
		line-height: 80upx;
		font-size: 28upx
	}
	.linked_main .linked_label{
		width: 160upx;
		display: inline-block;
		padding: 10upx;
		margin-right: 20upx;
		color: #aaa;
		border-radius: 10upx;
		text-align: center;
		font-size: 28upx
	}
	.linked_main .linked_label.on{
		background: #2970e6;
		border: 1px solid #2970e6;
		color: #fff;
	}
	.recharge_main{
		background: #f9f9f9;
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
		background: #343a5e;
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
		color: #242B46;
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
	.img{
		width: 300upx;
		height: 300upx;
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
	.input_bars{
		padding: 20upx;
	}
	.input_bars .input_bar{
		font-size: 28upx;
		font-weight: normal;
	}
	.select_drop{
		z-index: 10000;
	}
</style>
