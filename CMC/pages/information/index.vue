<template>
	<view class="information_class">
		<view class="form_class">
			<view class="select_valid_action">
				<view :class="['action', active === index ? 'on' : '' ]" v-for="(items, index) in validActionList" :key="index" @tap="changeValidAction(index)">{{getLangs(items)}}<view class="line"></view></view>
			</view>
			<view class="form_class">
				<view class="login_form_content">
					<!--手机组件-->
					<Phone ref="phone" v-if="active === 0" />
					<!--邮箱组件-->
					<Email ref="email" v-if="active === 1" />
				</view>
			</view>
			<view class="button" @tap="updPhoneHandler">{{getLangs('submit')}}</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 修改资料
	 */
	import langsMixins from '@/mixins/lang_mixins.js'
	import commonMixins from '@/mixins/common_mixins.js'
	import validateMixins from '@/mixins/validate_mixins.js'
	import Phone from '@/layouts/phone/phone.vue'
	import Email from '@/layouts/email/email.vue'
	import { updPhone } from '@/api/user.js'
	export default {
		name: 'Information',
		mixins: [langsMixins, commonMixins, validateMixins],
		components: {
			Phone,
			Email
		},
		methods: {
			/**
			 * 修改资料
			 */
			async updPhoneHandler(){
				if(this.merge()){
					const actionParams = this.merge()
					this.$tips.showLoading(this.getLangs('loadingText'))
					const res = await updPhone(actionParams)
					this.$tips.hideLoading()
					this.backTips(res)
				}
			}
		},
		onShow() {
			this.setTitle(this.getLangs('data'))
		}
	}
</script>

<style scoped>
	.information_class{
		padding: 40upx;
	}
</style>
