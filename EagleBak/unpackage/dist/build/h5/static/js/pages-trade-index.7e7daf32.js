(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-trade-index"],{"08d4":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".trade_class[data-v-46b70848]{padding:%?20?%}",""]),t.exports=e},1593:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530")),u=a("2f62"),r=n(a("dd72")),o=n(a("17f5")),c=n(a("5471")),s=n(a("2901")),d={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,e){var a="undefined"===typeof e||"{}"===JSON.stringify(e)?"":"?".concat(c.default.convertObj(e));uni.navigateTo({url:t+a})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=o.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?r.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var e=getCurrentPages(),a=e[e.length-1];switch(t){case"opt":return a.options;case"route":return a.route;default:return a}},backToPage:function(t){o.default.getOS();this.navigateTo(t)},backTips:function(t){if(s.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,i.default)({createOSClass:function(){return"h5"}},(0,u.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=o.default.getOS()}},f=d;e.default=f},"17f5":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},i=n;e.default=i},"22bc":function(t,e,a){"use strict";a.r(e);var n=a("99f2"),i=a.n(n);for(var u in n)"default"!==u&&function(t){a.d(e,t,(function(){return n[t]}))}(u);e["default"]=i.a},"2ef0":function(t,e,a){var n=a("08d4");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("2f6eea12",n,!0,{sourceMap:!1,shadowMode:!1})},"338d":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return u})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"trade_class"},[a("LiveData"),a("TradeMenu"),a("PriceList"),a("TradeMain"),a("v-uni-view",{staticClass:"table_class"})],1)},u=[]},"33d3":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n(a("5b65"));var i=n(a("1593")),u=n(a("bceb")),r=n(a("5580")),o=n(a("dee4")),c=n(a("42f3")),s=n(a("2369")),d=n(a("c50d")),f={name:"Trade",mixins:[i.default,u.default,r.default],data:function(){return{id:""}},components:{LiveData:o.default,TradeMenu:c.default,PriceList:s.default,TradeMain:d.default},onLoad:function(t){var e=t.currency,a=t.action,n=t.id;if(this.id=n,"undefined"===typeof e||""===e||"undefined"===typeof a||""===a||"undefined"===typeof n||""===n){this.$tips.showToast(this.getLangs("currencyError"));var i=this;setTimeout((function(){i.back()}),1e3)}this.setTitle(e.toUpperCase())},onShow:function(){},onHide:function(){}};e.default=f},"3de0":function(t,e,a){"use strict";var n=a("c3d2"),i=a.n(n);i.a},"42f3":function(t,e,a){"use strict";a.r(e);var n=a("5bea"),i=a("a303");for(var u in i)"default"!==u&&function(t){a.d(e,t,(function(){return i[t]}))}(u);a("3de0");var r,o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"629a5d18",null,!1,n["a"],r);e["default"]=c.exports},5742:function(t,e,a){"use strict";a.r(e);var n=a("338d"),i=a("fcbb");for(var u in i)"default"!==u&&function(t){a.d(e,t,(function(){return i[t]}))}(u);a("e7ed"),a("d97b");var r,o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"46b70848",null,!1,n["a"],r);e["default"]=c.exports},"587e":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-46b70848]{background:#1c1d31}body.?%PAGE?%[data-v-46b70848]{background:#1c1d31}",""]),t.exports=e},"5bea":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return u})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"trade_menu"},t._l(t.menuList,(function(e,n){return a("v-uni-view",{key:n,class:["trade_menu_label",t.menuActive===n?"on on"+t.menuActive:""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeMenu(n)}}},[t._v(t._s(t.getLangs(e)))])})),1)},u=[]},"7ba4":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return u})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"live_data_class"},[a("v-uni-view",{staticClass:"live_data_label"},[a("v-uni-text",{staticClass:"box name"},[t._v(t._s(t.getLangs("leftmoney")))]),a("v-uni-text",{staticClass:"box leftmoney"},[t._v(t._s(t.getLeftmoney))])],1),a("v-uni-view",{staticClass:"live_data_label"},[a("v-uni-view",{staticClass:"inner"},[a("v-uni-text",{class:["box new_price",t.getClass(t.getWSData.gain)]},[t._v(t._s(t.getWSData.close))]),a("v-uni-text",{class:["box ratio",t.getClass(t.getWSData.gain)]},[t._v(t._s((t.getWSData.gain>0?"+":"-")+t.getWSData.gain)+"%")])],1)],1)],1)},u=[]},"99f2":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("bceb")),u=n(a("26f0")),r=n(a("5580")),o={name:"LiveData",mixins:[i.default,u.default,r.default]};e.default=o},a303:function(t,e,a){"use strict";a.r(e);var n=a("a602"),i=a.n(n);for(var u in n)"default"!==u&&function(t){a.d(e,t,(function(){return n[t]}))}(u);e["default"]=i.a},a419:function(t,e,a){var n=a("587e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("54297ad8",n,!0,{sourceMap:!1,shadowMode:!1})},a602:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530")),u=a("2f62"),r=n(a("bceb")),o=n(a("1593")),c={name:"TradeMenu",mixins:[r.default,o.default],data:function(){return{menuList:["buy","sell"],menuActive:0}},methods:(0,i.default)({changeMenu:function(t){this.menuActive=t,this.setTradeAction(t)}},(0,u.mapMutations)({setTradeAction:"SET_TRADE_ACTION"})),created:function(){this.menuActive=this.getCurrentPageData("opt").action&&"buy"!==this.getCurrentPageData("opt").action?1:0,this.setTradeAction(this.menuActive)}};e.default=c},a7ea:function(t,e,a){"use strict";var n=a("e02e"),i=a.n(n);i.a},aa68:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".trade_menu[data-v-629a5d18]{text-align:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 20%}.trade_menu_label[data-v-629a5d18]{width:30%;-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?30?%;color:#aaa;margin-top:%?20?%;line-height:%?60?%}.trade_menu_label.on.on1[data-v-629a5d18]{border-bottom:1px solid #f73846;color:#f73846!important}.trade_menu_label.on.on0[data-v-629a5d18]{border-bottom:1px solid #27c173;color:#27c173!important}",""]),t.exports=e},c3d2:function(t,e,a){var n=a("aa68");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("6232f37a",n,!0,{sourceMap:!1,shadowMode:!1})},d97b:function(t,e,a){"use strict";var n=a("2ef0"),i=a.n(n);i.a},dee4:function(t,e,a){"use strict";a.r(e);var n=a("7ba4"),i=a("22bc");for(var u in i)"default"!==u&&function(t){a.d(e,t,(function(){return i[t]}))}(u);a("a7ea");var r,o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"540e84ba",null,!1,n["a"],r);e["default"]=c.exports},defc:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".live_data_class[data-v-540e84ba]{display:-webkit-box;display:-webkit-flex;display:flex;border-bottom:1px solid hsla(0,0%,100%,.05);padding-bottom:%?20?%}.live_data_label[data-v-540e84ba]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.live_data_label .box[data-v-540e84ba]{display:block;color:#fff;font-size:%?28?%}.live_data_label .inner .box[data-v-540e84ba]{text-align:right}.live_data_label .name[data-v-540e84ba]{color:hsla(0,0%,100%,.5)}.live_data_label .leftmoney[data-v-540e84ba]{color:#fff;font-size:%?40?%}.live_data_label .new_price[data-v-540e84ba]{font-size:%?44?%}",""]),t.exports=e},e02e:function(t,e,a){var n=a("defc");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("4b2aacc7",n,!0,{sourceMap:!1,shadowMode:!1})},e7ed:function(t,e,a){"use strict";var n=a("a419"),i=a.n(n);i.a},fcbb:function(t,e,a){"use strict";a.r(e);var n=a("33d3"),i=a.n(n);for(var u in n)"default"!==u&&function(t){a.d(e,t,(function(){return n[t]}))}(u);e["default"]=i.a}}]);