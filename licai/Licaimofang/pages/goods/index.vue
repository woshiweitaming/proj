<template>
	<view class="goods">
		<view class="goods_list">
			<GoodsPreview />
			<GoodsInfo />
			<GoodsDetail />
			<view class="bottom_bar">
				<view class="labels">
					<view class="btns btn1">{{getLang('goods_p9')}}</view>
				</view>
				<view class="labels">
					<view class="btns btn2">
					    <view class="btn_text">{{getLang('goods_p10')}}</view>
						<view class="btn_text2" @click="toPage">200{{getLang('goods_p11')}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import GoodsPreview from '@/layouts/goods/goods_preview.vue'
	import GoodsInfo from '@/layouts/goods/goods_info.vue'
	import GoodsDetail from '@/layouts/goods/goods_detail.vue'
	export default {
		name: 'Goods',
		mixins: [langMixins],
		components: {
			GoodsPreview,
			GoodsInfo,
			GoodsDetail
		},
		methods: {
			toPage(){
				uni.navigateTo({
					url: '/pages/my_delivery_address/index'
				})
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('goods_p1')
			})
		}
	}
</script>

<style scoped>
	page,
	.goods{
		height: 100%;
	}
	.goods{
		padding-bottom: calc(100upx + env(safe-area-inset-bottom));
	}
	.goods_list{
		height: 100%;
	}
	.bottom_bar{
		position: fixed;
		width: 100%;
		height: 100upx;
		display: flex;
		left: 0;
		bottom: env(safe-area-inset-bottom);
		z-index: 100;
	}
	.bottom_bar .labels{
		padding: 10upx;
		width: 50%;
	}
	.btns{
		border-radius: 60upx;
		text-align: center;
	}
	.btn1{
		line-height: 80upx;
		background: #DF5000;
		color: #fff;
	}
	.btn2{
		background: #0077FF;
		color: #fff;
	}
	.btn_text2{
		font-size: 22upx
	}
</style>
