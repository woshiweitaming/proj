(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-success_tips-index"],{"0c76":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("96f1")),u=a(n("7333")),c={name:"SuccessTips",mixins:[i.default,u.default],data:function(){return{name:""}},methods:{toPage:function(t){this.redirectTo(t)}},onLoad:function(t){this.name=t.name,"recharge"===this.name&&this.setTitle(this.getLangs("recharging"))}};e.default=c},"23ce":function(t,e,n){"use strict";n.r(e);var a=n("0c76"),i=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);e["default"]=i.a},2658:function(t,e,n){t.exports=n.p+"static/img/success_img.b4e20cc9.png"},"2dd7":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-192d8b43]{background:#f9f9f9}.page[data-v-192d8b43]{background:#fff;height:100%}.icon[data-v-192d8b43]{width:%?390?%;height:%?240?%;display:block;padding:%?40?% auto;margin:auto}.name[data-v-192d8b43]{text-align:center;line-height:%?80?%;font-size:%?32?%;font-weight:700}.desc[data-v-192d8b43]{text-align:center;line-height:%?80?%;font-size:%?26?%;color:#999}.btn[data-v-192d8b43]{text-align:center}.btn .btns[data-v-192d8b43]{max-width:%?300?%;height:%?80?%;background:#007aff;text-align:center;line-height:%?80?%;color:#fff;-webkit-border-radius:%?20?%;border-radius:%?20?%;margin:%?40?% auto}body.?%PAGE?%[data-v-192d8b43]{background:#f9f9f9}",""]),t.exports=e},3113:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"page"},[a("v-uni-view",{staticClass:"success_tips"},[a("v-uni-image",{staticClass:"icon",attrs:{src:n("2658")}}),a("v-uni-view",{staticClass:"name"},[a("v-uni-text",[t._v(t._s(t.getLangs("gtip1")))])],1),a("v-uni-view",{staticClass:"desc"},["recharge"===t.name?a("v-uni-text",[t._v(t._s(t.getLangs("gtip2")))]):t._e()],1),a("v-uni-view",{staticClass:"btn"},["recharge"===t.name?a("v-uni-view",{staticClass:"btns",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toPage("/pages/order_list/index?type=0")}}},[t._v(t._s(t.getLangs("gtip3")))]):t._e(),"withdraw"===t.name?a("v-uni-view",{staticClass:"btns",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toPage("/pages/order_list/index?type=1")}}},[t._v(t._s(t.getLangs("gtip5")))]):t._e()],1)],1)],1)},u=[]},7333:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530")),u=n("2f62"),c=a(n("5d2a")),r=a(n("7797")),s=a(n("2409")),o=a(n("02ca")),d={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,e){var n="undefined"===typeof e||"{}"===JSON.stringify(e)?"":"?".concat(s.default.convertObj(e));uni.navigateTo({url:t+n})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=r.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?c.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var e=getCurrentPages(),n=e[e.length-1];switch(t){case"opt":return n.options;case"route":return n.route;default:return n}},backToPage:function(t){r.default.getOS();this.navigateTo(t)},backTips:function(t){if(o.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,i.default)({createOSClass:function(){return"h5"}},(0,u.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=r.default.getOS()}},f=d;e.default=f},7797:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},i=a;e.default=i},b453:function(t,e,n){"use strict";n.r(e);var a=n("3113"),i=n("23ce");for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);n("f9ca");var c,r=n("f0c5"),s=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"192d8b43",null,!1,a["a"],c);e["default"]=s.exports},c221:function(t,e,n){var a=n("2dd7");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("3f5e40da",a,!0,{sourceMap:!1,shadowMode:!1})},f9ca:function(t,e,n){"use strict";var a=n("c221"),i=n.n(a);i.a}}]);