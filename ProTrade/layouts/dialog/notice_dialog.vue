<template>
	<view>
		<view class="notice_class" v-if="value">
			<view class="notice_wrap zoom">
				<view class="notice_title">{{title}}<image @tap="closeHandler" class="close" src="/static/images/close.png"></image></view>
				<view class="content">
					<rich-text :nodes="content"></rich-text>
				</view>
				<view @tap="toHandler" class="notice_btn">{{getLangs('confirm')}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 通知弹窗
	 */
	import langsMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'NoticeDialog',
		mixins: [langsMixins],
		props: {
			value: {
				type: Boolean,
				default: false
			},
			title: {
				type: String,
				default: 'announcement'
			},
			content: {
				type: String,
				default: ''
			}
		},
		methods: {
			closeHandler(){
				this.$emit('close')
			},
			toHandler(){
				uni.navigateTo({
					url: '/pages/notice/index'
				})
			}
		}
	}
</script>

<style scoped>
	.notice_class{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		background: rgba(0,0,0,.8);
		width: 100%;
		height: 100%
	}
	.notice_wrap{
		width: 80%;
		height: 40%;
		position: fixed;
		top: 20%;
		left: 50%;
		margin-left: -40%;
		z-index: 101;
		background: #fff;
		border-radius: 20upx;
	}
	.notice_wrap .notice_title{
		display: block;
		line-height: 80upx;
		height: 80upx;
		text-align: center;
		background: #5280e4;
		border-radius: 20upx 20upx 0 0;
		color: #fff;
		position: relative;
	}
	.notice_wrap .content{
		padding: 20upx;
		height: calc(100% - 160upx);
		box-sizing: border-box;
		overflow: auto;
	}
	.notice_wrap .close{
		position: absolute;
		width: 60upx;
		height: 60upx;
		z-index: 101;
		right: 10upx;
		top: 10upx;
	}
	.notice_btn{
		width: 100%;
		height: 80upx;
		background: #5280e4;
		border-radius: 0 0 20upx 20upx;
		text-align: center;
		line-height: 80upx;
		color: #fff;
	}
</style>
