<template>
	<view>
		<view class="form_label">
			<view class="form_label_name"><text class="iconfont icon-mobilephone"></text></view>
			<view class="form_label_main">
				<view class="form_input_bar qh">
					<!-- <picker @change="bindPickerChange" mode="selector" :value="index" :range="qhList" class="qh_class" :range-key="getKey">
					    <view class="uni-input" >{{getQhValue}}</view>
					</picker> -->
					<view @tap="open" class="qh_class"><view class="uni-input" >{{getQhValue}}</view></view>
					<u-select 
					    class="qh_class"
					    @confirm="confirm" 
						:confirm="getLangs('confirm')" 
						:cancel="getLangs('cancel')" 
						v-model="show" 
						value-name="en" 
						:label-name="getGlobalLang"
						:qh="true"
					    :list="qhList">{{getQhValue}}</u-select>
					<input type="text" @blur="checkInput" @input="checkInput" class="input_bar" :placeholder="getLangs('phonePlaceholder')" v-model="phone" />
				</view>
			</view>
		</view>
		<view class="form_label">
			<view class="form_label_name"><text class="iconfont icon-shake"></text></view>
			<view class="form_label_main">
				<view class="form_input_bar vcode">
					<input type="text" class="input_bar" :placeholder="getLangs('validCodePlaceholder')" v-model="vcode" />
					<view class="get_code" @click="getMessageCode">{{getVcodeText}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 手机号组件
	 */
	import langsMixins from '@/mixins/lang_mixins.js'
	import commonMixins from '@/mixins/common_mixins.js'
	import appConfig from '@/config/appConfig.js'
	import prefixSorted from '@/data/prefixSorted.js'
	import validate from '@/utils/validate.js'
	import { sendSms } from '@/api/public.js'
	export default {
		name: 'Phone',
		mixins: [langsMixins, commonMixins],
		data(){
			return {
				//手机号
				phone: '',
				//区号 - 中国
				qh: 1,
				//验证码
				vcode: '',
				//索引
				index: 0,
				//区号国家
				curQhCountry: 'USA',
				//区号列表
				qhList: prefixSorted,
				//计时器
				timer: null,
				//倒计时时间
				countTimer: appConfig.countTimer,
				//显示状态
				show: false
			}
		},
		methods: {
			//获取验证码
			async getMessageCode(){
				if(this.countTimer !== appConfig.countTimer){
					return
				}
				if(this.phone.length === 0){
					return this.$tips.showToast(this.getLangs('phonePlaceholder'))
				}
				const params = {
					phone: this.phone,
					qh: this.qh
				}
				this.$tips.showLoading(this.getLangs('loadingText'))
				const res = await sendSms(params)
				this.$tips.hideLoading()
				if(validate.checkCode(res)){
					this.countTimerHandler()
				}
				this.backTips(res)
			},
			//倒计时
			countTimerHandler(){
				this.countTimer--
				this.timer = setInterval(() => {
					this.countTimer--
					if(this.countTimer === 0){
						this.countTimer = appConfig.countTimer
						clearInterval(this.timer)
						this.timer = null
					}
				}, 1000)
			},
			//切换区号
			bindPickerChange(e){
				const index = e.detail.value
				const res = this.qhList[index]
				this.index = index
				this.qh = res.prefix
				this.curQhCountry = res.en
			},
			confirm(e){
				const data = e[0]
				this.qh = this.qhList.filter(res => res.en == data.value)[0].prefix
				this.curQhCountry = data.value
			},
			//获取手机号
			getPhone(){
				return this.phone
			},
			//获取验证码
			getVcode(){
				return this.vcode
			},
			//获取区号
			getQh(){
				return this.qh
			},
			open(){
				this.show = !this.show
			},
			checkInput(val){
				setTimeout(() => {
					const reg = /^[0-9]*$/;
					const value = val.detail.value
					if(value.indexOf(' ') > -1 || !reg.test(value)){
						return this.phone = ''
					}
					this.phone = value
				}, 50)
			}
		},
		computed: {
			//获取区号文本
			getQhValue(){
				console.log(this.curQhCountry)
				const result = this.qhList.filter(res => res.en === this.curQhCountry)[0]
				return `${result.prefix} - ${result[this.getGlobalLang]}`
			},
			//获取区号key
			getKey(){
				return this.getGlobalLang
			},
			//验证码文字
			getVcodeText(){
				return this.countTimer === appConfig.countTimer ? this.getLangs('getVerificationCode') :  `${this.countTimer}s`
			}
		},
		created() {
			const dataList = prefixSorted.sort((a, b) => {
				return Number(a.prefix) - Number(b.prefix)
			})
			this.qhList = dataList
			this.index = this.qhList.findIndex(res => res.en === this.curQhCountry)
		}
	}
</script>

<style scoped>
	.qh{
		padding-left: 100px;
	}
	.qh_class{
		position: absolute;
		left: 0;
		width: 90px;
	}
	.uni-input{
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		color: #2970e6
	}
</style>
