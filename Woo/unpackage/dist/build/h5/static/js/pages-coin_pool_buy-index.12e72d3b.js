(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-coin_pool_buy-index"],{"03a0":function(t,i,a){"use strict";a.r(i);var e=a("c25e"),n=a.n(e);for(var s in e)"default"!==s&&function(t){a.d(i,t,(function(){return e[t]}))}(s);i["default"]=n.a},"15d3":function(t,i,a){"use strict";var e=a("76ee"),n=a.n(e);n.a},"1de5":function(t,i,a){"use strict";t.exports=function(t,i){return i||(i={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),i.hash&&(t+=i.hash),/["'() \t\n]/.test(t)||i.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"2aef":function(t,i,a){"use strict";a.r(i);var e=a("67a0"),n=a("03a0");for(var s in n)"default"!==s&&function(t){a.d(i,t,(function(){return n[t]}))}(s);a("15d3");var o,c=a("f0c5"),r=Object(c["a"])(n["default"],e["b"],e["c"],!1,null,"319b673e",null,!1,e["a"],o);i["default"]=r.exports},"38fa":function(t,i,a){t.exports=a.p+"static/img/coin_pool_bg.4ad6f86f.png"},"3dc9":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},n=e;i.default=n},"66fe":function(t,i,a){"use strict";var e=a("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e(a("5530")),s=a("2f62"),o=e(a("9813")),c=e(a("3dc9")),r=e(a("4d94")),l=e(a("1055")),u={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,i){var a="undefined"===typeof i||"{}"===JSON.stringify(i)?"":"?".concat(r.default.convertObj(i));uni.navigateTo({url:t+a})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=c.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?o.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var i=getCurrentPages(),a=i[i.length-1];switch(t){case"opt":return a.options;case"route":return a.route;default:return a}},backToPage:function(t){c.default.getOS();this.navigateTo(t)},backTips:function(t){if(l.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,n.default)({createOSClass:function(){return"h5"}},(0,s.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=c.default.getOS()}},d=u;i.default=d},"67a0":function(t,i,a){"use strict";var e;a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return s})),a.d(i,"a",(function(){return e}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"coin_pool_class"},[e("v-uni-view",{staticClass:"coin_main"},[e("v-uni-text",{staticClass:"title"},[t._v(t._s(t.datas.proName))]),e("v-uni-view",{staticClass:"section"},[e("v-uni-view",{staticClass:"labels"},[e("v-uni-image",{staticClass:"img_logo",attrs:{src:t.datas.logo}}),e("v-uni-view",{staticClass:"get"},[t._v(t._s(t.getLangs("movingBricks")))]),e("v-uni-view",{staticClass:"currency"},[t._v("USDT")])],1),e("v-uni-view",{staticClass:"labels right"},[e("v-uni-view",{staticClass:"get"},[t._v(t._s(t.getLangs("recent"))+"(%)")]),e("v-uni-view",{staticClass:"value"},[t._v(t._s(t.datas.dayRate&&t.datas.dayRate.split("~")[1]))])],1)],1),e("v-uni-view",{staticClass:"buy_info"},[e("v-uni-view",{staticClass:"card"},[e("v-uni-view",{staticClass:"labels"},[e("v-uni-text",{staticClass:"name"},[t._v(t._s(t.datas.period)+t._s(t.getLangs("day")))]),e("v-uni-text",{staticClass:"value"},[t._v(t._s(t.getLangs("financialCycle")))])],1),e("v-uni-view",{staticClass:"labels line"}),e("v-uni-view",{staticClass:"labels"},[e("v-uni-text",{staticClass:"name"},[t._v(t._s(t.datas.priceScope))]),e("v-uni-text",{staticClass:"value"},[t._v(t._s(t.getLangs("singleLimit")))])],1)],1)],1),e("v-uni-view",{staticClass:"coin_labels award"},[e("v-uni-view",{staticClass:"box"},[e("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("dividendTime")))]),e("v-uni-view",{staticClass:"value"},[t._v(t._s(t.getLangs("daily")))])],1),e("v-uni-view",{staticClass:"box"},[e("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("ustodyFunds")))]),e("v-uni-view",{staticClass:"value"},[t._v(t._s(t.getLangs("returnDue")))])],1),e("v-uni-view",{staticClass:"box"},[e("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("earlyRedemption")))]),e("v-uni-view",{staticClass:"value"},[t._v(t._s(t.datas.defaultRate)+"%")])],1)],1),e("v-uni-view",{staticClass:"coin_labels"},[e("v-uni-view",{staticClass:"box"},[e("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("estimatedEarnings"))+"(USDT)")]),e("v-uni-view",{staticClass:"value"},[t._v(t._s(t.datas.estimateProfit))])],1),e("v-uni-view",{staticClass:"box"},[e("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("availableAssets")))]),e("v-uni-view",{staticClass:"value"},[t._v(t._s(t.datas.balance))])],1)],1),e("v-uni-view",{staticClass:"coin_labels intro"},[e("v-uni-view",{staticClass:"titles"},[t._v(t._s(t.getLangs("productIntroduction"))),e("v-uni-image",{staticClass:"down_arrow",attrs:{src:a("f459")},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showDesc.apply(void 0,arguments)}}})],1),t.show?e("v-uni-view",{staticClass:"desc"},[e("v-uni-text",[t._v(t._s(t.datas.introduce))])],1):t._e()],1),e("v-uni-view",{staticClass:"coin_labels"},[e("v-uni-view",{staticClass:"titles"},[t._v(t._s(t.getLangs("escrowAmount")))]),e("v-uni-view",{staticClass:"inputs"},[e("v-uni-input",{staticClass:"input_bar",attrs:{type:"text",placeholder:t.getLangs("escrowAmountPlaceholder")},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.checkInput.apply(void 0,arguments)}},model:{value:t.amount,callback:function(i){t.amount=i},expression:"amount"}}),e("v-uni-view",{staticClass:"usdt"},[t._v("USDT")]),e("v-uni-view",{staticClass:"all",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.all.apply(void 0,arguments)}}},[t._v(t._s(t.getLangs("allText")))])],1)],1)],1),e("v-uni-view",{staticClass:"bottom"},[e("v-uni-view",{staticClass:"btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.submitOrderHandler.apply(void 0,arguments)}}},[t._v(t._s(t.getLangs("subscribe")))])],1),t.errorTips?e("v-uni-view",{staticClass:"error_dialog"},[e("v-uni-view",{staticClass:"error_dialog_main"},[e("v-uni-view",{staticClass:"section1"},[e("v-uni-image",{staticClass:"img",attrs:{src:a("af23")}})],1),e("v-uni-view",{staticClass:"section2"},[e("v-uni-text",{staticClass:"tips1"},[t._v(t._s(t.getLangs("subscriptionFailed")))]),e("v-uni-text",{staticClass:"tips2"},[t._v(t._s(t.getLangs("subscriptionLimit")))]),e("v-uni-view",{staticClass:"btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.closeErrorDialog.apply(void 0,arguments)}}},[t._v(t._s(t.getLangs("confirm")))])],1)],1)],1):t._e()],1)},s=[]},"76ee":function(t,i,a){var e=a("c5e5");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("5caa4a87",e,!0,{sourceMap:!1,shadowMode:!1})},af23:function(t,i,a){t.exports=a.p+"static/img/error_img.3ec59f96.png"},c25e:function(t,i,a){"use strict";var e=a("4ea4");a("c975"),a("a9e3"),a("ac1f"),a("1276"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,a("96cf");var n=e(a("1da1")),s=(a("2f62"),e(a("9813"))),o=e(a("66fe")),c=e(a("d98d")),r=e(a("1055")),l=a("7e3e"),u={name:"CoinPoolBuy",mixins:[o.default,c.default],data:function(){return{fid:"",domain:s.default.domain,datas:{},show:!1,amount:"",errorTips:!1}},methods:{showDesc:function(){this.show=!this.show},getFinProductInfoHandler:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function i(){var a,e;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a={fid:t.fid},i.next=3,(0,l.getFinProductInfo)(a);case 3:e=i.sent,t.datas=e.data;case 5:case"end":return i.stop()}}),i)})))()},submitOrderHandler:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function i(){var a,e,n,s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(""!==t.amount){i.next=2;break}return i.abrupt("return",t.$tips.showToast(t.getLangs("escrowAmountPlaceholder")));case 2:if(a=t.datas.priceScope.split("~"),!(Number(t.amount)<Number(a[0])||Number(t.amount)>Number(a[1]))){i.next=5;break}return i.abrupt("return",t.errorTips=!0);case 5:return e={fid:t.fid,amount:t.amount},i.next=8,(0,l.submitOrder)(e);case 8:n=i.sent,t.backTips(n),r.default.checkCode(n)&&(s=Object.assign(n.data,{fid:t.fid}),t.navigateTo("/pages/coin_pool_confirm/index",s));case 11:case"end":return i.stop()}}),i)})))()},all:function(){this.amount=this.datas.balance},closeErrorDialog:function(){this.errorTips=!1},checkInput:function(t){var i=this;setTimeout((function(){var a=/^(\d+|\d+\.\d{0,4})$/,e=t.detail.value;if(a.test(e))i.amount=e;else if(e.indexOf(".")>-1){var n=e.split("."),s=n[0],o=n[1];o.length>4?i.amount=s+"."+o.substring(0,4):i.amount=s+"."+o,i.amount=e.substring(0,e.length-1)}else i.amount=""}),20)}},computed:{getDayRate:function(){return function(t){if("undefined"==typeof t)return 0;var i=t.split("~");return i[0]+"% ~ "+i[1]+"%"}}},onLoad:function(t){this.fid=t.fid},onShow:function(){this.getFinProductInfoHandler(),this.setTitle(this.getLangs("coinPool"))}};i.default=u},c5e5:function(t,i,a){var e=a("24fb"),n=a("1de5"),s=a("38fa");i=e(!1);var o=n(s);i.push([t.i,".coin_pool_class[data-v-319b673e]{height:100%;background:url("+o+");background-size:100% %?1334?%;padding:0 %?40?% %?140?% %?40?%;overflow:hidden}.coin_main[data-v-319b673e]{height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:auto}.coin_main .title[data-v-319b673e]{font-size:%?50?%;color:#fff;font-weight:700;margin-bottom:%?40?%;display:block}.coin_main .section[data-v-319b673e]{display:-webkit-box;display:-webkit-flex;display:flex}.coin_main .section .labels[data-v-319b673e]{width:50%;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:%?100?%;position:relative}.coin_main .section .labels .img_logo[data-v-319b673e]{width:%?80?%;height:%?80?%;position:absolute;left:0;top:0;z-index:10}.coin_main .section .labels .get[data-v-319b673e]{color:#719af9;font-size:%?24?%}.coin_main .section .labels .currency[data-v-319b673e]{font-size:%?40?%;color:#fff;font-weight:700}.coin_main .section .labels.right[data-v-319b673e]{text-align:right;padding-left:0}.coin_main .section .labels .value[data-v-319b673e]{text-align:right;font-size:%?32?%;font-weight:700;color:#ffc600;margin-top:%?10?%}.coin_main .buy_info[data-v-319b673e]{width:100%;margin:0 auto;margin-top:%?95?%;position:relative;height:%?28?%;background-color:hsla(0,0%,100%,.15);padding-top:%?140?%}.coin_main .buy_info .card[data-v-319b673e]{width:90%;height:%?180?%;padding:%?30?% %?30?%;position:absolute;left:50%;margin-left:-45%;top:%?-75?%;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex}.coin_main .buy_info .card .labels[data-v-319b673e]{width:49%;text-align:center}.coin_main .buy_info .card .labels .value[data-v-319b673e],\n.coin_main .buy_info .card .labels .name[data-v-319b673e]{display:block;line-height:%?60?%}.coin_main .buy_info .card .labels .value[data-v-319b673e]{color:#90a2b0;font-size:%?26?%;line-height:%?60?%}.coin_main .buy_info .card .labels .name[data-v-319b673e]{font-size:%?30?%;color:#1f3f59;font-weight:700}.coin_main .buy_info .card .labels.line[data-v-319b673e]{height:%?40?%;background:#e7eaed;width:1px;margin-top:%?30?%}.coin_main .coin_labels[data-v-319b673e]{width:100%;margin-top:%?20?%;position:relative;padding:%?20?%;background-color:hsla(0,0%,100%,.15)}.coin_main .coin_labels.intro[data-v-319b673e]{padding:0}.coin_main .coin_labels[data-v-319b673e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.coin_main .coin_labels .box[data-v-319b673e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center}.coin_main .coin_labels .box .name[data-v-319b673e]{color:#bed2ff;margin-bottom:%?20?%}.coin_main .coin_labels .box .value[data-v-319b673e]{height:%?60?%;line-height:%?60?%;font-size:%?34?%;color:#fff;font-weight:700}.coin_main .coin_labels.award .value[data-v-319b673e]{color:#ffc600;font-weight:700;font-size:%?30?%;line-height:%?60?%}.coin_main .coin_labels .titles[data-v-319b673e]{font-size:%?30?%;color:#fff;width:100%;padding:%?20?%;position:relative}.coin_main .coin_labels .titles .down_arrow[data-v-319b673e]{width:%?30?%;height:%?30?%;position:absolute;right:%?20?%;top:%?20?%}.coin_main .coin_labels .inputs[data-v-319b673e]{background:#fff;width:100%;margin-top:%?20?%;padding:%?20?%;position:relative;padding-right:%?160?%;height:%?80?%}.coin_main .coin_labels .inputs .usdt[data-v-319b673e]{position:absolute;right:%?100?%;top:%?25?%;font-size:%?26?%}.coin_main .coin_labels .inputs .all[data-v-319b673e]{position:absolute;right:%?15?%;top:%?25?%;font-size:%?26?%;color:#007aff}.bottom[data-v-319b673e]{position:fixed;bottom:0;left:0;z-index:199;background:#fff;width:100%;height:%?130?%;padding:%?20?%}.bottom .btn[data-v-319b673e]{background:#2351bd;width:100%;height:%?90?%;text-align:center;-webkit-border-radius:%?10?%;border-radius:%?10?%;line-height:%?90?%;font-size:%?34?%;font-weight:700;background:#2351bd;margin:0 auto;color:#fff}.input_bar[data-v-319b673e]{font-size:%?28?%}.desc[data-v-319b673e]{width:100%;display:block;background:hsla(0,0%,100%,.1);padding:%?20?%;font-size:%?30?%;color:#fff}.intro[data-v-319b673e]{padding:0}",""]),t.exports=i},f459:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAABk0lEQVRoQ+3XYW6EIBAF4Jm9Rw+gHKvtNaptj9GktzLeoMeQBgPGdQGHYVQ2Yf8uIZ/PBwjCk/7wSd1Q4We/uZp4TZyYQK0KMSixYTVxsSiJE9XEiUGJDauJi0UJAFprREQdm7PYxPfwxcJN2jF80fAYvni4xd8QcVp3/g4+DEOPiC9N07ztLQ7JxRiby9RlHMcfAPhr2/bDjV3gFt3ZP35LwK/Qr9b17fAzfIN2D3Up3oOeXVrrL6VUhwH0pfgQ2qEM3vSn01r3kZ6dmvwe2qb+OVelFDwVrZTql8V5NT4FbcK+2w6vwqeiH+AJtXnfHgjcfZ2D9sLPxBPR8/a3DSZ45BNrw04+Bx1M3D3dUfhc9C78iNpIoElwSbwUmgyXwEuik+A5eGl0MpyDPwLNgqfgzVeovQS47+mHc8p9pqYeYOyrG2WrNHAAEEezE0/Y54NBcpN2E7ITz8HnorMT5+Al0GJw4oJd7oupC9E3Prsq60ljC1YqabGOb9Pw4aXRolUJJX8E+jC46/w0TTffJUCi4//KcsU94q5JjgAAAABJRU5ErkJggg=="}}]);