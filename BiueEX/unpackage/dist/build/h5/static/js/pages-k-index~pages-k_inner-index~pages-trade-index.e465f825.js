(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-k-index~pages-k_inner-index~pages-trade-index"],{"09ac":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".dropdown[data-v-d633bf96]{position:absolute;z-index:100}.dropdown .ul[data-v-d633bf96]{width:%?300?%;position:relative;z-index:101;list-style:none;background-color:#fff;border-radius:%?4?%;padding-left:0;box-shadow:%?10?% %?10?% %?20?% rgba(224,32,32,.2)}.dropdown .ul .li[data-v-d633bf96]{color:#000;padding:%?20?%;\n\t/* border-bottom: 1px solid #eee; */font-size:%?26?%}.dropdown .ul .li[data-v-d633bf96]:last-child{border-bottom:none}.dropdown-mask[data-v-d633bf96]{top:0;left:0;position:fixed;width:100vw;height:100vh;z-index:99;touch-action:none}",""]),t.exports=e},"14e8":function(t,e,n){"use strict";n.r(e);var a=n("80d1"),r=n("7ba6");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("fa61");var s,u=n("f0c5"),o=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"d633bf96",null,!1,a["a"],s);e["default"]=o.exports},"4eff":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".entrust_order_class[data-v-08d7cd33]{margin-top:%?40?%}.entrust_order_class .entrust_order_menu[data-v-08d7cd33]{width:60%;margin:auto;display:-webkit-box;display:-webkit-flex;display:flex;height:%?60?%;background:hsla(0,0%,100%,.05)}.entrust_order_class .entrust_order_menu .menu_label[data-v-08d7cd33]{width:50%;text-align:center;line-height:%?60?%;font-size:%?28?%;color:#fff}.entrust_order_class .entrust_order_menu .menu_label.on[data-v-08d7cd33]{background:#5d56ec;color:#fff}.table_hd[data-v-08d7cd33]{border-bottom:2px solid hsla(0,0%,100%,.05)}",""]),t.exports=e},"56b7":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var r=a(n("1da1")),i=a(n("5530")),s=n("2f62"),u=n("704f"),o=a(n("78d5")),c={methods:(0,i.default)({data:function(){return{timer:null}},getUserLeftmoneyHandler:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.getAllBalance)();case 2:n=e.sent,o.default.checkCode(n)&&(t.setLeftmoney(n.allBalance),t.setAccountBanlance(n.data),t.setCny(n.allCNY));case 4:case"end":return e.stop()}}),e)})))()},checkCertInfoHandler:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.userCertInfo)();case 2:n=e.sent,o.default.checkCode(n)&&t.setCertInfo(n.data);case 4:case"end":return e.stop()}}),e)})))()},getUserInfoHandler:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.getUserInfo)();case 2:n=e.sent,o.default.checkCode(n)&&t.setUserInfoData(n.data);case 4:case"end":return e.stop()}}),e)})))()},setTimer:function(){var t=this;null!==this.timer&&this.clearTimer(),this.timer=setInterval((function(){t.getUserLeftmoneyHandler()}),2e3)},clearTimer:function(){clearInterval(this.timer),this.timer=null}},(0,s.mapMutations)({setLeftmoney:"SET_LEFTMONEY",setCertInfo:"SET_CERT_INFO",setUserInfoData:"SET_USER_INFO_DATA",setAccountBanlance:"SET_ACCOUNT_BANLANCE",setCny:"SET_CNY"})),computed:(0,i.default)({},(0,s.mapGetters)({getLeftmoney:"getLeftmoney",getCertinfo:"getCertInfo",getUserInfoData:"getUserInfoData",getCny:"getCny",getAccountBanlance:"getAccountBanlance"})),onShow:function(){},onUnload:function(){},created:function(){},destroyed:function(){this.clearTimer()}},l=c;e.default=l},"64bc":function(t,e,n){"use strict";n.r(e);var a=n("9080"),r=n("b967");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("83f3");var s,u=n("f0c5"),o=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"08d7cd33",null,!1,a["a"],s);e["default"]=o.exports},6989:function(t,e,n){var a=n("4eff");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("5f97c588",a,!0,{sourceMap:!1,shadowMode:!1})},"7ba6":function(t,e,n){"use strict";n.r(e);var a=n("8891"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},"80d1":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"dropdown"},[n("v-uni-view",{staticClass:"dropdown-mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlerMask.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"ul"},t._l(t.list,(function(e){return n("v-uni-view",{key:e.value,staticClass:"li",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handlerItem(e.value)}}},[t._v(t._s(e.name))])})),1)],1)},i=[]},"83f3":function(t,e,n){"use strict";var a=n("6989"),r=n.n(a);r.a},8891:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"dropdown",props:{list:{type:Array,default:function(){return[]}}},methods:{handlerItem:function(t){this.$emit("select",t)},handlerMask:function(){this.$emit("close")}}};e.default=a},9080:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"entrust_order_class"},[n("v-uni-view",{staticClass:"entrust_order_menu"},t._l(t.entrustList,(function(e,a){return n("v-uni-view",{key:a,class:["menu_label",t.active===a?"on":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeMenu(a)}}},[t._v(t._s(t.getLangs(e)))])})),1),n("v-uni-view",{staticClass:"table_class"},[n("v-uni-view",{staticClass:"table_hd"},[n("v-uni-view",{staticClass:"table_hd_label"},[t._v(t._s(t.getLangs("Variety")))]),n("v-uni-view",{staticClass:"table_hd_label"},[t._v(t._s(t.getLangs("purchasePrice")))]),n("v-uni-view",{staticClass:"table_hd_label"},[t._v(t._s(t.getLangs("latestPrice")))]),n("v-uni-view",{staticClass:"table_hd_label"},[t._v(t._s(t.getLangs("profit")))])],1),n("v-uni-view",{staticClass:"table_bd"},[0===t.dataList.length?n("v-uni-view",{staticClass:"no_data"},[t._v(t._s(t.getLangs("noData")))]):n("v-uni-view",t._l(t.getPositionRecordData.data,(function(e,a){return n("v-uni-view",{key:a,staticClass:"table_bd_items"},[n("v-uni-view",{staticClass:"table_bd_label"},[t._v(t._s(e.ptitle))]),n("v-uni-view",{staticClass:"table_bd_label"},[t._v(t._s(e.buyprice))]),n("v-uni-view",{staticClass:"table_bd_label"},[t._v(t._s(e.nowPrice))]),n("v-uni-view",{staticClass:"table_bd_label"},[t._v(t._s(e.loss.toFixed(4)))]),n("v-uni-view",{staticClass:"table_bd_label btns"},[n("v-uni-text",{staticClass:"btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.showSettingDialog(e.orderno)}}},[t._v(t._s(t.getLangs("setting")))]),n("v-uni-text",{staticClass:"btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.position(e.orderno)}}},[t._v(t._s(t.getLangs("close")))])],1)],1)})),1)],1)],1)],1)},i=[]},a53e:function(t,e,n){"use strict";var a=n("4ea4");n("4de4"),n("d81d"),n("fb6a"),n("4e82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var r=a(n("1da1")),i=a(n("5530")),s=n("2f62"),u=n("b6fd"),o={methods:(0,i.default)({getProductDataHandler:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.getProduct)();case 2:n=e.sent,t.clearTimer(),t.setProductData(n.data);case 5:case"end":return e.stop()}}),e)})))()}},(0,s.mapMutations)({setProductData:"SET_PRODUCT_DATA"})),computed:(0,i.default)({getShowData:function(){if("{}"===JSON.stringify(this.getCurrencyData))return[];var t=this.getCurrencyData;return t.slice(0,3)},getTradeData:function(){return 0===this.active?this.getCurrencyData.sort((function(t,e){return e.gain-t.gain})):1===this.active?this.getCurrencyData.sort((function(t,e){return e.count-t.count})):void 0},getLeftData:function(){var t=this;if("undefined"===typeof this.getProductData.length||0===this.getProductData.length||"undefined"===typeof this.getLeftWsData.length||0===this.getLeftWsData.length)return[];var e=JSON.parse(JSON.stringify(this.getProductData)),n=e.map((function(e){var n=t.getLeftWsData.filter((function(t){return t.id===e.id})),a=Object.assign(e,n[0]);return a}));return n,n},getCurrenctData:function(){if(this.getWSData.length&&this.getWSData.length>0){var t=this.getCurrentPageData("opt").id;this.getWSData.slice().sort((function(t,e){return t.id-e.id}));return this.getWSData.filter((function(e){return e.id==t}))[0]}},getWSSortData:function(){if(this.getWSData.length&&this.getWSData.length>0){if(0===this.active){var t=this.getWSData.slice().sort((function(t,e){return e.gain-t.gain}));return t}if(1===this.active){var e=this.getWSData.slice().sort((function(t,e){return e.vol-t.vol}));return e}}},getCurrentCurrencyData:function(){var t=this.$storage.getLocalData("currentCurrency");return""==t||null==t?this.getWSData[0]:this.getWSData.filter((function(e){return e.id==t}))[0]}},(0,s.mapGetters)({getProductData:"getProductData",getWSData:"getWSData",getLeftWsData:"getLeftWsData"}))},c=o;e.default=c},abef:function(t,e,n){var a=n("09ac");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("2da32f59",a,!0,{sourceMap:!1,shadowMode:!1})},b967:function(t,e,n){"use strict";n.r(e);var a=n("e8d9"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},e8d9:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("c5e2")),i=a(n("a937")),s={name:"EntrustOrder",mixins:[r.default,i.default],data:function(){return{entrustList:["marketOrder","limitOrder"],active:0,dataList:[]}},methods:{changeMenu:function(t){this.active=t}}};e.default=s},fa61:function(t,e,n){"use strict";var a=n("abef"),r=n.n(a);r.a}}]);