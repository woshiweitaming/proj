(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-trade-index"],{"0191":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"trade_class"},[a("LiveData"),a("TradeMenu"),a("PriceList"),a("TradeMain"),a("v-uni-view",{staticClass:"table_class"})],1)},r=[]},"0c62":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n(a("d820"));var i=n(a("65ca")),r=n(a("5922")),s=n(a("c03a")),u=n(a("4ec0")),o=n(a("6abb")),c=n(a("06e0")),l=n(a("5271")),d={name:"Trade",mixins:[i.default,r.default,s.default],data:function(){return{id:""}},components:{LiveData:u.default,TradeMenu:o.default,PriceList:c.default,TradeMain:l.default},onLoad:function(t){var e=t.currency,a=t.action,n=t.id;if(this.id=n,"undefined"===typeof e||""===e||"undefined"===typeof a||""===a||"undefined"===typeof n||""===n){this.$tips.showToast(this.getLangs("currencyError"));var i=this;setTimeout((function(){i.back()}),1e3)}this.setTitle(e.toUpperCase())},onShow:function(){},onHide:function(){}};e.default=d},"0f56":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530")),r=a("2f62"),s=n(a("65ca")),u=n(a("5922")),o=n(a("c03a")),c=n(a("d111")),l={name:"CurrencyData",mixins:[s.default,o.default,u.default,c.default],data:function(){return{opt:{}}},methods:{sliderCurrency:function(){this.$emit("callBack",!0)}},computed:(0,i.default)({getIcon:function(){return function(t){return t>0?"../../static/images/up_icon.png":"../../static/images/down_icon.png"}}},(0,r.mapGetters)({getCurrentTradeType:"getCurrentTradeType"})),created:function(){this.opt=this.getCurrentPageData("opt")}};e.default=l},"1ebd":function(t,e,a){"use strict";a.r(e);var n=a("0191"),i=a("b0e1");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("9f0d"),a("74789");var s,u=a("f0c5"),o=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"46b70848",null,!1,n["a"],s);e["default"]=o.exports},"32e0":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".k_line_data[data-v-5539d4e6]{padding:0 %?10?%;background:#1c1d31}.k_line_data .k_line_card[data-v-5539d4e6]{background:#1c1d31;padding:%?40?% %?10?% %?20?% %?0?%;-webkit-box-shadow:0 0 10px 0 rgba(0,0,0,.1);box-shadow:0 0 10px 0 rgba(0,0,0,.1);-webkit-border-radius:%?40?% %?40?% 0 0;border-radius:%?40?% %?40?% 0 0;position:relative}.k_line_data .position[data-v-5539d4e6]{position:absolute;right:%?20?%;top:%?20?%;line-height:%?80?%;color:#62759a;font-size:%?28?%}.k_line_data .k_line_card .currency[data-v-5539d4e6]{font-size:%?32?%;color:#bfc5d1;font-weight:700}.k_data[data-v-5539d4e6]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?20?% 0}.k_data .labels[data-v-5539d4e6]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.k_data .labels .current[data-v-5539d4e6]{color:#8d9dbc;font-size:%?26?%;margin-bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?30?%;padding-left:%?40?%}.k_data .labels .live_label[data-v-5539d4e6]{font-size:%?32?%;line-height:%?80?%;padding-left:%?40?%}.k_data .labels .live_label.close[data-v-5539d4e6]{font-size:%?50?%}.k_data .labels .inner[data-v-5539d4e6]{padding:0 %?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.k_data .labels .inner .inner_label[data-v-5539d4e6]{width:50%;font-size:%?26?%;color:#8d9dbc;-webkit-box-sizing:border-box;box-sizing:border-box}.k_data .labels .inner .inner_label[data-v-5539d4e6]:nth-child(even){padding-left:10px}.k_data .labels .inner .inner_label .name[data-v-5539d4e6],\n.k_data .labels .inner .inner_label .value[data-v-5539d4e6]{font-size:%?26?%;color:#8d9dbc;display:block;line-height:%?60?%}.k_data .labels .inner .inner_label .value[data-v-5539d4e6]{color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.currency .iconfont[data-v-5539d4e6]{font-size:%?40?%;padding-left:%?20?%;top:%?10?%}",""]),t.exports=e},"356b":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".live_data_class[data-v-540e84ba]{display:-webkit-box;display:-webkit-flex;display:flex;border-bottom:1px solid hsla(0,0%,100%,.05);padding-bottom:%?20?%}.live_data_label[data-v-540e84ba]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.live_data_label .box[data-v-540e84ba]{display:block;color:#fff;font-size:%?28?%}.live_data_label .inner .box[data-v-540e84ba]{text-align:right}.live_data_label .name[data-v-540e84ba]{color:hsla(0,0%,100%,.5)}.live_data_label .leftmoney[data-v-540e84ba]{color:#fff;font-size:%?40?%}.live_data_label .new_price[data-v-540e84ba]{font-size:%?44?%}",""]),t.exports=e},"40c4":function(t,e,a){var n=a("c2c8");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("1a27cb62",n,!0,{sourceMap:!1,shadowMode:!1})},"425a":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"live_data_class"},[a("v-uni-view",{staticClass:"live_data_label"},[a("v-uni-text",{staticClass:"box name"},[t._v(t._s(t.getLangs("leftmoney")))]),a("v-uni-text",{staticClass:"box leftmoney"},[t._v(t._s(t.getLeftmoney))])],1),a("v-uni-view",{staticClass:"live_data_label"},[a("v-uni-view",{staticClass:"inner"},[a("v-uni-text",{class:["box new_price",t.getClass(t.getWSData.gain)]},[t._v(t._s(t.getWSData.close))]),a("v-uni-text",{class:["box ratio",t.getClass(t.getWSData.gain)]},[t._v(t._s((t.getWSData.gain>0?"+":"-")+t.getWSData.gain)+"%")])],1)],1)],1)},r=[]},"48aa":function(t,e,a){"use strict";a.r(e);var n=a("0f56"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"4ec0":function(t,e,a){"use strict";a.r(e);var n=a("425a"),i=a("5d58");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("c2a8");var s,u=a("f0c5"),o=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"540e84ba",null,!1,n["a"],s);e["default"]=o.exports},5608:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"trade_menu"},t._l(t.menuList,(function(e,n){return a("v-uni-view",{key:n,class:["trade_menu_label",t.menuActive===n?"on on"+t.menuActive:""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeMenu(n)}}},[t._v(t._s(t.getLangs(e)))])})),1)},r=[]},"560e":function(t,e,a){"use strict";var n=a("89da"),i=a.n(n);i.a},"5a6c":function(t,e,a){"use strict";var n=a("40c4"),i=a.n(n);i.a},"5d2b":function(t,e,a){"use strict";a.r(e);var n=a("ad84"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"5d58":function(t,e,a){"use strict";a.r(e);var n=a("b4f9"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"5e53":function(t,e,a){var n=a("d30f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("95373e30",n,!0,{sourceMap:!1,shadowMode:!1})},"65ca":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530")),r=a("2f62"),s=n(a("f61b")),u=n(a("d639")),o=n(a("8dc7")),c=n(a("a615")),l={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,e){var a="undefined"===typeof e||"{}"===JSON.stringify(e)?"":"?".concat(o.default.convertObj(e));uni.navigateTo({url:t+a})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=u.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?s.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var e=getCurrentPages(),a=e[e.length-1];switch(t){case"opt":return a.options;case"route":return a.route;default:return a}},backToPage:function(t){u.default.getOS();this.navigateTo(t)},backTips:function(t){if(c.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,i.default)({createOSClass:function(){return"h5"}},(0,r.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=u.default.getOS()}},d=l;e.default=d},"6abb":function(t,e,a){"use strict";a.r(e);var n=a("5608"),i=a("5d2b");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("5a6c");var s,u=a("f0c5"),o=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"629a5d18",null,!1,n["a"],s);e["default"]=o.exports},74789:function(t,e,a){"use strict";var n=a("5e53"),i=a.n(n);i.a},"82ca":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"k_line_data"},[a("v-uni-view",{staticClass:"k_line_card"},[a("v-uni-view",{staticClass:"currency",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sliderCurrency.apply(void 0,arguments)}}},[t._v(t._s(t.opt.currency)+" / USDT"),a("v-uni-text",{staticClass:"iconfont icon-other"})],1),0===t.getCurrentTradeType?a("v-uni-view",{staticClass:"position"},[a("v-uni-text",{staticClass:"iconfont icon-document"}),a("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switchTab("/pages/order/index")}}},[t._v(t._s(t.getLangs("positionOrder")))])],1):t._e(),a("v-uni-view",{staticClass:"k_data"},[a("v-uni-view",{staticClass:"labels"},[a("v-uni-text",{staticClass:"current"},[t._v(t._s(t.getLangs("current")))]),a("v-uni-view",{class:["live_label close",t.getClass(t.getCurrenctData&&t.getCurrenctData.gain)]},[t._v(t._s(t.getCurrenctData&&t.getCurrenctData.close))]),a("v-uni-view",{class:["live_label",t.getClass(t.getCurrenctData&&t.getCurrenctData.gain)]},[t._v(t._s(t.getCurrenctData&&t.getCurrenctData.gain)+"%")])],1),a("v-uni-view",{staticClass:"labels"},[a("v-uni-view",{staticClass:"inner"},[a("v-uni-view",{staticClass:"inner_label"},[a("v-uni-text",{staticClass:"name"},[t._v(t._s(t.getLangs("openPrice")))]),a("v-uni-text",{staticClass:"value"},[t._v(t._s(t.getCurrenctData&&t.getCurrenctData.open))])],1),a("v-uni-view",{staticClass:"inner_label"},[a("v-uni-text",{staticClass:"name"},[t._v(t._s(t.getLangs("turnover24h")))]),a("v-uni-text",{staticClass:"value"},[t._v(t._s(t.getCurrenctData&&(Number(t.getCurrenctData.vol)/1e4).toFixed(4))+"W")])],1),a("v-uni-view",{staticClass:"inner_label"},[a("v-uni-text",{staticClass:"name"},[t._v(t._s(t.getLangs("lowestPrice")))]),a("v-uni-text",{staticClass:"value"},[t._v(t._s(t.getCurrenctData&&t.getCurrenctData.low))])],1),a("v-uni-view",{staticClass:"inner_label"},[a("v-uni-text",{staticClass:"name"},[t._v(t._s(t.getLangs("highestPrice")))]),a("v-uni-text",{staticClass:"value"},[t._v(t._s(t.getCurrenctData&&t.getCurrenctData.high))])],1)],1)],1)],1)],1)],1)},r=[]},"89da":function(t,e,a){var n=a("32e0");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("d7014586",n,!0,{sourceMap:!1,shadowMode:!1})},"8beb":function(t,e,a){var n=a("9e23");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("a66e46ee",n,!0,{sourceMap:!1,shadowMode:!1})},"9e23":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-46b70848]{background:#1c1d31}body.?%PAGE?%[data-v-46b70848]{background:#1c1d31}",""]),t.exports=e},"9f0d":function(t,e,a){"use strict";var n=a("8beb"),i=a.n(n);i.a},ad84:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530")),r=a("2f62"),s=n(a("5922")),u=n(a("65ca")),o={name:"TradeMenu",mixins:[s.default,u.default],data:function(){return{menuList:["buy","sell"],menuActive:0}},methods:(0,i.default)({changeMenu:function(t){this.menuActive=t,this.setTradeAction(t)}},(0,r.mapMutations)({setTradeAction:"SET_TRADE_ACTION"})),created:function(){this.menuActive=this.getCurrentPageData("opt").action&&"buy"!==this.getCurrentPageData("opt").action?1:0,this.setTradeAction(this.menuActive)}};e.default=o},b0e1:function(t,e,a){"use strict";a.r(e);var n=a("0c62"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},b4f9:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5922")),r=n(a("9a86")),s=n(a("c03a")),u={name:"LiveData",mixins:[i.default,r.default,s.default]};e.default=u},c2a8:function(t,e,a){"use strict";var n=a("d7d0"),i=a.n(n);i.a},c2c8:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".trade_menu[data-v-629a5d18]{text-align:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 20%}.trade_menu_label[data-v-629a5d18]{width:30%;-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?30?%;color:#aaa;margin-top:%?20?%;line-height:%?60?%}.trade_menu_label.on.on1[data-v-629a5d18]{border-bottom:1px solid #f73846;color:#f73846!important}.trade_menu_label.on.on0[data-v-629a5d18]{border-bottom:1px solid #27c173;color:#27c173!important}",""]),t.exports=e},d30f:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".trade_class[data-v-46b70848]{padding:%?20?%}",""]),t.exports=e},d639:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},i=n;e.default=i},d7d0:function(t,e,a){var n=a("356b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("27699078",n,!0,{sourceMap:!1,shadowMode:!1})},d820:function(t,e,a){"use strict";a.r(e);var n=a("82ca"),i=a("48aa");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("560e");var s,u=a("f0c5"),o=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"5539d4e6",null,!1,n["a"],s);e["default"]=o.exports}}]);