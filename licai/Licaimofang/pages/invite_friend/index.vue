<template>
	<view class="invite_friend">
		<view class="bottom">
			<view class="btns" @click="create">{{getLang('invite_friend_p2')}}</view>
		</view>
		<view class="dialog" v-if="show">
			<view class="dialog_main">
				<view class="dialog_content">
					<image class="poster" :src="posterUrl" mode=""></image>
					<image src="../../static/images/icon/popup-close.png" @click="close" class="close"></image>
					<view class="bottom">
						<view class="btns" @click="save">{{getLang('invite_friend_p3')}}</view>
					</view>
				</view>
			</view>
		</view>
		<lyz-canvas class="hideCanvas" :isRenderImage="true" style="margin: 30rpx auto;width: 690rpx;height: 934rpx;" :board="base" @success="getImg" @fail="fail"></lyz-canvas>
		<canvas class="hideCanvas" canvas-id="qrcode" style="width: 185px;height: 185px;" />
	</view>
</template>

<script>
	import lyzCanvas from "@/components/lyz-canvas/lyz-canvas.vue"
	import uQRCode from '@/js_sdk/Sansnn-uQRCode/uqrcode.js'
	import langMixins from '@/mixins/lang_mixins.js'
	import tips from '@/utils/tips.js'
	export default {
		name: 'InviteFriend',
		mixins: [langMixins],
		components: {
			lyzCanvas
		},
		data(){
			return {
				show: false,
				posterUrl: '',
				base: {
				},
				qrcode: '',
				addr: 'https'
			}
		},
		methods: {
			toBack(){
				uni.navigateBack()
			},
			async create(){
				this.show = true
			},
			getImg(e) {
				this.posterUrl = e
			},
			fail(e) {
				console.log('绘制失败----' + JSON.stringify(e))
			},
			async save(){
				const that = this
				uni.saveImageToPhotosAlbum({
					filePath: that.posterUrl,
					success(res) {
						tips.showToast(that.getLang('common_p6'))
						that.show = false
					}
				})
			},
			close(){
				this.show = false
			},
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
						this.createPoster()
					}
			      })
			},
			createPoster(){
				const height = uni.getSystemInfoSync().screenHeight
				const width = uni.getSystemInfoSync().screenWidth
				const left = width / 2 - 75
				const top = height / 2 - 100
				this.base = {
					width: width + 'rpx',
					height: height + 'rpx',
					views: [
						{
							"type": "image",
							"url": "../../static/images/invite/invite_bg.jpg",
							"css": {
								"width": width + 'rpx',
								"height": height + 'rpx',
								"top": "0",
								"left": "0",
								"rotate": "0",
								"radius": "3%",
								"borderWidth": "",
								"borderColor": "#000000",
								"shadow": ""
							}
						},
						{
							"type": "image",
							"url": this.qrcode,
							"css": {
								"width": '150rpx',
								"height": '150rpx',
								"top": top + 'rpx',
								"left": left + 'rpx',
								"rotate": "0",
								"borderWidth": "",
								"borderColor": "#000000",
								"shadow": ""
							}
						},
					]
				}
			}
		},
		onShow(){
			this.createQrCode()
		},
		onLoad(){
			uni.setNavigationBarTitle({
				title: this.getLang('invite_friend_p1')
			})
		}
	}
</script>
<style>
	page{
		height: 100%;
	}
</style>
<style scoped>
	.bottom{
		width: 100%;
		height: 120upx;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 1;
	}
	.btns{
		width: 60%;
		height: 80upx;
		border-radius: 40upx;
		text-align: center;
		line-height: 80upx;
		background: #0077FF;
		color: #fff;
		margin: auto;
	}
	.dialog{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2;
		background: rgba(0,0,0,.5);
	}
	.dialog_main{
		width: 90%;
		height: 80%;
		background: #fff;
		border-radius: 40upx;
		position: fixed;
        top: 200upx;
		left: 50%;
		margin-left: -45%;
		z-index: 3;
	}
	.dialog_content{
		width: 100%;
		height: 100%;
		position: relative;
		padding: 20upx;
		border-radius: 20upx;
	}
	.dialog_content .poster{
		width: 100%;
		height: 100%;
	}
	.dialog_content .bottom{
		position: absolute !important;
		bottom: 20upx;
	}
	.dialog_content .bottom .btns{
		background: #fff;
		color: #333;
		box-shadow: 0 0 10upx 0 rgba(0,0,0,.5);
	}
	.close{
		width: 70upx;
		height: 100upx;
		position: absolute;
		right: 0;
		top: -100upx;
	}
	.hideCanvasView {
		position: relative;
		height: 100vh;
		width: 100vh;
	}
	.hideCanvas {
		position: fixed;
		top: -99999upx;
		left: -99999upx;
		z-index: -99999;
	}
</style>
