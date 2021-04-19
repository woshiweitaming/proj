<template>
	<view class="form_wrap">
		<view class="form_label">
			<view class="form_input_bar">
				<input type="text" class="input_bar" :placeholder="getLang('update_nickname_p2')" v-model="form.nickName" />
			</view>
		</view>
		<view class="form_label">
			<view class="btns" @click="updNickNameHandler">{{getLang('update_nickname_p3')}}</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import { updNickName } from '@/apis/users.js'
	import tips from '@/utils/tips.js'
	export default {
		name: 'UpdateNickname',
		mixins: [langMixins],
		data(){
			return {
				form: {
					nickName: ''
				}
			}
		},
		methods: {
			async updNickNameHandler(){
				if(this.form.nickName.length === 0){
					return tips.showToast(this.getLang('update_pwd_p3'))
				}
				const res = await updNickName(this.form)
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('update_nickname_p1')
			})
		}
	}
</script>

<style scoped>
	.input_bar{
		line-height: 40upx !important;
		height: 80upx !important;
	}
</style>
