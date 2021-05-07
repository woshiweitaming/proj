<template>
	<view :class="['topbar',isBackground ? 'bg1' : 'bg2', createOSClass, theme]" :style="{background: background}">
		<view v-if="backBtn">
			<image @tap="customBack" v-if="theme === 'white'" class="arrow" src="../../static/images/left_arrow.png"></image>
			<image @tap="back" v-if="theme === 'black'" class="arrow" src="../../static/images/left_arrow_d.png"></image>
		</view>
	    {{getLangs(title)}}
		<text class="iconfont uni-btn-icon"></text>
	</view>
</template>

<script>
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Header',
		mixins: [commonMixins, langsMixins],
		props: {
			title: {
				type: String
			},
			isBackground: {
				type: Boolean
			},
			theme: {
				type: String
			},
			background: {
				type: String
			},
			backBtn: {
				type: Boolean,
				default: true
			}
		}
	}
</script>

<style scoped>
	.topbar{
		text-align: center;
		font-size: 36upx;
		font-weight: bold;
		height: calc(var(--status-bar-height) + 88upx);
		z-index: 20000000;
		top: 0;
		padding-top: var(--status-bar-height);
		line-height: 78upx;
	}
	.topbar.white{
		color: #fff;
	}
	.topbar.bg2{
		background: none !important;
		border-bottom: none;
	}
	.topbar .arrow{
		width: 20upx;
		height: 40upx;
		position: fixed;
		left: 30upx;
		z-index: 20000001;
		top: calc(var(--status-bar-height) + 20upx)
	}
</style>
