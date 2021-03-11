<template>
	<view class="pwd_class">
		<view class="form_class">
			<view class="login_form_content">
				<view class="form_label">
					<view class="form_label_name"><text class="iconfont icon-lock"></text></view>
					<view class="form_label_main">
						<view class="form_input_bar">
							<input type="password" class="input_bar" :placeholder="getLangs('oldPwdPlaceholder')" v-model="params.oldpwd" />
						</view>
					</view>
				</view>
				<view class="form_label">
					<view class="form_label_name"><text class="iconfont icon-lock"></text></view>
					<view class="form_label_main">
						<view class="form_input_bar">
							<input type="password" class="input_bar" :placeholder="getLangs('newPwdPlaceholder')" v-model="params.newpwd" />
						</view>
					</view>
				</view>
			</view>
			<view class="button" @tap="updPwdHandler">{{getLangs('submit')}}</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 修改密码
	 */
	import langsMixins from '@/mixins/lang_mixins.js'
	import commonMixins from '@/mixins/common_mixins.js'
	import { updPwd } from '@/api/user.js'
	export default {
		name: 'Pwd',
		mixins: [langsMixins, commonMixins],
		data(){
			return {
				params: {
					oldpwd: '',
					newpwd: ''
				}
			}
		},
		methods: {
			/**
			 * 修改密码
			 */
			async updPwdHandler(){
				if(this.params.oldpwd === ''){
					return this.$tips.showToast(this.getLangs('oldPwdPlaceholder'))
				}
				if(this.params.newpwd === ''){
					return this.$tips.showToast(this.getLangs('newPwdPlaceholder'))
				}
				const res = await updPwd(this.params)
				this.backTips(res)
			}
		},
		onShow() {
			this.setTitle(this.getLangs('password'))
		}
	}
</script>

<style scoped>
	.pwd_class{
		padding: 40upx;
	}
</style>
