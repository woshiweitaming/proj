<template>
	<view class="delivery_address_list">
		<u-empty :text="getLang('common_p5')" mode="list" v-if="dataList.length === 0"></u-empty>
		<view class="labels" v-else  v-for="(curItem, index) in dataList" :key="index">
		    <uni-swipe-action>
		        <uni-swipe-action-item :options="options" @click="onClick($event, curItem)">
		    		<view class="card">
		    			<view class="labels">
							<view class="name">{{curItem.name}}</view>
							<view class="phone">{{curItem.phone}}</view>
						</view>
						<view class="labels">
							<view class="address">{{curItem.province + curItem.city + curItem.adds}}</view>
						</view>
		    		</view>
		        </uni-swipe-action-item>
		    </uni-swipe-action>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import { delAdds } from '@/apis/users.js'
	import tips from '@/utils/tips.js'
	export default {
		name: 'DeliveryAddressList',
		props: ['dataList'],
		mixins: [langMixins],
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
			async onClick(e, curItem){
				const id = curItem.id
				await delAdds({id: id})
				tips.showToast(this.getLang('common_p6'))
				this.$emit('onDelSuccess')
			}
		}
	}
</script>

<style scoped>
	.delivery_address_list{
		padding: 40upx 0 0 0;
	}
	.card{
		background: #fff;
		padding: 20upx 40upx;
		margin-bottom: 20upx;
		border-top: 1px solid #f1f1f1;
		border-bottom: 1px solid #f1f1f1
	}
	.card .labels{
		display: flex;
		margin-bottom: 20upx;
	}
	.card .phone,
	.card .name{
		width: 50%;
		line-height: 80upx;
		font-size: 32upx
	}
	.card .address{
		color: #666;
		font-size: 28upx;
	}
</style>
