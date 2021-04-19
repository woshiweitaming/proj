<template>
	<view class="user_cell">
		<view class="cells tleft">
			<text class="name">{{getLang('user_p2')}}</text>
			<image src="/static/images/user/unlogin.png" mode="widthFix" class="icon"></image>
		</view>
		<u-cell-group>
			<u-cell-item :title="getLang('user_p3')"  :value="getUserInfo.ncikname" :arrow="false"></u-cell-item>
		</u-cell-group>
		<u-cell-group>
			<u-cell-item @click="toPage('/pages/update_pwd/index')" :title="getLang('user_p5')" ></u-cell-item>
			<u-cell-item @click="toPage('/pages/bank_list/index')" :title="getLang('user_p4')" ></u-cell-item>
			<u-cell-item @click="toPage('/pages/delivery_address/index')" :title="getLang('user_p16')" ></u-cell-item>
			<u-cell-item @click="toPage('/pages/update_phone/index')" :title="getLang('user_p13')" ></u-cell-item>
			<u-cell-item @click="toPage('/pages/update_nickname/index')" :title="getLang('user_p14')" ></u-cell-item>
			<u-cell-item :title="getLang('user_p6')" ></u-cell-item>
		</u-cell-group>
		<!-- <u-cell-group>
			<u-cell-item :title="getLang('user_p7')" ></u-cell-item>
			<u-cell-item :title="getLang('user_p8')" ></u-cell-item>
		</u-cell-group> -->
		<view class="u-cell-box">
			<view class="cells btns" @click="show = true">{{getLang('user_p9')}}</view>
		</view>
		<u-modal v-model="show" @confirm="logoutHandler" width="70%" :title="getLang('logout_p1')" :content="getLang('logout_p2')" :confirm-text="getLang('logout_p3')" :cancel-text="getLang('logout_p4')"></u-modal>
	</view>
</template>

<script>
	import { mapGetters } from 'vuex'
	import langMixins from '@/mixins/lang_mixins.js'
	import { getCheckIn, loginOut } from '@/apis/users.js'
	import storage from '@/utils/storage.js'
	import tips from '@/utils/tips.js'
	export default {
		name: 'UserCell',
		mixins: [langMixins],
		data(){
			return {
				show: false
			}
		},
		methods: {
			toPage(path){
				uni.navigateTo({
					url: path
				})
			},
			async getCheckInHandler(){
				const res = await getCheckIn()
			},
			async logoutHandler(){
				storage.clearLocalData()
				tips.showToast(this.getLang('common_p6'))
				setTimeout(() => {
					uni.reLaunch({
						url: '/pages/home/index'
					})
				}, 1500)
			
			}
		},
		computed: {
			...mapGetters({
				getUserInfo: 'getUserInfo'
			})
		},
		created() {
		}
	}
</script>

<style scoped>
	.u-cell-box{
		margin-bottom: 20upx;
	}
	.cells{
		background: #fff;
		text-align: center;
		padding: 26upx 32upx;
		line-height: 54upx;
		position: relative;
	}
	.cells .icon{
		width: 60upx;
		position: absolute;
		right: 20upx;
	}
	.cells .name{
		color: #606266;
		text-align: left;
	}
	.tleft{
		text-align: left;
	}
	.btns{
		border-bottom: 1px solid #e4e7ed;
	}
</style>
