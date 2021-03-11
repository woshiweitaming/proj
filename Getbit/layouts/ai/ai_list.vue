<template>
	<view class="card ai_card">
		<view class="main">
			<image mode="widthFix" class="icon" src="../../static/images/icons/ai/cn.png"></image>
			<view class="swiper">
				<swiper class="swiper" :vertical="true"  :autoplay="true">
				    <swiper-item v-for="(curItem, index) in aiList" :key="index">
				        <view class="swiper-item">
							<view class="labels">
								<view class="avatar">
									<image src="../../static/images/icons/ai/avatar.png" class="avatar_icon"></image>
								</view>
								<view class="info">
									<view class="name">{{curItem.name}}</view>
									<view class="value">{{curItem.unit}}X {{getActionText(curItem.action)}} {{curItem.currency}}/USDT</view>
								</view>
								<view class="ratio">
									<view class="text">盈利</view>
									<view class="data">{{curItem.ratio}}%</view>
								</view>
							</view>
						</view>
				    </swiper-item>
				 </swiper>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'AiList',
		data(){
			return {
				aiList: [
					{
						name: '51545455',
						ratio: 0.01,
						unit: 10,
						action: 0,
						currency: 'BTC'
					},
					{
						name: '51545455',
						ratio: 0.1,
						unit: 10,
						action: 0,
						currency: 'BTC'
					}
				]
			}
		},
		computed: {
			getActionText(){
				return action => {
					return action == 0 ? '买涨' : '买跌'
				}
			}
		}
	}
</script>

<style scoped>
	.main{
		width: 100%;
		padding-left: 140upx;
		position: relative;
		height: 100upx;
	}
	.icon{
		width: 100upx;
		position: absolute;
		left: 0;
	}
	.swiper{
		width: 100%;
		height: 100upx;
	}
	.avatar_icon{
		width: 90upx;
		height: 90upx;
	}
	.labels{
		display: flex;
	}
	.labels{
		padding-right: 180upx;
	}
	.labels .info{
		padding-left: 20upx;
	}
	.labels .name{
		height: 50upx;
		font-size: 24upx;
		color: #aaa;
	}
	.labels .value{
		font-size: 24upx;
	}
	.ratio{
		width: 170upx;
		background: #00AD90;
		position: absolute;
		top: 15upx;
		right: 0;
		display: flex;
		font-size: 24upx;
		color: #fff;
		box-sizing: border-box;
	}
	.ratio .text,
	.ratio .data{
		line-height: 60upx;
		width: 50%;
		text-align: center;
	}
	.ratio .text{
		background: #caf4e3;
		color: #24a771;
	}
	.ai_card{
		padding: 20upx 10upx;
	}
</style>
