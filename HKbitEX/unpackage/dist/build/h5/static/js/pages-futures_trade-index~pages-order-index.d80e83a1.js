(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-futures_trade-index~pages-order-index"],{"032b":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},a=n;e.default=a},"1d0c":function(t,e,r){"use strict";r.r(e);var n=r("24cc"),a=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=a.a},"24cc":function(t,e,r){"use strict";var n=r("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;r("2f62");var a=n(r("9212")),i=n(r("1fe3")),s=n(r("e166")),u=n(r("f7b7")),o=null,c={name:"FuturesPositionRecord",mixins:[a.default,i.default,s.default,u.default],data:function(){return{countDownList:{}}},computed:{},methods:{setTimer:function(){var t=this;o=setInterval((function(){t.getCoinHandler(0)}),5e3)},clearTimer:function(){clearInterval(o),o=null}},created:function(){var t=this;this.getCoinHandler(0),this.setTimer(),this.$once("hook:destroyed",(function(){t.clearTimer()}))},destroyed:function(){}};e.default=c},"431b":function(t,e,r){var n=r("cb4a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=r("4f06").default;a("ff9cab82",n,!0,{sourceMap:!1,shadowMode:!1})},5317:function(t,e,r){"use strict";var n=r("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.revokeBbEntrust=e.getBbOrder=e.revokeEntrust=e.endContractOrder=e.getEntrustOrder=e.getHisOrderDetails=e.getQhHistoryOrder=e.getQhOrder=e.setEndProfit=e.getOrderDetails=e.revokePay=e.getHistoryOrder=e.getBonds=e.getPay=e.getWithdrawal=void 0;var a=n(r("7e29")),i=(n(r("4328")),function(t){return(0,a.default)({url:"/user/getWithdrawal",method:"get",data:t})});e.getWithdrawal=i;var s=function(t){return(0,a.default)({url:"/user/getPay",method:"get",data:t})};e.getPay=s;var u=function(t){return(0,a.default)({url:"/user/getBonds",method:"get",data:t})};e.getBonds=u;var o=function(t){return(0,a.default)({url:"/user/getHistoryOrder",method:"get",data:t})};e.getHistoryOrder=o;var c=function(t){return(0,a.default)({url:"/user/revokePay",method:"get",data:t})};e.revokePay=c;var d=function(t){return(0,a.default)({url:"/user/getOrderDetails",method:"get",data:t})};e.getOrderDetails=d;var l=function(t){return(0,a.default)({url:"/user/setEndProfit",method:"post",data:t})};e.setEndProfit=l;var f=function(t){return(0,a.default)({url:"/user/getQhOrder",method:"get",data:t})};e.getQhOrder=f;var g=function(t){return(0,a.default)({url:"/user/getQhHisOrder",method:"get",data:t})};e.getQhHistoryOrder=g;var v=function(t){return(0,a.default)({url:"/user/getHisOrderDetails",method:"get",data:t})};e.getHisOrderDetails=v;var h=function(t){return(0,a.default)({url:"/user/getEntrustOrder",method:"get",data:t})};e.getEntrustOrder=h;var p=function(t){return(0,a.default)({url:"/user/endContractOrder",method:"get",data:t})};e.endContractOrder=p;var m=function(t){return(0,a.default)({url:"/user/revokeEntrust",method:"get",data:t})};e.revokeEntrust=m;var b=function(t){return(0,a.default)({url:"/user/getBbOrder",method:"get",data:t})};e.getBbOrder=b;var w=function(t){return(0,a.default)({url:"/user/revokeBbEntrust",method:"get",data:t})};e.revokeBbEntrust=w},"8ecb0":function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"record_class"},[r("v-uni-view",{staticClass:"record_main"},[0===t.dataList.length?r("v-uni-view",{staticClass:"no_data"},[t._v(t._s(t.getLangs("noData")))]):r("v-uni-scroll-view",{staticClass:"scroll",attrs:{"scroll-y":!0}},t._l(t.dataList,(function(e,n){return r("v-uni-view",{key:n,staticClass:"record_label"},[r("v-uni-view",{staticClass:"label_title"},[r("v-uni-view",{staticClass:"label_name"},[r("v-uni-text",{class:["action",0==e.otype?"green":"red"]},[t._v(t._s(0==e.otype?t.getLangs("buy"):t.getLangs("sell")))]),t._v(t._s(e.ptitle)+" / USDT"),r("v-uni-text",{staticClass:"status",on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.revokeBbHandler(e.orderno)}}},[t._v(t._s(t.getLangs("revokeEntrust")))])],1)],1),r("v-uni-view",{staticClass:"labels_main"},[r("v-uni-view",{staticClass:"labels_box"},[r("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("timeText")))]),r("v-uni-view",{staticClass:"value"},[t._v(t._s(t.toTime(e.buytime)))])],1),r("v-uni-view",{staticClass:"labels_box"},[r("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("commissionPrice"))+"(USDT)")]),r("v-uni-view",{staticClass:"value"},[t._v(t._s(Number(e.buyprice).toFixed(4)))])],1),r("v-uni-view",{staticClass:"labels_box"},[r("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("commissionNums"))+"("+t._s(e.ptitle)+")")]),r("v-uni-view",{staticClass:"value"},[t._v(t._s(Number(e.onumber).toFixed(4)))])],1),r("v-uni-view",{staticClass:"labels_box"},[r("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("totalPrice"))+"(USDT)")]),r("v-uni-view",{staticClass:"value"},[t._v(t._s(Number(e.price).toFixed(4)))])],1),r("v-uni-view",{staticClass:"labels_box"},[r("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("tradeAvg"))+"(USDT)")]),r("v-uni-view",{staticClass:"value"},[t._v(t._s(Number(e.avgprice).toFixed(4)))])],1),r("v-uni-view",{staticClass:"labels_box"},[r("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("tradeNums"))+"("+t._s(e.ptitle)+")")]),r("v-uni-view",{staticClass:"value"},[t._v(t._s(Number(e.snumber).toFixed(4)))])],1)],1)],1)})),1)],1)],1)},i=[]},9212:function(t,e,r){"use strict";var n=r("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(r("5530")),i=r("2f62"),s=n(r("823a")),u=n(r("032b")),o=n(r("c9b1")),c=n(r("36a7")),d={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,e){var r="undefined"===typeof e||"{}"===JSON.stringify(e)?"":"?".concat(o.default.convertObj(e));uni.navigateTo({url:t+r})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=u.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?s.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var e=getCurrentPages(),r=e[e.length-1];switch(t){case"opt":return r.options;case"route":return r.route;default:return r}},backToPage:function(t){u.default.getOS();this.navigateTo(t)},backTips:function(t){if(c.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,a.default)({createOSClass:function(){return"h5"}},(0,i.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=u.default.getOS()}},l=d;e.default=l},cb4a:function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,".date[data-v-4bdc1174]{font-size:%?24?%;text-align:right;position:absolute;right:%?20?%;color:#555}.label_fd[data-v-4bdc1174]{background:#fff!important}.label_fd .time[data-v-4bdc1174]{font-size:%?30?%}.status[data-v-4bdc1174]{width:%?160?%!important;background:none!important;border:1px solid #f66464;color:#f66464!important}.scroll[data-v-4bdc1174]{overflow:auto}",""]),t.exports=e},d2a8:function(t,e,r){"use strict";var n=r("431b"),a=r.n(n);a.a},de99:function(t,e,r){"use strict";var n=r("4ea4");r("4de4"),r("d81d"),r("fb6a"),r("4e82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("96cf");var a=n(r("1da1")),i=n(r("5530")),s=r("2f62"),u=r("2e44"),o={methods:(0,i.default)({getProductDataHandler:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.getProduct)();case 2:r=e.sent,t.clearTimer(),t.setProductData(r.data);case 5:case"end":return e.stop()}}),e)})))()}},(0,s.mapMutations)({setProductData:"SET_PRODUCT_DATA"})),computed:(0,i.default)({getShowData:function(){if("{}"===JSON.stringify(this.getCurrencyData))return[];var t=this.getCurrencyData;return t.slice(0,3)},getTradeData:function(){return 0===this.active?this.getCurrencyData.sort((function(t,e){return e.gain-t.gain})):1===this.active?this.getCurrencyData.sort((function(t,e){return e.count-t.count})):void 0},getLeftData:function(){var t=this;if("undefined"===typeof this.getProductData.length||0===this.getProductData.length||"undefined"===typeof this.getLeftWsData.length||0===this.getLeftWsData.length)return[];var e=JSON.parse(JSON.stringify(this.getProductData)),r=e.map((function(e){var r=t.getLeftWsData.filter((function(t){return t.id===e.id})),n=Object.assign(e,r[0]);return n}));return r,r},getCurrenctData:function(){if(this.getWSData.length&&this.getWSData.length>0){var t=this.getCurrentPageData("opt").id;this.getWSData.slice().sort((function(t,e){return t.id-e.id}));return this.getWSData.filter((function(e){return e.id==t}))[0]}},getWSSortData:function(){if(this.getWSData.length&&this.getWSData.length>0){if(0===this.active){var t=this.getWSData.slice().sort((function(t,e){return e.gain-t.gain}));return t}if(1===this.active){var e=this.getWSData.slice().sort((function(t,e){return e.vol-t.vol}));return e}}}},(0,s.mapGetters)({getProductData:"getProductData",getWSData:"getWSData",getLeftWsData:"getLeftWsData"}))},c=o;e.default=c},e166:function(t,e,r){"use strict";var n=r("4ea4");r("d3b7"),r("ac1f"),r("25f0"),r("5319"),r("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("96cf");var a=n(r("1da1")),i=r("5317"),s=n(r("36a7")),u={data:function(){return{dataList:[]}},methods:{getEntrustOrderHandler:function(t){var e=this;return(0,a.default)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,(0,i.getEntrustOrder)(t);case 2:n=r.sent,e.dataList=n.data;case 4:case"end":return r.stop()}}),r)})))()},closeContact:function(t){var e=this;return(0,a.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:e.$tips.showModel(e.getLangs("sysTips"),e.getLangs("confirmClose"),e.getLangs("cancel"),e.getLangs("confirm"),function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(n){var a,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!n.confirm){r.next=7;break}return a={orderNo:t},r.next=4,(0,i.endContractOrder)(a);case 4:u=r.sent,s.default.checkCode(u)&&e.getEntrustOrderHandler({type:1}),e.backTips(u);case 7:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}());case 1:case"end":return r.stop()}}),r)})))()},closeCommission:function(t){var e=this;return(0,a.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:e.$tips.showModel(e.getLangs("sysTips"),e.getLangs("revokeTips"),e.getLangs("cancel"),e.getLangs("confirm"),function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(n){var a,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!n.confirm){r.next=7;break}return a={orderNo:t},r.next=4,(0,i.revokeEntrust)(a);case 4:u=r.sent,s.default.checkCode(u)&&e.getEntrustOrderHandler({type:0}),e.backTips(u);case 7:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}());case 1:case"end":return r.stop()}}),r)})))()},getHistoryOrderHandler:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,i.getQhHistoryOrder)();case 2:r=e.sent,t.dataList=r.data;case 4:case"end":return e.stop()}}),e)})))()},getContractHistoryOrderHandler:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,i.getHistoryOrder)();case 2:r=e.sent,t.dataList=r.data;case 4:case"end":return e.stop()}}),e)})))()},getFuturesPositionHandler:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,i.getQhOrder)();case 2:r=e.sent,s.default.checkCode(r)&&(t.dataList=r.data);case 4:case"end":return e.stop()}}),e)})))()},getCoinHandler:function(t){var e=this;return(0,a.default)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,(0,i.getBbOrder)({type:t});case 2:n=r.sent,s.default.checkCode(n)&&(e.dataList=n.data);case 4:case"end":return r.stop()}}),r)})))()},revokeBbHandler:function(t){var e=this;return(0,a.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:e.$tips.showModel(e.getLangs("sysTips"),e.getLangs("revokeTips"),e.getLangs("cancel"),e.getLangs("confirm"),function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(n){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!n.confirm){r.next=7;break}return{orderNo:t},r.next=4,(0,i.revokeBbEntrust)({orderNo:t});case 4:a=r.sent,s.default.checkCode(a)&&e.getCoinHandler(0),e.backTips(a);case 7:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}());case 1:case"end":return r.stop()}}),r)})))()},toTime:function(t){var e=t.substring(5,t.length-1);e=e.replace("-","/");var r=e.split(" "),n=r[1].toString(),a=r[0].toString();return n.substring(0,n.length-2)+" "+a}}},o=u;e.default=o},e95c:function(t,e,r){"use strict";r.r(e);var n=r("8ecb0"),a=r("1d0c");for(var i in a)"default"!==i&&function(t){r.d(e,t,(function(){return a[t]}))}(i);r("d2a8");var s,u=r("f0c5"),o=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"4bdc1174",null,!1,n["a"],s);e["default"]=o.exports}}]);