import appConfig from '@/config/appConfig.js'
const common_mixins = {
	methods: {
		toBack(){
			const pages = getCurrentPages()
			if (pages.length > 1) {
			   uni.navigateBack()
			}else{
				history.go(-1)
			}
		},
		showToast(msg){
			uni.showToast({
				icon: 'none',
				title: msg
			})
		},
		getParams(data){
			return Object.keys(data).map(function (key) {
			        return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
			}).join("&");
		},
		formatDate(date) {
            var date = new Date(parseFloat(date) * 1000);
            var YY = date.getFullYear() + '-';
            var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
            var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
            var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
            var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
            var ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
            return YY + MM + DD +" "+hh + mm + ss;
        }
	},
	onShow(){
		uni.setNavigationBarTitle({
			title: appConfig.appName
		})
	}
}

export default common_mixins