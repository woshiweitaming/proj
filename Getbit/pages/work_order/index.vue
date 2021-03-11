<template>
	<view class="page">
		<view class="form_label">
			<view class="name">反馈类型<text class="imp">(必填)</text></view>
			<input class="input_bar" placeholder="请输入反馈类型" @click="show = true" v-model="form.type" :disabled="true"/>
		</view>
		<view class="form_label">
			<view class="name">反馈内容<text class="imp">(必填)</text></view>
			<u-input v-model="form.content" placeholder="请相信说明,以便于我们解决问题,你最多可以填写300字" type="textarea" :border="true" :height="400"/>
		</view>
		<view class="form_label">
			<view class="name">联系方式</view>
			<input class="input_bar" v-model="form.contact" placeholder="请输入您的手机号或者邮箱(以便我们及时反馈)"/>
		</view>
		<view class="form_label">
			<view :class="['buttons', getActive]">提交</view>
		</view>
		<u-action-sheet @click="clickHandler" :list="list" v-model="show"></u-action-sheet>
	</view>
</template>

<script>
	export default {
		name: 'WorkOrder',
		data(){
			return {
				form: {
					type: '财务类',
					content: '',
					contact: ''
				},
				list: [{
					text: '财务类'
				},
				{
					text: 'app使用类'
				},
				{
					text: '登录注册类'
				}],
				show: false
			}
		},
		computed: {
			getActive(){
				if(this.form.type.length > 0 && this.form.content.length > 0 && this.form.contact.length > 0){
					return 'on'
				}
				return 'un'
			}
		},
		methods: {
			clickHandler(index){
				this.form.type = this.list[index].text
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: '问题反馈'
			})
			this.show = true
		}
	}
</script>

<style scoped>
	.page{
		background: #fff;
	}
	.imp{
		color: #FA3534;
	}
	.input_bar{
		width: 100%;
		border: 1px solid #eee;
	}
</style>
