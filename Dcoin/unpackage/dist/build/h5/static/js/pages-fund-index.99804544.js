(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-fund-index"],{"0785":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"fund_func_class"},t._l(t.fundFuncList,(function(e,n){return a("v-uni-view",{key:n,staticClass:"label",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toPage(e.path,e.name)}}},[a("v-uni-image",{staticClass:"icon",attrs:{src:e.icon}}),a("v-uni-text",{staticClass:"name"},[t._v(t._s(t.getLangs(e.name)))])],1)})),1)},i=[]},"0a46":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".fund_func_class[data-v-9b94e980]{padding:0 %?20?% %?30?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;background-color:#20222c}.fund_func_class .label[data-v-9b94e980]{width:25%;text-align:center}.fund_func_class .icon[data-v-9b94e980]{width:%?60?%;height:%?60?%}.fund_func_class .name[data-v-9b94e980]{font-size:%?26?%;display:block;color:#fff}",""]),t.exports=e},"0d48":function(t,e,a){var n=a("0a46");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var c=a("4f06").default;c("76b61638",n,!0,{sourceMap:!1,shadowMode:!1})},"0e87":function(t,e,a){"use strict";a.r(e);var n=a("96dc"),c=a("9005");for(var i in c)"default"!==i&&function(t){a.d(e,t,(function(){return c[t]}))}(i);a("abf8");var r,u=a("f0c5"),s=Object(u["a"])(c["default"],n["b"],n["c"],!1,null,"621762dc",null,!1,n["a"],r);e["default"]=s.exports},1672:function(t,e,a){var n=a("4c37");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var c=a("4f06").default;c("26d24ddc",n,!0,{sourceMap:!1,shadowMode:!1})},"216b":function(t,e,a){var n=a("ce43");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var c=a("4f06").default;c("6425a7aa",n,!0,{sourceMap:!1,shadowMode:!1})},"29ef":function(t,e,a){t.exports=a.p+"static/img/fund_card.70874244.png"},"35b6":function(t,e,a){"use strict";a.r(e);var n=a("cd69"),c=a("da30");for(var i in c)"default"!==i&&function(t){a.d(e,t,(function(){return c[t]}))}(i);a("930c");var r,u=a("f0c5"),s=Object(u["a"])(c["default"],n["b"],n["c"],!1,null,"1ed679cf",null,!1,n["a"],r);e["default"]=s.exports},"3ddb":function(t,e,a){var n=a("ff6a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var c=a("4f06").default;c("00a3ce1a",n,!0,{sourceMap:!1,shadowMode:!1})},"446b":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},c=n;e.default=c},"4c37":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".fund_card[data-v-50136481]{padding:%?20?% %?10?%;position:relative;z-index:1;background-color:#20222c}.fund_card_img[data-v-50136481]{width:100%;height:%?280?%}.fund_card .user_info[data-v-50136481]{width:100%;position:absolute;top:%?60?%;left:%?80?%;z-index:2}.fund_card .user_info .nickname[data-v-50136481]{color:#b0c9fe;font-size:%?30?%;line-height:%?60?%}.fund_card .user_info .leftmoney[data-v-50136481]{color:#fff;font-size:%?60?%;line-height:%?60?%;font-weight:700}.fund_card .sub[data-v-50136481]{font-size:%?24?%;line-height:%?60?%;color:#fff}",""]),t.exports=e},"4e50":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;a("2f62");var c=n(a("e133")),i=n(a("a551")),r=n(a("9a27")),u=n(a("d54f")),s=n(a("5d14")),o=n(a("35b6")),l=(n(a("446b")),n(a("d6b2")),{name:"Fund",mixins:[c.default,i.default,r.default],components:{FundCard:u.default,FundFunc:s.default,Account:o.default},onShow:function(){var t=this;this.clearTimer(),this.getUserInfoHandler(),this.getUserLeftmoneyHandler(),this.setTimer(),this.$once("hook:onUnload",(function(){t.clearTimer()})),this.$once("hook:onHide",(function(){t.clearTimer()})),this.setTitle(this.getLangs("fund"))}});e.default=l},"5b3c":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=n(a("e133")),i=n(a("a551")),r={name:"FundFunc",mixins:[c.default,i.default],data:function(){return{fundFuncList:[{name:"rechargeText",icon:"/static/images/recharge_icon.png",path:"/pages/recharge/index"},{name:"withdrawText",icon:"/static/images/withdraw_icon.png",path:"/pages/withdraw/index"},{name:"exchangeText",icon:"/static/images/exchange_icon.png",path:"/pages/exchange/index"},{name:"transferText",icon:"/static/images/transfer_icon.png",path:"/pages/transfer/index"}]}},methods:{toPage:function(t,e){if("withdrawText1"===e)return this.$tips.showToast(this.getLangs("noOpen"));this.navigateTo(t)}}};e.default=r},"5d14":function(t,e,a){"use strict";a.r(e);var n=a("0785"),c=a("8107");for(var i in c)"default"!==i&&function(t){a.d(e,t,(function(){return c[t]}))}(i);a("6be4");var r,u=a("f0c5"),s=Object(u["a"])(c["default"],n["b"],n["c"],!1,null,"9b94e980",null,!1,n["a"],r);e["default"]=s.exports},"61f4":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=n(a("5530")),i=a("2f62"),r=(a("7f97"),n(a("a551"))),u={name:"FundCard",mixins:[r.default],computed:(0,c.default)({},(0,i.mapGetters)({getUserInfoData:"getUserInfoData",getLeftmoney:"getLeftmoney",getCny:"getCny"}))};e.default=u},"69bd":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"fund_card"},[n("v-uni-view",{staticClass:"user_info"},[n("v-uni-view",{staticClass:"nickname"},[t._v(t._s(t.getLangs("fundp1"))+" (USDT)")]),n("v-uni-view",{staticClass:"leftmoney"},[t._v(t._s(t.getLeftmoney))]),n("v-uni-view",{staticClass:"sub"},[t._v("≈ "+t._s(t.getCny)+" "+t._s(t.getText))])],1),n("v-uni-image",{staticClass:"fund_card_img",attrs:{src:a("29ef")}})],1)},i=[]},"6be4":function(t,e,a){"use strict";var n=a("0d48"),c=a.n(n);c.a},8107:function(t,e,a){"use strict";a.r(e);var n=a("5b3c"),c=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=c.a},9005:function(t,e,a){"use strict";a.r(e);var n=a("4e50"),c=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=c.a},"930c":function(t,e,a){"use strict";var n=a("3ddb"),c=a.n(n);c.a},"96dc":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{class:["main_class",t.createOSClass]},[a("FundCard"),a("FundFunc"),a("Account")],1)},i=[]},"9a27":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var c=n(a("1da1")),i=n(a("5530")),r=a("2f62"),u=a("7f97"),s=n(a("d6b2")),o={methods:(0,i.default)({data:function(){return{timer:null}},getUserLeftmoneyHandler:function(){var t=this;return(0,c.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.getAllBalance)();case 2:a=e.sent,s.default.checkCode(a)&&(t.setLeftmoney(a.allBalance),t.setAccountBanlance(a.data),t.setCny(a.allCNY));case 4:case"end":return e.stop()}}),e)})))()},checkCertInfoHandler:function(){var t=this;return(0,c.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.userCertInfo)();case 2:a=e.sent,s.default.checkCode(a)&&t.setCertInfo(a.data);case 4:case"end":return e.stop()}}),e)})))()},getUserInfoHandler:function(){var t=this;return(0,c.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.getUserInfo)();case 2:a=e.sent,s.default.checkCode(a)&&t.setUserInfoData(a.data);case 4:case"end":return e.stop()}}),e)})))()},setTimer:function(){var t=this;null!==this.timer&&this.clearTimer(),this.timer=setInterval((function(){t.getUserLeftmoneyHandler()}),2e3)},clearTimer:function(){clearInterval(this.timer),this.timer=null}},(0,r.mapMutations)({setLeftmoney:"SET_LEFTMONEY",setCertInfo:"SET_CERT_INFO",setUserInfoData:"SET_USER_INFO_DATA",setAccountBanlance:"SET_ACCOUNT_BANLANCE",setCny:"SET_CNY"})),computed:(0,i.default)({},(0,r.mapGetters)({getLeftmoney:"getLeftmoney",getCertinfo:"getCertInfo",getUserInfoData:"getUserInfoData",getCny:"getCny",getAccountBanlance:"getAccountBanlance"})),onShow:function(){},onUnload:function(){},created:function(){},destroyed:function(){this.clearTimer()}},l=o;e.default=l},abf8:function(t,e,a){"use strict";var n=a("216b"),c=a.n(n);c.a},b6a3:function(t,e,a){"use strict";var n=a("1672"),c=a.n(n);c.a},cd69:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"account_class"},[a("v-uni-view",{staticClass:"account_menu"},[a("v-uni-view",{staticClass:"account_box"},t._l(t.menuList,(function(e,n){return a("v-uni-view",{key:n,class:["label",t.active===n?"on":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeMenu(n)}}},[t._v(t._s(t.getLangs(e))),a("v-uni-view",{staticClass:"line"})],1)})),1)],1),a("v-uni-view",{staticClass:"account_list"},t._l(t.getAccountBanlance&&t.getAccountBanlance[t.getActive],(function(e,n){return a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"type"!==n,expression:"key !== 'type'"}],key:n,staticClass:"account_list_label"},[a("v-uni-view",[a("v-uni-view",{staticClass:"currency"},[t._v(t._s(n))]),a("v-uni-view",{staticClass:"table_hd"},[a("v-uni-view",{staticClass:"table_hd_label"},[t._v(t._s(t.getLangs("available")))]),a("v-uni-view",{staticClass:"table_hd_label"},[t._v(t._s(t.getLangs("frozen")))]),a("v-uni-view",{staticClass:"table_hd_label"},[t._v(t._s(t.getLangs("convert"))+"("+t._s(t.getText)+")")])],1),a("v-uni-view",{staticClass:"table_bd"},[a("v-uni-view",{staticClass:"table_bd_label"},[t._v(t._s(Number(e.usable).toFixed(4)))]),a("v-uni-view",{staticClass:"table_bd_label"},[t._v(t._s(Number(e.freeze).toFixed(4)))]),a("v-uni-view",{staticClass:"table_bd_label"},[t._v(t._s(Number(e.convert).toFixed(4)))])],1)],1)],1)})),1)],1)},i=[]},ce43:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-621762dc]{background:#20222c}.main_class[data-v-621762dc]{height:100%;padding:0;overflow:hidden}body.?%PAGE?%[data-v-621762dc]{background:#20222c}",""]),t.exports=e},d140:function(t,e,a){"use strict";a.r(e);var n=a("61f4"),c=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=c.a},d54f:function(t,e,a){"use strict";a.r(e);var n=a("69bd"),c=a("d140");for(var i in c)"default"!==i&&function(t){a.d(e,t,(function(){return c[t]}))}(i);a("b6a3");var r,u=a("f0c5"),s=Object(u["a"])(c["default"],n["b"],n["c"],!1,null,"50136481",null,!1,n["a"],r);e["default"]=s.exports},da30:function(t,e,a){"use strict";a.r(e);var n=a("f982"),c=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=c.a},e133:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=n(a("5530")),i=a("2f62"),r=n(a("950c")),u=n(a("446b")),s=n(a("9898")),o=n(a("d6b2")),l={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,e){var a="undefined"===typeof e||"{}"===JSON.stringify(e)?"":"?".concat(s.default.convertObj(e));uni.navigateTo({url:t+a})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=u.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?r.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var e=getCurrentPages(),a=e[e.length-1];switch(t){case"opt":return a.options;case"route":return a.route;default:return a}},backToPage:function(t){u.default.getOS();this.navigateTo(t)},backTips:function(t){if(o.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,c.default)({createOSClass:function(){return"h5"}},(0,i.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=u.default.getOS()}},d=l;e.default=d},f982:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=n(a("5530")),i=a("2f62"),r=n(a("e133")),u=n(a("a551")),s={name:"Account",mixins:[r.default,u.default],data:function(){return{menuList:["futures","contract","coin","poolp6"],active:0}},methods:{changeMenu:function(t){this.active=t}},computed:(0,c.default)({getActive:function(){return this.active}},(0,i.mapGetters)({getAccountBanlance:"getAccountBanlance"}))};e.default=s},ff6a:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".account_class[data-v-1ed679cf]{height:100%;background-color:#20222c;margin-top:%?20?%}.account_class .account_menu[data-v-1ed679cf]{width:100%;height:%?88?%;border-bottom:1px solid hsla(0,0%,100%,.05);white-space:nowrap;overflow-x:auto}.account_class .label[data-v-1ed679cf]{min-width:28%!important;text-align:center;line-height:%?80?%;color:#90a2b0;font-size:%?30?%;display:inline-block;padding:0 %?20?%!important}.account_class .label .line[data-v-1ed679cf]{width:1.5rem;height:2px;background:#2970e6;margin:auto;display:none}.account_class .label.on .line[data-v-1ed679cf]{display:block}.account_class .label.on[data-v-1ed679cf]{color:#2970e6;font-weight:700}.account_box[data-v-1ed679cf]{overflow-x:auto;height:%?128?%}.account_list[data-v-1ed679cf]{height:calc(100% - %?628?%);overflow:auto}.account_class .account_list_label[data-v-1ed679cf]{padding:%?20?%;border-bottom:1px solid hsla(0,0%,100%,.05)}.account_class .account_list_label .currency[data-v-1ed679cf]{font-size:%?32?%;color:#aaa;margin-bottom:%?20?%}.account_class .table_hd[data-v-1ed679cf],\n.account_class .table_bd[data-v-1ed679cf]{display:-webkit-box;display:-webkit-flex;display:flex}.account_class .table_hd .table_hd_label[data-v-1ed679cf]{font-size:%?24?%;color:#8d9dbc}.account_class .table_bd .table_bd_label[data-v-1ed679cf]{font-size:%?24?%;line-height:%?60?%;color:#fff}.account_class .table_hd .table_hd_label[data-v-1ed679cf]:first-child,\n.account_class .table_bd .table_bd_label[data-v-1ed679cf]:first-child{width:30%;text-align:left}.account_class .table_hd .table_hd_label[data-v-1ed679cf]:nth-child(2),\n.account_class .table_bd .table_bd_label[data-v-1ed679cf]:nth-child(2){width:40%}.account_class .table_hd .table_hd_label[data-v-1ed679cf]:last-child,\n.account_class .table_bd .table_bd_label[data-v-1ed679cf]:last-child{width:30%;text-align:right}",""]),t.exports=e}}]);