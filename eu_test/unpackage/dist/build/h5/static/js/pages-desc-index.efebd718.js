(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-desc-index"],{6072:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".desc_class[data-v-0eb6612e]{padding:%?20?% %?40?%;font-size:%?28?%;color:#aaa}.desc_class .p[data-v-0eb6612e]{display:block;margin:%?20?% 0}.desc_class .t[data-v-0eb6612e]{font-weight:700}",""]),t.exports=e},6252:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=a(n("1da1")),r=(a(n("c0c0")),a(n("7c23"))),c=a(n("4993")),u=n("c728"),o={name:"DescProduct",mixins:[r.default,c.default],data:function(){return{id:"",title:"",content:""}},methods:{getNoticeDetailsHandler:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.getNNoticeDetails)({id:t.id});case 2:n=e.sent,t.content=n.data.content;case 4:case"end":return e.stop()}}),e)})))()}},onLoad:function(t){this.id=t.id,this.title=t.title},onShow:function(){this.setTitle(this.title),this.getNoticeDetailsHandler()}};e.default=o},7191:function(t,e,n){"use strict";var a=n("c6e0"),i=n.n(a);i.a},"72e6":function(t,e,n){"use strict";n.r(e);var a=n("9d37"),i=n("77a4");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("7191");var c,u=n("f0c5"),o=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"0eb6612e",null,!1,a["a"],c);e["default"]=o.exports},"77a4":function(t,e,n){"use strict";n.r(e);var a=n("6252"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"7c23":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530")),r=n("2f62"),c=a(n("c0c0")),u=a(n("8cd9")),o=a(n("a2c5")),s=a(n("016f")),d={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,e){var n="undefined"===typeof e||"{}"===JSON.stringify(e)?"":"?".concat(o.default.convertObj(e));uni.navigateTo({url:t+n})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=u.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?c.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var e=getCurrentPages(),n=e[e.length-1];switch(t){case"opt":return n.options;case"route":return n.route;default:return n}},backToPage:function(t){u.default.getOS();this.navigateTo(t)},backTips:function(t){if(s.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,i.default)({createOSClass:function(){return"h5"}},(0,r.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=u.default.getOS()}},f=d;e.default=f},"8cd9":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},i=a;e.default=i},"9d37":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"desc_class"},[n("v-uni-rich-text",{attrs:{nodes:t.content}})],1)},r=[]},c6e0:function(t,e,n){var a=n("6072");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("57fd0424",a,!0,{sourceMap:!1,shadowMode:!1})}}]);