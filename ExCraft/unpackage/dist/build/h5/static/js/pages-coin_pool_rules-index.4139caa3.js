(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-coin_pool_rules-index"],{"1ad3":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},e=n;i.default=e},"343f":function(t,i,a){var n=a("a16c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=a("4f06").default;e("6e369129",n,!0,{sourceMap:!1,shadowMode:!1})},"3e67":function(t,i,a){"use strict";var n=a("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=n(a("f9e1")),s=n(a("86eb")),o={name:"CoinPoolRules",mixins:[e.default,s.default],onShow:function(){this.setTitle(this.getLangs("coinPool"))}};i.default=o},4828:function(t,i,a){"use strict";a.r(i);var n=a("3e67"),e=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(i,t,(function(){return n[t]}))}(s);i["default"]=e.a},"7c3b":function(t,i,a){"use strict";a.r(i);var n=a("d122"),e=a("4828");for(var s in e)"default"!==s&&function(t){a.d(i,t,(function(){return e[t]}))}(s);a("9fc5");var o,c=a("f0c5"),u=Object(c["a"])(e["default"],n["b"],n["c"],!1,null,"7ba51430",null,!1,n["a"],o);i["default"]=u.exports},"9fc5":function(t,i,a){"use strict";var n=a("343f"),e=a.n(n);e.a},a16c:function(t,i,a){var n=a("24fb");i=n(!1),i.push([t.i,".coin_pool_rules_class[data-v-7ba51430]{height:100%;\n\t/* background: url(../../static/images/coin_pool_rules_bg.png); */background:#323a5e;background-size:100% 100%;padding-top:%?40?%;padding-bottom:%?130?%}.coin_pool_intro[data-v-7ba51430]{height:100%;padding:0 %?40?%;overflow:auto}.coin_pool_intro .p[data-v-7ba51430]{text-align:center;display:block;font-size:%?50?%;color:#fff;font-weight:700}.coin_pool_intro .p1[data-v-7ba51430]{font-size:%?64?%}.coin_pool_intro .p2[data-v-7ba51430],\n.coin_pool_intro .p3[data-v-7ba51430],\n.coin_pool_intro .p4[data-v-7ba51430]{font-size:%?30?%;font-weight:400}.coin_pool_intro .p4[data-v-7ba51430]{margin-bottom:%?40?%}.section[data-v-7ba51430]{padding:%?20?%;background:#fff;-webkit-border-radius:%?20?%;border-radius:%?20?%;margin-bottom:%?20?%}.section .title[data-v-7ba51430]{text-align:center;font-size:%?36?%;font-weight:700;color:#1d8bee;margin-bottom:%?20?%}.section .desc[data-v-7ba51430]{display:-webkit-box;display:-webkit-flex;display:flex}.section .desc .box[data-v-7ba51430]{width:49%}.section .desc .box.line[data-v-7ba51430]{width:1px;height:%?40?%;background:#e7eaed;margin-top:%?20?%}.section .desc .box .p[data-v-7ba51430]{display:block;color:#1f3f59;font-size:%?32?%}.section .desc .box .p6[data-v-7ba51430],\n.section .desc .box .p8[data-v-7ba51430]{color:#90a2b0;font-size:%?22?%;font-weight:400;margin-top:%?10?%}.section .desc.fd[data-v-7ba51430]{margin-top:%?40?%}.section .desc.fd .box[data-v-7ba51430]{width:33%;text-align:center}.section .desc.fd .box .icon[data-v-7ba51430]{width:%?60?%;height:%?60?%}.section .desc.fd .box .p[data-v-7ba51430]{font-size:%?22?%;color:#90a2b0;font-weight:400}.bottom[data-v-7ba51430]{position:fixed;bottom:0;left:0;z-index:1999999;width:100%;height:%?130?%;padding:%?20?%}.bottom .btn[data-v-7ba51430]{background:#2351bd;width:90%;height:%?90?%;text-align:center;-webkit-border-radius:%?10?%;border-radius:%?10?%;line-height:%?90?%;font-size:%?34?%;font-weight:700;background:#1d8bee;margin:0 auto;color:#fff}.article .h1[data-v-7ba51430]{font-size:%?32?%;color:#1f3f59;font-weight:700;margin-bottom:%?20?%;margin-top:%?20?%}.article[data-v-7ba51430]{font-size:%?26?%;color:#697a87}",""]),t.exports=i},d122:function(t,i,a){"use strict";var n;a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return s})),a.d(i,"a",(function(){return n}));var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"coin_pool_rules_class"},[a("v-uni-view",{staticClass:"coin_pool_intro"},[a("v-uni-view",{staticClass:"p"},[t._v(t._s(t.getLangs("coinPool")))]),a("v-uni-view",{staticClass:"p p1"},[t._v(t._s(t.getLangs("coinp1")))]),a("v-uni-view",{staticClass:"p p2"},[t._v(t._s(t.getLangs("coinp2")))]),a("v-uni-view",{staticClass:"p p3"},[t._v(t._s(t.getLangs("coinp3")))]),a("v-uni-view",{staticClass:"p p4"},[t._v(t._s(t.getLangs("coinp4")))]),a("v-uni-view",{staticClass:"section"},[a("v-uni-view",{staticClass:"title"},[t._v(t._s(t.getLangs("productHighlights")))]),a("v-uni-view",{staticClass:"desc"},[a("v-uni-view",{staticClass:"box"},[a("v-uni-view",{staticClass:"p p5"},[t._v(t._s(t.getLangs("coinp5")))]),a("v-uni-view",{staticClass:"p p6"},[t._v(t._s(t.getLangs("coinp6")))])],1),a("v-uni-view",{staticClass:"box line"}),a("v-uni-view",{staticClass:"box"},[a("v-uni-view",{staticClass:"p p7"},[t._v(t._s(t.getLangs("coinp7")))]),a("v-uni-view",{staticClass:"p p8"},[t._v(t._s(t.getLangs("coinp8")))])],1)],1),a("v-uni-view",{staticClass:"desc fd"},[a("v-uni-view",{staticClass:"box"},[a("v-uni-image",{staticClass:"icon",attrs:{src:"/static/images/coin1.png"}}),a("v-uni-view",{staticClass:"p p9"},[t._v(t._s(t.getLangs("coinp9")))]),a("v-uni-view",{staticClass:"p p10"},[t._v(t._s(t.getLangs("coinp10")))])],1),a("v-uni-view",{staticClass:"box"},[a("v-uni-image",{staticClass:"icon",attrs:{src:"/static/images/coin2.png"}}),a("v-uni-view",{staticClass:"p p11"},[t._v(t._s(t.getLangs("coinp11")))]),a("v-uni-view",{staticClass:"p p12"},[t._v(t._s(t.getLangs("coinp12")))])],1),a("v-uni-view",{staticClass:"box"},[a("v-uni-image",{staticClass:"icon",attrs:{src:"/static/images/coin3.png"}}),a("v-uni-view",{staticClass:"p p13"},[t._v(t._s(t.getLangs("coinp13")))]),a("v-uni-view",{staticClass:"p p14"},[t._v(t._s(t.getLangs("coinp14")))])],1)],1)],1),a("v-uni-view",{staticClass:"section"},[a("v-uni-view",{staticClass:"title"},[t._v(t._s(t.getLangs("coinp15")))]),a("v-uni-view",{staticClass:"article"},[a("v-uni-view",{staticClass:"h1"},[t._v(t._s(t.getLangs("coinp16")))]),a("v-uni-rich-text",{attrs:{nodes:t.getLangs("coinp17")}})],1),a("v-uni-view",{staticClass:"article"},[a("v-uni-view",{staticClass:"h1"},[t._v(t._s(t.getLangs("coinp18")))]),a("v-uni-rich-text",{attrs:{nodes:t.getLangs("coinp19")}})],1)],1)],1),a("v-uni-view",{staticClass:"bottom"},[a("v-uni-view",{staticClass:"btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navigateTo("/pages/coin_pool/index")}}},[t._v(t._s(t.getLangs("participate")))])],1)],1)},s=[]},f9e1:function(t,i,a){"use strict";var n=a("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=n(a("5530")),s=a("2f62"),o=n(a("7b9c")),c=n(a("1ad3")),u=n(a("b8c8")),r=n(a("4c57")),v={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,i){var a="undefined"===typeof i||"{}"===JSON.stringify(i)?"":"?".concat(u.default.convertObj(i));uni.navigateTo({url:t+a})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=c.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?o.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var i=getCurrentPages(),a=i[i.length-1];switch(t){case"opt":return a.options;case"route":return a.route;default:return a}},backToPage:function(t){c.default.getOS();this.navigateTo(t)},backTips:function(t){if(r.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,e.default)({createOSClass:function(){return"h5"}},(0,s.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=c.default.getOS()}},d=v;i.default=d}}]);