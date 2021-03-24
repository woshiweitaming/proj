<template>
	<view class="menu">
		<view class="labels" v-for="(curItem, index) in menuList" :key="index">{{getLang(curItem)}}</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Menu',
		mixins: [langMixins],
		data(){
			return {
				menuList: ['my_investment_p2', 'my_investment_p3', 'my_investment_p4']
			}
		}
	}
</script>

<style scoped>
	.menu{
		display: flex;
		border-bottom: 1px solid #eee;
	}
	.menu .labels{
		line-height: 80upx;
		color: #aaa;
		font-size: 26upx
	}
	.labels:first-child{
		width: 50%;
		padding-left: 20upx;
	}
	.labels:nth-child(2){
		width: 30%;
	}
	.labels:last-child{
		width: 20%;
		padding-right: 20upx;
		text-align: right;
	}
</style>
