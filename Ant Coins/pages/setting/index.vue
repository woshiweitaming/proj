<template>
	<view class="setting_class">
		<view class="list_class">
			<view class="list_label" v-for="(items, index) in list" :key="index" @tap="navigateTo(items.path)">
			   {{getLangs(items.name)}}
			   <image src="../../static/images/right_arrow.png" class="right_arrow"></image>
			</view>
		</view>
		<view class="form_class">
			<view class="button" @tap="logout">{{getLangs('exit')}}</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 设置
	 */
	import langsMixins from '@/mixins/lang_mixins.js'
	import commonMixins from '@/mixins/common_mixins.js'
	import { userLoginOut } from '@/api/user.js'
	import validate from '@/utils/validate.js'
	export default {
		name: 'Information',
		mixins: [langsMixins, commonMixins],
		data(){
			return {
				list: [
					{
						name: 'changePassword',
						path: '/pages/pwd/index'
					},
					{
						name: 'changeInformation',
						path: '/pages/information/index'
					},
					{
						name: 'changeNickname',
						path: '/pages/nickname/index'
					},
					{
						name: 'langSetting',
						path: '/pages/lang/index'
					}
				]
			}
		},
		methods: {
			/**
			 * 退出账户
			 */
			async logout(){
				this.$tips.showModel(this.getLangs('sysTips'), this.getLangs('exitAccount'), this.getLangs('wait'), this.getLangs('confirm'), async (btn) => {
					if(btn.confirm){
						const res = await userLoginOut()
						console.log(res)
						if(validate.checkCode(res)){
							this.$storage.delLocalData('token')
							this.$storage.delLocalData('nickname')
							this.reLaunch('/pages/login/index')
						}
					}
				})
			}
		},
		onShow() {
			this.setTitle(this.getLangs('setting'))
		}
	}
</script>

<style scoped>
	.setting_class{
		height: 100%;
		box-sizing: border-box;
		background: #111
	}
	.list_class{
		background: #20222c;
	}
	.setting_class .list_label{
		color: #aaa;
		border-bottom: 1px solid rgba(255,255,255,.1);
		height: 100upx;
		padding-top: 10upx;
	}
	.form_class{
		padding: 60upx;
	}
</style>
