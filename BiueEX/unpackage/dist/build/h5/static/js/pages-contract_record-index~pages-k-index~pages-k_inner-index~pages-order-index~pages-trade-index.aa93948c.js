(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-contract_record-index~pages-k-index~pages-k_inner-index~pages-order-index~pages-trade-index"],{"0ea5":function(t,e,s){"use strict";var a=s("b534"),n=s.n(a);n.a},2883:function(t,e,s){var a=s("24fb");e=a(!1),e.push([t.i,".history_record_class[data-v-299dd250]{height:calc(100% - %?80?%)}.deal[data-v-299dd250]{background:#1faa93!important}",""]),t.exports=e},"302b":function(t,e,s){"use strict";var a=s("e31c"),n=s.n(a);n.a},"34d3":function(t,e,s){"use strict";var a=s("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;s("2f62");var n=a(s("c5e2")),r=a(s("a937")),i=a(s("fcd3")),u=(s("c969"),{name:"ContractHistoryRecord",mixins:[n.default,r.default,i.default],created:function(){this.getContractHistoryOrderHandler()}});e.default=u},"34e8":function(t,e,s){"use strict";var a;s.d(e,"b",(function(){return n})),s.d(e,"c",(function(){return r})),s.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-uni-view",{staticClass:"commission_record_class"},[s("v-uni-view",{staticClass:"record_class"},[s("v-uni-view",{staticClass:"record_main common"},[0===t.dataList.length?s("v-uni-view",{staticClass:"no_data"},[t._v(t._s(t.getLangs("noData")))]):s("v-uni-scroll-view",{staticClass:"scroll",attrs:{"scroll-y":!0}},t._l(t.dataList,(function(e,a){return s("v-uni-view",{key:a,staticClass:"record_label"},[s("v-uni-view",{staticClass:"label_title"},[s("v-uni-view",{staticClass:"label_name"},[t._v(t._s(0==e.paytype?t.getLangs("marketOrder"):t.getLangs("limitOrder"))),s("v-uni-text",{staticClass:"ptitle"},[t._v(t._s(e.ptitle)+" / USDT")]),s("v-uni-text",{class:["action",0==e.otype?"green":"red"]},[t._v(t._s(0==e.otype?t.getLangs("tradep3"):t.getLangs("tradep4")))]),s("v-uni-text",{staticClass:"status"},[t._v(t._s(t.getLangs("positioning")))])],1)],1),s("v-uni-view",{staticClass:"labels_main_normal"},[s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("quantity")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.onumber))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("purchasePrice")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.buyprice))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("closePrice")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.nowPrice))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("profitAndLoss")))]),s("v-uni-view",{class:["value",e.loss>0?"green":"red"]},[t._v(t._s(e.loss))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("lever")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.unit)+"X")])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("loss")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(0==e.endloss?"-":e.endloss))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("profit")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(0==e.endprofit?"-":e.endprofit))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("margin")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.price))])],1)],1),s("v-uni-view",{staticClass:"labels_fd"},[s("v-uni-view",{staticClass:"labels"},[t._v(t._s(t.getLangs("orderNumber"))+":"+t._s(e.orderno))]),s("v-uni-view",{staticClass:"labels"},[t._v(t._s(t.getLangs("handlingFee"))+":"+t._s(e.fee))]),s("v-uni-view",{staticClass:"labels"},[t._v(t._s(t.getLangs("buytime"))+":"+t._s(e.buytime))]),s("v-uni-view",{staticClass:"cancel",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.closeContact(e.orderno)}}},[t._v(t._s(t.getLangs("mClose")))])],1)],1)})),1)],1)],1)],1)},r=[]},5104:function(t,e,s){"use strict";var a;s.d(e,"b",(function(){return n})),s.d(e,"c",(function(){return r})),s.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-uni-view",{staticClass:"contact_commission_class"},[s("v-uni-view",{staticClass:"record_class"},[s("v-uni-view",{staticClass:"record_main common"},[0===t.dataList.length?s("v-uni-view",{staticClass:"no_data"},[t._v(t._s(t.getLangs("noData")))]):s("v-uni-scroll-view",{staticClass:"scroll",attrs:{"scroll-y":!0}},t._l(t.dataList,(function(e,a){return s("v-uni-view",{key:a,staticClass:"record_label"},[s("v-uni-view",{staticClass:"label_title"},[s("v-uni-view",{staticClass:"label_name"},[t._v(t._s(0==e.paytype?t.getLangs("marketOrder"):t.getLangs("limitOrder"))),s("v-uni-text",{staticClass:"ptitle"},[t._v(t._s(e.ptitle)+" / USDT")]),s("v-uni-text",{class:["action",0==e.otype?"green":"color"]},[t._v(t._s(0==e.otype?t.getLangs("tradep3"):t.getLangs("tradep4")))]),s("v-uni-text",{staticClass:"status"},[t._v(t._s(t.getLangs("commission")))])],1)],1),s("v-uni-view",{staticClass:"labels_main_normal"},[s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("quantity")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.onumber))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("purchasePrice")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.buyprice))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("latestPrice")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.nowPrice))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("profitAndLoss")))]),s("v-uni-view",{class:["value",e.loss>0?"green":"red"]},[t._v(t._s(e.loss))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("lever")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.unit)+"X")])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("loss")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(0==e.endloss?"-":e.endloss))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("profit")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(0==e.endprofit?"-":e.endprofit))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("margin")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.price))])],1)],1),s("v-uni-view",{staticClass:"labels_fd"},[s("v-uni-view",{staticClass:"labels"},[t._v(t._s(t.getLangs("orderNumber"))+":"+t._s(e.orderno))]),s("v-uni-view",{staticClass:"labels"},[t._v(t._s(t.getLangs("handlingFee"))+":"+t._s(e.fee))]),s("v-uni-view",{staticClass:"labels"},[t._v(t._s(t.getLangs("buytime"))+":"+t._s(e.buytime))]),s("v-uni-view",{staticClass:"cancel",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.closeCommission(e.orderno)}}},[t._v(t._s(t.getLangs("revokeEntrust")))])],1)],1)})),1)],1)],1)],1)},r=[]},"522d":function(t,e,s){"use strict";var a=s("d647"),n=s.n(a);n.a},7596:function(t,e,s){"use strict";var a=s("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;s("2f62");var n=a(s("c5e2")),r=a(s("a937")),i=a(s("fcd3")),u=(a(s("dd30")),null),l={name:"ContractPositionRecord",mixins:[n.default,r.default,i.default],methods:{setTimer:function(){var t=this;u=setInterval((function(){t.getEntrustOrderHandler({type:1})}),3e3)},clearTimer:function(){clearInterval(u),u=null}},created:function(){var t=this;this.getEntrustOrderHandler({type:1}),this.setTimer(),this.$once("hook:destroyed",(function(){t.clearTimer()}))},destroyed:function(){}};e.default=l},7870:function(t,e,s){"use strict";var a=s("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(s("c5e2")),r=a(s("a937")),i=a(s("fcd3")),u=null,l={name:"ContractCommissionRecord",mixins:[n.default,r.default,i.default],data:function(){return{dataList:[]}},methods:{setTimer:function(){var t=this;u=setInterval((function(){t.getEntrustOrderHandler({type:0})}),1e3)},clearTimer:function(){clearInterval(u),u=null}},created:function(){var t=this;this.getEntrustOrderHandler({type:0}),this.setTimer(),this.$once("hook:destroyed",(function(){t.clearTimer()}))},destroyed:function(){}};e.default=l},a377:function(t,e,s){"use strict";s.r(e);var a=s("34e8"),n=s("c1c0");for(var r in n)"default"!==r&&function(t){s.d(e,t,(function(){return n[t]}))}(r);s("302b");var i,u=s("f0c5"),l=Object(u["a"])(n["default"],a["b"],a["c"],!1,null,"3206422e",null,!1,a["a"],i);e["default"]=l.exports},a736:function(t,e,s){"use strict";s.r(e);var a=s("5104"),n=s("e5f4");for(var r in n)"default"!==r&&function(t){s.d(e,t,(function(){return n[t]}))}(r);s("0ea5");var i,u=s("f0c5"),l=Object(u["a"])(n["default"],a["b"],a["c"],!1,null,"404ea280",null,!1,a["a"],i);e["default"]=l.exports},b534:function(t,e,s){var a=s("c83c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=s("4f06").default;n("185a22e0",a,!0,{sourceMap:!1,shadowMode:!1})},b6fa:function(t,e,s){"use strict";s.r(e);var a=s("d815"),n=s("deca");for(var r in n)"default"!==r&&function(t){s.d(e,t,(function(){return n[t]}))}(r);s("522d");var i,u=s("f0c5"),l=Object(u["a"])(n["default"],a["b"],a["c"],!1,null,"299dd250",null,!1,a["a"],i);e["default"]=l.exports},c1c0:function(t,e,s){"use strict";s.r(e);var a=s("7596"),n=s.n(a);for(var r in a)"default"!==r&&function(t){s.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},c83c:function(t,e,s){var a=s("24fb");e=a(!1),e.push([t.i,".contact_commission_class[data-v-404ea280]{height:calc(100% - %?80?%)}",""]),t.exports=e},c969:function(t,e,s){"use strict";var a=s("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.revokeBbEntrust=e.getBbOrder=e.revokeEntrust=e.endContractOrder=e.getEntrustOrder=e.getHisOrderDetails=e.getQhHistoryOrder=e.getQhOrder=e.setEndProfit=e.getOrderDetails=e.revokePay=e.getHistoryOrder=e.getBonds=e.getPay=e.getWithdrawal=void 0;var n=a(s("dbab")),r=(a(s("4328")),function(t){return(0,n.default)({url:"/user/getWithdrawal",method:"get",data:t})});e.getWithdrawal=r;var i=function(t){return(0,n.default)({url:"/user/getPay",method:"get",data:t})};e.getPay=i;var u=function(t){return(0,n.default)({url:"/user/getBonds",method:"get",data:t})};e.getBonds=u;var l=function(t){return(0,n.default)({url:"/user/getHistoryOrder",method:"get",data:t})};e.getHistoryOrder=l;var c=function(t){return(0,n.default)({url:"/user/revokePay",method:"get",data:t})};e.revokePay=c;var o=function(t){return(0,n.default)({url:"/user/getOrderDetails",method:"get",data:t})};e.getOrderDetails=o;var v=function(t){return(0,n.default)({url:"/user/setEndProfit",method:"post",data:t})};e.setEndProfit=v;var d=function(t){return(0,n.default)({url:"/user/getQhOrder",method:"get",data:t})};e.getQhOrder=d;var f=function(t){return(0,n.default)({url:"/user/getQhHisOrder",method:"get",data:t})};e.getQhHistoryOrder=f;var g=function(t){return(0,n.default)({url:"/user/getHisOrderDetails",method:"get",data:t})};e.getHisOrderDetails=g;var _=function(t){return(0,n.default)({url:"/user/getEntrustOrder",method:"get",data:t})};e.getEntrustOrder=_;var w=function(t){return(0,n.default)({url:"/user/endContractOrder",method:"get",data:t})};e.endContractOrder=w;var p=function(t){return(0,n.default)({url:"/user/revokeEntrust",method:"get",data:t})};e.revokeEntrust=p;var C=function(t){return(0,n.default)({url:"/user/getBbOrder",method:"get",data:t})};e.getBbOrder=C;var b=function(t){return(0,n.default)({url:"/user/revokeBbEntrust",method:"get",data:t})};e.revokeBbEntrust=b},d647:function(t,e,s){var a=s("2883");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=s("4f06").default;n("686769bd",a,!0,{sourceMap:!1,shadowMode:!1})},d815:function(t,e,s){"use strict";var a;s.d(e,"b",(function(){return n})),s.d(e,"c",(function(){return r})),s.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-uni-view",{staticClass:"history_record_class"},[s("v-uni-view",{staticClass:"record_class"},[s("v-uni-view",{staticClass:"record_main common"},[0===t.dataList.length?s("v-uni-view",{staticClass:"no_data"},[t._v(t._s(t.getLangs("noData")))]):s("v-uni-scroll-view",{staticClass:"scroll",attrs:{"scroll-y":!0}},t._l(t.dataList,(function(e,a){return s("v-uni-view",{key:a,staticClass:"record_label"},[s("v-uni-view",{staticClass:"label_title"},[s("v-uni-view",{staticClass:"label_name"},[t._v(t._s(0==e.paytype?t.getLangs("marketOrder"):t.getLangs("limitOrder"))),s("v-uni-text",{staticClass:"ptitle"},[t._v(t._s(e.ptitle)+" / USDT")]),s("v-uni-text",{class:["action",0==e.otype?"green":"order"]},[t._v(t._s(0==e.otype?t.getLangs("tradep3"):t.getLangs("tradep4")))]),s("v-uni-text",{staticClass:"status deal"},[t._v(t._s(t.getLangs("deal")))])],1)],1),s("v-uni-view",{staticClass:"labels_main_normal"},[s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("quantity")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.onumber))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("purchasePrice")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.buyprice))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("closePrice")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.sellprice?e.sellprice:"-"))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("profitAndLoss")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.loss?e.loss:"-"))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("lever")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.unit)+"X")])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("loss")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(0==e.endloss?"-":e.endloss))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("profit")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(0==e.endprofit?"-":e.endprofit))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("margin")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.price))])],1)],1),s("v-uni-view",{staticClass:"labels_fd"},[s("v-uni-view",{staticClass:"labels"},[t._v(t._s(t.getLangs("orderNumber"))+":"+t._s(e.orderno))]),s("v-uni-view",{staticClass:"labels"},[t._v(t._s(t.getLangs("handlingFee"))+":"+t._s(e.fee))]),s("v-uni-view",{staticClass:"labels"},[t._v(t._s(t.getLangs("buytime"))+":"+t._s(e.buytime))])],1)],1)})),1)],1)],1)],1)},r=[]},deca:function(t,e,s){"use strict";s.r(e);var a=s("34d3"),n=s.n(a);for(var r in a)"default"!==r&&function(t){s.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},e31c:function(t,e,s){var a=s("f48d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=s("4f06").default;n("dfe97440",a,!0,{sourceMap:!1,shadowMode:!1})},e5f4:function(t,e,s){"use strict";s.r(e);var a=s("7870"),n=s.n(a);for(var r in a)"default"!==r&&function(t){s.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},f48d:function(t,e,s){var a=s("24fb");e=a(!1),e.push([t.i,".commission_record_class[data-v-3206422e]{height:calc(100% - %?80?%)}",""]),t.exports=e},fcd3:function(t,e,s){"use strict";var a=s("4ea4");s("d3b7"),s("ac1f"),s("25f0"),s("5319"),s("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,s("96cf");var n=a(s("1da1")),r=s("c969"),i=a(s("78d5")),u={data:function(){return{dataList:[]}},methods:{getEntrustOrderHandler:function(t){var e=this;return(0,n.default)(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,(0,r.getEntrustOrder)(t);case 2:a=s.sent,e.dataList=a.data;case 4:case"end":return s.stop()}}),s)})))()},closeContact:function(t){var e=this;return(0,n.default)(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:e.$tips.showModel(e.getLangs("sysTips"),e.getLangs("confirmClose"),e.getLangs("cancel"),e.getLangs("confirm"),function(){var s=(0,n.default)(regeneratorRuntime.mark((function s(a){var n,u;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(!a.confirm){s.next=7;break}return n={orderNo:t},s.next=4,(0,r.endContractOrder)(n);case 4:u=s.sent,i.default.checkCode(u)&&e.getEntrustOrderHandler({type:1}),e.backTips(u);case 7:case"end":return s.stop()}}),s)})));return function(t){return s.apply(this,arguments)}}());case 1:case"end":return s.stop()}}),s)})))()},closeCommission:function(t){var e=this;return(0,n.default)(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:e.$tips.showModel(e.getLangs("sysTips"),e.getLangs("revokeTips"),e.getLangs("cancel"),e.getLangs("confirm"),function(){var s=(0,n.default)(regeneratorRuntime.mark((function s(a){var n,u;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(!a.confirm){s.next=7;break}return n={orderNo:t},s.next=4,(0,r.revokeEntrust)(n);case 4:u=s.sent,i.default.checkCode(u)&&e.getEntrustOrderHandler({type:0}),e.backTips(u);case 7:case"end":return s.stop()}}),s)})));return function(t){return s.apply(this,arguments)}}());case 1:case"end":return s.stop()}}),s)})))()},getHistoryOrderHandler:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,r.getQhHistoryOrder)();case 2:s=e.sent,t.dataList=s.data;case 4:case"end":return e.stop()}}),e)})))()},getContractHistoryOrderHandler:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,r.getHistoryOrder)();case 2:s=e.sent,t.dataList=s.data;case 4:case"end":return e.stop()}}),e)})))()},getFuturesPositionHandler:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,r.getQhOrder)();case 2:s=e.sent,i.default.checkCode(s)&&(t.dataList=s.data);case 4:case"end":return e.stop()}}),e)})))()},getCoinHandler:function(t){var e=this;return(0,n.default)(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,(0,r.getBbOrder)({type:t});case 2:a=s.sent,i.default.checkCode(a)&&(e.dataList=a.data);case 4:case"end":return s.stop()}}),s)})))()},revokeBbHandler:function(t){var e=this;return(0,n.default)(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:e.$tips.showModel(e.getLangs("sysTips"),e.getLangs("revokeTips"),e.getLangs("cancel"),e.getLangs("confirm"),function(){var s=(0,n.default)(regeneratorRuntime.mark((function s(a){var n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(!a.confirm){s.next=7;break}return{orderNo:t},s.next=4,(0,r.revokeBbEntrust)({orderNo:t});case 4:n=s.sent,i.default.checkCode(n)&&e.getCoinHandler(0),e.backTips(n);case 7:case"end":return s.stop()}}),s)})));return function(t){return s.apply(this,arguments)}}());case 1:case"end":return s.stop()}}),s)})))()},toTime:function(t){var e=t.substring(5,t.length-1);e=e.replace("-","/");var s=e.split(" "),a=s[1].toString(),n=s[0].toString();return a.substring(0,a.length-2)+" "+n}}},l=u;e.default=l}}]);