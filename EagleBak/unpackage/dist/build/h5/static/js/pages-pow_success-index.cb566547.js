(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-pow_success-index"],{1593:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530")),c=a("2f62"),o=n(a("dd72")),u=n(a("17f5")),r=n(a("5471")),s=n(a("2901")),f={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,e){var a="undefined"===typeof e||"{}"===JSON.stringify(e)?"":"?".concat(r.default.convertObj(e));uni.navigateTo({url:t+a})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=u.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?o.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var e=getCurrentPages(),a=e[e.length-1];switch(t){case"opt":return a.options;case"route":return a.route;default:return a}},backToPage:function(t){u.default.getOS();this.navigateTo(t)},backTips:function(t){if(s.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,i.default)({createOSClass:function(){return"h5"}},(0,c.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=u.default.getOS()}},d=f;e.default=d},"17f5":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},i=n;e.default=i},"4a79":function(t,e,a){var n=a("aa6a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("3da2d57e",n,!0,{sourceMap:!1,shadowMode:!1})},5651:function(t,e,a){t.exports=a.p+"static/img/success_img.b4e20cc9.png"},"885e":function(t,e,a){"use strict";a.r(e);var n=a("c28f"),i=a("db51");for(var c in i)"default"!==c&&function(t){a.d(e,t,(function(){return i[t]}))}(c);a("ff22");var o,u=a("f0c5"),r=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"4c1a00f9",null,!1,n["a"],o);e["default"]=r.exports},aa6a:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-4c1a00f9]{background:#f9f9f9}.coin_pool_success[data-v-4c1a00f9]{height:100%;background:#fff;padding-top:%?40?%}.coin_pool_class[data-v-4c1a00f9]{text-align:center}.success_icon[data-v-4c1a00f9]{width:%?390?%;height:%?240?%;display:block;padding:%?40?% auto;margin:auto}.title[data-v-4c1a00f9]{font-size:%?40?%;color:#1f3f59;margin-bottom:%?40?%;text-align:center}.desc[data-v-4c1a00f9]{text-align:center;font-size:%?30?%;color:#90a2b0;margin-bottom:%?80?%}.btn1[data-v-4c1a00f9]{max-width:%?380?%;height:%?80?%;line-height:%?80?%;text-align:center;background:#2351bd;border-radius:%?40?%;color:#fff;display:block;margin:auto}.btn2[data-v-4c1a00f9]{text-align:center;display:block;margin-top:%?40?%;color:#2351bd}body.?%PAGE?%[data-v-4c1a00f9]{background:#f9f9f9}",""]),t.exports=e},c28f:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return c})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"coin_pool_success"},[n("v-uni-image",{staticClass:"success_icon",attrs:{src:a("5651")}}),n("v-uni-view",{staticClass:"desc"},[t._v(t._s(t.getLangs("powp47")))]),n("v-uni-view",{staticClass:"btn1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateTo("/pages/pow_record/index")}}},[t._v(t._s(t.getLangs("viewOrder")))])],1)},c=[]},c88f:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("1593")),c=n(a("bceb")),o={name:"PowSuccess",mixins:[i.default,c.default],onShow:function(){this.setTitle(this.getLangs("powp46"))}};e.default=o},db51:function(t,e,a){"use strict";a.r(e);var n=a("c88f"),i=a.n(n);for(var c in n)"default"!==c&&function(t){a.d(e,t,(function(){return n[t]}))}(c);e["default"]=i.a},ff22:function(t,e,a){"use strict";var n=a("4a79"),i=a.n(n);i.a}}]);