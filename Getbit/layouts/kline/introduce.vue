<template>
	<view class="introduce">
		<view class="title">{{result.coin_name}}</view>
		<view class="details">
			<view class="labels">
				<view class="name">发行时间</view>
				<view class="value">{{format(parseInt(result.issuetime))}}</view>
			</view>
			<view class="labels">
				<view class="name">发行总量</view>
				<view class="value">{{result.issue_total}}</view>
			</view>
			<view class="labels">
				<view class="name">流通总量</view>
				<view class="value">{{result.circulate_total}}</view>
			</view>
			<view class="labels">
				<view class="name">官网</view>
				<view class="value">{{result.address}}</view>
			</view>
			<view class="labels">
				<view class="name">众筹价格</view>
				<view class="value">{{result.issueprice}}</view>
			</view>
			<view class="labels">
				<view class="name">白皮书</view>
				<view class="value">{{result.whitepaper}}</view>
			</view>
			<view class="labels">
				<view class="name">区块查询</view>
				<view class="value">https://bitcoin.org/bitcoin.pdf</view>
			</view>
		</view>
		<view class="title">介绍</view>
		<view class="content">
			<rich-text :nodes="result.content"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Introduce',
		props: {
			result: {
				type: Object,
			}
		},
		methods: {
			add0(m){
				return m<10?'0'+m:m
			},
			format(ts){
				if(typeof ts == 'undefined') return ''
			    var time = new Date(ts * 1000);
			    var y = time.getFullYear();
			    var m = time.getMonth()+1;
			    var d = time.getDate();
			    var h = time.getHours();
			    var mm = time.getMinutes();
			    var s = time.getSeconds();
			    return y+'-'+this.add0(m)+'-'+this.add0(d)
			}
		}
	}
</script>

<style scoped>
	.introduce{
		padding: 20upx;
	}
	.title{
		font-size: 34upx;
		color: #fff;
		margin-bottom: 40upx;
	}
	.labels{
		display: flex;
		color: rgba(255,255,255,.6);
	}
	.labels .name{
		width: 30%;
	}
	.labels .value{
		width: 70%;
		text-align: right;
		line-height: 80upx;
	}
	.content{
		color: rgba(255,255,255,.6);
		font-size: 24upx;
	}
</style>
