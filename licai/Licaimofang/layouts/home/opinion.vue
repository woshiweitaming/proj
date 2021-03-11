<template>
	<view class="opinion">
		<view class="title">{{getLang('home_p5')}}</view>
		<view class="swiper_bar">
			<swiper class="swiper" height :indicator-dots="indicatorDots" :autoplay="autoplay">
			    <swiper-item v-for="(curItem, index) in dataList" :key="index">
			        <view class="swiper-item">
						<view class="label">
							<view class="box">
								<image class="avatar" mode="widthFix" :src="curItem.avatar"></image>
							</view>
							<view class="box">
								<view class="username">{{curItem.username}}</view>
								<view class="info">{{curItem.date}}通过{{curItem.platform}}留言</view>
							</view>
						</view>
						<view class="label">
							<view class="desc">{{curItem.desc}}</view>
						</view>
						<view class="label like_bar">
							<view class="like">
								<u-icon name="thumb-up" color="#2979ff" size="28"></u-icon>
								{{curItem.like}}
							</view>
						</view>
					</view>
			    </swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Opinion',
		mixins: [langMixins],
		data(){
			return {
				indicatorDots: false,
				autoplay: false,
				dataList: [
					{
						avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlglxXQjNgrw7eQU5a8KVyjf6fhA4X1KhGQA&usqp=CAU',
						username: '马入空门',
						date: '2020-08-04',
						platform: '微信公众号',
						desc: '凡是大手大脚方式就是放手就放手就放手副教授',
						like: 3696
					},
					{
						avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlglxXQjNgrw7eQU5a8KVyjf6fhA4X1KhGQA&usqp=CAU',
						username: '马入空门',
						date: '2020-08-04',
						platform: '微信公众号',
						desc: '凡是大手大脚方式就是放手就放手就放手副教授',
						like: 3696
					}
				]
			}
		}
	}
</script>

<style scoped>
	.swiper_bar{
		height: 400upx;
	}
	.swiper{
		height: 100%;
	}
	.opinion{
		padding: 20upx;
	}
	.opinion .title{
		font-size: 32upx;
		font-weight: bold;
		margin-bottom: 20upx;
	}
	.swiper-item{
		display: flex;
		background: #fff;
		padding: 20upx;
		border-radius: 20upx;
		flex-direction: column;
	}
	.label{
		display: flex;
		flex-direction: row;
	}
	.box{
		display: flex;
		flex-direction: column;
	}
	.avatar{
		width: 80upx;
		border-radius: 50%;
	}
	.username{
		padding-left: 20upx;
		font-weight: bold;
	}
	.info{
		font-size: 24upx;
		color: #999;
		padding-left: 20upx
	}
	.desc{
		font-size: 24upx;
		margin-top: 20upx;
		min-height: 160upx;
	}
	.like_bar{
		justify-content: flex-end
	}
	.like{
		color: #2979ff;
		padding: 5upx 10upx;
		background: #e5f2fc;
		font-size: 24upx;
		margin-top: 20upx;
		border-radius: 5upx;
	}
</style>
