(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-futures_trade-index~pages-order-index"],{"0600":function(t,e,r){var a=r("24fb");e=a(!1),e.push([t.i,".date[data-v-3d6a6a72]{font-size:%?24?%;text-align:right;position:absolute;right:%?20?%;color:#555}.label_fd[data-v-3d6a6a72]{background:#fff!important}.label_fd .time[data-v-3d6a6a72]{font-size:%?30?%}.status[data-v-3d6a6a72]{width:%?160?%!important;background:none!important;border:1px solid #f66464;color:#f66464!important}.scroll[data-v-3d6a6a72]{overflow:auto}.ft .record_label[data-v-3d6a6a72]{border:none!important}",""]),t.exports=e},"250a":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},n=a;e.default=n},"341a":function(t,e,r){"use strict";var a=r("d37c"),n=r.n(a);n.a},"361e":function(t,e,r){"use strict";var a=r("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(r("5530"));r("96cf");var i=a(r("1da1")),u=r("2f62"),s=a(r("58bc")),o=a(r("250a")),c=a(r("2838")),d=a(r("1b24")),l=r("cba0"),f={data:function(){return{currentOS:"",kefuUrl:""}},methods:{navigateTo:function(t,e){var r="undefined"===typeof e||"{}"===JSON.stringify(e)?"":"?".concat(c.default.convertObj(e));uni.navigateTo({url:t+r})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=o.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?s.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var e=getCurrentPages(),r=e[e.length-1];switch(t){case"opt":return r.options;case"route":return r.route;default:return r}},backToPage:function(t){o.default.getOS();this.navigateTo(t)},backTips:function(t){if(d.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){return(0,i.default)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,l.getNConfig)();case 2:return e=t.sent,t.abrupt("return",window.location.href=e.data.kfUrl);case 5:case"end":return t.stop()}}),t)})))()},customBack:function(){return window.location.href="/"},UTCDateToLocalDate:function(t){var e=new Date,r=e.getTimezoneOffset(),a=r/60,n=new Date(t);return n.setHours(n.getHours()-a),n}},computed:(0,n.default)({createOSClass:function(){return"h5"}},(0,u.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=o.default.getOS()}},g=f;e.default=g},"4a4b":function(t,e,r){"use strict";r.r(e);var a=r("8b52"),n=r.n(a);for(var i in a)"default"!==i&&function(t){r.d(e,t,(function(){return a[t]}))}(i);e["default"]=n.a},"53fc":function(t,e,r){"use strict";var a=r("4ea4");r("d3b7"),r("ac1f"),r("25f0"),r("5319"),r("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("96cf");var n=a(r("1da1")),i=r("ee30"),u=a(r("1b24")),s={data:function(){return{dataList:[]}},methods:{getEntrustOrderHandler:function(t){var e=this;return(0,n.default)(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,(0,i.getEntrustOrder)(t);case 2:a=r.sent,e.dataList=a.data;case 4:case"end":return r.stop()}}),r)})))()},closeContact:function(t){var e=this;return(0,n.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:e.$tips.showModel(e.getLangs("sysTips"),e.getLangs("confirmClose"),e.getLangs("cancel"),e.getLangs("confirm"),function(){var r=(0,n.default)(regeneratorRuntime.mark((function r(a){var n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!a.confirm){r.next=7;break}return n={orderNo:t},r.next=4,(0,i.endContractOrder)(n);case 4:s=r.sent,u.default.checkCode(s)&&e.getEntrustOrderHandler({type:1}),e.backTips(s);case 7:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}());case 1:case"end":return r.stop()}}),r)})))()},closeCommission:function(t){var e=this;return(0,n.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:e.$tips.showModel(e.getLangs("sysTips"),e.getLangs("revokeTips"),e.getLangs("cancel"),e.getLangs("confirm"),function(){var r=(0,n.default)(regeneratorRuntime.mark((function r(a){var n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!a.confirm){r.next=7;break}return n={orderNo:t},r.next=4,(0,i.revokeEntrust)(n);case 4:s=r.sent,u.default.checkCode(s)&&e.getEntrustOrderHandler({type:0}),e.backTips(s);case 7:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}());case 1:case"end":return r.stop()}}),r)})))()},getHistoryOrderHandler:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,i.getQhHistoryOrder)();case 2:r=e.sent,t.dataList=r.data;case 4:case"end":return e.stop()}}),e)})))()},getContractHistoryOrderHandler:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,i.getHistoryOrder)();case 2:r=e.sent,t.dataList=r.data;case 4:case"end":return e.stop()}}),e)})))()},getFuturesPositionHandler:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,i.getQhOrder)();case 2:r=e.sent,u.default.checkCode(r)&&(t.dataList=r.data);case 4:case"end":return e.stop()}}),e)})))()},getCoinHandler:function(t){var e=this;return(0,n.default)(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,(0,i.getBbOrder)({type:t});case 2:a=r.sent,u.default.checkCode(a)&&(e.dataList=a.data);case 4:case"end":return r.stop()}}),r)})))()},revokeBbHandler:function(t){var e=this;return(0,n.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:e.$tips.showModel(e.getLangs("sysTips"),e.getLangs("revokeTips"),e.getLangs("cancel"),e.getLangs("confirm"),function(){var r=(0,n.default)(regeneratorRuntime.mark((function r(a){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!a.confirm){r.next=7;break}return{orderNo:t},r.next=4,(0,i.revokeBbEntrust)({orderNo:t});case 4:n=r.sent,u.default.checkCode(n)&&e.getCoinHandler(0),e.backTips(n);case 7:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}());case 1:case"end":return r.stop()}}),r)})))()},toTime:function(t){var e=t.substring(5,t.length-1);e=e.replace("-","/");var r=e.split(" "),a=r[1].toString(),n=r[0].toString();return a.substring(0,a.length-2)+" "+n}}},o=s;e.default=o},"724e":function(t,e,r){"use strict";var a;r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{class:["record_class",t.cls]},[r("v-uni-view",{staticClass:"record_main"},[0===t.dataList.length?r("v-uni-view",{staticClass:"no_data"},[t._v(t._s(t.getLangs("noData")))]):r("v-uni-scroll-view",{staticClass:"scroll",attrs:{"scroll-y":!0}},t._l(t.dataList,(function(e,a){return r("v-uni-view",{key:a,staticClass:"record_label"},[r("v-uni-view",{staticClass:"label_title"},[r("v-uni-view",{staticClass:"label_name"},[r("v-uni-text",{class:["action",0==e.otype?"green":"red"]},[t._v(t._s(0==e.otype?t.getLangs("buy"):t.getLangs("sell")))]),t._v(t._s(e.ptitle)+" / USDT"),r("v-uni-text",{staticClass:"status",on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.revokeBbHandler(e.orderno)}}},[t._v(t._s(t.getLangs("revokeEntrust")))])],1)],1),r("v-uni-view",{staticClass:"labels_main"},[r("v-uni-view",{staticClass:"labels_box"},[r("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("timeText")))]),r("v-uni-view",{staticClass:"value"},[t._v(t._s(t.toTime(e.buytime)))])],1),r("v-uni-view",{staticClass:"labels_box"},[r("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("commissionPrice"))+"(USDT)")]),r("v-uni-view",{staticClass:"value"},[t._v(t._s(Number(e.buyprice).toFixed(4)))])],1),r("v-uni-view",{staticClass:"labels_box"},[r("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("commissionNums"))+"("+t._s(e.ptitle)+")")]),r("v-uni-view",{staticClass:"value"},[t._v(t._s(Number(e.onumber).toFixed(4)))])],1),r("v-uni-view",{staticClass:"labels_box"},[r("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("totalPrice"))+"(USDT)")]),r("v-uni-view",{staticClass:"value"},[t._v(t._s(Number(e.price).toFixed(4)))])],1),r("v-uni-view",{staticClass:"labels_box"},[r("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("tradeAvg"))+"(USDT)")]),r("v-uni-view",{staticClass:"value"},[t._v(t._s(Number(e.avgprice).toFixed(4)))])],1),r("v-uni-view",{staticClass:"labels_box"},[r("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("tradeNums"))+"("+t._s(e.ptitle)+")")]),r("v-uni-view",{staticClass:"value"},[t._v(t._s(Number(e.snumber).toFixed(4)))])],1)],1)],1)})),1)],1)],1)},i=[]},"8b52":function(t,e,r){"use strict";var a=r("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;r("2f62");var n=a(r("361e")),i=a(r("ca32")),u=a(r("53fc")),s=a(r("51c3")),o=null,c={name:"FuturesPositionRecord",props:["cls"],mixins:[n.default,i.default,u.default,s.default],data:function(){return{countDownList:{}}},computed:{},methods:{setTimer:function(){var t=this;o=setInterval((function(){t.getCoinHandler(0)}),5e3)},clearTimer:function(){clearInterval(o),o=null}},created:function(){var t=this;this.getCoinHandler(0),this.setTimer(),this.$once("hook:destroyed",(function(){t.clearTimer()}))},destroyed:function(){}};e.default=c},b1f4:function(t,e,r){"use strict";r.r(e);var a=r("724e"),n=r("4a4b");for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);r("341a");var u,s=r("f0c5"),o=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"3d6a6a72",null,!1,a["a"],u);e["default"]=o.exports},b3c8:function(t,e,r){"use strict";var a=r("4ea4");r("4de4"),r("d81d"),r("fb6a"),r("4e82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("96cf");var n=a(r("1da1")),i=a(r("5530")),u=r("2f62"),s=r("cba0"),o={methods:(0,i.default)({getProductDataHandler:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,s.getProduct)();case 2:r=e.sent,t.clearTimer(),t.setProductData(r.data);case 5:case"end":return e.stop()}}),e)})))()}},(0,u.mapMutations)({setProductData:"SET_PRODUCT_DATA"})),computed:(0,i.default)({getShowData:function(){if("{}"===JSON.stringify(this.getCurrencyData))return[];var t=this.getCurrencyData;return t.slice(0,3)},getTradeData:function(){return 0===this.active?this.getCurrencyData.sort((function(t,e){return e.gain-t.gain})):1===this.active?this.getCurrencyData.sort((function(t,e){return e.count-t.count})):void 0},getLeftData:function(){var t=this;if("undefined"===typeof this.getProductData.length||0===this.getProductData.length||"undefined"===typeof this.getLeftWsData.length||0===this.getLeftWsData.length)return[];var e=JSON.parse(JSON.stringify(this.getProductData)),r=e.map((function(e){var r=t.getLeftWsData.filter((function(t){return t.id===e.id})),a=Object.assign(e,r[0]);return a}));return r,r},getCurrenctData:function(){if(this.getWSData.length&&this.getWSData.length>0){var t=this.getCurrentPageData("opt").id;this.getWSData.slice().sort((function(t,e){return t.id-e.id}));return this.getWSData.filter((function(e){return e.id==t}))[0]}},getWSSortData:function(){if(this.getWSData.length&&this.getWSData.length>0){if(0===this.active){var t=this.getWSData.slice().sort((function(t,e){return e.gain-t.gain}));return t}if(1===this.active){var e=this.getWSData.slice().sort((function(t,e){return e.vol-t.vol}));return e}}}},(0,u.mapGetters)({getProductData:"getProductData",getWSData:"getWSData",getLeftWsData:"getLeftWsData"}))},c=o;e.default=c},d37c:function(t,e,r){var a=r("0600");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=r("4f06").default;n("47444ea3",a,!0,{sourceMap:!1,shadowMode:!1})},ee30:function(t,e,r){"use strict";var a=r("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.revokeBbEntrust=e.getBbOrder=e.revokeEntrust=e.endContractOrder=e.getEntrustOrder=e.getHisOrderDetails=e.getQhHistoryOrder=e.getQhOrder=e.setEndProfit=e.getOrderDetails=e.revokePay=e.getHistoryOrder=e.getBonds=e.getPay=e.getWithdrawal=void 0;var n=a(r("c181")),i=(a(r("4328")),function(t){return(0,n.default)({url:"/user/getWithdrawal",method:"get",data:t})});e.getWithdrawal=i;var u=function(t){return(0,n.default)({url:"/user/getPay",method:"get",data:t})};e.getPay=u;var s=function(t){return(0,n.default)({url:"/user/getBonds",method:"get",data:t})};e.getBonds=s;var o=function(t){return(0,n.default)({url:"/user/getHistoryOrder",method:"get",data:t})};e.getHistoryOrder=o;var c=function(t){return(0,n.default)({url:"/user/revokePay",method:"get",data:t})};e.revokePay=c;var d=function(t){return(0,n.default)({url:"/user/getOrderDetails",method:"get",data:t})};e.getOrderDetails=d;var l=function(t){return(0,n.default)({url:"/user/setEndProfit",method:"post",data:t})};e.setEndProfit=l;var f=function(t){return(0,n.default)({url:"/user/getQhOrder",method:"get",data:t})};e.getQhOrder=f;var g=function(t){return(0,n.default)({url:"/user/getQhHisOrder",method:"get",data:t})};e.getQhHistoryOrder=g;var v=function(t){return(0,n.default)({url:"/user/getHisOrderDetails",method:"get",data:t})};e.getHisOrderDetails=v;var h=function(t){return(0,n.default)({url:"/user/getEntrustOrder",method:"get",data:t})};e.getEntrustOrder=h;var p=function(t){return(0,n.default)({url:"/user/endContractOrder",method:"get",data:t})};e.endContractOrder=p;var m=function(t){return(0,n.default)({url:"/user/revokeEntrust",method:"get",data:t})};e.revokeEntrust=m;var w=function(t){return(0,n.default)({url:"/user/getBbOrder",method:"get",data:t})};e.getBbOrder=w;var b=function(t){return(0,n.default)({url:"/user/revokeBbEntrust",method:"get",data:t})};e.revokeBbEntrust=b}}]);