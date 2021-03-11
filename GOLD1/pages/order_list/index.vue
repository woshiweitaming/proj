<template>
	<view class="order_list_class">
		<view class="order_menu">
			 <view @tap="change(index)" :class="['order_text', type == index ? 'on' : '']" v-for="(items, index) in menuList">{{getLangs(items)}}</view>
		</view>
		<view class="record_class">
			<view class="order_record record_main common" v-if="type == 0">
				<view class="no_data" v-if="dataList.length === 0">{{getLangs('noData')}}</view>
				<scroll-view class="scroll" :scroll-y="true" v-else>
					<view class="record_label" v-for="(items, index) in dataList" :key="index">
						<view class="label_title">
							<view class="label_name">
								 {{getLangs('rechargeCoin')}} （{{items.name}})
								 <text :class="['status','deal'+items.status]">{{checkStatus(items.status)}}</text>
							</view>
						</view>
						<view class="labels_main_normal">
							<view class="labels_box">
								<view class="text">{{getLangs('quantity')}}</view>
								<view class="value">{{items.amount}}</view>
							</view>
							<view class="labels_box">
								<view class="text">{{getLangs('timeText')}}</view>
								<view class="value">{{items.btime}}</view>
							</view>
						</view>
						<view class="labels_fd" v-if="items.remarks">
							<view class="labels">{{getLangs('remark')}}:{{items.remarks}}</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<view class="order_record record_main common" v-if="type == 1">
				<view class="no_data" v-if="dataList.length === 0">{{getLangs('noData')}}</view>
				<scroll-view class="scroll" :scroll-y="true" v-else>
					<view class="record_label" v-for="(items, index) in dataList" :key="index">
						<view class="label_title">
							<view class="label_name">
								 {{getLangs('withdrawBtn')}} (USDT)
								 <text :class="['status','deal'+items.status]">{{toStatus(items.status)}}</text>
							</view>
						</view>
						<view class="labels_main_normal">
							<view class="labels_box">
								<view class="text">{{getLangs('quantity')}}</view>
								<view class="value">{{items.dollar}}</view>
							</view>
							<view class="labels_box">
								<view class="text">{{getLangs('timeText')}}</view>
								<view class="value">{{items.btime}}</view>
							</view>
						</view>
						<view class="labels_fd" v-if="items.remarks">
							<view class="labels">{{getLangs('remark')}}:{{items.remarks}}</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import langsMixins from '@/mixins/lang_mixins.js'
	import commonMixins from '@/mixins/common_mixins.js'
	import { getPay, revokePay, getWithdrawal } from '@/api/record.js'
	export default {
		name: 'Recharging',
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				type: '',
				menuList: ['rechargeRecord', 'extractingRecords'],
				dataList: []
			}
		},
		methods: {
			async getPayHandler(){
				const res = await getPay()
				this.dataList = res.data
			},
			async getWithdrawalHandler(){
				const res = await getWithdrawal()
				this.dataList = res.data
			},
			checkStatus(status){
				if(status == 1){
					return this.getLangs('pending')
				}
				if(status == 2){
					return this.getLangs('success')
				}
				if(status == 3){
					return this.getLangs('refuse')
				}
				if(status == 4){
					return this.getLangs('timeout')
				}
			},
			toStatus(status){
				if(status == 0){
					return this.getLangs('applying')
				}
				if(status == 1){
					return this.getLangs('pass')
				}
				if(status == 2){
					return this.getLangs('failed')
				}
			},
			change(index){
				this.type = index
				this.dataList = []
				this.getData()
			},
			getData(){
				this.type == 0 ? this.getPayHandler() : this.getWithdrawalHandler()
			}
		},
		onLoad(opt){
			this.type = opt.type
		},
		onShow() {
			this.setTitle(this.getLangs('order'))
			this.getData()
		}
	}
</script>

<style scoped>
	.order_list_class{
		height: 100%;
		overflow: hidden;
		background: #f9f9f9;
	}
	.order_menu{
		height: 100upx;
		background: #fff;
		text-align: center;
	}
	.order_menu .order_text{
		line-height: 100upx;
		color: #aaa;
		width: 25%;
		display: inline-block;
	}
	.order_menu .order_text.on{
		color: #007AFF;
		border-bottom: 2px solid #007AFF;
	}
	.order_record{
		height: calc(100% - 100upx);
		overflow: auto;
	}
	.labels_box{
		width: 100% !important;
		display: flex;
		margin-bottom: 0 !important;
	}
	.labels_box .text,
	.labels_box .value{
		width: 50% !important;
	}
	.labels_box .text{
		text-align: left;
	}
	.labels_box .value{
		text-align: right;
	}
	.status{
		min-width: 100upx !important;
		padding: 0 10upx;
	}
	.deal2{
		background: #18C6A7 !important;
	}
	.deal1{
		background: #DD4A68 !important;
	}
	.deal3{
		background: #007AFF !important;
	}
	.deal4{
		background: #3F536E !important;
	}
	.labels_box{
		border-right: none !important;
	}
</style>
