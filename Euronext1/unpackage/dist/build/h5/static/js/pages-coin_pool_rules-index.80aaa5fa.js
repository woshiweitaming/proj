(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-coin_pool_rules-index"],{1117:function(t,i,e){var n=e("39d3");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("94b0d29c",n,!0,{sourceMap:!1,shadowMode:!1})},"1b8d":function(t,i,e){"use strict";e.r(i);var n=e("89bf"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},"1de5":function(t,i,e){"use strict";t.exports=function(t,i){return i||(i={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),i.hash&&(t+=i.hash),/["'() \t\n]/.test(t)||i.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"2b04":function(t,i,e){"use strict";var n=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("5530")),s=e("2f62"),o=n(e("6c58")),c=n(e("4a06")),r=n(e("4844")),u=n(e("121c")),d={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,i){var e="undefined"===typeof i||"{}"===JSON.stringify(i)?"":"?".concat(r.default.convertObj(i));uni.navigateTo({url:t+e})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=c.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?o.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var i=getCurrentPages(),e=i[i.length-1];switch(t){case"opt":return e.options;case"route":return e.route;default:return e}},backToPage:function(t){c.default.getOS();this.navigateTo(t)},backTips:function(t){if(u.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"},UTCDateToLocalDate:function(t){var i=new Date,e=i.getTimezoneOffset(),n=e/60,a=new Date(t);return a.setHours(a.getHours()-n),a}},computed:(0,a.default)({createOSClass:function(){return"h5"}},(0,s.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=c.default.getOS()}},v=d;i.default=v},3501:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"coin_pool_rules_class"},[e("v-uni-view",{staticClass:"coin_pool_intro"},[e("v-uni-view",{staticClass:"p"},[t._v(t._s(t.getLangs("coinPool")))]),e("v-uni-view",{staticClass:"p p1"},[t._v(t._s(t.getLangs("coinp1")))]),e("v-uni-view",{staticClass:"p p2"},[t._v(t._s(t.getLangs("coinp2")))]),e("v-uni-view",{staticClass:"p p3"},[t._v(t._s(t.getLangs("coinp3")))]),e("v-uni-view",{staticClass:"p p4"},[t._v(t._s(t.getLangs("coinp4")))]),e("v-uni-view",{staticClass:"section"},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.getLangs("productHighlights")))]),e("v-uni-view",{staticClass:"desc"},[e("v-uni-view",{staticClass:"box"},[e("v-uni-view",{staticClass:"p p5"},[t._v(t._s(t.getLangs("coinp5")))]),e("v-uni-view",{staticClass:"p p6"},[t._v(t._s(t.getLangs("coinp6")))])],1),e("v-uni-view",{staticClass:"box line"}),e("v-uni-view",{staticClass:"box"},[e("v-uni-view",{staticClass:"p p7"},[t._v(t._s(t.getLangs("coinp7")))]),e("v-uni-view",{staticClass:"p p8"},[t._v(t._s(t.getLangs("coinp8")))])],1)],1),e("v-uni-view",{staticClass:"desc fd"},[e("v-uni-view",{staticClass:"box"},[e("v-uni-image",{staticClass:"icon",attrs:{src:"/static/images/coin1.png"}}),e("v-uni-view",{staticClass:"p p9"},[t._v(t._s(t.getLangs("coinp9")))]),e("v-uni-view",{staticClass:"p p10"},[t._v(t._s(t.getLangs("coinp10")))])],1),e("v-uni-view",{staticClass:"box"},[e("v-uni-image",{staticClass:"icon",attrs:{src:"/static/images/coin2.png"}}),e("v-uni-view",{staticClass:"p p11"},[t._v(t._s(t.getLangs("coinp11")))]),e("v-uni-view",{staticClass:"p p12"},[t._v(t._s(t.getLangs("coinp12")))])],1),e("v-uni-view",{staticClass:"box"},[e("v-uni-image",{staticClass:"icon",attrs:{src:"/static/images/coin3.png"}}),e("v-uni-view",{staticClass:"p p13"},[t._v(t._s(t.getLangs("coinp13")))]),e("v-uni-view",{staticClass:"p p14"},[t._v(t._s(t.getLangs("coinp14")))])],1)],1)],1),e("v-uni-view",{staticClass:"section"},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.getLangs("coinp15")))]),e("v-uni-view",{staticClass:"article"},[e("v-uni-view",{staticClass:"h1"},[t._v(t._s(t.getLangs("coinp16")))]),e("v-uni-rich-text",{attrs:{nodes:t.getLangs("coinp17")}})],1),e("v-uni-view",{staticClass:"article"},[e("v-uni-view",{staticClass:"h1"},[t._v(t._s(t.getLangs("coinp18")))]),e("v-uni-rich-text",{attrs:{nodes:t.getLangs("coinp19")}})],1)],1)],1),e("v-uni-view",{staticClass:"bottom"},[e("v-uni-view",{staticClass:"btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navigateTo("/pages/coin_pool/index")}}},[t._v(t._s(t.getLangs("participate")))])],1)],1)},s=[]},"39d3":function(t,i,e){var n=e("24fb"),a=e("1de5"),s=e("e895");i=n(!1);var o=a(s);i.push([t.i,".coin_pool_rules_class[data-v-4f12792d]{height:100%;background:url("+o+");background-size:100% 100%;padding-top:%?40?%;padding-bottom:%?130?%}.coin_pool_intro[data-v-4f12792d]{height:100%;padding:0 %?40?%;overflow:auto}.coin_pool_intro .p[data-v-4f12792d]{text-align:center;display:block;font-size:%?50?%;color:#fff;font-weight:700}.coin_pool_intro .p1[data-v-4f12792d]{font-size:%?64?%}.coin_pool_intro .p2[data-v-4f12792d],\n.coin_pool_intro .p3[data-v-4f12792d],\n.coin_pool_intro .p4[data-v-4f12792d]{font-size:%?30?%;font-weight:400}.coin_pool_intro .p4[data-v-4f12792d]{margin-bottom:%?40?%}.section[data-v-4f12792d]{padding:%?20?%;background:#fff;-webkit-border-radius:%?20?%;border-radius:%?20?%;margin-bottom:%?20?%}.section .title[data-v-4f12792d]{text-align:center;font-size:%?36?%;font-weight:700;color:#1d8bee;margin-bottom:%?20?%}.section .desc[data-v-4f12792d]{display:-webkit-box;display:-webkit-flex;display:flex}.section .desc .box[data-v-4f12792d]{width:49%}.section .desc .box.line[data-v-4f12792d]{width:1px;height:%?40?%;background:#e7eaed;margin-top:%?20?%}.section .desc .box .p[data-v-4f12792d]{display:block;color:#1f3f59;font-size:%?32?%}.section .desc .box .p6[data-v-4f12792d],\n.section .desc .box .p8[data-v-4f12792d]{color:#90a2b0;font-size:%?22?%;font-weight:400;margin-top:%?10?%}.section .desc.fd[data-v-4f12792d]{margin-top:%?40?%}.section .desc.fd .box[data-v-4f12792d]{width:33%;text-align:center}.section .desc.fd .box .icon[data-v-4f12792d]{width:%?60?%;height:%?60?%}.section .desc.fd .box .p[data-v-4f12792d]{font-size:%?22?%;color:#90a2b0;font-weight:400}.bottom[data-v-4f12792d]{position:fixed;bottom:0;left:0;z-index:1999999;width:100%;height:%?130?%;padding:%?20?%}.bottom .btn[data-v-4f12792d]{background:#2351bd;width:90%;height:%?90?%;text-align:center;-webkit-border-radius:%?10?%;border-radius:%?10?%;line-height:%?90?%;font-size:%?34?%;font-weight:700;background:#1d8bee;margin:0 auto;color:#fff}.article .h1[data-v-4f12792d]{font-size:%?32?%;color:#1f3f59;font-weight:700;margin-bottom:%?20?%;margin-top:%?20?%}.article[data-v-4f12792d]{font-size:%?26?%;color:#697a87}",""]),t.exports=i},"4a06":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},a=n;i.default=a},5217:function(t,i,e){"use strict";e.r(i);var n=e("3501"),a=e("1b8d");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("e164");var o,c=e("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"4f12792d",null,!1,n["a"],o);i["default"]=r.exports},"89bf":function(t,i,e){"use strict";var n=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("2b04")),s=n(e("6a9c")),o={name:"CoinPoolRules",mixins:[a.default,s.default],onShow:function(){this.setTitle(this.getLangs("coinPool"))}};i.default=o},e164:function(t,i,e){"use strict";var n=e("1117"),a=e.n(n);a.a},e895:function(t,i,e){t.exports=e.p+"static/img/coin_pool_rules_bg.6ab4ff30.png"}}]);