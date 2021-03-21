<template>
	<view class="currency_class">
		<view class="show_data" v-if="getWSData.length > 0">
			<view class="show_label" @tap="toKpage(items.name, items.id)" v-for="(items, index) in getTopData" :key="index">
				<view class="currency"><text class="currency_name">{{items.name}}</text>/USDT</view>
				<view :class="['price', getClass(items.gain)]">{{items.close}}</view>
				<view :class="['ratio', getClass(items.gain)]">{{(items.gain > 0 ?'+' : '') + items.gain}}%</view>
			</view>
		</view>
		<!--快捷操作-->
		<QuickAction />
		<view class="currency_main">
			<view class="currency_menu">
				<view @tap="changeMenu(index)" :class="['currency_menu_label', active === index ? 'on' : '']" v-for="(items, index) in currencyMenuList" :key="index">
					<view class="name">{{getLangs(items)}}</view>
					<view class="line"></view>
				</view>
			</view>
			<view class="currency_hd">
				<view class="currency_hd_label">{{getLangs('nameText')}}</view>
				<view class="currency_hd_label">{{getLangs('latestPrice')}}</view>
				<view class="currency_hd_label">{{active === 0 ? `${getLangs('topGains')}` : getLangs('volume24h')}}</view>
			</view>
			<view class="currency_label" v-for="(items, index) in getWSSortData" :key="index" @tap="toKpage(items.name, items.id)">
				<view class="currency_bd_label">
					<view class="currency"><text class="currency_name">{{items.name}}</text> / USDT</view>
					<!-- <text class="volume">{{items.vol}}</text> -->
				</view>
				<view class="currency_bd_label">
					<text :class="['least_price',getClass(items.gain)]">{{items.close}}</text>
				</view>
				<view class="currency_bd_label">
					<text v-if="active === 0" :class="['ratio', `${getClass(items.gain)}_box`]">{{(items.gain > 0 ?'+' : '') + items.gain}}%</text>
					<text v-if="active === 1" class="ratio blue_box">{{getRatio(items.vol)}}</text>
				</view>
		    </view>
		</view> 
		<NoticeDialog v-model="showDialog" :title="title" :content="content" @close="closeHanlder" />
	</view>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import websocketMixins from '@/mixins/websocket_mixins.js'
	import currencyMixins from '@/mixins/currency_mixins.js'
	import QuickAction from '@/layouts/home/QuickAction.vue'
	import { getNConfig} from '@/api/public.js'
	import NoticeDialog from '@/layouts/dialog/notice_dialog.vue'
	export default {
		name: 'Currency',
		mixins: [commonMixins, websocketMixins, langsMixins, currencyMixins],
		data(){
			return {
				currencyMenuList: ['topGains','topTurnovers'],
				active: 0,
				show: false,
				showDialog: false,
				content: '',
				title: ''
			}
		},
		methods: {
			/**
			 * 跳转
			 */
			toKpage(name, id){
				const params = {
					currency:  name,
					id: id
				}
				this.navigateTo('/pages/k/index', params)
			},
			/**
			 * 切换菜单
			 */
			changeMenu(index){
				this.active = index
			},
			async getConfigHandler(){
				const res = await getNConfig()
				if(res.data.notice !== null){
					this.content = res.data.notice.content
					this.title = res.data.notice.title
					this.showDialog = true
				}
			},
			closeHanlder(){
				this.showDialog = false
			}
		},
		computed: {
			getTopData(){
				if(JSON.stringify(this.getWSData) === '{}'){
					return {}
				}
				const data = JSON.parse(JSON.stringify(this.getWSData))
				return data.slice(0, 3)
			},
			getRatio(){
				return (vol) => {
					const data = vol / 10000
					return data.toFixed(0) + 'W'
				}
			}
		},
		components: {
			QuickAction,
			NoticeDialog
		},
		created() {
			this.getConfigHandler()
		}
	}
</script>

<style scoped>
	.currency_class{
		margin-top: 0;
		background: #151936;
	}
	.currency_class .currency_hd,
	.currency_class .currency_label{
		display: flex;
		background: #151936;
	}
	.currency_class .currency_hd{
		background: #151936;
	}
	.currency_class .currency_hd .currency_hd_label,
	.currency_class .currency_bd_label{
		text-align: center;
		line-height: 60upx;
		font-size: 24upx;
		color: #72899a;
		width: 33.3333%;
	}
	.currency_class .currency_hd .currency_hd_label:first-child,
	.currency_class .currency_bd_label:first-child{
		padding-left: 20upx;
		text-align: left;
	}
	.currency_class .currency_hd .currency_hd_label:last-child,
	.currency_class .currency_bd_label:last-child{
		padding-right: 20upx;
		text-align: right;
	}
	.currency_label{
		border-bottom: 1px solid rgba(255,255,255,.05);
		background: #ffffff;
		padding: 10upx 0;
	}
	.currency_label .currency{
		color: #aaa;
		line-height: 80upx;
	}
	.currency_label .currency_name{
		font-size: 30upx;
		color: #fff;
		font-weight: bold;
	}
	.currency_label .least_price{
		line-height: 90upx;
		font-size: 28upx
	}
	.currency_label .ratio{
		width: 70%;
		display: inline-block;
		border-radius: 2px;
		line-height: 30px;
		text-align: center;
		font-size: 14px;
		color: #fff;
		margin-top: 15upx;
	}
	.currency_class .show_data{
		padding: 40upx 20upx;
		display: flex;
		text-align: center;
		background: #151936;
	}
	.currency_class .show_label{
		width: 33.333%;
		font-size: 24upx;
		font-weight: bold;
		color: #fff;
	}
	.currency_class .show_label .currency_name{
		line-height: 40upx;
	}
	.currency_class .show_label .price{
		font-size: 34upx;
		font-weight: bold;
		line-height: 40upx;
	}
	.currency_class .show_label .ratio{
		font-size: 26upx;
		font-weight: bold;
		line-height: 40upx;
	}
	.currency_menu{
		background: #151936;
		text-align: center;
		display: flex;
		flex-wrap: wrap;
	}
	.currency_menu .currency_menu_label{
		width: 50%;
		line-height: 94upx;
		color: #999;
		font-weight: bold;
		font-size: 30upx
	}
	.currency_menu .currency_menu_label.on{
		color: #2970e6;
	}
	.currency_menu .currency_menu_label .line{
		width: 20px;
		height: 2px;
		background: #2970e6;
		margin: auto;
		display: none;
	}
	.currency_menu .currency_menu_label.on .line{
		display: block;
	}
	.blue_box{
		background: #007AFF;
		color: #fff;
	}
</style>
