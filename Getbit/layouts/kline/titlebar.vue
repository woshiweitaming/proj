<template>
	<view class="title_bar">
		<view class="back_icon" @click="toBack">
			<image class="img" src="../../static/images/icons/back_icon_light.png"></image>
		</view>
		<view class="title_text"><image @click="popupStatus = true" class="more" src="../../static/images/icons/kline/more.png"></image>{{name}}</view>
		<image src="../../static/images/icons/kline/fx1.png" class="fx"></image>
		<image @click="selected" :src="getScStatus" class="sc"></image>
		<u-popup v-model="popupStatus" mode="left" width="80%">
			<Popup />
		</u-popup>
	</view>
</template>

<script>
	import Popup from '@/components/popup/index.vue'
	import CommonMixins from '@/mixins/common_mixins.js'
	export default {
		name: 'Titlebar',
		mixins: [CommonMixins],
		props: {
			name: {
				type: String,
				default: ''
			}
		},
		components: {
			Popup
		},
		data(){
			return {
				status: false,
				popupStatus: false
			}
		},
		methods: {
			toPage(){
				uni.navigateTo({
					url: '/pages/setting/index'
				})
			},
			selected(){
				this.status = !this.status
			}
		},
		computed: {
			getScStatus(){
				return this.status ? '../../static/images/icons/kline/sc_selected.png' :  '../../static/images/icons/kline/sc1.png'
			}
		}
	}
</script>

<style scoped>
	.title_bar{ 
		padding-left: 100upx;
		background: #071724;
	}
	.back_icon{
		top: 24upx;
	}
	.title_text{
		color: #fff;
		text-align: left;
		line-height: 75upx;
	}
	.more{
		width: 40upx;
		height: 40upx;
		vertical-align: middle;
		margin-right: 20upx;
	}
	.fx,
	.sc{
		width: 50upx;
		height: 50upx;
		position: absolute;
		top: 15upx;
	}
	.fx{
		right: 160upx;
	}
	.sc{
		right: 20upx;
	}
</style>
