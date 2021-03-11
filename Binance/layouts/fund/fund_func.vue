<template>
	<view class="pages">
		<view class="fund_func_class">
			<view :class="['label', active === index ? 'on' : '']" @tap="change(index)" v-for="(items, index) in fundFuncList" :key="index">
				<!-- <image class="icon" :src="items.icon"></image> -->
				<text class="name">{{getLangs(items.name)}}</text>
			</view>
		</view>
		<view class="page_main">
			<WithdrawApply v-if="active === 0" />
			<WithdrawRecord v-if="active === 1" />
			<RechargeRecord v-if="active === 2" />
		</view>
	</view>
</template>

<script>
	/**
	 * 资金操作
	 */
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import WithdrawApply from '@/layouts/fund/withdraw_apply.vue'
	import WithdrawRecord from '@/layouts/fund/withdraw_record.vue'
	import RechargeRecord from '@/layouts/fund/recharge_record.vue'
	export default {
		name: 'FundFunc',
		mixins: [commonMixins, langsMixins],
		components: {
			WithdrawApply,
			WithdrawRecord,
			RechargeRecord
		},
		data(){
			return {
				fundFuncList: [
					{
						name: 'extractionApply',
					},
					{
						name: 'extractingRecords',
					},
					{
						name: 'rechargeRecord',
					}
				],
				active: 0
			}
		},
		methods: {
			change(index){
				this.active = index
			}
		}
	}
</script>

<style scoped>
	.pages{
		height: 100%;
	}
	.fund_func_class{
		padding: 0 40upx;
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		text-align: center;
	}
	.fund_func_class .label{
		width: 33.333%;
		text-align: center;
		height: 60upx;
		line-height: 60upx;
		display: inline-block;
	}
	.fund_func_class .label.on{
		background: #007AFF;
		color: #fff;
		border-radius: 10upx;
	}
	.fund_func_class .icon{
		width: 60upx;
		height: 60upx;
	}
	.fund_func_class .name{
		font-size: 26upx;
		display: block;
	}
</style>
