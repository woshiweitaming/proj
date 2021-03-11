<template>
	<view class="trade_menu">
		<view @tap="changeMenu(index)" :class="['trade_menu_label', menuActive === index ? `on on${menuActive}` : '']" v-for="(items, index) in menuList" :key="index">
		  {{getLangs(items)}}
		</view>
	</view>
</template>

<script>
	/**
	 * 交易菜单
	 */
	import { mapMutations } from 'vuex'
	import langsMixins from '@/mixins/lang_mixins.js'
	import commonMixins from '@/mixins/common_mixins.js'
	export default {
		name: 'TradeMenu',
		mixins: [langsMixins, commonMixins],
		data(){
			return {
				menuList: ['buy', 'sell'],
				menuActive: 0
			}
		},
		methods: {
			changeMenu(index){
				this.menuActive = index
				this.setTradeAction(index)
			},
			...mapMutations({
				setTradeAction: 'SET_TRADE_ACTION'
			})
		},
		created() {
			this.menuActive = !this.getCurrentPageData('opt').action || this.getCurrentPageData('opt').action === 'buy' ? 0 : 1 
			this.setTradeAction(this.menuActive)
		}
	}
</script>

<style scoped>
	.trade_menu{
		text-align: center;
		display: flex;
		align-items: center;
		padding: 0 20%;
	}
	.trade_menu_label{
		width: 30%;
		flex: 1;
		font-size: 30upx;
		color: #aaa;
		margin-top: 20upx;
		line-height: 60upx;
	}
	.trade_menu_label.on.on1{
		border-bottom: 1px solid #f73846;
		color: #f73846 !important;
	}
	.trade_menu_label.on.on0{
		border-bottom: 1px solid #27c173;
		color: #27c173!important;
	}
</style>
