(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-fund-index"],{"0fd4":function(t,e,a){var n=a("6078");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var c=a("4f06").default;c("29a0bd7b",n,!0,{sourceMap:!1,shadowMode:!1})},"13e7":function(t,e,a){t.exports=a.p+"static/img/fund_card.70874244.png"},1524:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=n(a("2c3d")),i=n(a("f61e")),r={name:"FundFunc",mixins:[c.default,i.default],data:function(){return{fundFuncList:[{name:"rechargeText",icon:"/static/images/recharge_icon.png",path:"/pages/recharge/index"},{name:"withdrawText",icon:"/static/images/withdraw_icon.png",path:"/pages/withdraw/index"},{name:"exchangeText",icon:"/static/images/exchange_icon.png",path:"/pages/exchange/index"},{name:"transferText",icon:"/static/images/transfer_icon.png",path:"/pages/transfer/index"}]}},methods:{toPage:function(t,e){if("withdrawText1"===e)return this.$tips.showToast(this.getLangs("noOpen"));this.navigateTo(t)}}};e.default=r},"1c77":function(t,e,a){"use strict";var n=a("cdf7"),c=a.n(n);c.a},"2c3d":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=n(a("5530"));a("96cf");var i=n(a("1da1")),r=a("2f62"),u=n(a("f598")),s=n(a("6d9d")),o=n(a("47d8")),d=n(a("27d3")),l=a("01d5"),f={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,e){var a="undefined"===typeof e||"{}"===JSON.stringify(e)?"":"?".concat(o.default.convertObj(e));uni.navigateTo({url:t+a})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=s.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?u.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var e=getCurrentPages(),a=e[e.length-1];switch(t){case"opt":return a.options;case"route":return a.route;default:return a}},backToPage:function(t){s.default.getOS();this.navigateTo(t)},backTips:function(t){if(d.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){return(0,i.default)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,l.getNConfig)();case 2:return e=t.sent,t.abrupt("return",window.location.href=e.data.kfUrl);case 5:case"end":return t.stop()}}),t)})))()},customBack:function(){return window.location.href="/"}},computed:(0,c.default)({createOSClass:function(){return"h5"}},(0,r.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=s.default.getOS()}},v=f;e.default=v},3330:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var c=n(a("1da1")),i=n(a("5530")),r=a("2f62"),u=a("8b5c"),s=n(a("27d3")),o={methods:(0,i.default)({data:function(){return{timer:null}},getUserLeftmoneyHandler:function(){var t=this;return(0,c.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.getAllBalance)();case 2:a=e.sent,s.default.checkCode(a)&&(t.setLeftmoney(a.allBalance),t.setAccountBanlance(a.data),t.setCny(a.allCNY));case 4:case"end":return e.stop()}}),e)})))()},checkCertInfoHandler:function(){var t=this;return(0,c.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.userCertInfo)();case 2:a=e.sent,s.default.checkCode(a)&&t.setCertInfo(a.data);case 4:case"end":return e.stop()}}),e)})))()},getUserInfoHandler:function(){var t=this;return(0,c.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.getUserInfo)();case 2:a=e.sent,s.default.checkCode(a)&&t.setUserInfoData(a.data);case 4:case"end":return e.stop()}}),e)})))()},setTimer:function(){var t=this;null!==this.timer&&this.clearTimer(),this.timer=setInterval((function(){t.getUserLeftmoneyHandler()}),2e3)},clearTimer:function(){clearInterval(this.timer),this.timer=null}},(0,r.mapMutations)({setLeftmoney:"SET_LEFTMONEY",setCertInfo:"SET_CERT_INFO",setUserInfoData:"SET_USER_INFO_DATA",setAccountBanlance:"SET_ACCOUNT_BANLANCE",setCny:"SET_CNY"})),computed:(0,i.default)({},(0,r.mapGetters)({getLeftmoney:"getLeftmoney",getCertinfo:"getCertInfo",getUserInfoData:"getUserInfoData",getCny:"getCny",getAccountBanlance:"getAccountBanlance"})),onShow:function(){},onUnload:function(){},created:function(){},destroyed:function(){this.clearTimer()}},d=o;e.default=d},"35ad":function(t,e,a){"use strict";var n=a("e64b"),c=a.n(n);c.a},"35fe":function(t,e,a){"use strict";var n=a("0fd4"),c=a.n(n);c.a},"459c":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-621762dc]{background:#20222c}.main_class[data-v-621762dc]{height:100%;padding:0;overflow:hidden}body.?%PAGE?%[data-v-621762dc]{background:#20222c}",""]),t.exports=e},"4f85":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=n(a("5530")),i=a("2f62"),r=n(a("2c3d")),u=n(a("f61e")),s={name:"Account",mixins:[r.default,u.default],data:function(){return{menuList:["contract","coin"],active:0}},methods:{changeMenu:function(t){this.active=t}},computed:(0,c.default)({getActive:function(){return 0===this.active?1:1===this.active?2:this.active}},(0,i.mapGetters)({getAccountBanlance:"getAccountBanlance"}))};e.default=s},"5cd5":function(t,e,a){"use strict";a.r(e);var n=a("b3f3"),c=a("d63a");for(var i in c)"default"!==i&&function(t){a.d(e,t,(function(){return c[t]}))}(i);a("35ad");var r,u=a("f0c5"),s=Object(u["a"])(c["default"],n["b"],n["c"],!1,null,"621762dc",null,!1,n["a"],r);e["default"]=s.exports},6078:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".fund_card[data-v-5115eedc]{padding:%?20?% %?10?%;position:relative;z-index:1;background-color:#20222c}.fund_card_img[data-v-5115eedc]{width:100%;height:%?280?%}.fund_card .user_info[data-v-5115eedc]{width:100%;position:absolute;top:%?60?%;left:%?80?%;z-index:2}.fund_card .user_info .nickname[data-v-5115eedc]{color:#b0c9fe;font-size:%?30?%;line-height:%?60?%}.fund_card .user_info .leftmoney[data-v-5115eedc]{color:#fff;font-size:%?60?%;line-height:%?60?%;font-weight:700}.fund_card .sub[data-v-5115eedc]{font-size:%?24?%;line-height:%?60?%;color:#fff}",""]),t.exports=e},"62a1":function(t,e,a){"use strict";a.r(e);var n=a("ef37"),c=a("ae9f");for(var i in c)"default"!==i&&function(t){a.d(e,t,(function(){return c[t]}))}(i);a("cac1");var r,u=a("f0c5"),s=Object(u["a"])(c["default"],n["b"],n["c"],!1,null,"6a02adc2",null,!1,n["a"],r);e["default"]=s.exports},"6d9d":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},c=n;e.default=c},"77b4":function(t,e,a){"use strict";a.r(e);var n=a("1524"),c=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=c.a},"8db6":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;a("2f62");var c=n(a("2c3d")),i=n(a("f61e")),r=n(a("3330")),u=n(a("c7ba")),s=n(a("b384")),o=n(a("62a1")),d=(n(a("6d9d")),n(a("27d3")),{name:"Fund",mixins:[c.default,i.default,r.default],components:{FundCard:u.default,FundFunc:s.default,Account:o.default},onShow:function(){var t=this;this.clearTimer(),this.getUserInfoHandler(),this.getUserLeftmoneyHandler(),this.setTimer(),this.$once("hook:onUnload",(function(){t.clearTimer()})),this.$once("hook:onHide",(function(){t.clearTimer()})),this.setTitle(this.getLangs("fund"))}});e.default=d},a20c:function(t,e,a){"use strict";a.r(e);var n=a("e59a"),c=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=c.a},a388:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"fund_func_class"},t._l(t.fundFuncList,(function(e,n){return a("v-uni-view",{key:n,staticClass:"label",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toPage(e.path,e.name)}}},[a("v-uni-image",{staticClass:"icon",attrs:{src:e.icon}}),a("v-uni-text",{staticClass:"name"},[t._v(t._s(t.getLangs(e.name)))])],1)})),1)},i=[]},ae9f:function(t,e,a){"use strict";a.r(e);var n=a("4f85"),c=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=c.a},b384:function(t,e,a){"use strict";a.r(e);var n=a("a388"),c=a("77b4");for(var i in c)"default"!==i&&function(t){a.d(e,t,(function(){return c[t]}))}(i);a("1c77");var r,u=a("f0c5"),s=Object(u["a"])(c["default"],n["b"],n["c"],!1,null,"9b94e980",null,!1,n["a"],r);e["default"]=s.exports},b3f3:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{class:["main_class",t.createOSClass]},[a("FundCard"),a("FundFunc"),a("Account")],1)},i=[]},bfff:function(t,e,a){var n=a("d5ed");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var c=a("4f06").default;c("7bcd8bfb",n,!0,{sourceMap:!1,shadowMode:!1})},c577:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"fund_card"},[n("v-uni-view",{staticClass:"user_info"},[n("v-uni-view",{staticClass:"nickname"},[t._v(t._s(t.getUserInfoData.ncikname)+" "+t._s(t.getLangs("fundp1"))+" (USDT)")]),n("v-uni-view",{staticClass:"leftmoney"},[t._v(t._s(t.getLeftmoney))]),n("v-uni-view",{staticClass:"sub"},[t._v("≈ "+t._s(t.getCny)+" "+t._s(t.getText))])],1),n("v-uni-image",{staticClass:"fund_card_img",attrs:{src:a("13e7")}})],1)},i=[]},c7ba:function(t,e,a){"use strict";a.r(e);var n=a("c577"),c=a("a20c");for(var i in c)"default"!==i&&function(t){a.d(e,t,(function(){return c[t]}))}(i);a("35fe");var r,u=a("f0c5"),s=Object(u["a"])(c["default"],n["b"],n["c"],!1,null,"5115eedc",null,!1,n["a"],r);e["default"]=s.exports},cac1:function(t,e,a){"use strict";var n=a("bfff"),c=a.n(n);c.a},cdf7:function(t,e,a){var n=a("dac0");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var c=a("4f06").default;c("1066206c",n,!0,{sourceMap:!1,shadowMode:!1})},d5ed:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".account_class[data-v-6a02adc2]{height:100%;background-color:#20222c;margin-top:%?20?%}.account_class .account_menu[data-v-6a02adc2]{width:100%;height:%?88?%;border-bottom:1px solid hsla(0,0%,100%,.05);white-space:nowrap;overflow-x:auto}.account_class .label[data-v-6a02adc2]{min-width:28%!important;text-align:center;line-height:%?80?%;color:#90a2b0;font-size:%?30?%;display:inline-block;padding:0 %?20?%!important}.account_class .label .line[data-v-6a02adc2]{width:1.5rem;height:2px;background:#2970e6;margin:auto;display:none}.account_class .label.on .line[data-v-6a02adc2]{display:block}.account_class .label.on[data-v-6a02adc2]{color:#2970e6;font-weight:700}.account_box[data-v-6a02adc2]{overflow-x:auto;height:%?128?%}.account_list[data-v-6a02adc2]{height:calc(100% - %?628?%);overflow:auto}.account_class .account_list_label[data-v-6a02adc2]{padding:%?20?%;border-bottom:1px solid hsla(0,0%,100%,.05)}.account_class .account_list_label .currency[data-v-6a02adc2]{font-size:%?32?%;color:#aaa;margin-bottom:%?20?%}.account_class .table_hd[data-v-6a02adc2],\n.account_class .table_bd[data-v-6a02adc2]{display:-webkit-box;display:-webkit-flex;display:flex}.account_class .table_hd .table_hd_label[data-v-6a02adc2]{font-size:%?24?%;color:#8d9dbc}.account_class .table_bd .table_bd_label[data-v-6a02adc2]{font-size:%?24?%;line-height:%?60?%;color:#fff}.account_class .table_hd .table_hd_label[data-v-6a02adc2]:first-child,\n.account_class .table_bd .table_bd_label[data-v-6a02adc2]:first-child{width:30%;text-align:left}.account_class .table_hd .table_hd_label[data-v-6a02adc2]:nth-child(2),\n.account_class .table_bd .table_bd_label[data-v-6a02adc2]:nth-child(2){width:40%}.account_class .table_hd .table_hd_label[data-v-6a02adc2]:last-child,\n.account_class .table_bd .table_bd_label[data-v-6a02adc2]:last-child{width:30%;text-align:right}",""]),t.exports=e},d63a:function(t,e,a){"use strict";a.r(e);var n=a("8db6"),c=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=c.a},dac0:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".fund_func_class[data-v-9b94e980]{padding:0 %?20?% %?30?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;background-color:#20222c}.fund_func_class .label[data-v-9b94e980]{width:25%;text-align:center}.fund_func_class .icon[data-v-9b94e980]{width:%?60?%;height:%?60?%}.fund_func_class .name[data-v-9b94e980]{font-size:%?26?%;display:block;color:#fff}",""]),t.exports=e},e59a:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=n(a("5530")),i=a("2f62"),r=(a("8b5c"),n(a("f61e"))),u={name:"FundCard",mixins:[r.default],computed:(0,c.default)({},(0,i.mapGetters)({getUserInfoData:"getUserInfoData",getLeftmoney:"getLeftmoney",getCny:"getCny"}))};e.default=u},e64b:function(t,e,a){var n=a("459c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var c=a("4f06").default;c("750e645e",n,!0,{sourceMap:!1,shadowMode:!1})},ef37:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"account_class"},[a("v-uni-view",{staticClass:"account_menu"},[a("v-uni-view",{staticClass:"account_box"},t._l(t.menuList,(function(e,n){return a("v-uni-view",{key:n,class:["label",t.active===n?"on":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeMenu(n)}}},[t._v(t._s(t.getLangs(e))),a("v-uni-view",{staticClass:"line"})],1)})),1)],1),a("v-uni-view",{staticClass:"account_list"},t._l(t.getAccountBanlance&&t.getAccountBanlance[t.getActive],(function(e,n){return"type"!==n?a("v-uni-view",{key:n,staticClass:"account_list_label"},[a("v-uni-view",{staticClass:"currency"},[t._v(t._s(n))]),a("v-uni-view",{staticClass:"table_hd"},[a("v-uni-view",{staticClass:"table_hd_label"},[t._v(t._s(t.getLangs("available")))]),a("v-uni-view",{staticClass:"table_hd_label"},[t._v(t._s(t.getLangs("frozen")))]),a("v-uni-view",{staticClass:"table_hd_label"},[t._v(t._s(t.getLangs("convert"))+"("+t._s(t.getText)+")")])],1),a("v-uni-view",{staticClass:"table_bd"},[a("v-uni-view",{staticClass:"table_bd_label"},[t._v(t._s(Number(e.usable).toFixed(4)))]),a("v-uni-view",{staticClass:"table_bd_label"},[t._v(t._s(Number(e.freeze).toFixed(4)))]),a("v-uni-view",{staticClass:"table_bd_label"},[t._v(t._s(Number(e.convert).toFixed(4)))])],1)],1):t._e()})),1)],1)},i=[]}}]);