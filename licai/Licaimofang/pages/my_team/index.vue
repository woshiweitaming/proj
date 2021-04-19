<template>
	<view class="my_team">
		<view class="card">
			<view class="labels">
				<view class="value">¥ <text class="money">0</text></view>
				<view class="name">{{getLang('my_team_p2')}}</view>
			</view>
			<view class="labels">
				<view class="value">¥ <text class="money">0</text></view>
				<view class="name">{{getLang('my_team_p3')}}</view>
			</view>
		</view>
		<view class="tables">
			<view class="thead">
				<view class="td">{{getLang('my_team_p4')}}</view>
				<view class="td">{{getLang('my_team_p5')}}</view>
				<view class="td">{{getLang('my_team_p6')}}</view>
				<view class="td">{{getLang('my_team_p7')}}</view>
				<view class="td">{{getLang('my_team_p8')}}</view>
			</view>
			<view class="tbody">
				<view class="tr">
					<view class="td">一{{getLang('my_team_p9')}}</view>
					<view class="td">¥ 0</view>
					<view class="td">1{{getLang('my_team_p10')}}</view>
					<view class="td">70%</view>
					<view class="td">¥ 0</view>
				</view>
			</view>
		</view>
		<view class="my_under">
			<view class="title">{{getLang('my_team_p11')}}</view>
			<view class="list">
				<view class="labels">
					<view class="box">
						<view class="avatar"></view>
					</view>
					<view class="box">
						<view class="phone">199****1233</view>
						<view class="date">2021-04-17</view>
					</view>
					<view class="box">
						<view class="btns">{{getLang('my_team_p12')}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'MyTeam',
		mixins: [langMixins],
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('my_team_p1')
			})
		}
	}
</script>

<style scoped>
	.card{
		padding: 40upx;
		display: flex;
		border-top: 1px solid #eee;
		border-bottom: 1px solid #eee;
		background: #fff;
	}
	.card .labels{
		width: 50%;
		text-align: center;
	}
	.card .labels .name{
		color: #666;
		font-size: 26upx
	}
	.card .labels .money{
		font-size: 50upx;
		padding-left: 10upx;
		font-weight: bold;
	}
	.tables{
		margin-top: 20upx;
		background: #fff;
		border-top: 1px solid #eee;
		border-bottom: 1px solid #eee;
	}
	.tables .thead,
	.tables .tbody .tr{
		display: flex;
		border-bottom: 1px solid #eee;
	}
	.tables .thead .td,
	.tables .tbody .tr .td{
		width: 20%;
		text-align: center;
		color: #666;
		font-size: 24upx;
		line-height: 80upx;
	}
	.tables .tbody .tr:last-child{
		border-bottom: none;
	}
	.my_under{
		margin-top: 20upx;
		border-top: 1px solid #eee;
		border-bottom: 1px solid #eee;
		background: #fff;
	}
	.my_under .title{
		text-align: center;
		line-height: 80upx;
		font-weight: bold;
		border-bottom: 1px solid #f9f9f9
	}
	.my_under .list{
		padding: 20upx;
	}
	.my_under .list .labels{
		display: flex;
	}
	.my_under .list .labels .box{
	}
	.my_under .list .labels .box:nth-child(1){
		width: 25%;
		text-align: center;
	}
	.my_under .list .labels .box:nth-child(2){
		width: 50%;
		text-align: left
	}
	.my_under .list .labels .box:nth-child(3){
		width: 25%;
		text-align: right
	}
	.my_under .list .labels .box .btns{
		padding: 10upx;
		background: #0077FF;
		border-radius: 10upx;
		text-align: center;
		color: #fff;
		font-size: 24upx
	}
	.my_under .list .labels .box .date{
		font-size: 24upx;
		color: #999;
	}
</style>
