(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-futures_trade-index"],{"0fc2":function(t,e,a){"use strict";a.r(e);var i=a("4f41"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},2775:function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var n=i(a("1da1")),r=i(a("5530")),s=a("2f62"),o=a("2376"),u=i(a("2630")),c={methods:(0,r.default)({data:function(){return{timer:null}},getUserLeftmoneyHandler:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,o.getAllBalance)();case 2:a=e.sent,u.default.checkCode(a)&&(t.setLeftmoney(a.allBalance),t.setAccountBanlance(a.data),t.setCny(a.allCNY));case 4:case"end":return e.stop()}}),e)})))()},checkCertInfoHandler:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,o.userCertInfo)();case 2:a=e.sent,u.default.checkCode(a)&&t.setCertInfo(a.data);case 4:case"end":return e.stop()}}),e)})))()},getUserInfoHandler:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,o.getUserInfo)();case 2:a=e.sent,u.default.checkCode(a)&&t.setUserInfoData(a.data);case 4:case"end":return e.stop()}}),e)})))()},setTimer:function(){var t=this;null!==this.timer&&this.clearTimer(),this.timer=setInterval((function(){t.getUserLeftmoneyHandler()}),2e3)},clearTimer:function(){clearInterval(this.timer),this.timer=null}},(0,s.mapMutations)({setLeftmoney:"SET_LEFTMONEY",setCertInfo:"SET_CERT_INFO",setUserInfoData:"SET_USER_INFO_DATA",setAccountBanlance:"SET_ACCOUNT_BANLANCE",setCny:"SET_CNY"})),computed:(0,r.default)({},(0,s.mapGetters)({getLeftmoney:"getLeftmoney",getCertinfo:"getCertInfo",getUserInfoData:"getUserInfoData",getCny:"getCny",getAccountBanlance:"getAccountBanlance"})),onShow:function(){},onUnload:function(){},created:function(){},destroyed:function(){this.clearTimer()}},l=c;e.default=l},"39b9":function(t,e,a){"use strict";a.r(e);var i=a("b796"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},4036:function(t,e,a){t.exports=a.p+"static/img/loading1.303b3b8b.gif"},"4f41":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"Loading"};e.default=i},"6dfd":function(t,e,a){var i=a("8e35");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("a8d39e74",i,!0,{sourceMap:!1,shadowMode:!1})},"780f":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".loading[data-v-680563ce]{width:100%;height:100%;position:fixed;left:0;top:0;z-index:10000;background:rgba(0,0,0,.5)}.loading_img[data-v-680563ce]{width:%?80?%;height:%?80?%;position:absolute;top:50%;left:50%;z-index:10001;margin-left:%?-40?%;margin-top:%?-40?%}",""]),t.exports=e},"898e":function(t,e,a){"use strict";a.r(e);var i=a("f96b"),n=a("0fc2");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("cfb9");var s,o=a("f0c5"),u=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"680563ce",null,!1,i["a"],s);e["default"]=u.exports},"8e35":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-31b3592a]{border-top:1px solid hsla(0,0%,100%,.1);background:#151936}.futures_trade_class[data-v-31b3592a]{overflow:hidden}.futures_title[data-v-31b3592a]{position:relative}.white_paper_icon[data-v-31b3592a]{position:absolute;top:0;right:0;color:#aaa}.white_paper_icon .iconfont[data-v-31b3592a]{font-size:%?38?%}.futures_trade_class[data-v-31b3592a]{height:100%}.futures_section[data-v-31b3592a]{background:#151936;margin-bottom:%?20?%;padding:%?20?%}.futures_section[data-v-31b3592a]:last-child{height:calc(100% - %?810?%)}.futures_record[data-v-31b3592a]{height:100%}.futures_currency[data-v-31b3592a]{font-size:%?40?%;font-weight:700;position:relative;color:#fff}.futures_currency .gain[data-v-31b3592a]{font-size:%?30?%;font-weight:700;padding-left:%?40?%}.futures_currency .position_record[data-v-31b3592a]{position:absolute;right:0;color:#657497;top:%?10?%;font-size:%?28?%;font-weight:400}.futures_main[data-v-31b3592a]{display:-webkit-box;display:-webkit-flex;display:flex;padding-top:%?20?%}.futures_main .futures_data[data-v-31b3592a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-right:%?20?%}.futures_main .futures_price[data-v-31b3592a]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.futures_main .futures_menu[data-v-31b3592a]{display:-webkit-box;display:-webkit-flex;display:flex;background:hsla(0,0%,100%,.05);-webkit-border-radius:%?20?%;border-radius:%?20?%;color:#fff}.futures_main .futures_menu .menu_label[data-v-31b3592a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;line-height:%?70?%;-webkit-border-radius:%?20?%;border-radius:%?20?%}.futures_main .futures_menu .menu_label.on1[data-v-31b3592a]{font-size:%?30?%}.form_label[data-v-31b3592a]{padding-left:%?20?%;padding-right:%?110?%;margin-bottom:%?10?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;position:relative}.form_label .currency[data-v-31b3592a]{position:absolute;right:%?20?%;top:%?20?%;color:#999}.select[data-v-31b3592a]{background:#fff;border:1px solid #eee;z-index:100;margin-top:%?20?%;-webkit-border-radius:%?10?%;border-radius:%?10?%}.select_drop[data-v-31b3592a]{background:#f9f9f9}.select .select_label .iconfont[data-v-31b3592a]{right:%?-20?%}.futures_info[data-v-31b3592a]{display:-webkit-box;display:-webkit-flex;display:flex;padding-top:%?10?%}.futures_info .left_bar[data-v-31b3592a],\n.futures_info .right_bar[data-v-31b3592a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?24?%;color:#888}.futures_info .right_bar[data-v-31b3592a]{text-align:right}.left_bar[data-v-31b3592a],\n.right_bar[data-v-31b3592a]{width:50%;line-height:%?60?%;font-size:%?26?%;color:#797d91;display:inline-block}.left_bar[data-v-31b3592a]{text-align:left}.right_bar[data-v-31b3592a]{text-align:right}.table_hd[data-v-31b3592a]{display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:%?20?%;border-bottom:1px solid hsla(0,0%,100%,.1);line-height:%?80?%}.table_hd .left[data-v-31b3592a],\n.table_hd .right[data-v-31b3592a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#aaa;font-size:%?24?%}.table_hd .right[data-v-31b3592a]{text-align:right}.table_bd .tr[data-v-31b3592a]{display:-webkit-box;display:-webkit-flex;display:flex;line-height:%?50?%}.table_bd  .left[data-v-31b3592a],\n.table_bd  .right[data-v-31b3592a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?24?%}.table_bd  .left[data-v-31b3592a]{font-size:%?28?%}.table_bd .right[data-v-31b3592a]{text-align:right;color:#555}.sell[data-v-31b3592a]{padding-top:%?60?%}.buttons[data-v-31b3592a]{margin-top:20px;display:block;height:%?70?%;text-align:center;color:#fff;font-size:%?30?%;line-height:%?70?%;-webkit-border-radius:%?10?%;border-radius:%?10?%}.futures_title[data-v-31b3592a]{font-size:%?32?%;color:#aaa;font-weight:700;margin-bottom:%?20?%}.futures_info .per[data-v-31b3592a]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%}.futures_info .per .per_items[data-v-31b3592a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?26?%;text-align:center;line-height:%?40?%;margin:0 %?4?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;color:#aaa}.futures_info .per .per_items.on[data-v-31b3592a]{color:#fff;border:1px solid #007aff;background:#007aff}.leftmoney[data-v-31b3592a]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;margin-top:%?20?%}.leftmoney .name[data-v-31b3592a],\n.leftmoney .value[data-v-31b3592a]{line-height:%?40?%;font-size:%?24?%}.leftmoney .name[data-v-31b3592a]{width:%?80?%;text-align:left;color:#666}.leftmoney .value[data-v-31b3592a]{text-align:right;width:calc(100% - %?90?%);color:#fff}.record_content[data-v-31b3592a]{height:calc(100% - %?60?%);overflow:auto}.select_name[data-v-31b3592a]{color:#081723}body.?%PAGE?%[data-v-31b3592a]{background:#151936}",""]),t.exports=e},"998e":function(t,e,a){"use strict";var i=a("6dfd"),n=a.n(i);n.a},adb2:function(t,e,a){"use strict";a.r(e);var i=a("d5c2"),n=a("39b9");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("998e");var s,o=a("f0c5"),u=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"31b3592a",null,!1,i["a"],s);e["default"]=u.exports},b796:function(t,e,a){"use strict";var i=a("4ea4");a("a9e3"),a("b680"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var n=i(a("1da1")),r=i(a("56e3")),s=i(a("6eb7")),o=i(a("0970")),u=i(a("2775")),c=i(a("dc60")),l=i(a("a7b3")),f=a("2376"),d=a("f46a"),v=i(a("898e")),p={name:"FuturesTrade",mixins:[r.default,s.default,o.default,u.default,c.default],components:{coinPositionRecord:l.default,Loading:v.default},data:function(){return{active:0,currency:"",id:"",menuList:["buy","sell"],typeList:["marketOrder","limitOrder"],typeStatus:!1,accountLefmoney:{},perList:[25,50,75,100],per:"",form:{paytype:0,appointprice:"",num:""},loading:!1}},methods:{changeTradeAction:function(t){this.active=t},openDrop:function(){this.typeStatus=!this.typeStatus},selectDrop:function(t){this.form.paytype=t,this.typeStatus=!1},selectPrice:function(t){this.form.appointprice=t},changePer:function(t){this.per=t,this.form.num=this.getNum.toFixed(6)},priceHandler:function(t){this.form.appointprice=0===t?this.getCurrenctData.close:""},getCurrentAccountHandler:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var a,i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.getCurrenctData.id,i={pid:a,type:2},e.next=4,(0,d.getAccountBalance)(i);case 4:n=e.sent,t.accountLefmoney=n.data;case 6:case"end":return e.stop()}}),e)})))()},toPage:function(){var t=this.getCurrentPageData("opt");this.navigateTo("/pages/white_paper/index",t)},stopClick:function(t){t.stopPropagation()},eventClick:function(){this.typeStatus=!1},trade:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var a,i,n,r,s,o,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.id,i=t.form.num,n=t.active,r=t.form.paytype,s=0==r?t.getCurrenctData.close:t.form.appointprice,""!==s){e.next=7;break}return e.abrupt("return",t.$tips.showToast(t.getLangs("purchaseQuantity")));case 7:if(0!==i.length){e.next=9;break}return e.abrupt("return",t.$tips.showToast(t.getLangs("numEmptyTips")));case 9:return o={id:a,num:i,type:n,paytype:r,appointprice:s,ratio:25===t.per||50==t.per||75==t.per||100==t.per?t.per:1},t.loading=!0,e.next=13,(0,f.spotTrading)(o);case 13:u=e.sent,t.loading=!1,t.getCurrentAccountHandler(),t.backTips(u);case 17:case"end":return e.stop()}}),e)})))()}},computed:{getCurrentPrice:function(){var t=0;return 0===this.form.paytype&&(t=Number(this.getCurrenctData&&this.getCurrenctData.close)),1===this.form.paytype&&(t=Number(this.form.appointprice)),t},getPrice:function(){var t=this.form.num,e=this.getCurrentPrice;return""===t?0:Number(t)*Number(e)},getNum:function(){var t=Number(this.getCurrencLeftmoney),e=(Number(this.form.num),this.per/100),a=this.getCurrentPrice;return 0===this.active?1/a*t*e:1===this.active?t*e:void 0},getFee:function(){return this.getCurrenctData&&this.getCurrenctData.attach&&this.getCurrenctData.attach.fee},getCurrencLeftmoney:function(){return"{}"===JSON.stringify(this.accountLefmoney)?0:0===this.active?Number(this.accountLefmoney["usdt"]):Number(this.accountLefmoney[this.currency.toLowerCase()])}},onLoad:function(t){var e=t.currency;if(this.currency=e,this.id=t.id,"undefined"===typeof e||""===e||"undefined"===typeof this.id||""===this.id){this.$tips.showToast(this.getLangs("currencyError"));var a=this;setTimeout((function(){a.back()}),1e3)}this.active=1==t.type?1:0,this.setTitle(e.toUpperCase())},onShow:function(){this.active="buy"===this.getCurrentPageData("opt").action?0:1},onUnload:function(){},watch:{getCurrenctData:function(t){t&&this.getCurrentAccountHandler()},"form.num":function(t){var e=Number(this.getCurrencLeftmoney),a=Number(t),i=this.getCurrentPrice,n=0;0===this.active&&(n=a/(1/i*e)),1===this.active&&(n=a/e),this.per=Math.round(100*n)}}};e.default=p},cee5:function(t,e,a){var i=a("780f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("38c56b5b",i,!0,{sourceMap:!1,shadowMode:!1})},cfb9:function(t,e,a){"use strict";var i=a("cee5"),n=a.n(i);n.a},d5c2:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"futures_trade_class",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.eventClick.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"futures_section"},[a("v-uni-view",{staticClass:"futures_currency"},[t._v(t._s(t.currency)),a("v-uni-text",{class:["gain",t.getCurrenctData&&t.getCurrenctData.gain>0?"green":"red"]},[t._v(t._s(t.getCurrenctData&&t.getCurrenctData.gain>0?t.getCurrenctData&&t.getCurrenctData.gain:""+(t.getCurrenctData&&t.getCurrenctData.gain))+"%")])],1),a("v-uni-view",{staticClass:"futures_main"},[a("v-uni-view",{staticClass:"futures_data"},[a("v-uni-view",{staticClass:"futures_menu"},t._l(t.menuList,(function(e,i){return a("v-uni-view",{key:i,class:["menu_label",t.active===i?"on"+t.active:""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTradeAction(i)}}},[t._v(t._s(t.getLangs(e)))])})),1),a("v-uni-view",{staticClass:"futures_form"},[a("v-uni-view",{staticClass:"form_class"},[a("v-uni-view",{staticClass:"select",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopClick.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"select_label"},[a("v-uni-view",{staticClass:"select_name",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openDrop.apply(void 0,arguments)}}},[t._v(t._s(t.getLangs(t.typeList[t.form.paytype])))]),a("v-uni-text",{staticClass:"iconfont icon-unfold"})],1),t.typeStatus?a("v-uni-view",{staticClass:"select_drop"},[a("v-uni-view",{staticClass:"selelct_drop_main",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopClick.apply(void 0,arguments)}}},t._l(t.typeList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"select_drop_label",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectDrop(i)}}},[t._v(t._s(t.getLangs(e)))])})),1)],1):t._e()],1),1===t.form.paytype?a("v-uni-view",{staticClass:"form_label"},[a("v-uni-view",{staticClass:"form_label_main"},[a("v-uni-view",{staticClass:"form_input_bar"},[a("v-uni-input",{staticClass:"input_bar",attrs:{type:"number",placeholder:t.getLangs("price")},model:{value:t.form.appointprice,callback:function(e){t.$set(t.form,"appointprice",e)},expression:"form.appointprice"}})],1)],1)],1):t._e(),a("v-uni-view",{staticClass:"form_label"},[a("v-uni-view",{staticClass:"form_label_main"},[a("v-uni-view",{staticClass:"form_input_bar"},[a("v-uni-input",{staticClass:"input_bar",attrs:{type:"number",placeholder:t.getLangs("numEmptyTips")},model:{value:t.form.num,callback:function(e){t.$set(t.form,"num",e)},expression:"form.num"}})],1)],1),a("v-uni-view",{staticClass:"currency"},[t._v(t._s(t.currency))])],1)],1)],1),a("v-uni-view",{staticClass:"leftmoney"},[a("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("available")))]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(t.getCurrencLeftmoney.toFixed(4))+" "+t._s(0===this.active?"USDT":t.currency))])],1),a("v-uni-view",{staticClass:"futures_info"},[a("v-uni-view",{staticClass:"per"},t._l(t.perList,(function(e,i){return a("v-uni-view",{key:i,class:["per_items",e===t.per?"on":""],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.changePer(e)}}},[t._v(t._s(e)+"%")])})),1)],1),a("v-uni-view",{staticClass:"futures_info"},[a("v-uni-text",{staticClass:"left_bar"},[t._v(t._s(t.getLangs("tradeprice"))+"(USDT）≈ "+t._s(t.getPrice.toFixed(2)))])],1),a("v-uni-view",{staticClass:"labels_box"},[a("v-uni-text",{class:["buttons","on on"+t.active],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.trade.apply(void 0,arguments)}}},[t._v(t._s(0===t.active?t.getLangs("buy"):t.getLangs("sell")))])],1)],1),a("v-uni-view",{staticClass:"futures_price"},[a("v-uni-view",{staticClass:"price_class"},[a("v-uni-view",{staticClass:"tables"},[a("v-uni-view",{staticClass:"table_hd"},[a("v-uni-text",{staticClass:"hd left"},[t._v(t._s(t.getLangs("latestPrice")))]),a("v-uni-text",{staticClass:"hd right"},[t._v(t._s(t.getLangs("quantity")))])],1),a("v-uni-view",{staticClass:"table_bd"},[t._l(t.getCurrenctData&&t.getCurrenctData.latestPrice&&t.getCurrenctData&&t.getCurrenctData.latestPrice["buy"],(function(e,i){return a("v-uni-view",{key:i+20,staticClass:"tr"},[a("v-uni-text",{staticClass:"bd red left",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.selectPrice(e.price)}}},[t._v(t._s(e.price))]),a("v-uni-text",{staticClass:"bd right"},[t._v(t._s(e.amount))])],1)})),a("v-uni-view",{staticClass:"sell"}),t._l(t.getCurrenctData&&t.getCurrenctData.latestPrice&&t.getCurrenctData.latestPrice["sell"],(function(e,i){return a("v-uni-view",{key:i+10,staticClass:"tr"},[a("v-uni-text",{staticClass:"bd green left",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.selectPrice(e.price)}}},[t._v(t._s(e.price))]),a("v-uni-text",{staticClass:"bd right"},[t._v(t._s(e.amount))])],1)}))],2)],1)],1)],1)],1)],1),a("v-uni-view",{staticClass:"futures_section"},[a("v-uni-view",{staticClass:"futures_record"},[a("v-uni-view",{staticClass:"futures_title"},[t._v(t._s(t.getLangs("commissionRecord"))),a("v-uni-view",{staticClass:"white_paper_icon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toPage.apply(void 0,arguments)}}},[t._v(t._s(t.getLangs("introduce")))])],1),a("v-uni-view",{staticClass:"record_content"},[a("coinPositionRecord")],1)],1)],1),t.loading?a("Loading"):t._e()],1)},r=[]},f96b:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"loading"},[i("v-uni-image",{staticClass:"loading_img",attrs:{src:a("4036")}})],1)},r=[]}}]);