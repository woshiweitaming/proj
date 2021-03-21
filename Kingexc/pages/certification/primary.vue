<template>
	<view class="primary_certification">
		<view class="form_class">
			<view class="form_label">
				<view class="form_label_name"><text class="iconfont icon-int"></text></view>
				<view class="form_label_main">
					<view class="form_input_bar">
						<input :disabled="true" @tap="selectCountry" type="text" class="input_bar" v-model="form.country" :placeholder="getLangs('nationalTips')" />
					    <u-select @confirm="confirmCountry" :lang="getGlobalLang" :confirm="getLangs('confirm')" :cancel="getLangs('cancel')" v-model="show" value-name="id" :label-name="getLabelName" :list="countryList">{{getLangs('nationalTips')}}</u-select>
					</view>
				</view>
			</view>
			<view class="form_label">
				<view class="form_label_name"><text class="iconfont icon-mine"></text></view>
				<view class="form_label_main">
					<view class="form_input_bar">
						<input type="text" class="input_bar" :placeholder="getLangs('nameTips')" v-model="form.name" />
					</view>
				</view>
			</view>
			<view class="form_label">
				<view class="form_label_name"><text class="iconfont icon-businesscard"></text></view>
				<view class="form_label_main">
					<view class="form_input_bar">
						<input type="idcard" class="input_bar" :placeholder="getLangs('idcardTips')" v-model="form.idcard" />
					</view>
				</view>
			</view>
			<view class="form_label">
				<view class="form_label_name"><text class="iconfont icon-coordinates"></text></view>
				<view class="form_label_main">
					<view class="form_input_bar">
						<input type="text" class="input_bar" :placeholder="getLangs('addressTips')" v-model="form.adds" />
					</view>
				</view>
			</view>
			<view @tap="checkInhHandler" class="button">{{getLangs('submit')}}</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 初级认证
	 */
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	import country from '@/data/country.js'
	import { checkCertInfo } from '@/api/user.js'
	import validate from '@/utils/validate.js'
	export default {
		name: 'PrimaryCertification',
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				form: {
					country: '',
					name: '',
					idcard: '',
					adds: '',
				},
				countryList: country,
				show: false
			}
		},
		methods: {
			async checkInhHandler(){
				if(this.form.country === ''){
					return this.$tips.showToast(this.getLangs('nationalTips')) 
				}
				if(this.form.name.length == 0){
					return this.$tips.showToast(this.getLangs('nameTips')) 
				}
				if(this.form.idcard.length == 0){
					return this.$tips.showToast(this.getLangs('idcardTips')) 
				}
				if(this.form.adds.length == 0){
					return this.$tips.showToast(this.getLangs('addressTips')) 
				}
				const res = await checkCertInfo(this.form)
				this.backTips(res)
				if(validate.checkCode(res)){
					this.switchTab('/pages/user/index')
				}
			},
			selectCountry(){
				this.show = !this.show
			},
			confirmCountry(data){
				this.form.country = data[0].label
			}
		},
		computed: {
			getLabelName(){
				switch(this.getGlobalLang){
					case 'cn' :
					   return 'cn'
					case 'cns' :
					   return 'tw'
					case 'en' :
					   return 'en'
					case 'ja' :
					   return 'ja'
					case 'ko' :
					   return 'ko'
					case 'vi' :
					   return 'vi'
				}
			}
		},
		onShow() {
			this.setTitle(this.getLangs('primaryCert'))
		}
	}
</script>

<style scoped>
	page{
		background: #151936;
	}
	.primary_certification{
		padding: 40upx;
	}
	.form_label{
		background: rgba(255,255,255,.05);
		border-radius: 40upx;
	}
</style>
