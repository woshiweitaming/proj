(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-withdraw-index"],{"0886":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"form_class"},[n("v-uni-view",{staticClass:"withdraw_content"},[n("v-uni-view",{staticClass:"form_label"},[n("v-uni-view",{staticClass:"form_label_name"},[t._v(t._s(t.getLangs("drawithCurrency")))]),n("v-uni-view",{staticClass:"form_label_main"},[n("v-uni-view",{staticClass:"form_input_bar"},[n("v-uni-view",{staticClass:"select",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopClick.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"select_label",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show1=!t.show1}}},[n("v-uni-view",{staticClass:"select_name"},[t._v(t._s(t.currencyList[t.curActive].name))]),n("v-uni-text",{staticClass:"iconfont icon-unfold"})],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show1,expression:"show1"}],staticClass:"select_drop"},[n("v-uni-view",{staticClass:"selelct_drop_main",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopClick.apply(void 0,arguments)}}},t._l(t.currencyList,(function(e,a){return n("v-uni-view",{key:a,staticClass:"select_drop_label",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeDrop1(a)}}},[t._v(t._s(e.name))])})),1)],1)],1)],1)],1)],1),n("v-uni-view",{staticClass:"form_label"},[n("v-uni-view",{staticClass:"form_label_name"},[t._v(t._s(t.getLangs("drawithAddress")))]),n("v-uni-view",{staticClass:"form_label_main"},[n("v-uni-view",{staticClass:"form_input_bar"},[n("v-uni-view",{staticClass:"select",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopClick.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"select_label",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!t.show}}},[n("v-uni-view",{staticClass:"select_name"},[t._v(t._s(""===t.qbdizhi?t.getLangs("walletAddress"):t.qbdizhi))]),n("v-uni-text",{staticClass:"iconfont icon-unfold"})],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"select_drop"},[n("v-uni-view",{staticClass:"selelct_drop_main",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopClick.apply(void 0,arguments)}}},t._l(t.getWalletList,(function(e,a){return n("v-uni-view",{key:a,staticClass:"select_drop_label",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.changeDrop(e)}}},[t._v(t._s(e.address))])})),1)],1)],1)],1)],1)],1),n("v-uni-view",{staticClass:"form_label"},[n("v-uni-view",{staticClass:"form_label_name"},[t._v(t._s(t.getLangs("drawithNum")))]),n("v-uni-view",{staticClass:"form_label_main"},[n("v-uni-view",{staticClass:"form_input_bar"},[n("v-uni-input",{staticClass:"input_bar",attrs:{type:"text",placeholder:t.getLangs("withdrawalAmount")},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.checkInput.apply(void 0,arguments)}},model:{value:t.dollar,callback:function(e){t.dollar=e},expression:"dollar"}}),n("v-uni-text",{staticClass:"all_cash",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.all.apply(void 0,arguments)}}},[t._v(t._s(t.getLangs("drawithAll")))])],1),n("v-uni-text",{staticClass:"sub"},[t._v(t._s(t.getLangs("avaliableUsdt"))+"("+t._s(t.currencyList[t.curActive].name)+") : "+t._s(t.config.usdt))])],1)],1),n("v-uni-view",{staticClass:"form_label"},[n("v-uni-view",{staticClass:"form_label_name"},[t._v(t._s(t.getLangs("drawithFee")))]),n("v-uni-view",{staticClass:"form_label_main"},[n("v-uni-view",{staticClass:"form_input_bar"},[n("v-uni-input",{staticClass:"input_bar fees",attrs:{type:"text",placeholder:t.getLangs("withdrawalAmount"),value:t.getFees}})],1)],1)],1),n("v-uni-view",{staticClass:"form_label"},[n("v-uni-view",{staticClass:"form_label_name"},[t._v(t._s(t.getLangs("drawithTips")))]),n("v-uni-view",{staticClass:"form_label_main"},[n("v-uni-view",{staticClass:"form_input_bar"},[n("v-uni-rich-text",{staticClass:"tips_desc",attrs:{nodes:t.getLangs("drawithTipsText")}})],1)],1)],1),n("v-uni-view",{staticClass:"account"},[t._v(t._s(t.getLangs("accountNums"))+":"+t._s(t.getAccountNums))]),n("v-uni-button",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.withdrawHandler.apply(void 0,arguments)}}},[t._v(t._s(t.getLangs("withdrawBtn")))])],1)],1)},r=[]},"0b24":function(t,e,n){"use strict";n.r(e);var a=n("b931"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"0f31":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=a(n("1da1")),r=a(n("5530")),s=n("2f62"),c=n("9501"),o=a(n("f737")),u={methods:(0,r.default)({data:function(){return{timer:null}},getUserLeftmoneyHandler:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,c.getAllBalance)();case 2:n=e.sent,o.default.checkCode(n)&&(t.setLeftmoney(n.allBalance),t.setAccountBanlance(n.data),t.setCny(n.allCNY));case 4:case"end":return e.stop()}}),e)})))()},checkCertInfoHandler:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,c.userCertInfo)();case 2:n=e.sent,o.default.checkCode(n)&&t.setCertInfo(n.data);case 4:case"end":return e.stop()}}),e)})))()},getUserInfoHandler:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,c.getUserInfo)();case 2:n=e.sent,o.default.checkCode(n)&&t.setUserInfoData(n.data);case 4:case"end":return e.stop()}}),e)})))()},setTimer:function(){var t=this;null!==this.timer&&this.clearTimer(),this.timer=setInterval((function(){t.getUserLeftmoneyHandler()}),2e3)},clearTimer:function(){clearInterval(this.timer),this.timer=null}},(0,s.mapMutations)({setLeftmoney:"SET_LEFTMONEY",setCertInfo:"SET_CERT_INFO",setUserInfoData:"SET_USER_INFO_DATA",setAccountBanlance:"SET_ACCOUNT_BANLANCE",setCny:"SET_CNY"})),computed:(0,r.default)({},(0,s.mapGetters)({getLeftmoney:"getLeftmoney",getCertinfo:"getCertInfo",getUserInfoData:"getUserInfoData",getCny:"getCny",getAccountBanlance:"getAccountBanlance"})),onShow:function(){},onUnload:function(){},created:function(){},destroyed:function(){this.clearTimer()}},l=u;e.default=l},"14a4":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("eac9")),r=a(n("aae5")),s=a(n("0f31")),c=a(n("b92d")),o={name:"Withdraw",mixins:[i.default,r.default,s.default],data:function(){return{status:!1}},components:{WithdrawApply:c.default},onShow:function(){this.checkCertInfoHandler(),this.status=!this.status,this.setTitle(this.getLangs("withdraw"))},onNavigationBarButtonTap:function(t){this.navigateTo("/pages/order_list/index?type=1")}};e.default=o},"1eac":function(t,e,n){"use strict";n.r(e);var a=n("cbd9"),i=n("bfc9");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var s,c=n("f0c5"),o=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"b74a5fb2",null,!1,a["a"],s);e["default"]=o.exports},3619:function(t,e,n){var a=n("9b38");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("40f5d464",a,!0,{sourceMap:!1,shadowMode:!1})},"6b57":function(t,e,n){"use strict";var a=n("4ea4");n("4de4"),n("d81d"),n("fb6a"),n("4e82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=a(n("1da1")),r=a(n("5530")),s=n("2f62"),c=n("7ff2"),o={methods:(0,r.default)({getProductDataHandler:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,c.getProduct)();case 2:n=e.sent,t.clearTimer(),t.setProductData(n.data);case 5:case"end":return e.stop()}}),e)})))()}},(0,s.mapMutations)({setProductData:"SET_PRODUCT_DATA"})),computed:(0,r.default)({getShowData:function(){if("{}"===JSON.stringify(this.getCurrencyData))return[];var t=this.getCurrencyData;return t.slice(0,3)},getTradeData:function(){return 0===this.active?this.getCurrencyData.sort((function(t,e){return e.gain-t.gain})):1===this.active?this.getCurrencyData.sort((function(t,e){return e.count-t.count})):void 0},getLeftData:function(){var t=this;if("undefined"===typeof this.getProductData.length||0===this.getProductData.length||"undefined"===typeof this.getLeftWsData.length||0===this.getLeftWsData.length)return[];var e=JSON.parse(JSON.stringify(this.getProductData)),n=e.map((function(e){var n=t.getLeftWsData.filter((function(t){return t.id===e.id})),a=Object.assign(e,n[0]);return a}));return n,n},getCurrenctData:function(){if(this.getWSData.length&&this.getWSData.length>0){var t=this.getCurrentPageData("opt").id;this.getWSData.slice().sort((function(t,e){return t.id-e.id}));return this.getWSData.filter((function(e){return e.id==t}))[0]}},getWSSortData:function(){if(this.getWSData.length&&this.getWSData.length>0){if(0===this.active){var t=this.getWSData.slice().sort((function(t,e){return e.gain-t.gain}));return t}if(1===this.active){var e=this.getWSData.slice().sort((function(t,e){return e.vol-t.vol}));return e}}},getCurrentCurrencyData:function(){var t=this.$storage.getLocalData("currentCurrency");return""==t||null==t?this.getWSData[0]:this.getWSData.filter((function(e){return e.id==t}))[0]}},(0,s.mapGetters)({getProductData:"getProductData",getWSData:"getWSData",getLeftWsData:"getLeftWsData"}))},u=o;e.default=u},7429:function(t,e,n){"use strict";var a=n("3619"),i=n.n(a);i.a},"9b38":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".form_class[data-v-23c0bac2]{padding:%?20?%;background:#f9f9f9}.form_label[data-v-23c0bac2]{padding-left:0;border:none!important;background:none}.form_label_name[data-v-23c0bac2]{position:static!important;font-size:%?30?%!important;color:#333!important;font-weight:700}.withdraw_tips[data-v-23c0bac2]{text-align:left;font-size:%?24?%;color:#df5000;width:100%;line-height:%?60?%;margin-top:%?40?%}.withdraw_input_bar[data-v-23c0bac2]{padding:0 %?20?%;border-bottom:2px solid #eee;-webkit-box-sizing:border-box;box-sizing:border-box}.withdraw_input .name[data-v-23c0bac2]{display:-webkit-box;display:-webkit-flex;display:flex;line-height:%?80?%;font-size:%?28?%;color:hsla(0,0%,100%,.5)}.withdraw_input_bar .input_bar[data-v-23c0bac2]{text-align:center;font-size:%?32?%;color:#000}.input_bar[data-v-23c0bac2]{color:#333;background:#fff;-webkit-border-radius:%?10?%;border-radius:%?10?%;padding:%?20?%;font-weight:700}.linked_main .linked_label[data-v-23c0bac2]{width:%?160?%;display:inline-block;padding:%?10?%;margin-right:%?20?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;text-align:center;font-size:%?28?%;color:#aaa}.linked_main .linked_label.on[data-v-23c0bac2]{background:#2970e6;border:1px solid #2970e6;color:#fff}.select_drop[data-v-23c0bac2]{z-index:100;background:#fff}.select .iconfont[data-v-23c0bac2]{right:%?-20?%!important}.all_cash[data-v-23c0bac2]{position:absolute;right:%?20?%;top:%?20?%;color:#007aff;font-weight:700;font-size:%?26?%}.tips_desc[data-v-23c0bac2]{font-size:%?24?%;color:#62759a}.account[data-v-23c0bac2]{text-align:center;line-height:%?40?%;font-size:%?26?%;color:#007aff;font-weight:700}.sub[data-v-23c0bac2]{font-size:%?24?%;display:block;margin-top:%?20?%;color:#8d9dbc;font-weight:700}.fees[data-v-23c0bac2]{color:#aaa}",""]),t.exports=e},abdf:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},i=a;e.default=i},b92d:function(t,e,n){"use strict";n.r(e);var a=n("0886"),i=n("0b24");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("7429");var s,c=n("f0c5"),o=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"23c0bac2",null,!1,a["a"],s);e["default"]=o.exports},b931:function(t,e,n){"use strict";var a=n("4ea4");n("4de4"),n("c975"),n("a9e3"),n("b680"),n("ac1f"),n("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530")),r=a(n("ade3"));n("96cf");var s,c=a(n("1da1")),o=n("2f62"),u=(a(n("34ec")),a(n("aae5"))),l=a(n("eac9")),f=(a(n("0f31")),a(n("c354"))),d=a(n("6b57")),h=n("9501"),v=a(n("f737")),g={name:"WithdrawApply",props:["status"],mixins:[u.default,l.default,f.default,d.default],data:function(){return{dollar:"",banknumber:"",bname:"",bankname:"",badds:"",qbdizhi:"",chainList:[{name:"ERC20",id:1},{name:"TRC20",id:2},{name:"OMNI",id:3}],chainId:1,config:{},walletList:[],show:!1,show1:!1,curActive:0,currencyList:[{name:"USDT",value:0},{name:"BTC",value:1},{name:"ETH",value:2}]}},methods:(s={openDrop:function(){this.currency.show=!this.currency.show},changeDrop:function(t){this.currency.active=t,this.currency.show=!1},stopClick:function(t){t.stopPropagation()},eventClick:function(){this.currency.show=!1},changeChain:function(t){this.chainId=t},changeDrop1:function(t){this.qbdizhi="",this.curActive=t,this.show1=!1,this.init()},all:function(){this.dollar=this.config.usdt},withdrawHandler:function(){var t=this;return(0,c.default)(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==t.dollar){e.next=2;break}return e.abrupt("return",t.$tips.showToast(t.getLangs("withdrawalAmount")));case 2:if(0!==t.walletList.length){e.next=4;break}return e.abrupt("return",t.navigateTo("/pages/add_wallet/index"));case 4:if(!(t.walletList.length>0)){e.next=7;break}if(""!==t.qbdizhi){e.next=7;break}return e.abrupt("return",t.$tips.showToast(t.getLangs("walletAddressEmpty")));case 7:return n={dollar:t.dollar,qbdizhi:t.qbdizhi,name:t.chainList.filter((function(e){return e.id==t.chainId}))[0].name,type:t.curActive},e.next=10,(0,h.withdrawal)(n);case 10:a=e.sent,t.backTips(a),v.default.checkCode(a)&&t.redirectTo("/pages/success_tips/index?name=withdraw");case 13:case"end":return e.stop()}}),e)})))()},init:function(){var t=this;return(0,c.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,h.getWinConfig)({type:t.curActive});case 2:n=e.sent,t.config=n.data;case 4:case"end":return e.stop()}}),e)})))()},getPayAddListHandler:function(){var t=this;return(0,c.default)(regeneratorRuntime.mark((function e(){var n,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,h.getPayAddList)();case 2:n=e.sent,a=n.data,0===a.length?(i=t,uni.showModal({content:t.getLangs("tipsp1"),showCancel:!0,cancelText:t.getLangs("cancel"),confirmText:t.getLangs("confirm"),success:function(t){t.confirm&&i.navigateTo("/pages/add_wallet/index")}})):t.walletList=a;case 5:case"end":return e.stop()}}),e)})))()}},(0,r.default)(s,"changeDrop",(function(t){this.qbdizhi=t.address,this.show=!1})),(0,r.default)(s,"checkInput",(function(t){var e=this;setTimeout((function(){var n=/^(\d+|\d+\.\d{0,4})$/,a=t.detail.value;if(n.test(a))e.dollar=a;else if(a.indexOf(".")>-1){var i=a.split("."),r=i[0],s=i[1];s.length>4?e.dollar=r+"."+s.substring(0,4):e.dollar=r+"."+s}else e.dollar=""}),50)})),s),computed:(0,i.default)({getFees:function(){return this.config.fee>=1?this.config.fee:""===this.dollar?0:(this.dollar*this.config.fee).toFixed(2)},getAccountNums:function(){if(""===this.dollar)return 0;var t=this.dollar-Number(this.getFees);return t>0?t.toFixed(2):0},getUSDT:function(){return"USDT"},getWalletList:function(){var t=this;if(0==this.walletList.length)return this.qbdizhi="",[];var e=this.walletList.filter((function(e){return e.type==t.curActive}));return 0==e.length?[]:(this.qbdizhi=e[0].address,e)}},(0,o.mapGetters)({getCertInfo:"getCertInfo"})),created:function(){this.fromData.active="coin"},watch:{getCertInfo:function(t){},status:{handler:function(t){this.init(),this.getPayAddListHandler()},deep:!0,immediate:!0}}};e.default=g},bfc9:function(t,e,n){"use strict";n.r(e);var a=n("14a4"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},c354:function(t,e,n){"use strict";var a=n("4ea4");n("4de4"),n("c740"),n("a434"),n("b64b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530")),r=n("2f62"),s={data:function(){return{fromData:{list:["futures","contract","coin"],active:"futures"},currency:{active:0,show:!1}}},methods:{openDrop:function(){this.currency.show=!this.currency.show},changeDrop:function(t){this.currency.active=t,this.currency.show=!1},stopClick:function(t){t.stopPropagation()},eventClick:function(){this.currency.show=!1}},computed:(0,i.default)({getCurrentAccount:function(){return this.getAccountList[this.currency.active]},getAccountList:function(){var t=this;if(0===this.getAccountBanlance.length)return[];var e=this.fromData.list.findIndex((function(e){return e===t.fromData.active}));if(e<0)return[];var n=Object.keys(this.getAccountBanlance[e]);return n.splice(n.length-1,1),n},getBalance:function(){var t=this;if(0===this.getAccountBanlance.length&&"undefined"===typeof this.getCurrentAccount)return 0;var e=this.fromData.list.findIndex((function(e){return e===t.fromData.active})),n=this.getAccountBanlance.filter((function(t){return t.type==e}))[0];this.getCurrentAccount;return n[this.getCurrentAccount].usable}},(0,r.mapGetters)({getAccountBanlance:"getAccountBanlance"}))},c=s;e.default=c},cbd9:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("WithdrawApply",{attrs:{status:t.status}})},r=[]},eac9:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530")),r=n("2f62"),s=a(n("34ec")),c=a(n("abdf")),o=a(n("967f")),u=a(n("f737")),l={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,e){var n="undefined"===typeof e||"{}"===JSON.stringify(e)?"":"?".concat(o.default.convertObj(e));uni.navigateTo({url:t+n})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=c.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?s.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var e=getCurrentPages(),n=e[e.length-1];switch(t){case"opt":return n.options;case"route":return n.route;default:return n}},backToPage:function(t){c.default.getOS();this.navigateTo(t)},backTips:function(t){if(u.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,i.default)({createOSClass:function(){return"h5"}},(0,r.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=c.default.getOS()}},f=l;e.default=f}}]);