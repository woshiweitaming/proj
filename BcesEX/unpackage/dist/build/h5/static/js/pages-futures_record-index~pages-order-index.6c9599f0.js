(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-futures_record-index~pages-order-index"],{"0132":function(t,e,a){var i=a("72d1");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("4f06").default;s("289a48d2",i,!0,{sourceMap:!1,shadowMode:!1})},"0ece":function(t,e,a){"use strict";var i=a("4ea4");a("4de4"),a("a9e3"),a("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;a("2f62");var s=i(a("1cef")),n=i(a("246e")),r=i(a("d0a5")),u=i(a("64f4")),c=i(a("36f9")),o=(i(a("dd6b")),{name:"FuturesPositionRecord",mixins:[s.default,n.default,r.default,u.default,c.default],props:["keys"],data:function(){return{countDownList:{},timer:null,timer2:null}},methods:{getCutttime:function(t){return Number(t)>999?Number(t)/3600+this.getLangs("hour"):t+this.getLangs("second")},setTimer:function(){var t=this;this.timer=setInterval((function(){for(var e in t.dataList)t.dataList[e].stime--,0===t.dataList[e].stime&&t.init()}),1e3)},setTimer2:function(){var t=this;this.timer2=setInterval((function(){t.getFuturesPositionHandler(0)}),5e3)},clearTimer:function(){clearInterval(this.timer),clearInterval(this.timer2),this.timer=null,this.timer2=null},init:function(){var t=this;this.clearTimer(),this.getFuturesPositionHandler(0),this.setTimer(),this.setTimer2(),this.$once("hook:destroyed",(function(){t.clearTimer()}))},toCountDownText:function(t){if(t<999)return t;var e=parseInt(t),a=0,i=0;e>60&&(a=parseInt(e/60),e=parseInt(e%60),a>60&&(i=parseInt(a/60),a=parseInt(a%60)));var s=(parseInt(e)>9?parseInt(e):"0"+parseInt(e))+"秒";return a>0&&(s=parseInt(a)+"分"+s),i>0&&(s=parseInt(i)+"小时"+s),s}},computed:{getClose:function(){var t=this;return function(e){if(!t.getWSData.length)return 0;var a=t.getWSData.filter((function(t){return t.name==e}))[0];return a.close}}},destroyed:function(){this.clearTimer()},created:function(){this.init(),console.log("..")}});e.default=o},"1cef":function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(a("5530")),n=a("2f62"),r=i(a("9a08")),u=i(a("ff3c")),c=i(a("dd6b")),o=i(a("6f2b")),l={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,e){var a="undefined"===typeof e||"{}"===JSON.stringify(e)?"":"?".concat(c.default.convertObj(e));uni.navigateTo({url:t+a})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=u.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?r.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var e=getCurrentPages(),a=e[e.length-1];switch(t){case"opt":return a.options;case"route":return a.route;default:return a}},backToPage:function(t){u.default.getOS();this.navigateTo(t)},backTips:function(t){if(o.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,s.default)({createOSClass:function(){return"h5"}},(0,n.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=u.default.getOS()}},v=l;e.default=v},2869:function(t,e,a){"use strict";var i=a("0132"),s=a.n(i);s.a},"36f9":function(t,e,a){"use strict";var i=a("4ea4");a("4de4"),a("d81d"),a("fb6a"),a("4e82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var s=i(a("1da1")),n=i(a("5530")),r=a("2f62"),u=a("dad1"),c={methods:(0,n.default)({getProductDataHandler:function(){var t=this;return(0,s.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.getProduct)();case 2:a=e.sent,t.clearTimer(),t.setProductData(a.data);case 5:case"end":return e.stop()}}),e)})))()}},(0,r.mapMutations)({setProductData:"SET_PRODUCT_DATA"})),computed:(0,n.default)({getShowData:function(){if("{}"===JSON.stringify(this.getCurrencyData))return[];var t=this.getCurrencyData;return t.slice(0,3)},getTradeData:function(){return 0===this.active?this.getCurrencyData.sort((function(t,e){return e.gain-t.gain})):1===this.active?this.getCurrencyData.sort((function(t,e){return e.count-t.count})):void 0},getLeftData:function(){var t=this;if("undefined"===typeof this.getProductData.length||0===this.getProductData.length||"undefined"===typeof this.getLeftWsData.length||0===this.getLeftWsData.length)return[];var e=JSON.parse(JSON.stringify(this.getProductData)),a=e.map((function(e){var a=t.getLeftWsData.filter((function(t){return t.id===e.id})),i=Object.assign(e,a[0]);return i}));return a,a},getCurrenctData:function(){if(this.getWSData.length&&this.getWSData.length>0){var t=this.getCurrentPageData("opt").id;this.getWSData.slice().sort((function(t,e){return t.id-e.id}));return this.getWSData.filter((function(e){return e.id==t}))[0]}},getWSSortData:function(){if(this.getWSData.length&&this.getWSData.length>0){if(0===this.active){var t=this.getWSData.slice().sort((function(t,e){return e.gain-t.gain}));return t}if(1===this.active){var e=this.getWSData.slice().sort((function(t,e){return e.vol-t.vol}));return e}}},getCurrentCurrencyData:function(){var t=this.$storage.getLocalData("currentCurrency");return""==t||null==t?this.getWSData[0]:this.getWSData.filter((function(e){return e.id==t}))[0]}},(0,r.mapGetters)({getProductData:"getProductData",getWSData:"getWSData",getLeftWsData:"getLeftWsData"}))},o=c;e.default=o},"4d12":function(t,e,a){"use strict";a.r(e);var i=a("bf1e"),s=a("57dc");for(var n in s)"default"!==n&&function(t){a.d(e,t,(function(){return s[t]}))}(n);a("c82d");var r,u=a("f0c5"),c=Object(u["a"])(s["default"],i["b"],i["c"],!1,null,"006345c0",null,!1,i["a"],r);e["default"]=c.exports},"4db2":function(t,e,a){var i=a("dd4c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("4f06").default;s("46037f2a",i,!0,{sourceMap:!1,shadowMode:!1})},"57dc":function(t,e,a){"use strict";a.r(e);var i=a("ea32"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},"72d1":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".date[data-v-a92c9b46]{font-size:%?24?%;text-align:right;position:absolute;right:%?20?%;color:#555}.label_fd[data-v-a92c9b46]{background:#fff!important}.label_fd .time[data-v-a92c9b46]{font-size:%?30?%}.status[data-v-a92c9b46]{width:%?160?%!important;background:none!important;border:1px solid #f66464;color:#f66464!important}.futures_record .count_down_bar[data-v-a92c9b46]{border-top:1px solid hsla(0,0%,100%,.1)}",""]),t.exports=e},9869:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"record_class"},[a("v-uni-view",{staticClass:"record_main futures_record"},[0===t.dataList.length?a("v-uni-view",{staticClass:"no_data"},[t._v(t._s(t.getLangs("noData")))]):a("v-uni-scroll-view",{staticClass:"scroll",attrs:{"scroll-y":!0}},t._l(t.dataList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"record_label"},[a("v-uni-view",{staticClass:"label_title"},[a("v-uni-view",{staticClass:"label_name"},[t._v(t._s(e.ptitle)+" / USDT"),a("v-uni-text",{staticClass:"date"},[t._v(t._s(e.buytime))])],1)],1),a("v-uni-view",{staticClass:"labels_main"},[a("v-uni-view",{staticClass:"labels_box"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("actionText")))]),a("v-uni-view",{class:["value",0==e.otype?"green":"red"]},[t._v(t._s(0==e.otype?t.getLangs("tradep1"):t.getLangs("tradep2")))])],1),a("v-uni-view",{staticClass:"labels_box"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("purchaseQuantity")))]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(e.price))])],1),a("v-uni-view",{staticClass:"labels_box"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("purchasePrice")))]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(e.buyprice))])],1),a("v-uni-view",{staticClass:"labels_box"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("latestPrice")))]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(t.getClose(e.ptitle)))])],1),a("v-uni-view",{staticClass:"labels_box"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("cutttime")))]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(t.getCutttime(e.cutttime)))])],1),a("v-uni-view",{staticClass:"labels_box"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("expectedEarnings")))]),a("v-uni-view",{class:["value",e.loss>0?"green":"red"]},[t._v(t._s(e.loss>0?"+"+e.loss:e.loss))])],1)],1),a("v-uni-view",{staticClass:"count_down_bar"},[t._v(t._s(t.getLangs("countDown"))+":\n\t\t\t\t\t"+t._s(t.toCountDownText(e.stime)))])],1)})),1)],1)],1)},n=[]},b8c1:function(t,e,a){"use strict";a.r(e);var i=a("9869"),s=a("d595");for(var n in s)"default"!==n&&function(t){a.d(e,t,(function(){return s[t]}))}(n);a("2869");var r,u=a("f0c5"),c=Object(u["a"])(s["default"],i["b"],i["c"],!1,null,"a92c9b46",null,!1,i["a"],r);e["default"]=c.exports},bf1e:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"record_class"},[a("v-uni-view",{staticClass:"record_main futures_record"},[0===t.dataList.length?a("v-uni-view",{staticClass:"no_data"},[t._v(t._s(t.getLangs("noData")))]):a("v-uni-scroll-view",{staticClass:"scroll",attrs:{"scroll-y":!0}},t._l(t.dataList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"record_label"},[a("v-uni-view",{staticClass:"label_title"},[a("v-uni-view",{staticClass:"label_name"},[t._v(t._s(e.ptitle)+" / USDT"),a("v-uni-text",{staticClass:"date"},[t._v(t._s(e.buytime))])],1)],1),a("v-uni-view",{staticClass:"labels_main"},[a("v-uni-view",{staticClass:"labels_box"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("actionText")))]),a("v-uni-view",{class:["value",0==e.otype?"green":"red"]},[t._v(t._s(0==e.otype?t.getLangs("tradep1"):t.getLangs("tradep2")))])],1),a("v-uni-view",{staticClass:"labels_box"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("purchaseQuantity")))]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(e.price))])],1),a("v-uni-view",{staticClass:"labels_box"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("purchasePrice")))]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(e.buyprice))])],1),a("v-uni-view",{staticClass:"labels_box"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("sellPrice")))]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(e.sellprice))])],1),a("v-uni-view",{staticClass:"labels_box"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("cutttime")))]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(t.getCutttime(e.cutttime)))])],1),a("v-uni-view",{staticClass:"labels_box"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("profitAndLoss")))]),a("v-uni-view",{class:["value",e.loss>0?"green":"red"]},[t._v(t._s(e.loss>0?"+"+e.loss:e.loss))])],1)],1)],1)})),1)],1)],1)},n=[]},c82d:function(t,e,a){"use strict";var i=a("4db2"),s=a.n(i);s.a},d595:function(t,e,a){"use strict";a.r(e);var i=a("0ece"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},dd4c:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".date[data-v-006345c0]{font-size:%?24?%;text-align:right;position:absolute;right:%?20?%;color:#555}",""]),t.exports=e},ea32:function(t,e,a){"use strict";var i=a("4ea4");a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;a("2f62");var s=i(a("1cef")),n=i(a("246e")),r=i(a("d0a5")),u={name:"HistoryRecord",mixins:[s.default,n.default,r.default],methods:{getCutttime:function(t){return Number(t)>999?Number(t)/3600+this.getLangs("hour"):t+this.getLangs("second")}},created:function(){this.getHistoryOrderHandler()}};e.default=u},ff3c:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},s=i;e.default=s}}]);