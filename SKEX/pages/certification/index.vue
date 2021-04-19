<template>
	<view class="certification_class">
		<view class="form_class">
			<view class="login_form_content">
				<view class="select_valid_action">
					<view :class="['action', active === index ? 'on' : '' ]" v-for="(items, index) in validActionList" :key="index" @tap="changeValidAction(index)">{{items}}<view class="line"></view></view>
				</view>
				<view class="form_class">
					<view class="login_form_content">
						<!--手机组件-->
						<Phone ref="phone" v-if="active === 0" />
						<!--邮箱组件-->
						<Email ref="email" v-if="active === 1" />
					</view>
				</view>
				<view class="form_label">
					<view class="form_label_name"><text class="iconfont icon-barrage"></text></view>
					<view class="form_label_main">
						<view class="form_input_bar">
							<input type="text" class="input_bar" :placeholder="getLangs('bankname')" v-model="params.bankname" />
						</view>
					</view>
				</view>
				<view class="form_label">
					<view class="form_label_name"><text class="iconfont icon-addressbook"></text></view>
					<view class="form_label_main">
						<view class="form_input_bar">
							<input type="text" class="input_bar" :placeholder="getLangs('bname')" v-model="params.bname" />
						</view>
					</view>
				</view>
				<view class="form_label">
					<view class="form_label_name"><text class="iconfont icon-businesscard"></text></view>
					<view class="form_label_main">
						<view class="form_input_bar">
							<input type="text" class="input_bar" :placeholder="getLangs('idcard')" v-model="params.idcard" />
						</view>
					</view>
				</view>
				<view class="form_label">
					<view class="form_label_name"><text class="iconfont icon-barrage"></text></view>
					<view class="form_label_main">
						<view class="form_input_bar">
							<input type="text" class="input_bar" :placeholder="getLangs('badds')" v-model="params.badds" />
						</view>
					</view>
				</view>
				<view class="form_label">
					<view class="form_label_name"><text class="iconfont icon-barrage"></text></view>
					<view class="form_label_main">
						<view class="form_input_bar">
							<input type="text" class="input_bar" :placeholder="getLangs('banknumber')" v-model="params.banknumber" />
						</view>
					</view>
				</view>
				<view class="form_label">
					<view class="form_label_name"><text class="iconfont icon-barrage"></text></view>
					<view class="form_label_main">
						<view class="form_input_bar">
							<input type="text" class="input_bar" :placeholder="getLangs('qbdizhi')" v-model="params.qbdizhi" />
						</view>
					</view>
				</view>
			</view>
			<view class="button" @tap="checkInHandler">{{getLangs('submit')}}</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 认证
	 */
	import langsMixins from '@/mixins/lang_mixins.js'
	import commonMixins from '@/mixins/common_mixins.js'
	import validateMixins from '@/mixins/validate_mixins.js'
	import Phone from '@/layouts/phone/phone.vue'
	import Email from '@/layouts/email/email.vue'
	import { checkCertInfo } from '@/api/user.js'
	import validate from '@/utils/validate.js'
	export default {
		name: 'Certification',
		mixins: [langsMixins, commonMixins, validateMixins],
		data(){
			return {
				params: {
					bankname: '',
					bname: '',
					idcard: '',
					badds: '',
					banknumber: '',
					qbdizhi: '',
				}
			}
		},
		components: {
			Phone,
			Email
		},
		methods: {
			/**
			 * 提交认证
			 */
			async checkInHandler(){
				this.baseParams = this.params
				if(this.merge()){
					const params = this.merge()
					params.checkType = params.verifyType
					delete params.verifyType
					const res = await checkCertInfo(params)
					if(validate.checkCode(res)){
						this.$tips.showToast(this.getLangs('success'))
						setTimeout(() => {
							this.back()
						}, 1000)
					}
					this.backTips(res)
				}
			}
		},
		onShow() {
			this.setTitle(this.getLangs('certificate'))
		}
	}
</script>

<style scoped>
	.certification_class{
		padding: 40upx;
	}
</style>
