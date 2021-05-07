<template>
	<view class="entrust_order_class">
		<view class="entrust_order_menu">
			<view @tap="changeMenu(index)" :class="['menu_label', active === index ? 'on' : '']" v-for="(items, index) in entrustList" :key="index">{{getLangs(items)}}</view>
		</view>
		<view class="table_class">
			<view class="table_hd">
				<view class="table_hd_label">{{getLangs('Variety')}}</view>
				<view class="table_hd_label">{{getLangs('purchasePrice')}}</view>
				<view class="table_hd_label">{{getLangs('latestPrice')}}</view>
				<view class="table_hd_label">{{getLangs('profit')}}</view>
			</view>
			<view class="table_bd">
				<view class="no_data" v-if="dataList.length === 0">{{getLangs('noData')}}</view>
				<view v-else>
					<view class="table_bd_items" v-for="(items, index) in getPositionRecordData.data" :key="index">
						<view class="table_bd_label">{{items.ptitle}}</view>
						<view class="table_bd_label">{{items.buyprice}}</view>
						<view class="table_bd_label">{{items.nowPrice}}</view>
						<view class="table_bd_label">{{items.loss.toFixed(4)}}</view>
						<view class="table_bd_label btns">
							<text class="btn" @tap="showSettingDialog(items.orderno)">{{getLangs('setting')}}</text>
							<text class="btn" @tap="position(items.orderno)">{{getLangs('close')}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 委托订单
	 */
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'EntrustOrder',
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				entrustList: ['marketOrder', 'limitOrder'],
				active: 0,
				dataList: []
			}
		},
		methods: {
			/**
			 * 切换菜单
			 */
			changeMenu(index){
				this.active = index
			}
		}
	}
</script>

<style scoped>
	.entrust_order_class {
		margin-top: 40upx;
		background: ;
	}
	.entrust_order_class .entrust_order_menu{
		width: 60%;
		margin: auto;
		display: flex;
		height: 60upx;
		background: rgba(255,255,255,.05);
	}
	.entrust_order_class .entrust_order_menu .menu_label{
		width: 50%;
		text-align: center;
		line-height: 60upx;
		font-size: 28upx;
		color: #fff;
	}
	.entrust_order_class .entrust_order_menu .menu_label.on{
		background: #5d56ec;
		color: #fff;
	}
	.table_hd{
		border-bottom: 2px solid rgba(255,255,255,.05);
	}
</style>
