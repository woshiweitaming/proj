(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-exchange-index"],{"0240":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-248881ee]{background-color:#111}.exchange_class[data-v-248881ee]{padding:%?20?%;height:100%}.account_type[data-v-248881ee],\n.currency_type[data-v-248881ee],\n.num_class[data-v-248881ee]{padding:%?20?% %?20?% %?20?% %?200?%;border-radius:%?20?%;background:#20222c;margin-bottom:%?20?%;box-sizing:border-box;padding-left:%?200?%;position:relative}.account_type[data-v-248881ee]{z-index:10}.account_type .name[data-v-248881ee]{width:%?160?%;text-align:left;font-size:%?32?%;color:#aaa;line-height:%?80?%;position:absolute;left:10px;top:10px}.currency_type[data-v-248881ee]{padding-left:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;z-index:9}.num_class[data-v-248881ee]{padding-left:20px}.currency_type .icon[data-v-248881ee]{width:%?46?%;height:%?46?%;position:absolute;left:50%;margin-left:%?-23?%;top:50%;margin-top:%?-23?%}.currency_type .currency[data-v-248881ee]{width:40%}.num_class .exhange_num[data-v-248881ee]{line-height:%?80?%;font-size:%?32?%;color:#90a2b0}.num_class .exchange_input[data-v-248881ee]{line-height:%?100?%;font-size:%?50?%;padding:0 %?160?% 0 %?160?%;border-bottom:1px solid hsla(0,0%,100%,.1)}.num_class .exchange_input .currency[data-v-248881ee]{line-height:%?100?%;font-size:%?50?%;position:absolute;left:%?40?%;color:#fff}.num_class .exchange_input .input_bar[data-v-248881ee]{height:%?100?%;font-size:%?40?%;box-sizing:border-box;padding-left:%?40?%;padding:%?30?% 20px;color:#fff}.num_class .all[data-v-248881ee]{position:absolute;right:20px;color:#007aff;font-size:%?28?%;top:%?100?%}.num_class .leftmoney_bar[data-v-248881ee]{display:-webkit-box;display:-webkit-flex;display:flex}.num_class .leftmoney_bar .labels[data-v-248881ee]{width:33.3333%;text-align:center}.num_class .leftmoney_bar .name[data-v-248881ee]{display:block;line-height:%?80?%;font-size:%?24?%;color:#90a2b0}.num_class .leftmoney_bar .value[data-v-248881ee]{display:block;font-size:%?24?%;color:#90a2b0}body.?%PAGE?%[data-v-248881ee]{background-color:#111}",""]),t.exports=e},"0455":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},i=a;e.default=i},"3a15":function(t,e,n){"use strict";n.r(e);var a=n("f876"),i=n("c3d4");for(var c in i)"default"!==c&&function(t){n.d(e,t,(function(){return i[t]}))}(c);n("f0cb");var s,u=n("f0c5"),o=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"248881ee",null,!1,a["a"],s);e["default"]=o.exports},"91c4":function(t,e,n){"use strict";var a=n("4ea4");n("4de4"),n("a9e3"),n("b680"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=a(n("1da1")),c=a(n("5530")),s=n("2f62"),u=a(n("a6a6")),o=a(n("2e94")),r=n("b7de"),l=null,v={name:"Exchange",mixins:[u.default,o.default],data:function(){return{account:{accountList:["futures","contract","coin","poolp6"],active:0,show:!1},currency_out:{outList:["BTC","ETH","USDT","ANTC"],active:1,show:!1},currency_in:{inList:["BTC","ETH","USDT","ANTC"],active:2,show:!1},num:0}},methods:(0,c.default)({getExchangeRateHandler:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,r.getExchangeRate)();case 2:n=e.sent,t.setRate(n.data);case 4:case"end":return e.stop()}}),e)})))()},openDrop:function(t){this.eventClick(),"account_drop"==t&&(this.account.show=!this.account.show),"currency_out"==t&&(this.currency_out.show=!this.currency_out.show),"currency_in"==t&&(this.currency_in.show=!this.currency_in.show)},changeAccountDrop:function(t,e){this.num=0,this.account.active=e,this.eventClick()},changeOutDrop:function(t,e){this.num=0,this.currency_out.active=e,0===this.currency_out.active||1==this.currency_out.active||3==this.currency_out.active?this.currency_in.active=2:this.currency_in.active=0,this.eventClick()},changeInDrop:function(t,e){this.num=0,this.currency_in.active=e,0===this.currency_in.active||1==this.currency_in.active||3==this.currency_in.active?this.currency_out.active=2:this.currency_out.active=0,this.eventClick()},allChange:function(){this.num=this.getBalance[0]},confirmExchangeHandler:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n,a,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==t.num){e.next=2;break}return e.abrupt("return",t.$tips.showToast(t.getLangs("numEmptyTips")));case 2:return n=0,2===t.currency_out.active&&(n=t.currency_in.active),2===t.currency_in.active&&(n=t.currency_out.active),a=t.getWSData.filter((function(e){return e.name==t.currency_out.outList[n]}))[0],i={type:t.account.active,inOrOut:2===t.currency_out.active?0:1,num:Number(t.num),btype:n,bid:a.id},e.next=9,(0,r.confirmExchange)(i);case 9:c=e.sent,t.backTips(c);case 11:case"end":return e.stop()}}),e)})))()},setTimer:function(){var t=this;l=setInterval((function(){t.getExchangeRateHandler()}),3e3)},clearTimer:function(){clearInterval(l),l=null},stopClick:function(t){t.stopPropagation()},eventClick:function(){this.account.show=!1,this.currency_in.show=!1,this.currency_out.show=!1}},(0,s.mapMutations)({setRate:"SET_RATE"})),computed:(0,c.default)({getRateData:function(){if(!this.getRate)return 0;var t=this.getRate.btcRate,e=this.getRate.ethRate,n=this.getRate.antcRate;if(0===this.currency_out.active)return t;if(1===this.currency_out.active)return e;if(2===this.currency_out.active){if(0===this.currency_in.active)return(1/t).toFixed(7);if(1===this.currency_in.active)return(1/e).toFixed(7);if(3===this.currency_in.active)return(1/n).toFixed(7)}return 3===this.currency_out.active?n:void 0},getBalance:function(){var t=this;if(this.getRate&&this.getRate.balance){var e=this.getRate.balance,n=e.filter((function(e){return e.type===t.account.active}))[0],a=n.btc,i=n.eth,c=n.usdt,s=n.antc,u=[a,i,c,s];return[u[this.currency_out.active],u[this.currency_in.active]]}return 0},getAvail:function(){var t=Number(this.num)*this.getRateData,e=0===t?1:t;return e.toFixed(6)}},(0,s.mapGetters)({getRate:"getRate",getWSData:"getWSData"})),onShow:function(){this.setTitle(this.getLangs("exchange")),this.getExchangeRateHandler(),this.setTimer()},onUnload:function(){this.clearTimer()}};e.default=v},"9b64":function(t,e,n){var a=n("0240");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("059aef12",a,!0,{sourceMap:!1,shadowMode:!1})},a6a6:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530")),c=n("2f62"),s=a(n("28a0")),u=a(n("0455")),o=a(n("9a9c")),r=a(n("4a0a")),l={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,e){var n="undefined"===typeof e||"{}"===JSON.stringify(e)?"":"?".concat(o.default.convertObj(e));uni.navigateTo({url:t+n})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=u.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?s.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var e=getCurrentPages(),n=e[e.length-1];switch(t){case"opt":return n.options;case"route":return n.route;default:return n}},backToPage:function(t){u.default.getOS();this.navigateTo(t)},backTips:function(t){if(r.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,i.default)({createOSClass:function(){return"h5"}},(0,c.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=u.default.getOS()}},v=l;e.default=v},c3b0:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAvCAYAAABzJ5OsAAAECElEQVRoQ+2ZT2gcdRTHv9/f2uzMRrSKHipYNGDx3009eLBFQfCgGKKbmYJ/qqCIB0GTWS1EXGNjm5kVDyK0+AcUhFlXklA8FNE29CL0IlSobYUe9GIrJWrZmd1kd55Mkt3ObjbtLux2J5A57rz3fZ/3fr95v9k3RAyvdK58r5LqNwRvgwSTbmbw01aYjCE7DNv7lmS6ziZiuZlUrpk1lvCm438N4PkorAATeUufiv4WT/iPvNtR5TyIoSslEEv4EDh9wNueUDy2JgHBZD6jvxfaxBb+SglAsM/N6O+2hB/+WLYmK4u7ANlBSKqvD7VgO4iXmxkCYk8DvLnfvwPXYRICA8RAX6GvGlxO1uGNXHkEEnxF4Pqr+sXBQGRhGd6wi0+Sag5AIg5c7TAIcJzD2YWtWko7C+LWiFMAke8F6kcw+LsdsZ7ZiHqQlLGmllkh8DhHHX+vAj6M3LxYhTxVsFI/9wyoTeG0s/RwApUjAG6ouQhQochzbiaVp+F4Jwg+VNejpN3x1Hdt6vfMbAW8egSQOjiAJaEy8+PJmeU+bzi+R0BfoeC/bjF5M7IMekbVhnA6t/hAQoKjzeCAMlwrOVuToOn4ElmSM3lLv7sN/Z6aGLY3S3I4EmSpGXy51FF4AKddS7+np2RtiJu2/0XtYBKgTMVRd0w73OwaS/jduf9uEWxxRLAtAOyCpR9tlXMs4ddbnJGp4rYtA2oKEF0x8f6Ggjed0hwgT682l5MbDN7/DUCtoZQ24dtoIF0xMZ3NynelkB2LbFa+45J1yWGz8l0qZMcyrSp/FsBdq6fWjGtpz3Sseo0c1sDvPlC+L0hUJwheKkObmLV44RqxdBxmDfx6Csa0N0KFNwX8vVwsvTWXvemfjqN12aEteMP2XyDx5eVpAnOupVldZulYznT8MwB2rDqW1kzMTNvfA+LzpjHIZ66lv9pxtK46SPgetgDwxhVZudA4MXP8VwAcBKDqcQXnJcGd+TEtfLD7dpm2/wiI4xGA+Tq8uQ54VanHCuPJU32jDgNnRRmDpWMEdtY4RNTeZfg4g6ezMqAGSwcJvBQpoF+V6hBHp4vDVGqGkXG3AEJgn0D6VnERkOQQgRcvn0N1/Kxr6ct/A38FcH9ft0UnwQU//eVpT8xnWQnhKxtmwCr4wRPt2cNv81KYbzgxO0fgzk6S74PtnyLB/ryXOhSd5tGYLr5OpRq+c4Z7PmyZBM73AbQWMpCAFwMV/IIT+olCgdVmltVuU3IAGY/eFODUIrRH4/yuE+nzGy+BhhN21PYcRTasAMDTZSR3xXEFWr3bfABiomELCT/JZ7Q3+rj/W4Zu+SnTtP2GBAQ4lLf01zYEfAg5ansZRY5BcK4aiFF4J/VH3OD/B7m52YL1LMEeAAAAAElFTkSuQmCC"},c3d4:function(t,e,n){"use strict";n.r(e);var a=n("91c4"),i=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,(function(){return a[t]}))}(c);e["default"]=i.a},f0cb:function(t,e,n){"use strict";var a=n("9b64"),i=n.n(a);i.a},f876:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"exchange_class",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.eventClick.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"account_type"},[a("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("accountType")))]),a("v-uni-view",{staticClass:"select",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopClick.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"select_label",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openDrop("account_drop")}}},[a("v-uni-view",{staticClass:"select_name"},[t._v(t._s(t.getLangs(t.account.accountList[t.account.active])))]),a("v-uni-text",{staticClass:"iconfont icon-unfold"})],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.account.show,expression:"account.show"}],staticClass:"select_drop"},[a("v-uni-view",{staticClass:"selelct_drop_main",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopClick.apply(void 0,arguments)}}},t._l(t.account.accountList,(function(e,n){return a("v-uni-view",{key:n,staticClass:"select_drop_label",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeAccountDrop("account_drop",n)}}},[t._v(t._s(t.getLangs(e)))])})),1)],1)],1)],1),a("v-uni-view",{staticClass:"currency_type"},[a("v-uni-view",{staticClass:"currency"},[a("v-uni-view",{staticClass:"select",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopClick.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"select_label",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openDrop("currency_out")}}},[a("v-uni-view",{staticClass:"select_name"},[t._v(t._s(t.currency_out.outList[t.currency_out.active]))]),a("v-uni-text",{staticClass:"iconfont icon-unfold"})],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.currency_out.show,expression:"currency_out.show"}],staticClass:"select_drop"},[a("v-uni-view",{staticClass:"selelct_drop_main",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopClick.apply(void 0,arguments)}}},t._l(t.currency_out.outList,(function(e,n){return a("v-uni-view",{key:n,staticClass:"select_drop_label",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeOutDrop("currency_out",n)}}},[t._v(t._s(e))])})),1)],1)],1)],1),a("v-uni-image",{staticClass:"icon",attrs:{src:n("c3b0")}}),a("v-uni-view",{staticClass:"currency"},[a("v-uni-view",{staticClass:"select",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopClick.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"select_label",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openDrop("currency_in")}}},[a("v-uni-view",{staticClass:"select_name"},[t._v(t._s(t.currency_in.inList[t.currency_in.active]))]),a("v-uni-text",{staticClass:"iconfont icon-unfold"})],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.currency_in.show,expression:"currency_in.show"}],staticClass:"select_drop"},[a("v-uni-view",{staticClass:"selelct_drop_main",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopClick.apply(void 0,arguments)}}},t._l(t.currency_in.inList,(function(e,n){return a("v-uni-view",{key:n,staticClass:"select_drop_label",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeInDrop("currency_in",n)}}},[t._v(t._s(e))])})),1)],1)],1)],1)],1),a("v-uni-view",{staticClass:"num_class"},[a("v-uni-text",{staticClass:"exhange_num"},[t._v(t._s(t.getLangs("exchangeNum")))]),a("v-uni-view",{staticClass:"exchange_input"},[a("v-uni-view",{staticClass:"currency"},[t._v(t._s(t.currency_out.outList[t.currency_out.active]))]),a("v-uni-view",{staticClass:"input_bar"},[a("v-uni-input",{staticClass:"input_main",attrs:{type:"number",placeholder:t.getLangs("numEmptyTips")},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}})],1),a("v-uni-view",{staticClass:"all",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.allChange.apply(void 0,arguments)}}},[t._v(t._s(t.getLangs("all")))])],1),a("v-uni-view",{staticClass:"leftmoney_bar"},[a("v-uni-view",{staticClass:"labels"},[a("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("rate")))]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(t.getRateData))])],1),a("v-uni-view",{staticClass:"labels"},[a("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("avaliableUsdt"))+t._s(t.currency_out.outList[t.currency_out.active]))]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(t.getBalance.length>0&&Number(t.getBalance[0]).toFixed(6)))])],1),a("v-uni-view",{staticClass:"labels"},[a("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("avaliableBtc"))+t._s(t.currency_in.inList[t.currency_in.active]))]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(t.getAvail))])],1)],1)],1),a("v-uni-view",{staticClass:"form_class"},[a("v-uni-button",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirmExchangeHandler.apply(void 0,arguments)}}},[t._v(t._s(t.getLangs("exchange")))])],1)],1)},c=[]}}]);