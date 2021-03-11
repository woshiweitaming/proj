<template>
	<view :class="['main_class', createOSClass]">
		<view class="table_class">
			<view :class="['table_main']">
				<view class="content">
					<view class="record_menu futures_menu">
						<view @tap="changeFuturesType(index)" :class="['label', index === futures.active ? 'on' : '']" v-for="(items, index) in futures.menuList" :key="index">{{getLangs(items)}}</view>
					</view>
					<FuturesPositionRecord :keys="getKey" v-if="futures.active === 0" />
					<FuturesHistoryRecord v-if="futures.active === 1"  />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapMutations } from 'vuex'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import FuturesPositionRecord from '@/layouts/order/futures_position_record.vue'
	import FuturesHistoryRecord from '@/layouts/order/futures_history_record.vue'
	export default {
		name: 'FuturesRecord',
		mixins: [commonMixins, langsMixins],
		components: {
			FuturesPositionRecord,
			FuturesHistoryRecord,
		},
		data(){
			return {
				//期货
				futures: {
					menuList: ['position', 'history'],
					active: 0
				},
			}
		},
		computed: {
			getKey(){
				return this.key
			}
		},
		methods: {
			//切换期货类型
			changeFuturesType(index){
				this.futures.active = index
			},
		},
		onLoad() {
			this.futures.active = 0
		},
		onShow(){
			this.setTitle(this.getLangs('orderCenter'))
			this.futures.active = 0
		},
	}
</script>

<style scoped>
	page{
		background: #000000;
	}
	.main_class{
		padding: 0;
		height: 100%;
	}
	.table_class{
		padding-top: 40upx;
	}
	.table_menu{
		width: 100%;
		border-bottom: 1px solid #111111;
		background: #20222c;
		margin-bottom: 40upx;
	}
	.record_menu{
		margin: auto;
		display: flex;
		margin-bottom: 20upx;
		padding: 0 20upx;
	}
	.record_menu .label{
		width: 50%;
		text-align: center;
		font-size: 28upx;
		line-height:  60upx;
		color: #fff;
	}
	.record_menu .label.on{
		background: #2970e6;
		border-radius: 10upx;
		color: #fff;
	}
	.futures_menu,
	.contract_menu{
		width: 70%;
	}
	.table_main{
		height: 100%;
	}
	.content{
		height: 100%;
	}
	.record_class{
		height: calc(100% - 80upx) !important;
		overflow: auto !important
	}
</style>
