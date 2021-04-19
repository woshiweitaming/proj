<template>
	<view class="bank_list_wrap">
		 <u-empty :text="getLang('common_p5')" mode="list" v-if="dataList.length === 0"></u-empty>
		<view class="labels" v-else  v-for="(curItem, index) in dataList" :key="index">
		    <uni-swipe-action>
		        <uni-swipe-action-item :options="options" @click="onClick($event, curItem)">
		    		<view class="card" :style="getCardBg(curItem.bankcode)">
		    			<view class="img">
		    				<image :src="getCardImg(curItem.bankcode)" mode="widthFix" class="icon"></image>
		    			</view>
		    			<view class="info">
		    				<view class="bankname">{{curItem.bankcode}}</view>
		    				<view class="sub">{{getLang('banklist_p7')}}</view>
		    			</view>
		    			<view class="banknumber">{{curItem.banknumber}}</view>
		    			<image :src="getCardImg(curItem.bankcode)" mode="widthFix" class="icon2"></image>
		    		</view>
		        </uni-swipe-action-item>
		    </uni-swipe-action>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
	import uniSwipeActionItem from '@/components/uni-swipe-action-item/uni-swipe-action-item.vue'
	import { delBank } from '@/apis/users.js'
	import tips from '@/utils/tips.js'
	let bankInfo = require('@/datas/banks.json');
	export default {
		name: 'BankListWrap',
		mixins: [langMixins],
		props: ['dataList'],
		data(){
			return {
				options:[
				    {
				        text: '',
						icon: '/static/images/banks/del_icon.png',
				        style: {
				            backgroundColor: 'none'
				        }
				    }
				],
			}
		},
		methods: {
			onClick(e, curItem){
				this.del(curItem.id)
			},
			async del(id){
				await delBank({id: id})
				tips.showToast(this.getLang('common_p6'))
				this.$emit('callback')
			}
		},
		computed: {
			getCardBg(){
				return bankname => {
					return {background: bankInfo[bankname].color}
				}
			},
			getCardImg(){
				return bankname => {
					return bankInfo[bankname].bg
				}
			}
		},
	}
</script>

<style scoped>
	.bank_list_wrap{
		padding: 20upx;
		height: 100%;
		overflow: auto;
	}
	.bank_list_wrap .card{
		border-radius: 20upx;
		padding: 20upx ;
		height: 280upx;
		box-shadow: 0 0 10upx 0 rgba(0,0,0,.1);
		position: relative;
		display: flex;
		overflow: hidden;
		margin-bottom: 20upx;
	}
	.bankname{
		font-size: 32upx;
		font-weight: bold;
		color: #fff;
		padding-left: 40upx;
	}
	.flex{
		display: flex;
		flex-wrap: wrap;
		margin-top: 40upx;
	}
	.flex .box{
		width: 33.3333%;
		color: rgba(255,255,255,.5);
		font-size: 14upx;
		margin-bottom: 20upx;
	}
	.flex .box.full{
		width: 100%;
	}
	.flex .box.last{
		text-align: right;
	}
	.card .img{
		display: flex;
	}
	.card .img .icon{
		width: 80upx;
	}
	.sub{
		padding-left: 40upx;
		font-size: 24upx;
		color: #fff;
	}
	.banknumber{
		width: 100%;
		position: absolute;
		bottom: 20upx;
		right: 20upx;
		text-align: right;
		color: #fff;
	}
	.icon2{
		width: 200upx;
		position: absolute;
		right: -20upx;
		top: -20upx;
		opacity: .1;
	}
</style>
