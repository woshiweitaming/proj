(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-white_paper-index"],{"08c2":function(e,t,a){"use strict";a.r(t);var n=a("9c38"),i=a("eaa2");for(var c in i)"default"!==c&&function(e){a.d(t,e,(function(){return i[e]}))}(c);a("7941"),a("fd0c");var s,r=a("f0c5"),o=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"9cd9e820",null,!1,n["a"],s);t["default"]=o.exports},"1d16":function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".white_paper_class[data-v-9cd9e820]{padding:0 %?40?%}.white_paper_class .currency[data-v-9cd9e820]{font-size:%?36?%;line-height:%?120?%;color:#fff}.currency_label[data-v-9cd9e820]{height:%?80?%;border-top:1px solid hsla(0,0%,100%,.05);position:relative;padding-left:%?300?%}.currency_label .name[data-v-9cd9e820]{line-height:%?80?%;width:%?280?%;position:absolute;left:0;color:#637b9b;font-size:%?28?%}.currency_label .desc[data-v-9cd9e820]{line-height:%?80?%;text-align:right;color:#cbd8e9;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.introduce[data-v-9cd9e820]{font-size:%?32?%;color:#cbd8e9;margin-top:%?40?%;margin-bottom:%?40?%}.desc[data-v-9cd9e820]{font-size:%?28?%;color:#cbd8e9}",""]),e.exports=t},"2b04":function(e,t,a){"use strict";var n=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("5530")),c=a("2f62"),s=n(a("6c58")),r=n(a("4a06")),o=n(a("4844")),u=n(a("121c")),d={data:function(){return{currentOS:""}},methods:{navigateTo:function(e,t){var a="undefined"===typeof t||"{}"===JSON.stringify(t)?"":"?".concat(o.default.convertObj(t));uni.navigateTo({url:e+a})},redirectTo:function(e){uni.redirectTo({url:e})},reLaunch:function(e){uni.reLaunch({url:e})},switchTab:function(e){uni.switchTab({url:e})},back:function(){var e=r.default.getOS();return"ios"===e||"android"===e?uni.navigateBack():history.back(-1)},setTitle:function(e){uni.setNavigationBarTitle({title:"undefined"===typeof e||""===e?s.default.appName:e})},moveHandle:function(){},getCurrentPageData:function(e){var t=getCurrentPages(),a=t[t.length-1];switch(e){case"opt":return a.options;case"route":return a.route;default:return a}},backToPage:function(e){r.default.getOS();this.navigateTo(e)},backTips:function(e){if(u.default.checkCode(e))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(e.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,i.default)({createOSClass:function(){return"h5"}},(0,c.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=r.default.getOS()}},l=d;t.default=l},"436b":function(e,t,a){"use strict";var n=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var i=n(a("1da1")),c=(a("2f62"),n(a("2b04"))),s=n(a("6a9c")),r=a("6b57"),o=n(a("4844")),u={name:"WhitePaper",mixins:[c.default,s.default],data:function(){return{opt:{},desc:{}}},methods:{getProductInfoHandler:function(){var e=this;return(0,i.default)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,r.getProductInfo)({pid:e.opt.id});case 2:a=t.sent,e.desc=a.data;case 4:case"end":return t.stop()}}),t)})))()},toDate:function(e){return void 0==e?"-":o.default.toDate(1e3*e)},toPage:function(e){return window.open(e)}},onLoad:function(e){this.opt=e},onShow:function(){this.setTitle(this.opt.currency.toUpperCase()),this.getProductInfoHandler()}};t.default=u},"4a06":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={setStatusBarColor:function(e){},checkNetWorkStatus:function(){},getOS:function(){var e=uni.getSystemInfoSync().platform;return e}},i=n;t.default=i},7941:function(e,t,a){"use strict";var n=a("d2df"),i=a.n(n);i.a},"9c38":function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return n}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"white_paper_class"},[a("v-uni-view",{staticClass:"currency"},[e._v(e._s(e.opt.currency))]),a("v-uni-view",{staticClass:"currency_list"},[a("v-uni-view",{staticClass:"currency_label"},[a("v-uni-view",{staticClass:"name"},[e._v(e._s(e.getLangs("releaseTime")))]),a("v-uni-view",{staticClass:"desc"},[e._v(e._s(e.toDate(e.desc.release_time)))])],1),a("v-uni-view",{staticClass:"currency_label"},[a("v-uni-view",{staticClass:"name"},[e._v(e._s(e.getLangs("totalAmountofIssuance")))]),a("v-uni-view",{staticClass:"desc"},[e._v(e._s(e.desc.release_count))])],1),a("v-uni-view",{staticClass:"currency_label"},[a("v-uni-view",{staticClass:"name"},[e._v(e._s(e.getLangs("totalCirculation")))]),a("v-uni-view",{staticClass:"desc"},[e._v(e._s(e.desc.circulate_count))])],1),a("v-uni-view",{staticClass:"currency_label"},[a("v-uni-view",{staticClass:"name"},[e._v(e._s(e.getLangs("website")))]),a("v-uni-view",{staticClass:"desc",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toPage(e.desc.official_website)}}},[e._v(e._s(e.desc.official_website))])],1),a("v-uni-view",{staticClass:"currency_label"},[a("v-uni-view",{staticClass:"name"},[e._v(e._s(e.getLangs("whitePaper")))]),a("v-uni-view",{staticClass:"desc",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toPage(e.desc.white_paper)}}},[e._v(e._s(e.desc.white_paper))])],1),a("v-uni-view",{staticClass:"currency_label"},[a("v-uni-view",{staticClass:"name"},[e._v(e._s(e.getLangs("blockQuery")))]),a("v-uni-view",{staticClass:"desc",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toPage(e.desc.block_query)}}},[e._v(e._s(e.desc.block_query))])],1)],1),a("v-uni-view",{staticClass:"introduce"},[e._v(e._s(e.getLangs("introduce")))]),a("v-uni-view",{staticClass:"desc"},[e._v(e._s("cn"===this.getGlobalLang?e.desc.intro_zh:e.desc.intro_en))])],1)},c=[]},cedd:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,"uni-page-body[data-v-9cd9e820]{background:#1c1d31}body.?%PAGE?%[data-v-9cd9e820]{background:#1c1d31}",""]),e.exports=t},d2df:function(e,t,a){var n=a("cedd");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("630b7162",n,!0,{sourceMap:!1,shadowMode:!1})},d50c:function(e,t,a){var n=a("1d16");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("782b7290",n,!0,{sourceMap:!1,shadowMode:!1})},eaa2:function(e,t,a){"use strict";a.r(t);var n=a("436b"),i=a.n(n);for(var c in n)"default"!==c&&function(e){a.d(t,e,(function(){return n[e]}))}(c);t["default"]=i.a},fd0c:function(e,t,a){"use strict";var n=a("d50c"),i=a.n(n);i.a}}]);