(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-index"],{"0145":function(t,e,s){var a=s("24fb");e=a(!1),e.push([t.i,".date[data-v-006345c0]{font-size:%?24?%;text-align:right;position:absolute;right:%?20?%;color:#555}",""]),t.exports=e},"024e":function(t,e,s){"use strict";s.r(e);var a=s("9ae8"),i=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(e,t,(function(){return a[t]}))}(n);e["default"]=i.a},"03e1":function(t,e,s){"use strict";s.r(e);var a=s("6ad9"),i=s("9179");for(var n in i)"default"!==n&&function(t){s.d(e,t,(function(){return i[t]}))}(n);s("2890");var c,l=s("f0c5"),u=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"006345c0",null,!1,a["a"],c);e["default"]=u.exports},"0403":function(t,e,s){var a=s("bc47");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=s("4f06").default;i("57019f18",a,!0,{sourceMap:!1,shadowMode:!1})},"04ef":function(t,e,s){"use strict";var a=s("0403"),i=s.n(a);i.a},"07b6":function(t,e,s){"use strict";s.r(e);var a=s("e97d"),i=s("024e");for(var n in i)"default"!==n&&function(t){s.d(e,t,(function(){return i[t]}))}(n);s("dbdc");var c,l=s("f0c5"),u=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"7bd1ed55",null,!1,a["a"],c);e["default"]=u.exports},"0ce2":function(t,e,s){"use strict";var a=s("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,n=a(s("ade3")),c=(s("2f62"),a(s("0af3"))),l=a(s("befb")),u=(a(s("933b")),a(s("8b4e"))),r=a(s("03e1")),v=a(s("07b6")),o=a(s("62b6")),d=a(s("8d01")),_=a(s("5688")),f=a(s("dce5")),b=(i={name:"Fund",mixins:[c.default,l.default],data:function(){return{key:""}},components:{FuturesPositionRecord:u.default,FuturesHistoryRecord:r.default,ContractCommissionRecord:v.default,ContractHistoryRecord:o.default,ContractPositionRecord:d.default,CoinPositionRecord:_.default,CoinHistoryRecord:f.default}},(0,n.default)(i,"data",(function(){return{menuList:[{name:"futuresText"},{name:"contractText"},{name:"coinText"}],menuIndex:0,futures:{menuList:["position","history"],active:0},contract:{menuList:["commission","position","history"],active:0},coin:{menuList:["entrust","history"],active:0}}})),(0,n.default)(i,"computed",{getKey:function(){return this.key}}),(0,n.default)(i,"methods",{clickChangeMenu:function(t){this.menuIndex=t,0==t&&(this.contract.active=this.coin.active=0),1==t&&(this.futures.active=this.coin.active=0),2==t&&(this.futures.active=this.contract.active=0)},changeMenuBar:function(t){this.menuIndex=t.detail.current},changeFuturesType:function(t){this.futures.active=t},changeContractType:function(t){this.contract.active=t},changeCoinType:function(t){this.coin.active=t}}),(0,n.default)(i,"onLoad",(function(){this.futures.active=0})),(0,n.default)(i,"onShow",(function(){this.setTitle(this.getLangs("order")),this.futures.active=0})),i);e.default=b},"12d3":function(t,e,s){"use strict";var a=s("cdf5"),i=s.n(a);i.a},1767:function(t,e,s){"use strict";s.r(e);var a=s("d10c"),i=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(e,t,(function(){return a[t]}))}(n);e["default"]=i.a},2788:function(t,e,s){"use strict";s.r(e);var a=s("fcb6"),i=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(e,t,(function(){return a[t]}))}(n);e["default"]=i.a},2890:function(t,e,s){"use strict";var a=s("a162"),i=s.n(a);i.a},4056:function(t,e,s){"use strict";var a=s("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;s("2f62");var i=a(s("0af3")),n=a(s("befb")),c=a(s("8400")),l=(s("505c"),{name:"ContractHistoryRecord",mixins:[i.default,n.default,c.default],created:function(){this.getContractHistoryOrderHandler()}});e.default=l},"44bc":function(t,e,s){"use strict";var a=s("bba8"),i=s.n(a);i.a},4911:function(t,e,s){"use strict";var a=s("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;s("2f62");var i=a(s("0af3")),n=a(s("befb")),c=a(s("8400")),l=(a(s("4c5b")),null),u={name:"ContractPositionRecord",mixins:[i.default,n.default,c.default],methods:{setTimer:function(){var t=this;l=setInterval((function(){t.getEntrustOrderHandler({type:1})}),3e3)},clearTimer:function(){clearInterval(l),l=null}},created:function(){var t=this;this.getEntrustOrderHandler({type:1}),this.setTimer(),this.$once("hook:destroyed",(function(){t.clearTimer()}))},destroyed:function(){}};e.default=u},"4d39":function(t,e,s){var a=s("24fb");e=a(!1),e.push([t.i,".date[data-v-5841cdc4]{font-size:%?24?%;text-align:right;position:absolute;right:%?20?%;color:#555}.value[data-v-5841cdc4]{color:#fff!important}",""]),t.exports=e},"4f068":function(t,e,s){var a=s("4d39");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=s("4f06").default;i("9081ac84",a,!0,{sourceMap:!1,shadowMode:!1})},"5e76":function(t,e,s){"use strict";s.r(e);var a=s("5e9f"),i=s("6217");for(var n in i)"default"!==n&&function(t){s.d(e,t,(function(){return i[t]}))}(n);s("852e");var c,l=s("f0c5"),u=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"89e5c920",null,!1,a["a"],c);e["default"]=u.exports},"5e9f":function(t,e,s){"use strict";var a;s.d(e,"b",(function(){return i})),s.d(e,"c",(function(){return n})),s.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-uni-view",{class:["main_class",t.createOSClass]},[s("v-uni-view",{staticClass:"table_class"},[s("v-uni-view",{staticClass:"table_menu"},t._l(t.menuList,(function(e,a){return s("v-uni-view",{key:a,class:["menu_label",t.menuIndex===a?"on":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickChangeMenu(a)}}},[t._v(t._s(t.getLangs(e.name))),s("v-uni-view",{staticClass:"line"})],1)})),1),s("v-uni-view",{class:["table_main",t.createOSClass]},[0===t.menuIndex?s("v-uni-view",{staticClass:"content"},[s("v-uni-view",{staticClass:"record_menu futures_menu"},t._l(t.futures.menuList,(function(e,a){return s("v-uni-view",{key:a,class:["label",a===t.futures.active?"on":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeFuturesType(a)}}},[t._v(t._s(t.getLangs(e)))])})),1),0===t.futures.active?s("FuturesPositionRecord",{attrs:{keys:t.getKey}}):t._e(),1===t.futures.active?s("FuturesHistoryRecord"):t._e()],1):t._e(),1===t.menuIndex?s("v-uni-view",{staticClass:"content"},[s("v-uni-view",{staticClass:"record_menu contract_menu"},t._l(t.contract.menuList,(function(e,a){return s("v-uni-view",{key:a,class:["label",a===t.contract.active?"on":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeContractType(a)}}},[t._v(t._s(t.getLangs(e)))])})),1),0===t.contract.active?s("ContractCommissionRecord"):t._e(),1===t.contract.active?s("ContractPositionRecord"):t._e(),2===t.contract.active?s("ContractHistoryRecord"):t._e()],1):t._e(),2===t.menuIndex?s("v-uni-view",{staticClass:"content"},[s("v-uni-view",{staticClass:"record_menu contract_menu"},t._l(t.coin.menuList,(function(e,a){return s("v-uni-view",{key:a,class:["label",a===t.coin.active?"on":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeCoinType(a)}}},[t._v(t._s(t.getLangs(e)))])})),1),0===t.coin.active?s("CoinPositionRecord",{attrs:{keys:t.getKey}}):t._e(),1===t.coin.active?s("CoinHistoryRecord"):t._e()],1):t._e()],1)],1)],1)},n=[]},6217:function(t,e,s){"use strict";s.r(e);var a=s("0ce2"),i=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(e,t,(function(){return a[t]}))}(n);e["default"]=i.a},"62b6":function(t,e,s){"use strict";s.r(e);var a=s("d4af"),i=s("efb4");for(var n in i)"default"!==n&&function(t){s.d(e,t,(function(){return i[t]}))}(n);s("12d3");var c,l=s("f0c5"),u=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"f6ecb262",null,!1,a["a"],c);e["default"]=u.exports},"6ad9":function(t,e,s){"use strict";var a;s.d(e,"b",(function(){return i})),s.d(e,"c",(function(){return n})),s.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-uni-view",{staticClass:"record_class"},[s("v-uni-view",{staticClass:"record_main futures_record"},[0===t.dataList.length?s("v-uni-view",{staticClass:"no_data"},[t._v(t._s(t.getLangs("noData")))]):s("v-uni-scroll-view",{staticClass:"scroll",attrs:{"scroll-y":!0}},t._l(t.dataList,(function(e,a){return s("v-uni-view",{key:a,staticClass:"record_label"},[s("v-uni-view",{staticClass:"label_title"},[s("v-uni-view",{staticClass:"label_name"},[t._v(t._s(e.ptitle)+" / USDT"),s("v-uni-text",{staticClass:"date"},[t._v(t._s(e.buytime))])],1)],1),s("v-uni-view",{staticClass:"labels_main"},[s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("actionText")))]),s("v-uni-view",{class:["value",0==e.otype?"green":"red"]},[t._v(t._s(0==e.otype?t.getLangs("tradep1"):t.getLangs("tradep2")))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("purchaseQuantity")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.price))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("purchasePrice")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.buyprice))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("sellPrice")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.sellprice))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("cutttime")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(t.getCutttime(e.cutttime)))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("profitAndLoss")))]),s("v-uni-view",{class:["value",e.loss>0?"green":"red"]},[t._v(t._s(e.loss>0?"+"+e.loss:e.loss))])],1)],1)],1)})),1)],1)],1)},n=[]},"6d9e":function(t,e,s){var a=s("24fb");e=a(!1),e.push([t.i,".commission_record_class[data-v-f94c8246]{height:calc(100% - %?80?%)}",""]),t.exports=e},"7cdc":function(t,e,s){"use strict";var a=s("4ea4");s("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;s("2f62");var i=a(s("0af3")),n=a(s("befb")),c=a(s("8400")),l={name:"HistoryRecord",mixins:[i.default,n.default,c.default],methods:{getCutttime:function(t){return Number(t)>999?Number(t)/3600+this.getLangs("hour"):t+this.getLangs("second")}},created:function(){this.getHistoryOrderHandler()}};e.default=l},"7f30":function(t,e,s){"use strict";var a;s.d(e,"b",(function(){return i})),s.d(e,"c",(function(){return n})),s.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-uni-view",{staticClass:"record_class"},[s("v-uni-view",{staticClass:"record_main"},[0===t.dataList.length?s("v-uni-view",{staticClass:"no_data"},[t._v(t._s(t.getLangs("noData")))]):s("v-uni-scroll-view",{staticClass:"scroll",attrs:{"scroll-y":!0}},t._l(t.dataList,(function(e,a){return s("v-uni-view",{key:a,staticClass:"record_label"},[s("v-uni-view",{staticClass:"label_title"},[s("v-uni-view",{staticClass:"label_name"},[s("v-uni-text",{class:["action",0==e.otype?"green":"red"]},[t._v(t._s(0==e.otype?t.getLangs("buy"):t.getLangs("sell")))]),t._v(t._s(e.ptitle)+" / USDT")],1)],1),s("v-uni-view",{staticClass:"labels_main"},[s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("timeText")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(t.toTime(e.buytime)))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("commissionPrice"))+"(USDT)")]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(Number(e.buyprice).toFixed(4)))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("commissionNums"))+"("+t._s(e.ptitle)+")")]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(Number(e.onumber).toFixed(4)))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("totalPrice"))+"(USDT)")]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(Number(e.price).toFixed(4)))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("tradeAvg"))+"(USDT)")]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(Number(e.avgprice).toFixed(4)))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("tradeNums"))+"("+t._s(e.ptitle)+")")]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(Number(e.snumber).toFixed(4)))])],1)],1)],1)})),1)],1)],1)},n=[]},"852e":function(t,e,s){"use strict";var a=s("fc5a"),i=s.n(a);i.a},"8ac0":function(t,e,s){var a=s("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-89e5c920]{background:#000}.main_class[data-v-89e5c920]{padding:0;height:100%}.table_menu[data-v-89e5c920]{width:100%;border-bottom:1px solid #111;background:#20222c;margin-bottom:%?40?%}.record_menu[data-v-89e5c920]{margin:auto;display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:%?20?%;padding:0 %?20?%}.record_menu .label[data-v-89e5c920]{width:50%;text-align:center;font-size:%?28?%;line-height:%?60?%;color:#fff}.record_menu .label.on[data-v-89e5c920]{background:#2970e6;-webkit-border-radius:%?10?%;border-radius:%?10?%;color:#fff}.futures_menu[data-v-89e5c920],\n.contract_menu[data-v-89e5c920]{width:70%}.table_main[data-v-89e5c920]{height:calc(100% - %?126?%)}.content[data-v-89e5c920]{height:100%}.record_class[data-v-89e5c920]{height:calc(100% - %?80?%)!important;overflow:auto!important}body.?%PAGE?%[data-v-89e5c920]{background:#000}",""]),t.exports=e},"8b4e":function(t,e,s){"use strict";s.r(e);var a=s("b463"),i=s("2788");for(var n in i)"default"!==n&&function(t){s.d(e,t,(function(){return i[t]}))}(n);s("04ef");var c,l=s("f0c5"),u=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"a92c9b46",null,!1,a["a"],c);e["default"]=u.exports},"8d01":function(t,e,s){"use strict";s.r(e);var a=s("ff80"),i=s("f00a");for(var n in i)"default"!==n&&function(t){s.d(e,t,(function(){return i[t]}))}(n);s("44bc");var c,l=s("f0c5"),u=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"f94c8246",null,!1,a["a"],c);e["default"]=u.exports},"8d5b":function(t,e,s){var a=s("cd37");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=s("4f06").default;i("2d8a035d",a,!0,{sourceMap:!1,shadowMode:!1})},9179:function(t,e,s){"use strict";s.r(e);var a=s("7cdc"),i=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(e,t,(function(){return a[t]}))}(n);e["default"]=i.a},"9ae8":function(t,e,s){"use strict";var a=s("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(s("0af3")),n=a(s("befb")),c=a(s("8400")),l=null,u={name:"ContractCommissionRecord",mixins:[i.default,n.default,c.default],data:function(){return{dataList:[]}},methods:{setTimer:function(){var t=this;l=setInterval((function(){t.getEntrustOrderHandler({type:0})}),1e3)},clearTimer:function(){clearInterval(l),l=null}},created:function(){var t=this;this.getEntrustOrderHandler({type:0}),this.setTimer(),this.$once("hook:destroyed",(function(){t.clearTimer()}))},destroyed:function(){}};e.default=u},a162:function(t,e,s){var a=s("0145");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=s("4f06").default;i("859f5e5e",a,!0,{sourceMap:!1,shadowMode:!1})},b463:function(t,e,s){"use strict";var a;s.d(e,"b",(function(){return i})),s.d(e,"c",(function(){return n})),s.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-uni-view",{staticClass:"record_class"},[s("v-uni-view",{staticClass:"record_main futures_record"},[0===t.dataList.length?s("v-uni-view",{staticClass:"no_data"},[t._v(t._s(t.getLangs("noData")))]):s("v-uni-scroll-view",{staticClass:"scroll",attrs:{"scroll-y":!0}},t._l(t.dataList,(function(e,a){return s("v-uni-view",{key:a,staticClass:"record_label"},[s("v-uni-view",{staticClass:"label_title"},[s("v-uni-view",{staticClass:"label_name"},[t._v(t._s(e.ptitle)+" / USDT"),s("v-uni-text",{staticClass:"date"},[t._v(t._s(e.buytime))])],1)],1),s("v-uni-view",{staticClass:"labels_main"},[s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("actionText")))]),s("v-uni-view",{class:["value",0==e.otype?"green":"red"]},[t._v(t._s(0==e.otype?t.getLangs("tradep1"):t.getLangs("tradep2")))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("purchaseQuantity")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.price))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("purchasePrice")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.buyprice))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("latestPrice")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(t.getClose(e.ptitle)))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("cutttime")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(t.getCutttime(e.cutttime)))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("expectedEarnings")))]),s("v-uni-view",{class:["value",e.loss>0?"green":"red"]},[t._v(t._s(e.loss>0?"+"+e.loss:e.loss))])],1)],1),s("v-uni-view",{staticClass:"count_down_bar"},[t._v(t._s(t.getLangs("countDown"))+":\n\t\t\t\t\t"+t._s(t.toCountDownText(e.stime)))])],1)})),1)],1)],1)},n=[]},bba8:function(t,e,s){var a=s("6d9e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=s("4f06").default;i("07545af8",a,!0,{sourceMap:!1,shadowMode:!1})},bc47:function(t,e,s){var a=s("24fb");e=a(!1),e.push([t.i,".date[data-v-a92c9b46]{font-size:%?24?%;text-align:right;position:absolute;right:%?20?%;color:#555}.label_fd[data-v-a92c9b46]{background:#fff!important}.label_fd .time[data-v-a92c9b46]{font-size:%?30?%}.status[data-v-a92c9b46]{width:%?160?%!important;background:none!important;border:1px solid #f66464;color:#f66464!important}.futures_record .count_down_bar[data-v-a92c9b46]{border-top:1px solid hsla(0,0%,100%,.1)}",""]),t.exports=e},cd37:function(t,e,s){var a=s("24fb");e=a(!1),e.push([t.i,".contact_commission_class[data-v-7bd1ed55]{height:calc(100% - %?80?%)}",""]),t.exports=e},cdf5:function(t,e,s){var a=s("ff9a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=s("4f06").default;i("85e73918",a,!0,{sourceMap:!1,shadowMode:!1})},d10c:function(t,e,s){"use strict";var a=s("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;s("2f62");var i=a(s("0af3")),n=a(s("befb")),c=a(s("8400")),l={name:"HistoryRecord",mixins:[i.default,n.default,c.default],created:function(){this.getCoinHandler(1)}};e.default=l},d4af:function(t,e,s){"use strict";var a;s.d(e,"b",(function(){return i})),s.d(e,"c",(function(){return n})),s.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-uni-view",{staticClass:"history_record_class"},[s("v-uni-view",{staticClass:"record_class"},[s("v-uni-view",{staticClass:"record_main common"},[0===t.dataList.length?s("v-uni-view",{staticClass:"no_data"},[t._v(t._s(t.getLangs("noData")))]):s("v-uni-scroll-view",{staticClass:"scroll",attrs:{"scroll-y":!0}},t._l(t.dataList,(function(e,a){return s("v-uni-view",{key:a,staticClass:"record_label"},[s("v-uni-view",{staticClass:"label_title"},[s("v-uni-view",{staticClass:"label_name"},[t._v(t._s(0==e.paytype?t.getLangs("marketOrder"):t.getLangs("limitOrder"))),s("v-uni-text",{staticClass:"ptitle"},[t._v(t._s(e.ptitle)+" / USDT")]),s("v-uni-text",{class:["action",0==e.otype?"green":"order"]},[t._v(t._s(0==e.otype?t.getLangs("tradep3"):t.getLangs("tradep4")))]),s("v-uni-text",{staticClass:"status deal"},[t._v(t._s(t.getLangs("deal")))])],1)],1),s("v-uni-view",{staticClass:"labels_main_normal"},[s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("quantity")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.onumber))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("purchasePrice")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.buyprice))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("closePrice")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.sellprice?e.sellprice:"-"))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("profitAndLoss")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.loss?e.loss:"-"))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("lever")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.unit)+"X")])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("loss")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(0==e.endloss?"-":e.endloss))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("profit")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(0==e.endprofit?"-":e.endprofit))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("margin")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.price))])],1)],1),s("v-uni-view",{staticClass:"labels_fd"},[s("v-uni-view",{staticClass:"labels"},[t._v(t._s(t.getLangs("orderNumber"))+":"+t._s(e.orderno))]),s("v-uni-view",{staticClass:"labels"},[t._v(t._s(t.getLangs("handlingFee"))+":"+t._s(e.fee))]),s("v-uni-view",{staticClass:"labels"},[t._v(t._s(t.getLangs("buytime"))+":"+t._s(e.buytime))])],1)],1)})),1)],1)],1)],1)},n=[]},dbdc:function(t,e,s){"use strict";var a=s("8d5b"),i=s.n(a);i.a},dce5:function(t,e,s){"use strict";s.r(e);var a=s("7f30"),i=s("1767");for(var n in i)"default"!==n&&function(t){s.d(e,t,(function(){return i[t]}))}(n);s("ef2c4");var c,l=s("f0c5"),u=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"5841cdc4",null,!1,a["a"],c);e["default"]=u.exports},e97d:function(t,e,s){"use strict";var a;s.d(e,"b",(function(){return i})),s.d(e,"c",(function(){return n})),s.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-uni-view",{staticClass:"contact_commission_class"},[s("v-uni-view",{staticClass:"record_class"},[s("v-uni-view",{staticClass:"record_main common"},[0===t.dataList.length?s("v-uni-view",{staticClass:"no_data"},[t._v(t._s(t.getLangs("noData")))]):s("v-uni-scroll-view",{staticClass:"scroll",attrs:{"scroll-y":!0}},t._l(t.dataList,(function(e,a){return s("v-uni-view",{key:a,staticClass:"record_label"},[s("v-uni-view",{staticClass:"label_title"},[s("v-uni-view",{staticClass:"label_name"},[t._v(t._s(0==e.paytype?t.getLangs("marketOrder"):t.getLangs("limitOrder"))),s("v-uni-text",{staticClass:"ptitle"},[t._v(t._s(e.ptitle)+" / USDT")]),s("v-uni-text",{class:["action",0==e.otype?"green":"color"]},[t._v(t._s(0==e.otype?t.getLangs("tradep3"):t.getLangs("tradep4")))]),s("v-uni-text",{staticClass:"status"},[t._v(t._s(t.getLangs("commission")))])],1)],1),s("v-uni-view",{staticClass:"labels_main_normal"},[s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("quantity")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.onumber))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("purchasePrice")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.buyprice))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("latestPrice")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.nowPrice))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("profitAndLoss")))]),s("v-uni-view",{class:["value",e.loss>0?"green":"red"]},[t._v(t._s(e.loss))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("lever")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.unit)+"X")])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("loss")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(0==e.endloss?"-":e.endloss))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("profit")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(0==e.endprofit?"-":e.endprofit))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("margin")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.price))])],1)],1),s("v-uni-view",{staticClass:"labels_fd"},[s("v-uni-view",{staticClass:"labels"},[t._v(t._s(t.getLangs("orderNumber"))+":"+t._s(e.orderno))]),s("v-uni-view",{staticClass:"labels"},[t._v(t._s(t.getLangs("handlingFee"))+":"+t._s(e.fee))]),s("v-uni-view",{staticClass:"labels"},[t._v(t._s(t.getLangs("buytime"))+":"+t._s(e.buytime))]),s("v-uni-view",{staticClass:"cancel",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.closeCommission(e.orderno)}}},[t._v(t._s(t.getLangs("revokeEntrust")))])],1)],1)})),1)],1)],1)],1)},n=[]},ef2c4:function(t,e,s){"use strict";var a=s("4f068"),i=s.n(a);i.a},efb4:function(t,e,s){"use strict";s.r(e);var a=s("4056"),i=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(e,t,(function(){return a[t]}))}(n);e["default"]=i.a},f00a:function(t,e,s){"use strict";s.r(e);var a=s("4911"),i=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(e,t,(function(){return a[t]}))}(n);e["default"]=i.a},fc5a:function(t,e,s){var a=s("8ac0");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=s("4f06").default;i("7c0c3a36",a,!0,{sourceMap:!1,shadowMode:!1})},fcb6:function(t,e,s){"use strict";var a=s("4ea4");s("4de4"),s("a9e3"),s("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;s("2f62");var i=a(s("0af3")),n=a(s("befb")),c=a(s("8400")),l=a(s("4c5b")),u=a(s("d126")),r=(a(s("79c1")),{name:"FuturesPositionRecord",mixins:[i.default,n.default,c.default,l.default,u.default],props:["keys"],data:function(){return{countDownList:{},timer:null,timer2:null}},methods:{getCutttime:function(t){return Number(t)>999?Number(t)/3600+this.getLangs("hour"):t+this.getLangs("second")},setTimer:function(){var t=this;this.timer=setInterval((function(){for(var e in t.dataList)t.dataList[e].stime--,0===t.dataList[e].stime&&t.init()}),1e3)},setTimer2:function(){var t=this;this.timer2=setInterval((function(){t.getFuturesPositionHandler(0)}),5e3)},clearTimer:function(){clearInterval(this.timer),clearInterval(this.timer2),this.timer=null,this.timer2=null},init:function(){var t=this;this.clearTimer(),this.getFuturesPositionHandler(0),this.setTimer(),this.setTimer2(),this.$once("hook:destroyed",(function(){t.clearTimer()}))},toCountDownText:function(t){if(t<999)return t;var e=parseInt(t),s=0,a=0;e>60&&(s=parseInt(e/60),e=parseInt(e%60),s>60&&(a=parseInt(s/60),s=parseInt(s%60)));var i=(parseInt(e)>9?parseInt(e):"0"+parseInt(e))+"秒";return s>0&&(i=parseInt(s)+"分"+i),a>0&&(i=parseInt(a)+"小时"+i),i}},computed:{getClose:function(){var t=this;return function(e){if(!t.getWSData.length)return 0;var s=t.getWSData.filter((function(t){return t.name==e}))[0];return s.close}}},destroyed:function(){this.clearTimer()},created:function(){this.init(),console.log("..")}});e.default=r},ff80:function(t,e,s){"use strict";var a;s.d(e,"b",(function(){return i})),s.d(e,"c",(function(){return n})),s.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-uni-view",{staticClass:"commission_record_class"},[s("v-uni-view",{staticClass:"record_class"},[s("v-uni-view",{staticClass:"record_main common"},[0===t.dataList.length?s("v-uni-view",{staticClass:"no_data"},[t._v(t._s(t.getLangs("noData")))]):s("v-uni-scroll-view",{staticClass:"scroll",attrs:{"scroll-y":!0}},t._l(t.dataList,(function(e,a){return s("v-uni-view",{key:a,staticClass:"record_label"},[s("v-uni-view",{staticClass:"label_title"},[s("v-uni-view",{staticClass:"label_name"},[t._v(t._s(0==e.paytype?t.getLangs("marketOrder"):t.getLangs("limitOrder"))),s("v-uni-text",{staticClass:"ptitle"},[t._v(t._s(e.ptitle)+" / USDT")]),s("v-uni-text",{class:["action",0==e.otype?"green":"red"]},[t._v(t._s(0==e.otype?t.getLangs("tradep3"):t.getLangs("tradep4")))]),s("v-uni-text",{staticClass:"status"},[t._v(t._s(t.getLangs("positioning")))])],1)],1),s("v-uni-view",{staticClass:"labels_main_normal"},[s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("quantity")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.onumber))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("purchasePrice")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.buyprice))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("closePrice")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.nowPrice))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("profitAndLoss")))]),s("v-uni-view",{class:["value",e.loss>0?"green":"red"]},[t._v(t._s(e.loss))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("lever")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.unit)+"X")])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("loss")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(0==e.endloss?"-":e.endloss))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("profit")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(0==e.endprofit?"-":e.endprofit))])],1),s("v-uni-view",{staticClass:"labels_box"},[s("v-uni-view",{staticClass:"text"},[t._v(t._s(t.getLangs("margin")))]),s("v-uni-view",{staticClass:"value"},[t._v(t._s(e.price))])],1)],1),s("v-uni-view",{staticClass:"labels_fd"},[s("v-uni-view",{staticClass:"labels"},[t._v(t._s(t.getLangs("orderNumber"))+":"+t._s(e.orderno))]),s("v-uni-view",{staticClass:"labels"},[t._v(t._s(t.getLangs("handlingFee"))+":"+t._s(e.fee))]),s("v-uni-view",{staticClass:"labels"},[t._v(t._s(t.getLangs("buytime"))+":"+t._s(e.buytime))]),s("v-uni-view",{staticClass:"cancel",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.closeContact(e.orderno)}}},[t._v(t._s(t.getLangs("mClose")))])],1)],1)})),1)],1)],1)],1)},n=[]},ff9a:function(t,e,s){var a=s("24fb");e=a(!1),e.push([t.i,".history_record_class[data-v-f6ecb262]{height:calc(100% - %?80?%)}.deal[data-v-f6ecb262]{background:#1faa93!important}",""]),t.exports=e}}]);