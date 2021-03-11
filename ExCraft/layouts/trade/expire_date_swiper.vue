<template>
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
				<view class="fee">{{getLangs('fee')}}2%</view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 过期时间
	 */
	import { mapGetters } from 'vuex'
	import { getQhConfig } from '@/api/public.js'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import userMixins from '@/mixins/user_mixins.js'
	import { getAllBalance } from '@/api/user.js'
	let timer = null
	export default {
		name: 'ExpireData',
		mixins: [commonMixins, langsMixins, userMixins],
		data(){
			return {
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
				leftmoney: 0
			}
		},
		methods: {
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
			/**
			 * 获取选择的参数
			 */
			getParams(){
				const params = {
					num: this.params.num,
					list: this.params.list
				}
				return params
			},
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
			}
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
			}
		},
		created() {
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
		background: #343a5e;
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
	.info .info_label:last-child{
		text-align: right;
		flex: 1;
	}
</style>
