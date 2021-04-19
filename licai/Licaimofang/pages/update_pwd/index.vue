<template>
	<view class="form_wrap">
		<view class="form_label">
			<view class="form_input_bar">
				<input type="password" class="input_bar" :placeholder="getLang('update_pwd_p2')" v-model="form.oldpwd" />
			</view>
		</view>
		<view class="form_label">
			<view class="form_input_bar">
				<input type="password" class="input_bar" :placeholder="getLang('update_pwd_p4')" v-model="form.newpwd" />
			</view>
		</view>
		<view class="form_label">
			<view class="btns" @click="updPwdHandler">{{getLang('update_pwd_p6')}}</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import { updPwd } from '@/apis/users.js'
	import tips from '@/utils/tips.js'
	export default {
		name: 'UpdatePwd',
		mixins: [langMixins],
		data(){
			return {
				form: {
					oldpwd: '',
					newpwd: ''
				}
			}
		},
		methods: {
			async updPwdHandler(){
				if(this.form.oldpwd.length === 0){
					return tips.showToast(this.getLang('update_pwd_p3'))
				}
				if(this.form.newpwd.length === 0){
					return tips.showToast(this.getLang('update_pwd_p5'))
				}
				const res = await updPwd(this.form)
			}
		}
	}
</script>

<style scoped>
	.btns{
		text-align: center;
		line-height: 80upx;
		background: #0077FF;
		border-radius: 40upx;
		color: #fff;
	}
	.input_bar{
		line-height: 40upx !important;
		height: 80upx !important;
	}
</style>
