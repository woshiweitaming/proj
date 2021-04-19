<template>
	<view class="table">
		<view class="box">
			<view class="title">{{getLang('member_p20')}}</view>
			<view class="desc">{{getLang('member_p21')}}</view>
			<view class="title">{{getLang('member_p20')}}</view>
			<view class="tables">
				<view class="thead">
					<view class="td td1">{{getLang('member_p22')}}</view>
					<view class="td td2">{{getLang('member_p23')}}</view>
					<view class="td td3">{{getLang('member_p24')}}</view>
				</view>
				<view class="tbody">
					<view class="tr" v-for="(curItem, index) in levelList" :key="index">
						<view class="td td1">{{curItem.name}}</view>
						<view class="td td2">{{curItem.min_money}}</view>
						<view class="td td3">{{curItem.recharge_award}}%</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Table',
		mixins: [langMixins],
		props: ['levelList']
	}
</script>

<style scoped>
	.table{
		padding: 40upx;
	}
	.box{
		padding: 20upx;
		background: #ffffff;
		border-radius: 10upx;
	}
	.title{
		font-weight: bold;
		font-size: 28upx;
		margin-bottom: 20upx;
	}
	.desc{
		color: #666;
		font-size: 24upx;
		margin-bottom: 20upx;
	}
	.tables .thead{
		display: flex;
	}
	.tables .thead .td,
	.tables .tbody .td{
		width: 33.333%;
		text-align: center;
		line-height: 80upx;
		font-weight: bold;
		font-size: 24upx
	}
	.tables .thead .td.td1{
		background: #dddbde;
	}
	.tables .thead .td.td2,
	.tables .thead .td.td3{
		background: #e8e8e8;
	}
	.tables .thead .td.td2{
		border-left: 1px solid #dcdcdc;
		border-right: 1px solid #dcdcdc;
	}
	.tbody .tr{
		display: flex;
	}
	.tbody .tr .td1{
		border-left: 1px solid #dcdcdc;
	}
	.tbody .tr .td2{
		border-left: 1px solid #dcdcdc;
		border-right: 1px solid #dcdcdc;
	}
	.tbody .tr .td3{
		border-right: 1px solid #dcdcdc;
		color: #8e8f65;
	}
	.tbody .tr:nth-child(2n){
		background: #e8e8e8;
	}
</style>
