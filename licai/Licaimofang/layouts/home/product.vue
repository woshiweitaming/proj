<template>
	<view class="product">
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
	export default {
		name: 'Product',
		data(){
			return {
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
	.product{
		padding: 100upx 20upx 20upx;
	}
	.product_label{
		padding: 20upx;
		background: #fff;
		margin-bottom: 20upx;
		border-radius: 20upx;
		position: relative;
	}
	.product_label .sub{
		padding-left: 10upx;
		font-size: 24upx;
		color: #666;
	}
	.product_label .profit{
		font-size: 50upx;
		color: #DD4A68;
	}
	.product_label .tag .u-tag{
		margin-right: 5px;
	}
	.arrow_right{
		position: absolute;
		right: 20upx;
		top: 80upx;
	}
</style>
