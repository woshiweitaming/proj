<template>
	<view class="page custom">
		<Titlebar />
		<view class="inner">
			<Swiper />
			<Spacer />
			<Notice />
			<Spacer />
			<CurrencySwiper />
			<Spacer />
			<Extension />
			<Spacer />
			<Shortcut />
			<Spacer />
			<view class="wrap card">
				<view class="type">
					<view @click="changeMenu(index)" :class="['type_label', typeActive == index ? 'on' : '']" v-for="(curItem, index) in typeList" :key="index">
					   {{curItem}}
					   <view class="line"></view>
					</view>
				</view>
				<CoinsList v-if="typeActive === 0" />
				<ContractList v-if="typeActive === 1"/>
			</view>
		</view>
	</view>
</template>

<script>
	import Titlebar from '@/layouts/home/titlebar.vue'
	import Swiper from '@/layouts/home/swiper.vue'
	import Notice from '@/layouts/home/notice.vue'
	import CurrencySwiper from '@/layouts/home/currency_swiper.vue'
	import CoinsList from '@/layouts/home/coins_list.vue'
	import ContractList from '@/layouts/home/contract_list.vue'
	import Extension from '@/layouts/home/extension.vue'
	import Shortcut from '@/layouts/home/shortcut.vue'
	import Spacer from '@/components/spacer/spacer.vue'
	import CommonMixins from '@/mixins/common_mixins.js'
	export default {
		name: 'Home',
		mixins: [CommonMixins],
		components: {
			Titlebar,
			Swiper,
			Notice,
			CoinsList,
			CurrencySwiper,
			Extension,
			Shortcut,
			Spacer,
			ContractList
		},
		data(){
			return {
				typeList: ['币币', '合约', '期权'],
				typeActive: 0,
			}
		},
		methods: {
			changeMenu(index){
				this.typeActive = index
			},
			
		},
	}
</script>

<style scoped>
	.type{
		margin-bottom: 40upx;
		display: flex;
		width: 100%;
	}
	.type .type_label{
		line-height: 60upx;
		font-size: 30upx;
		margin-right: 40upx;
	}
	.type .type_label.on{
		color: #007AFF;
		font-weight: bold;
	}
	.type .type_label.on .line{
		border-bottom: 2px solid #007AFF;
	}
</style>
