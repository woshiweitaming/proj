(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-coin_pool_record_detail-index"],{"028e":function(t,a,e){var i=e("1af4");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=e("4f06").default;s("f4568c3c",i,!0,{sourceMap:!1,shadowMode:!1})},"06aa":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return s})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){return i}));var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"coin_pool_record_class"},[e("v-uni-view",{staticClass:"coin_pool_hd"},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.getLangs("orderDetails")))]),e("v-uni-view",{staticClass:"card"},[e("v-uni-view",{staticClass:"hd"},[e("v-uni-image",{staticClass:"img",attrs:{src:t.data.logo}}),e("v-uni-text",{staticClass:"name"},[t._v(t._s(t.getLangs("escrowAmount")))]),e("v-uni-text",{staticClass:"amount"},[t._v(t._s(t.data.amount))])],1),e("v-uni-view",{staticClass:"fd"},[e("v-uni-view",{staticClass:"items"},[e("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("estimatedEarnings"))+"(USDT)")]),e("v-uni-view",{staticClass:"value"},[t._v(t._s(t.data.estimateProfit))])],1),e("v-uni-view",{staticClass:"items"},[e("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("dailyYield"))+"(%)")]),e("v-uni-view",{staticClass:"value"},[t._v(t._s(t.data.day_rate))])],1),e("v-uni-view",{staticClass:"items"},[e("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("hostingTime"))+"("+t._s(t.getLangs("day"))+")")]),e("v-uni-view",{staticClass:"value"},[t._v(t._s(t.data.period))])],1)],1)],1)],1),e("v-uni-view",{staticClass:"list"},[e("v-uni-view",{staticClass:"labels"},[e("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("riseTime")))]),e("v-uni-view",{staticClass:"value"},[t._v(t._s(t.data.beginTime))])],1),e("v-uni-view",{staticClass:"labels"},[e("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("expirationTime")))]),e("v-uni-view",{staticClass:"value"},[t._v(t._s(t.data.expireTime))])],1),e("v-uni-view",{staticClass:"labels"},[e("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("profitted"))+"(USDT)")]),e("v-uni-view",{staticClass:"value"},[t._v(t._s(t.data.profit))])],1),e("v-uni-view",{staticClass:"labels"},[e("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("remainingDays"))+"("+t._s(t.getLangs("day"))+")")]),e("v-uni-view",{staticClass:"value"},[t._v(t._s(t.data.expireDay))])],1),e("v-uni-view",{staticClass:"labels"},[e("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("lp"))+"(USDT)")]),e("v-uni-view",{staticClass:"value"},[t._v(t._s(t.data.penaltyMoney))])],1),e("v-uni-view",{staticClass:"labels"},[e("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("backMoney")))]),e("v-uni-view",{staticClass:"value"},[t._v(t._s(t.data.backMoney))])],1)],1),e("v-uni-view",{staticClass:"list"},[e("v-uni-view",{staticClass:"labels"},[e("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("orderNumber")))]),e("v-uni-view",{staticClass:"value"},[t._v(t._s(t.data.orderNo))])],1),e("v-uni-view",{staticClass:"labels"},[e("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("orderTime")))]),e("v-uni-view",{staticClass:"value"},[t._v(t._s(t.data.createTime))])],1)],1),0==t.status?e("v-uni-view",{staticClass:"bottom"},[e("v-uni-view",{staticClass:"button",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.redeemConfirm.apply(void 0,arguments)}}},[t._v(t._s(t.getLangs("wantRedeem")))])],1):t._e()],1)},n=[]},"1af4":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".coin_pool_record_class[data-v-35280b4f]{background:#f9f9f9;height:100%}.coin_pool_hd[data-v-35280b4f]{background:#2351bd;height:%?400?%;padding:%?20?%}.title[data-v-35280b4f]{font-size:%?50?%;display:block;line-height:%?100?%;color:#fff}.card[data-v-35280b4f]{border-radius:%?20?% %?20?% 0 0;background:#fff;width:100%;height:%?280?%;position:absolute;left:0;top:%?140?%;padding:%?20?%}.card .hd[data-v-35280b4f]{position:relative;padding-left:%?100?%}.card .hd .img[data-v-35280b4f]{width:%?80?%;height:%?80?%;position:absolute;left:0}.card .hd .name[data-v-35280b4f],\n.card .hd .amount[data-v-35280b4f]{display:block}.card .hd .name[data-v-35280b4f]{font-size:%?24?%;color:#1f3f59}.card .hd .amount[data-v-35280b4f]{font-size:%?40?%;color:#1f3f59;font-weight:700}.card .fd[data-v-35280b4f]{display:-webkit-box;display:-webkit-flex;display:flex;padding-top:%?40?%}.card .fd .items[data-v-35280b4f]{width:33.3333%;text-align:center}.card .fd .items .name[data-v-35280b4f]{color:#90a2b0;font-size:%?26?%;display:block;margin-bottom:%?10?%}.card .fd .items .value[data-v-35280b4f]{color:#ff665e;font-size:%?26?%}.list[data-v-35280b4f]{margin-top:%?40?%;margin-bottom:%?20?%}.list .labels[data-v-35280b4f]{background:#fff;padding:%?20?%;position:relative;text-align:right;height:%?80?%}.list .labels .name[data-v-35280b4f]{color:#8c9fad;position:absolute;left:10px}.list .labels .value[data-v-35280b4f]{color:#14181f;font-size:%?28?%;font-weight:700}.bottom[data-v-35280b4f]{width:100%;height:%?120?%;position:fixed;bottom:0;left:0;background:#f9f9f9;display:-webkit-box;display:-webkit-flex;display:flex}.bottom .btn_labels[data-v-35280b4f]{padding:%?20?%;text-align:center}.bottom .btn_labels[data-v-35280b4f]:first-child{width:40%}.bottom .btn_labels[data-v-35280b4f]:last-child{width:60%}.bottom .button[data-v-35280b4f]{background:#2351bd;line-height:%?80?%;color:#fff;width:90%;display:block;margin:auto;text-align:center}",""]),t.exports=a},"212e":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},s=i;a.default=s},"218e":function(t,a,e){"use strict";e.r(a);var i=e("06aa"),s=e("7223");for(var n in s)"default"!==n&&function(t){e.d(a,t,(function(){return s[t]}))}(n);e("5545");var o,r=e("f0c5"),u=Object(r["a"])(s["default"],i["b"],i["c"],!1,null,"35280b4f",null,!1,i["a"],o);a["default"]=u.exports},5545:function(t,a,e){"use strict";var i=e("028e"),s=e.n(i);s.a},"6caa":function(t,a,e){"use strict";var i=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("96cf");var s=i(e("1da1")),n=i(e("cc16")),o=i(e("cecb")),r=e("e361"),u=i(e("5be9")),l={name:"CoinPoolRecord",mixins:[n.default,o.default],data:function(){return{domain:u.default.domain,orderNo:"",status:"",data:{}}},methods:{getCoinPoolProductOrderHandler:function(){var t=this;return(0,s.default)(regeneratorRuntime.mark((function a(){var e,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e={orderNo:t.orderNo},a.next=3,(0,r.getCoinPoolProductOrder)(e);case 3:i=a.sent,t.data=i.data;case 5:case"end":return a.stop()}}),a)})))()},redeemConfirm:function(){this.navigateTo("/pages/coin_pool_redeem/index",{orderNo:this.orderNo})}},onLoad:function(t){this.orderNo=t.orderNo,this.status=t.status},onShow:function(){this.setTitle(this.getLangs("managedOrder")),this.getCoinPoolProductOrderHandler()}};a.default=l},7223:function(t,a,e){"use strict";e.r(a);var i=e("6caa"),s=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(a,t,(function(){return i[t]}))}(n);a["default"]=s.a},cc16:function(t,a,e){"use strict";var i=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s=i(e("5530")),n=e("2f62"),o=i(e("5be9")),r=i(e("212e")),u=i(e("5f81")),l=i(e("a591")),c={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,a){var e="undefined"===typeof a||"{}"===JSON.stringify(a)?"":"?".concat(u.default.convertObj(a));uni.navigateTo({url:t+e})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=r.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?o.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var a=getCurrentPages(),e=a[a.length-1];switch(t){case"opt":return e.options;case"route":return e.route;default:return e}},backToPage:function(t){r.default.getOS();this.navigateTo(t)},backTips:function(t){if(l.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,s.default)({createOSClass:function(){return"h5"}},(0,n.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=r.default.getOS()}},d=c;a.default=d}}]);