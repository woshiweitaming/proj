<template>
	<view class="delivery_address">
		<DeliveryAddressList @onDelSuccess="onDelSuccess" :dataList="dataList" />
		<DeliveryAddressBottom />
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import DeliveryAddressList from '@/layouts/delivery_address/delivery_address_list.vue'
	import DeliveryAddressBottom from '@/layouts/delivery_address/bottom_bar.vue'
	import { getAdds } from '@/apis/users.js'
	export default {
		name: 'DeliveryAddress',
		mixins: [langMixins],
		data(){
			return {
				dataList: []
			}
		},
		methods: {
			async getAddsHandler(){
				const res = await getAdds()
				this.dataList = res.data
			},
			onDelSuccess(){
				this.getAddsHandler()
			}
		},
		components: {
			DeliveryAddressList,
			DeliveryAddressBottom
		},
		onShow(){
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
	.delivery_address{
		height: 100%;
	}
	.delivery_address{
		padding-bottom: calc(100upx + env(safe-area-inset-bottom));
	}
</style>
