(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-k_inner-index~pages-trade-index"],{"0986":function(t,e,a){var n=a("eb07");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("085f4961",n,!0,{sourceMap:!1,shadowMode:!1})},"2b05":function(t,e,a){var n=a("7880");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("825b871e",n,!0,{sourceMap:!1,shadowMode:!1})},3574:function(t,e,a){"use strict";var n=a("0986"),i=a.n(n);i.a},"3c37":function(t,e,a){"use strict";var n=a("4ea4");a("99af"),a("b680"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530"));a("96cf");var r=n(a("1da1")),s=a("2f62"),c=n(a("34b9")),l=n(a("ec43")),o=n(a("c255")),u=n(a("78d2")),d=a("e13b"),f=n(a("87bb")),v=n(a("e55d")),b=n(a("8e7b")),p={name:"TradeMain",mixins:[l.default,o.default,c.default,u.default],data:function(){return{menuList:["marketOrder","limitOrder"],active:0,actionList:[{name:"tradep3",action:"buy",cls:"green_box"},{name:"tradep4",action:"sell",cls:"red_box"}],action:0,form:{appointprice:"",unit:10,num:"",endprofit:"",endloss:""},dropshow:!1,dropList:[{name:"10X",value:10},{name:"50X",value:50},{name:"80X",value:80},{name:"100X",value:100},{name:"150X",value:150},{name:"200X",value:200}]}},components:{EntrustOrder:v.default,Dropdown:b.default},methods:{trade:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var a,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==t.form.unit){e.next=2;break}return e.abrupt("return",t.$tips.showModel(t.getLangs("sysTips"),t.getLangs("leverEmptyTips"),"",t.getLangs("confirm"),(function(t){}),!1));case 2:if(0!==t.active){e.next=6;break}t.form.appointprice=t.getCurrenctData.close,e.next=8;break;case 6:if(""!==t.form.appointprice){e.next=8;break}return e.abrupt("return",t.$tips.showModel(t.getLangs("sysTips"),t.getLangs("entrustEmptyTips"),"",t.getLangs("confirm"),(function(t){}),!1));case 8:if(""!==t.form.num){e.next=10;break}return e.abrupt("return",t.$tips.showModel(t.getLangs("sysTips"),t.getLangs("numEmptyTips"),"",t.getLangs("confirm"),(function(t){}),!1));case 10:return a={id:t.getCurrentPageData("opt").id,type:t.action,paytype:t.active},n=Object.assign(t.form,a),e.next=14,(0,d.transaction)(n);case 14:i=e.sent,f.default.checkCode(i),t.backTips(i);case 17:case"end":return e.stop()}}),e)})))()},changeMenu:function(t){this.active=t,this.form.appointprice=""},changeAction:function(t){this.action=t},selectDrop:function(t){this.form.unit=t,this.dropshow=!1}},computed:(0,i.default)({getPrice:function(){return"undefined"==typeof this.getCurrenctData?0:(this.form.num*this.getUnit*this.getCurrenctData.close*this.getRatio).toFixed(2)},getDepoit:function(){return 250*this.form.num},getProfit:function(){return"undefined"==typeof this.getCurrenctData?"":0===this.action?"".concat(this.getLangs("min")," ").concat(this.getCurrenctData.attach&&this.getCurrenctData.attach.sprice0):"".concat(this.getLangs("max")," ").concat(this.getCurrenctData.attach&&this.getCurrenctData.attach.sprice1)},getLoss:function(){return"undefined"==typeof this.getCurrenctData?"":0===this.action?"".concat(this.getLangs("max")," ").concat(this.getCurrenctData.attach&&this.getCurrenctData.attach.eprice1):"".concat(this.getLangs("min")," ").concat(this.getCurrenctData.attach&&this.getCurrenctData.attach.eprice0)},getFee:function(){return this.getCurrenctData.attach?this.getCurrenctData.attach.fee:0},getUnit:function(){return this.getCurrenctData.attach?this.getCurrenctData.attach.unit:0},getRatio:function(){return this.getCurrenctData.attach&&this.getCurrenctData.attach.ratio?this.getCurrenctData.attach.ratio:0},getClass:function(){return 0==this.action?"green_box":"red_box"}},(0,s.mapGetters)({getTradeAction:"getTradeAction"}))};e.default=p},"4cf9":function(t,e,a){"use strict";a.r(e);var n=a("e8e7"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"628f":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"price_list_class"},[a("v-uni-view",{staticClass:"price_table"},[a("v-uni-view",{staticClass:"table_class"},[a("v-uni-view",{staticClass:"table_hd"},[a("v-uni-view",{staticClass:"table_hd_label"},[t._v(t._s(t.getLangs("buy")))]),a("v-uni-view",{staticClass:"table_hd_label"},[t._v(t._s(t.getLangs("latestPrice")))]),a("v-uni-view",{staticClass:"table_hd_label"},[t._v(t._s(t.getLangs("sell")))])],1),a("v-uni-view",{staticClass:"table_bd"},t._l(t.getPriceList,(function(e,n){return a("v-uni-view",{key:n,staticClass:"labels"},[a("v-uni-view",{staticClass:"table_bd_label"},[t._v(t._s(e[0]))]),a("v-uni-view",{staticClass:"table_bd_label red"},[t._v(t._s(e[1]))]),a("v-uni-view",{staticClass:"table_bd_label green"},[t._v(t._s(e[2]))]),a("v-uni-view",{staticClass:"table_bd_label"},[t._v(t._s(e[3]))])],1)})),1)],1)],1)],1)},r=[]},"77d9":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".trade_main_class[data-v-72ce243c]{margin-top:%?20?%;padding-top:%?20?%;padding-left:%?20?%;padding-right:%?20?%;border-top:1px solid hsla(0,0%,100%,.05)}.trade_form[data-v-72ce243c]{width:100%;font-size:0}.trade_form .trade_form_label[data-v-72ce243c]{width:50%;position:relative;padding:0 %?20?%;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;margin-bottom:%?20?%;vertical-align:top}.trade_form .trade_inner[data-v-72ce243c]{background:#1e2533;padding-right:%?80?%;position:relative}.trade_form .trade_form_label .input_bar[data-v-72ce243c]{color:#fff;width:100%;font-size:%?26?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;padding:%?20?%;overflow:hidden}.trade_form .trade_form_label .sub[data-v-72ce243c]{font-size:%?26?%;line-height:%?60?%;color:hsla(0,0%,100%,.5);position:absolute;right:%?10?%;top:%?8?%}.trade_fee[data-v-72ce243c]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?20?%}.trade_fee_label[data-v-72ce243c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;width:50%;font-size:%?28?%;color:#57627c}.trade_fee_label.price[data-v-72ce243c]{text-align:right}.trade_btn[data-v-72ce243c]{text-align:center;line-height:%?80?%;-webkit-border-radius:%?20?%;border-radius:%?20?%;margin-top:%?20?%;font-size:%?30?%;margin-bottom:%?20?%;color:#fff;width:100%;position:fixed;bottom:%?50?%;width:80%;left:50%;margin-left:-40%}.trade_menu[data-v-72ce243c]{display:-webkit-box;display:-webkit-flex;display:flex;text-align:center;border-bottom:1px solid hsla(0,0%,100%,.05);margin-bottom:%?20?%}.trade_menu .menu_label[data-v-72ce243c]{width:50%;font-size:%?28?%;color:#fff;line-height:%?80?%;color:hsla(0,0%,100%,.7)}.trade_menu .menu_label.on[data-v-72ce243c]{color:#fff;border-bottom:2px solid #5d56ec}.trade_action[data-v-72ce243c]{width:80%;display:-webkit-box;display:-webkit-flex;display:flex;margin:%?20?% auto;text-align:center}.trade_action .action_label[data-v-72ce243c]{text-align:center;line-height:%?60?%;width:50%;color:#aaa;font-size:%?28?%;margin:0 %?10?%;-webkit-border-radius:%?20?%;border-radius:%?20?%;color:#fff}.trade_action .action_label.on[data-v-72ce243c]{color:#fff}.trade_action .action_label.on.on0[data-v-72ce243c]{background:#27c173}.trade_action .action_label.on.on1[data-v-72ce243c]{background:#c12d3b}",""]),t.exports=e},7880:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".table_bd .labels[data-v-90704bac]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex}.table_bd_label[data-v-90704bac]:nth-child(2){text-align:right;padding-right:%?10?%}.table_bd_label[data-v-90704bac]:nth-child(3){text-align:left;padding-left:%?10?%}.table_bd_label[data-v-90704bac]{width:25%;-webkit-box-flex:1;-webkit-flex:1;flex:1;line-height:%?40?%;text-align:left}.table_hd[data-v-90704bac]{border-bottom:2px solid hsla(0,0%,100%,.03);margin-bottom:%?10?%}",""]),t.exports=e},7927:function(t,e,a){"use strict";a.r(e);var n=a("628f"),i=a("a15b7");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("a329");var s,c=a("f0c5"),l=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"90704bac",null,!1,n["a"],s);e["default"]=l.exports},"7faf":function(t,e,a){"use strict";a.r(e);var n=a("84aa"),i=a("991b");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("9641");var s,c=a("f0c5"),l=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"72ce243c",null,!1,n["a"],s);e["default"]=l.exports},"81a7":function(t,e,a){var n=a("77d9");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("7f3e2a80",n,!0,{sourceMap:!1,shadowMode:!1})},"84aa":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"trade_main_class"},[a("v-uni-view",{staticClass:"trade_menu"},t._l(t.menuList,(function(e,n){return a("v-uni-view",{key:n,class:["menu_label",n===t.active?"on":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeMenu(n)}}},[t._v(t._s(t.getLangs(e)))])})),1),a("v-uni-view",{staticClass:"trade_action"},t._l(t.actionList,(function(e,n){return a("v-uni-view",{key:n,class:["action_label",t.action===n?e.cls+" on":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeAction(n)}}},[t._v(t._s(t.getLangs(e.name)))])})),1),a("v-uni-view",{staticClass:"trade_form"},[a("v-uni-view",{staticClass:"trade_form_label"},[a("v-uni-view",{staticClass:"trade_inner"},[a("v-uni-text",{staticClass:"sub"},[t._v("| "+t._s(t.getLangs("lever")))]),a("v-uni-input",{staticClass:"input_bar",attrs:{type:"number",disabled:!0,placeholder:t.getLangs("leverEmptyTips")},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.dropshow=!0}},model:{value:t.form.unit,callback:function(e){t.$set(t.form,"unit",e)},expression:"form.unit"}}),a("Dropdown",{directives:[{name:"show",rawName:"v-show",value:t.dropshow,expression:"dropshow"}],attrs:{list:t.dropList},on:{select:function(e){arguments[0]=e=t.$handleEvent(e),t.selectDrop.apply(void 0,arguments)},close:function(e){arguments[0]=e=t.$handleEvent(e),t.dropshow=!1}}})],1)],1),a("v-uni-view",{staticClass:"trade_form_label"},[a("v-uni-view",{staticClass:"trade_inner"},[a("v-uni-text",{staticClass:"sub"},[t._v("| "+t._s(t.getLangs("entrust")))]),0===t.active?a("v-uni-input",{staticClass:"input_bar",attrs:{type:"text",disabled:!0,placeholder:t.getLangs("entrustEmptyTips")},model:{value:t.getCurrenctData&&t.getCurrenctData.close,callback:function(e){t.$set(t.getCurrenctData&&t.getCurrenctData,"close",e)},expression:"getCurrenctData && getCurrenctData.close"}}):t._e(),1===t.active?a("v-uni-input",{staticClass:"input_bar",attrs:{type:"number",placeholder:t.getLangs("entrustEmptyTips")},model:{value:t.form.appointprice,callback:function(e){t.$set(t.form,"appointprice",e)},expression:"form.appointprice"}}):t._e()],1)],1),a("v-uni-view",{staticClass:"trade_form_label"},[a("v-uni-view",{staticClass:"trade_inner"},[a("v-uni-text",{staticClass:"sub"},[t._v("| "+t._s(t.getLangs("lot")))]),a("v-uni-input",{staticClass:"input_bar",attrs:{type:"text",placeholder:t.getLangs("lot")},model:{value:t.form.num,callback:function(e){t.$set(t.form,"num",e)},expression:"form.num"}})],1)],1),a("v-uni-view",{staticClass:"trade_form_label"},[a("v-uni-view",{staticClass:"trade_inner"},[a("v-uni-text",{staticClass:"sub"},[t._v("| "+t._s(t.getLangs("profit")))]),a("v-uni-input",{staticClass:"input_bar",attrs:{type:"text",placeholder:t.getProfit},model:{value:t.form.endprofit,callback:function(e){t.$set(t.form,"endprofit",e)},expression:"form.endprofit"}})],1)],1),a("v-uni-view",{staticClass:"trade_form_label"},[a("v-uni-view",{staticClass:"trade_inner"},[a("v-uni-text",{staticClass:"sub"},[t._v("| "+t._s(t.getLangs("loss")))]),a("v-uni-input",{staticClass:"input_bar",attrs:{type:"text",placeholder:t.getLoss},model:{value:t.form.endloss,callback:function(e){t.$set(t.form,"endloss",e)},expression:"form.endloss"}})],1)],1)],1),a("v-uni-view",{staticClass:"trade_fee"},[a("v-uni-text",{staticClass:"trade_fee_label"},[t._v(t._s(t.getLangs("fee"))+": "+t._s(t.getCurrenctData&&t.getCurrenctData.attach&&t.getCurrenctData.attach.fee))]),a("v-uni-text",{staticClass:"trade_fee_label price"},[t._v(t._s(t.getLangs("deposit"))+": "+t._s(t.getDepoit))])],1),a("v-uni-view",{class:["trade_btn",t.getClass],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.trade.apply(void 0,arguments)}}},[t._v(t._s(0==t.action?t.getLangs("tradep3"):t.getLangs("tradep4")))])],1)},r=[]},9641:function(t,e,a){"use strict";var n=a("81a7"),i=a.n(n);i.a},"991b":function(t,e,a){"use strict";a.r(e);var n=a("3c37"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"9d7c":function(t,e,a){"use strict";a.r(e);var n=a("b562"),i=a("4cf9");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("3574");var s,c=a("f0c5"),l=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"5539d4e6",null,!1,n["a"],s);e["default"]=l.exports},"9f6a":function(t,e,a){"use strict";var n=a("4ea4");a("4160"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("34b9")),r=n(a("ec43")),s=n(a("c255")),c=n(a("78d2")),l={name:"PriceList",mixins:[i.default,r.default,s.default,c.default],computed:{getPriceList:function(){if("undefined"==typeof this.getCurrenctData)return[];var t=this.getCurrenctData.latestPrice&&this.getCurrenctData.latestPrice.buy,e=this.getCurrenctData.latestPrice&&this.getCurrenctData.latestPrice.sell;if("undefined"===typeof t||"undefined"===typeof e)return[];var a=[];return t.forEach((function(t,n){var i=[t.amount,t.price,e[n].price,e[n].amount];a.push(i)})),a}}};e.default=l},a15b7:function(t,e,a){"use strict";a.r(e);var n=a("9f6a"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},a329:function(t,e,a){"use strict";var n=a("2b05"),i=a.n(n);i.a},b562:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"k_line_data"},[a("v-uni-view",{staticClass:"k_line_card"},[a("v-uni-view",{staticClass:"currency",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sliderCurrency.apply(void 0,arguments)}}},[t._v(t._s(t.opt.currency)+" / USDT"),a("v-uni-text",{staticClass:"iconfont icon-other"})],1),0===t.getCurrentTradeType?a("v-uni-view",{staticClass:"position"},[a("v-uni-text",{staticClass:"iconfont icon-document"}),a("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switchTab("/pages/order/index")}}},[t._v(t._s(t.getLangs("positionOrder")))])],1):t._e(),a("v-uni-view",{staticClass:"k_data"},[a("v-uni-view",{staticClass:"labels"},[a("v-uni-text",{staticClass:"current"},[t._v(t._s(t.getLangs("current")))]),a("v-uni-view",{class:["live_label close",t.getClass(t.getCurrenctData&&t.getCurrenctData.gain)]},[t._v(t._s(t.getCurrenctData&&t.getCurrenctData.close))]),a("v-uni-view",{class:["live_label",t.getClass(t.getCurrenctData&&t.getCurrenctData.gain)]},[t._v(t._s(t.getCurrenctData&&t.getCurrenctData.gain)+"%")])],1),a("v-uni-view",{staticClass:"labels"},[a("v-uni-view",{staticClass:"inner"},[a("v-uni-view",{staticClass:"inner_label"},[a("v-uni-text",{staticClass:"name"},[t._v(t._s(t.getLangs("openPrice")))]),a("v-uni-text",{staticClass:"value"},[t._v(t._s(t.getCurrenctData&&t.getCurrenctData.open))])],1),a("v-uni-view",{staticClass:"inner_label"},[a("v-uni-text",{staticClass:"name"},[t._v(t._s(t.getLangs("turnover24h")))]),a("v-uni-text",{staticClass:"value"},[t._v(t._s(t.getCurrenctData&&(Number(t.getCurrenctData.vol)/1e4).toFixed(4))+"W")])],1),a("v-uni-view",{staticClass:"inner_label"},[a("v-uni-text",{staticClass:"name"},[t._v(t._s(t.getLangs("lowestPrice")))]),a("v-uni-text",{staticClass:"value"},[t._v(t._s(t.getCurrenctData&&t.getCurrenctData.low))])],1),a("v-uni-view",{staticClass:"inner_label"},[a("v-uni-text",{staticClass:"name"},[t._v(t._s(t.getLangs("highestPrice")))]),a("v-uni-text",{staticClass:"value"},[t._v(t._s(t.getCurrenctData&&t.getCurrenctData.high))])],1)],1)],1)],1)],1)],1)},r=[]},e8e7:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530")),r=a("2f62"),s=n(a("34b9")),c=n(a("ec43")),l=n(a("c255")),o=n(a("78d2")),u={name:"CurrencyData",mixins:[s.default,l.default,c.default,o.default],data:function(){return{opt:{}}},methods:{sliderCurrency:function(){this.$emit("callBack",!0)}},computed:(0,i.default)({getIcon:function(){return function(t){return t>0?"../../static/images/up_icon.png":"../../static/images/down_icon.png"}}},(0,r.mapGetters)({getCurrentTradeType:"getCurrentTradeType"})),created:function(){this.opt=this.getCurrentPageData("opt")}};e.default=u},eb07:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".k_line_data[data-v-5539d4e6]{padding:0 %?10?%;background:#1c1d31}.k_line_data .k_line_card[data-v-5539d4e6]{background:#1c1d31;padding:%?40?% %?10?% %?20?% %?0?%;-webkit-box-shadow:0 0 10px 0 rgba(0,0,0,.1);box-shadow:0 0 10px 0 rgba(0,0,0,.1);-webkit-border-radius:%?40?% %?40?% 0 0;border-radius:%?40?% %?40?% 0 0;position:relative}.k_line_data .position[data-v-5539d4e6]{position:absolute;right:%?20?%;top:%?20?%;line-height:%?80?%;color:#62759a;font-size:%?28?%}.k_line_data .k_line_card .currency[data-v-5539d4e6]{font-size:%?32?%;color:#bfc5d1;font-weight:700}.k_data[data-v-5539d4e6]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?20?% 0}.k_data .labels[data-v-5539d4e6]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.k_data .labels .current[data-v-5539d4e6]{color:#8d9dbc;font-size:%?26?%;margin-bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?30?%;padding-left:%?40?%}.k_data .labels .live_label[data-v-5539d4e6]{font-size:%?32?%;line-height:%?80?%;padding-left:%?40?%}.k_data .labels .live_label.close[data-v-5539d4e6]{font-size:%?50?%}.k_data .labels .inner[data-v-5539d4e6]{padding:0 %?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.k_data .labels .inner .inner_label[data-v-5539d4e6]{width:50%;font-size:%?26?%;color:#8d9dbc;-webkit-box-sizing:border-box;box-sizing:border-box}.k_data .labels .inner .inner_label[data-v-5539d4e6]:nth-child(even){padding-left:10px}.k_data .labels .inner .inner_label .name[data-v-5539d4e6],\n.k_data .labels .inner .inner_label .value[data-v-5539d4e6]{font-size:%?26?%;color:#8d9dbc;display:block;line-height:%?60?%}.k_data .labels .inner .inner_label .value[data-v-5539d4e6]{color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.currency .iconfont[data-v-5539d4e6]{font-size:%?40?%;padding-left:%?20?%;top:%?10?%}",""]),t.exports=e}}]);