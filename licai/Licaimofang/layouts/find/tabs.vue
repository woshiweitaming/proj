<template>
	<view class="tabs">
		<scroll-view :scroll-x="true" class="scroll-x" >
			<view class="tabs_main">
				<view class="labels" @click="changeTab(curItem)" v-for="(curItem, index) in columnList" :key="index">
					<image class="icon" :src="getImg(curItem.cid)" mode="widthFix"></image>
					<view class="name">{{curItem.column_name}}</view>
				</view>
			</view>
		</scroll-view>
		<view class="more" @click="all">
			<image class="icon" src="/static/images/find/icons/all.png" mode="widthFix"></image>
			<view class="name">{{getLang('find_p22')}}</view>
		</view>
		<view class="more_bg">
			<image src="/static/images/find/blur.png" class="more_bg_img"></image>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Tabs',
		mixins: [langMixins],
		props: ['columnList'],
		methods: {
			changeTab(tab){
				this.$emit('callback', tab)
			},
			all(){
				this.$emit('allCallback')
			}
		},
		computed: {
			getImg(cid){
				return cid => {
					return `/static/images/find/icons/${cid}.png`
				}
			}
		}
	}
</script>

<style scoped>
	.tabs{
		padding: 20upx 140upx 20upx 10px;
		position: relative;
		background: #fff;
		height: 160upx;
	}
	.tabs .labels{
		width: 22%;
		text-align: center;
		display: inline-block;
		white-space: nowrap;
	}
	.tabs .icon{
		width: 80upx;
	}
	.tabs .name{
		font-size: 26upx
	}
	.tabs_main{
		white-space: nowrap;
	}
	.more{
		width: 130upx;
		position: absolute;
		right: 0;
		top: 20upx;
		text-align: center;
		z-index: 2;
	}
	.more_bg{
		width: 60upx;
		position: absolute;
		right: 100upx;
		top: 0;
		height: 130upx;
		z-index: 1;
	}
	.more_bg .more_bg_img{
		width: 80upx;
		height: 160upx;
	}
</style>
