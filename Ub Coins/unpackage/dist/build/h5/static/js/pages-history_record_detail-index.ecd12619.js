(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-history_record_detail-index"],{"1b01":function(t,e,a){"use strict";a.r(e);var s=a("de8d"),r=a("ba0a");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("5fc8");var n,u=a("f0c5"),l=Object(u["a"])(r["default"],s["b"],s["c"],!1,null,"23e3b6b3",null,!1,s["a"],n);e["default"]=l.exports},"311b":function(t,e,a){"use strict";var s=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=s(a("5530")),i=a("2f62"),n=s(a("5e51")),u=s(a("96b7")),l=s(a("afa4")),o=s(a("3a0d")),d={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,e){var a="undefined"===typeof e||"{}"===JSON.stringify(e)?"":"?".concat(l.default.convertObj(e));uni.navigateTo({url:t+a})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=u.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?n.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var e=getCurrentPages(),a=e[e.length-1];switch(t){case"opt":return a.options;case"route":return a.route;default:return a}},backToPage:function(t){u.default.getOS();this.navigateTo(t)},backTips:function(t){if(o.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,r.default)({createOSClass:function(){return"h5"}},(0,i.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=u.default.getOS()}},v=d;e.default=v},"4f9b":function(t,e,a){"use strict";var s=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.revokeBbEntrust=e.getBbOrder=e.revokeEntrust=e.endContractOrder=e.getEntrustOrder=e.getHisOrderDetails=e.getQhHistoryOrder=e.getQhOrder=e.setEndProfit=e.getOrderDetails=e.revokePay=e.getHistoryOrder=e.getBonds=e.getPay=e.getWithdrawal=void 0;var r=s(a("bf51")),i=(s(a("4328")),function(t){return(0,r.default)({url:"/user/getWithdrawal",method:"get",data:t})});e.getWithdrawal=i;var n=function(t){return(0,r.default)({url:"/user/getPay",method:"get",data:t})};e.getPay=n;var u=function(t){return(0,r.default)({url:"/user/getBonds",method:"get",data:t})};e.getBonds=u;var l=function(t){return(0,r.default)({url:"/user/getHistoryOrder",method:"get",data:t})};e.getHistoryOrder=l;var o=function(t){return(0,r.default)({url:"/user/revokePay",method:"get",data:t})};e.revokePay=o;var d=function(t){return(0,r.default)({url:"/user/getOrderDetails",method:"get",data:t})};e.getOrderDetails=d;var v=function(t){return(0,r.default)({url:"/user/setEndProfit",method:"post",data:t})};e.setEndProfit=v;var c=function(t){return(0,r.default)({url:"/user/getQhOrder",method:"get",data:t})};e.getQhOrder=c;var f=function(t){return(0,r.default)({url:"/user/getQhHisOrder",method:"get",data:t})};e.getQhHistoryOrder=f;var g=function(t){return(0,r.default)({url:"/user/getHisOrderDetails",method:"get",data:t})};e.getHisOrderDetails=g;var b=function(t){return(0,r.default)({url:"/user/getEntrustOrder",method:"get",data:t})};e.getEntrustOrder=b;var _=function(t){return(0,r.default)({url:"/user/endContractOrder",method:"get",data:t})};e.endContractOrder=_;var w=function(t){return(0,r.default)({url:"/user/revokeEntrust",method:"get",data:t})};e.revokeEntrust=w;var h=function(t){return(0,r.default)({url:"/user/getBbOrder",method:"get",data:t})};e.getBbOrder=h;var C=function(t){return(0,r.default)({url:"/user/revokeBbEntrust",method:"get",data:t})};e.revokeBbEntrust=C},5107:function(t,e,a){var s=a("24fb");e=s(!1),e.push([t.i,"uni-page-body[data-v-23e3b6b3]{background-color:#f9f9f9}.history_record_detail_class[data-v-23e3b6b3]{padding:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.history_record_detail_class .labels[data-v-23e3b6b3]{width:50%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:%?10?%}.history_record_detail_class .labels.full[data-v-23e3b6b3]{width:100%}.history_record_detail_class .labels .box[data-v-23e3b6b3]{padding:%?20?%;-webkit-border-radius:%?30?%;border-radius:%?30?%;background:#fff;border:1px solid #eee}.history_record_detail_class .labels .box .text[data-v-23e3b6b3]{font-size:%?28?%;color:#8191b3}.history_record_detail_class .labels .box .value[data-v-23e3b6b3]{font-size:%?32?%;color:#000}body.?%PAGE?%[data-v-23e3b6b3]{background-color:#f9f9f9}",""]),t.exports=e},"516b":function(t,e,a){"use strict";var s=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var r=s(a("1da1")),i=s(a("311b")),n=s(a("a48b")),u=a("4f9b"),l={name:"HistoryRecordDetail",mixins:[i.default,n.default],data:function(){return{orderDetails:{}}},methods:{getHistoryOrderDetailHandler:function(t){var e=this;return(0,r.default)(regeneratorRuntime.mark((function a(){var s,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s={orderNo:t},a.next=3,(0,u.getHisOrderDetails)(s);case 3:r=a.sent,e.orderDetails=r.data;case 5:case"end":return a.stop()}}),a)})))()}},onLoad:function(t){this.getHistoryOrderDetailHandler(t.orderNo),this.setTitle(this.getLangs("historicalOrder"))}};e.default=l},"5fc8":function(t,e,a){"use strict";var s=a("6eac"),r=a.n(s);r.a},"6eac":function(t,e,a){var s=a("5107");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var r=a("4f06").default;r("4f17c740",s,!0,{sourceMap:!1,shadowMode:!1})},"96b7":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},r=s;e.default=r},ba0a:function(t,e,a){"use strict";a.r(e);var s=a("516b"),r=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,(function(){return s[t]}))}(i);e["default"]=r.a},de8d:function(t,e,a){"use strict";var s;a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return s}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"history_record_detail_class"},[a("v-uni-view",{staticClass:"labels"},[a("v-uni-view",{staticClass:"box"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("productName")))]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(t.orderDetails.ptitle))])],1)],1),a("v-uni-view",{staticClass:"labels"},[a("v-uni-view",{staticClass:"box"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("purchasePrice")))]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(t.orderDetails.buyprice))])],1)],1),a("v-uni-view",{staticClass:"labels"},[a("v-uni-view",{staticClass:"box"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("price")))]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(t.orderDetails.sellprice))])],1)],1),a("v-uni-view",{staticClass:"labels"},[a("v-uni-view",{staticClass:"box"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("rechargeAmount")))]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(t.orderDetails.price))])],1)],1),a("v-uni-view",{staticClass:"labels"},[a("v-uni-view",{staticClass:"box"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("handlingFee"))+"：")]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(t.orderDetails.fee))])],1)],1),a("v-uni-view",{staticClass:"labels"},[a("v-uni-view",{staticClass:"box"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("profitAndLoss")))]),a("v-uni-view",{class:["value",t.orderDetails.loss>0?"green":"red"]},[t._v(t._s(t.orderDetails.loss))])],1)],1),a("v-uni-view",{staticClass:"labels"},[a("v-uni-view",{staticClass:"box"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("loss")))]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(t.orderDetails.endprofit))])],1)],1),a("v-uni-view",{staticClass:"labels"},[a("v-uni-view",{staticClass:"box"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("profit")))]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(t.orderDetails.endprofit))])],1)],1),a("v-uni-view",{staticClass:"labels"},[a("v-uni-view",{staticClass:"box"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("quantity")))]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(t.orderDetails.onumber))])],1)],1),a("v-uni-view",{staticClass:"labels"},[a("v-uni-view",{staticClass:"box"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("tradeType")))]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(0===t.orderDetails.otype?t.getLangs("buy"):t.getLangs("sell")))])],1)],1),a("v-uni-view",{staticClass:"labels full"},[a("v-uni-view",{staticClass:"box"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("orderNumber")))]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(t.orderDetails.orderno))])],1)],1),a("v-uni-view",{staticClass:"labels full"},[a("v-uni-view",{staticClass:"box"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("buytime")))]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(t.orderDetails.buytime))])],1)],1),a("v-uni-view",{staticClass:"labels full"},[a("v-uni-view",{staticClass:"box"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("selltime")))]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(t.orderDetails.selltime))])],1)],1)],1)},i=[]}}]);