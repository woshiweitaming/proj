(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-fund-index"],{"0643":function(e,t,a){"use strict";var n=a("b1be"),c=a.n(n);c.a},"110b":function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".fund_card[data-v-e898c45c]{padding:%?20?% %?10?%;position:relative;z-index:1;background-color:#151936}.fund_card_img[data-v-e898c45c]{width:100%;height:%?280?%}.fund_card .user_info[data-v-e898c45c]{width:100%;position:absolute;top:%?60?%;left:%?80?%;z-index:2}.fund_card .user_info .nickname[data-v-e898c45c]{color:#b0c9fe;font-size:%?30?%;line-height:%?60?%}.fund_card .user_info .leftmoney[data-v-e898c45c]{color:#fff;font-size:%?60?%;line-height:%?60?%;font-weight:700}.fund_card .sub[data-v-e898c45c]{font-size:%?24?%;line-height:%?60?%;color:#fff}",""]),e.exports=t},"159c":function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".account_class[data-v-c21a61e2]{height:100%;background-color:#151936;margin-top:%?20?%}.account_class .account_menu[data-v-c21a61e2]{width:100%;height:%?88?%;border-bottom:1px solid hsla(0,0%,100%,.05);white-space:nowrap;overflow-x:auto}.account_class .label[data-v-c21a61e2]{min-width:28%!important;text-align:center;line-height:%?80?%;color:#90a2b0;font-size:%?30?%;display:inline-block;padding:0 %?20?%!important}.account_class .label .line[data-v-c21a61e2]{width:1.5rem;height:2px;background:#2970e6;margin:auto;display:none}.account_class .label.on .line[data-v-c21a61e2]{display:block}.account_class .label.on[data-v-c21a61e2]{color:#2970e6;font-weight:700}.account_box[data-v-c21a61e2]{overflow-x:auto;height:%?128?%}.account_list[data-v-c21a61e2]{height:calc(100% - %?628?%);overflow:auto}.account_class .account_list_label[data-v-c21a61e2]{padding:%?20?%;border-bottom:1px solid hsla(0,0%,100%,.05)}.account_class .account_list_label .currency[data-v-c21a61e2]{font-size:%?32?%;color:#aaa;margin-bottom:%?20?%}.account_class .table_hd[data-v-c21a61e2],\n.account_class .table_bd[data-v-c21a61e2]{display:-webkit-box;display:-webkit-flex;display:flex}.account_class .table_hd .table_hd_label[data-v-c21a61e2]{font-size:%?24?%;color:#8d9dbc}.account_class .table_bd .table_bd_label[data-v-c21a61e2]{font-size:%?24?%;line-height:%?60?%;color:#fff}.account_class .table_hd .table_hd_label[data-v-c21a61e2]:first-child,\n.account_class .table_bd .table_bd_label[data-v-c21a61e2]:first-child{width:30%;text-align:left}.account_class .table_hd .table_hd_label[data-v-c21a61e2]:nth-child(2),\n.account_class .table_bd .table_bd_label[data-v-c21a61e2]:nth-child(2){width:40%}.account_class .table_hd .table_hd_label[data-v-c21a61e2]:last-child,\n.account_class .table_bd .table_bd_label[data-v-c21a61e2]:last-child{width:30%;text-align:right}",""]),e.exports=t},"394a":function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".fund_func_class[data-v-36b92e00]{padding:0 %?20?% %?30?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;background-color:#151936}.fund_func_class .label[data-v-36b92e00]{width:25%;text-align:center}.fund_func_class .icon[data-v-36b92e00]{width:%?60?%;height:%?60?%}.fund_func_class .name[data-v-36b92e00]{font-size:%?26?%;display:block;color:#fff}",""]),e.exports=t},"3b3c":function(e,t,a){"use strict";var n=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a("5530")),i=a("2f62"),r=(a("c6ed"),n(a("4a03"))),u={name:"FundCard",mixins:[r.default],computed:(0,c.default)({},(0,i.mapGetters)({getUserInfoData:"getUserInfoData",getLeftmoney:"getLeftmoney",getCny:"getCny"}))};t.default=u},4141:function(e,t,a){var n=a("110b");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var c=a("4f06").default;c("37a83e8e",n,!0,{sourceMap:!1,shadowMode:!1})},"51c6":function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return n}));var c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{class:["main_class",e.createOSClass]},[a("FundCard"),a("FundFunc"),a("Account")],1)},i=[]},6095:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return n}));var c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"account_class"},[a("v-uni-view",{staticClass:"account_menu"},[a("v-uni-view",{staticClass:"account_box"},e._l(e.menuList,(function(t,n){return a("v-uni-view",{key:n,class:["label",e.active===n?"on":""],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changeMenu(n)}}},[e._v(e._s(e.getLangs(t))),a("v-uni-view",{staticClass:"line"})],1)})),1)],1),a("v-uni-view",{staticClass:"account_list"},e._l(e.getAccountBanlance&&e.getAccountBanlance[e.getActive],(function(t,n){return a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"type"!==n,expression:"key !== 'type'"}],key:n,staticClass:"account_list_label"},[a("v-uni-view",[a("v-uni-view",{staticClass:"currency"},[e._v(e._s(n))]),a("v-uni-view",{staticClass:"table_hd"},[a("v-uni-view",{staticClass:"table_hd_label"},[e._v(e._s(e.getLangs("available")))]),a("v-uni-view",{staticClass:"table_hd_label"},[e._v(e._s(e.getLangs("frozen")))]),a("v-uni-view",{staticClass:"table_hd_label"},[e._v(e._s(e.getLangs("convert"))+"("+e._s(e.getText)+")")])],1),a("v-uni-view",{staticClass:"table_bd"},[a("v-uni-view",{staticClass:"table_bd_label"},[e._v(e._s(Number(t.usable).toFixed(4)))]),a("v-uni-view",{staticClass:"table_bd_label"},[e._v(e._s(Number(t.freeze).toFixed(4)))]),a("v-uni-view",{staticClass:"table_bd_label"},[e._v(e._s(Number(t.convert).toFixed(4)))])],1)],1)],1)})),1)],1)},i=[]},"613e":function(e,t,a){"use strict";var n=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a("5530")),i=a("2f62"),r=n(a("7a58")),u=n(a("4a03")),s={name:"Account",mixins:[r.default,u.default],data:function(){return{menuList:["futures","contract","coin","poolp6"],active:0}},methods:{changeMenu:function(e){this.active=e}},computed:(0,c.default)({getActive:function(){return this.active}},(0,i.mapGetters)({getAccountBanlance:"getAccountBanlance"}))};t.default=s},"660a":function(e,t,a){"use strict";var n=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;a("2f62");var c=n(a("7a58")),i=n(a("4a03")),r=n(a("f18b")),u=n(a("da72")),s=n(a("84f8")),o=n(a("e050")),l=(n(a("8d4c")),n(a("88a7")),{name:"Fund",mixins:[c.default,i.default,r.default],components:{FundCard:u.default,FundFunc:s.default,Account:o.default},onShow:function(){var e=this;this.clearTimer(),this.getUserInfoHandler(),this.getUserLeftmoneyHandler(),this.setTimer(),this.$once("hook:onUnload",(function(){e.clearTimer()})),this.$once("hook:onHide",(function(){e.clearTimer()})),this.setTitle(this.getLangs("fund"))}});t.default=l},"6c31":function(e,t,a){"use strict";a.r(t);var n=a("51c6"),c=a("9640");for(var i in c)"default"!==i&&function(e){a.d(t,e,(function(){return c[e]}))}(i);a("dad2");var r,u=a("f0c5"),s=Object(u["a"])(c["default"],n["b"],n["c"],!1,null,"6eeee3d2",null,!1,n["a"],r);t["default"]=s.exports},"70d7":function(e,t,a){var n=a("159c");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var c=a("4f06").default;c("2a60b37e",n,!0,{sourceMap:!1,shadowMode:!1})},"77de":function(e,t,a){"use strict";var n=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a("7a58")),i=n(a("4a03")),r={name:"FundFunc",mixins:[c.default,i.default],data:function(){return{fundFuncList:[{name:"rechargeText",icon:"/static/images/recharge_icon.png",path:"/pages/recharge/index"},{name:"withdrawText",icon:"/static/images/withdraw_icon.png",path:"/pages/withdraw/index"},{name:"exchangeText",icon:"/static/images/exchange_icon.png",path:"/pages/exchange/index"},{name:"transferText",icon:"/static/images/transfer_icon.png",path:"/pages/transfer/index"}]}},methods:{toPage:function(e,t){if("withdrawText1"===t)return this.$tips.showToast(this.getLangs("noOpen"));this.navigateTo(e)}}};t.default=r},"7a58":function(e,t,a){"use strict";var n=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a("5530")),i=a("2f62"),r=n(a("f2b5")),u=n(a("8d4c")),s=n(a("3d61")),o=n(a("88a7")),l={data:function(){return{currentOS:""}},methods:{navigateTo:function(e,t){var a="undefined"===typeof t||"{}"===JSON.stringify(t)?"":"?".concat(s.default.convertObj(t));uni.navigateTo({url:e+a})},redirectTo:function(e){uni.redirectTo({url:e})},reLaunch:function(e){uni.reLaunch({url:e})},switchTab:function(e){uni.switchTab({url:e})},back:function(){var e=u.default.getOS();return"ios"===e||"android"===e?uni.navigateBack():history.back(-1)},setTitle:function(e){uni.setNavigationBarTitle({title:"undefined"===typeof e||""===e?r.default.appName:e})},moveHandle:function(){},getCurrentPageData:function(e){var t=getCurrentPages(),a=t[t.length-1];switch(e){case"opt":return a.options;case"route":return a.route;default:return a}},backToPage:function(e){u.default.getOS();this.navigateTo(e)},backTips:function(e){if(o.default.checkCode(e))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(e.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,c.default)({createOSClass:function(){return"h5"}},(0,i.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=u.default.getOS()}},d=l;t.default=d},"838a":function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return n}));var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"fund_card"},[n("v-uni-view",{staticClass:"user_info"},[n("v-uni-view",{staticClass:"nickname"},[e._v(e._s(e.getUserInfoData.ncikname)+" "+e._s(e.getLangs("fundp1"))+" (USDT)")]),n("v-uni-view",{staticClass:"leftmoney"},[e._v(e._s(e.getLeftmoney))]),n("v-uni-view",{staticClass:"sub"},[e._v("≈ "+e._s(e.getCny)+" "+e._s(e.getText))])],1),n("v-uni-image",{staticClass:"fund_card_img",attrs:{src:a("c7b1")}})],1)},i=[]},"84f8":function(e,t,a){"use strict";a.r(t);var n=a("cb63"),c=a("f0e6");for(var i in c)"default"!==i&&function(e){a.d(t,e,(function(){return c[e]}))}(i);a("0643");var r,u=a("f0c5"),s=Object(u["a"])(c["default"],n["b"],n["c"],!1,null,"36b92e00",null,!1,n["a"],r);t["default"]=s.exports},"8d4c":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={setStatusBarColor:function(e){},checkNetWorkStatus:function(){},getOS:function(){var e=uni.getSystemInfoSync().platform;return e}},c=n;t.default=c},9640:function(e,t,a){"use strict";a.r(t);var n=a("660a"),c=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t["default"]=c.a},a1c9:function(e,t,a){"use strict";var n=a("4141"),c=a.n(n);c.a},aa53:function(e,t,a){"use strict";a.r(t);var n=a("3b3c"),c=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t["default"]=c.a},b1be:function(e,t,a){var n=a("394a");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var c=a("4f06").default;c("390ead9a",n,!0,{sourceMap:!1,shadowMode:!1})},c7b1:function(e,t,a){e.exports=a.p+"static/img/fund_card.70874244.png"},cb63:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return n}));var c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"fund_func_class"},e._l(e.fundFuncList,(function(t,n){return a("v-uni-view",{key:n,staticClass:"label",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.toPage(t.path,t.name)}}},[a("v-uni-image",{staticClass:"icon",attrs:{src:t.icon}}),a("v-uni-text",{staticClass:"name"},[e._v(e._s(e.getLangs(t.name)))])],1)})),1)},i=[]},d7da:function(e,t,a){"use strict";var n=a("70d7"),c=a.n(n);c.a},da72:function(e,t,a){"use strict";a.r(t);var n=a("838a"),c=a("aa53");for(var i in c)"default"!==i&&function(e){a.d(t,e,(function(){return c[e]}))}(i);a("a1c9");var r,u=a("f0c5"),s=Object(u["a"])(c["default"],n["b"],n["c"],!1,null,"e898c45c",null,!1,n["a"],r);t["default"]=s.exports},dad2:function(e,t,a){"use strict";var n=a("e791"),c=a.n(n);c.a},e050:function(e,t,a){"use strict";a.r(t);var n=a("6095"),c=a("ed27");for(var i in c)"default"!==i&&function(e){a.d(t,e,(function(){return c[e]}))}(i);a("d7da");var r,u=a("f0c5"),s=Object(u["a"])(c["default"],n["b"],n["c"],!1,null,"c21a61e2",null,!1,n["a"],r);t["default"]=s.exports},e791:function(e,t,a){var n=a("fbcf");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var c=a("4f06").default;c("3d80d26e",n,!0,{sourceMap:!1,shadowMode:!1})},ed27:function(e,t,a){"use strict";a.r(t);var n=a("613e"),c=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t["default"]=c.a},f0e6:function(e,t,a){"use strict";a.r(t);var n=a("77de"),c=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t["default"]=c.a},f18b:function(e,t,a){"use strict";var n=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var c=n(a("1da1")),i=n(a("5530")),r=a("2f62"),u=a("c6ed"),s=n(a("88a7")),o={methods:(0,i.default)({data:function(){return{timer:null}},getUserLeftmoneyHandler:function(){var e=this;return(0,c.default)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,u.getAllBalance)();case 2:a=t.sent,s.default.checkCode(a)&&(e.setLeftmoney(a.allBalance),e.setAccountBanlance(a.data),e.setCny(a.allCNY));case 4:case"end":return t.stop()}}),t)})))()},checkCertInfoHandler:function(){var e=this;return(0,c.default)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,u.userCertInfo)();case 2:a=t.sent,s.default.checkCode(a)&&e.setCertInfo(a.data);case 4:case"end":return t.stop()}}),t)})))()},getUserInfoHandler:function(){var e=this;return(0,c.default)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,u.getUserInfo)();case 2:a=t.sent,s.default.checkCode(a)&&e.setUserInfoData(a.data);case 4:case"end":return t.stop()}}),t)})))()},setTimer:function(){var e=this;null!==this.timer&&this.clearTimer(),this.timer=setInterval((function(){e.getUserLeftmoneyHandler()}),2e3)},clearTimer:function(){clearInterval(this.timer),this.timer=null}},(0,r.mapMutations)({setLeftmoney:"SET_LEFTMONEY",setCertInfo:"SET_CERT_INFO",setUserInfoData:"SET_USER_INFO_DATA",setAccountBanlance:"SET_ACCOUNT_BANLANCE",setCny:"SET_CNY"})),computed:(0,i.default)({},(0,r.mapGetters)({getLeftmoney:"getLeftmoney",getCertinfo:"getCertInfo",getUserInfoData:"getUserInfoData",getCny:"getCny",getAccountBanlance:"getAccountBanlance"})),onShow:function(){},onUnload:function(){},created:function(){},destroyed:function(){this.clearTimer()}},l=o;t.default=l},fbcf:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,"uni-page-body[data-v-6eeee3d2]{background:#151936}.main_class[data-v-6eeee3d2]{height:100%;padding:0;overflow:hidden}body.?%PAGE?%[data-v-6eeee3d2]{background:#151936}",""]),e.exports=t}}]);