/**
 * 登录注册混入组件
 */
import { mapGetters, mapMutations } from 'vuex'
import { userLogin } from '@/apis/user.js'
import storage from '@/utils/storage.js'
const loginMixins = {
	data(){
		return {
			status: false
		}
	},
	methods: {
		changeStatus(){
			this.status = !this.status
		},
		toPage(path){
			uni.navigateTo({
				url: path
			})
		},
		async login(){
			if(this.form.username.length > 0 && this.form.password.length > 0){
				const res = await userLogin(this.form)
				uni.showToast({
					icon: 'none',
					title: '登陆成功'
				})
				setTimeout(() => {
					storage.setLocalData('uid', res.uid)
					storage.setLocalData('token', res.token)
					storage.setLocalData('username', res.username)
					storage.setLocalData('yaoqingma', res.yaoqingma)
					uni.reLaunch({
						url: '/pages/home/index'
					})
				}, 2000)
			}
		},
		tips(msg){
			uni.showToast({
				icon: 'none',
				title: msg
			})
		},
		toQhPage(){
			uni.navigateTo({
				url: '/pages/qh/index'
			})
		},
		async register(type, params){
			//手机注册
			if(type == 0){
				
			}
			//邮箱注册
			if(type == 1){
				
			}
		},
		...mapMutations({
			setAre: 'SET_ARE'
		})
	},
	computed: {
		getImgUrl(){
			return this.status ? '../../static/images/icons/login/eyes.png' : '../../static/images/icons/login/eyes1.png'
		},
		getActive(){
			if(this.form.username.length > 0 && this.form.password.length > 0){
				return 'on'
			}
			return 'un'
		},
		...mapGetters({
			getAre: 'getAre'
		})
	}
}

export default loginMixins