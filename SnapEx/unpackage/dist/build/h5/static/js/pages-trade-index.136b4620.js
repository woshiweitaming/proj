(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-trade-index"],{"0a1f":function(t,e,a){var n=a("9078");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("45c4aabb",n,!0,{sourceMap:!1,shadowMode:!1})},"0a2f":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"k_line_data"},[a("v-uni-view",{staticClass:"k_line_card"},[a("v-uni-view",{staticClass:"currency",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sliderCurrency.apply(void 0,arguments)}}},[t._v(t._s(t.opt.currency)+" / USDT"),a("v-uni-text",{staticClass:"iconfont icon-other"})],1),0===t.getCurrentTradeType?a("v-uni-view",{staticClass:"position"},[a("v-uni-text",{staticClass:"iconfont icon-document"}),a("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateTo("/pages/futures_record/index")}}},[t._v(t._s(t.getLangs("positionOrder")))])],1):t._e(),a("v-uni-view",{staticClass:"k_data"},[a("v-uni-view",{staticClass:"labels"},[a("v-uni-text",{staticClass:"current"},[t._v(t._s(t.getLangs("current")))]),a("v-uni-view",{class:["live_label close",t.getClass(t.getCurrenctData&&t.getCurrenctData.gain)]},[t._v(t._s(t.getCurrenctData&&t.getCurrenctData.close))]),a("v-uni-view",{class:["live_label",t.getClass(t.getCurrenctData&&t.getCurrenctData.gain)]},[t._v(t._s(t.getCurrenctData&&t.getCurrenctData.gain)+"%")])],1),a("v-uni-view",{staticClass:"labels"},[a("v-uni-view",{staticClass:"inner"},[a("v-uni-view",{staticClass:"inner_label"},[a("v-uni-text",{staticClass:"name"},[t._v(t._s(t.getLangs("openPrice")))]),a("v-uni-text",{staticClass:"value"},[t._v(t._s(t.getCurrenctData&&t.getCurrenctData.open))])],1),a("v-uni-view",{staticClass:"inner_label"},[a("v-uni-text",{staticClass:"name"},[t._v(t._s(t.getLangs("turnover24h")))]),a("v-uni-text",{staticClass:"value"},[t._v(t._s(t.getCurrenctData&&(Number(t.getCurrenctData.vol)/1e4).toFixed(4))+"W")])],1),a("v-uni-view",{staticClass:"inner_label"},[a("v-uni-text",{staticClass:"name"},[t._v(t._s(t.getLangs("lowestPrice")))]),a("v-uni-text",{staticClass:"value"},[t._v(t._s(t.getCurrenctData&&t.getCurrenctData.low))])],1),a("v-uni-view",{staticClass:"inner_label"},[a("v-uni-text",{staticClass:"name"},[t._v(t._s(t.getLangs("highestPrice")))]),a("v-uni-text",{staticClass:"value"},[t._v(t._s(t.getCurrenctData&&t.getCurrenctData.high))])],1)],1)],1)],1)],1)],1)},r=[]},"0b81":function(t,e,a){"use strict";var n=a("ff01"),i=a.n(n);i.a},"12d9":function(t,e,a){"use strict";a.r(e);var n=a("8175"),i=a("b315");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("5863");var s,o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"68b9dbe8",null,!1,n["a"],s);e["default"]=c.exports},"13cc":function(t,e,a){"use strict";a.r(e);var n=a("a8b9"),i=a("88a6");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("6232"),a("e02a");var s,o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"46b70848",null,!1,n["a"],s);e["default"]=c.exports},1688:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".trade_class[data-v-46b70848]{padding:%?20?%}",""]),t.exports=e},"174a":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-46b70848]{background:#1c1d31}body.?%PAGE?%[data-v-46b70848]{background:#1c1d31}",""]),t.exports=e},"1e68":function(t,e,a){"use strict";a.r(e);var n=a("ccea"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"2fc3":function(t,e,a){"use strict";a.r(e);var n=a("9c17"),i=a("abf4");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("e9f7");var s,o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"629a5d18",null,!1,n["a"],s);e["default"]=c.exports},3549:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"live_data_class"},[a("v-uni-view",{staticClass:"live_data_label"},[a("v-uni-text",{staticClass:"box name"},[t._v(t._s(t.getLangs("leftmoney")))]),a("v-uni-text",{staticClass:"box leftmoney"},[t._v(t._s(t.getLeftmoney))])],1),a("v-uni-view",{staticClass:"live_data_label"},[a("v-uni-view",{staticClass:"inner"},[a("v-uni-text",{class:["box new_price",t.getClass(t.getWSData.gain)]},[t._v(t._s(t.getWSData.close))]),a("v-uni-text",{class:["box ratio",t.getClass(t.getWSData.gain)]},[t._v(t._s((t.getWSData.gain>0?"+":"-")+t.getWSData.gain)+"%")])],1)],1)],1)},r=[]},3726:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n(a("e6f2"));var i=n(a("fd76")),r=n(a("36d8")),s=n(a("04ee")),o=n(a("f2b1")),c=n(a("2fc3")),l=n(a("5b17")),u=n(a("12d9")),d={name:"Trade",mixins:[i.default,r.default,s.default],data:function(){return{id:""}},components:{LiveData:o.default,TradeMenu:c.default,PriceList:l.default,TradeMain:u.default},onLoad:function(t){var e=t.currency,a=t.action,n=t.id;if(this.id=n,"undefined"===typeof e||""===e||"undefined"===typeof a||""===a||"undefined"===typeof n||""===n){this.$tips.showToast(this.getLangs("currencyError"));var i=this;setTimeout((function(){i.back()}),1e3)}this.setTitle(e.toUpperCase())},onShow:function(){},onHide:function(){}};e.default=d},"3fca":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("36d8")),r=n(a("4533")),s=n(a("04ee")),o={name:"LiveData",mixins:[i.default,r.default,s.default]};e.default=o},"4e39":function(t,e,a){"use strict";var n=a("4ea4");a("99af"),a("c740"),a("b680"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530")),r=n(a("ade3"));a("96cf");var s,o=n(a("1da1")),c=a("2f62"),l=n(a("fd76")),u=n(a("36d8")),d=n(a("04ee")),f=n(a("b352")),v=a("08ca"),b=n(a("d8e3")),p=n(a("96e5")),g=n(a("e7a2")),_=n(a("51d0")),h=n(a("798b")),C=n(a("f6a5")),m={name:"TradeMain",mixins:[u.default,d.default,l.default,f.default],data:function(){return{menuList:["marketOrder","limitOrder"],active:0,actionList:[{name:"tradep3",action:"buy",cls:"green_box"},{name:"tradep4",action:"sell",cls:"red_box"}],action:0,form:{appointprice:"",unit:10,num:"",endprofit:"",endloss:""},dropshow:!1,dropshow1:!1,dropList:[{name:"10X",value:10},{name:"50X",value:50},{name:"80X",value:80},{name:"100X",value:100},{name:"150X",value:150},{name:"200X",value:200}],contract:{menuList:["commission","position","history"],active:0}}},components:{EntrustOrder:p.default,Dropdown:g.default,ContractCommissionRecord:_.default,ContractHistoryRecord:h.default,ContractPositionRecord:C.default},methods:(s={trade:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var a,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==t.form.unit){e.next=2;break}return e.abrupt("return",t.$tips.showModel(t.getLangs("sysTips"),t.getLangs("leverEmptyTips"),"",t.getLangs("confirm"),(function(t){}),!1));case 2:if(0!==t.active){e.next=6;break}t.form.appointprice=t.getCurrentCurrencyData&&t.getCurrentCurrencyData.close,e.next=8;break;case 6:if(""!==t.form.appointprice){e.next=8;break}return e.abrupt("return",t.$tips.showModel(t.getLangs("sysTips"),t.getLangs("entrustEmptyTips"),"",t.getLangs("confirm"),(function(t){}),!1));case 8:if(""!==t.form.num){e.next=10;break}return e.abrupt("return",t.$tips.showModel(t.getLangs("sysTips"),t.getLangs("numEmptyTips"),"",t.getLangs("confirm"),(function(t){}),!1));case 10:return a={id:t.getCurrentCurrencyData.id,type:t.action,paytype:t.active},n=Object.assign(t.form,a),e.next=14,(0,v.transaction)(n);case 14:i=e.sent,b.default.checkCode(i),t.backTips(i);case 17:case"end":return e.stop()}}),e)})))()},changeMenu:function(t){this.active=t,this.form.appointprice=""},changeAction:function(t){this.action=t},openDrop:function(){this.dropshow1=!0,this.dropshow=!1},openDrop1:function(){this.dropshow=!0,this.dropshow1=!1},selectDrop:function(t){this.form.unit=t,this.dropshow=!1},selectDrop1:function(t){this.dropshow1=!1},changeContractType:function(t){this.contract.active=t},stopClick:function(t){t.stopPropagation()},eventClick:function(){this.dropshow=!1,this.dropshow1=!1}},(0,r.default)(s,"selectDrop1",(function(t){var e=this.menuList.findIndex((function(e){return e==t}));this.active=e,this.dropshow1=!1})),(0,r.default)(s,"selectDrop",(function(t){this.form.unit=t,this.dropshow=!1})),s),computed:(0,i.default)({getPrice:function(){return(this.form.num*this.getUnit*this.getCurrentCurrencyData.close*this.getRatio).toFixed(2)},getDepoit:function(){return 250*this.form.num},getProfit:function(){return 0===this.action?"".concat(this.getLangs("min")," ").concat(this.getCurrentCurrencyData&&this.getCurrentCurrencyData.attach&&this.getCurrentCurrencyData.attach.sprice0):"".concat(this.getLangs("max")," ").concat(this.getCurrentCurrencyData&&this.getCurrentCurrencyData.attach&&this.getCurrentCurrencyData.attach.sprice1)},getLoss:function(){return 0===this.action?"".concat(this.getLangs("max")," ").concat(this.getCurrentCurrencyData&&this.getCurrentCurrencyData.attach&&this.getCurrentCurrencyData.attach.eprice1):"".concat(this.getLangs("min")," ").concat(this.getCurrentCurrencyData&&this.getCurrentCurrencyData.attach&&this.getCurrentCurrencyData.attach.eprice0)},getFee:function(){return this.getCurrentCurrencyData.attach?this.getCurrentCurrencyData.attach.fee:0},getUnit:function(){return this.getCurrentCurrencyData.attach?this.getCurrentCurrencyData.attach.unit:0},getRatio:function(){return this.getCurrentCurrencyData.attach&&this.getCurrentCurrencyData.attach.ratio?this.getCurrentCurrencyData.attach.ratio:0},getClass:function(){return 0==this.action?"green_box":"red_box"}},(0,c.mapGetters)({getTradeAction:"getTradeAction"}))};e.default=m},5160:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".live_data_class[data-v-540e84ba]{display:-webkit-box;display:-webkit-flex;display:flex;border-bottom:1px solid hsla(0,0%,100%,.05);padding-bottom:%?20?%}.live_data_label[data-v-540e84ba]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.live_data_label .box[data-v-540e84ba]{display:block;color:#fff;font-size:%?28?%}.live_data_label .inner .box[data-v-540e84ba]{text-align:right}.live_data_label .name[data-v-540e84ba]{color:hsla(0,0%,100%,.5)}.live_data_label .leftmoney[data-v-540e84ba]{color:#fff;font-size:%?40?%}.live_data_label .new_price[data-v-540e84ba]{font-size:%?44?%}",""]),t.exports=e},5863:function(t,e,a){"use strict";var n=a("f294"),i=a.n(n);i.a},"5b17":function(t,e,a){"use strict";a.r(e);var n=a("8199"),i=a("f541");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("987a");var s,o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"43c4eef2",null,!1,n["a"],s);e["default"]=c.exports},6232:function(t,e,a){"use strict";var n=a("6dd7"),i=a.n(n);i.a},6331:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".trade_menu[data-v-629a5d18]{text-align:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 20%}.trade_menu_label[data-v-629a5d18]{width:30%;-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?30?%;color:#aaa;margin-top:%?20?%;line-height:%?60?%}.trade_menu_label.on.on1[data-v-629a5d18]{border-bottom:1px solid #f73846;color:#f73846!important}.trade_menu_label.on.on0[data-v-629a5d18]{border-bottom:1px solid #27c173;color:#27c173!important}",""]),t.exports=e},"6cae":function(t,e,a){var n=a("1688");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("4e36a8f4",n,!0,{sourceMap:!1,shadowMode:!1})},"6d3d":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".trade_main_class[data-v-68b9dbe8]{overflow:auto}.trade_form[data-v-68b9dbe8]{width:100%;font-size:0;padding:%?10?%}.trade_form .trade_form_label[data-v-68b9dbe8]{width:100%;position:relative;display:inline-block;box-sizing:border-box;margin-bottom:%?20?%;vertical-align:top;display:-webkit-box;display:-webkit-flex;display:flex;border:1px solid #eee}.trade_form .trade_form_label.no[data-v-68b9dbe8]{border:none}.trade_form .trade_inner[data-v-68b9dbe8]{background:#fff;padding-right:%?80?%;position:relative}.trade_form .trade_form_label .input_bar[data-v-68b9dbe8]{color:#333;width:100%;font-size:%?26?%;border-radius:%?10?%;padding:%?20?%;overflow:hidden}.trade_form .trade_form_label .sub[data-v-68b9dbe8]{font-size:%?26?%;line-height:%?60?%;color:#999;position:absolute;right:%?10?%;top:%?8?%}.trade_fee[data-v-68b9dbe8]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?20?%}.trade_fee_label[data-v-68b9dbe8]{-webkit-box-flex:1;-webkit-flex:1;flex:1;width:50%;font-size:%?28?%;color:#57627c}.trade_fee_label.price[data-v-68b9dbe8]{text-align:right}.trade_btn[data-v-68b9dbe8]{text-align:center;line-height:%?70?%;border-radius:%?10?%;margin-top:%?20?%;font-size:%?30?%;margin-bottom:%?20?%;color:#fff;width:100%;display:block}.trade_menu[data-v-68b9dbe8]{display:-webkit-box;display:-webkit-flex;display:flex;text-align:center;border-bottom:1px solid hsla(0,0%,100%,.05)}.trade_menu .menu_label[data-v-68b9dbe8]{width:50%;font-size:%?28?%;color:#fff;line-height:%?80?%;color:hsla(0,0%,100%,.7)}.trade_menu .menu_label.on[data-v-68b9dbe8]{color:#fff;border-bottom:2px solid #5d56ec}.trade_action[data-v-68b9dbe8]{width:95%;display:-webkit-box;display:-webkit-flex;display:flex;margin:%?20?% auto;text-align:center}.trade_action .action_label[data-v-68b9dbe8]{text-align:center;line-height:%?60?%;width:50%;font-size:%?28?%;margin:0 %?10?%;border-radius:%?20?%;color:#333;background:#f9f9f9}.trade_action .action_label.on[data-v-68b9dbe8]{color:#fff}.trade_action .action_label.on.on0[data-v-68b9dbe8]{background:#27c173}.trade_action .action_label.on.on1[data-v-68b9dbe8]{background:#c12d3b}.record_menu[data-v-68b9dbe8]{margin:auto;display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:%?20?%;padding:0 %?20?%}.record_menu .label[data-v-68b9dbe8]{width:50%;text-align:center;font-size:%?28?%;line-height:%?60?%;color:#fff}.record_menu .label.on[data-v-68b9dbe8]{background:#2970e6;border-radius:%?10?%;color:#fff}.record_bar[data-v-68b9dbe8]{margin-top:%?40?%}.trade_action .action_label[data-v-68b9dbe8]{border-radius:%?10?%}.btns[data-v-68b9dbe8]{padding:0 %?10?%}.trade_inners[data-v-68b9dbe8]:first-child{width:60%;padding-right:2px}.trade_inners[data-v-68b9dbe8]:last-child{width:40%;padding-left:2px}.trade_inners .input_bar[data-v-68b9dbe8]{padding:%?20?%!important;background:#fff;border-radius:0!important;color:#333}.select[data-v-68b9dbe8]{width:100%;border-radius:0;background:#fff;height:%?79?%;border:1px solid #eee}.select_drop[data-v-68b9dbe8]{z-index:10000;border-radius:0}.select .iconfont[data-v-68b9dbe8]{right:-10px}",""]),t.exports=e},"6dd7":function(t,e,a){var n=a("174a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("5e73b533",n,!0,{sourceMap:!1,shadowMode:!1})},"731d":function(t,e,a){var n=a("6331");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("34b8b269",n,!0,{sourceMap:!1,shadowMode:!1})},7558:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("fd76")),r=n(a("36d8")),s=n(a("04ee")),o=n(a("b352")),c={name:"PriceList",mixins:[i.default,r.default,s.default,o.default],computed:{getPriceList:function(){var t=this.getCurrenctData&&this.getCurrenctData.latestPrice&&this.getCurrenctData.latestPrice.buy,e=this.getCurrenctData&&this.getCurrenctData.latestPrice&&this.getCurrenctData.latestPrice.sell;if("undefined"===typeof t||"undefined"===typeof e)return[];var a=[t,e];return a}}};e.default=c},"75a9":function(t,e,a){var n=a("5160");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("14130504",n,!0,{sourceMap:!1,shadowMode:!1})},8175:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"trade_main_class",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.eventClick.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"trade_action"},t._l(t.actionList,(function(e,n){return a("v-uni-view",{key:n,class:["action_label",t.action===n?e.cls+" on":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeAction(n)}}},[t._v(t._s(t.getLangs(e.name)))])})),1),a("v-uni-view",{staticClass:"trade_form"},[a("v-uni-view",{staticClass:"trade_form_label no"},[a("v-uni-view",{staticClass:"trade_inners"},[a("v-uni-view",{staticClass:"select",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopClick.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"select_label",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openDrop.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"select_name"},[t._v(t._s(t.getLangs(t.menuList[t.active])))]),a("v-uni-text",{staticClass:"iconfont icon-unfold"})],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.dropshow1,expression:"dropshow1"}],staticClass:"select_drop"},[a("v-uni-view",{staticClass:"selelct_drop_main",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopClick.apply(void 0,arguments)}}},t._l(t.menuList,(function(e,n){return a("v-uni-view",{key:n,staticClass:"select_drop_label",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.selectDrop1(e)}}},[t._v(t._s(t.getLangs(e)))])})),1)],1)],1)],1),a("v-uni-view",{staticClass:"trade_inners"},[a("v-uni-view",{staticClass:"select",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopClick.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"select_label",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openDrop1.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"select_name"},[t._v(t._s(t.form.unit))]),a("v-uni-text",{staticClass:"iconfont icon-unfold"})],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.dropshow,expression:"dropshow"}],staticClass:"select_drop"},[a("v-uni-view",{staticClass:"selelct_drop_main",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopClick.apply(void 0,arguments)}}},t._l(t.dropList,(function(e,n){return a("v-uni-view",{key:n,staticClass:"select_drop_label",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.selectDrop(e.value)}}},[t._v(t._s(e.name))])})),1)],1)],1)],1)],1),a("v-uni-view",{staticClass:"trade_form_label"},[a("v-uni-view",{staticClass:"trade_inner"},[a("v-uni-text",{staticClass:"sub"},[t._v("| "+t._s(t.getLangs("entrust")))]),0===t.active?a("v-uni-input",{staticClass:"input_bar",attrs:{type:"text",disabled:!0,placeholder:t.getLangs("entrustEmptyTips")},model:{value:t.getCurrentCurrencyData&&t.getCurrentCurrencyData.close,callback:function(e){t.$set(t.getCurrentCurrencyData&&t.getCurrentCurrencyData,"close",e)},expression:"getCurrentCurrencyData && getCurrentCurrencyData.close"}}):t._e(),1===t.active?a("v-uni-input",{staticClass:"input_bar",attrs:{type:"number",placeholder:t.getLangs("entrustEmptyTips")},model:{value:t.form.appointprice,callback:function(e){t.$set(t.form,"appointprice",e)},expression:"form.appointprice"}}):t._e()],1)],1),a("v-uni-view",{staticClass:"trade_form_label"},[a("v-uni-view",{staticClass:"trade_inner"},[a("v-uni-text",{staticClass:"sub"},[t._v("| "+t._s(t.getLangs("lot")))]),a("v-uni-input",{staticClass:"input_bar",attrs:{type:"text",placeholder:t.getLangs("lot")},model:{value:t.form.num,callback:function(e){t.$set(t.form,"num",e)},expression:"form.num"}})],1)],1),a("v-uni-view",{staticClass:"trade_form_label"},[a("v-uni-view",{staticClass:"trade_inner"},[a("v-uni-text",{staticClass:"sub"},[t._v("| "+t._s(t.getLangs("profit")))]),a("v-uni-input",{staticClass:"input_bar",attrs:{type:"text"},model:{value:t.form.endprofit,callback:function(e){t.$set(t.form,"endprofit",e)},expression:"form.endprofit"}})],1)],1),a("v-uni-view",{staticClass:"trade_form_label"},[a("v-uni-view",{staticClass:"trade_inner"},[a("v-uni-text",{staticClass:"sub"},[t._v("| "+t._s(t.getLangs("loss")))]),a("v-uni-input",{staticClass:"input_bar",attrs:{type:"text"},model:{value:t.form.endloss,callback:function(e){t.$set(t.form,"endloss",e)},expression:"form.endloss"}})],1)],1)],1),a("v-uni-view",{staticClass:"trade_fee"},[a("v-uni-text",{staticClass:"trade_fee_label"},[t._v(t._s(t.getLangs("fee"))+": "+t._s(t.getCurrentCurrencyData&&t.getCurrentCurrencyData.attach&&t.getCurrentCurrencyData.attach.fee))]),a("v-uni-text",{staticClass:"trade_fee_label price"},[t._v(t._s(t.getLangs("deposit"))+": "+t._s(t.getDepoit))])],1),a("v-uni-view",{staticClass:"btns"},[a("v-uni-view",{class:["trade_btn",t.getClass],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.trade.apply(void 0,arguments)}}},[t._v(t._s(0==t.action?t.getLangs("tradep3"):t.getLangs("tradep4")))])],1)],1)},r=[]},8199:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"price_list_class"},[a("v-uni-view",{staticClass:"price_table"},[a("v-uni-view",{staticClass:"table_class"},[a("v-uni-view",{staticClass:"table_hd"},[a("v-uni-view",{staticClass:"table_hd_label"},[t._v(t._s(t.getLangs("price")))]),a("v-uni-view",{staticClass:"table_hd_label"},[t._v(t._s(t.getLangs("quantity")))])],1),a("v-uni-view",{staticClass:"table_bd f"},t._l(t.getPriceList[0],(function(e,n){return a("v-uni-view",{key:n,staticClass:"labels"},[a("v-uni-view",{staticClass:"table_bd_label red"},[t._v(t._s(e.price))]),a("v-uni-view",{staticClass:"table_bd_label"},[t._v(t._s(e.amount))])],1)})),1),a("v-uni-view",{staticClass:"datas"},[a("v-uni-view",{class:["live_label close",t.getClass(t.getCurrenctData&&t.getCurrenctData.gain)]},[t._v(t._s(t.getCurrenctData&&t.getCurrenctData.close))])],1),a("v-uni-view",{staticClass:"table_bd s"},t._l(t.getPriceList[1],(function(e,n){return a("v-uni-view",{key:n,staticClass:"labels"},[a("v-uni-view",{staticClass:"table_bd_label green"},[t._v(t._s(e.price))]),a("v-uni-view",{staticClass:"table_bd_label"},[t._v(t._s(e.amount))])],1)})),1)],1)],1)],1)},r=[]},8505:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},i=n;e.default=i},"88a6":function(t,e,a){"use strict";a.r(e);var n=a("3726"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},9078:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".price_list_class[data-v-43c4eef2]{padding-right:%?10?%}.table_bd .labels[data-v-43c4eef2]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex}.table_bd_label[data-v-43c4eef2]:nth-child(2){text-align:right;padding-right:%?10?%}.table_bd_label[data-v-43c4eef2]:nth-child(3){text-align:left;padding-left:%?10?%}.table_bd_label[data-v-43c4eef2]{width:25%;-webkit-box-flex:1;-webkit-flex:1;flex:1;line-height:%?60?%;text-align:left}.table_hd[data-v-43c4eef2]{border-bottom:2px solid hsla(0,0%,100%,.03);margin-bottom:%?10?%}.table_bd.f[data-v-43c4eef2]{border-bottom:1px solid #eee}.table_bd.s[data-v-43c4eef2]{border-top:1px solid #eee}.datas[data-v-43c4eef2]{margin-top:%?30?%;padding-left:%?20?%;margin-bottom:%?20?%}",""]),t.exports=e},"987a":function(t,e,a){"use strict";var n=a("0a1f"),i=a.n(n);i.a},"9c17":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"trade_menu"},t._l(t.menuList,(function(e,n){return a("v-uni-view",{key:n,class:["trade_menu_label",t.menuActive===n?"on on"+t.menuActive:""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeMenu(n)}}},[t._v(t._s(t.getLangs(e)))])})),1)},r=[]},a6de:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".k_line_data[data-v-545c0b68]{padding:0 %?10?%;background:#1c1d31}.k_line_data .k_line_card[data-v-545c0b68]{background:#1c1d31;padding:%?40?% %?10?% %?20?% %?0?%;box-shadow:0 0 10px 0 rgba(0,0,0,.1);border-radius:%?40?% %?40?% 0 0;position:relative}.k_line_data .position[data-v-545c0b68]{position:absolute;right:%?20?%;top:%?20?%;line-height:%?80?%;color:#62759a;font-size:%?28?%}.k_line_data .k_line_card .currency[data-v-545c0b68]{font-size:%?32?%;color:#bfc5d1;font-weight:700}.k_data[data-v-545c0b68]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?20?% 0}.k_data .labels[data-v-545c0b68]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.k_data .labels .current[data-v-545c0b68]{color:#8d9dbc;font-size:%?26?%;margin-bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?30?%;padding-left:%?40?%}.k_data .labels .live_label[data-v-545c0b68]{font-size:%?32?%;line-height:%?80?%;padding-left:%?40?%}.k_data .labels .live_label.close[data-v-545c0b68]{font-size:%?50?%}.k_data .labels .inner[data-v-545c0b68]{padding:0 %?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.k_data .labels .inner .inner_label[data-v-545c0b68]{width:50%;font-size:%?26?%;color:#8d9dbc;box-sizing:border-box}.k_data .labels .inner .inner_label[data-v-545c0b68]:nth-child(even){padding-left:10px}.k_data .labels .inner .inner_label .name[data-v-545c0b68],\n.k_data .labels .inner .inner_label .value[data-v-545c0b68]{font-size:%?26?%;color:#8d9dbc;display:block;line-height:%?60?%}.k_data .labels .inner .inner_label .value[data-v-545c0b68]{color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.currency .iconfont[data-v-545c0b68]{font-size:%?40?%;padding-left:%?20?%;top:%?10?%}",""]),t.exports=e},a8b9:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"trade_class"},[a("LiveData"),a("TradeMenu"),a("PriceList"),a("TradeMain"),a("v-uni-view",{staticClass:"table_class"})],1)},r=[]},abf4:function(t,e,a){"use strict";a.r(e);var n=a("ad5d"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},ad5d:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530")),r=a("2f62"),s=n(a("36d8")),o=n(a("fd76")),c={name:"TradeMenu",mixins:[s.default,o.default],data:function(){return{menuList:["buy","sell"],menuActive:0}},methods:(0,i.default)({changeMenu:function(t){this.menuActive=t,this.setTradeAction(t)}},(0,r.mapMutations)({setTradeAction:"SET_TRADE_ACTION"})),created:function(){this.menuActive=this.getCurrentPageData("opt").action&&"buy"!==this.getCurrentPageData("opt").action?1:0,this.setTradeAction(this.menuActive)}};e.default=c},b315:function(t,e,a){"use strict";a.r(e);var n=a("4e39"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},ccea:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530")),r=a("2f62"),s=n(a("fd76")),o=n(a("36d8")),c=n(a("04ee")),l=n(a("b352")),u={name:"CurrencyData",mixins:[s.default,c.default,o.default,l.default],data:function(){return{opt:{}}},methods:{sliderCurrency:function(){this.$emit("callBack",!0)}},computed:(0,i.default)({getIcon:function(){return function(t){return t>0?"../../static/images/up_icon.png":"../../static/images/down_icon.png"}}},(0,r.mapGetters)({getCurrentTradeType:"getCurrentTradeType"})),created:function(){this.opt=this.getCurrentPageData("opt")}};e.default=u},db16:function(t,e,a){"use strict";var n=a("75a9"),i=a.n(n);i.a},e02a:function(t,e,a){"use strict";var n=a("6cae"),i=a.n(n);i.a},e6f2:function(t,e,a){"use strict";a.r(e);var n=a("0a2f"),i=a("1e68");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("0b81");var s,o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"545c0b68",null,!1,n["a"],s);e["default"]=c.exports},e9f7:function(t,e,a){"use strict";var n=a("731d"),i=a.n(n);i.a},edc5:function(t,e,a){"use strict";a.r(e);var n=a("3fca"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},f294:function(t,e,a){var n=a("6d3d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("0bfd660d",n,!0,{sourceMap:!1,shadowMode:!1})},f2b1:function(t,e,a){"use strict";a.r(e);var n=a("3549"),i=a("edc5");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("db16");var s,o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"540e84ba",null,!1,n["a"],s);e["default"]=c.exports},f541:function(t,e,a){"use strict";a.r(e);var n=a("7558"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},fd76:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530")),r=a("2f62"),s=n(a("79ef")),o=n(a("8505")),c=n(a("11d3")),l=n(a("d8e3")),u={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,e){var a="undefined"===typeof e||"{}"===JSON.stringify(e)?"":"?".concat(c.default.convertObj(e));uni.navigateTo({url:t+a})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=o.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?s.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var e=getCurrentPages(),a=e[e.length-1];switch(t){case"opt":return a.options;case"route":return a.route;default:return a}},backToPage:function(t){o.default.getOS();this.navigateTo(t)},backTips:function(t){if(l.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,i.default)({createOSClass:function(){return"h5"}},(0,r.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=o.default.getOS()}},d=u;e.default=d},ff01:function(t,e,a){var n=a("a6de");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("e6cbea86",n,!0,{sourceMap:!1,shadowMode:!1})}}]);