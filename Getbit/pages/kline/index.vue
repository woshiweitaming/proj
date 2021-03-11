<template>
	<view class="page custom bottom_page">
		<Titlebar :name="name"/>
		<view class="main">
			<CurrencyData :opt="opt"/>
			<KlineType :curType="curTypeIndex" @changeCurType="changeCurType" />
			<Deep curType="curType" :opt="opt" v-if="curTypeIndex === 10" />
			<KlineChart :curType="curType" :opt="opt" v-else  />
			<view class="spcer"></view>
			<More :opt="opt" />
		</view>
		<BottomBtn />
	</view>
</template>

<script>
	import Titlebar from '@/layouts/kline/titlebar.vue'
	import CurrencyData from '@/layouts/kline/currency_data.vue'
	import KlineType from '@/layouts/kline/type.vue'
	import KlineChart from '@/layouts/kline/kline.vue'
	import Deep from '@/layouts/kline/deep.vue'
	import BottomBtn from '@/layouts/kline/bottom_btn.vue'
	import More from '@/layouts/kline/more.vue'
	import KlineContainer from '@/components/kline/kline.vue'
	export default {
		name: 'Kline',
		data(){
			return {
				curType: '15min',
				curTypeIndex: 0,
				name: '',
				opt: {},
			}
		},
		components: {
			Titlebar,
			CurrencyData,
			KlineType,
			KlineChart,
			Deep,
			More,
			BottomBtn,
			KlineContainer 
		},
		methods: {
			changeCurType(opt){
				this.curTypeIndex = opt.index
				this.curType = opt.value
			}
		},
		onLoad(opt) {
			this.opt = opt
			this.name = opt.name
		},
	}
</script>

<style scoped>
	.page{
		background: #131e31;
	}
	.main{
		height: 100%;
		overflow: auto;
	}
	.spcer{
		background: #071724;
		height: 20upx;
	}
</style>