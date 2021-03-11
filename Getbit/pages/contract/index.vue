<template>
	<view class="page">
		<Titlebar />
		<view class="currency_main">
			<Currency />
		</view>
		<view class="wrap">
			<Data />
			<Spacer />
			<Tab @changeTab="changeTab" :tabActive="tabActive" />
			<view v-if="tabActive === 0">
				<view class="main">
					<view class="label">
						<TradeForm />
					</view>
					<view class="label">
						<PriceList />
					</view>
				</view>
				<Spacer />
				<Commission />
			</view>
		</view>
	</view>
</template>

<script>
	import Titlebar from '@/layouts/contract/titlebar.vue'
	import Currency from '@/layouts/contract/currency.vue'
	import Data from '@/layouts/contract/data.vue'
	import Spacer from '@/components/spacer/spacer.vue'
	import Tab from '@/layouts/contract/tab.vue'
	import PriceList from '@/layouts/contract/price_list.vue'
	import TradeForm from '@/layouts/contract/trade_form.vue'
	import Commission from '@/layouts/contract/commission.vue'
	export default {
		name: 'Contract',
		data(){
			return {
				tabActive: 0
			}
		},
		components: {
			Titlebar,
			Currency,
			Data,
			Spacer,
			Tab,
			PriceList,
			TradeForm,
			Commission
		},
		methods: {
			toPage(path){
				uni.navigateTo({
					url: path
				})
			},
			changeTab(index){
				this.tabActive = index
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: '永续合约'
			})
		}
	}
</script>

<style scoped>
	.page{
		background: #fff;
	}
	.currency_main{
		padding-top: 40upx;
		border-bottom: 1px solid #eee;
	}
	.wrap{
		height: calc(100% - 100upx);
	}
	.main{
		display: flex;
	}
	.main .label:first-child{
		width: 60%;
	}
	.main .label:last-child{
		width: 40%;
	}
</style>
