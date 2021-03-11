<template>
	<view class="nickname_class">
		<view class="form_class">
			<view class="login_form_content">
				<view class="form_label">
					<view class="form_label_name"><text class="iconfont icon-barrage"></text></view>
					<view class="form_label_main">
						<view class="form_input_bar">
							<input type="text" class="input_bar" :placeholder="getLangs('nicknamePlaceholder')" v-model="params.nickName" />
						</view>
					</view>
				</view>
			</view>
			<view class="button" @tap="updNicknameHandler">{{getLangs('submit')}}</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 修改昵称
	 */
	import langsMixins from '@/mixins/lang_mixins.js'
	import commonMixins from '@/mixins/common_mixins.js'
	import { updNickName } from '@/api/user.js'
	export default {
		name: 'Nickname',
		mixins: [langsMixins, commonMixins],
		data(){
			return {
				params: {
					nickName: ''
				}
			}
		},
		methods: {
			/**
			 * 修改昵称
			 */
			async updNicknameHandler(){
				if(this.params.nickName === ''){
					return this.$tips.showToast(this.getLangs('nicknamePlaceholder'))
				}
				const res = await updNickName(this.params)
				this.backTips(res)
			}
		},
		onShow() {
			this.setTitle(this.getLangs('nickname'))
		}
	}
</script>

<style scoped>
	.nickname_class{
		padding: 40upx;
	}
</style>
