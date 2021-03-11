<template>
	<view class="page bottom_page">
		<view class="inner">
			<view class="invite_bg">
				<text class="name1">邀请好友</text>
				<text class="name2">分享成功  分享喜悦</text>
				<image mode="widthFix" src="../../static/images/icons/invite/invite_bg.png" class="invite_hd"></image>
			</view>
			<view class="invite_list">
				<view class="box" v-for="(curItem, index) in dataList" :key="index">
					<view class="wrap">
						<image mode="widthFix" class="icon" :src="`../../static/images/icons/invite/${index+1}.png`"></image>
						<view class="phone">{{curItem.phone}}</view>
						<view class="name">返佣奖励折合(USDT)</view>
						<view class="value">{{curItem.leftmoney}}</view>
					</view>
				</view>
			</view>
			<view class="my_invite">
				<view class="title">
					<view class="name">我的邀请</view>
					<view class="record" @click="toPage('/pages/my_earnings/index')">查看邀请 ></view>
				</view>
				<view class="my_invite_list">
					<view class="label" v-for="(curItem, index) in inviteList" :key="index">
						<view class="level">
							<image :src="`/static/images/icons/invite/d${index+1}.png`" class="icon"></image>
							<view class="name">已经邀请({{curItem.level}}级)</view>
							<view class="nums">{{curItem.nums}}人</view>
						</view>
					</view>
				</view>
			</view>
			<view class="my_invite">
				<view class="title">
					<view class="name">邀请码</view>
				</view>
				<view class="my_invite_list">
					<view class="label">
						<view class="level">
							<view class="invite_code">{{inviteCode}}</view>
							<view class="copy_btn">复制</view>
						</view>
					</view>
				</view>
			</view>
			<view class="bottom_btn_bar">
				<view class="box">
					<view class="buttons border">邀请好友</view>
				</view>
				<view class="box">
					<view class="buttons" @click="toPage('/pages/pop/index')">专属海报</view>
				</view>
			</view>
		</view>
		<view class="mask" v-if="status">
			<view class="pop_win">
				<view class="title">邀请返佣规则</view>
				<view class="content">
					<view>1.邀请1-5个人返佣10%</view>
					<view>2.邀请10个人返佣20%(币币交易手续费，合约交易手续费)</view>
				</view>
				<view class="pop_btn">
					<view class="buttons" @click="status = false">知道了</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Invite',
		data(){
			return {
				dataList: [
					{
						phone: '138****1214',
						leftmoney: 19.264
					},
					{
						phone: '138****1214',
						leftmoney: 19.264
					},
					{
						phone: '138****1214',
						leftmoney: 19.264
					}
				],
				inviteList: [
					{
						value: 0,
						level: '一',
						nums: 0
					},
					{
						value: 0,
						level: '二',
						nums: 0
					}
				],
				inviteCode: '121WREWds2344',
				status: false
			}
		},
		methods: {
			toPage(path){
				uni.navigateTo({
					url: path
				})
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: '邀请返佣'
			})
		},
		onNavigationBarButtonTap(e){
			this.status = true
		}
	}
</script>

<style scoped>
	.inner{
		padding: 0;
	}
	.invite_bg{
		width: 100%;
		position: relative;
		height: 400upx;
	}
	.invite_hd{
		width: 100%;
	}
	.name1{
		position: absolute;
		bottom: 200upx;
		z-index: 1;
		left: 20upx;
		color: #fff;
		font-size: 38upx;
		font-weight: bold;
	}
	.name2{
		position: absolute;
		bottom: 140upx;
		z-index: 1;
		left: 20upx;
		color: #fff;
		display: block;
		padding: 5upx 10upx;
		background: #5374ed;
		border-radius: 10upx;
	}
	.invite_list{
		width: 90%;
		border-radius: 20upx;
		background: #fff;
		position: relative;
		left: 50%;
		margin-left: -45%;
		bottom: 100upx;
		box-sizing: border-box;
		display: flex;
	}
	.invite_list .box{
		width: 33.333%;
		box-sizing: border-box;
		padding: 20upx;
	}
	.invite_list .box .icon{
		width: 80%;
		text-align: center;
		margin: auto;
		display: block;
	}
	.invite_list .box .wrap{
		width: 100%;
		padding: 10upx;
		background-image: linear-gradient(#e8e8e9, #ffffff);
		border-radius: 10upx;
	}
	.invite_list .box .wrap .phone{
		color: #aaa;
		font-size: 22upx;
		line-height: 40upx;
	}
	.invite_list .box .wrap .name{
		color: #aaa;
		font-size: 22upx;
		line-height: 40upx;
		overflow:hidden;
		white-space:nowrap;
		text-overflow:ellipsis;
	}
	.invite_list .box .wrap .value{
		text-align: center;
        font-size: 24upx;
		line-height: 40upx;
	}
	.bottom_btn_bar{
		display: flex;
		padding: 10upx;
		width: 100%;
	}
	.bottom_btn_bar .box{
		width: 100%;
		padding: 0 5upx;
	}
	.bottom_btn_bar .buttons{
		border: 1px solid #007AFF;
	}
	.bottom_btn_bar .border{
		border: 1px solid #007AFF;
		color: #007AFF;
		background: none;
	}
	.my_invite{
		padding: 20upx;
		position: relative;
		top: -80upx;
	}
	.my_invite .title{
		padding: 20upx;
		position: relative;
		display: flex;
	}
	.my_invite .name,
	.my_invite .record{
		width: 50%;
	}
	.my_invite .record{
		text-align: right;
		color: #aaa;
	}
	.my_invite_list{
		padding: 10upx 0;
	}
	.my_invite_list .label{
		width: 100%;
		padding: 20upx;
		background: #fff;
		border-radius: 20upx;
		margin-bottom: 40upx;
	}
	.my_invite_list .label .level{
		display: flex;
		line-height: 80upx;
		position: relative;
	}
	.my_invite_list .label .icon{
		width: 70upx;
		height: 70upx;
		padding-right: 20upx;
	}
	.my_invite_list .label .nums{
		position: absolute;
		right: 10upx;
		color: #007AFF;
	}
	.invite_code{
		font-weight: bold;
	}
	.copy_btn{
		position: absolute;
		height: 60upx;
		background: #eaeaea;
		font-size: 24upx;
		color: #666;
		right: 0;
		line-height: 60upx;
		top: 10upx;
		padding: 0 20upx;
		border-radius: 10upx;
	}
	.mask{
		width: 100%;
		height: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 1000;
		background: rgba(0,0,0,.8);
	}
	.pop_win{
		width: 80%;
		padding: 20upx;
		position: fixed;
		bottom: 50%;
		background: #fff;
		border-radius: 20upx;
		left: 50%;
		margin-left: -40%;
	}
	.pop_win .title{
		text-align: center;
		font-weight: bold;
		color: #333;
		line-height: 80upx;
		margin-bottom: 40upx;
	}
	.pop_win .content{
		color: #666;
		text-align: center;
		font-size: 28upx;
		margin-bottom: 40upx;
	}
	.pop_win .pop_btn{
		padding: 0 20%;
	}
</style>
