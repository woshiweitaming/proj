(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-kefu-index"],{"0a80":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=a(n("0fa7")),r=a(n("f8c6")),i=a(n("3f67")),o={name:"Kefu",mixins:[u.default,r.default,i.default],onShow:function(){this.setTitle(this.getLangs("onlineService"));var t=this.$mp.page.$getAppWebview();this.getLangs("onlineService");t.evalJS('document.title="改变的标题二"')}};e.default=o},2737:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-web-view",{attrs:{src:t.url}})},r=[]},"3a0a":function(t,e,n){"use strict";n.r(e);var a=n("0a80"),u=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=u.a},"3b0a":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},u=a;e.default=u},"3f67":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var u=a(n("1da1")),r=n("c174"),i={data:function(){return{wv:null,url:""}},methods:{init:function(){},open:function(){},close:function(){},getKefuHandler:function(){var t=this;return(0,u.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,r.getNConfig)();case 2:n=e.sent,t.url=n.data.kfUrl;case 4:case"end":return e.stop()}}),e)})))()}},onLoad:function(){},onShow:function(){this.getKefuHandler()},onHide:function(){}},o=i;e.default=o},b07e:function(t,e,n){"use strict";n.r(e);var a=n("2737"),u=n("3a0a");for(var r in u)"default"!==r&&function(t){n.d(e,t,(function(){return u[t]}))}(r);var i,o=n("f0c5"),c=Object(o["a"])(u["default"],a["b"],a["c"],!1,null,"23204fc0",null,!1,a["a"],i);e["default"]=c.exports},f8c6:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=a(n("5530")),r=n("2f62"),i=a(n("ccdd")),o=a(n("3b0a")),c=a(n("279d")),f=a(n("0696")),s={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,e){var n="undefined"===typeof e||"{}"===JSON.stringify(e)?"":"?".concat(c.default.convertObj(e));uni.navigateTo({url:t+n})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=o.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?i.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var e=getCurrentPages(),n=e[e.length-1];switch(t){case"opt":return n.options;case"route":return n.route;default:return n}},backToPage:function(t){o.default.getOS();this.navigateTo(t)},backTips:function(t){if(f.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,u.default)({createOSClass:function(){return"h5"}},(0,r.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=o.default.getOS()}},d=s;e.default=d}}]);