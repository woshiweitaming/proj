(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-pool_success-index"],{"4a20":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},i=n;e.default=i},"63b0":function(t,e,a){"use strict";var n=a("8f1a"),i=a.n(n);i.a},"6aa9":function(t,e,a){"use strict";a.r(e);var n=a("dc82"),i=a("c2d7");for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("63b0");var u,c=a("f0c5"),o=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"2657b50a",null,!1,n["a"],u);e["default"]=o.exports},8783:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-2657b50a]{background:#f9f9f9}.success[data-v-2657b50a]{background:#fff;height:100%;padding-top:%?40?%}.success_icon[data-v-2657b50a]{width:%?390?%;height:%?240?%;display:block;margin:auto}.success_tips[data-v-2657b50a]{text-align:center;line-height:%?100?%;font-size:%?32?%}.btns[data-v-2657b50a]{background:#007aff;line-height:%?70?%;width:%?200?%;text-align:center;color:#fff;margin:%?40?% auto;-webkit-border-radius:%?20?%;border-radius:%?20?%}body.?%PAGE?%[data-v-2657b50a]{background:#f9f9f9}",""]),t.exports=e},"8f1a":function(t,e,a){var n=a("8783");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("2050f52e",n,!0,{sourceMap:!1,shadowMode:!1})},c2d7:function(t,e,a){"use strict";a.r(e);var n=a("c547"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},c547:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("e910")),s=n(a("6fad")),u={name:"PoolSuccess",mixins:[i.default,s.default],data:function(){return{type:0}},methods:{toPage:function(){this.switchTab("/pages/pool/index")}},onLoad:function(t){this.type=t.type},onShow:function(){0==this.type?this.setTitle(this.getLangs("successfulRedemption")):this.setTitle(this.getLangs("poolp34"))}};e.default=u},d4a6:function(t,e,a){t.exports=a.p+"static/img/success_img.b4e20cc9.png"},dc82:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"success"},[n("v-uni-image",{staticClass:"success_icon",attrs:{src:a("d4a6")}}),0==t.type?n("v-uni-view",{staticClass:"success_tips"},[t._v(t._s(t.getLangs("successfulRedemption")))]):t._e(),1==t.type?n("v-uni-view",{staticClass:"success_tips"},[t._v(t._s(t.getLangs("poolp34")))]):t._e(),n("v-uni-view",{staticClass:"btns",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toPage.apply(void 0,arguments)}}},[t._v(t._s(t.getLangs("backBtn")))])],1)},s=[]},e910:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530")),s=a("2f62"),u=n(a("d8d4")),c=n(a("4a20")),o=n(a("cd01")),r=n(a("1ab0")),f={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,e){var a="undefined"===typeof e||"{}"===JSON.stringify(e)?"":"?".concat(o.default.convertObj(e));uni.navigateTo({url:t+a})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=c.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?u.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var e=getCurrentPages(),a=e[e.length-1];switch(t){case"opt":return a.options;case"route":return a.route;default:return a}},backToPage:function(t){c.default.getOS();this.navigateTo(t)},backTips:function(t){if(r.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,i.default)({createOSClass:function(){return"h5"}},(0,s.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=c.default.getOS()}},d=f;e.default=d}}]);