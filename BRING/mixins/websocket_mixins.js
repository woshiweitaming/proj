/**
 * websocket 混入组件
 */
import { mapGetters, mapMutations } from 'vuex'
import appConfig from '@/config/appConfig.js'
import Utils from '@/utils/Utils.js'
let cloneData = []
let times = 20
let timer = null
const websocketMixins = {
	data(){
		return {
			url: '',
			roomId: 0
		}
	},
	methods: {
		//获取ws数据
		async createWSData(roomId){
			this.roomId = roomId
			this.openSocket()
		},
		//建立链接
		openSocket(){
			const sid = Date.parse(new Date()) + Utils.randomCoding()
			this.url = `${appConfig.wsDomain}/websocket/${sid}/${this.roomId}`
			const that = this
			uni.connectSocket({
				url: this.url,
				complete: ()=> {
					that.onSocket()
					that.onSocketClose()
					that.onSocketError()
				}
			})
		},
		//监听发送
		onSocket(){
			uni.onSocketMessage((res) => {
				if(res.data == 1){
					return this.setWSData(cloneData)
				}
				const data = JSON.parse(res.data)
				cloneData = data
				this.setWSData(data)
			});
		},
		//监听关闭
		onSocketClose(){
			const that = this
			uni.onSocketClose(function (res) {
				console.log('已关闭')
				console.log(res)
				times = 20
				setTimeout(() => {
					that.createWSData(0)
				}, 3000)
			});
		},
		//监听错误
		onSocketError(){
			const that = this
			uni.onSocketError(function (res) {
			  that.setWSData(cloneData)
			  setTimeout(() => {
			  	that.createWSData(0)
			  }, 3000)
			});
		},
		//设置定时器
		setTimer(){ 
		},
		...mapMutations({
			setWSData: 'SET_WS_DATA',
			setLeftWsData: 'SET_LEFT_WS_DATA'
		})
	},
	computed: {
		getClass(){
			return (gain, type) => {
				return gain > 0 ? 'green' : 'red' 
			}
		},
		...mapGetters({
			getWSData: 'getWSData'
		})
	}
}

export default websocketMixins