<template>
	<view class="share_class">
		<view class="qrcode_share">{{getLangs('sp2')}}</view>
		<view class="qrcode">
			<canvas canvas-id="qrcode" class="qrcode_img">
				<image v-if="show" class="logo" src="../../static/images/login_logo.png"></image>
			</canvas>
		</view>
		<view class="qrcode_btn">
			<view class="btn" @tap="save">{{getLangs('sp4')}}</view>
		</view>
		<view class="qrcode_share">{{getLangs('sp5')}}</view>
		<view class="qrcode_inputbar">{{url}}</view>
		<text class="copy" @tap="copy">{{getLangs('sp7')}}</text>
		<view class="invite">
			<text class="p">{{getLangs('sp6')}}</text>
			<text class="p">{{code}}</text>
		</view>
	</view>
</template>

<script>
	import langsMixins from '@/mixins/lang_mixins.js'
	import commonMixins from '@/mixins/common_mixins.js'
	import uQRCode from '@/js_sdk/Sansnn-uQRCode/uqrcode.js'
	import h5Copy from '@/js_sdk/junyi-h5-copy/junyi-h5-copy.js'
	import { getTgUrl } from '@/api/user.js'
	export default {
		name: 'Share',
		mixins: [langsMixins, commonMixins],
		data(){
			return {
				code: '',
				url: '',
				show: false,
				cansWidth: 150, //海报宽度
				cansHeight: 150, //海报高度
			}
		},
		methods: {
			async getTgUrlHandler(){
				const res = await getTgUrl()
				this.url = res.data.url
				this.code = this.url.split('?')[1].split('=')[1]
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
			        text: that.url,
			        size: 150,
			        margin: 10,
			        backgroundColor: '#ffffff',
			        foregroundColor: '#000000',
			        fileType: 'jpg',
			        correctLevel: uQRCode.defaults.correctLevel,
			        success: res => { 
						this.qrcode = res
						this.show = true
					}
			      })
			},
			/**
			 * 复制
			 */
			copy(){
				let content = this.url
				// #ifdef H5
				const result = h5Copy(content)
				if (result === false) {
					this.$tips.showToast('当前环境不支持')
				} else {
					this.$tips.showToast(this.getLangs('success'))
				}
				//#endif
				uni.setClipboardData({
					data: content
				});
				this.$tips.showToast(this.getLangs('success'))
			},
			async save(){
				let tempRatio = 1.5;
				const that = this
				// #ifdef H5 || APP-PLUS
				tempRatio = 1;
				// #endif
				
				uni.canvasToTempFilePath({
				  x: 0,
				  y: 0,
				  width:that.cansWidth*tempRatio,
				  height:that.cansHeight*tempRatio,
				  destWidth:that.cansWidth*tempRatio*2,
				  destHeight:that.cansHeight*tempRatio*2,
				  canvasId:'qrcode',
				  success: function(res){
					uni.hideLoading()
					uni.saveImageToPhotosAlbum({
						filePath: res.tempFilePath,
						success: function (red) {
							that.$tips.showToast(that.getLangs('success'))
							that.imgsrc=res.tempFilePath
						},
					  fail(res) {
						if(res.errMsg == "saveImageToPhotosAlbum:fail auth deny") {
							uni.showModal({
								title: that.getLangs('authp1'),
								success(res) {
									if(res.confirm){
										uni.openSetting({
											success(res) {
											
											},
											fail(res) {
												console.log(res)
											}
										})
									}
								}
							})
						}
					  }
					});
				  },
				  fail(res) {
					  uni.hideLoading()
				  }
				},this)
			}
		},
		onShow(){
			this.setTitle(this.getLangs('sp1'))
			this.getTgUrlHandler()
		}
	}
</script>

<style scoped>
	.share_class{
		padding: 20upx;
	}
	.qrcode_share{
		color: #aaa;
		text-align: center;
		line-height: 100upx;
		font-size: 32upx
	}
	.qrcode{
		width: 100%;
		text-align: center;
		position: relative;
		z-index: 1;
	}
	.qrcode_btn{
		margin-top: 40upx;
		margin-bottom: 40upx;
	}
	.qrcode_btn .btn{
		width: 40%;
		margin: 20upx auto;
		text-align: center;
		border: #4493f5 2px solid;
		line-height: 80upx;
		border-radius: 40upx;
		color: #4493f5;
	}
	.qrcode_inputbar{
		width: 90%;
		line-height: 70upx;
		color: #aaa;
		text-align: center;
		font-weight: bold;
		border-radius: 20upx;
		background: rgba(255,255,255,.1);
		margin: auto;
		position: relative;
		padding: 0 20upx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space:nowrap;
	}
	.copy{
		color: #007AFF;
		margin-top: 20upx;
		text-align: center;
		display: block;
	}
	.invite{
		text-align: center;
		margin-top: 60upx;
	}
	.invite .p{
		display: block;
		line-height: 60upx;
		color: #aaa;
		font-weight: bold;
	}
	.logo{
		width: 50px;
		height: 50px;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -25px;
		margin-top: -25px;
		z-index: 2;
	}
	.qrcode_img{
		width: 150px;
		height: 150px;
		display: inline-block;
		position: relative;
	}
</style>
