<template>
	<view class="title_bar">
		<view class="back_icon" @click="toBack">
			<image class="img" src="../../static/images/icons/back_light.png"></image>
		</view>
		<view class="title_right_text" @click="save">
		    <text>保存图片</text>
		</view>
	</view>
</template>

<script>
	import CommonMixins from '@/mixins/common_mixins.js'
	export default {
		name: 'Titlebar',
		mixins: [CommonMixins],
		data(){
			return {
			}
		},
		methods: {
			save(){
				
			}
		}
	}
</script>

<style scoped>
	.title_bar{
		padding: 0 40upx;
		background: rgba(255,255,255,.0)
	}
	.title_right_text{
		color: #fff;
	}
	.back_icon .img{
		width: 30upx;
	}
</style>
