(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-coin_pool_rules-index"],{"0a1b":function(t,i,n){"use strict";var e,a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"coin_pool_rules_class"},[n("v-uni-view",{staticClass:"coin_pool_intro"},[n("v-uni-view",{staticClass:"p"},[t._v(t._s(t.getLangs("coinPool")))]),n("v-uni-view",{staticClass:"p p1"},[t._v(t._s(t.getLangs("coinp1")))]),n("v-uni-view",{staticClass:"p p2"},[t._v(t._s(t.getLangs("coinp2")))]),n("v-uni-view",{staticClass:"p p3"},[t._v(t._s(t.getLangs("coinp3")))]),n("v-uni-view",{staticClass:"p p4"},[t._v(t._s(t.getLangs("coinp4")))]),n("v-uni-view",{staticClass:"section"},[n("v-uni-view",{staticClass:"title"},[t._v(t._s(t.getLangs("productHighlights")))]),n("v-uni-view",{staticClass:"desc"},[n("v-uni-view",{staticClass:"box"},[n("v-uni-view",{staticClass:"p p5"},[t._v(t._s(t.getLangs("coinp5")))]),n("v-uni-view",{staticClass:"p p6"},[t._v(t._s(t.getLangs("coinp6")))])],1),n("v-uni-view",{staticClass:"box line"}),n("v-uni-view",{staticClass:"box"},[n("v-uni-view",{staticClass:"p p7"},[t._v(t._s(t.getLangs("coinp7")))]),n("v-uni-view",{staticClass:"p p8"},[t._v(t._s(t.getLangs("coinp8")))])],1)],1),n("v-uni-view",{staticClass:"desc fd"},[n("v-uni-view",{staticClass:"box"},[n("v-uni-image",{staticClass:"icon",attrs:{src:"/static/images/coin1.png"}}),n("v-uni-view",{staticClass:"p p9"},[t._v(t._s(t.getLangs("coinp9")))]),n("v-uni-view",{staticClass:"p p10"},[t._v(t._s(t.getLangs("coinp10")))])],1),n("v-uni-view",{staticClass:"box"},[n("v-uni-image",{staticClass:"icon",attrs:{src:"/static/images/coin2.png"}}),n("v-uni-view",{staticClass:"p p11"},[t._v(t._s(t.getLangs("coinp11")))]),n("v-uni-view",{staticClass:"p p12"},[t._v(t._s(t.getLangs("coinp12")))])],1),n("v-uni-view",{staticClass:"box"},[n("v-uni-image",{staticClass:"icon",attrs:{src:"/static/images/coin3.png"}}),n("v-uni-view",{staticClass:"p p13"},[t._v(t._s(t.getLangs("coinp13")))]),n("v-uni-view",{staticClass:"p p14"},[t._v(t._s(t.getLangs("coinp14")))])],1)],1)],1),n("v-uni-view",{staticClass:"section"},[n("v-uni-view",{staticClass:"title"},[t._v(t._s(t.getLangs("coinp15")))]),n("v-uni-view",{staticClass:"article"},[n("v-uni-view",{staticClass:"h1"},[t._v(t._s(t.getLangs("coinp16")))]),n("v-uni-rich-text",{attrs:{nodes:t.getLangs("coinp17")}})],1),n("v-uni-view",{staticClass:"article"},[n("v-uni-view",{staticClass:"h1"},[t._v(t._s(t.getLangs("coinp18")))]),n("v-uni-rich-text",{attrs:{nodes:t.getLangs("coinp19")}})],1)],1)],1),n("v-uni-view",{staticClass:"bottom"},[n("v-uni-view",{staticClass:"btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navigateTo("/pages/coin_pool/index")}}},[t._v(t._s(t.getLangs("participate")))])],1)],1)},s=[];n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return s})),n.d(i,"a",(function(){return e}))},"0ea2":function(t,i,n){t.exports=n.p+"static/img/coin_pool_rules_bg.6ab4ff30.png"},1593:function(t,i,n){"use strict";var e=n("ee27");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=e(n("f3f3")),s=n("2f62"),o=e(n("dd72")),c=e(n("17f5")),u=e(n("5471")),r=e(n("2901")),d={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,i){var n="undefined"===typeof i||"{}"===JSON.stringify(i)?"":"?".concat(u.default.convertObj(i));uni.navigateTo({url:t+n})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=c.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?o.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var i=getCurrentPages(),n=i[i.length-1];switch(t){case"opt":return n.options;case"route":return n.route;default:return n}},backToPage:function(t){c.default.getOS();this.navigateTo(t)},backTips:function(t){if(r.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,a.default)({createOSClass:function(){return"h5"}},(0,s.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=c.default.getOS()}},f=d;i.default=f},"17f5":function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},a=e;i.default=a},"1de5":function(t,i,n){"use strict";t.exports=function(t,i){return i||(i={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),i.hash&&(t+=i.hash),/["'() \t\n]/.test(t)||i.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},2520:function(t,i,n){"use strict";n.r(i);var e=n("a090"),a=n.n(e);for(var s in e)"default"!==s&&function(t){n.d(i,t,(function(){return e[t]}))}(s);i["default"]=a.a},"4fd1":function(t,i,n){"use strict";n.r(i);var e=n("0a1b"),a=n("2520");for(var s in a)"default"!==s&&function(t){n.d(i,t,(function(){return a[t]}))}(s);n("adf7");var o,c=n("f0c5"),u=Object(c["a"])(a["default"],e["b"],e["c"],!1,null,"4f12792d",null,!1,e["a"],o);i["default"]=u.exports},"67b0":function(t,i,n){var e=n("cb40");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("4f06").default;a("6113af32",e,!0,{sourceMap:!1,shadowMode:!1})},a090:function(t,i,n){"use strict";var e=n("ee27");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=e(n("1593")),s=e(n("bceb")),o={name:"CoinPoolRules",mixins:[a.default,s.default],onShow:function(){this.setTitle(this.getLangs("coinPool"))}};i.default=o},adf7:function(t,i,n){"use strict";var e=n("67b0"),a=n.n(e);a.a},cb40:function(t,i,n){var e=n("24fb"),a=n("1de5"),s=n("0ea2");i=e(!1);var o=a(s);i.push([t.i,".coin_pool_rules_class[data-v-4f12792d]{height:100%;background:url("+o+");background-size:100% 100%;padding-top:%?40?%;padding-bottom:%?130?%}.coin_pool_intro[data-v-4f12792d]{height:100%;padding:0 %?40?%;overflow:auto}.coin_pool_intro .p[data-v-4f12792d]{text-align:center;display:block;font-size:%?50?%;color:#fff;font-weight:700}.coin_pool_intro .p1[data-v-4f12792d]{font-size:%?64?%}.coin_pool_intro .p2[data-v-4f12792d],\n.coin_pool_intro .p3[data-v-4f12792d],\n.coin_pool_intro .p4[data-v-4f12792d]{font-size:%?30?%;font-weight:400}.coin_pool_intro .p4[data-v-4f12792d]{margin-bottom:%?40?%}.section[data-v-4f12792d]{padding:%?20?%;background:#fff;border-radius:%?20?%;margin-bottom:%?20?%}.section .title[data-v-4f12792d]{text-align:center;font-size:%?36?%;font-weight:700;color:#1d8bee;margin-bottom:%?20?%}.section .desc[data-v-4f12792d]{display:-webkit-box;display:-webkit-flex;display:flex}.section .desc .box[data-v-4f12792d]{width:49%}.section .desc .box.line[data-v-4f12792d]{width:1px;height:%?40?%;background:#e7eaed;margin-top:%?20?%}.section .desc .box .p[data-v-4f12792d]{display:block;color:#1f3f59;font-size:%?32?%}.section .desc .box .p6[data-v-4f12792d],\n.section .desc .box .p8[data-v-4f12792d]{color:#90a2b0;font-size:%?22?%;font-weight:400;margin-top:%?10?%}.section .desc.fd[data-v-4f12792d]{margin-top:%?40?%}.section .desc.fd .box[data-v-4f12792d]{width:33%;text-align:center}.section .desc.fd .box .icon[data-v-4f12792d]{width:%?60?%;height:%?60?%}.section .desc.fd .box .p[data-v-4f12792d]{font-size:%?22?%;color:#90a2b0;font-weight:400}.bottom[data-v-4f12792d]{position:fixed;bottom:0;left:0;z-index:1999999;width:100%;height:%?130?%;padding:%?20?%}.bottom .btn[data-v-4f12792d]{background:#2351bd;width:90%;height:%?90?%;text-align:center;border-radius:%?10?%;line-height:%?90?%;font-size:%?34?%;font-weight:700;background:#1d8bee;margin:0 auto;color:#fff}.article .h1[data-v-4f12792d]{font-size:%?32?%;color:#1f3f59;font-weight:700;margin-bottom:%?20?%;margin-top:%?20?%}.article[data-v-4f12792d]{font-size:%?26?%;color:#697a87}",""]),t.exports=i}}]);