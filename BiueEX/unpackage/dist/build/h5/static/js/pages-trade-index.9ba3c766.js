(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-trade-index"],{"0094":function(t,e,a){"use strict";a.r(e);var n=a("2ba3"),i=a("664c");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("a81e");var s,o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"b56d223a",null,!1,n["a"],s);e["default"]=c.exports},"090f":function(t,e,a){"use strict";var n=a("d12b"),i=a.n(n);i.a},"0977d":function(t,e,a){"use strict";var n=a("56c8"),i=a.n(n);i.a},"20c1":function(t,e,a){var n=a("f53f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("580e8903",n,!0,{sourceMap:!1,shadowMode:!1})},"257d":function(t,e,a){"use strict";var n=a("eae7"),i=a.n(n);i.a},"267c":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"trade_class"},[a("LiveData"),a("TradeMenu"),a("PriceList"),a("TradeMain"),a("v-uni-view",{staticClass:"table_class"})],1)},r=[]},"290a":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".price_list_class[data-v-65b88122]{padding-right:%?10?%}.table_bd .labels[data-v-65b88122]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex}.table_bd_label[data-v-65b88122]:nth-child(2){text-align:right;padding-right:%?10?%}.table_bd_label[data-v-65b88122]:nth-child(3){text-align:left;padding-left:%?10?%}.table_bd_label[data-v-65b88122]{width:25%;-webkit-box-flex:1;-webkit-flex:1;flex:1;line-height:%?60?%;text-align:left}.table_hd[data-v-65b88122]{border-bottom:2px solid hsla(0,0%,100%,.03);margin-bottom:%?10?%}.table_bd.f[data-v-65b88122]{border-bottom:1px solid #eee}.table_bd.s[data-v-65b88122]{border-top:1px solid #eee}.datas[data-v-65b88122]{margin-top:%?30?%;padding-left:%?20?%;margin-bottom:%?20?%}",""]),t.exports=e},"29fd":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".live_data_class[data-v-2a528bf0]{display:-webkit-box;display:-webkit-flex;display:flex;border-bottom:1px solid hsla(0,0%,100%,.05);padding-bottom:%?20?%}.live_data_label[data-v-2a528bf0]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.live_data_label .box[data-v-2a528bf0]{display:block;color:#fff;font-size:%?28?%}.live_data_label .inner .box[data-v-2a528bf0]{text-align:right}.live_data_label .name[data-v-2a528bf0]{color:hsla(0,0%,100%,.5)}.live_data_label .leftmoney[data-v-2a528bf0]{color:#fff;font-size:%?40?%}.live_data_label .new_price[data-v-2a528bf0]{font-size:%?44?%}",""]),t.exports=e},"2ba3":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"trade_main_class",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.eventClick.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"trade_action"},t._l(t.actionList,(function(e,n){return a("v-uni-view",{key:n,class:["action_label",t.action===n?e.cls+" on":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeAction(n)}}},[t._v(t._s(t.getLangs(e.name)))])})),1),a("v-uni-view",{staticClass:"trade_form"},[a("v-uni-view",{staticClass:"trade_form_label no"},[a("v-uni-view",{staticClass:"trade_inners"},[a("v-uni-view",{staticClass:"select",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopClick.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"select_label",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openDrop.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"select_name"},[t._v(t._s(t.getLangs(t.menuList[t.active])))]),a("v-uni-text",{staticClass:"iconfont icon-unfold"})],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.dropshow1,expression:"dropshow1"}],staticClass:"select_drop"},[a("v-uni-view",{staticClass:"selelct_drop_main",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopClick.apply(void 0,arguments)}}},t._l(t.menuList,(function(e,n){return a("v-uni-view",{key:n,staticClass:"select_drop_label",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.selectDrop1(e)}}},[t._v(t._s(t.getLangs(e)))])})),1)],1)],1)],1),a("v-uni-view",{staticClass:"trade_inners"},[a("v-uni-view",{staticClass:"select",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopClick.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"select_label",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openDrop1.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"select_name"},[t._v(t._s(t.form.unit))]),a("v-uni-text",{staticClass:"iconfont icon-unfold"})],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.dropshow,expression:"dropshow"}],staticClass:"select_drop"},[a("v-uni-view",{staticClass:"selelct_drop_main",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopClick.apply(void 0,arguments)}}},t._l(t.dropList,(function(e,n){return a("v-uni-view",{key:n,staticClass:"select_drop_label",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.selectDrop(e.value)}}},[t._v(t._s(e.name))])})),1)],1)],1)],1)],1),a("v-uni-view",{staticClass:"trade_form_label"},[a("v-uni-view",{staticClass:"trade_inner"},[a("v-uni-text",{staticClass:"sub"},[t._v("| "+t._s(t.getLangs("entrust")))]),0===t.active?a("v-uni-input",{staticClass:"input_bar",attrs:{type:"text",disabled:!0,placeholder:t.getLangs("entrustEmptyTips")},model:{value:t.getCurrentCurrencyData&&t.getCurrentCurrencyData.close,callback:function(e){t.$set(t.getCurrentCurrencyData&&t.getCurrentCurrencyData,"close",e)},expression:"getCurrentCurrencyData && getCurrentCurrencyData.close"}}):t._e(),1===t.active?a("v-uni-input",{staticClass:"input_bar",attrs:{type:"number",placeholder:t.getLangs("entrustEmptyTips")},model:{value:t.form.appointprice,callback:function(e){t.$set(t.form,"appointprice",e)},expression:"form.appointprice"}}):t._e()],1)],1),a("v-uni-view",{staticClass:"trade_form_label"},[a("v-uni-view",{staticClass:"trade_inner"},[a("v-uni-text",{staticClass:"sub"},[t._v("| "+t._s(t.getLangs("lot")))]),a("v-uni-input",{staticClass:"input_bar",attrs:{type:"text",placeholder:t.getLangs("lot")},model:{value:t.form.num,callback:function(e){t.$set(t.form,"num",e)},expression:"form.num"}})],1)],1),a("v-uni-view",{staticClass:"trade_form_label"},[a("v-uni-view",{staticClass:"trade_inner"},[a("v-uni-text",{staticClass:"sub"},[t._v("| "+t._s(t.getLangs("profit")))]),a("v-uni-input",{staticClass:"input_bar",attrs:{type:"text"},model:{value:t.form.endprofit,callback:function(e){t.$set(t.form,"endprofit",e)},expression:"form.endprofit"}})],1)],1),a("v-uni-view",{staticClass:"trade_form_label"},[a("v-uni-view",{staticClass:"trade_inner"},[a("v-uni-text",{staticClass:"sub"},[t._v("| "+t._s(t.getLangs("loss")))]),a("v-uni-input",{staticClass:"input_bar",attrs:{type:"text"},model:{value:t.form.endloss,callback:function(e){t.$set(t.form,"endloss",e)},expression:"form.endloss"}})],1)],1)],1),a("v-uni-view",{staticClass:"trade_fee"},[a("v-uni-text",{staticClass:"trade_fee_label"},[t._v(t._s(t.getLangs("fee"))+": "+t._s(t.getCurrentCurrencyData&&t.getCurrentCurrencyData.attach&&t.getCurrentCurrencyData.attach.fee))]),a("v-uni-text",{staticClass:"trade_fee_label price"},[t._v(t._s(t.getLangs("deposit"))+": "+t._s(t.getDepoit))])],1),a("v-uni-view",{staticClass:"btns"},[a("v-uni-view",{class:["trade_btn",t.getClass],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.trade.apply(void 0,arguments)}}},[t._v(t._s(0==t.action?t.getLangs("tradep3"):t.getLangs("tradep4")))])],1)],1)},r=[]},"2fa0":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"k_line_data"},[a("v-uni-view",{staticClass:"k_line_card"},[a("v-uni-view",{staticClass:"currency",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sliderCurrency.apply(void 0,arguments)}}},[t._v(t._s(t.opt.currency)+" / USDT"),a("v-uni-text",{staticClass:"iconfont icon-other"})],1),0===t.getCurrentTradeType?a("v-uni-view",{staticClass:"position"},[a("v-uni-text",{staticClass:"iconfont icon-document"}),a("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateTo("/pages/futures_record/index")}}},[t._v(t._s(t.getLangs("positionOrder")))])],1):t._e(),a("v-uni-view",{staticClass:"k_data"},[a("v-uni-view",{staticClass:"labels"},[a("v-uni-text",{staticClass:"current"},[t._v(t._s(t.getLangs("current")))]),a("v-uni-view",{class:["live_label close",t.getClass(t.getCurrenctData&&t.getCurrenctData.gain)]},[t._v(t._s(t.getCurrenctData&&t.getCurrenctData.close))]),a("v-uni-view",{class:["live_label",t.getClass(t.getCurrenctData&&t.getCurrenctData.gain)]},[t._v(t._s(t.getCurrenctData&&t.getCurrenctData.gain)+"%")])],1),a("v-uni-view",{staticClass:"labels"},[a("v-uni-view",{staticClass:"inner"},[a("v-uni-view",{staticClass:"inner_label"},[a("v-uni-text",{staticClass:"name"},[t._v(t._s(t.getLangs("openPrice")))]),a("v-uni-text",{staticClass:"value"},[t._v(t._s(t.getCurrenctData&&t.getCurrenctData.open))])],1),a("v-uni-view",{staticClass:"inner_label"},[a("v-uni-text",{staticClass:"name"},[t._v(t._s(t.getLangs("turnover24h")))]),a("v-uni-text",{staticClass:"value"},[t._v(t._s(t.getCurrenctData&&(Number(t.getCurrenctData.vol)/1e4).toFixed(4))+"W")])],1),a("v-uni-view",{staticClass:"inner_label"},[a("v-uni-text",{staticClass:"name"},[t._v(t._s(t.getLangs("lowestPrice")))]),a("v-uni-text",{staticClass:"value"},[t._v(t._s(t.getCurrenctData&&t.getCurrenctData.low))])],1),a("v-uni-view",{staticClass:"inner_label"},[a("v-uni-text",{staticClass:"name"},[t._v(t._s(t.getLangs("highestPrice")))]),a("v-uni-text",{staticClass:"value"},[t._v(t._s(t.getCurrenctData&&t.getCurrenctData.high))])],1)],1)],1)],1)],1)],1)},r=[]},5251:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530")),r=a("2f62"),s=n(a("c5e2")),o=n(a("a937")),c=n(a("dd30")),l=n(a("a53e")),u={name:"CurrencyData",mixins:[s.default,c.default,o.default,l.default],data:function(){return{opt:{}}},methods:{sliderCurrency:function(){this.$emit("callBack",!0)}},computed:(0,i.default)({getIcon:function(){return function(t){return t>0?"../../static/images/up_icon.png":"../../static/images/down_icon.png"}}},(0,r.mapGetters)({getCurrentTradeType:"getCurrentTradeType"})),created:function(){this.opt=this.getCurrentPageData("opt")}};e.default=u},5288:function(t,e,a){"use strict";a.r(e);var n=a("2fa0"),i=a("5320");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("090f");var s,o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"431c79e5",null,!1,n["a"],s);e["default"]=c.exports},5320:function(t,e,a){"use strict";a.r(e);var n=a("5251"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"54f7":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-50ad3ae3]{background:#1c1d31}body.?%PAGE?%[data-v-50ad3ae3]{background:#1c1d31}",""]),t.exports=e},"56c8":function(t,e,a){var n=a("759b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("43eb68a0",n,!0,{sourceMap:!1,shadowMode:!1})},5807:function(t,e,a){var n=a("290a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("037f0cc2",n,!0,{sourceMap:!1,shadowMode:!1})},6120:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("c5e2")),r=n(a("a937")),s=n(a("dd30")),o=n(a("a53e")),c={name:"PriceList",mixins:[i.default,r.default,s.default,o.default],computed:{getPriceList:function(){var t=this.getCurrenctData&&this.getCurrenctData.latestPrice&&this.getCurrenctData.latestPrice.buy,e=this.getCurrenctData&&this.getCurrenctData.latestPrice&&this.getCurrenctData.latestPrice.sell;if("undefined"===typeof t||"undefined"===typeof e)return[];var a=[t,e];return a}}};e.default=c},"664c":function(t,e,a){"use strict";a.r(e);var n=a("bacf"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},6988:function(t,e,a){"use strict";a.r(e);var n=a("bee5"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"6a96":function(t,e,a){var n=a("77e4");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("2f15c8de",n,!0,{sourceMap:!1,shadowMode:!1})},"6eda":function(t,e,a){"use strict";a.r(e);var n=a("b4c6"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"725f":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},i=n;e.default=i},7305:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".k_line_data[data-v-431c79e5]{padding:0 %?10?%;background:#1c1d31}.k_line_data .k_line_card[data-v-431c79e5]{background:#1c1d31;padding:%?40?% %?10?% %?20?% %?0?%;box-shadow:0 0 10px 0 rgba(0,0,0,.1);border-radius:%?40?% %?40?% 0 0;position:relative}.k_line_data .position[data-v-431c79e5]{position:absolute;right:%?20?%;top:%?20?%;line-height:%?80?%;color:#62759a;font-size:%?28?%}.k_line_data .k_line_card .currency[data-v-431c79e5]{font-size:%?32?%;color:#bfc5d1;font-weight:700}.k_data[data-v-431c79e5]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?20?% 0}.k_data .labels[data-v-431c79e5]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.k_data .labels .current[data-v-431c79e5]{color:#8d9dbc;font-size:%?26?%;margin-bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?30?%;padding-left:%?40?%}.k_data .labels .live_label[data-v-431c79e5]{font-size:%?32?%;line-height:%?80?%;padding-left:%?40?%}.k_data .labels .live_label.close[data-v-431c79e5]{font-size:%?50?%}.k_data .labels .inner[data-v-431c79e5]{padding:0 %?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.k_data .labels .inner .inner_label[data-v-431c79e5]{width:50%;font-size:%?26?%;color:#8d9dbc;box-sizing:border-box}.k_data .labels .inner .inner_label[data-v-431c79e5]:nth-child(even){padding-left:10px}.k_data .labels .inner .inner_label .name[data-v-431c79e5],\n.k_data .labels .inner .inner_label .value[data-v-431c79e5]{font-size:%?26?%;color:#8d9dbc;display:block;line-height:%?60?%}.k_data .labels .inner .inner_label .value[data-v-431c79e5]{color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.currency .iconfont[data-v-431c79e5]{font-size:%?40?%;padding-left:%?20?%;top:%?10?%}",""]),t.exports=e},7520:function(t,e,a){"use strict";a.r(e);var n=a("d47b"),i=a("6eda");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("ee20");var s,o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"2a528bf0",null,!1,n["a"],s);e["default"]=c.exports},"759b":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".trade_class[data-v-50ad3ae3]{padding:%?20?%}",""]),t.exports=e},"77e4":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".trade_menu[data-v-c3dc6edc]{text-align:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 20%}.trade_menu_label[data-v-c3dc6edc]{width:30%;-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?30?%;color:#aaa;margin-top:%?20?%;line-height:%?60?%}.trade_menu_label.on.on1[data-v-c3dc6edc]{border-bottom:1px solid #f73846;color:#f73846!important}.trade_menu_label.on.on0[data-v-c3dc6edc]{border-bottom:1px solid #27c173;color:#27c173!important}",""]),t.exports=e},"7db1":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"trade_menu"},t._l(t.menuList,(function(e,n){return a("v-uni-view",{key:n,class:["trade_menu_label",t.menuActive===n?"on on"+t.menuActive:""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeMenu(n)}}},[t._v(t._s(t.getLangs(e)))])})),1)},r=[]},8542:function(t,e,a){var n=a("29fd");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("defe1dd4",n,!0,{sourceMap:!1,shadowMode:!1})},"8e14":function(t,e,a){"use strict";a.r(e);var n=a("ad83"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},a613:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"price_list_class"},[a("v-uni-view",{staticClass:"price_table"},[a("v-uni-view",{staticClass:"table_class"},[a("v-uni-view",{staticClass:"table_hd"},[a("v-uni-view",{staticClass:"table_hd_label"},[t._v(t._s(t.getLangs("price")))]),a("v-uni-view",{staticClass:"table_hd_label"},[t._v(t._s(t.getLangs("quantity")))])],1),a("v-uni-view",{staticClass:"table_bd f"},t._l(t.getPriceList[0],(function(e,n){return a("v-uni-view",{key:n,staticClass:"labels"},[a("v-uni-view",{staticClass:"table_bd_label red"},[t._v(t._s(e.price))]),a("v-uni-view",{staticClass:"table_bd_label"},[t._v(t._s(e.amount))])],1)})),1),a("v-uni-view",{staticClass:"datas"},[a("v-uni-view",{class:["live_label close",t.getClass(t.getCurrenctData&&t.getCurrenctData.gain)]},[t._v(t._s(t.getCurrenctData&&t.getCurrenctData.close))])],1),a("v-uni-view",{staticClass:"table_bd s"},t._l(t.getPriceList[1],(function(e,n){return a("v-uni-view",{key:n,staticClass:"labels"},[a("v-uni-view",{staticClass:"table_bd_label green"},[t._v(t._s(e.price))]),a("v-uni-view",{staticClass:"table_bd_label"},[t._v(t._s(e.amount))])],1)})),1)],1)],1)],1)},r=[]},a81e:function(t,e,a){"use strict";var n=a("20c1"),i=a.n(n);i.a},ad83:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530")),r=a("2f62"),s=n(a("a937")),o=n(a("c5e2")),c={name:"TradeMenu",mixins:[s.default,o.default],data:function(){return{menuList:["buy","sell"],menuActive:0}},methods:(0,i.default)({changeMenu:function(t){this.menuActive=t,this.setTradeAction(t)}},(0,r.mapMutations)({setTradeAction:"SET_TRADE_ACTION"})),created:function(){this.menuActive=this.getCurrentPageData("opt").action&&"buy"!==this.getCurrentPageData("opt").action?1:0,this.setTradeAction(this.menuActive)}};e.default=c},af78:function(t,e,a){"use strict";a.r(e);var n=a("267c"),i=a("6988");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("257d"),a("0977d");var s,o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"50ad3ae3",null,!1,n["a"],s);e["default"]=c.exports},b4c6:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("a937")),r=n(a("56b7")),s=n(a("dd30")),o={name:"LiveData",mixins:[i.default,r.default,s.default]};e.default=o},bacf:function(t,e,a){"use strict";var n=a("4ea4");a("99af"),a("c740"),a("b680"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530")),r=n(a("ade3"));a("96cf");var s,o=n(a("1da1")),c=a("2f62"),l=n(a("c5e2")),u=n(a("a937")),d=n(a("dd30")),f=n(a("a53e")),v=a("704f"),b=n(a("78d5")),p=n(a("64bc")),g=n(a("14e8")),_=n(a("a736")),h=n(a("b6fa")),C=n(a("a377")),m={name:"TradeMain",mixins:[u.default,d.default,l.default,f.default],data:function(){return{menuList:["marketOrder","limitOrder"],active:0,actionList:[{name:"tradep3",action:"buy",cls:"green_box"},{name:"tradep4",action:"sell",cls:"red_box"}],action:0,form:{appointprice:"",unit:10,num:"",endprofit:"",endloss:""},dropshow:!1,dropshow1:!1,dropList:[{name:"10X",value:10},{name:"50X",value:50},{name:"80X",value:80},{name:"100X",value:100},{name:"150X",value:150},{name:"200X",value:200}],contract:{menuList:["commission","position","history"],active:0}}},components:{EntrustOrder:p.default,Dropdown:g.default,ContractCommissionRecord:_.default,ContractHistoryRecord:h.default,ContractPositionRecord:C.default},methods:(s={trade:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var a,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==t.form.unit){e.next=2;break}return e.abrupt("return",t.$tips.showModel(t.getLangs("sysTips"),t.getLangs("leverEmptyTips"),"",t.getLangs("confirm"),(function(t){}),!1));case 2:if(0!==t.active){e.next=6;break}t.form.appointprice=t.getCurrentCurrencyData&&t.getCurrentCurrencyData.close,e.next=8;break;case 6:if(""!==t.form.appointprice){e.next=8;break}return e.abrupt("return",t.$tips.showModel(t.getLangs("sysTips"),t.getLangs("entrustEmptyTips"),"",t.getLangs("confirm"),(function(t){}),!1));case 8:if(""!==t.form.num){e.next=10;break}return e.abrupt("return",t.$tips.showModel(t.getLangs("sysTips"),t.getLangs("numEmptyTips"),"",t.getLangs("confirm"),(function(t){}),!1));case 10:return a={id:t.getCurrentCurrencyData.id,type:t.action,paytype:t.active},n=Object.assign(t.form,a),e.next=14,(0,v.transaction)(n);case 14:i=e.sent,b.default.checkCode(i),t.backTips(i);case 17:case"end":return e.stop()}}),e)})))()},changeMenu:function(t){this.active=t,this.form.appointprice=""},changeAction:function(t){this.action=t},openDrop:function(){this.dropshow1=!0,this.dropshow=!1},openDrop1:function(){this.dropshow=!0,this.dropshow1=!1},selectDrop:function(t){this.form.unit=t,this.dropshow=!1},selectDrop1:function(t){this.dropshow1=!1},changeContractType:function(t){this.contract.active=t},stopClick:function(t){t.stopPropagation()},eventClick:function(){this.dropshow=!1,this.dropshow1=!1}},(0,r.default)(s,"selectDrop1",(function(t){var e=this.menuList.findIndex((function(e){return e==t}));this.active=e,this.dropshow1=!1})),(0,r.default)(s,"selectDrop",(function(t){this.form.unit=t,this.dropshow=!1})),s),computed:(0,i.default)({getPrice:function(){return(this.form.num*this.getUnit*this.getCurrentCurrencyData.close*this.getRatio).toFixed(2)},getDepoit:function(){return 250*this.form.num},getProfit:function(){return 0===this.action?"".concat(this.getLangs("min")," ").concat(this.getCurrentCurrencyData&&this.getCurrentCurrencyData.attach&&this.getCurrentCurrencyData.attach.sprice0):"".concat(this.getLangs("max")," ").concat(this.getCurrentCurrencyData&&this.getCurrentCurrencyData.attach&&this.getCurrentCurrencyData.attach.sprice1)},getLoss:function(){return 0===this.action?"".concat(this.getLangs("max")," ").concat(this.getCurrentCurrencyData&&this.getCurrentCurrencyData.attach&&this.getCurrentCurrencyData.attach.eprice1):"".concat(this.getLangs("min")," ").concat(this.getCurrentCurrencyData&&this.getCurrentCurrencyData.attach&&this.getCurrentCurrencyData.attach.eprice0)},getFee:function(){return this.getCurrentCurrencyData.attach?this.getCurrentCurrencyData.attach.fee:0},getUnit:function(){return this.getCurrentCurrencyData.attach?this.getCurrentCurrencyData.attach.unit:0},getRatio:function(){return this.getCurrentCurrencyData.attach&&this.getCurrentCurrencyData.attach.ratio?this.getCurrentCurrencyData.attach.ratio:0},getClass:function(){return 0==this.action?"green_box":"red_box"}},(0,c.mapGetters)({getTradeAction:"getTradeAction"}))};e.default=m},bee5:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n(a("5288"));var i=n(a("c5e2")),r=n(a("a937")),s=n(a("dd30")),o=n(a("7520")),c=n(a("d601")),l=n(a("c37f")),u=n(a("0094")),d={name:"Trade",mixins:[i.default,r.default,s.default],data:function(){return{id:""}},components:{LiveData:o.default,TradeMenu:c.default,PriceList:l.default,TradeMain:u.default},onLoad:function(t){var e=t.currency,a=t.action,n=t.id;if(this.id=n,"undefined"===typeof e||""===e||"undefined"===typeof a||""===a||"undefined"===typeof n||""===n){this.$tips.showToast(this.getLangs("currencyError"));var i=this;setTimeout((function(){i.back()}),1e3)}this.setTitle(e.toUpperCase())},onShow:function(){},onHide:function(){}};e.default=d},c37f:function(t,e,a){"use strict";a.r(e);var n=a("a613"),i=a("c885");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("cfef");var s,o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"65b88122",null,!1,n["a"],s);e["default"]=c.exports},c5e2:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530")),r=a("2f62"),s=n(a("873a")),o=n(a("725f")),c=n(a("88f3")),l=n(a("78d5")),u={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,e){var a="undefined"===typeof e||"{}"===JSON.stringify(e)?"":"?".concat(c.default.convertObj(e));uni.navigateTo({url:t+a})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=o.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?s.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var e=getCurrentPages(),a=e[e.length-1];switch(t){case"opt":return a.options;case"route":return a.route;default:return a}},backToPage:function(t){o.default.getOS();this.navigateTo(t)},backTips:function(t){if(l.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,i.default)({createOSClass:function(){return"h5"}},(0,r.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=o.default.getOS()}},d=u;e.default=d},c885:function(t,e,a){"use strict";a.r(e);var n=a("6120"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},cfef:function(t,e,a){"use strict";var n=a("5807"),i=a.n(n);i.a},d12b:function(t,e,a){var n=a("7305");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("097262d0",n,!0,{sourceMap:!1,shadowMode:!1})},d47b:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"live_data_class"},[a("v-uni-view",{staticClass:"live_data_label"},[a("v-uni-text",{staticClass:"box name"},[t._v(t._s(t.getLangs("leftmoney")))]),a("v-uni-text",{staticClass:"box leftmoney"},[t._v(t._s(t.getLeftmoney))])],1),a("v-uni-view",{staticClass:"live_data_label"},[a("v-uni-view",{staticClass:"inner"},[a("v-uni-text",{class:["box new_price",t.getClass(t.getWSData.gain)]},[t._v(t._s(t.getWSData.close))]),a("v-uni-text",{class:["box ratio",t.getClass(t.getWSData.gain)]},[t._v(t._s((t.getWSData.gain>0?"+":"-")+t.getWSData.gain)+"%")])],1)],1)],1)},r=[]},d572:function(t,e,a){"use strict";var n=a("6a96"),i=a.n(n);i.a},d601:function(t,e,a){"use strict";a.r(e);var n=a("7db1"),i=a("8e14");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("d572");var s,o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"c3dc6edc",null,!1,n["a"],s);e["default"]=c.exports},eae7:function(t,e,a){var n=a("54f7");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("44c4d941",n,!0,{sourceMap:!1,shadowMode:!1})},ee20:function(t,e,a){"use strict";var n=a("8542"),i=a.n(n);i.a},f53f:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".trade_main_class[data-v-b56d223a]{overflow:auto}.trade_form[data-v-b56d223a]{width:100%;font-size:0;padding:%?10?%}.trade_form .trade_form_label[data-v-b56d223a]{width:100%;position:relative;display:inline-block;box-sizing:border-box;margin-bottom:%?20?%;vertical-align:top;display:-webkit-box;display:-webkit-flex;display:flex;border:1px solid #eee}.trade_form .trade_form_label.no[data-v-b56d223a]{border:none}.trade_form .trade_inner[data-v-b56d223a]{background:#fff;padding-right:%?80?%;position:relative}.trade_form .trade_form_label .input_bar[data-v-b56d223a]{color:#333;width:100%;font-size:%?26?%;border-radius:%?10?%;padding:%?20?%;overflow:hidden}.trade_form .trade_form_label .sub[data-v-b56d223a]{font-size:%?26?%;line-height:%?60?%;color:#999;position:absolute;right:%?10?%;top:%?8?%}.trade_fee[data-v-b56d223a]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?20?%}.trade_fee_label[data-v-b56d223a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;width:50%;font-size:%?28?%;color:#57627c}.trade_fee_label.price[data-v-b56d223a]{text-align:right}.trade_btn[data-v-b56d223a]{text-align:center;line-height:%?70?%;border-radius:%?10?%;margin-top:%?20?%;font-size:%?30?%;margin-bottom:%?20?%;color:#fff;width:100%;display:block}.trade_menu[data-v-b56d223a]{display:-webkit-box;display:-webkit-flex;display:flex;text-align:center;border-bottom:1px solid hsla(0,0%,100%,.05)}.trade_menu .menu_label[data-v-b56d223a]{width:50%;font-size:%?28?%;color:#fff;line-height:%?80?%;color:hsla(0,0%,100%,.7)}.trade_menu .menu_label.on[data-v-b56d223a]{color:#fff;border-bottom:2px solid #5d56ec}.trade_action[data-v-b56d223a]{width:95%;display:-webkit-box;display:-webkit-flex;display:flex;margin:%?20?% auto;text-align:center}.trade_action .action_label[data-v-b56d223a]{text-align:center;line-height:%?60?%;width:50%;font-size:%?28?%;margin:0 %?10?%;border-radius:%?20?%;color:#333;background:#f9f9f9}.trade_action .action_label.on[data-v-b56d223a]{color:#fff}.trade_action .action_label.on.on0[data-v-b56d223a]{background:#27c173}.trade_action .action_label.on.on1[data-v-b56d223a]{background:#c12d3b}.record_menu[data-v-b56d223a]{margin:auto;display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:%?20?%;padding:0 %?20?%}.record_menu .label[data-v-b56d223a]{width:50%;text-align:center;font-size:%?28?%;line-height:%?60?%;color:#fff}.record_menu .label.on[data-v-b56d223a]{background:#2970e6;border-radius:%?10?%;color:#fff}.record_bar[data-v-b56d223a]{margin-top:%?40?%}.trade_action .action_label[data-v-b56d223a]{border-radius:%?10?%}.btns[data-v-b56d223a]{padding:0 %?10?%}.trade_inners[data-v-b56d223a]:first-child{width:60%;padding-right:2px}.trade_inners[data-v-b56d223a]:last-child{width:40%;padding-left:2px}.trade_inners .input_bar[data-v-b56d223a]{padding:%?20?%!important;background:#fff;border-radius:0!important;color:#333}.select[data-v-b56d223a]{width:100%;border-radius:0;background:#fff;height:%?79?%;border:1px solid #eee}.select_drop[data-v-b56d223a]{z-index:10000;border-radius:0}.select .iconfont[data-v-b56d223a]{right:-10px}",""]),t.exports=e}}]);