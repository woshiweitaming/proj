(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-kefu-index"],{"2c3d":function(t,e,n){"use strict";var r=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=r(n("5530"));n("96cf");var a=r(n("1da1")),i=n("2f62"),o=r(n("f598")),c=r(n("6d9d")),f=r(n("47d8")),s=r(n("27d3")),d=n("01d5"),l={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,e){var n="undefined"===typeof e||"{}"===JSON.stringify(e)?"":"?".concat(f.default.convertObj(e));uni.navigateTo({url:t+n})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=c.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?o.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var e=getCurrentPages(),n=e[e.length-1];switch(t){case"opt":return n.options;case"route":return n.route;default:return n}},backToPage:function(t){c.default.getOS();this.navigateTo(t)},backTips:function(t){if(s.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){return(0,a.default)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,d.getNConfig)();case 2:return e=t.sent,t.abrupt("return",window.location.href=e.data.kfUrl);case 5:case"end":return t.stop()}}),t)})))()},customBack:function(){return window.location.href="/"}},computed:(0,u.default)({createOSClass:function(){return"h5"}},(0,i.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=c.default.getOS()}},v=l;e.default=v},"324c":function(t,e,n){"use strict";var r=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=r(n("f61e")),a=r(n("2c3d")),i=r(n("5be9")),o={name:"Kefu",mixins:[u.default,a.default,i.default],onShow:function(){this.setTitle(this.getLangs("onlineService"));var t=this.$mp.page.$getAppWebview();this.getLangs("onlineService");t.evalJS('document.title="改变的标题二"')}};e.default=o},"367d":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-web-view",{attrs:{src:t.url}})},a=[]},"5be9":function(t,e,n){"use strict";var r=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var u=r(n("1da1")),a=n("01d5"),i={data:function(){return{wv:null,url:""}},methods:{init:function(){},open:function(){},close:function(){},getKefuHandler:function(){var t=this;return(0,u.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,a.getNConfig)();case 2:n=e.sent,t.url=n.data.kfUrl;case 4:case"end":return e.stop()}}),e)})))()}},onLoad:function(){},onShow:function(){this.getKefuHandler()},onHide:function(){}},o=i;e.default=o},"6d9d":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},u=r;e.default=u},b6c4:function(t,e,n){"use strict";n.r(e);var r=n("324c"),u=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=u.a},cde4:function(t,e,n){"use strict";n.r(e);var r=n("367d"),u=n("b6c4");for(var a in u)"default"!==a&&function(t){n.d(e,t,(function(){return u[t]}))}(a);var i,o=n("f0c5"),c=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,"23204fc0",null,!1,r["a"],i);e["default"]=c.exports}}]);