(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-success_tips-index"],{"0a63":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return u})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[n("v-uni-view",{staticClass:"success_tips"},[n("v-uni-image",{staticClass:"icon",attrs:{src:a("55cb")}}),n("v-uni-view",{staticClass:"name"},[n("v-uni-text",[t._v(t._s(t.getLangs("gtip1")))])],1),n("v-uni-view",{staticClass:"desc"},["recharge"===t.name?n("v-uni-text",[t._v(t._s(t.getLangs("gtip2")))]):t._e()],1),n("v-uni-view",{staticClass:"btn"},["recharge"===t.name?n("v-uni-view",{staticClass:"btns",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toPage("/pages/order_list/index?type=0")}}},[t._v(t._s(t.getLangs("gtip3")))]):t._e(),"withdraw"===t.name?n("v-uni-view",{staticClass:"btns",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toPage("/pages/order_list/index?type=1")}}},[t._v(t._s(t.getLangs("gtip5")))]):t._e()],1)],1)],1)},u=[]},"55cb":function(t,e,a){t.exports=a.p+"static/img/success_img.b4e20cc9.png"},"707b":function(t,e,a){var n=a("8fa4");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("ab7c1ef2",n,!0,{sourceMap:!1,shadowMode:!1})},7741:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("aae5")),u=n(a("eac9")),c={name:"SuccessTips",mixins:[i.default,u.default],data:function(){return{name:""}},methods:{toPage:function(t){this.redirectTo(t)}},onLoad:function(t){this.name=t.name,"recharge"===this.name&&this.setTitle(this.getLangs("recharging"))}};e.default=c},"8fa4":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-192d8b43]{background:#f9f9f9}.page[data-v-192d8b43]{background:#fff;height:100%}.icon[data-v-192d8b43]{width:%?390?%;height:%?240?%;display:block;padding:%?40?% auto;margin:auto}.name[data-v-192d8b43]{text-align:center;line-height:%?80?%;font-size:%?32?%;font-weight:700}.desc[data-v-192d8b43]{text-align:center;line-height:%?80?%;font-size:%?26?%;color:#999}.btn[data-v-192d8b43]{text-align:center}.btn .btns[data-v-192d8b43]{max-width:%?300?%;height:%?80?%;background:#007aff;text-align:center;line-height:%?80?%;color:#fff;-webkit-border-radius:%?20?%;border-radius:%?20?%;margin:%?40?% auto}body.?%PAGE?%[data-v-192d8b43]{background:#f9f9f9}",""]),t.exports=e},abdf:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},i=n;e.default=i},c5f4:function(t,e,a){"use strict";a.r(e);var n=a("0a63"),i=a("edb2");for(var u in i)"default"!==u&&function(t){a.d(e,t,(function(){return i[t]}))}(u);a("caf2");var c,r=a("f0c5"),s=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"192d8b43",null,!1,n["a"],c);e["default"]=s.exports},caf2:function(t,e,a){"use strict";var n=a("707b"),i=a.n(n);i.a},eac9:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530")),u=a("2f62"),c=n(a("34ec")),r=n(a("abdf")),s=n(a("967f")),o=n(a("f737")),f={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,e){var a="undefined"===typeof e||"{}"===JSON.stringify(e)?"":"?".concat(s.default.convertObj(e));uni.navigateTo({url:t+a})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=r.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?c.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var e=getCurrentPages(),a=e[e.length-1];switch(t){case"opt":return a.options;case"route":return a.route;default:return a}},backToPage:function(t){r.default.getOS();this.navigateTo(t)},backTips:function(t){if(o.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,i.default)({createOSClass:function(){return"h5"}},(0,u.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=r.default.getOS()}},d=f;e.default=d},edb2:function(t,e,a){"use strict";a.r(e);var n=a("7741"),i=a.n(n);for(var u in n)"default"!==u&&function(t){a.d(e,t,(function(){return n[t]}))}(u);e["default"]=i.a}}]);