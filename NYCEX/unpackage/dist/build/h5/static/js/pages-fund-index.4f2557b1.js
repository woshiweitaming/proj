(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-fund-index"],{"124f":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"fund_func_class"},t._l(t.fundFuncList,(function(e,n){return a("v-uni-view",{key:n,staticClass:"label",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toPage(e.path,e.name)}}},[a("v-uni-image",{staticClass:"icon",attrs:{src:e.icon}}),a("v-uni-text",{staticClass:"name"},[t._v(t._s(t.getLangs(e.name)))])],1)})),1)},i=[]},"21de":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=n(a("f8c6")),i=n(a("0fa7")),r={name:"FundFunc",mixins:[c.default,i.default],data:function(){return{fundFuncList:[{name:"rechargeText",icon:"/static/images/recharge_icon.png",path:"/pages/recharge/index"},{name:"withdrawText",icon:"/static/images/withdraw_icon.png",path:"/pages/withdraw/index"},{name:"exchangeText",icon:"/static/images/exchange_icon.png",path:"/pages/exchange/index"},{name:"transferText",icon:"/static/images/transfer_icon.png",path:"/pages/transfer/index"}]}},methods:{toPage:function(t,e){if("withdrawText1"===e)return this.$tips.showToast(this.getLangs("noOpen"));this.navigateTo(t)}}};e.default=r},2223:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=n(a("5530")),i=a("2f62"),r=(a("c2cf"),n(a("0fa7"))),u={name:"FundCard",mixins:[r.default],computed:(0,c.default)({},(0,i.mapGetters)({getUserInfoData:"getUserInfoData",getLeftmoney:"getLeftmoney",getCny:"getCny"}))};e.default=u},3983:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".fund_card[data-v-0ae0c09a]{padding:%?20?% %?10?%;position:relative;z-index:1;background-color:#fff}.fund_card_img[data-v-0ae0c09a]{width:100%;height:%?280?%}.fund_card .user_info[data-v-0ae0c09a]{width:100%;position:absolute;top:%?60?%;left:%?80?%;z-index:2}.fund_card .user_info .nickname[data-v-0ae0c09a]{color:#b0c9fe;font-size:%?30?%;line-height:%?60?%}.fund_card .user_info .leftmoney[data-v-0ae0c09a]{color:#fff;font-size:%?60?%;line-height:%?60?%;font-weight:700}.fund_card .sub[data-v-0ae0c09a]{font-size:%?24?%;line-height:%?60?%;color:#fff}",""]),t.exports=e},"3b0a":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},c=n;e.default=c},"3f8a":function(t,e,a){"use strict";var n=a("de70"),c=a.n(n);c.a},"4d14":function(t,e,a){var n=a("3983");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var c=a("4f06").default;c("557b5ba9",n,!0,{sourceMap:!1,shadowMode:!1})},5515:function(t,e,a){"use strict";a.r(e);var n=a("21de"),c=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=c.a},"5b64":function(t,e,a){"use strict";var n=a("b2d0"),c=a.n(n);c.a},6869:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"fund_card"},[n("v-uni-view",{staticClass:"user_info"},[n("v-uni-view",{staticClass:"nickname"},[t._v(t._s(t.getUserInfoData.ncikname)+" "+t._s(t.getLangs("fundp1"))+" (USDT)")]),n("v-uni-view",{staticClass:"leftmoney"},[t._v(t._s(t.getLeftmoney))])],1),n("v-uni-image",{staticClass:"fund_card_img",attrs:{src:a("7399")}})],1)},i=[]},7399:function(t,e,a){t.exports=a.p+"static/img/fund_card.70874244.png"},"7ccc":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".account_class[data-v-a1319dbe]{height:100%;background-color:#fff;margin-top:%?20?%}.account_class .account_menu[data-v-a1319dbe]{width:100%;height:%?88?%;border-bottom:1px solid #eee;white-space:nowrap;overflow-x:auto}.account_class .label[data-v-a1319dbe]{min-width:28%!important;text-align:center;line-height:%?80?%;color:#90a2b0;font-size:%?30?%;display:inline-block;padding:0 %?20?%!important}.account_class .label .line[data-v-a1319dbe]{width:1.5rem;height:2px;background:#2970e6;margin:auto;display:none}.account_class .label.on .line[data-v-a1319dbe]{display:block}.account_class .label.on[data-v-a1319dbe]{color:#2970e6;font-weight:700}.account_box[data-v-a1319dbe]{overflow-x:auto;height:%?128?%}.account_list[data-v-a1319dbe]{height:calc(100% - %?628?%);overflow:auto}.account_class .account_list_label[data-v-a1319dbe]{padding:%?20?%;border-bottom:1px solid #f9f9f9}.account_class .account_list_label .currency[data-v-a1319dbe]{font-size:%?32?%;color:#333;margin-bottom:%?20?%}.account_class .table_hd[data-v-a1319dbe],\n.account_class .table_bd[data-v-a1319dbe]{display:-webkit-box;display:-webkit-flex;display:flex}.account_class .table_hd .table_hd_label[data-v-a1319dbe]{font-size:%?24?%;color:#8d9dbc}.account_class .table_bd .table_bd_label[data-v-a1319dbe]{font-size:%?24?%;line-height:%?60?%;color:#333}.account_class .table_hd .table_hd_label[data-v-a1319dbe]:first-child,\n.account_class .table_bd .table_bd_label[data-v-a1319dbe]:first-child{width:30%;text-align:left}.account_class .table_hd .table_hd_label[data-v-a1319dbe]:nth-child(2),\n.account_class .table_bd .table_bd_label[data-v-a1319dbe]:nth-child(2){width:40%}.account_class .table_hd .table_hd_label[data-v-a1319dbe]:last-child,\n.account_class .table_bd .table_bd_label[data-v-a1319dbe]:last-child{width:30%;text-align:right}",""]),t.exports=e},8322:function(t,e,a){"use strict";a.r(e);var n=a("ea28"),c=a("c561");for(var i in c)"default"!==i&&function(t){a.d(e,t,(function(){return c[t]}))}(i);a("86d7");var r,u=a("f0c5"),o=Object(u["a"])(c["default"],n["b"],n["c"],!1,null,"651dcc48",null,!1,n["a"],r);e["default"]=o.exports},"86b6":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;a("2f62");var c=n(a("f8c6")),i=n(a("0fa7")),r=n(a("cec4")),u=n(a("a02a")),o=n(a("e5c4")),s=n(a("e82f")),l=(n(a("3b0a")),n(a("0696")),{name:"Fund",mixins:[c.default,i.default,r.default],components:{FundCard:u.default,FundFunc:o.default,Account:s.default},onShow:function(){var t=this;this.clearTimer(),this.getUserInfoHandler(),this.getUserLeftmoneyHandler(),this.setTimer(),this.$once("hook:onUnload",(function(){t.clearTimer()})),this.$once("hook:onHide",(function(){t.clearTimer()})),this.setTitle(this.getLangs("fund"))}});e.default=l},"86d7":function(t,e,a){"use strict";var n=a("8872"),c=a.n(n);c.a},8872:function(t,e,a){var n=a("ac6b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var c=a("4f06").default;c("addcfd1a",n,!0,{sourceMap:!1,shadowMode:!1})},"98a7":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".fund_func_class[data-v-fb8de414]{padding:0 %?20?% %?30?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;background-color:#fff}.fund_func_class .label[data-v-fb8de414]{width:25%;text-align:center}.fund_func_class .icon[data-v-fb8de414]{width:%?60?%;height:%?60?%}.fund_func_class .name[data-v-fb8de414]{font-size:%?26?%;display:block;color:#333}",""]),t.exports=e},9996:function(t,e,a){"use strict";a.r(e);var n=a("2223"),c=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=c.a},a02a:function(t,e,a){"use strict";a.r(e);var n=a("6869"),c=a("9996");for(var i in c)"default"!==i&&function(t){a.d(e,t,(function(){return c[t]}))}(i);a("ecc5");var r,u=a("f0c5"),o=Object(u["a"])(c["default"],n["b"],n["c"],!1,null,"0ae0c09a",null,!1,n["a"],r);e["default"]=o.exports},a03f:function(t,e,a){"use strict";a.r(e);var n=a("b1f6"),c=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=c.a},ac6b:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-651dcc48]{background:#f9f9f9}.main_class[data-v-651dcc48]{height:100%;padding:0;overflow:hidden}body.?%PAGE?%[data-v-651dcc48]{background:#f9f9f9}",""]),t.exports=e},b1f6:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=n(a("5530")),i=a("2f62"),r=n(a("f8c6")),u=n(a("0fa7")),o={name:"Account",mixins:[r.default,u.default],data:function(){return{menuList:["futures","contract","coin","poolp6"],active:0}},methods:{changeMenu:function(t){this.active=t}},computed:(0,c.default)({getActive:function(){return this.active}},(0,i.mapGetters)({getAccountBanlance:"getAccountBanlance"}))};e.default=o},b2d0:function(t,e,a){var n=a("7ccc");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var c=a("4f06").default;c("0fa576d8",n,!0,{sourceMap:!1,shadowMode:!1})},c429:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"account_class"},[a("v-uni-view",{staticClass:"account_menu"},[a("v-uni-view",{staticClass:"account_box"},t._l(t.menuList,(function(e,n){return a("v-uni-view",{key:n,class:["label",t.active===n?"on":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeMenu(n)}}},[t._v(t._s(t.getLangs(e))),a("v-uni-view",{staticClass:"line"})],1)})),1)],1),a("v-uni-view",{staticClass:"account_list"},t._l(t.getAccountBanlance&&t.getAccountBanlance[t.getActive],(function(e,n){return a("v-uni-view",{key:n,staticClass:"account_list_label"},["type"!==n?a("v-uni-view",[a("v-uni-view",{staticClass:"currency"},[t._v(t._s(n))]),a("v-uni-view",{staticClass:"table_hd"},[a("v-uni-view",{staticClass:"table_hd_label"},[t._v(t._s(t.getLangs("available")))]),a("v-uni-view",{staticClass:"table_hd_label"},[t._v(t._s(t.getLangs("frozen")))]),a("v-uni-view",{staticClass:"table_hd_label"},[t._v(t._s(t.getLangs("convert"))+"("+t._s(t.getText)+")")])],1),a("v-uni-view",{staticClass:"table_bd"},[a("v-uni-view",{staticClass:"table_bd_label"},[t._v(t._s(Number(e.usable).toFixed(4)))]),a("v-uni-view",{staticClass:"table_bd_label"},[t._v(t._s(Number(e.freeze).toFixed(4)))]),a("v-uni-view",{staticClass:"table_bd_label"},[t._v(t._s(Number(e.convert).toFixed(4)))])],1)],1):t._e()],1)})),1)],1)},i=[]},c561:function(t,e,a){"use strict";a.r(e);var n=a("86b6"),c=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=c.a},cec4:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var c=n(a("1da1")),i=n(a("5530")),r=a("2f62"),u=a("c2cf"),o=n(a("0696")),s={methods:(0,i.default)({data:function(){return{timer:null}},getUserLeftmoneyHandler:function(){var t=this;return(0,c.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.getAllBalance)();case 2:a=e.sent,o.default.checkCode(a)&&(t.setLeftmoney(a.allBalance),t.setAccountBanlance(a.data),t.setCny(a.allCNY));case 4:case"end":return e.stop()}}),e)})))()},checkCertInfoHandler:function(){var t=this;return(0,c.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.userCertInfo)();case 2:a=e.sent,o.default.checkCode(a)&&t.setCertInfo(a.data);case 4:case"end":return e.stop()}}),e)})))()},getUserInfoHandler:function(){var t=this;return(0,c.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.getUserInfo)();case 2:a=e.sent,o.default.checkCode(a)&&t.setUserInfoData(a.data);case 4:case"end":return e.stop()}}),e)})))()},setTimer:function(){var t=this;null!==this.timer&&this.clearTimer(),this.timer=setInterval((function(){t.getUserLeftmoneyHandler()}),2e3)},clearTimer:function(){clearInterval(this.timer),this.timer=null}},(0,r.mapMutations)({setLeftmoney:"SET_LEFTMONEY",setCertInfo:"SET_CERT_INFO",setUserInfoData:"SET_USER_INFO_DATA",setAccountBanlance:"SET_ACCOUNT_BANLANCE",setCny:"SET_CNY"})),computed:(0,i.default)({},(0,r.mapGetters)({getLeftmoney:"getLeftmoney",getCertinfo:"getCertInfo",getUserInfoData:"getUserInfoData",getCny:"getCny",getAccountBanlance:"getAccountBanlance"})),onShow:function(){},onUnload:function(){},created:function(){},destroyed:function(){this.clearTimer()}},l=s;e.default=l},de70:function(t,e,a){var n=a("98a7");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var c=a("4f06").default;c("69a20612",n,!0,{sourceMap:!1,shadowMode:!1})},e5c4:function(t,e,a){"use strict";a.r(e);var n=a("124f"),c=a("5515");for(var i in c)"default"!==i&&function(t){a.d(e,t,(function(){return c[t]}))}(i);a("3f8a");var r,u=a("f0c5"),o=Object(u["a"])(c["default"],n["b"],n["c"],!1,null,"fb8de414",null,!1,n["a"],r);e["default"]=o.exports},e82f:function(t,e,a){"use strict";a.r(e);var n=a("c429"),c=a("a03f");for(var i in c)"default"!==i&&function(t){a.d(e,t,(function(){return c[t]}))}(i);a("5b64");var r,u=a("f0c5"),o=Object(u["a"])(c["default"],n["b"],n["c"],!1,null,"a1319dbe",null,!1,n["a"],r);e["default"]=o.exports},ea28:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{class:["main_class",t.createOSClass]},[a("FundCard"),a("FundFunc"),a("Account")],1)},i=[]},ecc5:function(t,e,a){"use strict";var n=a("4d14"),c=a.n(n);c.a},f8c6:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=n(a("5530")),i=a("2f62"),r=n(a("ccdd")),u=n(a("3b0a")),o=n(a("279d")),s=n(a("0696")),l={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,e){var a="undefined"===typeof e||"{}"===JSON.stringify(e)?"":"?".concat(o.default.convertObj(e));uni.navigateTo({url:t+a})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=u.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?r.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var e=getCurrentPages(),a=e[e.length-1];switch(t){case"opt":return a.options;case"route":return a.route;default:return a}},backToPage:function(t){u.default.getOS();this.navigateTo(t)},backTips:function(t){if(s.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"},UTCDateToLocalDate:function(t){var e=new Date,a=e.getTimezoneOffset(),n=a/60,c=new Date(t);return c.setHours(c.getHours()-n),c}},computed:(0,c.default)({createOSClass:function(){return"h5"}},(0,i.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=u.default.getOS()}},d=l;e.default=d}}]);