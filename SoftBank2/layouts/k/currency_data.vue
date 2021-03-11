<template>
	<view class="k_line_data">
		<view class="k_line_card">
			<view @tap="sliderCurrency" class="currency">{{opt.currency}} <text class="iconfont icon-other"></text></view>
			<view class="position" v-if="getCurrentTradeType === 0">
				<text class="iconfont icon-document"></text>
				<text @tap="toPage">{{getLangs('positionOrder')}}</text>
			</view>
			<view class="k_data">
				<view class="labels">
					<text class="current">{{getLangs('current')}}</text>
					<view :class="['live_label close', getClass(getCurrenctData && getCurrenctData.gain)]">{{getCurrenctData && getCurrenctData.close}}</view>
					<view :class="['live_label', getClass(getCurrenctData && getCurrenctData.gain)]">{{getCurrenctData && getCurrenctData.gain}}%</view>
				</view>
				<view class="labels">
					<view class="inner">
						<view class="inner_label">
							<text class="name">{{getLangs('openPrice')}}</text>
							<text class="value">{{getCurrenctData && getCurrenctData.open}}</text>
						</view>
						<view class="inner_label">
							<text class="name">{{getLangs('turnover24h')}}</text>
							<text class="value">{{getCurrenctData && (Number(getCurrenctData.vol) / 10000).toFixed(4)}}W</text>
						</view>
						<view class="inner_label">
							<text class="name">{{getLangs('lowestPrice')}}</text>
							<text class="value">{{getCurrenctData && getCurrenctData.low}}</text>
						</view>
						<view class="inner_label">
							<text class="name">{{getLangs('highestPrice')}}</text>
							<text class="value">{{getCurrenctData && getCurrenctData.high}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 实时数据
	 */
	import { mapGetters, mapMutations } from 'vuex'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import websocketMixins from '@/mixins/websocket_mixins.js'
	import currencyMixins from '@/mixins/currency_mixins.js'
	export default {
		name: 'CurrencyData',
		mixins: [commonMixins, websocketMixins, langsMixins, currencyMixins],
		data(){
			return {
				opt: {}
			}
		},
		methods: {
			/**
			 * 侧边栏
			 */
			sliderCurrency(){
				this.$emit('callBack', true)
			},
			toPage(){
				this.$storage.setLocalData('directPathIndex', 0)
				this.navigateTo('/pages/futures_record/index')
			}
		},
		computed: {
			getIcon(){
				return (gain) => {
					return gain > 0 ? '../../static/images/up_icon.png' : '../../static/images/down_icon.png'
				}
			},
			...mapGetters({
				getCurrentTradeType: 'getCurrentTradeType'
			})
		},
		created(){
			this.opt = this.getCurrentPageData('opt')
		}
	}
</script>

<style scoped>
	.k_line_data{
		padding: 0 10upx;
		background: #1c1d31;
	}
	.k_line_data .k_line_card{
		background: #1c1d31;
		padding: 40upx 10upx 20upx 0upx;
		box-shadow: 0 0 10px 0 rgba(0,0,0,.1);
		border-radius: 40upx 40upx 0 0;
		position: relative;
	}
	.k_line_data .position{
		position: absolute;
		right: 20upx;
		top: 20upx;
		line-height: 80upx;
		color: #62759a;
		font-size: 28upx
	}
	.k_line_data .k_line_card .currency{
		font-size: 32upx;
		color: #bfc5d1;
		font-weight: bold;
	}
	.k_data{
		display: flex;
		margin-top: 20upx;
	}
	.k_data .labels{
		flex: 1;
	}
	.k_data .labels .current{
		color: #8d9dbc;
		font-size: 26upx;
		display: flex;
		padding-left: 40upx;
	}
	.k_data .labels .live_label{
		font-size: 32upx;
		line-height: 60upx;
		padding-left: 40upx;
	}
	.k_data .labels .live_label.close{
		font-size: 50upx;
	}
	.k_data .labels .inner{
		padding: 0 10upx;
		display: flex;
		flex-wrap: wrap;
	}
	.k_data .labels .inner .inner_label{
		width: 50%;
		font-size: 26upx;
		color: #8d9dbc;
		box-sizing: border-box;
	}
	.k_data .labels .inner .inner_label:nth-child(even){
		padding-left: 10px;
	}
	.k_data .labels .inner .inner_label .name,
	.k_data .labels .inner .inner_label .value{
		font-size: 26upx;
		color: #8d9dbc;
		display: block;
		line-height: 40upx;
	}
	.k_data .labels .inner .inner_label .value{
		color: #fff;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space:nowrap;
	}
	.currency .iconfont{
		font-size: 40upx;
		padding-left: 20upx;
		top: 10upx;
	}
</style>
