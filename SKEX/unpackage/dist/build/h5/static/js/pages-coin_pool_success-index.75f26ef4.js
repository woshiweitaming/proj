(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-coin_pool_success-index"],{"10f1":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("f8ed")),c=a(n("f83c")),o={name:"CoinPoolSuccess",mixins:[i.default,c.default],data:function(){return{fid:"",title:"",desc:""}},onLoad:function(t){this.fid=t.fid,this.title=t.title,this.desc=t.desc},onShow:function(){this.setTitle(this.getLangs("subscriptionSuccessful"))}};e.default=o},1939:function(t,e,n){"use strict";n.r(e);var a=n("10f1"),i=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,(function(){return a[t]}))}(c);e["default"]=i.a},"19ce":function(t,e,n){var a=n("c1d1");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("eaaf723c",a,!0,{sourceMap:!1,shadowMode:!1})},"30e3":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},i=a;e.default=i},"6ba6":function(t,e,n){t.exports=n.p+"static/img/success_img.b4e20cc9.png"},"7c20":function(t,e,n){"use strict";n.r(e);var a=n("f0c4"),i=n("1939");for(var c in i)"default"!==c&&function(t){n.d(e,t,(function(){return i[t]}))}(c);n("8657");var o,r=n("f0c5"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"3a6a9d84",null,!1,a["a"],o);e["default"]=u.exports},8657:function(t,e,n){"use strict";var a=n("19ce"),i=n.n(a);i.a},c1d1:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-3a6a9d84]{background:#f9f9f9}.coin_pool_class[data-v-3a6a9d84]{text-align:center;height:100%;background:#f9f9f9}.success_icon[data-v-3a6a9d84]{width:%?390?%;height:%?240?%;display:block;margin:%?40?% auto}.title[data-v-3a6a9d84]{font-size:%?40?%;color:#1f3f59;margin-bottom:%?40?%;text-align:center}.desc[data-v-3a6a9d84]{text-align:center;font-size:%?30?%;color:#90a2b0;margin-bottom:%?80?%}.btn1[data-v-3a6a9d84]{max-width:%?380?%;height:%?80?%;line-height:%?80?%;text-align:center;background:#2351bd;-webkit-border-radius:%?40?%;border-radius:%?40?%;color:#fff;display:block;margin:auto}.btn2[data-v-3a6a9d84]{text-align:center;display:block;margin-top:%?40?%;color:#2351bd}body.?%PAGE?%[data-v-3a6a9d84]{background:#f9f9f9}",""]),t.exports=e},f0c4:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"coin_pool_success"},[a("v-uni-image",{staticClass:"success_icon",attrs:{src:n("6ba6")}}),a("v-uni-view",{staticClass:"title"},[t._v(t._s(t.getLangs(t.title)))]),a("v-uni-view",{staticClass:"desc"},[t._v(t._s(t.getLangs(t.desc)))]),a("v-uni-view",{staticClass:"btn1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateTo("/pages/coin_pool_record/index")}}},[t._v(t._s(t.getLangs("viewOrder")))]),a("v-uni-view",{staticClass:"btn2",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateTo("/pages/coin_pool_rules/index")}}},[t._v(t._s(t.getLangs("returnTransaction")))])],1)},c=[]},f8ed:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530"));n("96cf");var c=a(n("1da1")),o=n("2f62"),r=a(n("4df2")),u=a(n("30e3")),s=a(n("e740")),d=a(n("7c70")),f=n("981b"),l={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,e){var n="undefined"===typeof e||"{}"===JSON.stringify(e)?"":"?".concat(s.default.convertObj(e));uni.navigateTo({url:t+n})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=u.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?r.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var e=getCurrentPages(),n=e[e.length-1];switch(t){case"opt":return n.options;case"route":return n.route;default:return n}},backToPage:function(t){u.default.getOS();this.navigateTo(t)},backTips:function(t){if(d.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){return(0,c.default)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,f.getNConfig)();case 2:return e=t.sent,t.abrupt("return",window.location.href=e.data.kfUrl);case 5:case"end":return t.stop()}}),t)})))()},customBack:function(){return window.location.href="/"}},computed:(0,i.default)({createOSClass:function(){return"h5"}},(0,o.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=u.default.getOS()}},g=l;e.default=g}}]);