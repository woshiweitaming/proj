<template>
	<view class="product">
		<view class="product_label">
			<view class="uni-padding-wrap">
			    <view class="page-section swiper">
			        <view class="page-section-spacing">
			            <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			                <swiper-item v-for="(curItem, index) in recommondList" :key="index">
			                    <view class="box">
									<view class="name">{{curItem.name}}</view>
									<view class="profit">{{curItem.profit}}<text class="sub" style="color: #927c53;">{{curItem.detail}}</text></view>
									<view class="tag">
										<u-tag :text="el" v-for="(el, idx) in curItem.tag.split(',')" size="mini" type="warning" :key="idx" />
									</view>
									<view class="btns">{{getLang('home_p30')}}</view>
								</view>
			                </swiper-item>
			            </swiper>
			         </view>
			    </view>
			</view>
		</view>
		<view class="product_label" @click="toPage()" v-for="(curItem, index) in productList" :key="index">
			<view class="name">{{curItem.name}} <text class="sub">| {{curItem.sub}}</text></view>
			<view class="profit">{{curItem.profit}}%<text class="sub">{{curItem.detail}}</text></view>
			<view class="tag">
				<u-tag :text="el" v-for="(el, idx) in curItem.tag.split(',')" size="mini" type="primary" :key="idx" />
			</view>
			<u-icon name="arrow-right" class="arrow_right" color="#999" size="28"></u-icon>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Product',
		mixins: [langMixins],
		data(){
			return {
				background: ['color1', 'color2', 'color3'],
                indicatorDots: true,
                autoplay: true,
                interval: 2000,
                duration: 500,
				recommondList: [
					{
						name: '智能组合',
						tag: '波动低, 有底线, 长期收益高',
						profit: '6.87%～11.58%',
						id: 1,
						detail: '预期年化收益率'
					},
				],
				productList: [
					{
						name: '稳健组合',
						sub: '无惧黑天鹅，安心增值必备',
						tag: '优秀固收+, 更先进的量化算法',
						profit: 7.13,
						id: 1,
						detail: '过去两年年化收益率'
					},
					{
						name: '稳健组合',
						sub: '无惧黑天鹅，安心增值必备',
						tag: '优秀固收+, 更先进的量化算法',
						profit: 7.13,
						id: 2,
						detail: '过去两年年化收益率'
					}
				]
			}
		},
		methods: {
			toPage(){
				uni.navigateTo({
					url: '/pages/product/index'
				})
			}
		}
	}
</script>

<style scoped>
	.arrow_right{
		position: absolute;
		right: 20upx;
		top: 80upx;
	}
	.box{
		background: url('/static/images/home/product_bg.png');
		height: 100%;
		padding: 20upx;
		background-size: cover;
		border-radius: 20upx;
	}
	.btns{
		width: 240upx;
		margin-top: 20upx;
		background: #e5c298;
		border-radius: 60upx;
		text-align: center;
		line-height: 60upx;
		color: #fff;
	}
</style>
