(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-index"],{"094bd":function(t,e,s){var a=s("6fe9");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=s("4f06").default;i("156894a5",a,!0,{sourceMap:!1,shadowMode:!1})},"209a":function(t,e,s){"use strict";var a=s("094bd"),i=s.n(a);i.a},2469:function(t,e,s){"use strict";var a;s.d(e,"b",(function(){return i})),s.d(e,"c",(function(){return n})),s.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-uni-view",{staticClass:"record_class"},[s("v-uni-view",{staticClass:"record_main futures_record"},[0===t.dataList.length?s("v-uni-view",{staticClass:"no_data"},[t._v(t._s(t.getLangs("noData")))]):s("v-uni-scroll-view",{staticClass:"scroll",attrs:{"scroll-y":!0}},t._l(t.dataList,(function(e,a){return s("v-uni-view",{key:a,staticClass:"record_label"},[s("v-uni-view",{staticClass:"label_title"},[s("v-uni-view",{staticClass:"label_name"},[t._v(t._s(e.ptitle)+" / USDT"),s("v-uni-text",{staticClass:"date"},[t._v(t._s(e.buytime))])],1)],1),s("v-uni-view",{staticClass:"labels_main"},[s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("actionText")))]),s("v-uni-view",{class:["value",0==e.otype?"green":"red"]},[t._v(t._s(0==e.otype?t.getLangs("tradep1"):t.getLangs("tradep2")))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("purchaseQuantity")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.price))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("purchasePrice")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.buyprice))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("sellPrice")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.sellprice))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("cutttime")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(t.getCutttime(e.cutttime)))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("profitAndLoss")))]),s("v-uni-view",{class:["value",e.loss>0?"green":"red"]},[t._v(t._s(e.loss>0?"+"+e.loss:e.loss))])],1)],1)],1)})),1)],1)],1)},n=[]},"25da":function(t,e,s){var a=s("24fb");e=a(!1),e.push([t.i,".date[data-v-10c8bb91]{font-size:%?24?%;text-align:right;position:absolute;right:%?20?%;color:#555}.value[data-v-10c8bb91]{color:#333!important}",""]),t.exports=e},"266f":function(t,e,s){var a=s("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-f20e2496]{background:#f9f9f9}.main_class[data-v-f20e2496]{padding:0;height:100%}.table_menu[data-v-f20e2496]{width:100%;border-top:1px solid #eee;border-bottom:1px solid #eee;background:#fff;margin-bottom:%?40?%}.record_menu[data-v-f20e2496]{margin:auto;display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:%?20?%;padding:0 %?20?%}.record_menu .label[data-v-f20e2496]{width:50%;text-align:center;font-size:%?28?%;line-height:%?60?%;color:#333}.record_menu .label.on[data-v-f20e2496]{background:#2970e6;-webkit-border-radius:%?10?%;border-radius:%?10?%;color:#fff}.futures_menu[data-v-f20e2496],\n.contract_menu[data-v-f20e2496]{width:70%}.table_main[data-v-f20e2496]{height:calc(100% - %?126?%)}.content[data-v-f20e2496]{height:100%}.record_class[data-v-f20e2496]{height:calc(100% - %?80?%)!important;overflow:auto!important}body.?%PAGE?%[data-v-f20e2496]{background:#f9f9f9}",""]),t.exports=e},"2b98":function(t,e,s){var a=s("24fb");e=a(!1),e.push([t.i,".contact_commission_class[data-v-7bd1ed55]{height:calc(100% - %?80?%)}",""]),t.exports=e},"33ae":function(t,e,s){"use strict";s.r(e);var a=s("bf98"),i=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(e,t,(function(){return a[t]}))}(n);e["default"]=i.a},3755:function(t,e,s){"use strict";var a=s("9020"),i=s.n(a);i.a},"38e3":function(t,e,s){"use strict";var a;s.d(e,"b",(function(){return i})),s.d(e,"c",(function(){return n})),s.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-uni-view",{class:["main_class",t.createOSClass]},[s("v-uni-view",{staticClass:"table_class"},[s("v-uni-view",{staticClass:"table_menu"},t._l(t.menuList,(function(e,a){return s("v-uni-view",{key:a,class:["menu_label",t.menuIndex===a?"on":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickChangeMenu(a)}}},[t._v(t._s(t.getLangs(e.name))),s("v-uni-view",{staticClass:"line"})],1)})),1),s("v-uni-view",{class:["table_main",t.createOSClass]},[0===t.menuIndex?s("v-uni-view",{staticClass:"content"},[s("v-uni-view",{staticClass:"record_menu futures_menu"},t._l(t.futures.menuList,(function(e,a){return s("v-uni-view",{key:a,class:["label",a===t.futures.active?"on":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeFuturesType(a)}}},[t._v(t._s(t.getLangs(e)))])})),1),0===t.futures.active?s("FuturesPositionRecord",{attrs:{keys:t.getKey}}):t._e(),1===t.futures.active?s("FuturesHistoryRecord"):t._e()],1):t._e(),1===t.menuIndex?s("v-uni-view",{staticClass:"content"},[s("v-uni-view",{staticClass:"record_menu contract_menu"},t._l(t.contract.menuList,(function(e,a){return s("v-uni-view",{key:a,class:["label",a===t.contract.active?"on":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeContractType(a)}}},[t._v(t._s(t.getLangs(e)))])})),1),0===t.contract.active?s("ContractCommissionRecord"):t._e(),1===t.contract.active?s("ContractPositionRecord"):t._e(),2===t.contract.active?s("ContractHistoryRecord"):t._e()],1):t._e(),2===t.menuIndex?s("v-uni-view",{staticClass:"content"},[s("v-uni-view",{staticClass:"record_menu contract_menu"},t._l(t.coin.menuList,(function(e,a){return s("v-uni-view",{key:a,class:["label",a===t.coin.active?"on":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeCoinType(a)}}},[t._v(t._s(t.getLangs(e)))])})),1),0===t.coin.active?s("CoinPositionRecord",{attrs:{keys:t.getKey}}):t._e(),1===t.coin.active?s("CoinHistoryRecord"):t._e()],1):t._e()],1)],1)],1)},n=[]},"3b14":function(t,e,s){"use strict";var a;s.d(e,"b",(function(){return i})),s.d(e,"c",(function(){return n})),s.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-uni-view",{staticClass:"record_class"},[s("v-uni-view",{staticClass:"record_main futures_record"},[0===t.dataList.length?s("v-uni-view",{staticClass:"no_data"},[t._v(t._s(t.getLangs("noData")))]):s("v-uni-scroll-view",{staticClass:"scroll",attrs:{"scroll-y":!0}},t._l(t.dataList,(function(e,a){return s("v-uni-view",{key:a,staticClass:"record_label"},[s("v-uni-view",{staticClass:"label_title"},[s("v-uni-view",{staticClass:"label_name"},[t._v(t._s(e.ptitle)+" / USDT")])],1),s("v-uni-view",{staticClass:"labels_main"},[s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("actionText")))]),s("v-uni-view",{class:["value",0==e.otype?"green":"red"]},[t._v(t._s(0==e.otype?t.getLangs("tradep1"):t.getLangs("tradep2")))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("purchaseQuantity")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.price))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("purchasePrice")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.buyprice))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("latestPrice")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(t.getClose(e.ptitle)))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("cutttime")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(t.getCutttime(e.cutttime)))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("expectedEarnings")))]),s("v-uni-view",{class:["value",e.loss>0?"green":"red"]},[t._v(t._s(e.loss>0?"+"+e.loss:e.loss))])],1)],1),s("v-uni-view",{staticClass:"count_down_bar"},[t._v(t._s(t.getLangs("countDown"))+":\n\t\t\t\t\t"+t._s(t.toCountDownText(e.stime)))])],1)})),1)],1)],1)},n=[]},"40aa":function(t,e,s){"use strict";s.r(e);var a=s("38e3"),i=s("be37");for(var n in i)"default"!==n&&function(t){s.d(e,t,(function(){return i[t]}))}(n);s("bddc");var c,l=s("f0c5"),u=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"f20e2496",null,!1,a["a"],c);e["default"]=u.exports},"470e":function(t,e,s){"use strict";s.r(e);var a=s("fa92"),i=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(e,t,(function(){return a[t]}))}(n);e["default"]=i.a},"4c46":function(t,e,s){"use strict";s.r(e);var a=s("3b14"),i=s("33ae");for(var n in i)"default"!==n&&function(t){s.d(e,t,(function(){return i[t]}))}(n);s("209a");var c,l=s("f0c5"),u=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"c2c7b9d6",null,!1,a["a"],c);e["default"]=u.exports},5002:function(t,e,s){"use strict";var a=s("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;s("2f62");var i=a(s("361e")),n=a(s("ca32")),c=a(s("53fc")),l=(s("ee30"),{name:"ContractHistoryRecord",mixins:[i.default,n.default,c.default],created:function(){this.getContractHistoryOrderHandler()}});e.default=l},"5b75":function(t,e,s){"use strict";var a=s("d9d3"),i=s.n(a);i.a},"66b0":function(t,e,s){var a=s("25da");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=s("4f06").default;i("4e9cd8a9",a,!0,{sourceMap:!1,shadowMode:!1})},"6fe9":function(t,e,s){var a=s("24fb");e=a(!1),e.push([t.i,".date[data-v-c2c7b9d6]{font-size:%?24?%;text-align:right;position:absolute;right:%?20?%;color:#555}.label_fd[data-v-c2c7b9d6]{background:#fff!important}.label_fd .time[data-v-c2c7b9d6]{font-size:%?30?%}.status[data-v-c2c7b9d6]{width:%?160?%!important;background:none!important;border:1px solid #f66464;color:#f66464!important}.futures_record .count_down_bar[data-v-c2c7b9d6]{border-top:1px solid hsla(0,0%,100%,.1)}",""]),t.exports=e},"719e":function(t,e,s){"use strict";var a;s.d(e,"b",(function(){return i})),s.d(e,"c",(function(){return n})),s.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-uni-view",{staticClass:"record_class"},[s("v-uni-view",{staticClass:"record_main"},[0===t.dataList.length?s("v-uni-view",{staticClass:"no_data"},[t._v(t._s(t.getLangs("noData")))]):s("v-uni-scroll-view",{staticClass:"scroll",attrs:{"scroll-y":!0}},t._l(t.dataList,(function(e,a){return s("v-uni-view",{key:a,staticClass:"record_label"},[s("v-uni-view",{staticClass:"label_title"},[s("v-uni-view",{staticClass:"label_name"},[s("v-uni-text",{class:["action",0==e.otype?"green":"red"]},[t._v(t._s(0==e.otype?t.getLangs("buy"):t.getLangs("sell")))]),t._v(t._s(e.ptitle)+" / USDT")],1)],1),s("v-uni-view",{staticClass:"labels_main"},[s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("timeText")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(t.toTime(e.buytime)))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("commissionPrice"))+"(USDT)")]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(Number(e.buyprice).toFixed(4)))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("commissionNums"))+"("+t._s(e.ptitle)+")")]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(Number(e.onumber).toFixed(4)))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("totalPrice"))+"(USDT)")]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(Number(e.price).toFixed(4)))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("tradeAvg"))+"(USDT)")]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(Number(e.avgprice).toFixed(4)))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("tradeNums"))+"("+t._s(e.ptitle)+")")]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(Number(e.snumber).toFixed(4)))])],1)],1)],1)})),1)],1)],1)},n=[]},7654:function(t,e,s){"use strict";var a=s("4ea4");s("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;s("2f62");var i=a(s("361e")),n=a(s("ca32")),c=a(s("53fc")),l={name:"HistoryRecord",mixins:[i.default,n.default,c.default],methods:{getCutttime:function(t){return Number(t)>999?Number(t)/3600+this.getLangs("hour"):t+this.getLangs("second")}},created:function(){this.getHistoryOrderHandler()}};e.default=l},"80cf":function(t,e,s){"use strict";var a=s("981c"),i=s.n(a);i.a},8158:function(t,e,s){"use strict";var a;s.d(e,"b",(function(){return i})),s.d(e,"c",(function(){return n})),s.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-uni-view",{staticClass:"commission_record_class"},[s("v-uni-view",{staticClass:"record_class"},[s("v-uni-view",{staticClass:"record_main common"},[0===t.dataList.length?s("v-uni-view",{staticClass:"no_data"},[t._v(t._s(t.getLangs("noData")))]):s("v-uni-scroll-view",{staticClass:"scroll",attrs:{"scroll-y":!0}},t._l(t.dataList,(function(e,a){return s("v-uni-view",{key:a,staticClass:"record_label"},[s("v-uni-view",{staticClass:"label_title"},[s("v-uni-view",{staticClass:"label_name"},[t._v(t._s(0==e.paytype?t.getLangs("marketOrder"):t.getLangs("limitOrder"))),s("v-uni-text",{staticClass:"ptitle"},[t._v(t._s(e.ptitle)+" / USDT")]),s("v-uni-text",{class:["action",0==e.otype?"green":"red"]},[t._v(t._s(0==e.otype?t.getLangs("tradep3"):t.getLangs("tradep4")))]),s("v-uni-text",{staticClass:"status"},[t._v(t._s(t.getLangs("positioning")))])],1)],1),s("v-uni-view",{staticClass:"labels_main_normal"},[s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("quantity")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.onumber))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("purchasePrice")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.buyprice))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("closePrice")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.nowPrice))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("profitAndLoss")))]),s("v-uni-view",{class:["value",e.loss>0?"green":"red"]},[t._v(t._s(e.loss))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("lever")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.unit)+"X")])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("loss")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(0==e.endloss?"-":e.endloss))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("profit")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(0==e.endprofit?"-":e.endprofit))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("margin")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.price))])],1)],1),s("v-uni-view",{staticClass:"labels_fd"},[s("v-uni-view",{staticClass:"labels"},[t._v(t._s(t.getLangs("orderNumber"))+":"+t._s(e.orderno))]),s("v-uni-view",{staticClass:"labels"},[t._v(t._s(t.getLangs("handlingFee"))+":"+t._s(e.fee))]),s("v-uni-view",{staticClass:"labels"},[t._v(t._s(t.getLangs("buytime"))+":"+t._s(e.buytime))]),s("v-uni-view",{staticClass:"cancel",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.closeContact(e.orderno)}}},[t._v(t._s(t.getLangs("mClose")))])],1)],1)})),1)],1)],1)],1)},n=[]},"85c0":function(t,e,s){"use strict";s.r(e);var a=s("2469"),i=s("ba42");for(var n in i)"default"!==n&&function(t){s.d(e,t,(function(){return i[t]}))}(n);s("80cf");var c,l=s("f0c5"),u=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"006345c0",null,!1,a["a"],c);e["default"]=u.exports},"86da":function(t,e,s){"use strict";s.r(e);var a=s("d4ac"),i=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(e,t,(function(){return a[t]}))}(n);e["default"]=i.a},"87da":function(t,e,s){"use strict";s.r(e);var a=s("8158"),i=s("86da");for(var n in i)"default"!==n&&function(t){s.d(e,t,(function(){return i[t]}))}(n);s("5b75");var c,l=s("f0c5"),u=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"f94c8246",null,!1,a["a"],c);e["default"]=u.exports},"8a08":function(t,e,s){var a=s("24fb");e=a(!1),e.push([t.i,".commission_record_class[data-v-f94c8246]{height:calc(100% - %?80?%)}",""]),t.exports=e},9020:function(t,e,s){var a=s("2b98");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=s("4f06").default;i("37535758",a,!0,{sourceMap:!1,shadowMode:!1})},"90e9":function(t,e,s){"use strict";s.r(e);var a=s("5002"),i=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(e,t,(function(){return a[t]}))}(n);e["default"]=i.a},9162:function(t,e,s){"use strict";s.r(e);var a=s("98e0"),i=s("470e");for(var n in i)"default"!==n&&function(t){s.d(e,t,(function(){return i[t]}))}(n);s("3755");var c,l=s("f0c5"),u=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"7bd1ed55",null,!1,a["a"],c);e["default"]=u.exports},9262:function(t,e,s){"use strict";s.r(e);var a=s("719e"),i=s("e6b7");for(var n in i)"default"!==n&&function(t){s.d(e,t,(function(){return i[t]}))}(n);s("b094");var c,l=s("f0c5"),u=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"10c8bb91",null,!1,a["a"],c);e["default"]=u.exports},"96d8":function(t,e,s){"use strict";s.r(e);var a=s("c563"),i=s("90e9");for(var n in i)"default"!==n&&function(t){s.d(e,t,(function(){return i[t]}))}(n);s("f161");var c,l=s("f0c5"),u=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"f6ecb262",null,!1,a["a"],c);e["default"]=u.exports},9792:function(t,e,s){var a=s("24fb");e=a(!1),e.push([t.i,".date[data-v-006345c0]{font-size:%?24?%;text-align:right;position:absolute;right:%?20?%;color:#555}",""]),t.exports=e},"981c":function(t,e,s){var a=s("9792");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=s("4f06").default;i("5782ab4c",a,!0,{sourceMap:!1,shadowMode:!1})},"98e0":function(t,e,s){"use strict";var a;s.d(e,"b",(function(){return i})),s.d(e,"c",(function(){return n})),s.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-uni-view",{staticClass:"contact_commission_class"},[s("v-uni-view",{staticClass:"record_class"},[s("v-uni-view",{staticClass:"record_main common"},[0===t.dataList.length?s("v-uni-view",{staticClass:"no_data"},[t._v(t._s(t.getLangs("noData")))]):s("v-uni-scroll-view",{staticClass:"scroll",attrs:{"scroll-y":!0}},t._l(t.dataList,(function(e,a){return s("v-uni-view",{key:a,staticClass:"record_label"},[s("v-uni-view",{staticClass:"label_title"},[s("v-uni-view",{staticClass:"label_name"},[t._v(t._s(0==e.paytype?t.getLangs("marketOrder"):t.getLangs("limitOrder"))),s("v-uni-text",{staticClass:"ptitle"},[t._v(t._s(e.ptitle)+" / USDT")]),s("v-uni-text",{class:["action",0==e.otype?"green":"color"]},[t._v(t._s(0==e.otype?t.getLangs("tradep3"):t.getLangs("tradep4")))]),s("v-uni-text",{staticClass:"status"},[t._v(t._s(t.getLangs("commission")))])],1)],1),s("v-uni-view",{staticClass:"labels_main_normal"},[s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("quantity")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.onumber))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("purchasePrice")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.buyprice))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("latestPrice")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.nowPrice))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("profitAndLoss")))]),s("v-uni-view",{class:["value",e.loss>0?"green":"red"]},[t._v(t._s(e.loss))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("lever")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.unit)+"X")])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("loss")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(0==e.endloss?"-":e.endloss))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("profit")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(0==e.endprofit?"-":e.endprofit))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("margin")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.price))])],1)],1),s("v-uni-view",{staticClass:"labels_fd"},[s("v-uni-view",{staticClass:"labels"},[t._v(t._s(t.getLangs("orderNumber"))+":"+t._s(e.orderno))]),s("v-uni-view",{staticClass:"labels"},[t._v(t._s(t.getLangs("handlingFee"))+":"+t._s(e.fee))]),s("v-uni-view",{staticClass:"labels"},[t._v(t._s(t.getLangs("buytime"))+":"+t._s(e.buytime))]),s("v-uni-view",{staticClass:"cancel",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.closeCommission(e.orderno)}}},[t._v(t._s(t.getLangs("revokeEntrust")))])],1)],1)})),1)],1)],1)],1)},n=[]},b094:function(t,e,s){"use strict";var a=s("66b0"),i=s.n(a);i.a},ba42:function(t,e,s){"use strict";s.r(e);var a=s("7654"),i=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(e,t,(function(){return a[t]}))}(n);e["default"]=i.a},bddc:function(t,e,s){"use strict";var a=s("c376"),i=s.n(a);i.a},be37:function(t,e,s){"use strict";s.r(e);var a=s("d9f2"),i=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(e,t,(function(){return a[t]}))}(n);e["default"]=i.a},bf98:function(t,e,s){"use strict";var a=s("4ea4");s("4de4"),s("a9e3"),s("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;s("2f62");var i=a(s("361e")),n=a(s("ca32")),c=a(s("53fc")),l=a(s("51c3")),u=a(s("b3c8")),r=(a(s("2838")),{name:"FuturesPositionRecord",mixins:[i.default,n.default,c.default,l.default,u.default],props:["keys"],data:function(){return{countDownList:{},timer:null,timer2:null}},methods:{getCutttime:function(t){return Number(t)>999?Number(t)/3600+this.getLangs("hour"):t+this.getLangs("second")},setTimer:function(){var t=this;this.timer=setInterval((function(){for(var e in t.dataList)t.dataList[e].stime--,0===t.dataList[e].stime&&t.init()}),1e3)},setTimer2:function(){var t=this;this.timer2=setInterval((function(){t.getFuturesPositionHandler(0)}),5e3)},clearTimer:function(){clearInterval(this.timer),clearInterval(this.timer2),this.timer=null,this.timer2=null},init:function(){var t=this;this.clearTimer(),this.getFuturesPositionHandler(0),this.setTimer(),this.setTimer2(),this.$once("hook:destroyed",(function(){t.clearTimer()}))},toCountDownText:function(t){if(t<999)return t;var e=parseInt(t),s=0,a=0;e>60&&(s=parseInt(e/60),e=parseInt(e%60),s>60&&(a=parseInt(s/60),s=parseInt(s%60)));var i=(parseInt(e)>9?parseInt(e):"0"+parseInt(e))+"秒";return s>0&&(i=parseInt(s)+"分"+i),a>0&&(i=parseInt(a)+"小时"+i),i}},computed:{getClose:function(){var t=this;return function(e){if(!t.getWSData.length)return 0;var s=t.getWSData.filter((function(t){return t.name==e}))[0];return s.close}}},destroyed:function(){this.clearTimer()},created:function(){this.init(),console.log("..")}});e.default=r},c00b:function(t,e,s){var a=s("24fb");e=a(!1),e.push([t.i,".history_record_class[data-v-f6ecb262]{height:calc(100% - %?80?%)}.deal[data-v-f6ecb262]{background:#1faa93!important}",""]),t.exports=e},c376:function(t,e,s){var a=s("266f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=s("4f06").default;i("67afce80",a,!0,{sourceMap:!1,shadowMode:!1})},c563:function(t,e,s){"use strict";var a;s.d(e,"b",(function(){return i})),s.d(e,"c",(function(){return n})),s.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-uni-view",{staticClass:"history_record_class"},[s("v-uni-view",{staticClass:"record_class"},[s("v-uni-view",{staticClass:"record_main common"},[0===t.dataList.length?s("v-uni-view",{staticClass:"no_data"},[t._v(t._s(t.getLangs("noData")))]):s("v-uni-scroll-view",{staticClass:"scroll",attrs:{"scroll-y":!0}},t._l(t.dataList,(function(e,a){return s("v-uni-view",{key:a,staticClass:"record_label"},[s("v-uni-view",{staticClass:"label_title"},[s("v-uni-view",{staticClass:"label_name"},[t._v(t._s(0==e.paytype?t.getLangs("marketOrder"):t.getLangs("limitOrder"))),s("v-uni-text",{staticClass:"ptitle"},[t._v(t._s(e.ptitle)+" / USDT")]),s("v-uni-text",{class:["action",0==e.otype?"green":"order"]},[t._v(t._s(0==e.otype?t.getLangs("tradep3"):t.getLangs("tradep4")))]),s("v-uni-text",{staticClass:"status deal"},[t._v(t._s(t.getLangs("deal")))])],1)],1),s("v-uni-view",{staticClass:"labels_main_normal"},[s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("quantity")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.onumber))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("purchasePrice")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.buyprice))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("closePrice")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.sellprice?e.sellprice:"-"))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("profitAndLoss")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.loss?e.loss:"-"))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("lever")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.unit)+"X")])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("loss")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(0==e.endloss?"-":e.endloss))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("profit")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(0==e.endprofit?"-":e.endprofit))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("margin")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.price))])],1)],1),s("v-uni-view",{staticClass:"labels_fd"},[s("v-uni-view",{staticClass:"labels"},[t._v(t._s(t.getLangs("orderNumber"))+":"+t._s(e.orderno))]),s("v-uni-view",{staticClass:"labels"},[t._v(t._s(t.getLangs("handlingFee"))+":"+t._s(e.fee))]),s("v-uni-view",{staticClass:"labels"},[t._v(t._s(t.getLangs("buytime"))+":"+t._s(e.buytime))])],1)],1)})),1)],1)],1)],1)},n=[]},cdeb:function(t,e,s){var a=s("c00b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=s("4f06").default;i("7898a959",a,!0,{sourceMap:!1,shadowMode:!1})},d4ac:function(t,e,s){"use strict";var a=s("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;s("2f62");var i=a(s("361e")),n=a(s("ca32")),c=a(s("53fc")),l=(a(s("51c3")),null),u={name:"ContractPositionRecord",mixins:[i.default,n.default,c.default],methods:{setTimer:function(){var t=this;l=setInterval((function(){t.getEntrustOrderHandler({type:1})}),3e3)},clearTimer:function(){clearInterval(l),l=null}},created:function(){var t=this;this.getEntrustOrderHandler({type:1}),this.setTimer(),this.$once("hook:destroyed",(function(){t.clearTimer()}))},destroyed:function(){}};e.default=u},d9d3:function(t,e,s){var a=s("8a08");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=s("4f06").default;i("1abe4382",a,!0,{sourceMap:!1,shadowMode:!1})},d9f2:function(t,e,s){"use strict";var a=s("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,n=a(s("ade3")),c=(s("2f62"),a(s("361e"))),l=a(s("ca32")),u=(a(s("250a")),a(s("4c46"))),r=a(s("85c0")),v=a(s("9162")),o=a(s("96d8")),d=a(s("87da")),_=a(s("b1f4")),f=a(s("9262")),b=(i={name:"Fund",mixins:[c.default,l.default],data:function(){return{key:""}},components:{FuturesPositionRecord:u.default,FuturesHistoryRecord:r.default,ContractCommissionRecord:v.default,ContractHistoryRecord:o.default,ContractPositionRecord:d.default,CoinPositionRecord:_.default,CoinHistoryRecord:f.default}},(0,n.default)(i,"data",(function(){return{menuList:[{name:"futuresText"},{name:"contractText"},{name:"coinText"}],menuIndex:0,futures:{menuList:["position","history"],active:0},contract:{menuList:["commission","position","history"],active:0},coin:{menuList:["entrust","history"],active:0}}})),(0,n.default)(i,"computed",{getKey:function(){return this.key}}),(0,n.default)(i,"methods",{clickChangeMenu:function(t){this.menuIndex=t,0==t&&(this.contract.active=this.coin.active=0),1==t&&(this.futures.active=this.coin.active=0),2==t&&(this.futures.active=this.contract.active=0)},changeMenuBar:function(t){this.menuIndex=t.detail.current},changeFuturesType:function(t){this.futures.active=t},changeContractType:function(t){this.contract.active=t},changeCoinType:function(t){this.coin.active=t}}),(0,n.default)(i,"onLoad",(function(){this.futures.active=0})),(0,n.default)(i,"onShow",(function(){this.setTitle(this.getLangs("order")),this.futures.active=0})),i);e.default=b},e6b7:function(t,e,s){"use strict";s.r(e);var a=s("fb1e"),i=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(e,t,(function(){return a[t]}))}(n);e["default"]=i.a},f161:function(t,e,s){"use strict";var a=s("cdeb"),i=s.n(a);i.a},fa92:function(t,e,s){"use strict";var a=s("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(s("361e")),n=a(s("ca32")),c=a(s("53fc")),l=null,u={name:"ContractCommissionRecord",mixins:[i.default,n.default,c.default],data:function(){return{dataList:[]}},methods:{setTimer:function(){var t=this;l=setInterval((function(){t.getEntrustOrderHandler({type:0})}),1e3)},clearTimer:function(){clearInterval(l),l=null}},created:function(){var t=this;this.getEntrustOrderHandler({type:0}),this.setTimer(),this.$once("hook:destroyed",(function(){t.clearTimer()}))},destroyed:function(){}};e.default=u},fb1e:function(t,e,s){"use strict";var a=s("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;s("2f62");var i=a(s("361e")),n=a(s("ca32")),c=a(s("53fc")),l={name:"HistoryRecord",mixins:[i.default,n.default,c.default],created:function(){this.getCoinHandler(1)}};e.default=l}}]);