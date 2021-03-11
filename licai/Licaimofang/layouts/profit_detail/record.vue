<template>
	<view class="record">
		<view class="record_menu">
			<view @click="changeMenu(index)" :class="['labels', index == cur ? 'on' : '']" v-for="(curItem, index) in menuList" :key="index">{{getLang(curItem)}}</view>
		</view>
		<view class="table">
			<view class="table_main">
				<view class="title">{{getLang('profit_p4')}}</view>
				<view class="tables">
					<view class="thead">
						<view class="td td1">{{getLang('profit_p5')}}</view>
						<view class="td td1">{{getLang('profit_p6')}}</view>
						<view class="td td2">{{getLang('profit_p7')}}</view>
					</view>
					<view class="tbody">
						<view class="tr">
							<view class="td td1">{{getLang('profit_p8')}}</view>
							<view class="td td2">{{getLang('profit_p9')}}</view>
						</view>
						<view class="tr">
							<view class="td td1">{{getLang('profit_p10')}}</view>
							<view class="td td2">{{getLang('profit_p11')}}</view>
						</view>
						<view class="detail">{{getLang('profit_p12')}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="info">
			<u-divider>{{getLang('profit_p13')}}</u-divider>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'ProfitDetailRecord',
		mixins: [langMixins],
		data(){
			return {
				menuList: ['profit_p2', 'profit_p3'],
				cur: 0
			}
		},
		methods: {
			changeMenu(index){
				this.cur = index
			}
		}
	}
</script>

<style scoped>
	.record_menu{
		display: flex;
	}
	.record_menu .labels{
		font-size: 28upx;
		text-align: center;
		width: 50%;
		line-height: 60upx;
		border-bottom: 1px solid #eee;
		color: #666;
	}
	.record_menu .labels.on{
		color: #007AFF;
		border-bottom: 2px solid #007AFF;
	}
	.table{
		padding: 20upx;
	}
	.table_main{
		padding: 20upx;
		background: #fff;
		border-radius: 10upx;
		border: 1px solid #eee;
	}
	.title{
		text-align: center;
		font-size: 26upx
	}
	.tables{
		margin-top: 20upx;
		font-size: 24upx
	}
	.thead{
		display: flex;
		border: 1px solid #eee;
		background: #d2e5fb;
	}
	.thead .td{
		text-align: center;
		line-height: 60upx;
	}
	.thead .td1{
		width: 35%;
	}
	.thead .td2{
		width: 30%;
	}
	.tbody{
		position: relative;
	}
	.tbody .tr{
		display: flex;
	}
	.tbody .td{
		width: 35%;
		text-align: center;
		line-height: 100upx;
		border-bottom: 1px solid #eee;
	}
	.detail{
		position: absolute;
		right: 0;
		width: 30%;
		top: -1px;
		border: 1px solid #eee;
		height: 206upx;
		box-sizing: border-box;
		padding: 10upx;
	}
	.tbody .td1{
		border-left: 1px solid #eee;
	}
	.tbody .td2{
		border-left: 1px solid #eee;
	}
	.info{
		padding: 20upx;
		background: #fff;
	}
</style>
