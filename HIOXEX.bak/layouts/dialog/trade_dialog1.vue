<template>
	<view class="dialog_class" v-if="show">
		<view class="pop_class">
			<view class="pop_title">
				{{getLangs('confirmOrder')}}
				<text class="iconfont icon-close close" @tap="close(false)"></text>
			</view>
			<view class="pop_main">
				<view class="trade_order_info">
					<view class="label">
						<view class="name">{{getLangs('nameText')}}</view>
						<view class="value">{{data.currency}}</view>
					</view>
					<view class="label">
						<view class="name">{{getLangs('actionText')}}</view>
						<view :class="['value', data.action == 'buy' ? 'green' : 'red']">{{data.action == 'buy' ? getLangs('buy') : getLangs('sell')}}</view>
					</view>
					<view class="label">
						<view class="name">{{getLangs('nowPrice')}}</view>
						<view class="value">{{getCurrenctData.close}}</view>
					</view>
				</view>
				<view class="trade_date">
					<ExpireDate ref="expireDate" />
				</view>
			</view>
			<view class="pop_fd">
				<button @tap="confirmOrder" class="button">{{getLangs('confirmOrder')}}</button>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 交易弹窗
	 */
	import { mapGetters, mapMutations } from 'vuex'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import currencyMixins from '@/mixins/currency_mixins.js'
	import validate from '@/utils/validate.js'
	import ExpireDate from '@/layouts/trade/expire_date_swiper.vue'
	import { futuresTrade } from '@/api/user.js'
	let timer = null
	export default {
		name: 'SettingDialog',
		props: ['show', 'data'],
		mixins: [commonMixins, langsMixins, currencyMixins],
		components: {
			ExpireDate
		},
		data(){
			return {
			}
		},
		methods: {
			/**
			 *  关闭弹窗
			 */
			close(flag){
				this.$emit('close', flag)
			},
			/**
			 * 确认订单
			 */
			async confirmOrder(){
				const data = this.getData()
				const regs = /^([0]|[1-9][0-9]*)$/
				if(data.num === ''){
				   return this.$tips.showToast(this.getLangs('numEmptyTips'))
				}
				// if(!regs.test(data.num)){
				// 	return this.$tips.showToast(this.getLangs('numError'))
				// }
				if(Number(data.num) < Number(data.list[2])){
					return this.$tips.showToast(this.getLangs('numLess') + data.list[2])
				}
				const params = {
					id: this.getCurrentPageData('opt').id,
					num: data.num,
					type: this.data.action === 'buy' ? 0 : 1,
					cutttime: data.list[0],
					profit: data.list[1],
				}
				const res = await futuresTrade(params)
				if(validate.checkCode(res)){
					const tradeParams = Object.assign(params, {price: res.price, orderno: res.orderno})
					this.setTradeParams(tradeParams)
					this.close(true)
				}
				this.backTips(res)
			},
			/**
			 * 获取数据
			 */
			getData(){
				return this.$refs.expireDate.getParams()
			},
			...mapMutations({
				setTradeParams: 'SET_TRADE_PARAMS'
			})
		},
		computed: {
			...mapGetters({
				getWSData: 'getWSData'
			})
		}
	}
</script>

<style scoped>
</style>
