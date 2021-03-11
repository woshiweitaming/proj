/**
 * 国际化混入组件
 */
import { mapMutations, mapGetters } from 'vuex'
import { getLanguage } from '@/api/public.js'
import cn from '@/lang/cn.js'
import en from '@/lang/en.js'
import vi from '@/lang/vi.js'
import ja from '@/lang/ja.js'
import ko from '@/lang/ko.js'
import cns from '@/lang/cns.js'
const langsMixins = {
	methods: {
		async getLanguageHandler(){
			const localVer = this.$storage.getLocalData('vesion')
			const localVesion = localVer == null || localVer == '' ? 1 : localVer
			const params = {
				vesion: localVesion
			}
			const res = await getLanguage(params)
			const data = res.data
			const vesion = res.vesion
			if(res.update){
				this.$storage.setLocalData('langCnData', JSON.stringify(data.cn))
				this.$storage.setLocalData('langEnData', JSON.stringify(data.en))
				this.$storage.setLocalData('langCnsData', JSON.stringify(data.cns))
				this.$storage.setLocalData('langKoData', JSON.stringify(data.ko))
				this.$storage.setLocalData('langJaData', JSON.stringify(data.ja))
				this.$storage.setLocalData('langViData', JSON.stringify(data.vi))
				this.$storage.setLocalData('vesion', JSON.stringify(vesion))
			}
			this.setCurrentLangLocalData()
		},
		/**
		 * 切换语言
		 */
		changeLang(value){
			this.setGlobalLang(value)
			this.$storage.setLocalData('lang', value)
			this.setCurrentLangLocalData()
			this.setTabbarText()
		},
		/**
		 * 设置tabbar
		 */
		setTabbarText(){
			const tabbar = [
				{
					cn: '首页',
					en: 'Home',
					cns: '首頁',
					ja: 'ホーム',
					ko: '집',
					vi: 'Trang Chủ'
				},
				// {
				// 	// cn: '矿池',
				// 	en: 'Pool',
				// 	cns: '礦池',
				// 	ja: '鉱業プール',
				// 	ko: '마이닝 풀',
				// 	vi: 'Nhóm khai thác'
				// },
				{
					cn: '交易区',
					en: 'Trade',
					cns: '交易',
					ja: '取引',
					ko: '무역',
					vi: 'buôn bán'
				},
				// {
				// 	// cn: '订单',
				// 	en: 'Order',
				// 	cns: '訂單',
				// 	ja: '注文書',
				// 	ko: '주문 하 다',
				// 	vi: 'Thứ'
				// },
				{
					cn: '资产',
					en: 'Property',
					cns: '資產',
					ja: '資産',
					ko: '자산',
					vi: 'khai'
				},
				{
					cn: '我的',
					en: 'My',
					cns: '我的',
					ja: '私の',
					ko: '나의',
					vi: 'của'
				}
			]
			const lang = this.getGlobalLang
			tabbar.forEach((items, index) => {
				uni.setTabBarItem({
				    index: index,
				    text: items[lang]
				 });
			})
		},
		//处理当前语言
		currentSysHanlder(){
			let sysLang = ''
			// #ifdef H5
			const lang = this.$storage.getLocalData('lang')
			sysLang = lang == '' || lang == null ? navigator.language : lang
			// #endif
			const sys = uni.getSystemInfoSync()
			sysLang = sys.language
			switch(sysLang){
				//简体中文
				case 'zh-Hans-US' : case 'zh-CN' :
				   return 'cn';
				//英文
				case 'en-US' :
				   return 'en';
				//日文
				case 'ja-US' : case 'ja-JP' :
				   return 'ja';
				//韩文
				case 'ko-US' : case 'ko-KR' :
				   return 'ko';
				//繁体中文
				case 'zh-Hant-US' : case 'zh-TW' : case 'zh-Hant-HK' :
				   return 'cns';
				//越南文
				case 'vi-US' : case 'vi-VN' :
				   return 'vi';
				//其他
				default :
				   return 'cn'
			}
		},
		setCurrentLangLocalData(){
			const lang = this.$storage.getLocalData('lang')
			let localLangData = {}
			if(lang == 'cn'){
				localLangData = this.$storage.getLocalData('langCnData')
			}
			if(lang == 'en'){
				localLangData = this.$storage.getLocalData('langEnData')
			}
			if(lang == 'cns'){
				localLangData = this.$storage.getLocalData('langCnsData')
			}
			if(lang == 'ja'){
				localLangData = this.$storage.getLocalData('langJaData')
			}
			if(lang == 'ko'){
				localLangData = this.$storage.getLocalData('langKoData')
			}
			if(lang == 'vi'){
				localLangData = this.$storage.getLocalData('langViData')
			}
			this.setLangData(JSON.parse(localLangData))
		},
		...mapMutations({
			setGlobalLang: 'SET_GLOBAL_LANG',
			setLangData: 'SET_LANG_DATA'
		})
	},
	computed: {
		/**
		 * 获取文本
		 */
		getLangs(){
			return name => {
				// return this.getGlobalLang === 'cn' ? cn[name] : en[name]
				// const localLangData = this.$storage.getLocalData('langData')
				const globalLangData = this.getLangData
				return globalLangData[name]
				// if(globalLangData == null || globalLangData == '') return ''
				// let data = {}
				// switch (this.getGlobalLang) {
				// 	case 'cn' :
				// 	   data  = globalLangData.cn
				// 	   break;
				// 	case 'en' :
				// 	   data  = globalLangData.en
				// 	   break;
				// 	case 'cns' :
				// 	   data  = globalLangData.cns
				// 	   break;
				// 	case 'ja' :
				// 	   data  = globalLangData.ja
				// 	   break;
				// 	case 'ko' :
				// 	   data = globalLangData.ko
				// 	   break;
				// 	case 'vi' :
				// 	   data = globalLangData.vi
				// 	   break;
				// }
				// return data[name]
			}
		},
		getText(){
			const data = {
				cn: 'CNY',
				en: 'USDT',
				cns: 'TWD',
				ja: 'JPY',
				ko: 'KRW',
				vi: 'VND'
			}
			const lang = this.getGlobalLang
			return data[lang]
		},
		...mapGetters({
			getGlobalLang: 'getGlobalLang',
			getLangData: 'getLangData'
		})
	},
	onShow(){
		this.setTabbarText()
	}
}

export default langsMixins