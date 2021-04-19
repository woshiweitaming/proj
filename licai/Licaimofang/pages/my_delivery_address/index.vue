<template>
	<view class="delivery_address">
		<view class="da_main">
			<view class="exchange">
				<view class="name">{{getLang('buy_p1')}}({{getLang('buy_p6') + '：' + 1000}})</view>
				<view class="input_bars">
					<input type="tel" :placeholder="getLang('buy_p2')" class="input_bar" />
				</view>
			</view>
			<view class="address">
				<view class="name">{{getLang('buy_p3')}}</view>
				<view class="list">
					<view @click="change(index)" :class="['labels', index == cur ? 'on' : '']" v-for="(curItem, index) in dataList" :key="index">
						<view class="address_label">
							<view class="uname">{{curItem.name}}</view>
							<view class="phone">{{curItem.phone}}</view>
							<view class="adds">{{curItem.province + curItem.city + curItem.adds }}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="bottom_bar">
			<view class="btns">{{getLang('buy_p5')}}</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import { getAdds } from '@/apis/users.js'
	import tips from '@/utils/tips.js'
	export default {
		name: 'MyDeliveryAddress',
		mixins: [langMixins],
		data(){
			return {
				dataList: [],
				cur: 0
			}
		},
		methods: {
			async getAddsHandler(){
				const res = await getAdds()
				this.dataList = res.data
				if(this.dataList.length === 0){
					tips.showToast(this.getLang('buy_p4'))
					setTimeout(() => {
						uni.navigateTo({
							url: '/pages/create_delivery_address/index'
						})
					}, 1500)
				}
			},
			change(index){
				this.cur = index
			}
		},
		onShow() {
			this.getAddsHandler()
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('delivery_p1')
			})
		}
	}
</script>

<style scoped>
	page,
	.delivery_address,
	.da_main{
		height: 100%;
	}
	.delivery_address{
		padding-bottom: calc(100upx + env(safe-area-inset-bottom));
	}
	.delivery_address .exchange{
		background: #fff;
		padding: 40upx;
	}
    .name{
		line-height: 80upx;
		font-weight: bold;
	}
	.delivery_address .exchange .input_bars{
		border: 1px solid #eee;
		border-radius: 20upx;
		padding: 20upx;
	}
	.delivery_address .exchange .input_bar{
		font-size: 28upx;
		font-weight: bold;
	}
	.delivery_address .address{
		margin-top: 20upx;
		padding: 20upx 40upx;
		background: #fff;
	}
	.bottom_bar{
		position: fixed;
		width: 100%;
		height: 100upx;
		display: flex;
		left: 0;
		bottom: env(safe-area-inset-bottom);
		z-index: 100;
		padding: 10upx;
	}
	.btns{
		width: 50%;
		border-radius: 40upx;
		text-align: center;
		background: #0077FF;
		color: #fff;
		line-height: 80upx;
		margin: auto;
	}
	.address_label{
		display: flex;
		flex-wrap: wrap;
		padding: 20upx 80upx 20upx 20upx;
	}
	.uname,
	.phone{
		width: 50%;
		font-size: 28upx;
	}
	.adds{
		width: 100%;
		font-size: 24upx;
		color: #aaa;
		margin-top: 10upx;
	}
	.labels{
		border-radius: 20upx;
		border: 2px solid #eee;
		margin-bottom: 20upx;
	}
	.labels.on{
		border: 2px solid #0077FF;
	}
</style>
