(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-futures_position-index"],{2911:function(t,e,n){"use strict";n.r(e);var a=n("c527"),u=n("50f4");for(var i in u)"default"!==i&&function(t){n.d(e,t,(function(){return u[t]}))}(i);n("5b65");var o,r=n("f0c5"),c=Object(r["a"])(u["default"],a["b"],a["c"],!1,null,"4b70e7b5",null,!1,a["a"],o);e["default"]=c.exports},"2dbf":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-4b70e7b5]{background:#f7f7f9}.position_class[data-v-4b70e7b5]{height:100%}body.?%PAGE?%[data-v-4b70e7b5]{background:#f7f7f9}",""]),t.exports=e},"3dc9":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},u=a;e.default=u},"50f4":function(t,e,n){"use strict";n.r(e);var a=n("c1e6"),u=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=u.a},"5b65":function(t,e,n){"use strict";var a=n("88bf"),u=n.n(a);u.a},"66fe":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=a(n("5530")),i=n("2f62"),o=a(n("9813")),r=a(n("3dc9")),c=a(n("4d94")),s=a(n("1055")),f={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,e){var n="undefined"===typeof e||"{}"===JSON.stringify(e)?"":"?".concat(c.default.convertObj(e));uni.navigateTo({url:t+n})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=r.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?o.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var e=getCurrentPages(),n=e[e.length-1];switch(t){case"opt":return n.options;case"route":return n.route;default:return n}},backToPage:function(t){r.default.getOS();this.navigateTo(t)},backTips:function(t){if(s.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,u.default)({createOSClass:function(){return"h5"}},(0,i.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=r.default.getOS()}},d=f;e.default=d},"88bf":function(t,e,n){var a=n("2dbf");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var u=n("4f06").default;u("00a24e2a",a,!0,{sourceMap:!1,shadowMode:!1})},c1e6:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=a(n("d98d")),i=a(n("66fe")),o={name:"Position",mixins:[u.default,i.default],onShow:function(){this.setTitle(this.getLangs("positionOrder"))}};e.default=o},c527:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"position_class"},[n("v-uni-view",{staticClass:"common_list_class"})],1)},i=[]}}]);