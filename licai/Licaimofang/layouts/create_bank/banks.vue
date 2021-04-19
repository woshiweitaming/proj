<template>
	<view class="banks">
		<view class="title">{{getLang('createbank_p30')}}</view>
		<view class="list">
			<scroll-view :scroll-y="true" style="height: 100%;">
				<view class="labels" @click="selected(index)" v-for="(curItem, index) in banks" :key="index">
					<image class="icon" :src="curItem.bg" mode="widthFix"></image>
					<view class="name">{{index}}</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	const banks = require('../../datas/banks.json')
	export default {
		name: 'Banks',
		mixins: [langMixins],
		data(){
			return {
				banks: banks
			}
		},
		methods: {
			selected(name){
				this.$emit('callback', name)
			}
		}
	}
</script>

<style scoped>
	.banks{
		height: 100%;
		width: 100%;
	}
	.title{
		text-align: center;
		line-height: 80upx;
	}
	.list{
		height: calc(100% - 80upx);
		overflow: auto;
	}
	.list .labels{
		display: flex;
		padding: 20upx;
		border-bottom: 1px solid #eee;
	}
	.list .labels .name{
		text-align: center;
		line-height: 60upx;
		vertical-align: top;
	}
	.icon{
		width: 60upx;
	}
	.scroll{
		height: 100%;
		overflow: auto;
	}
</style>
