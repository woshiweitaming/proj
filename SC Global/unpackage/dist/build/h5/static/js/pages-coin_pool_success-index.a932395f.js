(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-coin_pool_success-index"],{"0ba1":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},i=n;e.default=i},"1fe0":function(t,e,a){"use strict";a.r(e);var n=a("7792"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"264d":function(t,e,a){t.exports=a.p+"static/img/success_img.b4e20cc9.png"},"3a61":function(t,e,a){"use strict";var n=a("8b49"),i=a.n(n);i.a},"569b":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-3a6a9d84]{background:#f9f9f9}.coin_pool_class[data-v-3a6a9d84]{text-align:center;height:100%;background:#f9f9f9}.success_icon[data-v-3a6a9d84]{width:%?390?%;height:%?240?%;display:block;margin:%?40?% auto}.title[data-v-3a6a9d84]{font-size:%?40?%;color:#1f3f59;margin-bottom:%?40?%;text-align:center}.desc[data-v-3a6a9d84]{text-align:center;font-size:%?30?%;color:#90a2b0;margin-bottom:%?80?%}.btn1[data-v-3a6a9d84]{max-width:%?380?%;height:%?80?%;line-height:%?80?%;text-align:center;background:#2351bd;border-radius:%?40?%;color:#fff;display:block;margin:auto}.btn2[data-v-3a6a9d84]{text-align:center;display:block;margin-top:%?40?%;color:#2351bd}body.?%PAGE?%[data-v-3a6a9d84]{background:#f9f9f9}",""]),t.exports=e},7792:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("9b4a")),o=n(a("4120")),c={name:"CoinPoolSuccess",mixins:[i.default,o.default],data:function(){return{fid:"",title:"",desc:""}},onLoad:function(t){this.fid=t.fid,this.title=t.title,this.desc=t.desc},onShow:function(){this.setTitle(this.getLangs("subscriptionSuccessful"))}};e.default=c},"8b49":function(t,e,a){var n=a("569b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("5111f9f4",n,!0,{sourceMap:!1,shadowMode:!1})},"9b4a":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530")),o=a("2f62"),c=n(a("5ea3")),u=n(a("0ba1")),s=n(a("41b7")),r=n(a("dcc8")),d={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,e){var a="undefined"===typeof e||"{}"===JSON.stringify(e)?"":"?".concat(s.default.convertObj(e));uni.navigateTo({url:t+a})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=u.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?c.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var e=getCurrentPages(),a=e[e.length-1];switch(t){case"opt":return a.options;case"route":return a.route;default:return a}},backToPage:function(t){u.default.getOS();this.navigateTo(t)},backTips:function(t){if(r.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,i.default)({createOSClass:function(){return"h5"}},(0,o.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=u.default.getOS()}},f=d;e.default=f},d536:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"coin_pool_success"},[n("v-uni-image",{staticClass:"success_icon",attrs:{src:a("264d")}}),n("v-uni-view",{staticClass:"title"},[t._v(t._s(t.getLangs(t.title)))]),n("v-uni-view",{staticClass:"desc"},[t._v(t._s(t.getLangs(t.desc)))]),n("v-uni-view",{staticClass:"btn1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateTo("/pages/coin_pool_record/index")}}},[t._v(t._s(t.getLangs("viewOrder")))]),n("v-uni-view",{staticClass:"btn2",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateTo("/pages/coin_pool_rules/index")}}},[t._v(t._s(t.getLangs("returnTransaction")))])],1)},o=[]},f80f:function(t,e,a){"use strict";a.r(e);var n=a("d536"),i=a("1fe0");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("3a61");var c,u=a("f0c5"),s=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"3a6a9d84",null,!1,n["a"],c);e["default"]=s.exports}}]);