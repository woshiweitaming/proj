(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-desc-index"],{"2c3d":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("5530"));n("96cf");var i=a(n("1da1")),u=n("2f62"),c=a(n("f598")),o=a(n("6d9d")),s=a(n("47d8")),d=a(n("27d3")),f=n("01d5"),l={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,e){var n="undefined"===typeof e||"{}"===JSON.stringify(e)?"":"?".concat(s.default.convertObj(e));uni.navigateTo({url:t+n})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=o.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?c.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var e=getCurrentPages(),n=e[e.length-1];switch(t){case"opt":return n.options;case"route":return n.route;default:return n}},backToPage:function(t){o.default.getOS();this.navigateTo(t)},backTips:function(t){if(d.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){return(0,i.default)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,f.getNConfig)();case 2:return e=t.sent,t.abrupt("return",window.location.href=e.data.kfUrl);case 5:case"end":return t.stop()}}),t)})))()},customBack:function(){return window.location.href="/"}},computed:(0,r.default)({createOSClass:function(){return"h5"}},(0,u.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=o.default.getOS()}},v=l;e.default=v},"526c":function(t,e,n){"use strict";n.r(e);var a=n("567a"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},"567a":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var r=a(n("1da1")),i=(a(n("f598")),a(n("2c3d"))),u=a(n("f61e")),c=n("01d5"),o={name:"DescProduct",mixins:[i.default,u.default],data:function(){return{id:"",title:"",content:""}},methods:{getNoticeDetailsHandler:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,c.getNNoticeDetails)({id:t.id});case 2:n=e.sent,t.content=n.data.content;case 4:case"end":return e.stop()}}),e)})))()}},onLoad:function(t){this.id=t.id,this.title=t.title},onShow:function(){this.setTitle(this.title),this.getNoticeDetailsHandler()}};e.default=o},"5c55":function(t,e,n){"use strict";n.r(e);var a=n("b973"),r=n("526c");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("9510");var u,c=n("f0c5"),o=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"0eb6612e",null,!1,a["a"],u);e["default"]=o.exports},"6d9d":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},r=a;e.default=r},"732d":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".desc_class[data-v-0eb6612e]{padding:%?20?% %?40?%;font-size:%?28?%;color:#aaa}.desc_class .p[data-v-0eb6612e]{display:block;margin:%?20?% 0}.desc_class .t[data-v-0eb6612e]{font-weight:700}",""]),t.exports=e},9510:function(t,e,n){"use strict";var a=n("e490"),r=n.n(a);r.a},b973:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"desc_class"},[n("v-uni-rich-text",{attrs:{nodes:t.content}})],1)},i=[]},e490:function(t,e,n){var a=n("732d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("f0da43f8",a,!0,{sourceMap:!1,shadowMode:!1})}}]);