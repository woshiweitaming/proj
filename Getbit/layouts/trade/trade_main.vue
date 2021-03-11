<template>
	<view class="trade_main card">
		<TradeForm @callback="callback" :type="type" :getData="getData" />
		<PriceList :getClose="getClose" :getData="getData" />
	</view>
</template>

<script>
	import TradeForm from './trade_form.vue'
	import PriceList from './price_list.vue'
	export default {
		name: 'TradeMain',
		props: ['getClose', 'getData', 'type'],
		data(){
			return {
			}
		},
		methods: {
			callback(type){
				this.$emit('callback1', type)
			}
		},
		components: {
			TradeForm,
			PriceList
		}
	}
</script>

<style scoped>
	.trade_main{
		display: flex;
	}
</style>
