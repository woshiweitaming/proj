(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-white_paper-index"],{6319:function(e,t,n){var a=n("fd88");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("10ff0d32",a,!0,{sourceMap:!1,shadowMode:!1})},7448:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"white_paper_class"},[n("v-uni-view",{staticClass:"currency"},[e._v(e._s(e.opt.currency))]),n("v-uni-view",{staticClass:"currency_list"},[n("v-uni-view",{staticClass:"currency_label"},[n("v-uni-view",{staticClass:"name"},[e._v(e._s(e.getLangs("releaseTime")))]),n("v-uni-view",{staticClass:"desc"},[e._v(e._s(e.toDate(e.desc.release_time)))])],1),n("v-uni-view",{staticClass:"currency_label"},[n("v-uni-view",{staticClass:"name"},[e._v(e._s(e.getLangs("totalAmountofIssuance")))]),n("v-uni-view",{staticClass:"desc"},[e._v(e._s(e.desc.release_count))])],1),n("v-uni-view",{staticClass:"currency_label"},[n("v-uni-view",{staticClass:"name"},[e._v(e._s(e.getLangs("totalCirculation")))]),n("v-uni-view",{staticClass:"desc"},[e._v(e._s(e.desc.circulate_count))])],1),n("v-uni-view",{staticClass:"currency_label"},[n("v-uni-view",{staticClass:"name"},[e._v(e._s(e.getLangs("website")))]),n("v-uni-view",{staticClass:"desc",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toPage(e.desc.official_website)}}},[e._v(e._s(e.desc.official_website))])],1),n("v-uni-view",{staticClass:"currency_label"},[n("v-uni-view",{staticClass:"name"},[e._v(e._s(e.getLangs("whitePaper")))]),n("v-uni-view",{staticClass:"desc",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toPage(e.desc.white_paper)}}},[e._v(e._s(e.desc.white_paper))])],1),n("v-uni-view",{staticClass:"currency_label"},[n("v-uni-view",{staticClass:"name"},[e._v(e._s(e.getLangs("blockQuery")))]),n("v-uni-view",{staticClass:"desc",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toPage(e.desc.block_query)}}},[e._v(e._s(e.desc.block_query))])],1)],1),n("v-uni-view",{staticClass:"introduce"},[e._v(e._s(e.getLangs("introduce")))]),n("v-uni-view",{staticClass:"desc"},[e._v(e._s("cn"===this.getGlobalLang?e.desc.intro_zh:e.desc.intro_en))])],1)},c=[]},8505:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={setStatusBarColor:function(e){},checkNetWorkStatus:function(){},getOS:function(){var e=uni.getSystemInfoSync().platform;return e}},i=a;t.default=i},"9cf3":function(e,t,n){"use strict";n.r(t);var a=n("7448"),i=n("bb19");for(var c in i)"default"!==c&&function(e){n.d(t,e,(function(){return i[e]}))}(c);n("b2f4"),n("d528");var s,r=n("f0c5"),o=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"9cd9e820",null,!1,a["a"],s);t["default"]=o.exports},b2f4:function(e,t,n){"use strict";var a=n("6319"),i=n.n(a);i.a},bb19:function(e,t,n){"use strict";n.r(t);var a=n("fc50"),i=n.n(a);for(var c in a)"default"!==c&&function(e){n.d(t,e,(function(){return a[e]}))}(c);t["default"]=i.a},cb12:function(e,t,n){var a=n("f920");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("13126c33",a,!0,{sourceMap:!1,shadowMode:!1})},d528:function(e,t,n){"use strict";var a=n("cb12"),i=n.n(a);i.a},f920:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".white_paper_class[data-v-9cd9e820]{padding:0 %?40?%}.white_paper_class .currency[data-v-9cd9e820]{font-size:%?36?%;line-height:%?120?%;color:#fff}.currency_label[data-v-9cd9e820]{height:%?80?%;border-top:1px solid hsla(0,0%,100%,.05);position:relative;padding-left:%?300?%}.currency_label .name[data-v-9cd9e820]{line-height:%?80?%;width:%?280?%;position:absolute;left:0;color:#637b9b;font-size:%?28?%}.currency_label .desc[data-v-9cd9e820]{line-height:%?80?%;text-align:right;color:#cbd8e9;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.introduce[data-v-9cd9e820]{font-size:%?32?%;color:#cbd8e9;margin-top:%?40?%;margin-bottom:%?40?%}.desc[data-v-9cd9e820]{font-size:%?28?%;color:#cbd8e9}",""]),e.exports=t},fc50:function(e,t,n){"use strict";var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var i=a(n("1da1")),c=(n("2f62"),a(n("fd76"))),s=a(n("36d8")),r=n("98af"),o=a(n("11d3")),u={name:"WhitePaper",mixins:[c.default,s.default],data:function(){return{opt:{},desc:{}}},methods:{getProductInfoHandler:function(){var e=this;return(0,i.default)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,r.getProductInfo)({pid:e.opt.id});case 2:n=t.sent,e.desc=n.data;case 4:case"end":return t.stop()}}),t)})))()},toDate:function(e){return void 0==e?"-":o.default.toDate(1e3*e)},toPage:function(e){return window.open(e)}},onLoad:function(e){this.opt=e},onShow:function(){this.setTitle(this.opt.currency.toUpperCase()),this.getProductInfoHandler()}};t.default=u},fd76:function(e,t,n){"use strict";var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("5530")),c=n("2f62"),s=a(n("79ef")),r=a(n("8505")),o=a(n("11d3")),u=a(n("d8e3")),d={data:function(){return{currentOS:""}},methods:{navigateTo:function(e,t){var n="undefined"===typeof t||"{}"===JSON.stringify(t)?"":"?".concat(o.default.convertObj(t));uni.navigateTo({url:e+n})},redirectTo:function(e){uni.redirectTo({url:e})},reLaunch:function(e){uni.reLaunch({url:e})},switchTab:function(e){uni.switchTab({url:e})},back:function(){var e=r.default.getOS();return"ios"===e||"android"===e?uni.navigateBack():history.back(-1)},setTitle:function(e){uni.setNavigationBarTitle({title:"undefined"===typeof e||""===e?s.default.appName:e})},moveHandle:function(){},getCurrentPageData:function(e){var t=getCurrentPages(),n=t[t.length-1];switch(e){case"opt":return n.options;case"route":return n.route;default:return n}},backToPage:function(e){r.default.getOS();this.navigateTo(e)},backTips:function(e){if(u.default.checkCode(e))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(e.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,i.default)({createOSClass:function(){return"h5"}},(0,c.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=r.default.getOS()}},l=d;t.default=l},fd88:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,"uni-page-body[data-v-9cd9e820]{background:#1c1d31}body.?%PAGE?%[data-v-9cd9e820]{background:#1c1d31}",""]),e.exports=t}}]);