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
		font-size: 26upx;
		width: 33.3333%;
	}
	.labels:first-child{
		padding-left: 20upx;
	}
	.labels:nth-child(2){
		text-align: center;
	}
	.labels:last-child{
		padding-right: 20upx;
		text-align: right;
	}
</style>
