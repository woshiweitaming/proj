(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-futures_trade-index"],{"049e":function(t,e,a){"use strict";var n=a("a4f0"),r=a.n(n);r.a},"094a":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;a("2f62");var r=n(a("e27d")),i=n(a("7650")),s=n(a("5c1e")),u=n(a("5838")),o=null,c={name:"FuturesPositionRecord",mixins:[r.default,i.default,s.default,u.default],data:function(){return{countDownList:{}}},computed:{},methods:{setTimer:function(){var t=this;o=setInterval((function(){t.getCoinHandler(0)}),5e3)},clearTimer:function(){clearInterval(o),o=null}},created:function(){var t=this;this.getCoinHandler(0),this.setTimer(),this.$once("hook:destroyed",(function(){t.clearTimer()}))},destroyed:function(){}};e.default=c},"1f75":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getWithdrawalBank=e.revokeBbEntrust=e.getBbOrder=e.revokeEntrust=e.endContractOrder=e.getEntrustOrder=e.getHisOrderDetails=e.getQhHistoryOrder=e.getQhOrder=e.setEndProfit=e.getOrderDetails=e.revokePay=e.getHistoryOrder=e.getBonds=e.getPay=e.getWithdrawal=void 0;var r=n(a("1f68")),i=(n(a("4328")),function(t){return(0,r.default)({url:"/user/getWithdrawal",method:"get",data:t})});e.getWithdrawal=i;var s=function(t){return(0,r.default)({url:"/user/getPay",method:"get",data:t})};e.getPay=s;var u=function(t){return(0,r.default)({url:"/user/getBonds",method:"get",data:t})};e.getBonds=u;var o=function(t){return(0,r.default)({url:"/user/getHistoryOrder",method:"get",data:t})};e.getHistoryOrder=o;var c=function(t){return(0,r.default)({url:"/user/revokePay",method:"get",data:t})};e.revokePay=c;var l=function(t){return(0,r.default)({url:"/user/getOrderDetails",method:"get",data:t})};e.getOrderDetails=l;var d=function(t){return(0,r.default)({url:"/user/setEndProfit",method:"post",data:t})};e.setEndProfit=d;var f=function(t){return(0,r.default)({url:"/user/getQhOrder",method:"get",data:t})};e.getQhOrder=f;var v=function(t){return(0,r.default)({url:"/user/getQhHisOrder",method:"get",data:t})};e.getQhHistoryOrder=v;var g=function(t){return(0,r.default)({url:"/user/getHisOrderDetails",method:"get",data:t})};e.getHisOrderDetails=g;var p=function(t){return(0,r.default)({url:"/user/getEntrustOrder",method:"get",data:t})};e.getEntrustOrder=p;var h=function(t){return(0,r.default)({url:"/user/endContractOrder",method:"get",data:t})};e.endContractOrder=h;var m=function(t){return(0,r.default)({url:"/user/revokeEntrust",method:"get",data:t})};e.revokeEntrust=m;var _=function(t){return(0,r.default)({url:"/user/getBbOrder",method:"get",data:t})};e.getBbOrder=_;var b=function(t){return(0,r.default)({url:"/user/revokeBbEntrust",method:"get",data:t})};e.revokeBbEntrust=b;var w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.default)({url:"/user/getWithdrawalBank",method:"get",data:t})};e.getWithdrawalBank=w},"214e":function(t,e,a){var n=a("2743");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("5d9919e8",n,!0,{sourceMap:!1,shadowMode:!1})},2269:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;a("2f62");var r=n(a("e27d")),i=n(a("7650")),s=n(a("5838")),u=n(a("eaf2")),o=n(a("c669")),c={name:"LeftCurrency",mixins:[r.default,i.default,s.default,u.default,o.default],props:["active"],methods:{change:function(t,e){this.redirectTo("/pages/k_inner/index?currency="+t+"&id="+e)}},computed:{},created:function(){}};e.default=c},"22b4":function(t,e,a){"use strict";a.r(e);var n=a("dd1e"),r=a("8b57");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("9dd6");var s,u=a("f0c5"),o=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"1d4d37fa",null,!1,n["a"],s);e["default"]=o.exports},2594:function(t,e,a){"use strict";a.r(e);var n=a("094a"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},2743:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".date[data-v-4bdc1174]{font-size:%?24?%;text-align:right;position:absolute;right:%?20?%;color:#555}.label_fd[data-v-4bdc1174]{background:#fff!important}.label_fd .time[data-v-4bdc1174]{font-size:%?30?%}.status[data-v-4bdc1174]{width:%?160?%!important;background:none!important;border:1px solid #f66464;color:#f66464!important}.scroll[data-v-4bdc1174]{overflow:auto}",""]),t.exports=e},"304b":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".date[data-v-5841cdc4]{font-size:%?24?%;text-align:right;position:absolute;right:%?20?%;color:#555}.value[data-v-5841cdc4]{color:#fff!important}",""]),t.exports=e},"3f0e":function(t,e,a){"use strict";a.r(e);var n=a("9a9f"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},"45f3":function(t,e,a){var n=a("e2fa");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("2d63fafc",n,!0,{sourceMap:!1,shadowMode:!1})},4839:function(t,e,a){"use strict";a.r(e);var n=a("d769"),r=a("afa3");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("049e");var s,u=a("f0c5"),o=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"657f718f",null,!1,n["a"],s);e["default"]=o.exports},"5c1e":function(t,e,a){"use strict";var n=a("4ea4");a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var r=n(a("1da1")),i=a("1f75"),s=n(a("bea6")),u={data:function(){return{dataList:[]}},methods:{getEntrustOrderHandler:function(t){var e=this;return(0,r.default)(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,(0,i.getEntrustOrder)(t);case 2:n=a.sent,e.dataList=n.data;case 4:case"end":return a.stop()}}),a)})))()},closeContact:function(t){var e=this;return(0,r.default)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.$tips.showModel(e.getLangs("sysTips"),e.getLangs("confirmClose"),e.getLangs("cancel"),e.getLangs("confirm"),function(){var a=(0,r.default)(regeneratorRuntime.mark((function a(n){var r,u;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!n.confirm){a.next=7;break}return r={orderNo:t},a.next=4,(0,i.endContractOrder)(r);case 4:u=a.sent,s.default.checkCode(u)&&e.getEntrustOrderHandler({type:1}),e.backTips(u);case 7:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}());case 1:case"end":return a.stop()}}),a)})))()},closeCommission:function(t){var e=this;return(0,r.default)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.$tips.showModel(e.getLangs("sysTips"),e.getLangs("revokeTips"),e.getLangs("cancel"),e.getLangs("confirm"),function(){var a=(0,r.default)(regeneratorRuntime.mark((function a(n){var r,u;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!n.confirm){a.next=7;break}return r={orderNo:t},a.next=4,(0,i.revokeEntrust)(r);case 4:u=a.sent,s.default.checkCode(u)&&e.getEntrustOrderHandler({type:0}),e.backTips(u);case 7:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}());case 1:case"end":return a.stop()}}),a)})))()},getHistoryOrderHandler:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,i.getQhHistoryOrder)();case 2:a=e.sent,t.dataList=a.data;case 4:case"end":return e.stop()}}),e)})))()},getContractHistoryOrderHandler:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,i.getHistoryOrder)();case 2:a=e.sent,t.dataList=a.data;case 4:case"end":return e.stop()}}),e)})))()},getFuturesPositionHandler:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,i.getQhOrder)();case 2:a=e.sent,s.default.checkCode(a)&&(t.dataList=a.data);case 4:case"end":return e.stop()}}),e)})))()},getCoinHandler:function(t){var e=this;return(0,r.default)(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,(0,i.getBbOrder)({type:t});case 2:n=a.sent,s.default.checkCode(n)&&(e.dataList=n.data);case 4:case"end":return a.stop()}}),a)})))()},revokeBbHandler:function(t){var e=this;return(0,r.default)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.$tips.showModel(e.getLangs("sysTips"),e.getLangs("revokeTips"),e.getLangs("cancel"),e.getLangs("confirm"),function(){var a=(0,r.default)(regeneratorRuntime.mark((function a(n){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!n.confirm){a.next=7;break}return{orderNo:t},a.next=4,(0,i.revokeBbEntrust)({orderNo:t});case 4:r=a.sent,s.default.checkCode(r)&&e.getCoinHandler(0),e.backTips(r);case 7:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}());case 1:case"end":return a.stop()}}),a)})))()},toTime:function(t){var e=t.substring(5,t.length-1);e=e.replace("-","/");var a=e.split(" "),n=a[1].toString(),r=a[0].toString();return n.substring(0,n.length-2)+" "+r}}},o=u;e.default=o},"78b3":function(t,e,a){"use strict";a.r(e);var n=a("d530"),r=a("2594");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("7f56");var s,u=a("f0c5"),o=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"4bdc1174",null,!1,n["a"],s);e["default"]=o.exports},"7f56":function(t,e,a){"use strict";var n=a("214e"),r=a.n(n);r.a},"8b57":function(t,e,a){"use strict";a.r(e);var n=a("ddbf"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},"903b":function(t,e,a){var n=a("304b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("078aedc0",n,!0,{sourceMap:!1,shadowMode:!1})},"9a9f":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;a("2f62");var r=n(a("e27d")),i=n(a("7650")),s=n(a("5c1e")),u={name:"HistoryRecord",mixins:[r.default,i.default,s.default],created:function(){this.getCoinHandler(1)}};e.default=u},"9dd6":function(t,e,a){"use strict";var n=a("45f3"),r=a.n(n);r.a},a4f0:function(t,e,a){var n=a("baed");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("2847b112",n,!0,{sourceMap:!1,shadowMode:!1})},afa3:function(t,e,a){"use strict";a.r(e);var n=a("2269"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},baed:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".left_currency_class[data-v-657f718f]{padding:0 %?20?% %?20?% %?20?%;width:%?500?%}.left_currency_class .title[data-v-657f718f]{display:block;line-height:%?120?%;font-size:%?32?%;border-bottom:1px solid #eee;margin-bottom:%?20?%}.left_currency_class .labels[data-v-657f718f]{margin-bottom:%?20?%}.left_currency_class .items[data-v-657f718f]{display:-webkit-box;display:-webkit-flex;display:flex}.left_currency_class .items .label[data-v-657f718f]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.left_currency_class .items .label[data-v-657f718f]:last-child{text-align:right}.left_currency_class .items .currency[data-v-657f718f]{color:#1c1d31;font-weight:700;font-size:%?28?%;line-height:%?40?%}.left_currency_class .items .market[data-v-657f718f]{font-size:%?24?%;color:#72899a;font-weight:700;line-height:%?40?%}.left_currency_class .items .close[data-v-657f718f]{font-size:%?28?%;font-weight:700;line-height:%?40?%}.left_currency_class .items .sub[data-v-657f718f]{font-size:%?22?%;color:#72899a;font-weight:700;line-height:%?40?%}.left_currency_class .items .gain[data-v-657f718f]{font-size:%?28?%;font-weight:700;line-height:%?40?%}",""]),t.exports=e},c669:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var r=n(a("1da1")),i=n(a("5530")),s=a("2f62"),u=a("e39f"),o=n(a("bea6")),c={methods:(0,i.default)({data:function(){return{timer:null}},getUserLeftmoneyHandler:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.getAllBalance)({d:1});case 2:a=e.sent,o.default.checkCode(a)&&(t.setLeftmoney(a.allBalance),t.setAccountBanlance(a.data),t.setCny(a.allCNY));case 4:case"end":return e.stop()}}),e)})))()},checkCertInfoHandler:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.userCertInfo)();case 2:a=e.sent,o.default.checkCode(a)&&t.setCertInfo(a.data);case 4:case"end":return e.stop()}}),e)})))()},getUserInfoHandler:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.getUserInfo)();case 2:a=e.sent,o.default.checkCode(a)&&t.setUserInfoData(a.data);case 4:case"end":return e.stop()}}),e)})))()},setTimer:function(){var t=this;null!==this.timer&&this.clearTimer(),this.timer=setInterval((function(){t.getUserLeftmoneyHandler()}),2e3)},clearTimer:function(){clearInterval(this.timer),this.timer=null}},(0,s.mapMutations)({setLeftmoney:"SET_LEFTMONEY",setCertInfo:"SET_CERT_INFO",setUserInfoData:"SET_USER_INFO_DATA",setAccountBanlance:"SET_ACCOUNT_BANLANCE",setCny:"SET_CNY"})),computed:(0,i.default)({},(0,s.mapGetters)({getLeftmoney:"getLeftmoney",getCertinfo:"getCertInfo",getUserInfoData:"getUserInfoData",getCny:"getCny",getAccountBanlance:"getAccountBanlance"})),onShow:function(){},onUnload:function(){},created:function(){},destroyed:function(){this.clearTimer()}},l=c;e.default=l},c98a:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"record_class"},[a("v-uni-view",{staticClass:"record_main"},[0===t.dataList.length?a("v-uni-view",{staticClass:"no_data"},[t._v(t._s(t.getLangs("noData")))]):a("v-uni-scroll-view",{staticClass:"scroll",attrs:{"scroll-y":!0}},t._l(t.dataList,(function(e,n){return a("v-uni-view",{key:n,staticClass:"record_label"},[a("v-uni-view",{staticClass:"label_title"},[a("v-uni-view",{staticClass:"label_name"},[a("v-uni-text",{class:["action",0==e.otype?"green":"red"]},[t._v(t._s(0==e.otype?t.getLangs("buy"):t.getLangs("sell")))]),t._v(t._s(e.ptitle)+" / USDT")],1)],1),a("v-uni-view",{staticClass:"labels_main"},[a("v-uni-view",{staticClass:"labels_box"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("timeText")))]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(t.toTime(e.buytime)))])],1),a("v-uni-view",{staticClass:"labels_box"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("commissionPrice"))+"(USDT)")]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(Number(e.buyprice).toFixed(4)))])],1),a("v-uni-view",{staticClass:"labels_box"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("commissionNums"))+"("+t._s(e.ptitle)+")")]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(Number(e.onumber).toFixed(4)))])],1),a("v-uni-view",{staticClass:"labels_box"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("totalPrice"))+"(USDT)")]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(Number(e.price).toFixed(4)))])],1),a("v-uni-view",{staticClass:"labels_box"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("tradeAvg"))+"(USDT)")]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(Number(e.avgprice).toFixed(4)))])],1),a("v-uni-view",{staticClass:"labels_box"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("tradeNums"))+"("+t._s(e.ptitle)+")")]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(Number(e.snumber).toFixed(4)))])],1)],1)],1)})),1)],1)],1)},i=[]},d21c:function(t,e,a){"use strict";a.r(e);var n=a("c98a"),r=a("3f0e");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("e8c1");var s,u=a("f0c5"),o=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"5841cdc4",null,!1,n["a"],s);e["default"]=o.exports},d530:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"record_class"},[a("v-uni-view",{staticClass:"record_main"},[0===t.dataList.length?a("v-uni-view",{staticClass:"no_data"},[t._v(t._s(t.getLangs("noData")))]):a("v-uni-scroll-view",{staticClass:"scroll",attrs:{"scroll-y":!0}},t._l(t.dataList,(function(e,n){return a("v-uni-view",{key:n,staticClass:"record_label"},[a("v-uni-view",{staticClass:"label_title"},[a("v-uni-view",{staticClass:"label_name"},[a("v-uni-text",{class:["action",0==e.otype?"green":"red"]},[t._v(t._s(0==e.otype?t.getLangs("buy"):t.getLangs("sell")))]),t._v(t._s(e.ptitle)+" / USDT"),a("v-uni-text",{staticClass:"status",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.revokeBbHandler(e.orderno)}}},[t._v(t._s(t.getLangs("revokeEntrust")))])],1)],1),a("v-uni-view",{staticClass:"labels_main"},[a("v-uni-view",{staticClass:"labels_box"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("timeText")))]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(t.toTime(e.buytime)))])],1),a("v-uni-view",{staticClass:"labels_box"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("commissionPrice"))+"(USDT)")]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(Number(e.buyprice).toFixed(4)))])],1),a("v-uni-view",{staticClass:"labels_box"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("commissionNums"))+"("+t._s(e.ptitle)+")")]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(Number(e.onumber).toFixed(4)))])],1),a("v-uni-view",{staticClass:"labels_box"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("totalPrice"))+"(USDT)")]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(Number(e.price).toFixed(4)))])],1),a("v-uni-view",{staticClass:"labels_box"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("tradeAvg"))+"(USDT)")]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(Number(e.avgprice).toFixed(4)))])],1),a("v-uni-view",{staticClass:"labels_box"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("tradeNums"))+"("+t._s(e.ptitle)+")")]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(Number(e.snumber).toFixed(4)))])],1)],1)],1)})),1)],1)],1)},i=[]},d769:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"left_currency_class"},[a("v-uni-view",{staticClass:"title"},[t._v(t._s(t.getLangs("currency")))]),a("v-uni-view",{staticClass:"left_currency_list"},t._l(t.getWSData,(function(e,n){return a("v-uni-view",{key:n,staticClass:"labels",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.change(e.name,e.id)}}},[a("v-uni-view",{staticClass:"items"},[a("v-uni-view",{staticClass:"label currency"},[t._v(t._s(e.name)),a("v-uni-text",{staticClass:"market"},[t._v("/USDT")])],1),a("v-uni-view",{class:["label close",e.gain>0?"green":"red"]},[t._v(t._s(e.close))])],1),a("v-uni-view",{staticClass:"items"},[a("v-uni-view",{staticClass:"label sub"},[t._v(t._s(e.name))]),a("v-uni-view",{class:["label gain",e.gain>0?"green":"red"]},[t._v(t._s(e.gain)+"%")])],1)],1)})),1)],1)},i=[]},dd1e:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));try{n={uPopup:a("56ff").default}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"futures_trade_class",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.eventClick.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"futures_section"},[a("v-uni-view",{staticClass:"futures_currency"},[t._v(t._s(t.currency)),a("v-uni-text",{staticClass:"iconfont icon-other",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!0}}}),a("v-uni-text",{class:["gain",t.getCurrenctData&&t.getCurrenctData.gain>0?"green":"red"]},[t._v(t._s(t.getCurrenctData&&t.getCurrenctData.gain>0?t.getCurrenctData&&t.getCurrenctData.gain:""+(t.getCurrenctData&&t.getCurrenctData.gain))+"%")])],1),a("v-uni-view",{staticClass:"futures_main"},[a("v-uni-view",{staticClass:"futures_data"},[a("v-uni-view",{staticClass:"futures_menu"},t._l(t.menuList,(function(e,n){return a("v-uni-view",{key:n,class:["menu_label",t.active===n?"on"+t.active:""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTradeAction(n)}}},[t._v(t._s(t.getLangs(e)))])})),1),a("v-uni-view",{staticClass:"futures_form"},[a("v-uni-view",{staticClass:"form_class"},[a("v-uni-view",{staticClass:"select",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopClick.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"select_label"},[a("v-uni-view",{staticClass:"select_name",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openDrop.apply(void 0,arguments)}}},[t._v(t._s(t.getLangs(t.typeList[t.form.paytype])))]),a("v-uni-text",{staticClass:"iconfont icon-unfold"})],1),t.typeStatus?a("v-uni-view",{staticClass:"select_drop"},[a("v-uni-view",{staticClass:"selelct_drop_main",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopClick.apply(void 0,arguments)}}},t._l(t.typeList,(function(e,n){return a("v-uni-view",{key:n,staticClass:"select_drop_label",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectDrop(n)}}},[t._v(t._s(t.getLangs(e)))])})),1)],1):t._e()],1),1===t.form.paytype?a("v-uni-view",{staticClass:"form_label"},[a("v-uni-view",{staticClass:"form_label_main"},[a("v-uni-view",{staticClass:"form_input_bar"},[a("v-uni-input",{staticClass:"input_bar",attrs:{type:"number",placeholder:t.getLangs("price")},model:{value:t.form.appointprice,callback:function(e){t.$set(t.form,"appointprice",e)},expression:"form.appointprice"}})],1)],1)],1):t._e(),a("v-uni-view",{staticClass:"form_label"},[a("v-uni-view",{staticClass:"form_label_main"},[a("v-uni-view",{staticClass:"form_input_bar"},[a("v-uni-input",{staticClass:"input_bar",attrs:{type:"number",placeholder:t.getLangs("numEmptyTips")},model:{value:t.form.num,callback:function(e){t.$set(t.form,"num",e)},expression:"form.num"}})],1)],1),a("v-uni-view",{staticClass:"currency"},[t._v(t._s(t.currency))])],1)],1)],1),a("v-uni-view",{staticClass:"leftmoney"},[a("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("available")))]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(t.getCurrencLeftmoney.toFixed(4))+" "+t._s(0===this.active?"USDT":t.currency))])],1),a("v-uni-view",{staticClass:"futures_info"},[a("v-uni-view",{staticClass:"per"},t._l(t.perList,(function(e,n){return a("v-uni-view",{key:n,class:["per_items",e===t.per?"on":""],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.changePer(e)}}},[t._v(t._s(e)+"%")])})),1)],1),a("v-uni-view",{staticClass:"futures_info"},[a("v-uni-text",{staticClass:"left_bar"},[t._v(t._s(t.getLangs("tradeprice"))+"(USDT）："+t._s(t.getPrice.toFixed(2)))])],1),a("v-uni-view",{staticClass:"labels_box"},[a("v-uni-text",{class:["buttons","on on"+t.active],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.trade.apply(void 0,arguments)}}},[t._v(t._s(0===t.active?t.getLangs("buy"):t.getLangs("sell")))])],1)],1),a("v-uni-view",{staticClass:"futures_price"},[a("v-uni-view",{staticClass:"price_class"},[a("v-uni-view",{staticClass:"tables"},[a("v-uni-view",{staticClass:"table_hd"},[a("v-uni-text",{staticClass:"hd left"},[t._v(t._s(t.getLangs("latestPrice")))]),a("v-uni-text",{staticClass:"hd right"},[t._v(t._s(t.getLangs("quantity")))])],1),a("v-uni-view",{staticClass:"table_bd"},[t._l(t.getCurrenctData&&t.getCurrenctData.latestPrice&&t.getCurrenctData&&t.getCurrenctData.latestPrice["buy"],(function(e,n){return a("v-uni-view",{key:n+20,staticClass:"tr"},[a("v-uni-text",{staticClass:"bd red left",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.selectPrice(e.price)}}},[t._v(t._s(e.price))]),a("v-uni-text",{staticClass:"bd right"},[t._v(t._s(e.amount))])],1)})),a("v-uni-view",{staticClass:"sell"}),t._l(t.getCurrenctData&&t.getCurrenctData.latestPrice&&t.getCurrenctData.latestPrice["sell"],(function(e,n){return a("v-uni-view",{key:n+10,staticClass:"tr"},[a("v-uni-text",{staticClass:"bd green left",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.selectPrice(e.price)}}},[t._v(t._s(e.price))]),a("v-uni-text",{staticClass:"bd right"},[t._v(t._s(e.amount))])],1)}))],2)],1)],1)],1)],1)],1),a("v-uni-view",{staticClass:"futures_section"},[a("v-uni-view",{staticClass:"futures_record"},[a("v-uni-view",{staticClass:"futures_title"},[t._l(t.menuList1,(function(e,n){return a("v-uni-view",{key:n,class:["menu_label",n==t.mactive?"on":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeMenu(n)}}},[t._v(t._s(t.getLangs(e)))])})),a("v-uni-view",{staticClass:"white_paper_icon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toPage.apply(void 0,arguments)}}},[t._v(t._s(t.getLangs("introduce")))])],2),a("v-uni-view",{staticClass:"record_content"},[0===t.mactive?a("coinPositionRecord"):t._e(),1===t.mactive?a("CoinHistoryRecord"):t._e()],1)],1)],1),a("u-popup",{attrs:{mode:"left"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("LeftCurrency",{key:t.getKey,attrs:{active:t.active}})],1)],1)},i=[]},ddbf:function(t,e,a){"use strict";var n=a("4ea4");a("a9e3"),a("b680"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var r=n(a("1da1")),i=n(a("7650")),s=n(a("e27d")),u=n(a("5838")),o=n(a("c669")),c=n(a("eaf2")),l=n(a("78b3")),d=n(a("d21c")),f=a("e39f"),v=a("d18d"),g=n(a("4839")),p={name:"FuturesTrade",mixins:[i.default,s.default,u.default,o.default,c.default],components:{coinPositionRecord:l.default,CoinHistoryRecord:d.default,LeftCurrency:g.default},data:function(){return{active:0,currency:"",id:"",menuList:["buy","sell"],typeList:["marketOrder","limitOrder"],typeStatus:!1,accountLefmoney:{},perList:[25,50,75,100],per:"",form:{paytype:0,appointprice:"",num:""},menuList1:["commissionRecord","history"],mactive:0,show:!1,key:""}},methods:{changeTradeAction:function(t){this.active=t},openDrop:function(){this.typeStatus=!this.typeStatus},selectDrop:function(t){this.form.paytype=t,this.typeStatus=!1},selectPrice:function(t){this.form.appointprice=t},changePer:function(t){this.per=t,this.form.num=this.getNum.toFixed(6)},priceHandler:function(t){this.form.appointprice=0===t?this.getCurrenctData.close:""},getCurrentAccountHandler:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var a,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.getCurrenctData.id,n={pid:a,type:2},e.next=4,(0,v.getAccountBalance)(n);case 4:r=e.sent,t.accountLefmoney=r.data;case 6:case"end":return e.stop()}}),e)})))()},toPage:function(){var t=this.getCurrentPageData("opt");this.navigateTo("/pages/white_paper/index",t)},stopClick:function(t){t.stopPropagation()},eventClick:function(){this.typeStatus=!1},trade:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var a,n,r,i,s,u,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.id,n=""===t.per?t.form.num:t.getNum,r=t.active,i=t.form.paytype,s=0==i?t.getCurrenctData.close:t.form.appointprice,""!==s){e.next=7;break}return e.abrupt("return",t.$tips.showToast(t.getLangs("purchaseQuantity")));case 7:if(""!==n){e.next=9;break}return e.abrupt("return",t.$tips.showToast(t.getLangs("numEmptyTips")));case 9:return u={id:a,num:n,type:r,paytype:i,appointprice:s,ratio:t.per},e.next=12,(0,f.spotTrading)(u);case 12:o=e.sent,t.getCurrentAccountHandler(),t.backTips(o);case 15:case"end":return e.stop()}}),e)})))()},changeMenu:function(t){this.mactive=t}},computed:{getCurrentPrice:function(){var t=0;return 0===this.form.paytype&&(t=Number(this.getCurrenctData&&this.getCurrenctData.close)),1===this.form.paytype&&(t=Number(this.form.appointprice)),t},getPrice:function(){var t=0,e=this.getCurrentPrice;return t=""===this.per?this.form.num:this.getNum,""===t?0:t*e},getNum:function(){var t=Number(this.getCurrencLeftmoney),e=(Number(this.form.num),this.per/100),a=this.getCurrentPrice;return 0===this.active?1/a*t*e:1===this.active?t*e:void 0},getFee:function(){return this.getCurrenctData&&this.getCurrenctData.attach&&this.getCurrenctData.attach.fee},getCurrencLeftmoney:function(){return"{}"===JSON.stringify(this.accountLefmoney)?0:0===this.active?Number(this.accountLefmoney["usdt"]):Number(this.accountLefmoney[this.currency.toLowerCase()])},getKey:function(){return this.key}},onLoad:function(t){var e=t.currency;if(this.currency=e,this.id=t.id,"undefined"===typeof e||""===e||"undefined"===typeof this.id||""===this.id){this.$tips.showToast(this.getLangs("currencyError"));var a=this;setTimeout((function(){a.back()}),1e3)}this.active=1==t.type?1:0,this.setTitle(e.toUpperCase())},onShow:function(){this.active="buy"===this.getCurrentPageData("opt").action?0:1},onUnload:function(){},watch:{getCurrenctData:function(t){t&&this.getCurrentAccountHandler()},"form.num":function(t){var e=Number(this.getCurrencLeftmoney),a=Number(t),n=this.getCurrentPrice,r=0;0===this.active&&(r=a/(1/n*e)),1===this.active&&(r=a/e),this.per=Math.round(100*r)}}};e.default=p},e2fa:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-1d4d37fa]{border-top:1px solid hsla(0,0%,100%,.1);background:#20222c}.futures_trade_class[data-v-1d4d37fa]{overflow:hidden}.futures_title[data-v-1d4d37fa]{position:relative}.futures_title .menu_label[data-v-1d4d37fa]{padding:0 %?10?%;display:inline-block;line-height:%?60?%;margin-right:%?20?%}.futures_title .menu_label.on[data-v-1d4d37fa]{background:#007aff;color:#fff;border-radius:5px}.white_paper_icon[data-v-1d4d37fa]{position:absolute;top:%?10?%;right:0;color:#aaa}.white_paper_icon .iconfont[data-v-1d4d37fa]{font-size:%?38?%}.futures_trade_class[data-v-1d4d37fa]{height:100%}.futures_section[data-v-1d4d37fa]{background:#20222c;margin-bottom:%?20?%;padding:%?20?%}.futures_section[data-v-1d4d37fa]:last-child{height:calc(100% - %?810?%)}.futures_record[data-v-1d4d37fa]{height:100%}.futures_currency[data-v-1d4d37fa]{font-size:%?40?%;font-weight:700;position:relative;color:#fff}.futures_currency .gain[data-v-1d4d37fa]{font-size:%?30?%;font-weight:700;padding-left:%?40?%}.futures_currency .position_record[data-v-1d4d37fa]{position:absolute;right:0;color:#657497;top:%?10?%;font-size:%?28?%;font-weight:400}.futures_main[data-v-1d4d37fa]{display:-webkit-box;display:-webkit-flex;display:flex;padding-top:%?20?%}.futures_main .futures_data[data-v-1d4d37fa]{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-right:%?20?%}.futures_main .futures_price[data-v-1d4d37fa]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.futures_main .futures_menu[data-v-1d4d37fa]{display:-webkit-box;display:-webkit-flex;display:flex;background:hsla(0,0%,100%,.05);border-radius:%?20?%;color:#fff}.futures_main .futures_menu .menu_label[data-v-1d4d37fa]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;line-height:%?70?%;border-radius:%?20?%}.futures_main .futures_menu .menu_label.on1[data-v-1d4d37fa]{font-size:%?30?%}.form_label[data-v-1d4d37fa]{padding-left:%?20?%;padding-right:%?110?%;margin-bottom:%?10?%;border-radius:%?10?%;position:relative}.form_label .currency[data-v-1d4d37fa]{position:absolute;right:%?20?%;top:%?20?%;color:#999}.select[data-v-1d4d37fa]{background:#fff;border:1px solid #eee;z-index:100;margin-top:%?20?%;border-radius:%?10?%}.select_drop[data-v-1d4d37fa]{background:#f9f9f9}.select .select_label .iconfont[data-v-1d4d37fa]{right:%?-20?%}.futures_info[data-v-1d4d37fa]{display:-webkit-box;display:-webkit-flex;display:flex;padding-top:%?10?%}.futures_info .left_bar[data-v-1d4d37fa],\n.futures_info .right_bar[data-v-1d4d37fa]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?24?%;color:#888}.futures_info .right_bar[data-v-1d4d37fa]{text-align:right}.left_bar[data-v-1d4d37fa],\n.right_bar[data-v-1d4d37fa]{width:50%;line-height:%?60?%;font-size:%?26?%;color:#797d91;display:inline-block}.left_bar[data-v-1d4d37fa]{text-align:left}.right_bar[data-v-1d4d37fa]{text-align:right}.table_hd[data-v-1d4d37fa]{display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:%?20?%;border-bottom:1px solid hsla(0,0%,100%,.1);line-height:%?80?%}.table_hd .left[data-v-1d4d37fa],\n.table_hd .right[data-v-1d4d37fa]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#aaa;font-size:%?24?%}.table_hd .right[data-v-1d4d37fa]{text-align:right}.table_bd .tr[data-v-1d4d37fa]{display:-webkit-box;display:-webkit-flex;display:flex;line-height:%?50?%}.table_bd  .left[data-v-1d4d37fa],\n.table_bd  .right[data-v-1d4d37fa]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?24?%}.table_bd  .left[data-v-1d4d37fa]{font-size:%?28?%}.table_bd .right[data-v-1d4d37fa]{text-align:right;color:#555}.sell[data-v-1d4d37fa]{padding-top:%?60?%}.buttons[data-v-1d4d37fa]{margin-top:20px;display:block;height:%?70?%;text-align:center;color:#fff;font-size:%?30?%;line-height:%?70?%;border-radius:%?10?%}.futures_title[data-v-1d4d37fa]{font-size:%?32?%;color:#aaa;font-weight:700;margin-bottom:%?20?%}.futures_info .per[data-v-1d4d37fa]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%}.futures_info .per .per_items[data-v-1d4d37fa]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?26?%;text-align:center;line-height:%?40?%;margin:0 %?4?%;border-radius:%?10?%;color:#aaa}.futures_info .per .per_items.on[data-v-1d4d37fa]{color:#fff;border:1px solid #007aff;background:#007aff}.leftmoney[data-v-1d4d37fa]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;margin-top:%?20?%}.leftmoney .name[data-v-1d4d37fa],\n.leftmoney .value[data-v-1d4d37fa]{line-height:%?40?%;font-size:%?24?%}.leftmoney .name[data-v-1d4d37fa]{width:%?80?%;text-align:left;color:#666}.leftmoney .value[data-v-1d4d37fa]{text-align:right;width:calc(100% - %?90?%);color:#fff}.record_content[data-v-1d4d37fa]{height:calc(100% - %?60?%);overflow:auto}.select_name[data-v-1d4d37fa]{color:#081723}.iconfont[data-v-1d4d37fa]{font-size:%?48?%}body.?%PAGE?%[data-v-1d4d37fa]{background:#20222c}",""]),t.exports=e},e8c1:function(t,e,a){"use strict";var n=a("903b"),r=a.n(n);r.a},eaf2:function(t,e,a){"use strict";var n=a("4ea4");a("4de4"),a("d81d"),a("fb6a"),a("4e82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var r=n(a("1da1")),i=n(a("5530")),s=a("2f62"),u=a("d18d"),o={methods:(0,i.default)({getProductDataHandler:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.getProduct)();case 2:a=e.sent,t.clearTimer(),t.setProductData(a.data);case 5:case"end":return e.stop()}}),e)})))()}},(0,s.mapMutations)({setProductData:"SET_PRODUCT_DATA"})),computed:(0,i.default)({getShowData:function(){if("{}"===JSON.stringify(this.getCurrencyData))return[];var t=this.getCurrencyData;return t.slice(0,3)},getTradeData:function(){return 0===this.active?this.getCurrencyData.sort((function(t,e){return e.gain-t.gain})):1===this.active?this.getCurrencyData.sort((function(t,e){return e.count-t.count})):void 0},getLeftData:function(){var t=this;if("undefined"===typeof this.getProductData.length||0===this.getProductData.length||"undefined"===typeof this.getLeftWsData.length||0===this.getLeftWsData.length)return[];var e=JSON.parse(JSON.stringify(this.getProductData)),a=e.map((function(e){var a=t.getLeftWsData.filter((function(t){return t.id===e.id})),n=Object.assign(e,a[0]);return n}));return a,a},getCurrenctData:function(){if(this.getWSData.length&&this.getWSData.length>0){var t=this.getCurrentPageData("opt").id;this.getWSData.slice().sort((function(t,e){return t.id-e.id}));return this.getWSData.filter((function(e){return e.id==t}))[0]}},getWSSortData:function(){if(this.getWSData.length&&this.getWSData.length>0){if(0===this.active){var t=this.getWSData.slice().sort((function(t,e){return e.gain-t.gain}));return t}if(1===this.active){var e=this.getWSData.slice().sort((function(t,e){return e.vol-t.vol}));return e}}},getCurrentCurrencyData:function(){var t=this.$storage.getLocalData("currentCurrency");return""==t||null==t?this.getWSData[0]:this.getWSData.filter((function(e){return e.id==t}))[0]}},(0,s.mapGetters)({getProductData:"getProductData",getWSData:"getWSData",getLeftWsData:"getLeftWsData"}))},c=o;e.default=c}}]);