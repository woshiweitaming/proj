(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-forget-index~pages-information-index~pages-phone-index~pages-register-index~pages-valid-index"],{"0e09":function(e,n,i){"use strict";var a=i("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=a(i("5530")),c=a(i("8deb")),o=a(i("7a1c")),r={data:function(){return{validActionList:["phone","email"],active:0,baseParams:{}}},components:{Phone:c.default,Email:o.default},methods:{changeValidAction:function(e){this.active=e},merge:function(){var e=0===this.active?"sms":"email",n={};if("sms"===e){if(!this.getPhoneParams())return!1;var i=this.getPhoneParams(),a=(0,t.default)({verifyType:e},i);delete this.baseParams.email,n=Object.assign(this.baseParams,a)}else if("email"===e){if(!this.getEmailParams())return!1;var c=this.getEmailParams(),o=(0,t.default)({verifyType:e},c);delete this.baseParams.phone,delete this.baseParams.qh,n=Object.assign(this.baseParams,o)}return n},getPhoneParams:function(){var e=this.$refs.phone.getPhone(),n=this.$refs.phone.getVcode(),i=this.$refs.phone.getQh();if(0==e.length)return this.$tips.showToast(this.getLangs("phoneEmptyTips")),!1;if(0==n.length)return this.$tips.showToast(this.getLangs("validCodeEmptyTips")),!1;var a={phone:e,vcode:n,qh:i};return a},getEmailParams:function(){var e=this.$refs.email.getEmail(),n=this.$refs.email.getVcode();if(0==e.length)return this.$tips.showToast(this.getLangs("emailEmptyTips")),!1;if(0==n.length)return this.$tips.showToast(this.getLangs("validCodeEmptyTips")),!1;var i={email:e,vcode:n};return i}},created:function(){}},s=r;n.default=s},"261e":function(e,n,i){"use strict";var a=i("7f86"),t=i.n(a);t.a},"2ced":function(e,n,i){var a=i("a104");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var t=i("4f06").default;t("05816592",a,!0,{sourceMap:!1,shadowMode:!1})},"34e9":function(e,n,i){var a=i("24fb");n=a(!1),n.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-select__action[data-v-054fee37]{position:relative;line-height:%?70?%;height:%?70?%}.u-select__action__icon[data-v-054fee37]{position:absolute;right:%?20?%;top:50%;-webkit-transition:-webkit-transform .4s;transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:1}.u-select__action__icon--reverse[data-v-054fee37]{-webkit-transform:rotate(-180deg) translateY(50%);transform:rotate(-180deg) translateY(50%)}.u-select__hader__title[data-v-054fee37]{color:#606266}.u-select--border[data-v-054fee37]{-webkit-border-radius:%?6?%;border-radius:%?6?%;-webkit-border-radius:4px;border-radius:4px;border:1px solid #dcdfe6}.u-select__header[data-v-054fee37]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?80?%;padding:0 %?40?%}.u-select__body[data-v-054fee37]{width:100%;height:%?500?%;overflow:hidden;background-color:#fff}.u-select__body__picker-view[data-v-054fee37]{height:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.u-select__body__picker-view__item[data-v-054fee37]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?32?%;color:#151936;padding:0 %?8?%}',""]),e.exports=n},3755:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=[{prefix:"1",en:"USA",cn:"美国",ko:"미국",vi:"Hoa Kỳ",ja:"アメリカ",cns:"美國"},{prefix:"1",en:"PuertoRico",cn:"波多黎各",ko:"푸에르토 리코",vi:"Puerto Rico",ja:"プエルトリコ",cns:"波多黎各"},{prefix:"1",en:"Canada",cn:"加拿大",ko:"캐나다",vi:"Canada",ja:"カナダ",cns:"加拿大"},{prefix:"7",en:"Russia",cn:"俄罗斯",ko:"러시아",vi:"Nga",ja:"ロシア",cns:"俄羅斯"},{prefix:"7",en:"Kazeakhstan",cn:"哈萨克斯坦",ko:"카자흐스탄",vi:"Kazakhstan",ja:"カザフスタン",cns:"哈薩克斯坦"},{prefix:"20",en:"Egypt",cn:"埃及",ko:"이집트",vi:"Ai cập",ja:"エジプト",cns:"埃及"},{prefix:"27",en:"South Africa",cn:"南非",ko:"남아프리카",vi:"Nam Phi",ja:"南アフリカ",cns:"南非"},{prefix:"30",en:"Greece",cn:"希腊",ko:"그리스",vi:"Hy Lạp",ja:"ギリシャ",cns:"希臘"},{prefix:"31",en:"Netherlands",cn:"荷兰",ko:"네덜란드",vi:"nước Hà Lan",ja:"オランダ",cns:"荷蘭"},{prefix:"32",en:"Belgium",cn:"比利时",ko:"벨기에",vi:"nước Bỉ",ja:"ベルギー",cns:"比利時"},{prefix:"33",en:"France",cn:"法国",ko:"프랑스",vi:"Nước pháp",ja:"フランス",cns:"法國"},{prefix:"34",en:"Spain",cn:"西班牙",ko:"스페인",vi:"Tây ban nha",ja:"スペイン",cns:"西班牙"},{prefix:"36",en:"Hungary",cn:"匈牙利",ko:"헝가리",vi:"Hungary",ja:"ハンガリー",cns:"匈牙利"},{prefix:"40",en:"Romania",cn:"罗马尼亚",ko:"루마니아",vi:"Romania",ja:"ルーマニア",cns:"羅馬尼亞"},{prefix:"41",en:"Switzerland",cn:"瑞士",ko:"스위스",vi:"Thụy sĩ",ja:"スイス",cns:"瑞士"},{prefix:"43",en:"Austria",cn:"奥地利",ko:"오스트리아",vi:"Áo",ja:"オーストリア",cns:"奧地利"},{prefix:"44",en:"United Kingdom",cn:"英国",ko:"영국",vi:"Vương quốc Anh",ja:"イギリス",cns:"英國"},{prefix:"44",en:"Jersey",cn:"泽西岛",ko:"저지",vi:"Jersey",ja:"ジャージー",cns:"澤西島"},{prefix:"44",en:"Isle of Man",cn:"马恩岛",ko:"맨 섬",vi:"Đảo Man",ja:"マン島",cns:"馬恩島"},{prefix:"44",en:"Guernsey",cn:"根西",ko:"건지",vi:"Guernsey",ja:"ガーンジー",cns:"根西"},{prefix:"45",en:"Denmark",cn:"丹麦",ko:"덴마크",vi:"Đan mạch",ja:"デンマーク",cns:"丹麥"},{prefix:"46",en:"Sweden",cn:"瑞典",ko:"스웨덴",vi:"Thụy Điển",ja:"スウェーデン",cns:"瑞典"},{prefix:"47",en:"Norway",cn:"挪威",ko:"노르웨이",vi:"Na Uy",ja:"ノルウェー",cns:"挪威"},{prefix:"48",en:"Poland",cn:"波兰",ko:"폴란드",vi:"Ba lan",ja:"ポーランド",cns:"波蘭"},{prefix:"51",en:"Peru",cn:"秘鲁",ko:"페루",vi:"Peru",ja:"ペルー",cns:"秘魯"},{prefix:"52",en:"Mexico",cn:"墨西哥",ko:"멕시코",vi:"Mexico",ja:"メキシコ",cns:"墨西哥"},{prefix:"53",en:"Cuba",cn:"古巴",ko:"쿠바",vi:"Cuba",ja:"キューバ",cns:"古巴"},{prefix:"54",en:"Argentina",cn:"阿根廷",ko:"아르헨티나",vi:"Argentina",ja:"アルゼンチン",cns:"阿根廷"},{prefix:"55",en:"Brazill",cn:"巴西",ko:"브라질",vi:"Brazil",ja:"ブラジル",cns:"巴西"},{prefix:"56",en:"Chile",cn:"智利",ko:"칠레",vi:"Chile",ja:"チリ",cns:"智利"},{prefix:"57",en:"Colombia",cn:"哥伦比亚",ko:"콜롬비아",vi:"Colombia",ja:"コロンビア",cns:"哥倫比亞"},{prefix:"58",en:"Venezuela",cn:"委内瑞拉",ko:"베네수엘라",vi:"Venezuela",ja:"ベネズエラ",cns:"委內瑞拉"},{prefix:"60",en:"Malaysia",cn:"马来西亚",ko:"말레이시아",vi:"Malaysia",ja:"マレーシア",cns:"馬來西亞"},{prefix:"61",en:"Australia",cn:"澳大利亚",ko:"호주",vi:"Châu Úc",ja:"オーストラリア",cns:"澳大利亞"},{prefix:"62",en:"Indonesia",cn:"印度尼西亚",ko:"인도네시아",vi:"Indonesia",ja:"インドネシア",cns:"印度尼西亞"},{prefix:"63",en:"Philippines",cn:"菲律宾",ko:"필리핀 제도",vi:"Philippines",ja:"フィリピン",cns:"菲律賓"},{prefix:"64",en:"NewZealand",cn:"新西兰",ko:"뉴질랜드",vi:"New Zealand",ja:"ニュージーランド",cns:"新西蘭"},{prefix:"65",en:"Singapore",cn:"新加坡",ko:"싱가포르",vi:"Singapore",ja:"シンガポール",cns:"新加坡"},{prefix:"66",en:"Thailand",cn:"泰国",ko:"태국",vi:"nước Thái Lan",ja:"タイ",cns:"泰國"},{prefix:"81",en:"Japan",cn:"日本",ko:"일본",vi:"Nhật Bản",ja:"日本",cns:"日本"},{prefix:"82",en:"Korea",cn:"韩国",ko:"대한민국",vi:"Hàn Quốc",ja:"韓国",cns:"韓國"},{prefix:"84",en:"Vietnam",cn:"越南",ko:"베트남",vi:"Việt Nam",ja:"ベトナム",cns:"越南"},{prefix:"86",en:"China",cn:"中国",ko:"중국",vi:"Trung Quốc",ja:"中国",cns:"中國"},{prefix:"90",en:"Turkey",cn:"土耳其",ko:"터키",vi:"gà tây",ja:"七面鳥",cns:"土耳其"},{prefix:"91",en:"Indea",cn:"印度",ko:"인도",vi:"Ấn Độ",ja:"インド",cns:"印度"},{prefix:"92",en:"Pakistan",cn:"巴基斯坦",ko:"파키스탄",vi:"Pakistan",ja:"パキスタン",cns:"巴基斯坦"},{prefix:"39",en:"Italy",cn:"意大利",ko:"이탈리아",vi:"Nước Ý",ja:"イタリア",cns:"意大利"},{prefix:"93",en:"Afghanistan",cn:"阿富汗",ko:"아프가니스탄",vi:"Afghanistan",ja:"アフガニスタン",cns:"阿富汗"},{prefix:"94",en:"SriLanka",cn:"斯里兰卡",ko:"스리랑카",vi:"Sri Lanka",ja:"スリランカ",cns:"斯里蘭卡"},{prefix:"49",en:"Germany",cn:"德国",ko:"독일",vi:"nước Đức",ja:"ドイツ",cns:"德國"},{prefix:"95",en:"Myanmar",cn:"缅甸",ko:"미얀마",vi:"Myanmar",ja:"ミャンマー",cns:"緬甸"},{prefix:"98",en:"Iran",cn:"伊朗",ko:"이란",vi:"Iran",ja:"イラン",cns:"伊朗"},{prefix:"212",en:"Morocco",cn:"摩洛哥",ko:"모로코",vi:"Maroc",ja:"モロッコ",cns:"摩洛哥"},{prefix:"213",en:"Algera",cn:"阿尔格拉",ko:"알 그라",vi:"Algra",ja:"アルグラ",cns:"阿爾格拉"},{prefix:"216",en:"Tunisia",cn:"突尼斯",ko:"튀니지",vi:"Tunisia",ja:"チュニジア",cns:"突尼斯"},{prefix:"218",en:"Libya",cn:"利比亚",ko:"리비아",vi:"Libya",ja:"リビア",cns:"利比亞"},{prefix:"220",en:"Gambia",cn:"冈比亚",ko:"감비아",vi:"Gambia",ja:"ガンビア",cns:"岡比亞"},{prefix:"221",en:"Senegal",cn:"塞内加尔",ko:"세네갈",vi:"Senegal",ja:"セネガル",cns:"塞內加爾"},{prefix:"222",en:"Mauritania",cn:"毛里塔尼亚",ko:"모리타니",vi:"Mauritania",ja:"モーリタニア",cns:"毛里塔尼亞"},{prefix:"223",en:"Mali",cn:"马里",ko:"말리",vi:"Mali",ja:"マリ",cns:"馬里"},{prefix:"224",en:"Guinea",cn:"几内亚",ko:"기니",vi:"Guinea",ja:"ギニア",cns:"幾內亞"},{prefix:"225",en:"Cote divoire",cn:"科特迪沃",ko:"Cote Divo",vi:"Cote Divo",ja:"コートディボ",cns:"科特迪沃"},{prefix:"226",en:"Burkina Faso",cn:"布基纳法索",ko:"부키 나 파소",vi:"Burkina Faso",ja:"ブルキナファソ",cns:"布基納法索"},{prefix:"227",en:"Niger",cn:"尼日尔",ko:"니제르",vi:"Niger",ja:"ニジェール",cns:"尼日爾"},{prefix:"228",en:"Togo",cn:"多哥",ko:"토고",vi:"Đi",ja:"トーゴ",cns:"多哥"},{prefix:"229",en:"Benin",cn:"贝宁",ko:"베냉",vi:"Benin",ja:"ベナン",cns:"貝寧"},{prefix:"230",en:"Mauritius",cn:"毛里求斯",ko:"모리셔스",vi:"Mauritius",ja:"モーリシャス",cns:"毛里求斯"},{prefix:"231",en:"Liberia",cn:"利比里亚",ko:"라이베리아",vi:"Liberia",ja:"リベリア",cns:"利比里亞"},{prefix:"232",en:"Sierra Leone",cn:"塞拉利昂",ko:"시에라 리온",vi:"Sierra Leone",ja:"シエラレオネ",cns:"塞拉利昂"},{prefix:"233",en:"Ghana",cn:"加纳",ko:"가나",vi:"Ghana",ja:"ガーナ",cns:"加納"},{prefix:"234",en:"Nigeria",cn:"尼日利亚",ko:"나이지리아",vi:"Nigeria",ja:"ナイジェリア",cns:"尼日利亞"},{prefix:"235",en:"Chad",cn:"乍得",ko:"차드",vi:"Chad",ja:"チャド",cns:"乍得"},{prefix:"236",en:"Central African Republic",cn:"中非共和国",ko:"중앙 아프리카 공화국",vi:"Cộng hòa trung phi",ja:"中央アフリカ共和国",cns:"中非共和國"},{prefix:"237",en:"Cameroon",cn:"喀麦隆",ko:"카메룬",vi:"Cameroon",ja:"カメルーン",cns:"喀麥隆"},{prefix:"238",en:"Cape Verde",cn:"佛得角",ko:"카보 베르데",vi:"Cape Verde",ja:"カーボベルデ",cns:"佛得角"},{prefix:"239",en:"Sao Tome and Principe",cn:"圣多美和普林西比",ko:"상투 메 프린시 페",vi:"Sao Tome và Principe",ja:"サントメプリンシペ",cns:"聖多美和普林西比"},{prefix:"240",en:"Guinea",cn:"几内亚",ko:"기니",vi:"Guinea",ja:"ギニア",cns:"幾內亞"},{prefix:"241",en:"Gabon",cn:"加蓬",ko:"가봉",vi:"Gabon",ja:"ガボン",cns:"加蓬"},{prefix:"242",en:"Republic of the Congo",cn:"刚果共和国",ko:"콩고 공화국",vi:"cộng hòa Congo",ja:"コンゴ共和国",cns:"剛果共和國"},{prefix:"243",en:"Democratic Republic of the Congo",cn:"刚果民主共和国",ko:"콩고 민주 공화국",vi:"Cộng hòa Dân chủ Congo",ja:"コンゴ民主共和国",cns:"剛果民主共和國"},{prefix:"244",en:"Angola",cn:"安哥拉",ko:"앙골라",vi:"Angola",ja:"アンゴラ",cns:"安哥拉"},{prefix:"247",en:"Ascension",cn:"阿森松岛",ko:"어센션 아일랜드",vi:"Đảo Ascension",ja:"アセンション島",cns:"阿森松島"},{prefix:"248",en:"Seychelles",cn:"塞舌尔",ko:"세이셸",vi:"Seychelles",ja:"セイシェル",cns:"塞舌爾"},{prefix:"249",en:"Sudan",cn:"苏丹",ko:"수단",vi:"Sudan",ja:"スーダン",cns:"蘇丹"},{prefix:"250",en:"Rwanda",cn:"卢旺达",ko:"르완다",vi:"Rwanda",ja:"ルワンダ",cns:"盧旺達"},{prefix:"251",en:"Ethiopia",cn:"埃塞俄比亚",ko:"에티오피아",vi:"Ethiopia",ja:"エチオピア",cns:"埃塞俄比亞"},{prefix:"253",en:"Djibouti",cn:"吉布提",ko:"지부티",vi:"Djibouti",ja:"ジブチ",cns:"吉布提"},{prefix:"254",en:"Kenya",cn:"肯尼亚",ko:"케냐",vi:"Kenya",ja:"ケニア",cns:"肯尼亞"},{prefix:"255",en:"Tanzania",cn:"坦桑尼亚",ko:"탄자니아",vi:"Tanzania",ja:"タンザニア",cns:"坦桑尼亞"},{prefix:"256",en:"Uganda",cn:"乌干达",ko:"우간다",vi:"Uganda",ja:"ウガンダ",cns:"烏干達"},{prefix:"257",en:"Burundi",cn:"布隆迪",ko:"부룬디",vi:"Burundi",ja:"ブルンジ",cns:"布隆迪"},{prefix:"258",en:"Mozambique",cn:"莫桑比克",ko:"모잠비크",vi:"Mozambique",ja:"モザンビーク",cns:"莫桑比克"},{prefix:"260",en:"Zambia",cn:"赞比亚",ko:"잠비아",vi:"Zambia",ja:"ザンビア",cns:"贊比亞"},{prefix:"261",en:"Madagascar",cn:"马达加斯加",ko:"마다가스카르",vi:"Madagascar",ja:"マダガスカル",cns:"馬達加斯加"},{prefix:"262",en:"Reunion",cn:"留尼汪",ko:"재결합",vi:"Sum họp",ja:"再会",cns:"留尼汪"},{prefix:"262",en:"Mayotte",cn:"马约特",ko:"마 요트",vi:"Mayotte",ja:"マヨット",cns:"馬約特"},{prefix:"263",en:"Zimbabwe",cn:"津巴布韦",ko:"짐바브웨",vi:"Zimbabwe",ja:"ジンバブエ",cns:"津巴布韋"},{prefix:"264",en:"Namibia",cn:"纳米比亚",ko:"나미비아",vi:"Namibia",ja:"ナミビア",cns:"納米比亞"},{prefix:"265",en:"Malawi",cn:"马拉维",ko:"말라위",vi:"Malawi",ja:"マラウイ",cns:"馬拉維"},{prefix:"266",en:"Lesotho",cn:"莱索托",ko:"레소토",vi:"Lesotho",ja:"レソト",cns:"萊索托"},{prefix:"267",en:"Bocnsana",cn:"博茨瓦纳",ko:"보츠와나",vi:"Botswana",ja:"ボツワナ",cns:"博茨瓦納"},{prefix:"268",en:"Swaziland",cn:"斯威士兰",ko:"스와질랜드",vi:"Swaziland",ja:"スワジランド",cns:"斯威士蘭"},{prefix:"269",en:"Comoros",cn:"科摩罗",ko:"코모로",vi:"Comoros",ja:"コモロ",cns:"科摩羅"},{prefix:"297",en:"Aruba",cn:"阿鲁巴",ko:"Aruba",vi:"Aruba",ja:"アルバ",cns:"阿魯巴"},{prefix:"298",en:"Faroe Islands",cn:"法罗群岛",ko:"페로 제도",vi:"Quần đảo Faroe",ja:"フェロー諸島",cns:"法羅群島"},{prefix:"299",en:"Greenland",cn:"格陵兰",ko:"그린란드",vi:"Greenland",ja:"グリーンランド",cns:"格陵蘭"},{prefix:"350",en:"Gibraltar",cn:"直布罗陀",ko:"지브롤터",vi:"Gibraltar",ja:"ジブラルタル",cns:"直布羅陀"},{prefix:"351",en:"Portugal",cn:"葡萄牙",ko:"포르투갈",vi:"Bồ Đào Nha",ja:"ポルトガル",cns:"葡萄牙"},{prefix:"352",en:"Luxembourg",cn:"卢森堡",ko:"룩셈부르크",vi:"Luxembourg",ja:"ルクセンブルク",cns:"盧森堡"},{prefix:"353",en:"Ireland",cn:"爱尔兰",ko:"아일랜드",vi:"Ireland",ja:"アイルランド",cns:"愛爾蘭"},{prefix:"354",en:"Iceland",cn:"冰岛",ko:"아이슬란드",vi:"Nước Iceland",ja:"アイスランド",cns:"冰島"},{prefix:"355",en:"Albania",cn:"阿尔巴尼亚",ko:"알바니아",vi:"Albania",ja:"アルバニア",cns:"阿爾巴尼亞"},{prefix:"356",en:"Malta",cn:"马耳他",ko:"몰타",vi:"Malta",ja:"マルタ",cns:"馬耳他"},{prefix:"357",en:"Cyprus",cn:"塞浦路斯",ko:"키프로스",vi:"Síp",ja:"キプロス",cns:"塞浦路斯"},{prefix:"358",en:"Finland",cn:"芬兰",ko:"핀란드",vi:"Phần Lan",ja:"フィンランド",cns:"芬蘭"},{prefix:"359",en:"Bulgaria",cn:"保加利亚",ko:"불가리아",vi:"Bungari",ja:"ブルガリア",cns:"保加利亞"},{prefix:"370",en:"Lithuania",cn:"立陶宛",ko:"리투아니아",vi:"Lithuania",ja:"リトアニア",cns:"立陶宛"},{prefix:"371",en:"Latvia",cn:"拉脱维亚",ko:"라트비아",vi:"Latvia",ja:"ラトビア",cns:"拉脫維亞"},{prefix:"372",en:"Estonia",cn:"爱沙尼亚",ko:"에스토니아",vi:"Estonia",ja:"エストニア",cns:"愛沙尼亞"},{prefix:"373",en:"Moldova",cn:"摩尔多瓦",ko:"몰도바",vi:"Moldova",ja:"モルドバ",cns:"摩爾多瓦"},{prefix:"374",en:"Armenia",cn:"亚美尼亚",ko:"아르메니아",vi:"Armenia",ja:"アルメニア",cns:"亞美尼亞"},{prefix:"375",en:"Belarus",cn:"白俄罗斯",ko:"벨라루스",vi:"Belarus",ja:"ベラルーシ",cns:"白俄羅斯"},{prefix:"376",en:"Andorra",cn:"安道尔",ko:"안도라",vi:"Andorra",ja:"アンドラ",cns:"安道爾"},{prefix:"377",en:"Monaco",cn:"摩纳哥",ko:"모나코",vi:"Monaco",ja:"モナコ",cns:"摩納哥"},{prefix:"378",en:"San Marino",cn:"圣马力诺",ko:"산 마리노",vi:"San Marino",ja:"サンマリノ",cns:"聖馬力諾"},{prefix:"380",en:"Ukraine",cn:"乌克兰",ko:"우크라이나",vi:"Ukraine",ja:"ウクライナ",cns:"烏克蘭"},{prefix:"381",en:"Serbia",cn:"塞尔维亚",ko:"세르비아",vi:"Serbia",ja:"セルビア",cns:"塞爾維亞"},{prefix:"382",en:"Montenegro",cn:"黑山",ko:"몬테네그로",vi:"Montenegro",ja:"モンテネグロ",cns:"黑山"},{prefix:"383",en:"Kosovo",cn:"科索沃",ko:"코소보",vi:"Kosovo",ja:"コソボ",cns:"科索沃"},{prefix:"385",en:"Croatia",cn:"克罗地亚",ko:"크로아티아",vi:"Croatia",ja:"クロアチア",cns:"克羅地亞"},{prefix:"386",en:"Slovenia",cn:"斯洛文尼亚",ko:"슬로베니아",vi:"Slovenia",ja:"スロベニア",cns:"斯洛文尼亞"},{prefix:"387",en:"Bosnia and Herzegovina",cn:"波斯尼亚和黑塞哥维那",ko:"보스니아 헤르체고비나",vi:"Bosnia và Herzegovina",ja:"ボスニア・ヘルツェゴビナ",cns:"波斯尼亞和黑塞哥維那"},{prefix:"389",en:"Macedonia",cn:"马其顿",ko:"마케도니아",vi:"Macedonia",ja:"マケドニア",cns:"馬其頓"},{prefix:"420",en:"Czech Republic",cn:"捷克共和国",ko:"체코 공화국",vi:"Cộng hòa Séc",ja:"チェコ共和国",cns:"捷克共和國"},{prefix:"421",en:"Slovakia",cn:"斯洛伐克",ko:"슬로바키아",vi:"Xlô-va-ki-a",ja:"スロバキア",cns:"斯洛伐克"},{prefix:"423",en:"Liechtenstein",cn:"列支敦士登",ko:"리히텐슈타인",vi:"Liechtenstein",ja:"リヒテンシュタイン",cns:"列支敦士登"},{prefix:"501",en:"Belize",cn:"伯利兹",ko:"벨리즈",vi:"Belize",ja:"ベリーズ",cns:"伯利茲"},{prefix:"502",en:"Guatemala",cn:"危地马拉",ko:"과테말라",vi:"Guatemala",ja:"グアテマラ",cns:"危地馬拉"},{prefix:"503",en:"EISalvador",cn:"艾萨尔瓦多",ko:"알 살바도르",vi:"Al Salvador",ja:"アルサルバドル",cns:"艾薩爾瓦多"},{prefix:"504",en:"Honduras",cn:"洪都拉斯",ko:"온두라스",vi:"Honduras",ja:"ホンジュラス",cns:"洪都拉斯"},{prefix:"505",en:"Nicaragua",cn:"尼加拉瓜",ko:"니카라과",vi:"Nicaragua",ja:"ニカラグア",cns:"尼加拉瓜"},{prefix:"506",en:"Costa Rica",cn:"哥斯达黎加",ko:"코스타리카",vi:"Costa Rica",ja:"コスタリカ",cns:"哥斯達黎加"},{prefix:"507",en:"Panama",cn:"巴拿马",ko:"파나마",vi:"Panama",ja:"パナマ",cns:"巴拿馬"},{prefix:"509",en:"Haiti",cn:"海地",ko:"아이티",vi:"Haiti",ja:"ハイチ",cns:"海地"},{prefix:"590",en:"Guadeloupe",cn:"瓜德罗普",ko:"과들루프",vi:"Guadeloupe",ja:"グアドループ",cns:"瓜德羅普"},{prefix:"591",en:"Bolivia",cn:"玻利维亚",ko:"볼리비아",vi:"Bolivia",ja:"ボリビア",cns:"玻利維亞"},{prefix:"592",en:"Guyana",cn:"圭亚那",ko:"가이아나",vi:"Guyana",ja:"ガイアナ",cns:"圭亞那"},{prefix:"593",en:"Ecuador",cn:"厄瓜多尔",ko:"에콰도르",vi:"Ecuador",ja:"エクアドル",cns:"厄瓜多爾"},{prefix:"594",en:"French Guiana",cn:"法属圭亚那",ko:"프랑스 령 기아나",vi:"Guiana thuộc Pháp",ja:"仏領ギアナ",cns:"法屬圭亞那"},{prefix:"595",en:"Paraguay",cn:"巴拉圭",ko:"파라과이",vi:"Paraguay",ja:"パラグアイ",cns:"巴拉圭"},{prefix:"596",en:"Martinique",cn:"马提尼克",ko:"마르티니크",vi:"Martinique",ja:"マルティニーク",cns:"馬提尼克"},{prefix:"597",en:"Suriname",cn:"苏里南",ko:"수리남",vi:"Suriname",ja:"スリナム",cns:"蘇里南"},{prefix:"598",en:"Uruguay",cn:"乌拉圭",ko:"우루과이",vi:"Uruguay",ja:"ウルグアイ",cns:"烏拉圭"},{prefix:"599",en:"Netherlands Antillse",cn:"荷属安的列斯",ko:"네덜란드 령 앤 틸리 스",vi:"Antilles của Hà Lan",ja:"オランダ領アンティル",cns:"荷屬安的列斯"},{prefix:"670",en:"Timor Leste",cn:"东帝汶",ko:"동 티모르",vi:"Đông Timor",ja:"東ティモール",cns:"東帝汶"},{prefix:"673",en:"Brunei",cn:"文莱",ko:"브루나이",vi:"Brunei",ja:"ブルネイ",cns:"文萊"},{prefix:"675",en:"Papua New Guinea",cn:"巴布亚新几内亚",ko:"파푸아 뉴기니",vi:"Papua New Guinea",ja:"パプアニューギニア",cns:"巴布亞新幾內亞"},{prefix:"676",en:"Tonga",cn:"汤加",ko:"통가",vi:"Tonga",ja:"トンガ",cns:"湯加"},{prefix:"678",en:"Vanuatu",cn:"瓦努阿图",ko:"바누아투",vi:"Vanuatu",ja:"バヌアツ",cns:"瓦努阿圖"},{prefix:"679",en:"Fiji",cn:"斐济",ko:"피지",vi:"Fiji",ja:"フィジー",cns:"斐濟"},{prefix:"682",en:"Cook Islands",cn:"库克群岛",ko:"섬",vi:"Đảo",ja:"島",cns:"庫克群島"},{prefix:"684",en:"Samoa Eastern",cn:"萨摩亚东部",ko:"동부 사모아",vi:"Đông Samoa",ja:"東サモア",cns:"薩摩亞東部"},{prefix:"685",en:"Samoa Western",cn:"萨摩亚西部",ko:"서부 사모아",vi:"Tây Samoa",ja:"西サモア",cns:"薩摩亞西部"},{prefix:"687",en:"New Caledonia",cn:"新喀里多尼亚",ko:"뉴 칼레도니아",vi:"New Caledonia",ja:"ニューカレドニア",cns:"新喀裡多尼亞"},{prefix:"689",en:"French Polynesia",cn:"法属波利尼西亚",ko:"프랑스 령 폴리네시아의",vi:"Polynesia thuộc Pháp",ja:"フランス領ポリネシア",cns:"法屬波利尼西亞"},{prefix:"852",en:"Hong Kong",cn:"香港",ko:"홍콩",vi:"Hồng Kông",ja:"香港",cns:"香港"},{prefix:"853",en:"Macao",cn:"澳门",ko:"마카오",vi:"Macao",ja:"マカオ",cns:"澳門"},{prefix:"855",en:"Cambodia",cn:"柬埔寨",ko:"캄보디아",vi:"Campuchia",ja:"カンボジア",cns:"柬埔寨"},{prefix:"856",en:"Laos",cn:"老挝",ko:"라오스",vi:"Nước Lào",ja:"ラオス",cns:"老撾"},{prefix:"880",en:"Bangladesh",cn:"孟加拉国",ko:"방글라데시",vi:"Bangladesh",ja:"バングラデシュ",cns:"孟加拉國"},{prefix:"886",en:"Taiwan",cn:"台湾",ko:"대만",vi:"Đài loan",ja:"台湾",cns:"台灣"},{prefix:"960",en:"Maldives",cn:"马尔代夫",ko:"몰디브",vi:"Maldives",ja:"モルディブ",cns:"馬爾代夫"},{prefix:"961",en:"Lebanon",cn:"黎巴嫩",ko:"레바논",vi:"Lebanon",ja:"レバノン",cns:"黎巴嫩"},{prefix:"962",en:"Jordan",cn:"约旦",ko:"요르단",vi:"Jordan",ja:"ヨルダン",cns:"約旦"},{prefix:"963",en:"Syria",cn:"叙利亚",ko:"시리아",vi:"Syria",ja:"シリア",cns:"敘利亞"},{prefix:"964",en:"Iraq",cn:"伊拉克",ko:"이라크",vi:"Iraq",ja:"イラク",cns:"伊拉克"},{prefix:"965",en:"Kuwait",cn:"科威特",ko:"쿠웨이트",vi:"Kuwait",ja:"クウェート",cns:"科威特"},{prefix:"966",en:"Saudi Arabia",cn:"沙特阿拉伯",ko:"사우디 아라비아",vi:"Ả Rập Saudi",ja:"サウジアラビア",cns:"沙特阿拉伯"},{prefix:"967",en:"Yemen",cn:"也门",ko:"예멘",vi:"Yemen",ja:"イエメン",cns:"也門"},{prefix:"968",en:"Oman",cn:"阿曼",ko:"오만",vi:"Oman",ja:"オマーン",cns:"阿曼"},{prefix:"970",en:"Palestinian",cn:"巴勒斯坦",ko:"팔레스타인",vi:"Palestine",ja:"パレスチナ",cns:"巴勒斯坦"},{prefix:"971",en:"United Arab Emirates",cn:"阿拉伯联合酋长国",ko:"아랍 에미리트",vi:"các Tiểu Vương Quốc Ả Rập Thống Nhất",ja:"アラブ首長国連邦",cns:"阿拉伯聯合酋長國"},{prefix:"972",en:"Israel",cn:"以色列",ko:"이스라엘",vi:"Người israel",ja:"イスラエル",cns:"以色列"},{prefix:"973",en:"Bahrain",cn:"巴林",ko:"바레인",vi:"Bahrain",ja:"バーレーン",cns:"巴林"},{prefix:"974",en:"Qotar",cn:"库塔",ko:"쿠타",vi:"Kuta",ja:"クタ",cns:"庫塔"},{prefix:"975",en:"Bhutan",cn:"不丹",ko:"부탄",vi:"Bhutan",ja:"ブータン",cns:"不丹"},{prefix:"976",en:"Mongolia",cn:"蒙古",ko:"몽골리아",vi:"Mông Cổ",ja:"モンゴル",cns:"蒙古"},{prefix:"977",en:"Nepal",cn:"尼泊尔",ko:"네팔",vi:"Nepal",ja:"ネパール",cns:"尼泊爾"},{prefix:"992",en:"Tajikistan",cn:"塔吉克斯坦",ko:"타지키스탄",vi:"Tajikistan",ja:"タジキスタン",cns:"塔吉克斯坦"},{prefix:"993",en:"Turkmenistan",cn:"土库曼斯坦",ko:"투르크 메니스탄",vi:"Turkmenistan",ja:"トルクメニスタン",cns:"土庫曼斯坦"},{prefix:"994",en:"Azerbaijan",cn:"阿塞拜疆",ko:"아제르바이잔",vi:"Azerbaijan",ja:"アゼルバイジャン",cns:"阿塞拜疆"},{prefix:"995",en:"Georgia",cn:"格鲁吉亚",ko:"그루지야",vi:"Georgia",ja:"ジョージア",cns:"格魯吉亞"},{prefix:"996",en:"Kyrgyzstan",cn:"吉尔吉斯斯坦",ko:"키르기스스탄",vi:"Kyrgyzstan",ja:"キルギス",cns:"吉爾吉斯斯坦"},{prefix:"998",en:"Uzbekistan",cn:"乌兹别克斯坦",ko:"우즈베키스탄",vi:"Uzbekistan",ja:"ウズベキスタン",cns:"烏茲別克斯坦"},{prefix:"1242",en:"Bahamas",cn:"巴哈马",ko:"바하마",vi:"Bahamas",ja:"バハマ",cns:"巴哈馬"},{prefix:"1246",en:"Barbados",cn:"巴巴多斯",ko:"바베이도스",vi:"Barbados",ja:"バルバドス",cns:"巴巴多斯"},{prefix:"1264",en:"Anguilla",cn:"安圭拉",ko:"앵 귈라",vi:"Anguilla",ja:"アンギラ",cns:"安圭拉"},{prefix:"1268",en:"Antigua and Barbuda",cn:"安提瓜和巴布达",ko:"앤티가 바부 다",vi:"Antigua và Barbuda",ja:"アンティグアバーブーダ",cns:"安提瓜和巴布達"},{prefix:"1340",en:"Virgin Islands",cn:"维尔京群岛",ko:"버진 아일랜드",vi:"Quần đảo Virgin",ja:"バージン諸島",cns:"維爾京群島"},{prefix:"1345",en:"Cayman Islands",cn:"开曼群岛",ko:"케이맨 제도",vi:"Quần đảo Cayman",ja:"ケイマン諸島",cns:"開曼群島"},{prefix:"1441",en:"Bermuda",cn:"百慕大",ko:"버뮤다",vi:"Bermuda",ja:"バミューダ",cns:"百慕大"},{prefix:"1473",en:"Grenada",cn:"格林纳达",ko:"그레나다",vi:"Grenada",ja:"グレナダ",cns:"格林納達"},{prefix:"1649",en:"Turks and Caicos Islands",cn:"特克斯和凯科斯群岛",ko:"터크 스 케이 커스 제도",vi:"Quần đảo Turks và Caicos",ja:"タークスカイコス諸島",cns:"特克斯和凱科斯群島"},{prefix:"1664",en:"Montserrat",cn:"蒙特塞拉特",ko:"몬세 라트",vi:"Montserrat",ja:"モントセラト",cns:"蒙特塞拉特"},{prefix:"1671",en:"Guam",cn:"关岛",ko:"괌",vi:"Guam",ja:"グアム",cns:"關島"},{prefix:"1758",en:"St.Lucia",cn:"圣卢西亚",ko:"세인트 루시아",vi:"Saint Lucia",ja:"セントルシア",cns:"聖盧西亞"},{prefix:"1767",en:"Dominica",cn:"多米尼加",ko:"도미니카",vi:"Dominica",ja:"ドミニカ",cns:"多米尼加"},{prefix:"1784",en:"St.Vincent",cn:"圣文森特",ko:"세인트 빈센트",vi:"Saint Vincent",ja:"セントビンセント",cns:"聖文森特"},{prefix:"1809",en:"Dominican Republic",cn:"多米尼加共和国",ko:"도미니카 공화국",vi:"Cộng hòa Dominica",ja:"ドミニカ共和国",cns:"多米尼加共和國"},{prefix:"1868",en:"Trinidad and Tobago",cn:"特立尼达和多巴哥",ko:"트리니다드 토바고",vi:"Trinidad và Tobago",ja:"トリニダード・トバゴ",cns:"特立尼達和多巴哥"},{prefix:"1869",en:"St Kitts and Nevis",cn:"圣基茨和尼维斯",ko:"세인트 키츠 네비스",vi:"Saint Kitts và Nevis",ja:"セントクリストファーネイビス",cns:"聖基茨和尼維斯"},{prefix:"1876",en:"Jamaica",cn:"牙买加",ko:"자메이카",vi:"Jamaica",ja:"ジャマイカ",cns:"牙買加"}],t=a;n.default=t},"39b3":function(e,n,i){"use strict";var a;i.d(n,"b",(function(){return t})),i.d(n,"c",(function(){return c})),i.d(n,"a",(function(){return a}));var t=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("v-uni-view",[i("v-uni-view",{staticClass:"form_label"},[i("v-uni-view",{staticClass:"form_label_name"},[i("v-uni-text",{staticClass:"iconfont icon-mail"})],1),i("v-uni-view",{staticClass:"form_label_main"},[i("v-uni-view",{staticClass:"form_input_bar"},[i("v-uni-input",{staticClass:"input_bar",attrs:{type:"text",placeholder:e.getLangs("emailEmptyTips")},model:{value:e.email,callback:function(n){e.email=n},expression:"email"}})],1)],1)],1),i("v-uni-view",{staticClass:"form_label"},[i("v-uni-view",{staticClass:"form_label_name"},[i("v-uni-text",{staticClass:"iconfont icon-barrage"})],1),i("v-uni-view",{staticClass:"form_label_main"},[i("v-uni-view",{staticClass:"form_input_bar vcode"},[i("v-uni-input",{staticClass:"input_bar",attrs:{type:"text",placeholder:e.getLangs("validCodePlaceholder")},model:{value:e.vcode,callback:function(n){e.vcode=n},expression:"vcode"}}),i("v-uni-view",{staticClass:"get_code",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.getMessageCode.apply(void 0,arguments)}}},[e._v(e._s(e.getVcodeText))])],1)],1)],1)],1)},c=[]},"55bd":function(e,n,i){"use strict";var a=i("2ced"),t=i.n(a);t.a},"672a":function(e,n,i){"use strict";i("cb29"),i("d81d"),i("a9e3"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={props:{list:{type:Array,default:function(){return[]}},border:{type:Boolean,default:!0},value:{type:Boolean,default:!1},cancelColor:{type:String,default:"#606266"},confirmColor:{type:String,default:"#2979ff"},zIndex:{type:[String,Number],default:0},safeAreaInsetBottom:{type:Boolean,default:!1},maskCloseAble:{type:Boolean,default:!0},defaultValue:{type:Array,default:function(){return[0]}},mode:{type:String,default:"single-column"},valueName:{type:String,default:"value"},labelName:{type:String,default:"label"},childName:{type:String,default:"children"},title:{type:String,default:""},cancel:{type:String,default:"取消"},confirm:{type:String,default:"确定"},qh:{type:Boolean,default:!1}},data:function(){return{defaultSelector:[0],columnData:[],selectValue:[],lastSelectIndex:[],columnNum:0,moving:!1}},watch:{value:{immediate:!0,handler:function(e){var n=this;e&&setTimeout((function(){return n.init()}),10)}}},computed:{uZIndex:function(){return this.zIndex?this.zIndex:this.$u.zIndex.popup}},methods:{pickstart:function(){},pickend:function(){},init:function(){this.setColumnNum(),this.setDefaultSelector(),this.setColumnData(),this.setSelectValue()},setDefaultSelector:function(){this.defaultSelector=this.defaultValue.length==this.columnNum?this.defaultValue:Array(this.columnNum).fill(0),this.lastSelectIndex=this.$u.deepClone(this.defaultSelector)},setColumnNum:function(){if("single-column"==this.mode)this.columnNum=1;else if("mutil-column"==this.mode)this.columnNum=this.list.length;else if("mutil-column-auto"==this.mode){var e=1,n=this.list;while(n[0][this.childName])n=n[0]?n[0][this.childName]:{},e++;this.columnNum=e}},setColumnData:function(){var e=[];if(this.selectValue=[],"mutil-column-auto"==this.mode)for(var n=this.list[this.defaultSelector.length?this.defaultSelector[0]:0],i=0;i<this.columnNum;i++)0==i?(e[i]=this.list,n=n[this.childName]):(e[i]=n,n=n[this.defaultSelector[i]][this.childName]);else"single-column"==this.mode?e[0]=this.list:e=this.list;this.columnData=e},setSelectValue:function(){for(var e=null,n=0;n<this.columnNum;n++)e=this.columnData[n][this.defaultSelector[n]],this.selectValue.push({value:e?e[this.valueName]:null,label:e?e[this.labelName]:null,prefix:e?e["prefix"]:null}),e&&e.extra&&(this.selectValue.extra=e.extra)},columnChange:function(e){var n=this,i=null,a=e.detail.value;if(this.selectValue=[],"mutil-column-auto"==this.mode){this.lastSelectIndex.map((function(e,n){e!=a[n]&&(i=n)})),this.defaultSelector=a;for(var t=i+1;t<this.columnNum;t++)this.columnData[t]=this.columnData[t-1][t-1==i?a[i]:0][this.childName],this.defaultSelector[t]=0;a.map((function(e,i){var t=n.columnData[i][a[i]],c={value:t?t[n.valueName]:null,label:t?t[n.labelName]:null};t&&t.extra&&(c.extra=t.extra),n.selectValue.push(c)})),this.lastSelectIndex=a}else if("single-column"==this.mode){var c=this.columnData[0][a[0]],o={value:c?c[this.valueName]:null,label:c?c[this.labelName]:null};c&&c.extra&&(o.extra=c.extra),this.selectValue.push(o)}else"mutil-column"==this.mode&&a.map((function(e,i){var t=n.columnData[i][a[i]],c={value:t?t[n.valueName]:null,label:t?t[n.labelName]:null};t&&t.extra&&(c.extra=t.extra),n.selectValue.push(c)}))},close:function(){this.$emit("input",!1)},getResult:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e&&this.$emit(e,this.selectValue),this.close()},selectHandler:function(){this.$emit("click")}}};n.default=a},"6b4d":function(e,n,i){"use strict";i.r(n);var a=i("b70a"),t=i.n(a);for(var c in a)"default"!==c&&function(e){i.d(n,e,(function(){return a[e]}))}(c);n["default"]=t.a},7985:function(e,n,i){"use strict";i.d(n,"b",(function(){return t})),i.d(n,"c",(function(){return c})),i.d(n,"a",(function(){return a}));var a={uPopup:i("d1d0").default},t=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("v-uni-view",{staticClass:"u-select"},[i("u-popup",{attrs:{maskCloseAble:e.maskCloseAble,mode:"bottom",popup:!1,length:"auto",safeAreaInsetBottom:e.safeAreaInsetBottom,"z-index":e.uZIndex},on:{close:function(n){arguments[0]=n=e.$handleEvent(n),e.close.apply(void 0,arguments)}},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}},[i("v-uni-view",{staticClass:"u-select"},[i("v-uni-view",{staticClass:"u-select__header",on:{touchmove:function(n){n.stopPropagation(),n.preventDefault(),arguments[0]=n=e.$handleEvent(n)}}},[i("v-uni-view",{staticClass:"u-select__header__cancel u-select__header__btn",style:{color:e.cancelColor},attrs:{"hover-class":"u-hover-class","hover-stay-time":150},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.getResult("cancel")}}},[e._v(e._s(e.cancel))]),i("v-uni-view",{staticClass:"u-select__header__title"},[e._v(e._s(e.title))]),i("v-uni-view",{staticClass:"u-select__header__confirm u-select__header__btn",style:{color:e.moving?e.cancelColor:e.confirmColor},attrs:{"hover-class":"u-hover-class","hover-stay-time":150},on:{touchmove:function(n){n.stopPropagation(),arguments[0]=n=e.$handleEvent(n)},click:function(n){n.stopPropagation(),arguments[0]=n=e.$handleEvent(n),e.getResult("confirm")}}},[e._v(e._s(e.confirm))])],1),i("v-uni-view",{staticClass:"u-select__body"},[i("v-uni-picker-view",{staticClass:"u-select__body__picker-view",attrs:{value:e.defaultSelector},on:{change:function(n){arguments[0]=n=e.$handleEvent(n),e.columnChange.apply(void 0,arguments)},pickstart:function(n){arguments[0]=n=e.$handleEvent(n),e.pickstart.apply(void 0,arguments)},pickend:function(n){arguments[0]=n=e.$handleEvent(n),e.pickend.apply(void 0,arguments)}}},e._l(e.columnData,(function(n,a){return i("v-uni-picker-view-column",{key:a},e._l(n,(function(n,a){return i("v-uni-view",{key:a,staticClass:"u-select__body__picker-view__item"},[e.qh?i("v-uni-view",{staticClass:"u-line-1"},[e._v(e._s(n["prefix"])+" - "+e._s(n[e.labelName]))]):i("v-uni-view",{staticClass:"u-line-1"},[e._v(e._s(n[e.labelName]))])],1)})),1)})),1)],1)],1)],1)],1)},c=[]},"7a1c":function(e,n,i){"use strict";i.r(n);var a=i("39b3"),t=i("6b4d");for(var c in t)"default"!==c&&function(e){i.d(n,e,(function(){return t[e]}))}(c);var o,r=i("f0c5"),s=Object(r["a"])(t["default"],a["b"],a["c"],!1,null,"34ef0ed4",null,!1,a["a"],o);n["default"]=s.exports},"7f86":function(e,n,i){var a=i("34e9");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var t=i("4f06").default;t("399ff3b0",a,!0,{sourceMap:!1,shadowMode:!1})},"8deb":function(e,n,i){"use strict";i.r(n);var a=i("c79e"),t=i("ead1");for(var c in t)"default"!==c&&function(e){i.d(n,e,(function(){return t[e]}))}(c);i("55bd");var o,r=i("f0c5"),s=Object(r["a"])(t["default"],a["b"],a["c"],!1,null,"13976286",null,!1,a["a"],o);n["default"]=s.exports},a104:function(e,n,i){var a=i("24fb");n=a(!1),n.push([e.i,".qh[data-v-13976286]{padding-left:100px}.qh_class[data-v-13976286]{position:absolute;left:0;width:90px}.uni-input[data-v-13976286]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#2970e6}",""]),e.exports=n},ac30:function(e,n,i){"use strict";i.r(n);var a=i("672a"),t=i.n(a);for(var c in a)"default"!==c&&function(e){i.d(n,e,(function(){return a[e]}))}(c);n["default"]=t.a},acb8:function(e,n,i){"use strict";var a=i("4ea4");i("99af"),i("4de4"),i("c740"),i("c975"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,i("96cf");var t=a(i("1da1")),c=a(i("86eb")),o=a(i("f9e1")),r=a(i("7b9c")),s=a(i("3755")),l=a(i("4c57")),u=i("4fd8"),f={name:"Phone",mixins:[c.default,o.default],data:function(){return{phone:"",qh:1,vcode:"",index:0,curQhCountry:"USA",qhList:s.default,timer:null,countTimer:r.default.countTimer,show:!1}},methods:{getMessageCode:function(){var e=this;return(0,t.default)(regeneratorRuntime.mark((function n(){var i,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.countTimer===r.default.countTimer){n.next=2;break}return n.abrupt("return");case 2:if(0!==e.phone.length){n.next=4;break}return n.abrupt("return",e.$tips.showToast(e.getLangs("phonePlaceholder")));case 4:return i={phone:e.phone,qh:e.qh},e.$tips.showLoading(e.getLangs("loadingText")),n.next=8,(0,u.sendSms)(i);case 8:a=n.sent,e.$tips.hideLoading(),l.default.checkCode(a)&&e.countTimerHandler(),e.backTips(a);case 12:case"end":return n.stop()}}),n)})))()},countTimerHandler:function(){var e=this;this.countTimer--,this.timer=setInterval((function(){e.countTimer--,0===e.countTimer&&(e.countTimer=r.default.countTimer,clearInterval(e.timer),e.timer=null)}),1e3)},bindPickerChange:function(e){var n=e.detail.value,i=this.qhList[n];this.index=n,this.qh=i.prefix,this.curQhCountry=i.en},confirm:function(e){var n=e[0];this.qh=this.qhList.filter((function(e){return e.en==n.value}))[0].prefix,this.curQhCountry=n.value},getPhone:function(){return this.phone},getVcode:function(){return this.vcode},getQh:function(){return this.qh},open:function(){this.show=!this.show},checkInput:function(e){var n=this;setTimeout((function(){var i=/^[0-9]*$/,a=e.detail.value;if(a.indexOf(" ")>-1||!i.test(a))return n.phone="";n.phone=a}),50)}},computed:{getQhValue:function(){var e=this;console.log(this.curQhCountry);var n=this.qhList.filter((function(n){return n.en===e.curQhCountry}))[0];return"".concat(n.prefix," - ").concat(n[this.getGlobalLang])},getKey:function(){return this.getGlobalLang},getVcodeText:function(){return this.countTimer===r.default.countTimer?this.getLangs("getVerificationCode"):"".concat(this.countTimer,"s")}},created:function(){var e=this;this.index=this.qhList.findIndex((function(n){return n.en===e.curQhCountry}))}};n.default=f},b70a:function(e,n,i){"use strict";var a=i("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,i("96cf");var t=a(i("1da1")),c=a(i("f9e1")),o=a(i("86eb")),r=a(i("7b9c")),s=i("4fd8"),l=a(i("4c57")),u={name:"Email",mixins:[o.default,c.default],data:function(){return{email:"",vcode:"",timer:null,countTimer:60}},methods:{getMessageCode:function(){var e=this;return(0,t.default)(regeneratorRuntime.mark((function n(){var i,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.countTimer===r.default.countTimer){n.next=2;break}return n.abrupt("return");case 2:if(0!==e.email.length){n.next=4;break}return n.abrupt("return",e.$tips.showToast(e.getLangs("emailEmptyTips")));case 4:return i={email:e.email},e.$tips.showLoading(e.getLangs("loadingText")),n.next=8,(0,s.sendEmail)(i);case 8:a=n.sent,e.$tips.hideLoading(),l.default.checkCode(a)&&e.countTimerHandler(),e.backTips(a);case 12:case"end":return n.stop()}}),n)})))()},countTimerHandler:function(){var e=this;this.countTimer--,this.timer=setInterval((function(){e.countTimer--,0===e.countTimer&&(e.countTimer=r.default.countTimer,clearInterval(e.timer),e.timer=null)}),1e3)},getEmail:function(){return this.email},getVcode:function(){return this.vcode}},computed:{getVcodeText:function(){return this.countTimer===r.default.countTimer?this.getLangs("getVerificationCode"):"".concat(this.countTimer,"s")}}};n.default=u},c79e:function(e,n,i){"use strict";i.d(n,"b",(function(){return t})),i.d(n,"c",(function(){return c})),i.d(n,"a",(function(){return a}));var a={uSelect:i("e053").default},t=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("v-uni-view",[i("v-uni-view",{staticClass:"form_label"},[i("v-uni-view",{staticClass:"form_label_name"},[i("v-uni-text",{staticClass:"iconfont icon-mobilephone"})],1),i("v-uni-view",{staticClass:"form_label_main"},[i("v-uni-view",{staticClass:"form_input_bar qh"},[i("v-uni-view",{staticClass:"qh_class",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.open.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.getQhValue))])],1),i("u-select",{staticClass:"qh_class",attrs:{confirm:e.getLangs("confirm"),cancel:e.getLangs("cancel"),"value-name":"en","label-name":e.getGlobalLang,qh:!0,list:e.qhList},on:{confirm:function(n){arguments[0]=n=e.$handleEvent(n),e.confirm.apply(void 0,arguments)}},model:{value:e.show,callback:function(n){e.show=n},expression:"show"}},[e._v(e._s(e.getQhValue))]),i("v-uni-input",{staticClass:"input_bar",attrs:{type:"text",placeholder:e.getLangs("phonePlaceholder")},on:{blur:function(n){arguments[0]=n=e.$handleEvent(n),e.checkInput.apply(void 0,arguments)},input:function(n){arguments[0]=n=e.$handleEvent(n),e.checkInput.apply(void 0,arguments)}},model:{value:e.phone,callback:function(n){e.phone=n},expression:"phone"}})],1)],1)],1),i("v-uni-view",{staticClass:"form_label"},[i("v-uni-view",{staticClass:"form_label_name"},[i("v-uni-text",{staticClass:"iconfont icon-shake"})],1),i("v-uni-view",{staticClass:"form_label_main"},[i("v-uni-view",{staticClass:"form_input_bar vcode"},[i("v-uni-input",{staticClass:"input_bar",attrs:{type:"text",placeholder:e.getLangs("validCodePlaceholder")},model:{value:e.vcode,callback:function(n){e.vcode=n},expression:"vcode"}}),i("v-uni-view",{staticClass:"get_code",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.getMessageCode.apply(void 0,arguments)}}},[e._v(e._s(e.getVcodeText))])],1)],1)],1)],1)},c=[]},cb29:function(e,n,i){var a=i("23e7"),t=i("81d5"),c=i("44d2");a({target:"Array",proto:!0},{fill:t}),c("fill")},e053:function(e,n,i){"use strict";i.r(n);var a=i("7985"),t=i("ac30");for(var c in t)"default"!==c&&function(e){i.d(n,e,(function(){return t[e]}))}(c);i("261e");var o,r=i("f0c5"),s=Object(r["a"])(t["default"],a["b"],a["c"],!1,null,"054fee37",null,!1,a["a"],o);n["default"]=s.exports},ead1:function(e,n,i){"use strict";i.r(n);var a=i("acb8"),t=i.n(a);for(var c in a)"default"!==c&&function(e){i.d(n,e,(function(){return a[e]}))}(c);n["default"]=t.a}}]);