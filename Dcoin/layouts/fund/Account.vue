<template>
	<view class="account_class">
		<view class="account_menu">
			<view class="account_box">
				<view @tap="changeMenu(index)" :class="['label', active === index ? 'on' : '']" v-for="(items, index) in menuList" :key="index">
				   {{getLangs(items)}}
				   <view class="line"></view>
				</view>
			</view>
		</view>
		<view class="account_list">
			<view class="account_list_label"  v-show="key !== 'type'" v-for="(items, key) in getAccountBanlance && getAccountBanlance[getActive]" :key="key">
				<view>
					<view class="currency">{{key}}</view>
					<view class="table_hd">
						<view class="table_hd_label">{{getLangs('available')}}</view>
						<view class="table_hd_label">{{getLangs('frozen')}}</view>
						<view class="table_hd_label">{{getLangs('convert')}}({{getText}})</view>
					</view>
					<view class="table_bd">
						<view class="table_bd_label">{{Number(items.usable).toFixed(4)}}</view>
						<view class="table_bd_label">{{Number(items.freeze).toFixed(4)}}</view>
						<view class="table_bd_label">{{Number(items.convert).toFixed(4)}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 账户
	 */
	import { mapGetters, mapMutations } from 'vuex'
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Account',
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				menuList: ['futures', 'contract', 'coin', 'poolp6'],
				active: 0
			}
		},
		methods: {
			/**
			 * 切换菜单
			 */
			changeMenu(index){
				this.active = index
			},
		},
		computed: {
			getActive(){
				// if(this.active === 0){
				// 	return 2
				// }
				// if(this.active === 1){
				// 	return 1
				// }
				// if(this.active === 2){
				// 	return 0
				// }
				return this.active
			},
			...mapGetters({
				getAccountBanlance: 'getAccountBanlance'
			})
		}
	}
</script>

<style scoped>
	.account_class{
		height: 100%;
		background-color: #20222c;
		margin-top: 20upx;;
	}
	.account_class .account_menu{
		width: 100%;
		height: 88upx;
		border-bottom: 1px solid rgba(255,255,255,.05);
		white-space: nowrap;
		overflow-x: auto;
	}
	.account_class .label{
		min-width: 28% !important; 
		text-align: center;
		line-height: 80upx;
		color: #90a2b0;
		font-size: 30upx;
		display: inline-block;
		padding: 0 20upx !important;
	}
	.account_class .label .line{
		width: 1.5rem;
		height: 2px;
		background: #2970e6;
		margin: auto;
		display: none;
	}
	.account_class .label.on .line{
		display: block;
	}
	.account_class .label.on{
		color: #2970e6;
		font-weight: bold;
	}
	.account_box{
		overflow-x: auto;
		height: 128upx;
	}
	.account_list{
		height: calc(100% - 628upx);
		overflow: auto;
	}
	.account_class .account_list_label{
		padding: 20upx;
		border-bottom: 1px solid rgba(255,255,255,.05)
	}
	.account_class .account_list_label .currency{
		font-size: 32upx;
		color: #aaa;
		margin-bottom: 20upx;
	}
	.account_class .table_hd,
	.account_class .table_bd{
		display: flex;
	}
	.account_class .table_hd .table_hd_label{
		font-size: 24upx;
		color: #8d9dbc;
	}
	.account_class .table_bd .table_bd_label{
		font-size: 24upx;
		line-height: 60upx;
		color: #fff;
	}
	.account_class .table_hd .table_hd_label:first-child,
	.account_class .table_bd .table_bd_label:first-child{
		width: 30%;
		text-align: left;
	}
	.account_class .table_hd .table_hd_label:nth-child(2),
	.account_class .table_bd .table_bd_label:nth-child(2){
		width: 40%;
	}
	.account_class .table_hd .table_hd_label:last-child,
	.account_class .table_bd .table_bd_label:last-child{
		width: 30%;
		text-align: right;
	}
</style>
