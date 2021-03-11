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
						<view class="value">{{datas.currency}}</view>
					</view>
					<view class="label">
						<view class="name">{{getLangs('actionText')}}</view>
						<view :class="['value', datas.action == 'buy' ? 'green' : 'red']">{{datas.action == 'buy' ? getLangs('tradep1') : getLangs('tradep2')}}</view>
					</view>
					<view class="label">
						<view class="name">{{getLangs('nowPrice')}}</view>
						<view class="value">{{getCurrenctData && getCurrenctData.close}}</view>
					</view>
				</view>
				<view class="trade_date">
					<!-- <ExpireDate ref="expireDate" /> -->
					<view class="expire_date_class">
						<view class="expire_name">{{getLangs('expireDate')}}</view>
						<view class="expire_date_wrap">
							<view @tap="changeExpireDate(index)" :class="['swiper_item', index === selected ? 'on' : '']" v-for="(items, index) in dataList" :key="index">
								<view class="seconds">{{toSecond(items[0])}}<text class="s">{{items[0] > 999 ? getLangs('hour') : getLangs('second')}}</text></view>
								<view class="profit">{{items[1] && items[1]}}%</view>
							</view>
						</view>
						<view class="input_num">
							<text class="name">{{this.getLangs('number')}}</text>
							<input class="input_bar" 
							   type="number" 
							   :placeholder="getNumber" 
							   v-model="params.num" 
							   @input="inputHander"/>
						</view>
						<view class="info">
							<view class="info_label">
								<view class="leftmoney">{{getLangs('leftmoney')}}: {{getCurrentLeftmonty}}</view>
							</view>
							<view class="info_label">
								<view class="fee">{{getLangs('fee')}}1%</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="pop_fd">
				<button @tap="confirmOrder" class="button">{{getLangs('confirmOrder')}}</button>
			</view>
		</view>
		<Loading v-if="loading" />
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
	import userMixins from '@/mixins/user_mixins.js'
	import validate from '@/utils/validate.js'
	import { futuresTrade, getAllBalance } from '@/api/user.js'
	import { getQhConfig } from '@/api/public.js'
	import Loading from '@/layouts/common/loading.vue'
	let timer = null
	export default {
		name: 'TradeDialog',
		props: ['show', 'datas'],
		mixins: [commonMixins, langsMixins, currencyMixins, userMixins],
		data(){
			return {
				closePrice: 0,
				showStatus: true,
				
				indicatorDots: false,
				autoplay: false,
				interval: 0,
				duration: 0,
				dataList: [],
				selected: 0,
				params: {
					list: [],
					num: '',
				},
				leftmoney: 0,
				loading: false
			}
		},
		components: {
			Loading
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
				const data = this.params
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
					type: this.datas.action === 'buy' ? 0 : 1,
					cutttime: data.list[0],
					profit: data.list[1],
				}
				this.loading = true
				const res = await futuresTrade(params)
				this.loading = false
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
				return this.params
			},	
			/**
			* 获取期货配置数据
			 */
			async getQhConfigHandler(){
				const res = await getQhConfig()
				const splitArr = res.split('!')
				const resArr = splitArr.map((d) => {
					const _d = d.split(',')
					return _d
				})
				this.dataList = resArr
				this.params.list = this.dataList[this.selected]
			},
			/**
			 * 切换时间
			 */
			changeExpireDate(index){
				this.selected = index
				this.params.list = this.dataList[index]
			},
			// /**
			//  * 获取选择的参数
			//  */
			// getParams(){
			// 	const params = {
			// 		num: this.params.num,
			// 		list: this.params.list
			// 	}
			// 	return params
			// },
			/**
			 * 获取期货余额
			 */
			async getAllBalanceHandler(){
				const res = await getAllBalance()
				this.leftmoney = res.data.usdt
			},
			setTimer(){
				timer = setInterval(() => {
					this.getAllBalanceHandler()
				}, 1000)
			},
			clearTimer(){
				clearInterval(timer)
				timer = null
			},
			toSecond(value){
				if(Number(value) > 999){
					return Math.ceil(Number(value)/3600)
				}
				return value
			},
			inputHander(e){
				const value = e.detail.value
				const regs = /^([0]|[1-9][0-9]*)$/
				if(regs.test(value)){
					if(value.toString().indexOf('.') == -1){
						this.params.num = this.params.num.replace(/'.'/g, '')
					}
				}else{
					this.params.num = ''
				}
			},
			...mapMutations({
				setTradeParams: 'SET_TRADE_PARAMS'
			})
		},
		computed: {
			getNumber(){
				return this.dataList[this.selected] ? this.getLangs('less') + this.dataList[this.selected][2] : this.getLangs('less') + 0
			},
			getCurrentLeftmonty(){
				if(this.getAccountBanlance.length && this.getAccountBanlance.length > 0){
					return this.getAccountBanlance.filter(res => res.type == 0)[0]['USDT']['usable']
				}
				return 0
			},
			...mapGetters({
				getWSData: 'getWSData'
			})
		},
		created(){
			this.getQhConfigHandler()
		}
	}
</script>

<style scoped>
	.expire_name {
		line-height: 80upx;
		color: #3F536E;
		font-size: 28upx;
	}
	.expire_date_wrap{
		width: 100%;
		height: 200upx;
		overflow-y: auto;
		white-space: nowrap;
	}
	.swiper_item{
		width: 160upx;
		height: 160upx;
		display: inline-block;
		margin-right: 20upx;
		background: #ededf7;
		border-radius: 20upx;
	}
	.swiper_item.on .seconds{
		background: #4944B3;
		color: #fff;
		border-radius: 20upx 20upx 0 0;
	}
	.swiper_item.on .profit{
		background: #3e39a8;
		color: #fff;
	}
	.swiper_item .seconds{
		width: 100%;
		height: 100upx;
		text-align: center;
		font-weight: bold;
		line-height: 100upx;
		color: #697c9d;
		font-size: 44upx
	}
	.swiper_item .seconds .s{
		font-weight: normal;
		font-size: 24upx;
		padding-left: 10upx;
	}
	.swiper_item .profit{
		width: 100%;
		height: 60upx;
		text-align: center;
		background: #f7f7f9;
		border-radius: 0 0 20upx 20upx;
		line-height: 60upx;
		color: #697c9d;
		font-size: 28upx
	}
	.input_num{
		font-size: 28upx;
	}
	.input_num .name{
		line-height: 60upx;
	}
	.input_num .input_bar{
		border-radius: 10upx;
		padding: 15upx;
		font-size: 28upx;
		background: #f7f7f9;
	}
	.info{
		display: flex;
	}
	.info .info_label{
		font-size: 24upx;
		color: #666;
		line-height: 60upx;
	}
	.info .info_label:first-child{
		text-align: left;
		flex: 2;
	}
	/* .info .info_label:last-child{
		text-align: right;
		flex: 1;
	} */
</style>

