<template>
	<view class="more">
		<view class="menu">
			<u-tabs :list="menuList" :font-size="26" inactive-color="#fff" bg-color="#131e31" :is-scroll="false" :current="active" @change="change"></u-tabs>
		</view>
		<CommissionRecord :dataList="dataList" v-if="active === 0" />
		<NewDeal :dataList="dataList" v-if="active === 1" />
		<Introduce :result="introduce" v-if="active === 2" />
	</view>
</template>

<script>
	import CommissionRecord from '@/layouts/kline/commission_record.vue'
	import NewDeal from '@/layouts/kline/new_deal.vue'
	import Introduce from '@/layouts/kline/introduce.vue'
	import { getExcDonetrade, getExcDepth, getExCoinInfo } from '@/apis/exc.js'
	export default {
		name: 'More',
		props: {
			opt: {
				type: Object,
				default: {
					name: '',
					id: ''
				}
			},
		},
		data(){
			return {
				menuList: [{name: '委托订单'}, {name:'最新成交'}, {name: '简介'}],
				active: 0,
				timer: null,
				dataList: [],
				introduce: {}
			}
		},
		components: {
			CommissionRecord,
			NewDeal,
			Introduce
		},
		methods: {
			change(index){
				this.active = index
				this.dataList = []
				this.clearTimer()
				this.setTimer()
			},
			async getExcDonetradeHandler(id){
				const res = await getExcDonetrade({excpairs: id})
				this.dataList = res
			},
			async getExcDepthHandler(id){
				const res = await getExcDepth({excpairs: id})
				let arr = []
				for(let key in res.asks){
					const items1 = res.asks[key]
					const items2 = res.bids[key]
					arr.push([items1[0], items1[1], items2[0], items2[1]])
				}
				this.dataList = arr
			},
			setTimer(){
				const that = this
				this.timer = setInterval(() => {
					if(that.active == 0){
						that.getExcDepthHandler(that.opt.id)
					}
					if(that.active == 1){
						that.getExcDonetradeHandler(that.opt.id)
					}
				}, 2000)
			},
			clearTimer(){
				clearInterval(this.timer)
				this.timer = null
			},
			async getExCoinInfoHandler(id){
				const res = await getExCoinInfo({coin_id: id})
				this.introduce = res[0]
			},
		},
		watch: {
			opt: {
				handler(val){
					this.getExcDepthHandler(val.id)
					this.getExCoinInfoHandler(val.id)
					this.setTimer()
				},
				deep: true,
				immediate: true
			}
		},
		destroyed() {
			this.clearTimer()
		}
	}
</script>

<style scoped>
	.menu{
		width: 60%;
	}
</style>
