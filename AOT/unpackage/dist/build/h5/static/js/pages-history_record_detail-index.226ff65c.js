(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-history_record_detail-index"],{"12d0":function(e,t,a){var s=a("24fb");t=s(!1),t.push([e.i,"uni-page-body[data-v-23e3b6b3]{background-color:#f9f9f9}.history_record_detail_class[data-v-23e3b6b3]{padding:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.history_record_detail_class .labels[data-v-23e3b6b3]{width:50%;box-sizing:border-box;padding:%?10?%}.history_record_detail_class .labels.full[data-v-23e3b6b3]{width:100%}.history_record_detail_class .labels .box[data-v-23e3b6b3]{padding:%?20?%;border-radius:%?30?%;background:#fff;border:1px solid #eee}.history_record_detail_class .labels .box .text[data-v-23e3b6b3]{font-size:%?28?%;color:#8191b3}.history_record_detail_class .labels .box .value[data-v-23e3b6b3]{font-size:%?32?%;color:#000}body.?%PAGE?%[data-v-23e3b6b3]{background-color:#f9f9f9}",""]),e.exports=t},"2e7e":function(e,t,a){"use strict";var s=a("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.revokeBbEntrust=t.getBbOrder=t.revokeEntrust=t.endContractOrder=t.getEntrustOrder=t.getHisOrderDetails=t.getQhHistoryOrder=t.getQhOrder=t.setEndProfit=t.getOrderDetails=t.revokePay=t.getHistoryOrder=t.getBonds=t.getPay=t.getWithdrawal=void 0;var r=s(a("cfa8")),i=(s(a("4328")),function(e){return(0,r.default)({url:"/user/getWithdrawal",method:"get",data:e})});t.getWithdrawal=i;var n=function(e){return(0,r.default)({url:"/user/getPay",method:"get",data:e})};t.getPay=n;var u=function(e){return(0,r.default)({url:"/user/getBonds",method:"get",data:e})};t.getBonds=u;var l=function(e){return(0,r.default)({url:"/user/getHistoryOrder",method:"get",data:e})};t.getHistoryOrder=l;var o=function(e){return(0,r.default)({url:"/user/revokePay",method:"get",data:e})};t.revokePay=o;var d=function(e){return(0,r.default)({url:"/user/getOrderDetails",method:"get",data:e})};t.getOrderDetails=d;var v=function(e){return(0,r.default)({url:"/user/setEndProfit",method:"post",data:e})};t.setEndProfit=v;var c=function(e){return(0,r.default)({url:"/user/getQhOrder",method:"get",data:e})};t.getQhOrder=c;var f=function(e){return(0,r.default)({url:"/user/getQhHisOrder",method:"get",data:e})};t.getQhHistoryOrder=f;var g=function(e){return(0,r.default)({url:"/user/getHisOrderDetails",method:"get",data:e})};t.getHisOrderDetails=g;var b=function(e){return(0,r.default)({url:"/user/getEntrustOrder",method:"get",data:e})};t.getEntrustOrder=b;var _=function(e){return(0,r.default)({url:"/user/endContractOrder",method:"get",data:e})};t.endContractOrder=_;var w=function(e){return(0,r.default)({url:"/user/revokeEntrust",method:"get",data:e})};t.revokeEntrust=w;var h=function(e){return(0,r.default)({url:"/user/getBbOrder",method:"get",data:e})};t.getBbOrder=h;var C=function(e){return(0,r.default)({url:"/user/revokeBbEntrust",method:"get",data:e})};t.revokeBbEntrust=C},"3ac7":function(e,t,a){"use strict";var s=a("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var r=s(a("c964")),i=s(a("6c93")),n=s(a("00ea")),u=a("2e7e"),l={name:"HistoryRecordDetail",mixins:[i.default,n.default],data:function(){return{orderDetails:{}}},methods:{getHistoryOrderDetailHandler:function(e){var t=this;return(0,r.default)(regeneratorRuntime.mark((function a(){var s,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s={orderNo:e},a.next=3,(0,u.getHisOrderDetails)(s);case 3:r=a.sent,t.orderDetails=r.data;case 5:case"end":return a.stop()}}),a)})))()}},onLoad:function(e){this.getHistoryOrderDetailHandler(e.orderNo),this.setTitle(this.getLangs("historicalOrder"))}};t.default=l},"6c93":function(e,t,a){"use strict";var s=a("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(a("f3f3")),i=a("2f62"),n=s(a("c1e6")),u=s(a("790b")),l=s(a("62c7")),o=s(a("ebb0")),d={data:function(){return{currentOS:""}},methods:{navigateTo:function(e,t){var a="undefined"===typeof t||"{}"===JSON.stringify(t)?"":"?".concat(l.default.convertObj(t));uni.navigateTo({url:e+a})},redirectTo:function(e){uni.redirectTo({url:e})},reLaunch:function(e){uni.reLaunch({url:e})},switchTab:function(e){uni.switchTab({url:e})},back:function(){var e=u.default.getOS();return"ios"===e||"android"===e?uni.navigateBack():history.back(-1)},setTitle:function(e){uni.setNavigationBarTitle({title:"undefined"===typeof e||""===e?n.default.appName:e})},moveHandle:function(){},getCurrentPageData:function(e){var t=getCurrentPages(),a=t[t.length-1];switch(e){case"opt":return a.options;case"route":return a.route;default:return a}},backToPage:function(e){u.default.getOS();this.navigateTo(e)},backTips:function(e){if(o.default.checkCode(e))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(e.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,r.default)({createOSClass:function(){return"h5"}},(0,i.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=u.default.getOS()}},v=d;t.default=v},7652:function(e,t,a){"use strict";a.r(t);var s=a("ae82"),r=a("c037");for(var i in r)"default"!==i&&function(e){a.d(t,e,(function(){return r[e]}))}(i);a("e74b");var n,u=a("f0c5"),l=Object(u["a"])(r["default"],s["b"],s["c"],!1,null,"23e3b6b3",null,!1,s["a"],n);t["default"]=l.exports},"790b":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s={setStatusBarColor:function(e){},checkNetWorkStatus:function(){},getOS:function(){var e=uni.getSystemInfoSync().platform;return e}},r=s;t.default=r},ae82:function(e,t,a){"use strict";var s,r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"history_record_detail_class"},[a("v-uni-view",{staticClass:"labels"},[a("v-uni-view",{staticClass:"box"},[a("v-uni-view",{staticClass:"text"},[e._v(e._s(e.getLangs("productName")))]),a("v-uni-view",{staticClass:"value"},[e._v(e._s(e.orderDetails.ptitle))])],1)],1),a("v-uni-view",{staticClass:"labels"},[a("v-uni-view",{staticClass:"box"},[a("v-uni-view",{staticClass:"text"},[e._v(e._s(e.getLangs("purchasePrice")))]),a("v-uni-view",{staticClass:"value"},[e._v(e._s(e.orderDetails.buyprice))])],1)],1),a("v-uni-view",{staticClass:"labels"},[a("v-uni-view",{staticClass:"box"},[a("v-uni-view",{staticClass:"text"},[e._v(e._s(e.getLangs("price")))]),a("v-uni-view",{staticClass:"value"},[e._v(e._s(e.orderDetails.sellprice))])],1)],1),a("v-uni-view",{staticClass:"labels"},[a("v-uni-view",{staticClass:"box"},[a("v-uni-view",{staticClass:"text"},[e._v(e._s(e.getLangs("rechargeAmount")))]),a("v-uni-view",{staticClass:"value"},[e._v(e._s(e.orderDetails.price))])],1)],1),a("v-uni-view",{staticClass:"labels"},[a("v-uni-view",{staticClass:"box"},[a("v-uni-view",{staticClass:"text"},[e._v(e._s(e.getLangs("handlingFee"))+"：")]),a("v-uni-view",{staticClass:"value"},[e._v(e._s(e.orderDetails.fee))])],1)],1),a("v-uni-view",{staticClass:"labels"},[a("v-uni-view",{staticClass:"box"},[a("v-uni-view",{staticClass:"text"},[e._v(e._s(e.getLangs("profitAndLoss")))]),a("v-uni-view",{class:["value",e.orderDetails.loss>0?"green":"red"]},[e._v(e._s(e.orderDetails.loss))])],1)],1),a("v-uni-view",{staticClass:"labels"},[a("v-uni-view",{staticClass:"box"},[a("v-uni-view",{staticClass:"text"},[e._v(e._s(e.getLangs("loss")))]),a("v-uni-view",{staticClass:"value"},[e._v(e._s(e.orderDetails.endprofit))])],1)],1),a("v-uni-view",{staticClass:"labels"},[a("v-uni-view",{staticClass:"box"},[a("v-uni-view",{staticClass:"text"},[e._v(e._s(e.getLangs("profit")))]),a("v-uni-view",{staticClass:"value"},[e._v(e._s(e.orderDetails.endprofit))])],1)],1),a("v-uni-view",{staticClass:"labels"},[a("v-uni-view",{staticClass:"box"},[a("v-uni-view",{staticClass:"text"},[e._v(e._s(e.getLangs("quantity")))]),a("v-uni-view",{staticClass:"value"},[e._v(e._s(e.orderDetails.onumber))])],1)],1),a("v-uni-view",{staticClass:"labels"},[a("v-uni-view",{staticClass:"box"},[a("v-uni-view",{staticClass:"text"},[e._v(e._s(e.getLangs("tradeType")))]),a("v-uni-view",{staticClass:"value"},[e._v(e._s(0===e.orderDetails.otype?e.getLangs("buy"):e.getLangs("sell")))])],1)],1),a("v-uni-view",{staticClass:"labels full"},[a("v-uni-view",{staticClass:"box"},[a("v-uni-view",{staticClass:"text"},[e._v(e._s(e.getLangs("orderNumber")))]),a("v-uni-view",{staticClass:"value"},[e._v(e._s(e.orderDetails.orderno))])],1)],1),a("v-uni-view",{staticClass:"labels full"},[a("v-uni-view",{staticClass:"box"},[a("v-uni-view",{staticClass:"text"},[e._v(e._s(e.getLangs("buytime")))]),a("v-uni-view",{staticClass:"value"},[e._v(e._s(e.orderDetails.buytime))])],1)],1),a("v-uni-view",{staticClass:"labels full"},[a("v-uni-view",{staticClass:"box"},[a("v-uni-view",{staticClass:"text"},[e._v(e._s(e.getLangs("selltime")))]),a("v-uni-view",{staticClass:"value"},[e._v(e._s(e.orderDetails.selltime))])],1)],1)],1)},i=[];a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return s}))},c037:function(e,t,a){"use strict";a.r(t);var s=a("3ac7"),r=a.n(s);for(var i in s)"default"!==i&&function(e){a.d(t,e,(function(){return s[e]}))}(i);t["default"]=r.a},e74b:function(e,t,a){"use strict";var s=a("e798"),r=a.n(s);r.a},e798:function(e,t,a){var s=a("12d0");"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var r=a("4f06").default;r("d6dcf28e",s,!0,{sourceMap:!1,shadowMode:!1})}}]);