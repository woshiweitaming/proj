<template>
	<view class="product">
		<view class="product_label" v-if="recommondList.length > 0">
			<view class="uni-padding-wrap">
			    <view class="page-section swiper">
			        <view class="page-section-spacing">
			            <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			                <swiper-item v-for="(curItem, index) in recommondList" :key="index">
			                    <view class="box">
									<view class="name">{{curItem.pro_name}}</view>
									<view class="profit">{{curItem.year_income}}<text class="sub"style="color: #927c53;">{{curItem.describe_text}}</text></view>
									<view class="tag">
										<u-tag :text="el" v-for="(el, idx) in curItem.label" type="warning" :key="idx" />
									</view>
									<view class="btns" @click="toPage(curItem)">{{getLang('home_p30')}}</view>
								</view>
			                </swiper-item>
			            </swiper>
			         </view>
			    </view>
			</view>
		</view>
		<view class="product_label" @click="toPage(curItem)" v-for="(curItem, index) in productList" :key="index">
			<view class="name">{{curItem.pro_name}} <text class="sub" v-if="curItem.describe_text.length > 0" >| {{curItem.sub}}</text></view>
			<view class="profit">{{curItem.deal_rate}}%<text class="sub">{{curItem.describe_text}}</text></view>
			<view class="tag">
				<u-tag :text="el" v-for="(el, idx) in curItem.label" type="primary" :key="idx" />
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
		props: ['recommondList', 'productList'],
		data(){
			return {
				background: ['color1', 'color2', 'color3'],
                indicatorDots: true,
                autoplay: true,
                interval: 2000,
                duration: 500,
			}
		},
		methods: {
			toPage(json){
				const urlParams = this.convertObj(json)
				uni.navigateTo({
					url: '/pages/product/index?'+urlParams
				})
			},
			convertObj(data) {
				    let _result = [];
				    for (let key in data) {
				      let value = data[key];
				      if (value.constructor == Array) {
				        value.forEach((_value) => {
				          _result.push(key + "=" + _value);
				        });
				      } else {
				        _result.push(key + '=' + value);
				      }
				    }
				    return _result.join('&');
			}
		},
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
