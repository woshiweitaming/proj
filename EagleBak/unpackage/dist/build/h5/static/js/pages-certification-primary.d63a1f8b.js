(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-certification-primary"],{"0b77":function(a,n,i){"use strict";i.r(n);var e=i("f51f"),t=i.n(e);for(var o in e)"default"!==o&&function(a){i.d(n,a,(function(){return e[a]}))}(o);n["default"]=t.a},"24ba":function(a,n,i){var e=i("24fb");n=e(!1),n.push([a.i,"uni-page-body[data-v-3ffc138f]{background:#20222c}.primary_certification[data-v-3ffc138f]{padding:%?40?%}.form_label[data-v-3ffc138f]{background:hsla(0,0%,100%,.05);border-radius:%?40?%}body.?%PAGE?%[data-v-3ffc138f]{background:#20222c}",""]),a.exports=n},2879:function(a,n,i){var e=i("24ba");"string"===typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);var t=i("4f06").default;t("30399bb1",e,!0,{sourceMap:!1,shadowMode:!1})},"3ee1":function(a,n,i){var e=i("24fb");n=e(!1),n.push([a.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-select__action[data-v-054fee37]{position:relative;line-height:%?70?%;height:%?70?%}.u-select__action__icon[data-v-054fee37]{position:absolute;right:%?20?%;top:50%;-webkit-transition:-webkit-transform .4s;transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:1}.u-select__action__icon--reverse[data-v-054fee37]{-webkit-transform:rotate(-180deg) translateY(50%);transform:rotate(-180deg) translateY(50%)}.u-select__hader__title[data-v-054fee37]{color:#606266}.u-select--border[data-v-054fee37]{border-radius:%?6?%;border-radius:4px;border:1px solid #dcdfe6}.u-select__header[data-v-054fee37]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?80?%;padding:0 %?40?%}.u-select__body[data-v-054fee37]{width:100%;height:%?500?%;overflow:hidden;background-color:#fff}.u-select__body__picker-view[data-v-054fee37]{height:100%;box-sizing:border-box}.u-select__body__picker-view__item[data-v-054fee37]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?32?%;color:#303133;padding:0 %?8?%}',""]),a.exports=n},5088:function(a,n,i){"use strict";var e=i("2879"),t=i.n(e);t.a},5738:function(a,n,i){"use strict";i.r(n);var e=i("5c31"),t=i.n(e);for(var o in e)"default"!==o&&function(a){i.d(n,a,(function(){return e[a]}))}(o);n["default"]=t.a},"5c31":function(a,n,i){"use strict";i("cb29"),i("d81d"),i("a9e3"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={props:{list:{type:Array,default:function(){return[]}},border:{type:Boolean,default:!0},value:{type:Boolean,default:!1},cancelColor:{type:String,default:"#606266"},confirmColor:{type:String,default:"#2979ff"},zIndex:{type:[String,Number],default:0},safeAreaInsetBottom:{type:Boolean,default:!1},maskCloseAble:{type:Boolean,default:!0},defaultValue:{type:Array,default:function(){return[0]}},mode:{type:String,default:"single-column"},valueName:{type:String,default:"value"},labelName:{type:String,default:"label"},childName:{type:String,default:"children"},title:{type:String,default:""},cancel:{type:String,default:"取消"},confirm:{type:String,default:"确定"},qh:{type:Boolean,default:!1}},data:function(){return{defaultSelector:[0],columnData:[],selectValue:[],lastSelectIndex:[],columnNum:0,moving:!1}},watch:{value:{immediate:!0,handler:function(a){var n=this;a&&setTimeout((function(){return n.init()}),10)}}},computed:{uZIndex:function(){return this.zIndex?this.zIndex:this.$u.zIndex.popup}},methods:{pickstart:function(){},pickend:function(){},init:function(){this.setColumnNum(),this.setDefaultSelector(),this.setColumnData(),this.setSelectValue()},setDefaultSelector:function(){this.defaultSelector=this.defaultValue.length==this.columnNum?this.defaultValue:Array(this.columnNum).fill(0),this.lastSelectIndex=this.$u.deepClone(this.defaultSelector)},setColumnNum:function(){if("single-column"==this.mode)this.columnNum=1;else if("mutil-column"==this.mode)this.columnNum=this.list.length;else if("mutil-column-auto"==this.mode){var a=1,n=this.list;while(n[0][this.childName])n=n[0]?n[0][this.childName]:{},a++;this.columnNum=a}},setColumnData:function(){var a=[];if(this.selectValue=[],"mutil-column-auto"==this.mode)for(var n=this.list[this.defaultSelector.length?this.defaultSelector[0]:0],i=0;i<this.columnNum;i++)0==i?(a[i]=this.list,n=n[this.childName]):(a[i]=n,n=n[this.defaultSelector[i]][this.childName]);else"single-column"==this.mode?a[0]=this.list:a=this.list;this.columnData=a},setSelectValue:function(){for(var a=null,n=0;n<this.columnNum;n++)a=this.columnData[n][this.defaultSelector[n]],this.selectValue.push({value:a?a[this.valueName]:null,label:a?a[this.labelName]:null,prefix:a?a["prefix"]:null}),a&&a.extra&&(this.selectValue.extra=a.extra)},columnChange:function(a){var n=this,i=null,e=a.detail.value;if(this.selectValue=[],"mutil-column-auto"==this.mode){this.lastSelectIndex.map((function(a,n){a!=e[n]&&(i=n)})),this.defaultSelector=e;for(var t=i+1;t<this.columnNum;t++)this.columnData[t]=this.columnData[t-1][t-1==i?e[i]:0][this.childName],this.defaultSelector[t]=0;e.map((function(a,i){var t=n.columnData[i][e[i]],o={value:t?t[n.valueName]:null,label:t?t[n.labelName]:null};t&&t.extra&&(o.extra=t.extra),n.selectValue.push(o)})),this.lastSelectIndex=e}else if("single-column"==this.mode){var o=this.columnData[0][e[0]],c={value:o?o[this.valueName]:null,label:o?o[this.labelName]:null};o&&o.extra&&(c.extra=o.extra),this.selectValue.push(c)}else"mutil-column"==this.mode&&e.map((function(a,i){var t=n.columnData[i][e[i]],o={value:t?t[n.valueName]:null,label:t?t[n.labelName]:null};t&&t.extra&&(o.extra=t.extra),n.selectValue.push(o)}))},close:function(){this.$emit("input",!1)},getResult:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;a&&this.$emit(a,this.selectValue),this.close()},selectHandler:function(){this.$emit("click")}}};n.default=e},"7fef":function(a,n,i){var e=i("3ee1");"string"===typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);var t=i("4f06").default;t("0443581f",e,!0,{sourceMap:!1,shadowMode:!1})},8860:function(a,n,i){"use strict";i.d(n,"b",(function(){return t})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){return e}));var e={uPopup:i("ccbd").default},t=function(){var a=this,n=a.$createElement,i=a._self._c||n;return i("v-uni-view",{staticClass:"u-select"},[i("u-popup",{attrs:{maskCloseAble:a.maskCloseAble,mode:"bottom",popup:!1,length:"auto",safeAreaInsetBottom:a.safeAreaInsetBottom,"z-index":a.uZIndex},on:{close:function(n){arguments[0]=n=a.$handleEvent(n),a.close.apply(void 0,arguments)}},model:{value:a.value,callback:function(n){a.value=n},expression:"value"}},[i("v-uni-view",{staticClass:"u-select"},[i("v-uni-view",{staticClass:"u-select__header",on:{touchmove:function(n){n.stopPropagation(),n.preventDefault(),arguments[0]=n=a.$handleEvent(n)}}},[i("v-uni-view",{staticClass:"u-select__header__cancel u-select__header__btn",style:{color:a.cancelColor},attrs:{"hover-class":"u-hover-class","hover-stay-time":150},on:{click:function(n){arguments[0]=n=a.$handleEvent(n),a.getResult("cancel")}}},[a._v(a._s(a.cancel))]),i("v-uni-view",{staticClass:"u-select__header__title"},[a._v(a._s(a.title))]),i("v-uni-view",{staticClass:"u-select__header__confirm u-select__header__btn",style:{color:a.moving?a.cancelColor:a.confirmColor},attrs:{"hover-class":"u-hover-class","hover-stay-time":150},on:{touchmove:function(n){n.stopPropagation(),arguments[0]=n=a.$handleEvent(n)},click:function(n){n.stopPropagation(),arguments[0]=n=a.$handleEvent(n),a.getResult("confirm")}}},[a._v(a._s(a.confirm))])],1),i("v-uni-view",{staticClass:"u-select__body"},[i("v-uni-picker-view",{staticClass:"u-select__body__picker-view",attrs:{value:a.defaultSelector},on:{change:function(n){arguments[0]=n=a.$handleEvent(n),a.columnChange.apply(void 0,arguments)},pickstart:function(n){arguments[0]=n=a.$handleEvent(n),a.pickstart.apply(void 0,arguments)},pickend:function(n){arguments[0]=n=a.$handleEvent(n),a.pickend.apply(void 0,arguments)}}},a._l(a.columnData,(function(n,e){return i("v-uni-picker-view-column",{key:e},a._l(n,(function(n,e){return i("v-uni-view",{key:e,staticClass:"u-select__body__picker-view__item"},[a.qh?i("v-uni-view",{staticClass:"u-line-1"},[a._v(a._s(n["prefix"])+" - "+a._s(n[a.labelName]))]):i("v-uni-view",{staticClass:"u-line-1"},[a._v(a._s(n[a.labelName]))])],1)})),1)})),1)],1)],1)],1)],1)},o=[]},"9ba4":function(a,n,i){"use strict";i.r(n);var e=i("8860"),t=i("5738");for(var o in t)"default"!==o&&function(a){i.d(n,a,(function(){return t[a]}))}(o);i("ce79");var c,r=i("f0c5"),l=Object(r["a"])(t["default"],e["b"],e["c"],!1,null,"054fee37",null,!1,e["a"],c);n["default"]=l.exports},c7fe:function(a,n,i){"use strict";i.r(n);var e=i("f0d4"),t=i("0b77");for(var o in t)"default"!==o&&function(a){i.d(n,a,(function(){return t[a]}))}(o);i("5088");var c,r=i("f0c5"),l=Object(r["a"])(t["default"],e["b"],e["c"],!1,null,"3ffc138f",null,!1,e["a"],c);n["default"]=l.exports},cb29:function(a,n,i){var e=i("23e7"),t=i("81d5"),o=i("44d2");e({target:"Array",proto:!0},{fill:t}),o("fill")},cdef:function(a,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=[{id:"1",cn:"中国",en:"China",ja:"中国",vi:"Trung Quốc",ko:"중국",tw:"中國"},{id:"2",cn:"中国香港",en:"China Hong Kong",ja:"中国香港",vi:"Trung Quốc Hồng Kông",ko:"중국 홍콩",tw:"中國香港"},{id:"3",cn:"中国澳门",en:"Macao, China",ja:"中国、マカオ",vi:"Ma-cao, Trung Quốc",ko:"마카오, 중국",tw:"中國澳門"},{id:"4",cn:"台湾",en:"Taiwan",ja:"台湾",vi:"Đài loan",ko:"대만",tw:"台灣"},{id:"4",cn:"阿富汗",en:"Afghanistan",ja:"アフガニスタン",vi:"Afghanistan",ko:"아프가니스탄",tw:"阿富汗"},{id:"8",cn:"阿尔巴尼亚",en:"Albania",ja:"アルバニア",vi:"Albania",ko:"알바니아",tw:"阿爾巴尼亞"},{id:"10",cn:"南极洲",en:"Antarctica",ja:"南極大陸",vi:"Nam Cực",ko:"남극",tw:"南極洲"},{id:"12",cn:"阿尔及利亚",en:"Algeria",ja:"アルジェリア",vi:"Algeria",ko:"알제리",tw:"阿爾及利亞"},{id:"16",cn:"美属萨摩亚",en:"American Samoa",ja:"アメリカ領サモア",vi:"American Samoa",ko:"아메리칸 사모아",tw:"美屬薩摩亞"},{id:"20",cn:"安道尔",en:"Andorra",ja:"アンドラ",vi:"Andorra",ko:"안도라",tw:"安道爾"},{id:"24",cn:"安哥拉",en:"Angola",ja:"アンゴラ",vi:"Angola",ko:"앙골라",tw:"安哥拉"},{id:"28",cn:"安提瓜和巴布达",en:"Antigua and Barbuda",ja:"アンティグアバーブーダ",vi:"Antigua và Barbuda",ko:"앤티가 바부 다",tw:"安提瓜和巴布達"},{id:"31",cn:"阿塞拜疆",en:"Azerbaijan",ja:"アゼルバイジャン",vi:"Azerbaijan",ko:"아제르바이잔",tw:"阿塞拜疆"},{id:"32",cn:"阿根廷",en:"Argentina",ja:"アルゼンチン",vi:"Argentina",ko:"아르헨티나",tw:"阿根廷"},{id:"36",cn:"澳大利亚",en:"Australia",ja:"オーストラリア",vi:"Châu Úc",ko:"호주",tw:"澳大利亞"},{id:"40",cn:"奥地利",en:"Austria",ja:"オーストリア",vi:"Áo",ko:"오스트리아",tw:"奧地利"},{id:"44",cn:"巴哈马",en:"Bahamas",ja:"バハマ",vi:"Bahamas",ko:"바하마",tw:"巴哈馬"},{id:"48",cn:"巴林",en:"Bahrain",ja:"バーレーン",vi:"Bahrain",ko:"바레인",tw:"巴林"},{id:"50",cn:"孟加拉国",en:"Bangladesh",ja:"バングラデシュ",vi:"Bangladesh",ko:"방글라데시",tw:"孟加拉國"},{id:"51",cn:"亚美尼亚",en:"Armenia",ja:"アルメニア",vi:"Armenia",ko:"아르메니아",tw:"亞美尼亞"},{id:"52",cn:"巴巴多斯",en:"Barbados",ja:"バルバドス",vi:"Barbados",ko:"바베이도스",tw:"巴巴多斯"},{id:"56",cn:"比利时",en:"Belgium",ja:"ベルギー",vi:"nước Bỉ",ko:"벨기에",tw:"比利時"},{id:"60",cn:"百慕大",en:"Bermuda",ja:"バミューダ",vi:"Bermuda",ko:"버뮤다",tw:"百慕大"},{id:"64",cn:"不丹",en:"Bhutan",ja:"ブータン",vi:"Bhutan",ko:"부탄",tw:"不丹"},{id:"68",cn:"玻利维亚",en:"Bolivia",ja:"ボリビア",vi:"Bolivia",ko:"볼리비아",tw:"玻利維亞"},{id:"70",cn:"波黑",en:"Bosnia and Herzegovina",ja:"ボスニア・ヘルツェゴビナ",vi:"Bosnia và Herzegovina",ko:"보스니아 헤르체고비나",tw:"波黑"},{id:"72",cn:"博茨瓦纳",en:"Botswana",ja:"ボツワナ",vi:"Botswana",ko:"보츠와나",tw:"博茨瓦納"},{id:"74",cn:"布维岛",en:"Bouvet Island",ja:"ブーベ島",vi:"Đảo Bouvet",ko:"부베 섬",tw:"布維島"},{id:"76",cn:"巴西",en:"Brazil",ja:"ブラジル",vi:"Brazil",ko:"브라질",tw:"巴西"},{id:"84",cn:"伯利兹",en:"Belize",ja:"ベリーズ",vi:"Belize",ko:"벨리즈",tw:"伯利茲"},{id:"86",cn:"英属印度洋领地",en:"British Indian Ocean Territory",ja:"イギリス領インド洋地域",vi:"Lãnh thổ Ấn Độ Dương thuộc Anh",ko:"영국령 인도양 지역",tw:"英屬印度洋領地"},{id:"90",cn:"所罗门群岛",en:"Solomon Islands",ja:"ソロモン諸島",vi:"Quần đảo Solomon",ko:"솔로몬 제도",tw:"所羅門群島"},{id:"92",cn:"英属维尔京群岛",en:"The British Virgin Islands",ja:"英領バージン諸島",vi:"Quần đảo Virgin thuộc Anh",ko:"영국령 버진 아일랜드",tw:"英屬維爾京群島"},{id:"96",cn:"文莱",en:"Brunei",ja:"ブルネイ",vi:"Brunei",ko:"브루나이",tw:"文萊"},{id:"100",cn:"保加利亚",en:"Bulgaria",ja:"ブルガリア",vi:"Bungari",ko:"불가리아",tw:"保加利亞"},{id:"104",cn:"缅甸",en:"Myanmar",ja:"ミャンマー",vi:"Myanmar",ko:"미얀마",tw:"緬甸"},{id:"108",cn:"布隆迪",en:"Burundi",ja:"ブルンジ",vi:"Burundi",ko:"부룬디",tw:"布隆迪"},{id:"112",cn:"白俄罗斯",en:"Belarus",ja:"ベラルーシ",vi:"Belarus",ko:"벨라루스",tw:"白俄羅斯"},{id:"116",cn:"柬埔寨",en:"Cambodia",ja:"カンボジア",vi:"Campuchia",ko:"캄보디아",tw:"柬埔寨"},{id:"120",cn:"喀麦隆",en:"Cameroon",ja:"カメルーン",vi:"Cameroon",ko:"카메룬",tw:"喀麥隆"},{id:"124",cn:"加拿大",en:"Canada",ja:"カナダ",vi:"Canada",ko:"캐나다",tw:"加拿大"},{id:"132",cn:"佛得角",en:"Cape Verde",ja:"カーボベルデ",vi:"Cape Verde",ko:"카보 베르데",tw:"佛得角"},{id:"136",cn:"开曼群岛",en:"Cayman Islands",ja:"ケイマン諸島",vi:"Quần đảo Cayman",ko:"케이맨 제도",tw:"開曼群島"},{id:"140",cn:"中非",en:"Central Africa",ja:"中央アフリカ",vi:"Trung Phi",ko:"중앙 아프리카",tw:"中非"},{id:"144",cn:"斯里兰卡",en:"Sri Lanka",ja:"スリランカ",vi:"Sri Lanka",ko:"스리랑카",tw:"斯里蘭卡"},{id:"148",cn:"乍得",en:"Chad",ja:"チャド",vi:"Chad",ko:"차드",tw:"乍得"},{id:"152",cn:"智利",en:"Chile",ja:"チリ",vi:"Chile",ko:"칠레",tw:"智利"},{id:"158",cn:"台湾省",en:"Taiwan Province",ja:"台湾省",vi:"Tỉnh đài loan",ko:"대만 지방",tw:"台灣省"},{id:"162",cn:"圣诞岛",en:"Christmas island",ja:"クリスマス島",vi:"Đảo giáng sinh",ko:"크리스마스 섬",tw:"聖誕島"},{id:"166",cn:"科科斯（基林）群岛",en:"Cocos (Keeling) Islands",ja:"ココス（キーリング）諸島",vi:"Quần đảo Cocos (Keeling)",ko:"코코스 (킬링) 제도",tw:"科科斯（基林）群島"},{id:"170",cn:"哥伦比亚",en:"Colombia",ja:"コロンビア",vi:"Colombia",ko:"콜롬비아",tw:"哥倫比亞"},{id:"174",cn:"科摩罗",en:"Comoros",ja:"コモロ",vi:"Comoros",ko:"코모로",tw:"科摩羅"},{id:"175",cn:"马约特",en:"Mayotte",ja:"マヨット",vi:"Mayotte",ko:"마 요트",tw:"馬約特"},{id:"178",cn:"刚果（布）",en:"Republic of Congo)",ja:"コンゴ共和国）",vi:"Cộng hòa Congo)",ko:"콩고 공화국)",tw:"剛果（布）"},{id:"180",cn:"刚果（金）",en:"Congo (DRC)",ja:"コンゴ（DRC）",vi:"Congo (DRC)",ko:"콩고 (DRC)",tw:"剛果（金）"},{id:"184",cn:"库克群岛",en:"Island",ja:"島",vi:"Đảo",ko:"섬",tw:"庫克群島"},{id:"188",cn:"哥斯达黎加",en:"Costa Rica",ja:"コスタリカ",vi:"Costa Rica",ko:"코스타리카",tw:"哥斯達黎加"},{id:"191",cn:"克罗地亚",en:"Croatia",ja:"クロアチア",vi:"Croatia",ko:"크로아티아",tw:"克羅地亞"},{id:"192",cn:"古巴",en:"Cuba",ja:"キューバ",vi:"Cuba",ko:"쿠바",tw:"古巴"},{id:"196",cn:"塞浦路斯",en:"Cyprus",ja:"キプロス",vi:"Síp",ko:"키프로스",tw:"塞浦路斯"},{id:"203",cn:"捷克",en:"Czech Republic",ja:"チェコ共和国",vi:"Cộng hòa Séc",ko:"체코 공화국",tw:"捷克"},{id:"204",cn:"贝宁",en:"Benin",ja:"ベナン",vi:"Benin",ko:"베냉",tw:"貝寧"},{id:"208",cn:"丹麦",en:"Denmark",ja:"デンマーク",vi:"Đan mạch",ko:"덴마크",tw:"丹麥"},{id:"212",cn:"多米尼克",en:"Dominica",ja:"ドミニカ",vi:"Dominica",ko:"도미니카",tw:"多米尼克"},{id:"214",cn:"多米尼加",en:"Dominica",ja:"ドミニカ",vi:"Dominica",ko:"도미니카",tw:"多米尼加"},{id:"218",cn:"厄瓜多尔",en:"Ecuador",ja:"エクアドル",vi:"Ecuador",ko:"에콰도르",tw:"厄瓜多爾"},{id:"222",cn:"萨尔瓦多",en:"Salvador",ja:"サルバドール",vi:"Salvador",ko:"살바도르",tw:"薩爾瓦多"},{id:"226",cn:"赤道几内亚",en:"Equatorial Guinea",ja:"赤道ギニア",vi:"Equatorial Guinea",ko:"적도 기니",tw:"赤道幾內亞"},{id:"231",cn:"埃塞俄比亚",en:"Ethiopia",ja:"エチオピア",vi:"Ethiopia",ko:"에티오피아",tw:"埃塞俄比亞"},{id:"232",cn:"厄立特里亚",en:"Eritrea",ja:"エリトリア",vi:"Eritrea",ko:"에리트레아",tw:"厄立特里亞"},{id:"233",cn:"爱沙尼亚",en:"Estonia",ja:"エストニア",vi:"Estonia",ko:"에스토니아",tw:"愛沙尼亞"},{id:"234",cn:"法罗群岛",en:"Faroe Islands",ja:"フェロー諸島",vi:"Quần đảo Faroe",ko:"페로 제도",tw:"法羅群島"},{id:"238",cn:"福克兰群岛（马尔维纳斯）",en:"Falkland Islands (Malvinas)",ja:"フォークランド諸島（マルビナス）",vi:"Quần đảo Falkland (Malvinas)",ko:"포클랜드 제도 (말 비나 스)",tw:"福克蘭群島（馬爾維納斯）"},{id:"239",cn:"南乔治亚岛和南桑德韦奇岛",en:"South Georgia and South Sandwich Islands",ja:"サウスジョージアおよびサウスサンドイッチ諸島",vi:"Quần đảo Nam Georgia và Nam Sandwich",ko:"사우스 조지아 사우스 샌드위치 제도",tw:"南喬治亞島和南桑德韋奇島"},{id:"242",cn:"斐济",en:"Fiji",ja:"フィジー",vi:"Fiji",ko:"피지",tw:"斐濟"},{id:"246",cn:"芬兰",en:"Finland",ja:"フィンランド",vi:"Phần Lan",ko:"핀란드",tw:"芬蘭"},{id:"250",cn:"法国",en:"France",ja:"フランス",vi:"Nước pháp",ko:"프랑스",tw:"法國"},{id:"254",cn:"法属圭亚那",en:"French Guiana",ja:"仏領ギアナ",vi:"Guiana thuộc Pháp",ko:"프랑스 령 기아나",tw:"法屬圭亞那"},{id:"258",cn:"法属波利尼西亚",en:"French Polynesia",ja:"フランス領ポリネシア",vi:"Polynesia thuộc Pháp",ko:"프랑스 령 폴리네시아의",tw:"法屬波利尼西亞"},{id:"260",cn:"法属南部领地",en:"French Southern Territory",ja:"フランス領極南諸島",vi:"Lãnh thổ phía Nam của Pháp",ko:"프랑스 령 남부 지역",tw:"法屬南部領地"},{id:"262",cn:"吉布提",en:"Djibouti",ja:"ジブチ",vi:"Djibouti",ko:"지부티",tw:"吉布提"},{id:"266",cn:"加蓬",en:"Gabon",ja:"ガボン",vi:"Gabon",ko:"가봉",tw:"加蓬"},{id:"268",cn:"格鲁吉亚",en:"Georgia",ja:"ジョージア",vi:"Georgia",ko:"그루지야",tw:"格魯吉亞"},{id:"270",cn:"冈比亚",en:"Gambia",ja:"ガンビア",vi:"Gambia",ko:"감비아",tw:"岡比亞"},{id:"275",cn:"巴基斯坦",en:"Pakistan",ja:"パキスタン",vi:"Pakistan",ko:"파키스탄",tw:"巴基斯坦"},{id:"276",cn:"德国",en:"Germany",ja:"ドイツ",vi:"nước Đức",ko:"독일",tw:"德國"},{id:"288",cn:"加纳",en:"Ghana",ja:"ガーナ",vi:"Ghana",ko:"가나",tw:"加納"},{id:"292",cn:"直布罗陀",en:"Gibraltar",ja:"ジブラルタル",vi:"Gibraltar",ko:"지브롤터",tw:"直布羅陀"},{id:"296",cn:"基里巴斯",en:"Kiribati",ja:"キリバス",vi:"Kiribati",ko:"키리바시",tw:"基里巴斯"},{id:"300",cn:"希腊",en:"Greece",ja:"ギリシャ",vi:"Hy Lạp",ko:"그리스",tw:"希臘"},{id:"304",cn:"格陵兰",en:"Greenland",ja:"グリーンランド",vi:"Greenland",ko:"그린란드",tw:"格陵蘭"},{id:"308",cn:"格林纳达",en:"Grenada",ja:"グレナダ",vi:"Grenada",ko:"그레나다",tw:"格林納達"},{id:"312",cn:"瓜德罗普",en:"Guadeloupe",ja:"グアドループ",vi:"Guadeloupe",ko:"과들루프",tw:"瓜德羅普"},{id:"316",cn:"关岛",en:"Guam",ja:"グアム",vi:"Guam",ko:"괌",tw:"關島"},{id:"320",cn:"危地马拉",en:"Guatemala",ja:"グアテマラ",vi:"Guatemala",ko:"과테말라",tw:"危地馬拉"},{id:"324",cn:"几内亚",en:"Guinea",ja:"ギニア",vi:"Guinea",ko:"기니",tw:"幾內亞"},{id:"328",cn:"圭亚那",en:"Guyana",ja:"ガイアナ",vi:"Guyana",ko:"가이아나",tw:"圭亞那"},{id:"332",cn:"海地",en:"Haiti",ja:"ハイチ",vi:"Haiti",ko:"아이티",tw:"海地"},{id:"334",cn:"赫德岛和麦克唐纳岛",en:"Heard Island and McDonald Island",ja:"ハード島とマクドナルド島",vi:"Đảo Heard và Đảo McDonald",ko:"허드 섬과 맥도날드 섬",tw:"赫德島和麥克唐納島"},{id:"336",cn:"梵蒂冈",en:"Vatican",ja:"バチカン",vi:"Vatican",ko:"바티칸 궁전",tw:"梵蒂岡"},{id:"340",cn:"洪都拉斯",en:"Honduras",ja:"ホンジュラス",vi:"Honduras",ko:"온두라스",tw:"洪都拉斯"},{id:"344",cn:"香港特别行政区",en:"Hong Kong Special Administrative Region",ja:"香港特別行政区",vi:"Đặc khu hành chính Hồng Kông",ko:"홍콩 특별 행정구",tw:"香港特別行政區"},{id:"348",cn:"匈牙利",en:"Hungary",ja:"ハンガリー",vi:"Hungary",ko:"헝가리",tw:"匈牙利"},{id:"352",cn:"冰岛",en:"Iceland",ja:"アイスランド",vi:"Nước Iceland",ko:"아이슬란드",tw:"冰島"},{id:"356",cn:"印度",en:"India",ja:"インド",vi:"Ấn Độ",ko:"인도",tw:"印度"},{id:"360",cn:"印度尼西亚",en:"Indonesia",ja:"インドネシア",vi:"Indonesia",ko:"인도네시아",tw:"印度尼西亞"},{id:"364",cn:"伊朗",en:"Iran",ja:"イラン",vi:"Iran",ko:"이란",tw:"伊朗"},{id:"368",cn:"伊拉克",en:"Iraq",ja:"イラク",vi:"Iraq",ko:"이라크",tw:"伊拉克"},{id:"372",cn:"爱尔兰",en:"Ireland",ja:"アイルランド",vi:"Ireland",ko:"아일랜드",tw:"愛爾蘭"},{id:"376",cn:"以色列",en:"Israel",ja:"イスラエル",vi:"Người israel",ko:"이스라엘",tw:"以色列"},{id:"380",cn:"意大利",en:"Italy",ja:"イタリア",vi:"Nước Ý",ko:"이탈리아",tw:"意大利"},{id:"384",cn:"科特迪瓦",en:"Cote d'Ivoire",ja:"コートジボワール",vi:"Cote d'Ivoire",ko:"코트 디부 아르",tw:"科特迪瓦"},{id:"388",cn:"牙买加",en:"Jamaica",ja:"ジャマイカ",vi:"Jamaica",ko:"자메이카",tw:"牙買加"},{id:"392",cn:"日本",en:"Japan",ja:"日本",vi:"Nhật Bản",ko:"일본",tw:"日本"},{id:"398",cn:"哈萨克斯坦",en:"Kazakhstan",ja:"カザフスタン",vi:"Kazakhstan",ko:"카자흐스탄",tw:"哈薩克斯坦"},{id:"400",cn:"约旦",en:"Jordan",ja:"ヨルダン",vi:"Jordan",ko:"요르단",tw:"約旦"},{id:"404",cn:"肯尼亚",en:"Kenya",ja:"ケニア",vi:"Kenya",ko:"케냐",tw:"肯尼亞"},{id:"408",cn:"朝鲜",en:"Korea",ja:"韓国",vi:"Hàn Quốc",ko:"대한민국",tw:"朝鮮"},{id:"410",cn:"韩国",en:"Korea",ja:"韓国",vi:"Hàn Quốc",ko:"대한민국",tw:"韓國"},{id:"414",cn:"科威特",en:"Kuwait",ja:"クウェート",vi:"Kuwait",ko:"쿠웨이트",tw:"科威特"},{id:"417",cn:"吉尔吉斯斯坦",en:"Kyrgyzstan",ja:"キルギス",vi:"Kyrgyzstan",ko:"키르기스스탄",tw:"吉爾吉斯斯坦"},{id:"418",cn:"老挝",en:"Laos",ja:"ラオス",vi:"Nước Lào",ko:"라오스",tw:"老撾"},{id:"422",cn:"黎巴嫩",en:"Lebanon",ja:"レバノン",vi:"Lebanon",ko:"레바논",tw:"黎巴嫩"},{id:"426",cn:"莱索托",en:"Lesotho",ja:"レソト",vi:"Lesotho",ko:"레소토",tw:"萊索托"},{id:"428",cn:"拉脱维亚",en:"Latvia",ja:"ラトビア",vi:"Latvia",ko:"라트비아",tw:"拉脫維亞"},{id:"430",cn:"利比里亚",en:"Liberia",ja:"リベリア",vi:"Liberia",ko:"라이베리아",tw:"利比里亞"},{id:"434",cn:"利比亚",en:"Libya",ja:"リビア",vi:"Libya",ko:"리비아",tw:"利比亞"},{id:"438",cn:"列支敦士登",en:"Liechtenstein",ja:"リヒテンシュタイン",vi:"Liechtenstein",ko:"리히텐슈타인",tw:"列支敦士登"},{id:"440",cn:"立陶宛",en:"Lithuania",ja:"リトアニア",vi:"Lithuania",ko:"리투아니아",tw:"立陶宛"},{id:"442",cn:"卢森堡",en:"Luxembourg",ja:"ルクセンブルク",vi:"Luxembourg",ko:"룩셈부르크",tw:"盧森堡"},{id:"446",cn:"澳门特别行政区",en:"Macao Special Administrative Region",ja:"マカオ特別行政区",vi:"Đặc khu hành chính Macao",ko:"마카오 특별 행정구",tw:"澳門特別行政區"},{id:"450",cn:"马达加斯加",en:"Madagascar",ja:"マダガスカル",vi:"Madagascar",ko:"마다가스카르",tw:"馬達加斯加"},{id:"454",cn:"马拉维",en:"Malawi",ja:"マラウイ",vi:"Malawi",ko:"말라위",tw:"馬拉維"},{id:"458",cn:"马来西亚",en:"Malaysia",ja:"マレーシア",vi:"Malaysia",ko:"말레이시아",tw:"馬來西亞"},{id:"462",cn:"马尔代夫",en:"Maldives",ja:"モルディブ",vi:"Maldives",ko:"몰디브",tw:"馬爾代夫"},{id:"466",cn:"马里",en:"Mali",ja:"マリ",vi:"Mali",ko:"말리",tw:"馬里"},{id:"470",cn:"马耳他",en:"Malta",ja:"マルタ",vi:"Malta",ko:"몰타",tw:"馬耳他"},{id:"474",cn:"马提尼克",en:"Martinique",ja:"マルティニーク",vi:"Martinique",ko:"마르티니크",tw:"馬提尼克"},{id:"478",cn:"毛里塔尼亚",en:"Mauritania",ja:"モーリタニア",vi:"Mauritania",ko:"모리타니",tw:"毛里塔尼亞"},{id:"480",cn:"毛里求斯",en:"Mauritius",ja:"モーリシャス",vi:"Mauritius",ko:"모리셔스",tw:"毛里求斯"},{id:"484",cn:"墨西哥",en:"Mexico",ja:"メキシコ",vi:"Mexico",ko:"멕시코",tw:"墨西哥"},{id:"492",cn:"摩纳哥",en:"Monaco",ja:"モナコ",vi:"Monaco",ko:"모나코",tw:"摩納哥"},{id:"496",cn:"蒙古",en:"Mongolia",ja:"モンゴル",vi:"Mông Cổ",ko:"몽골리아",tw:"蒙古"},{id:"498",cn:"摩尔多瓦",en:"Moldova",ja:"モルドバ",vi:"Moldova",ko:"몰도바",tw:"摩爾多瓦"},{id:"500",cn:"蒙特塞拉特",en:"Montserrat",ja:"モントセラト",vi:"Montserrat",ko:"몬세 라트",tw:"蒙特塞拉特"},{id:"504",cn:"摩洛哥",en:"Morocco",ja:"モロッコ",vi:"Maroc",ko:"모로코",tw:"摩洛哥"},{id:"508",cn:"莫桑比亚",en:"Mozambia",ja:"モザンビア",vi:"Mozambia",ko:"모 잠비아",tw:"莫桑比亞"},{id:"512",cn:"阿曼",en:"Oman",ja:"オマーン",vi:"Oman",ko:"오만",tw:"阿曼"},{id:"516",cn:"纳米比亚",en:"Namibia",ja:"ナミビア",vi:"Namibia",ko:"나미비아",tw:"納米比亞"},{id:"520",cn:"瑙鲁",en:"Nauru",ja:"ナウル",vi:"Nauru",ko:"나우루",tw:"瑙魯"},{id:"524",cn:"尼泊尔",en:"Nepal",ja:"ネパール",vi:"Nepal",ko:"네팔",tw:"尼泊爾"},{id:"528",cn:"荷兰",en:"Netherlands",ja:"オランダ",vi:"nước Hà Lan",ko:"네덜란드",tw:"荷蘭"},{id:"530",cn:"荷属安的列斯",en:"Netherlands Antilles",ja:"オランダ領アンティル",vi:"Antilles của Hà Lan",ko:"네덜란드 령 앤 틸리 스",tw:"荷屬安的列斯"},{id:"533",cn:"阿鲁巴",en:"Aruba",ja:"アルバ",vi:"Aruba",ko:"Aruba",tw:"阿魯巴"},{id:"540",cn:"新喀里多尼亚",en:"New Caledonia",ja:"ニューカレドニア",vi:"New Caledonia",ko:"뉴 칼레도니아",tw:"新喀裡多尼亞"},{id:"548",cn:"瓦努阿图",en:"Vanuatu",ja:"バヌアツ",vi:"Vanuatu",ko:"바누아투",tw:"瓦努阿圖"},{id:"554",cn:"新西兰",en:"new Zealand",ja:"ニュージーランド",vi:"New Zealand",ko:"뉴질랜드",tw:"新西蘭"},{id:"558",cn:"尼加拉瓜",en:"Nicaragua",ja:"ニカラグア",vi:"Nicaragua",ko:"니카라과",tw:"尼加拉瓜"},{id:"562",cn:"尼日尔",en:"Niger",ja:"ニジェール",vi:"Niger",ko:"니제르",tw:"尼日爾"},{id:"566",cn:"尼日利亚",en:"Nigeria",ja:"ナイジェリア",vi:"Nigeria",ko:"나이지리아",tw:"尼日利亞"},{id:"570",cn:"纽埃",en:"Niue",ja:"ニウエ",vi:"Niue",ko:"니우에",tw:"紐埃"},{id:"574",cn:"诺福克岛",en:"Norfolk Island",ja:"ノーフォーク島",vi:"Đảo Norfolk",ko:"노퍽 섬",tw:"諾福克島"},{id:"578",cn:"挪威",en:"Norway",ja:"ノルウェー",vi:"Na Uy",ko:"노르웨이",tw:"挪威"},{id:"580",cn:"北马里亚纳",en:"Northern Mariana",ja:"北マリアナ",vi:"Bắc Mariana",ko:"북 마리아나",tw:"北馬里亞納"},{id:"581",cn:"美国本土外小岛屿",en:"U.S. Minor Outlying Islands",ja:"米領小離島",vi:"Các đảo nhỏ xa xôi hẻo lánh của Hoa Kỳ",ko:"미국 소수 외곽 섬",tw:"美國本土外小島嶼"},{id:"583",cn:"密克罗尼西亚联邦",en:"Federated States of Micronesia",ja:"ミクロネシア連邦",vi:"Liên bang Micronesia",ko:"미크로네시아 연방",tw:"密克羅尼西亞聯邦"},{id:"584",cn:"马绍尔群岛",en:"Marshall Islands",ja:"マーシャル諸島",vi:"đảo Marshall",ko:"마셜 제도",tw:"馬紹爾群島"},{id:"585",cn:"帕劳",en:"Palau",ja:"パラオ",vi:"Palau",ko:"팔라우",tw:"帕勞"},{id:"586",cn:"巴基斯坦",en:"Pakistan",ja:"パキスタン",vi:"Pakistan",ko:"파키스탄",tw:"巴基斯坦"},{id:"591",cn:"巴拿马",en:"Panama",ja:"パナマ",vi:"Panama",ko:"파나마",tw:"巴拿馬"},{id:"598",cn:"巴布亚新几内亚",en:"Papua New Guinea",ja:"パプアニューギニア",vi:"Papua New Guinea",ko:"파푸아 뉴기니",tw:"巴布亞新幾內亞"},{id:"600",cn:"巴拉圭",en:"Paraguay",ja:"パラグアイ",vi:"Paraguay",ko:"파라과이",tw:"巴拉圭"},{id:"604",cn:"秘鲁",en:"Peru",ja:"ペルー",vi:"Peru",ko:"페루",tw:"秘魯"},{id:"608",cn:"菲律宾",en:"Philippines",ja:"フィリピン",vi:"Philippines",ko:"필리핀 제도",tw:"菲律賓"},{id:"612",cn:"皮特凯恩",en:"Pitcairn",ja:"ピトケアン",vi:"Pitcairn",ko:"핏 케언",tw:"皮特凱恩"},{id:"616",cn:"波兰",en:"Poland",ja:"ポーランド",vi:"Ba lan",ko:"폴란드",tw:"波蘭"},{id:"620",cn:"葡萄牙",en:"Portugal",ja:"ポルトガル",vi:"Bồ Đào Nha",ko:"포르투갈",tw:"葡萄牙"},{id:"624",cn:"几内亚比绍",en:"Guinea-Bissau",ja:"ギニアビサウ",vi:"Guinea-Bissau",ko:"기니 비사우",tw:"幾內亞比紹"},{id:"626",cn:"东帝汶",en:"East Timor",ja:"東ティモール",vi:"Đông Timor",ko:"동 티모르",tw:"東帝汶"},{id:"630",cn:"波多黎各",en:"Puerto Rico",ja:"プエルトリコ",vi:"Puerto Rico",ko:"푸에르토 리코",tw:"波多黎各"},{id:"634",cn:"卡塔尔",en:"Qatar",ja:"カタール",vi:"Qatar",ko:"카타르",tw:"卡塔爾"},{id:"638",cn:"留尼汪",en:"Reunion",ja:"再会",vi:"Sum họp",ko:"재결합",tw:"留尼汪"},{id:"642",cn:"罗马尼亚",en:"Romania",ja:"ルーマニア",vi:"Romania",ko:"루마니아",tw:"羅馬尼亞"},{id:"643",cn:"俄罗斯联邦",en:"The Russian Federation",ja:"ロシア連邦",vi:"Liên bang Nga",ko:"러시아 연방",tw:"俄羅斯聯邦"},{id:"646",cn:"卢旺达",en:"Rwanda",ja:"ルワンダ",vi:"Rwanda",ko:"르완다",tw:"盧旺達"},{id:"654",cn:"圣赫勒拿",en:"St. Helena",ja:"セントヘレナ",vi:"St. Helena",ko:"세인트 헬레나",tw:"聖赫勒拿"},{id:"659",cn:"圣基茨和尼维斯",en:"Saint Kitts and Nevis",ja:"セントクリストファーネイビス",vi:"Saint Kitts và Nevis",ko:"세인트 키츠 네비스",tw:"聖基茨和尼維斯"},{id:"660",cn:"安圭拉",en:"Anguilla",ja:"アンギラ",vi:"Anguilla",ko:"앵 귈라",tw:"安圭拉"},{id:"662",cn:"圣卢西亚",en:"Saint Lucia",ja:"セントルシア",vi:"Saint Lucia",ko:"세인트 루시아",tw:"聖盧西亞"},{id:"666",cn:"圣皮埃尔和密克隆",en:"Saint Pierre and Miquelon",ja:"サンピエールとミクロン",vi:"Saint Pierre và Miquelon",ko:"생 피에르 미 클롱",tw:"聖皮埃爾和密克隆"},{id:"670",cn:"圣文森特和格林纳丁斯",en:"Saint Vincent and the Grenadines",ja:"セントビンセントおよびグレナディーン諸島",vi:"Saint Vincent và Grenadines",ko:"세인트 빈센트 그레나딘",tw:"聖文森特和格林納丁斯"},{id:"674",cn:"圣马力诺",en:"San Marino",ja:"サンマリノ",vi:"San Marino",ko:"산 마리노",tw:"聖馬力諾"},{id:"678",cn:"圣多美和普林西比",en:"Sao Tome and Principe",ja:"サントメプリンシペ",vi:"Sao Tome và Principe",ko:"상투 메 프린시 페",tw:"聖多美和普林西比"},{id:"682",cn:"沙特阿拉伯",en:"Saudi Arabia",ja:"サウジアラビア",vi:"Ả Rập Saudi",ko:"사우디 아라비아",tw:"沙特阿拉伯"},{id:"686",cn:"塞内加尔",en:"Senegal",ja:"セネガル",vi:"Senegal",ko:"세네갈",tw:"塞內加爾"},{id:"690",cn:"塞舌尔",en:"Seychelles",ja:"セイシェル",vi:"Seychelles",ko:"세이셸",tw:"塞舌爾"},{id:"694",cn:"塞拉利昂",en:"Sierra Leone",ja:"シエラレオネ",vi:"Sierra Leone",ko:"시에라 리온",tw:"塞拉利昂"},{id:"702",cn:"新加坡",en:"Singapore",ja:"シンガポール",vi:"Singapore",ko:"싱가포르",tw:"新加坡"},{id:"703",cn:"斯洛伐克",en:"Slovakia",ja:"スロバキア",vi:"Xlô-va-ki-a",ko:"슬로바키아",tw:"斯洛伐克"},{id:"704",cn:"越南",en:"Vietnam",ja:"ベトナム",vi:"Việt Nam",ko:"베트남",tw:"越南"},{id:"705",cn:"斯洛文尼亚",en:"Slovenia",ja:"スロベニア",vi:"Slovenia",ko:"슬로베니아",tw:"斯洛文尼亞"},{id:"706",cn:"索马里",en:"Somalia",ja:"ソマリア",vi:"Somalia",ko:"소말리아",tw:"索馬里"},{id:"710",cn:"南非",en:"South Africa",ja:"南アフリカ",vi:"Nam Phi",ko:"남아프리카",tw:"南非"},{id:"716",cn:"津巴布韦",en:"Zimbabwe",ja:"ジンバブエ",vi:"Zimbabwe",ko:"짐바브웨",tw:"津巴布韋"},{id:"724",cn:"西班牙",en:"Spain",ja:"スペイン",vi:"Tây ban nha",ko:"스페인",tw:"西班牙"},{id:"732",cn:"西撒哈拉",en:"Western Sahara",ja:"西サハラ",vi:"Phía tây Sahara",ko:"서부 사하라",tw:"西撒哈拉"},{id:"736",cn:"苏丹",en:"Sudan",ja:"スーダン",vi:"Sudan",ko:"수단",tw:"蘇丹"},{id:"740",cn:"苏里南",en:"Suriname",ja:"スリナム",vi:"Suriname",ko:"수리남",tw:"蘇里南"},{id:"744",cn:"斯瓦尔巴岛和扬马延岛",en:"Svalbard and Jan Mayen",ja:"スバールバル諸島とヤンマイエン島",vi:"Svalbard và Jan Mayen",ko:"스발 바르와 얀 마옌",tw:"斯瓦爾巴島和揚馬延島"},{id:"748",cn:"斯威士兰",en:"Swaziland",ja:"スワジランド",vi:"Swaziland",ko:"스와질랜드",tw:"斯威士蘭"},{id:"752",cn:"瑞典",en:"Sweden",ja:"スウェーデン",vi:"Thụy Điển",ko:"스웨덴",tw:"瑞典"},{id:"756",cn:"瑞士",en:"Switzerland",ja:"スイス",vi:"Thụy sĩ",ko:"스위스",tw:"瑞士"},{id:"760",cn:"叙利亚",en:"Syria",ja:"シリア",vi:"Syria",ko:"시리아",tw:"敘利亞"},{id:"762",cn:"塔吉克斯坦",en:"Tajikistan",ja:"タジキスタン",vi:"Tajikistan",ko:"타지키스탄",tw:"塔吉克斯坦"},{id:"764",cn:"泰国",en:"Thailand",ja:"タイ",vi:"nước Thái Lan",ko:"태국",tw:"泰國"},{id:"768",cn:"多哥",en:"Togo",ja:"トーゴ",vi:"Đi",ko:"토고",tw:"多哥"},{id:"772",cn:"托克劳",en:"Tokelau",ja:"トケラウ",vi:"Tokelau",ko:"토켈 라우",tw:"托克勞"},{id:"776",cn:"汤加",en:"Tonga",ja:"トンガ",vi:"Tonga",ko:"통가",tw:"湯加"},{id:"780",cn:"特立尼达和多巴哥",en:"Trinidad and Tobago",ja:"トリニダード・トバゴ",vi:"Trinidad và Tobago",ko:"트리니다드 토바고",tw:"特立尼達和多巴哥"},{id:"784",cn:"阿联酋",en:"UAE",ja:"アラブ首長国連邦",vi:"UAE",ko:"UAE",tw:"阿聯酋"},{id:"788",cn:"突尼斯",en:"Tunisia",ja:"チュニジア",vi:"Tunisia",ko:"튀니지",tw:"突尼斯"},{id:"792",cn:"土耳其",en:"Turkey",ja:"七面鳥",vi:"gà tây",ko:"터키",tw:"土耳其"},{id:"795",cn:"土库曼斯坦",en:"Turkmenistan",ja:"トルクメニスタン",vi:"Turkmenistan",ko:"투르크 메니스탄",tw:"土庫曼斯坦"},{id:"796",cn:"特克斯和凯科斯群岛",en:"Turks and Caicos Islands",ja:"タークスカイコス諸島",vi:"Quần đảo Turks và Caicos",ko:"터크 스 케이 커스 제도",tw:"特克斯和凱科斯群島"},{id:"798",cn:"图瓦卢",en:"Tuvalu",ja:"ツバル",vi:"Tuvalu",ko:"투발루",tw:"圖瓦盧"},{id:"800",cn:"乌干达",en:"Uganda",ja:"ウガンダ",vi:"Uganda",ko:"우간다",tw:"烏干達"},{id:"804",cn:"乌克兰",en:"Ukraine",ja:"ウクライナ",vi:"Ukraine",ko:"우크라이나",tw:"烏克蘭"},{id:"807",cn:"马其顿",en:"Macedonia",ja:"マケドニア",vi:"Macedonia",ko:"마케도니아",tw:"馬其頓"},{id:"818",cn:"埃及",en:"Egypt",ja:"エジプト",vi:"Ai cập",ko:"이집트",tw:"埃及"},{id:"826",cn:"英国",en:"United Kingdom",ja:"イギリス",vi:"Vương quốc Anh",ko:"영국",tw:"英國"},{id:"834",cn:"坦桑尼亚",en:"Tanzania",ja:"タンザニア",vi:"Tanzania",ko:"탄자니아",tw:"坦桑尼亞"},{id:"840",cn:"美国",en:"United States",ja:"アメリカ",vi:"Hoa Kỳ",ko:"미국",tw:"美國"},{id:"850",cn:"美属维尔京群岛",en:"United States Virgin Islands",ja:"アメリカ領ヴァージン諸島",vi:"Quần đảo Virgin thuộc Hoa Kỳ",ko:"미국령 버진 아일랜드",tw:"美屬維爾京群島"},{id:"854",cn:"布基纳法索",en:"Burkina Faso",ja:"ブルキナファソ",vi:"Burkina Faso",ko:"부키 나 파소",tw:"布基納法索"},{id:"858",cn:"乌拉圭",en:"Uruguay",ja:"ウルグアイ",vi:"Uruguay",ko:"우루과이",tw:"烏拉圭"},{id:"860",cn:"乌兹别克斯坦",en:"Uzbekistan",ja:"ウズベキスタン",vi:"Uzbekistan",ko:"우즈베키스탄",tw:"烏茲別克斯坦"},{id:"862",cn:"委内瑞拉",en:"Venezuela",ja:"ベネズエラ",vi:"Venezuela",ko:"베네수엘라",tw:"委內瑞拉"},{id:"876",cn:"瓦利斯和富图纳",en:"Wallis and Futuna",ja:"ウォリスフツナ",vi:"Wallis và Futuna",ko:"월리스 푸 투나",tw:"瓦利斯和富圖納"},{id:"882",cn:"萨摩亚",en:"Samoa",ja:"サモア",vi:"Samoa",ko:"사모아",tw:"薩摩亞"},{id:"887",cn:"也门",en:"Yemen",ja:"イエメン",vi:"Yemen",ko:"예멘",tw:"也門"},{id:"891",cn:"南斯拉夫",en:"Yugoslavia",ja:"ユーゴスラビア",vi:"Nam Tư",ko:"유고 슬라비아",tw:"南斯拉夫"},{id:"894",cn:"赞比亚",en:"Zambia",ja:"ザンビア",vi:"Zambia",ko:"잠비아",tw:"贊比亞"}],t=e;n.default=t},ce79:function(a,n,i){"use strict";var e=i("7fef"),t=i.n(e);t.a},f0d4:function(a,n,i){"use strict";i.d(n,"b",(function(){return t})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){return e}));var e={uSelect:i("9ba4").default},t=function(){var a=this,n=a.$createElement,i=a._self._c||n;return i("v-uni-view",{staticClass:"primary_certification"},[i("v-uni-view",{staticClass:"form_class"},[i("v-uni-view",{staticClass:"form_label"},[i("v-uni-view",{staticClass:"form_label_name"},[i("v-uni-text",{staticClass:"iconfont icon-int"})],1),i("v-uni-view",{staticClass:"form_label_main"},[i("v-uni-view",{staticClass:"form_input_bar"},[i("v-uni-input",{staticClass:"input_bar",attrs:{disabled:!0,type:"text",placeholder:a.getLangs("nationalTips")},on:{click:function(n){arguments[0]=n=a.$handleEvent(n),a.selectCountry.apply(void 0,arguments)}},model:{value:a.form.country,callback:function(n){a.$set(a.form,"country",n)},expression:"form.country"}}),i("u-select",{attrs:{lang:a.getGlobalLang,confirm:a.getLangs("confirm"),cancel:a.getLangs("cancel"),"value-name":"id","label-name":a.getLabelName,list:a.countryList},on:{confirm:function(n){arguments[0]=n=a.$handleEvent(n),a.confirmCountry.apply(void 0,arguments)}},model:{value:a.show,callback:function(n){a.show=n},expression:"show"}},[a._v(a._s(a.getLangs("nationalTips")))])],1)],1)],1),i("v-uni-view",{staticClass:"form_label"},[i("v-uni-view",{staticClass:"form_label_name"},[i("v-uni-text",{staticClass:"iconfont icon-mine"})],1),i("v-uni-view",{staticClass:"form_label_main"},[i("v-uni-view",{staticClass:"form_input_bar"},[i("v-uni-input",{staticClass:"input_bar",attrs:{type:"text",placeholder:a.getLangs("nameTips")},model:{value:a.form.name,callback:function(n){a.$set(a.form,"name",n)},expression:"form.name"}})],1)],1)],1),i("v-uni-view",{staticClass:"form_label"},[i("v-uni-view",{staticClass:"form_label_name"},[i("v-uni-text",{staticClass:"iconfont icon-businesscard"})],1),i("v-uni-view",{staticClass:"form_label_main"},[i("v-uni-view",{staticClass:"form_input_bar"},[i("v-uni-input",{staticClass:"input_bar",attrs:{type:"idcard",placeholder:a.getLangs("idcardTips")},model:{value:a.form.idcard,callback:function(n){a.$set(a.form,"idcard",n)},expression:"form.idcard"}})],1)],1)],1),i("v-uni-view",{staticClass:"form_label"},[i("v-uni-view",{staticClass:"form_label_name"},[i("v-uni-text",{staticClass:"iconfont icon-coordinates"})],1),i("v-uni-view",{staticClass:"form_label_main"},[i("v-uni-view",{staticClass:"form_input_bar"},[i("v-uni-input",{staticClass:"input_bar",attrs:{type:"text",placeholder:a.getLangs("addressTips")},model:{value:a.form.adds,callback:function(n){a.$set(a.form,"adds",n)},expression:"form.adds"}})],1)],1)],1),i("v-uni-view",{staticClass:"button",on:{click:function(n){arguments[0]=n=a.$handleEvent(n),a.checkInhHandler.apply(void 0,arguments)}}},[a._v(a._s(a.getLangs("submit")))])],1)],1)},o=[]},f51f:function(a,n,i){"use strict";var e=i("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,i("96cf");var t=e(i("1da1")),o=e(i("1593")),c=e(i("bceb")),r=e(i("cdef")),l=i("ca3b"),s=e(i("2901")),d={name:"PrimaryCertification",mixins:[o.default,c.default],data:function(){return{form:{country:"",name:"",idcard:"",adds:""},countryList:r.default,show:!1}},methods:{checkInhHandler:function(){var a=this;return(0,t.default)(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(""!==a.form.country){n.next=2;break}return n.abrupt("return",a.$tips.showToast(a.getLangs("nationalTips")));case 2:if(0!=a.form.name.length){n.next=4;break}return n.abrupt("return",a.$tips.showToast(a.getLangs("nameTips")));case 4:if(0!=a.form.idcard.length){n.next=6;break}return n.abrupt("return",a.$tips.showToast(a.getLangs("idcardTips")));case 6:if(0!=a.form.adds.length){n.next=8;break}return n.abrupt("return",a.$tips.showToast(a.getLangs("addressTips")));case 8:return n.next=10,(0,l.checkCertInfo)(a.form);case 10:i=n.sent,a.backTips(i),s.default.checkCode(i)&&a.switchTab("/pages/user/index");case 13:case"end":return n.stop()}}),n)})))()},selectCountry:function(){this.show=!this.show},confirmCountry:function(a){this.form.country=a[0].label}},computed:{getLabelName:function(){switch(this.getGlobalLang){case"cn":return"cn";case"cns":return"tw";case"en":return"en";case"ja":return"ja";case"ko":return"ko";case"vi":return"vi"}}},onShow:function(){this.setTitle(this.getLangs("primaryCert"))}};n.default=d}}]);