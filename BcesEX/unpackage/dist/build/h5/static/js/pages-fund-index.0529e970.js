(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-fund-index"],{"03a5":function(t,e,a){var n=a("7311");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var c=a("4f06").default;c("772ddc20",n,!0,{sourceMap:!1,shadowMode:!1})},"0458":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;a("2f62");var c=n(a("1cef")),i=n(a("246e")),r=n(a("84eb")),u=n(a("9ea3")),s=n(a("a685")),o=n(a("c06e")),f=(n(a("ff3c")),n(a("6f2b")),{name:"Fund",mixins:[c.default,i.default,r.default],components:{FundCard:u.default,FundFunc:s.default,Account:o.default},onShow:function(){var t=this;this.clearTimer(),this.getUserInfoHandler(),this.getUserLeftmoneyHandler(),this.setTimer(),this.$once("hook:onUnload",(function(){t.clearTimer()})),this.$once("hook:onHide",(function(){t.clearTimer()})),this.setTitle(this.getLangs("fund"))}});e.default=f},"13ec":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=n(a("5530")),i=a("2f62"),r=n(a("1cef")),u=n(a("246e")),s={name:"Account",mixins:[r.default,u.default],data:function(){return{menuList:["futures","contract","coin"],active:0}},methods:{changeMenu:function(t){this.active=t}},computed:(0,c.default)({getActive:function(){return this.active},accountList:function(){if(this.getAccountBanlance.length){var t=this.getAccountBanlance[this.getActive],e={};for(var a in t)"BTC"!==a&&"USDT"!==a&&"ETH"!==a||(e[a]=t[a]);return e}}},(0,i.mapGetters)({getAccountBanlance:"getAccountBanlance"}))};e.default=s},"1c6d":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"account_class"},[a("v-uni-view",{staticClass:"account_menu"},[a("v-uni-view",{staticClass:"account_box"},t._l(t.menuList,(function(e,n){return a("v-uni-view",{key:n,class:["label",t.active===n?"on":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeMenu(n)}}},[t._v(t._s(t.getLangs(e))),a("v-uni-view",{staticClass:"line"})],1)})),1)],1),a("v-uni-view",{staticClass:"account_list"},t._l(t.accountList,(function(e,n){return a("v-uni-view",{key:n,staticClass:"account_list_label"},["type"!==n?a("v-uni-view",[a("v-uni-view",{staticClass:"currency"},[t._v(t._s(n))]),a("v-uni-view",{staticClass:"table_hd"},[a("v-uni-view",{staticClass:"table_hd_label"},[t._v(t._s(t.getLangs("available")))]),a("v-uni-view",{staticClass:"table_hd_label"},[t._v(t._s(t.getLangs("frozen")))]),a("v-uni-view",{staticClass:"table_hd_label"},[t._v(t._s(t.getLangs("convert"))+"(USDT)")])],1),a("v-uni-view",{staticClass:"table_bd"},[a("v-uni-view",{staticClass:"table_bd_label"},[t._v(t._s(Number(e.usable).toFixed(4)))]),a("v-uni-view",{staticClass:"table_bd_label"},[t._v(t._s(Number(e.freeze).toFixed(4)))]),a("v-uni-view",{staticClass:"table_bd_label"},[t._v(t._s(Number(e.convert).toFixed(4)))])],1)],1):t._e()],1)})),1)],1)},i=[]},"1cef":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=n(a("5530")),i=a("2f62"),r=n(a("9a08")),u=n(a("ff3c")),s=n(a("dd6b")),o=n(a("6f2b")),f={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,e){var a="undefined"===typeof e||"{}"===JSON.stringify(e)?"":"?".concat(s.default.convertObj(e));uni.navigateTo({url:t+a})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=u.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?r.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var e=getCurrentPages(),a=e[e.length-1];switch(t){case"opt":return a.options;case"route":return a.route;default:return a}},backToPage:function(t){u.default.getOS();this.navigateTo(t)},backTips:function(t){if(o.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,c.default)({createOSClass:function(){return"h5"}},(0,i.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=u.default.getOS()}},l=f;e.default=l},"27d9":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".fund_card[data-v-236221da]{padding:%?20?% %?10?%;position:relative;z-index:1;background-color:#fff}.fund_card_img[data-v-236221da]{width:100%;height:%?280?%}.fund_card .user_info[data-v-236221da]{width:100%;position:absolute;top:%?60?%;left:%?80?%;z-index:2}.fund_card .user_info .nickname[data-v-236221da]{color:#b0c9fe;font-size:%?30?%;line-height:%?60?%}.fund_card .user_info .leftmoney[data-v-236221da]{color:#fff;font-size:%?60?%;line-height:%?60?%;font-weight:700}.fund_card .sub[data-v-236221da]{font-size:%?24?%;line-height:%?60?%;color:#fff}",""]),t.exports=e},3151:function(t,e,a){"use strict";var n=a("03a5"),c=a.n(n);c.a},"40f9":function(t,e,a){"use strict";a.r(e);var n=a("0458"),c=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=c.a},"41aa":function(t,e,a){"use strict";a.r(e);var n=a("13ec"),c=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=c.a},"48cc":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"fund_func_class"},t._l(t.fundFuncList,(function(e,n){return a("v-uni-view",{key:n,staticClass:"label",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toPage(e.path,e.name)}}},[a("v-uni-image",{staticClass:"icon",attrs:{src:e.icon}}),a("v-uni-text",{staticClass:"name"},[t._v(t._s(t.getLangs(e.name)))])],1)})),1)},i=[]},"544e":function(t,e,a){"use strict";a.r(e);var n=a("ca9c"),c=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=c.a},5947:function(t,e,a){t.exports=a.p+"static/img/fund_card.70874244.png"},"641a":function(t,e,a){"use strict";var n=a("ee0a"),c=a.n(n);c.a},"66f3":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"fund_card"},[n("v-uni-view",{staticClass:"user_info"},[n("v-uni-view",{staticClass:"nickname"},[t._v(t._s(t.getUserInfoData.ncikname)+" "+t._s(t.getLangs("fundp1"))+" (USDT)")]),n("v-uni-view",{staticClass:"leftmoney"},[t._v(t._s(t.getLeftmoney))])],1),n("v-uni-image",{staticClass:"fund_card_img",attrs:{src:a("5947")}})],1)},i=[]},"69fb":function(t,e,a){"use strict";var n=a("dc74"),c=a.n(n);c.a},7311:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".account_class[data-v-cbb8f34c]{height:100%;background-color:#fff;margin-top:%?20?%}.account_class .account_menu[data-v-cbb8f34c]{width:100%;height:%?88?%;border-bottom:1px solid #f9f9f9;white-space:nowrap;overflow-x:auto}.account_class .label[data-v-cbb8f34c]{min-width:33%!important;text-align:center;line-height:%?80?%;color:#90a2b0;font-size:%?30?%;display:inline-block;padding:0 %?20?%!important}.account_class .label .line[data-v-cbb8f34c]{width:1.5rem;height:2px;background:#2970e6;margin:auto;display:none}.account_class .label.on .line[data-v-cbb8f34c]{display:block}.account_class .label.on[data-v-cbb8f34c]{color:#2970e6;font-weight:700}.account_box[data-v-cbb8f34c]{overflow-x:auto;height:%?128?%}.account_list[data-v-cbb8f34c]{height:calc(100% - %?628?%);overflow:auto}.account_class .account_list_label[data-v-cbb8f34c]{padding:%?20?%;border-bottom:1px solid #f9f9f9}.account_class .account_list_label .currency[data-v-cbb8f34c]{font-size:%?32?%;color:#333;margin-bottom:%?20?%}.account_class .table_hd[data-v-cbb8f34c],\n.account_class .table_bd[data-v-cbb8f34c]{display:-webkit-box;display:-webkit-flex;display:flex}.account_class .table_hd .table_hd_label[data-v-cbb8f34c]{font-size:%?24?%;color:#8d9dbc}.account_class .table_bd .table_bd_label[data-v-cbb8f34c]{font-size:%?24?%;line-height:%?60?%;color:#333}.account_class .table_hd .table_hd_label[data-v-cbb8f34c]:first-child,\n.account_class .table_bd .table_bd_label[data-v-cbb8f34c]:first-child{width:30%;text-align:left}.account_class .table_hd .table_hd_label[data-v-cbb8f34c]:nth-child(2),\n.account_class .table_bd .table_bd_label[data-v-cbb8f34c]:nth-child(2){width:40%}.account_class .table_hd .table_hd_label[data-v-cbb8f34c]:last-child,\n.account_class .table_bd .table_bd_label[data-v-cbb8f34c]:last-child{width:30%;text-align:right}",""]),t.exports=e},"84eb":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var c=n(a("1da1")),i=n(a("5530")),r=a("2f62"),u=a("0260"),s=n(a("6f2b")),o={methods:(0,i.default)({data:function(){return{timer:null}},getUserLeftmoneyHandler:function(){var t=this;return(0,c.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.getAllBalance)();case 2:a=e.sent,s.default.checkCode(a)&&(t.setLeftmoney(a.allBalance),t.setAccountBanlance(a.data),t.setCny(a.allCNY));case 4:case"end":return e.stop()}}),e)})))()},checkCertInfoHandler:function(){var t=this;return(0,c.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.userCertInfo)();case 2:a=e.sent,s.default.checkCode(a)&&t.setCertInfo(a.data);case 4:case"end":return e.stop()}}),e)})))()},getUserInfoHandler:function(){var t=this;return(0,c.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.getUserInfo)();case 2:a=e.sent,s.default.checkCode(a)&&t.setUserInfoData(a.data);case 4:case"end":return e.stop()}}),e)})))()},setTimer:function(){var t=this;null!==this.timer&&this.clearTimer(),this.timer=setInterval((function(){t.getUserLeftmoneyHandler()}),2e3)},clearTimer:function(){clearInterval(this.timer),this.timer=null}},(0,r.mapMutations)({setLeftmoney:"SET_LEFTMONEY",setCertInfo:"SET_CERT_INFO",setUserInfoData:"SET_USER_INFO_DATA",setAccountBanlance:"SET_ACCOUNT_BANLANCE",setCny:"SET_CNY"})),computed:(0,i.default)({},(0,r.mapGetters)({getLeftmoney:"getLeftmoney",getCertinfo:"getCertInfo",getUserInfoData:"getUserInfoData",getCny:"getCny",getAccountBanlance:"getAccountBanlance"})),onShow:function(){},onUnload:function(){},created:function(){},destroyed:function(){this.clearTimer()}},f=o;e.default=f},"8b78":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-651dcc48]{background:#f9f9f9}.main_class[data-v-651dcc48]{height:100%;padding:0;overflow:hidden}body.?%PAGE?%[data-v-651dcc48]{background:#f9f9f9}",""]),t.exports=e},"9ea3":function(t,e,a){"use strict";a.r(e);var n=a("66f3"),c=a("544e");for(var i in c)"default"!==i&&function(t){a.d(e,t,(function(){return c[t]}))}(i);a("641a");var r,u=a("f0c5"),s=Object(u["a"])(c["default"],n["b"],n["c"],!1,null,"236221da",null,!1,n["a"],r);e["default"]=s.exports},a360:function(t,e,a){"use strict";a.r(e);var n=a("dc92"),c=a("40f9");for(var i in c)"default"!==i&&function(t){a.d(e,t,(function(){return c[t]}))}(i);a("69fb");var r,u=a("f0c5"),s=Object(u["a"])(c["default"],n["b"],n["c"],!1,null,"651dcc48",null,!1,n["a"],r);e["default"]=s.exports},a685:function(t,e,a){"use strict";a.r(e);var n=a("48cc"),c=a("e041");for(var i in c)"default"!==i&&function(t){a.d(e,t,(function(){return c[t]}))}(i);a("c317");var r,u=a("f0c5"),s=Object(u["a"])(c["default"],n["b"],n["c"],!1,null,"fb8de414",null,!1,n["a"],r);e["default"]=s.exports},c06e:function(t,e,a){"use strict";a.r(e);var n=a("1c6d"),c=a("41aa");for(var i in c)"default"!==i&&function(t){a.d(e,t,(function(){return c[t]}))}(i);a("3151");var r,u=a("f0c5"),s=Object(u["a"])(c["default"],n["b"],n["c"],!1,null,"cbb8f34c",null,!1,n["a"],r);e["default"]=s.exports},c317:function(t,e,a){"use strict";var n=a("c99e"),c=a.n(n);c.a},c915:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".fund_func_class[data-v-fb8de414]{padding:0 %?20?% %?30?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;background-color:#fff}.fund_func_class .label[data-v-fb8de414]{width:25%;text-align:center}.fund_func_class .icon[data-v-fb8de414]{width:%?60?%;height:%?60?%}.fund_func_class .name[data-v-fb8de414]{font-size:%?26?%;display:block;color:#333}",""]),t.exports=e},c99e:function(t,e,a){var n=a("c915");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var c=a("4f06").default;c("71e17e2e",n,!0,{sourceMap:!1,shadowMode:!1})},ca9c:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=n(a("5530")),i=a("2f62"),r=(a("0260"),n(a("246e"))),u={name:"FundCard",mixins:[r.default],computed:(0,c.default)({},(0,i.mapGetters)({getUserInfoData:"getUserInfoData",getLeftmoney:"getLeftmoney",getCny:"getCny"}))};e.default=u},dc74:function(t,e,a){var n=a("8b78");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var c=a("4f06").default;c("0f21cc8c",n,!0,{sourceMap:!1,shadowMode:!1})},dc92:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{class:["main_class",t.createOSClass]},[a("FundCard"),a("FundFunc"),a("Account")],1)},i=[]},e041:function(t,e,a){"use strict";a.r(e);var n=a("e7f8"),c=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=c.a},e7f8:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=n(a("1cef")),i=n(a("246e")),r={name:"FundFunc",mixins:[c.default,i.default],data:function(){return{fundFuncList:[{name:"rechargeText",icon:"/static/images/recharge_icon.png",path:"/pages/recharge/index"},{name:"withdrawText",icon:"/static/images/withdraw_icon.png",path:"/pages/withdraw/index"},{name:"exchangeText",icon:"/static/images/exchange_icon.png",path:"/pages/exchange/index"},{name:"transferText",icon:"/static/images/transfer_icon.png",path:"/pages/transfer/index"}]}},methods:{toPage:function(t,e){if("withdrawText1"===e)return this.$tips.showToast(this.getLangs("noOpen"));this.navigateTo(t)}}};e.default=r},ee0a:function(t,e,a){var n=a("27d9");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var c=a("4f06").default;c("1ab70e22",n,!0,{sourceMap:!1,shadowMode:!1})},ff3c:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},c=n;e.default=c}}]);