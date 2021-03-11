<template>
	<view class="title_bar">
		<view class="back_icon" @click="toBack">
			<image class="img" src="../../static/images/icons/back_icon.png"></image>
		</view>
		<view class="search_input">
			<image class="search_icon" src="../../static/images/icons/search_icon.png"></image>
			<u-input v-model="search" type="text" placeholder="搜索" :custom-style="createStyle" ></u-input>
		</view>
		<view class="search_text" @click="searchHanlder">
		    <text>搜索</text>
		</view>
	</view>
</template>

<script>
	import CommonMixins from '@/mixins/common_mixins.js'
	export default {
		name: 'Titlebar',
		mixins: [CommonMixins],
		props: {
			keywords: {
				type: String,
				default: ''
			}
		},
		data(){
			return {
				createStyle: {
					'background': '#fff',
					'border-radius': '20upx',
					'padding-left': '10upx'
				},
				search: ''
			}
		},
		methods: {
			searchHanlder(val){
				this.$emit('callback', this.search)
			}
		}
	}
</script>

<style scoped>
	.title_bar{
		padding: 8upx 120upx;
		background: #fff;
		border-bottom: 1px solid #eee;
	}
	.search_text{
		position: absolute;
		right: 20upx;
		top: 20upx;
		color: #007AFF;
	}
	.search_input{
		background: #fff;
		border-radius: 10upx;
		padding-left: 60upx;
		position: relative;
		border: 1px solid #eee;
	}
	.search_icon{
		width: 35upx;
		height: 35upx;
		position: absolute;
		left: 20upx;
		top: 18upx;
	}
</style>
