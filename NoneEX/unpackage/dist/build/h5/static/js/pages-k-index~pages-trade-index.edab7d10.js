(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-k-index~pages-trade-index"],{"08cb":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"loading"},[n("v-uni-image",{staticClass:"loading_img",attrs:{src:a("9a50")}})],1)},r=[]},"0c8b":function(t,e,a){var n=a("f959");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("b2dae4ee",n,!0,{sourceMap:!1,shadowMode:!1})},"0ec3":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var i=n(a("1da1")),r=n(a("5530")),s=a("2f62"),o=a("336a"),c=n(a("02ca")),l={methods:(0,r.default)({data:function(){return{timer:null}},getUserLeftmoneyHandler:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,o.getAllBalance)();case 2:a=e.sent,c.default.checkCode(a)&&(t.setLeftmoney(a.allBalance),t.setAccountBanlance(a.data),t.setCny(a.allCNY));case 4:case"end":return e.stop()}}),e)})))()},checkCertInfoHandler:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,o.userCertInfo)();case 2:a=e.sent,c.default.checkCode(a)&&t.setCertInfo(a.data);case 4:case"end":return e.stop()}}),e)})))()},getUserInfoHandler:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,o.getUserInfo)();case 2:a=e.sent,c.default.checkCode(a)&&t.setUserInfoData(a.data);case 4:case"end":return e.stop()}}),e)})))()},setTimer:function(){var t=this;null!==this.timer&&this.clearTimer(),this.timer=setInterval((function(){t.getUserLeftmoneyHandler()}),2e3)},clearTimer:function(){clearInterval(this.timer),this.timer=null}},(0,s.mapMutations)({setLeftmoney:"SET_LEFTMONEY",setCertInfo:"SET_CERT_INFO",setUserInfoData:"SET_USER_INFO_DATA",setAccountBanlance:"SET_ACCOUNT_BANLANCE",setCny:"SET_CNY"})),computed:(0,r.default)({},(0,s.mapGetters)({getLeftmoney:"getLeftmoney",getCertinfo:"getCertInfo",getUserInfoData:"getUserInfoData",getCny:"getCny",getAccountBanlance:"getAccountBanlance"})),onShow:function(){},onUnload:function(){},created:function(){},destroyed:function(){this.clearTimer()}},u=l;e.default=u},"12e0":function(t,e,a){"use strict";a.r(e);var n=a("515c"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"185e":function(t,e,a){var n=a("ede3");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("a616b6ea",n,!0,{sourceMap:!1,shadowMode:!1})},"2b31":function(t,e,a){"use strict";var n=a("0c8b"),i=a.n(n);i.a},"3ca5":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".loading[data-v-680563ce]{width:100%;height:100%;position:fixed;left:0;top:0;z-index:10000;background:rgba(0,0,0,.5)}.loading_img[data-v-680563ce]{width:%?80?%;height:%?80?%;position:absolute;top:50%;left:50%;z-index:10001;margin-left:%?-40?%;margin-top:%?-40?%}",""]),t.exports=e},"3d5c":function(t,e,a){"use strict";var n=a("d7d8"),i=a.n(n);i.a},"4c0f":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"entrust_order_class"},[a("v-uni-view",{staticClass:"entrust_order_menu"},t._l(t.entrustList,(function(e,n){return a("v-uni-view",{key:n,class:["menu_label",t.active===n?"on":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeMenu(n)}}},[t._v(t._s(t.getLangs(e)))])})),1),a("v-uni-view",{staticClass:"table_class"},[a("v-uni-view",{staticClass:"table_hd"},[a("v-uni-view",{staticClass:"table_hd_label"},[t._v(t._s(t.getLangs("Variety")))]),a("v-uni-view",{staticClass:"table_hd_label"},[t._v(t._s(t.getLangs("purchasePrice")))]),a("v-uni-view",{staticClass:"table_hd_label"},[t._v(t._s(t.getLangs("latestPrice")))]),a("v-uni-view",{staticClass:"table_hd_label"},[t._v(t._s(t.getLangs("profit")))])],1),a("v-uni-view",{staticClass:"table_bd"},[0===t.dataList.length?a("v-uni-view",{staticClass:"no_data"},[t._v(t._s(t.getLangs("noData")))]):a("v-uni-view",t._l(t.getPositionRecordData.data,(function(e,n){return a("v-uni-view",{key:n,staticClass:"table_bd_items"},[a("v-uni-view",{staticClass:"table_bd_label"},[t._v(t._s(e.ptitle))]),a("v-uni-view",{staticClass:"table_bd_label"},[t._v(t._s(e.buyprice))]),a("v-uni-view",{staticClass:"table_bd_label"},[t._v(t._s(e.nowPrice))]),a("v-uni-view",{staticClass:"table_bd_label"},[t._v(t._s(e.loss.toFixed(4)))]),a("v-uni-view",{staticClass:"table_bd_label btns"},[a("v-uni-text",{staticClass:"btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.showSettingDialog(e.orderno)}}},[t._v(t._s(t.getLangs("setting")))]),a("v-uni-text",{staticClass:"btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.position(e.orderno)}}},[t._v(t._s(t.getLangs("close")))])],1)],1)})),1)],1)],1)],1)},r=[]},"4c7c":function(t,e,a){"use strict";a.r(e);var n=a("ae4f"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"515c":function(t,e,a){"use strict";var n=a("4ea4");a("99af"),a("b680"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530"));a("96cf");var r=n(a("1da1")),s=a("2f62"),o=n(a("7333")),c=n(a("96f1")),l=n(a("7afb")),u=n(a("b37e")),d=a("336a"),f=n(a("02ca")),v=n(a("5da5")),g=n(a("f61a")),b=n(a("c3e0")),p={name:"TradeMain",mixins:[c.default,l.default,o.default,u.default],data:function(){return{menuList:["marketOrder","limitOrder"],active:0,actionList:[{name:"tradep3",action:"buy",cls:"green_box"},{name:"tradep4",action:"sell",cls:"red_box"}],action:0,form:{appointprice:"",unit:10,num:"",endprofit:"",endloss:""},dropshow:!1,dropList:[{name:"10X",value:10},{name:"50X",value:50},{name:"80X",value:80},{name:"100X",value:100},{name:"150X",value:150},{name:"200X",value:200}],loading:!1}},components:{EntrustOrder:v.default,Dropdown:g.default,Loading:b.default},methods:{trade:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var a,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==t.form.unit){e.next=2;break}return e.abrupt("return",t.$tips.showModel(t.getLangs("sysTips"),t.getLangs("leverEmptyTips"),"",t.getLangs("confirm"),(function(t){}),!1));case 2:if(0!==t.active){e.next=6;break}t.form.appointprice=t.getCurrenctData.close,e.next=8;break;case 6:if(""!==t.form.appointprice){e.next=8;break}return e.abrupt("return",t.$tips.showModel(t.getLangs("sysTips"),t.getLangs("entrustEmptyTips"),"",t.getLangs("confirm"),(function(t){}),!1));case 8:if(""!==t.form.num){e.next=10;break}return e.abrupt("return",t.$tips.showModel(t.getLangs("sysTips"),t.getLangs("numEmptyTips"),"",t.getLangs("confirm"),(function(t){}),!1));case 10:return a={id:t.getCurrentPageData("opt").id,type:t.action,paytype:t.active},t.loading=!0,n=Object.assign(t.form,a),t.loading=!1,e.next=16,(0,d.transaction)(n);case 16:i=e.sent,f.default.checkCode(i),t.backTips(i);case 19:case"end":return e.stop()}}),e)})))()},changeMenu:function(t){this.active=t,this.form.appointprice=""},changeAction:function(t){this.action=t},selectDrop:function(t){this.form.unit=t,this.dropshow=!1}},computed:(0,i.default)({getPrice:function(){return"undefined"==typeof this.getCurrenctData?0:(this.form.num*this.getUnit*this.getCurrenctData.close*this.getRatio).toFixed(2)},getDepoit:function(){return 250*this.form.num},getProfit:function(){return"undefined"==typeof this.getCurrenctData?"":0===this.action?"".concat(this.getLangs("min")," ").concat(this.getCurrenctData.attach&&this.getCurrenctData.attach.sprice0):"".concat(this.getLangs("max")," ").concat(this.getCurrenctData.attach&&this.getCurrenctData.attach.sprice1)},getLoss:function(){return"undefined"==typeof this.getCurrenctData?"":0===this.action?"".concat(this.getLangs("max")," ").concat(this.getCurrenctData.attach&&this.getCurrenctData.attach.eprice1):"".concat(this.getLangs("min")," ").concat(this.getCurrenctData.attach&&this.getCurrenctData.attach.eprice0)},getFee:function(){return this.getCurrenctData.attach?this.getCurrenctData.attach.fee:0},getUnit:function(){return this.getCurrenctData.attach?this.getCurrenctData.attach.unit:0},getRatio:function(){return this.getCurrenctData.attach&&this.getCurrenctData.attach.ratio?this.getCurrenctData.attach.ratio:0},getClass:function(){return 0==this.action?"green_box":"red_box"}},(0,s.mapGetters)({getTradeAction:"getTradeAction"}))};e.default=p},"5cb7":function(t,e,a){var n=a("9ae5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("c19b2646",n,!0,{sourceMap:!1,shadowMode:!1})},"5da5":function(t,e,a){"use strict";a.r(e);var n=a("4c0f"),i=a("4c7c");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("3d5c");var s,o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"7dd4b98a",null,!1,n["a"],s);e["default"]=c.exports},"618b":function(t,e,a){"use strict";a.r(e);var n=a("c5c4"),i=a("12e0");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("9b1a");var s,o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"98ed9eac",null,!1,n["a"],s);e["default"]=c.exports},"661a":function(t,e,a){"use strict";var n=a("4ea4");a("4160"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("7333")),r=n(a("96f1")),s=n(a("7afb")),o=n(a("b37e")),c={name:"PriceList",mixins:[i.default,r.default,s.default,o.default],computed:{getPriceList:function(){if("undefined"==typeof this.getCurrenctData)return[];var t=this.getCurrenctData.latestPrice&&this.getCurrenctData.latestPrice.buy,e=this.getCurrenctData.latestPrice&&this.getCurrenctData.latestPrice.sell;if("undefined"===typeof t||"undefined"===typeof e)return[];var a=[];return t.forEach((function(t,n){var i=[t.amount,t.price,e[n].price,e[n].amount];a.push(i)})),a}}};e.default=c},"700a":function(t,e,a){var n=a("8ede");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("7d6222c8",n,!0,{sourceMap:!1,shadowMode:!1})},"763d":function(t,e,a){"use strict";var n=a("185e"),i=a.n(n);i.a},"88c9":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"dropdown",props:{list:{type:Array,default:function(){return[]}}},methods:{handlerItem:function(t){this.$emit("select",t)},handlerMask:function(){this.$emit("close")}}};e.default=n},"8ede":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".dropdown[data-v-d633bf96]{position:absolute;z-index:100}.dropdown .ul[data-v-d633bf96]{width:%?300?%;position:relative;z-index:101;list-style:none;background-color:#fff;-webkit-border-radius:%?4?%;border-radius:%?4?%;padding-left:0;-webkit-box-shadow:%?10?% %?10?% %?20?% rgba(224,32,32,.2);box-shadow:%?10?% %?10?% %?20?% rgba(224,32,32,.2)}.dropdown .ul .li[data-v-d633bf96]{color:#000;padding:%?20?%;\n\t/* border-bottom: 1px solid #eee; */font-size:%?26?%}.dropdown .ul .li[data-v-d633bf96]:last-child{border-bottom:none}.dropdown-mask[data-v-d633bf96]{top:0;left:0;position:fixed;width:100vw;height:100vh;z-index:99;touch-action:none}",""]),t.exports=e},"8ee7":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"k_line_data"},[a("v-uni-view",{staticClass:"k_line_card"},[a("v-uni-view",{staticClass:"currency",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sliderCurrency.apply(void 0,arguments)}}},[t._v(t._s(t.opt.currency)+" / USDT"),a("v-uni-text",{staticClass:"iconfont icon-other"})],1),0===t.getCurrentTradeType?a("v-uni-view",{staticClass:"position"},[a("v-uni-text",{staticClass:"iconfont icon-document"}),a("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switchTab("/pages/order/index")}}},[t._v(t._s(t.getLangs("positionOrder")))])],1):t._e(),a("v-uni-view",{staticClass:"k_data"},[a("v-uni-view",{staticClass:"labels"},[a("v-uni-text",{staticClass:"current"},[t._v(t._s(t.getLangs("current")))]),a("v-uni-view",{class:["live_label close",t.getClass(t.getCurrenctData&&t.getCurrenctData.gain)]},[t._v(t._s(t.getCurrenctData&&t.getCurrenctData.close))]),a("v-uni-view",{class:["live_label",t.getClass(t.getCurrenctData&&t.getCurrenctData.gain)]},[t._v(t._s(t.getCurrenctData&&t.getCurrenctData.gain)+"%")])],1),a("v-uni-view",{staticClass:"labels"},[a("v-uni-view",{staticClass:"inner"},[a("v-uni-view",{staticClass:"inner_label"},[a("v-uni-text",{staticClass:"name"},[t._v(t._s(t.getLangs("openPrice")))]),a("v-uni-text",{staticClass:"value"},[t._v(t._s(t.getCurrenctData&&t.getCurrenctData.open))])],1),a("v-uni-view",{staticClass:"inner_label"},[a("v-uni-text",{staticClass:"name"},[t._v(t._s(t.getLangs("turnover24h")))]),a("v-uni-text",{staticClass:"value"},[t._v(t._s(t.getCurrenctData&&(Number(t.getCurrenctData.vol)/1e4).toFixed(4))+"W")])],1),a("v-uni-view",{staticClass:"inner_label"},[a("v-uni-text",{staticClass:"name"},[t._v(t._s(t.getLangs("lowestPrice")))]),a("v-uni-text",{staticClass:"value"},[t._v(t._s(t.getCurrenctData&&t.getCurrenctData.low))])],1),a("v-uni-view",{staticClass:"inner_label"},[a("v-uni-text",{staticClass:"name"},[t._v(t._s(t.getLangs("highestPrice")))]),a("v-uni-text",{staticClass:"value"},[t._v(t._s(t.getCurrenctData&&t.getCurrenctData.high))])],1)],1)],1)],1)],1)],1)},r=[]},"934d":function(t,e,a){var n=a("3ca5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("5953fd76",n,!0,{sourceMap:!1,shadowMode:!1})},"9a50":function(t,e,a){t.exports=a.p+"static/img/loading1.303b3b8b.gif"},"9ae5":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".trade_main_class[data-v-98ed9eac]{margin-top:%?20?%;padding-top:%?20?%;padding-left:%?20?%;padding-right:%?20?%;border-top:1px solid hsla(0,0%,100%,.05)}.trade_form[data-v-98ed9eac]{width:100%;font-size:0}.trade_form .trade_form_label[data-v-98ed9eac]{width:50%;position:relative;padding:0 %?20?%;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;margin-bottom:%?20?%;vertical-align:top}.trade_form .trade_inner[data-v-98ed9eac]{background:#1e2533;padding-right:%?80?%;position:relative}.trade_form .trade_form_label .input_bar[data-v-98ed9eac]{color:#fff;width:100%;font-size:%?26?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;padding:%?20?%;overflow:hidden}.trade_form .trade_form_label .sub[data-v-98ed9eac]{font-size:%?26?%;line-height:%?60?%;color:hsla(0,0%,100%,.5);position:absolute;right:%?10?%;top:%?8?%}.trade_fee[data-v-98ed9eac]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?20?%}.trade_fee_label[data-v-98ed9eac]{-webkit-box-flex:1;-webkit-flex:1;flex:1;width:50%;font-size:%?28?%;color:#57627c}.trade_fee_label.price[data-v-98ed9eac]{text-align:right}.trade_btn[data-v-98ed9eac]{text-align:center;line-height:%?80?%;-webkit-border-radius:%?20?%;border-radius:%?20?%;margin-top:%?20?%;font-size:%?30?%;margin-bottom:%?20?%;color:#fff;width:100%;position:fixed;bottom:%?50?%;width:80%;left:50%;margin-left:-40%}.trade_menu[data-v-98ed9eac]{display:-webkit-box;display:-webkit-flex;display:flex;text-align:center;border-bottom:1px solid hsla(0,0%,100%,.05);margin-bottom:%?20?%}.trade_menu .menu_label[data-v-98ed9eac]{width:50%;font-size:%?28?%;color:#fff;line-height:%?80?%;color:hsla(0,0%,100%,.7)}.trade_menu .menu_label.on[data-v-98ed9eac]{color:#fff;border-bottom:2px solid #5d56ec}.trade_action[data-v-98ed9eac]{width:80%;display:-webkit-box;display:-webkit-flex;display:flex;margin:%?20?% auto;text-align:center}.trade_action .action_label[data-v-98ed9eac]{text-align:center;line-height:%?60?%;width:50%;color:#aaa;font-size:%?28?%;margin:0 %?10?%;-webkit-border-radius:%?20?%;border-radius:%?20?%;color:#fff}.trade_action .action_label.on[data-v-98ed9eac]{color:#fff}.trade_action .action_label.on.on0[data-v-98ed9eac]{background:#27c173}.trade_action .action_label.on.on1[data-v-98ed9eac]{background:#c12d3b}",""]),t.exports=e},"9b1a":function(t,e,a){"use strict";var n=a("5cb7"),i=a.n(n);i.a},a2fe:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".entrust_order_class[data-v-7dd4b98a]{margin-top:%?40?%}.entrust_order_class .entrust_order_menu[data-v-7dd4b98a]{width:60%;margin:auto;display:-webkit-box;display:-webkit-flex;display:flex;height:%?60?%;background:hsla(0,0%,100%,.05)}.entrust_order_class .entrust_order_menu .menu_label[data-v-7dd4b98a]{width:50%;text-align:center;line-height:%?60?%;font-size:%?28?%;color:#fff}.entrust_order_class .entrust_order_menu .menu_label.on[data-v-7dd4b98a]{background:#5d56ec;color:#fff}.table_hd[data-v-7dd4b98a]{border-bottom:2px solid hsla(0,0%,100%,.05)}",""]),t.exports=e},a395:function(t,e,a){"use strict";a.r(e);var n=a("b9be"),i=a("ced2");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("2b31");var s,o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"90704bac",null,!1,n["a"],s);e["default"]=c.exports},ae4f:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("7333")),r=n(a("96f1")),s={name:"EntrustOrder",mixins:[i.default,r.default],data:function(){return{entrustList:["marketOrder","limitOrder"],active:0,dataList:[]}},methods:{changeMenu:function(t){this.active=t}}};e.default=s},b37e:function(t,e,a){"use strict";var n=a("4ea4");a("4de4"),a("d81d"),a("fb6a"),a("4e82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var i=n(a("1da1")),r=n(a("5530")),s=a("2f62"),o=a("9fd1"),c={methods:(0,r.default)({getProductDataHandler:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,o.getProduct)();case 2:a=e.sent,t.clearTimer(),t.setProductData(a.data);case 5:case"end":return e.stop()}}),e)})))()}},(0,s.mapMutations)({setProductData:"SET_PRODUCT_DATA"})),computed:(0,r.default)({getShowData:function(){if("{}"===JSON.stringify(this.getCurrencyData))return[];var t=this.getCurrencyData;return t.slice(0,3)},getTradeData:function(){return 0===this.active?this.getCurrencyData.sort((function(t,e){return e.gain-t.gain})):1===this.active?this.getCurrencyData.sort((function(t,e){return e.count-t.count})):void 0},getLeftData:function(){var t=this;if("undefined"===typeof this.getProductData.length||0===this.getProductData.length||"undefined"===typeof this.getLeftWsData.length||0===this.getLeftWsData.length)return[];var e=JSON.parse(JSON.stringify(this.getProductData)),a=e.map((function(e){var a=t.getLeftWsData.filter((function(t){return t.id===e.id})),n=Object.assign(e,a[0]);return n}));return a,a},getCurrenctData:function(){if(this.getWSData.length&&this.getWSData.length>0){var t=this.getCurrentPageData("opt").id;this.getWSData.slice().sort((function(t,e){return t.id-e.id}));return this.getWSData.filter((function(e){return e.id==t}))[0]}},getWSSortData:function(){if(this.getWSData.length&&this.getWSData.length>0){if(0===this.active){var t=this.getWSData.slice().sort((function(t,e){return e.gain-t.gain}));return t}if(1===this.active){var e=this.getWSData.slice().sort((function(t,e){return e.vol-t.vol}));return e}}}},(0,s.mapGetters)({getProductData:"getProductData",getWSData:"getWSData",getLeftWsData:"getLeftWsData"}))},l=c;e.default=l},b3ed:function(t,e,a){"use strict";var n=a("700a"),i=a.n(n);i.a},b807:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530")),r=a("2f62"),s=n(a("7333")),o=n(a("96f1")),c=n(a("7afb")),l=n(a("b37e")),u={name:"CurrencyData",mixins:[s.default,c.default,o.default,l.default],data:function(){return{opt:{}}},methods:{sliderCurrency:function(){this.$emit("callBack",!0)}},computed:(0,i.default)({getIcon:function(){return function(t){return t>0?"../../static/images/up_icon.png":"../../static/images/down_icon.png"}}},(0,r.mapGetters)({getCurrentTradeType:"getCurrentTradeType"})),created:function(){this.opt=this.getCurrentPageData("opt")}};e.default=u},b9be:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"price_list_class"},[a("v-uni-view",{staticClass:"price_table"},[a("v-uni-view",{staticClass:"table_class"},[a("v-uni-view",{staticClass:"table_hd"},[a("v-uni-view",{staticClass:"table_hd_label"},[t._v(t._s(t.getLangs("buy")))]),a("v-uni-view",{staticClass:"table_hd_label"},[t._v(t._s(t.getLangs("latestPrice")))]),a("v-uni-view",{staticClass:"table_hd_label"},[t._v(t._s(t.getLangs("sell")))])],1),a("v-uni-view",{staticClass:"table_bd"},t._l(t.getPriceList,(function(e,n){return a("v-uni-view",{key:n,staticClass:"labels"},[a("v-uni-view",{staticClass:"table_bd_label"},[t._v(t._s(e[0]))]),a("v-uni-view",{staticClass:"table_bd_label red"},[t._v(t._s(e[1]))]),a("v-uni-view",{staticClass:"table_bd_label green"},[t._v(t._s(e[2]))]),a("v-uni-view",{staticClass:"table_bd_label"},[t._v(t._s(e[3]))])],1)})),1)],1)],1)],1)},r=[]},c3e0:function(t,e,a){"use strict";a.r(e);var n=a("08cb"),i=a("de3c");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("f999");var s,o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"680563ce",null,!1,n["a"],s);e["default"]=c.exports},c5c4:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"trade_main_class"},[a("v-uni-view",{staticClass:"trade_menu"},t._l(t.menuList,(function(e,n){return a("v-uni-view",{key:n,class:["menu_label",n===t.active?"on":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeMenu(n)}}},[t._v(t._s(t.getLangs(e)))])})),1),a("v-uni-view",{staticClass:"trade_action"},t._l(t.actionList,(function(e,n){return a("v-uni-view",{key:n,class:["action_label",t.action===n?e.cls+" on":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeAction(n)}}},[t._v(t._s(t.getLangs(e.name)))])})),1),a("v-uni-view",{staticClass:"trade_form"},[a("v-uni-view",{staticClass:"trade_form_label"},[a("v-uni-view",{staticClass:"trade_inner"},[a("v-uni-text",{staticClass:"sub"},[t._v("| "+t._s(t.getLangs("lever")))]),a("v-uni-input",{staticClass:"input_bar",attrs:{type:"number",disabled:!0,placeholder:t.getLangs("leverEmptyTips")},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.dropshow=!0}},model:{value:t.form.unit,callback:function(e){t.$set(t.form,"unit",e)},expression:"form.unit"}}),a("Dropdown",{directives:[{name:"show",rawName:"v-show",value:t.dropshow,expression:"dropshow"}],attrs:{list:t.dropList},on:{select:function(e){arguments[0]=e=t.$handleEvent(e),t.selectDrop.apply(void 0,arguments)},close:function(e){arguments[0]=e=t.$handleEvent(e),t.dropshow=!1}}})],1)],1),a("v-uni-view",{staticClass:"trade_form_label"},[a("v-uni-view",{staticClass:"trade_inner"},[a("v-uni-text",{staticClass:"sub"},[t._v("| "+t._s(t.getLangs("entrust")))]),0===t.active?a("v-uni-input",{staticClass:"input_bar",attrs:{type:"text",disabled:!0,placeholder:t.getLangs("entrustEmptyTips")},model:{value:t.getCurrenctData&&t.getCurrenctData.close,callback:function(e){t.$set(t.getCurrenctData&&t.getCurrenctData,"close",e)},expression:"getCurrenctData && getCurrenctData.close"}}):t._e(),1===t.active?a("v-uni-input",{staticClass:"input_bar",attrs:{type:"number",placeholder:t.getLangs("entrustEmptyTips")},model:{value:t.form.appointprice,callback:function(e){t.$set(t.form,"appointprice",e)},expression:"form.appointprice"}}):t._e()],1)],1),a("v-uni-view",{staticClass:"trade_form_label"},[a("v-uni-view",{staticClass:"trade_inner"},[a("v-uni-text",{staticClass:"sub"},[t._v("| "+t._s(t.getLangs("lot")))]),a("v-uni-input",{staticClass:"input_bar",attrs:{type:"text",placeholder:t.getLangs("lot")},model:{value:t.form.num,callback:function(e){t.$set(t.form,"num",e)},expression:"form.num"}})],1)],1),a("v-uni-view",{staticClass:"trade_form_label"},[a("v-uni-view",{staticClass:"trade_inner"},[a("v-uni-text",{staticClass:"sub"},[t._v("| "+t._s(t.getLangs("profit")))]),a("v-uni-input",{staticClass:"input_bar",attrs:{type:"text",placeholder:t.getProfit},model:{value:t.form.endprofit,callback:function(e){t.$set(t.form,"endprofit",e)},expression:"form.endprofit"}})],1)],1),a("v-uni-view",{staticClass:"trade_form_label"},[a("v-uni-view",{staticClass:"trade_inner"},[a("v-uni-text",{staticClass:"sub"},[t._v("| "+t._s(t.getLangs("loss")))]),a("v-uni-input",{staticClass:"input_bar",attrs:{type:"text",placeholder:t.getLoss},model:{value:t.form.endloss,callback:function(e){t.$set(t.form,"endloss",e)},expression:"form.endloss"}})],1)],1)],1),a("v-uni-view",{staticClass:"trade_fee"},[a("v-uni-text",{staticClass:"trade_fee_label"},[t._v(t._s(t.getLangs("fee"))+": "+t._s(t.getCurrenctData&&t.getCurrenctData.attach&&t.getCurrenctData.attach.fee))]),a("v-uni-text",{staticClass:"trade_fee_label price"},[t._v(t._s(t.getLangs("deposit"))+": "+t._s(t.getDepoit))])],1),a("v-uni-view",{class:["trade_btn",t.getClass],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.trade.apply(void 0,arguments)}}},[t._v(t._s(0==t.action?t.getLangs("tradep3"):t.getLangs("tradep4")))]),t.loading?a("Loading"):t._e()],1)},r=[]},ced2:function(t,e,a){"use strict";a.r(e);var n=a("661a"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},cee6:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"Loading"};e.default=n},d7d8:function(t,e,a){var n=a("a2fe");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("5932445a",n,!0,{sourceMap:!1,shadowMode:!1})},da9e:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"dropdown"},[a("v-uni-view",{staticClass:"dropdown-mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlerMask.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"ul"},t._l(t.list,(function(e){return a("v-uni-view",{key:e.value,staticClass:"li",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.handlerItem(e.value)}}},[t._v(t._s(e.name))])})),1)],1)},r=[]},de3c:function(t,e,a){"use strict";a.r(e);var n=a("cee6"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},e5ad:function(t,e,a){"use strict";a.r(e);var n=a("8ee7"),i=a("fde6");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("763d");var s,o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"5539d4e6",null,!1,n["a"],s);e["default"]=c.exports},ed6d:function(t,e,a){"use strict";a.r(e);var n=a("88c9"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},ede3:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".k_line_data[data-v-5539d4e6]{padding:0 %?10?%;background:#1c1d31}.k_line_data .k_line_card[data-v-5539d4e6]{background:#1c1d31;padding:%?40?% %?10?% %?20?% %?0?%;-webkit-box-shadow:0 0 10px 0 rgba(0,0,0,.1);box-shadow:0 0 10px 0 rgba(0,0,0,.1);-webkit-border-radius:%?40?% %?40?% 0 0;border-radius:%?40?% %?40?% 0 0;position:relative}.k_line_data .position[data-v-5539d4e6]{position:absolute;right:%?20?%;top:%?20?%;line-height:%?80?%;color:#62759a;font-size:%?28?%}.k_line_data .k_line_card .currency[data-v-5539d4e6]{font-size:%?32?%;color:#bfc5d1;font-weight:700}.k_data[data-v-5539d4e6]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?20?% 0}.k_data .labels[data-v-5539d4e6]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.k_data .labels .current[data-v-5539d4e6]{color:#8d9dbc;font-size:%?26?%;margin-bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?30?%;padding-left:%?40?%}.k_data .labels .live_label[data-v-5539d4e6]{font-size:%?32?%;line-height:%?80?%;padding-left:%?40?%}.k_data .labels .live_label.close[data-v-5539d4e6]{font-size:%?50?%}.k_data .labels .inner[data-v-5539d4e6]{padding:0 %?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.k_data .labels .inner .inner_label[data-v-5539d4e6]{width:50%;font-size:%?26?%;color:#8d9dbc;-webkit-box-sizing:border-box;box-sizing:border-box}.k_data .labels .inner .inner_label[data-v-5539d4e6]:nth-child(even){padding-left:10px}.k_data .labels .inner .inner_label .name[data-v-5539d4e6],\n.k_data .labels .inner .inner_label .value[data-v-5539d4e6]{font-size:%?26?%;color:#8d9dbc;display:block;line-height:%?60?%}.k_data .labels .inner .inner_label .value[data-v-5539d4e6]{color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.currency .iconfont[data-v-5539d4e6]{font-size:%?40?%;padding-left:%?20?%;top:%?10?%}",""]),t.exports=e},f61a:function(t,e,a){"use strict";a.r(e);var n=a("da9e"),i=a("ed6d");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("b3ed");var s,o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"d633bf96",null,!1,n["a"],s);e["default"]=c.exports},f959:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".table_bd .labels[data-v-90704bac]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex}.table_bd_label[data-v-90704bac]:nth-child(2){text-align:right;padding-right:%?10?%}.table_bd_label[data-v-90704bac]:nth-child(3){text-align:left;padding-left:%?10?%}.table_bd_label[data-v-90704bac]{width:25%;-webkit-box-flex:1;-webkit-flex:1;flex:1;line-height:%?40?%;text-align:left}.table_hd[data-v-90704bac]{border-bottom:2px solid hsla(0,0%,100%,.03);margin-bottom:%?10?%}",""]),t.exports=e},f999:function(t,e,a){"use strict";var n=a("934d"),i=a.n(n);i.a},fde6:function(t,e,a){"use strict";a.r(e);var n=a("b807"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a}}]);