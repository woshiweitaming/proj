(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-coin_pool_buy-index"],{"0050":function(a,t,i){a.exports=i.p+"static/img/coin_pool_bg.4ad6f86f.png"},"038b":function(a,t,i){"use strict";var e=i("4ea4");i("c975"),i("a9e3"),i("ac1f"),i("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("96cf");var n=e(i("1da1")),s=(i("2f62"),e(i("873a"))),o=e(i("c5e2")),c=e(i("a937")),r=e(i("78d5")),l=i("704f"),u={name:"CoinPoolBuy",mixins:[o.default,c.default],data:function(){return{fid:"",domain:s.default.domain,data:{},show:!1,amount:"",errorTips:!1}},methods:{showDesc:function(){this.show=!this.show},getFinProductInfoHandler:function(){var a=this;return(0,n.default)(regeneratorRuntime.mark((function t(){var i,e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i={fid:a.fid},t.next=3,(0,l.getFinProductInfo)(i);case 3:e=t.sent,a.data=e.data;case 5:case"end":return t.stop()}}),t)})))()},submitOrderHandler:function(){var a=this;return(0,n.default)(regeneratorRuntime.mark((function t(){var i,e,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!==a.amount){t.next=2;break}return t.abrupt("return",a.$tips.showToast(a.getLangs("escrowAmountPlaceholder")));case 2:if(i=a.data.priceScope.split("~"),!(Number(a.amount)<Number(i[0])||Number(a.amount)>Number(i[1]))){t.next=5;break}return t.abrupt("return",a.errorTips=!0);case 5:return e={fid:a.fid,amount:a.amount},t.next=8,(0,l.submitOrder)(e);case 8:n=t.sent,a.backTips(n),r.default.checkCode(n)&&(s=Object.assign(n.data,{fid:a.fid}),a.navigateTo("/pages/coin_pool_confirm/index",s));case 11:case"end":return t.stop()}}),t)})))()},all:function(){this.amount=this.data.balance},closeErrorDialog:function(){this.errorTips=!1},checkInput:function(a){var t=this;setTimeout((function(){var i=/^(\d+|\d+\.\d{0,4})$/,e=a.detail.value;if(i.test(e))t.amount=e;else if(e.indexOf(".")>-1){var n=e.split("."),s=n[0],o=n[1];o.length>4?t.amount=s+"."+o.substring(0,4):t.amount=s+"."+o,t.amount=e.substring(0,e.length-1)}else t.amount=""}),20)}},computed:{getDayRate:function(){return function(a){if("undefined"==typeof a)return 0;var t=a.split("~");return t[0]+"% ~ "+t[1]+"%"}}},onLoad:function(a){a&&(this.fid=a.fid)},onShow:function(){this.getFinProductInfoHandler(),this.setTitle(this.getLangs("coinPool"))}};t.default=u},"1de5":function(a,t,i){"use strict";a.exports=function(a,t){return t||(t={}),a=a&&a.__esModule?a.default:a,"string"!==typeof a?a:(/^['"].*['"]$/.test(a)&&(a=a.slice(1,-1)),t.hash&&(a+=t.hash),/["'() \t\n]/.test(a)||t.needQuotes?'"'.concat(a.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):a)}},"24d4":function(a,t){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAABk0lEQVRoQ+3XYW6EIBAF4Jm9Rw+gHKvtNaptj9GktzLeoMeQBgPGdQGHYVQ2Yf8uIZ/PBwjCk/7wSd1Q4We/uZp4TZyYQK0KMSixYTVxsSiJE9XEiUGJDauJi0UJAFprREQdm7PYxPfwxcJN2jF80fAYvni4xd8QcVp3/g4+DEOPiC9N07ztLQ7JxRiby9RlHMcfAPhr2/bDjV3gFt3ZP35LwK/Qr9b17fAzfIN2D3Up3oOeXVrrL6VUhwH0pfgQ2qEM3vSn01r3kZ6dmvwe2qb+OVelFDwVrZTql8V5NT4FbcK+2w6vwqeiH+AJtXnfHgjcfZ2D9sLPxBPR8/a3DSZ45BNrw04+Bx1M3D3dUfhc9C78iNpIoElwSbwUmgyXwEuik+A5eGl0MpyDPwLNgqfgzVeovQS47+mHc8p9pqYeYOyrG2WrNHAAEEezE0/Y54NBcpN2E7ITz8HnorMT5+Al0GJw4oJd7oupC9E3Prsq60ljC1YqabGOb9Pw4aXRolUJJX8E+jC46/w0TTffJUCi4//KcsU94q5JjgAAAABJRU5ErkJggg=="},3169:function(a,t,i){"use strict";var e;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return e}));var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-uni-view",{staticClass:"coin_pool_class"},[e("v-uni-view",{staticClass:"coin_main"},[e("v-uni-text",{staticClass:"title"},[a._v(a._s(a.data.proName))]),e("v-uni-view",{staticClass:"section"},[e("v-uni-view",{staticClass:"labels"},[e("v-uni-image",{staticClass:"img",attrs:{src:a.data.logo}}),e("v-uni-view",{staticClass:"get"},[a._v(a._s(a.getLangs("movingBricks")))]),e("v-uni-view",{staticClass:"currency"},[a._v("USDT")])],1),e("v-uni-view",{staticClass:"labels right"},[e("v-uni-view",{staticClass:"get"},[a._v(a._s(a.getLangs("recent"))+"(%)")]),e("v-uni-view",{staticClass:"value"},[a._v(a._s(a.data.dayRate))])],1)],1),e("v-uni-view",{staticClass:"buy_info"},[e("v-uni-view",{staticClass:"card"},[e("v-uni-view",{staticClass:"labels"},[e("v-uni-text",{staticClass:"name"},[a._v(a._s(a.data.period)+a._s(a.getLangs("day")))]),e("v-uni-text",{staticClass:"value"},[a._v(a._s(a.getLangs("financialCycle")))])],1),e("v-uni-view",{staticClass:"labels line"}),e("v-uni-view",{staticClass:"labels"},[e("v-uni-text",{staticClass:"name"},[a._v(a._s(a.data.priceScope))]),e("v-uni-text",{staticClass:"value"},[a._v(a._s(a.getLangs("singleLimit")))])],1)],1)],1),e("v-uni-view",{staticClass:"coin_labels award"},[e("v-uni-view",{staticClass:"box"},[e("v-uni-view",{staticClass:"name"},[a._v(a._s(a.getLangs("dividendTime")))]),e("v-uni-view",{staticClass:"value"},[a._v(a._s(a.getLangs("daily")))])],1),e("v-uni-view",{staticClass:"box"},[e("v-uni-view",{staticClass:"name"},[a._v(a._s(a.getLangs("ustodyFunds")))]),e("v-uni-view",{staticClass:"value"},[a._v(a._s(a.getLangs("returnDue")))])],1),e("v-uni-view",{staticClass:"box"},[e("v-uni-view",{staticClass:"name"},[a._v(a._s(a.getLangs("earlyRedemption")))]),e("v-uni-view",{staticClass:"value"},[a._v(a._s(a.data.defaultRate)+"%")])],1)],1),e("v-uni-view",{staticClass:"coin_labels"},[e("v-uni-view",{staticClass:"box"},[e("v-uni-view",{staticClass:"name"},[a._v(a._s(a.getLangs("estimatedEarnings"))+"(USDT)")]),e("v-uni-view",{staticClass:"value"},[a._v(a._s(a.data.estimateProfit))])],1),e("v-uni-view",{staticClass:"box"},[e("v-uni-view",{staticClass:"name"},[a._v(a._s(a.getLangs("availableAssets")))]),e("v-uni-view",{staticClass:"value"},[a._v(a._s(a.data.balance))])],1)],1),e("v-uni-view",{staticClass:"coin_labels intro"},[e("v-uni-view",{staticClass:"titles"},[a._v(a._s(a.getLangs("productIntroduction"))),e("v-uni-image",{staticClass:"down_arrow",attrs:{src:i("24d4")},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.showDesc.apply(void 0,arguments)}}})],1),a.show?e("v-uni-view",{staticClass:"desc"},[a._v(a._s(a.data.introduce))]):a._e()],1),e("v-uni-view",{staticClass:"coin_labels"},[e("v-uni-view",{staticClass:"titles"},[a._v(a._s(a.getLangs("escrowAmount")))]),e("v-uni-view",{staticClass:"inputs"},[e("v-uni-input",{staticClass:"input_bar",attrs:{type:"text",placeholder:a.getLangs("escrowAmountPlaceholder")},on:{input:function(t){arguments[0]=t=a.$handleEvent(t),a.checkInput.apply(void 0,arguments)}},model:{value:a.amount,callback:function(t){a.amount=t},expression:"amount"}}),e("v-uni-text",{staticClass:"usdt"},[a._v("USDT")]),e("v-uni-text",{staticClass:"all",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.all.apply(void 0,arguments)}}},[a._v(a._s(a.getLangs("allText")))])],1)],1)],1),e("v-uni-view",{staticClass:"bottom"},[e("v-uni-view",{staticClass:"btn",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.submitOrderHandler.apply(void 0,arguments)}}},[a._v(a._s(a.getLangs("subscribe")))])],1),a.errorTips?e("v-uni-view",{staticClass:"error_dialog"},[e("v-uni-view",{staticClass:"error_dialog_main"},[e("v-uni-view",{staticClass:"section1"},[e("v-uni-image",{staticClass:"img",attrs:{src:i("4a49")}})],1),e("v-uni-view",{staticClass:"section2"},[e("v-uni-text",{staticClass:"tips1"},[a._v(a._s(a.getLangs("subscriptionFailed")))]),e("v-uni-text",{staticClass:"tips2"},[a._v(a._s(a.getLangs("subscriptionLimit")))]),e("v-uni-view",{staticClass:"btn",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.closeErrorDialog.apply(void 0,arguments)}}},[a._v(a._s(a.getLangs("confirm")))])],1)],1)],1):a._e()],1)},s=[]},"4a49":function(a,t,i){a.exports=i.p+"static/img/error_img.3ec59f96.png"},"725f":function(a,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={setStatusBarColor:function(a){},checkNetWorkStatus:function(){},getOS:function(){var a=uni.getSystemInfoSync().platform;return a}},n=e;t.default=n},7780:function(a,t,i){"use strict";var e=i("9c6a"),n=i.n(e);n.a},"9c6a":function(a,t,i){var e=i("a9dd");"string"===typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);var n=i("4f06").default;n("88c08016",e,!0,{sourceMap:!1,shadowMode:!1})},a9dd:function(a,t,i){var e=i("24fb"),n=i("1de5"),s=i("0050");t=e(!1);var o=n(s);t.push([a.i,".coin_pool_class[data-v-c8a8a5a4]{height:100%;background:url("+o+");background-size:100% %?1334?%;padding-bottom:%?130?%;overflow:auto}.coin_main[data-v-c8a8a5a4]{padding:%?40?%}.coin_main .title[data-v-c8a8a5a4]{font-size:%?50?%;color:#fff;font-weight:700;margin-bottom:%?40?%;display:block}.coin_main .section[data-v-c8a8a5a4]{display:-webkit-box;display:-webkit-flex;display:flex}.coin_main .section .labels[data-v-c8a8a5a4]{width:50%;box-sizing:border-box;padding-left:%?100?%;position:relative}.coin_main .section .labels .img[data-v-c8a8a5a4]{width:%?80?%;height:%?80?%;position:absolute;left:0}.coin_main .section .labels .get[data-v-c8a8a5a4]{color:#719af9;font-size:%?24?%}.coin_main .section .labels .currency[data-v-c8a8a5a4]{font-size:%?40?%;color:#fff;font-weight:700}.coin_main .section .labels.right[data-v-c8a8a5a4]{text-align:right;padding-left:0}.coin_main .section .labels .value[data-v-c8a8a5a4]{text-align:right;font-size:%?32?%;font-weight:700;color:#ffc600;margin-top:%?10?%}.coin_main .buy_info[data-v-c8a8a5a4]{width:100%;margin:0 auto;margin-top:%?95?%;position:relative;height:%?28?%;background-color:hsla(0,0%,100%,.15);padding-top:%?140?%}.coin_main .buy_info .card[data-v-c8a8a5a4]{width:90%;height:%?150?%;padding:%?30?% %?30?%;position:absolute;left:50%;margin-left:-45%;top:%?-75?%;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex}.coin_main .buy_info .card .labels[data-v-c8a8a5a4]{width:49%;text-align:center}.coin_main .buy_info .card .labels .value[data-v-c8a8a5a4],\n.coin_main .buy_info .card .labels .name[data-v-c8a8a5a4]{display:block}.coin_main .buy_info .card .labels .value[data-v-c8a8a5a4]{color:#90a2b0;font-size:%?26?%}.coin_main .buy_info .card .labels .name[data-v-c8a8a5a4]{font-size:%?34?%;color:#1f3f59;font-weight:700}.coin_main .buy_info .card .labels.line[data-v-c8a8a5a4]{height:%?40?%;background:#e7eaed;width:1px;margin-top:%?30?%}.coin_main .coin_labels[data-v-c8a8a5a4]{width:100%;margin-top:%?20?%;position:relative;padding:%?20?%;background-color:hsla(0,0%,100%,.15)}.coin_main .coin_labels.intro[data-v-c8a8a5a4]{padding:0}.coin_main .coin_labels[data-v-c8a8a5a4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.coin_main .coin_labels .box[data-v-c8a8a5a4]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center}.coin_main .coin_labels .box .name[data-v-c8a8a5a4]{color:#bed2ff;margin-bottom:%?20?%}.coin_main .coin_labels .box .value[data-v-c8a8a5a4]{height:%?60?%;font-size:%?34?%;color:#fff;font-weight:700}.coin_main .coin_labels.award .value[data-v-c8a8a5a4]{color:#ffc600;font-weight:700;font-size:%?30?%}.coin_main .coin_labels .titles[data-v-c8a8a5a4]{font-size:%?30?%;color:#fff;width:100%;padding:%?20?%;position:relative}.coin_main .coin_labels .titles .down_arrow[data-v-c8a8a5a4]{width:%?30?%;height:%?30?%;position:absolute;right:%?20?%;top:%?20?%}.coin_main .coin_labels .inputs[data-v-c8a8a5a4]{background:#fff;width:100%;margin-top:%?20?%;padding:%?20?%;position:relative;padding-right:%?160?%}.coin_main .coin_labels .inputs .usdt[data-v-c8a8a5a4]{position:absolute;right:%?100?%;top:%?25?%;font-size:%?26?%}.coin_main .coin_labels .inputs .all[data-v-c8a8a5a4]{position:absolute;right:%?15?%;top:%?25?%;font-size:%?26?%;color:#007aff}.bottom[data-v-c8a8a5a4]{position:fixed;bottom:0;left:0;z-index:1999999;background:#fff;width:100%;height:%?130?%;padding:%?20?%}.bottom .btn[data-v-c8a8a5a4]{background:#2351bd;width:100%;height:%?90?%;text-align:center;border-radius:%?10?%;line-height:%?90?%;font-size:%?34?%;font-weight:700;background:#2351bd;margin:0 auto;color:#fff}.input_bar[data-v-c8a8a5a4]{font-size:%?28?%}.desc[data-v-c8a8a5a4]{width:100%;display:block;background:hsla(0,0%,100%,.1);padding:%?20?%;font-size:%?30?%;color:#fff}.intro[data-v-c8a8a5a4]{padding:0}",""]),a.exports=t},ad2f:function(a,t,i){"use strict";i.r(t);var e=i("3169"),n=i("cd24");for(var s in n)"default"!==s&&function(a){i.d(t,a,(function(){return n[a]}))}(s);i("7780");var o,c=i("f0c5"),r=Object(c["a"])(n["default"],e["b"],e["c"],!1,null,"c8a8a5a4",null,!1,e["a"],o);t["default"]=r.exports},c5e2:function(a,t,i){"use strict";var e=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=e(i("5530")),s=i("2f62"),o=e(i("873a")),c=e(i("725f")),r=e(i("88f3")),l=e(i("78d5")),u={data:function(){return{currentOS:""}},methods:{navigateTo:function(a,t){var i="undefined"===typeof t||"{}"===JSON.stringify(t)?"":"?".concat(r.default.convertObj(t));uni.navigateTo({url:a+i})},redirectTo:function(a){uni.redirectTo({url:a})},reLaunch:function(a){uni.reLaunch({url:a})},switchTab:function(a){uni.switchTab({url:a})},back:function(){var a=c.default.getOS();return"ios"===a||"android"===a?uni.navigateBack():history.back(-1)},setTitle:function(a){uni.setNavigationBarTitle({title:"undefined"===typeof a||""===a?o.default.appName:a})},moveHandle:function(){},getCurrentPageData:function(a){var t=getCurrentPages(),i=t[t.length-1];switch(a){case"opt":return i.options;case"route":return i.route;default:return i}},backToPage:function(a){c.default.getOS();this.navigateTo(a)},backTips:function(a){if(l.default.checkCode(a))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(a.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,n.default)({createOSClass:function(){return"h5"}},(0,s.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=c.default.getOS()}},d=u;t.default=d},cd24:function(a,t,i){"use strict";i.r(t);var e=i("038b"),n=i.n(e);for(var s in e)"default"!==s&&function(a){i.d(t,a,(function(){return e[a]}))}(s);t["default"]=n.a}}]);