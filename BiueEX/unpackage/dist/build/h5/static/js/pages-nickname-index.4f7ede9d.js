(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-nickname-index"],{"2b1b":function(t,e,n){"use strict";n.r(e);var a=n("c3d1"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"412b":function(t,e,n){"use strict";n.r(e);var a=n("d449"),i=n("2b1b");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("52e9");var u,c=n("f0c5"),s=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"2b726f80",null,!1,a["a"],u);e["default"]=s.exports},"52e9":function(t,e,n){"use strict";var a=n("c1df"),i=n.n(a);i.a},"725f":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},i=a;e.default=i},c1df:function(t,e,n){var a=n("ddc2");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("e2ccdc00",a,!0,{sourceMap:!1,shadowMode:!1})},c3d1:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=a(n("1da1")),r=a(n("a937")),u=a(n("c5e2")),c=n("704f"),s={name:"Nickname",mixins:[r.default,u.default],data:function(){return{params:{nickName:""}}},methods:{updNicknameHandler:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==t.params.nickName){e.next=2;break}return e.abrupt("return",t.$tips.showToast(t.getLangs("nicknamePlaceholder")));case 2:return e.next=4,(0,c.updNickName)(t.params);case 4:n=e.sent,t.backTips(n);case 6:case"end":return e.stop()}}),e)})))()}},onShow:function(){this.setTitle(this.getLangs("nickname"))}};e.default=s},c5e2:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530")),r=n("2f62"),u=a(n("873a")),c=a(n("725f")),s=a(n("88f3")),o=a(n("78d5")),f={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,e){var n="undefined"===typeof e||"{}"===JSON.stringify(e)?"":"?".concat(s.default.convertObj(e));uni.navigateTo({url:t+n})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=c.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?u.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var e=getCurrentPages(),n=e[e.length-1];switch(t){case"opt":return n.options;case"route":return n.route;default:return n}},backToPage:function(t){c.default.getOS();this.navigateTo(t)},backTips:function(t){if(o.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,i.default)({createOSClass:function(){return"h5"}},(0,r.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=c.default.getOS()}},d=f;e.default=d},d449:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"nickname_class"},[n("v-uni-view",{staticClass:"form_class"},[n("v-uni-view",{staticClass:"login_form_content"},[n("v-uni-view",{staticClass:"form_label"},[n("v-uni-view",{staticClass:"form_label_name"},[n("v-uni-text",{staticClass:"iconfont icon-barrage"})],1),n("v-uni-view",{staticClass:"form_label_main"},[n("v-uni-view",{staticClass:"form_input_bar"},[n("v-uni-input",{staticClass:"input_bar",attrs:{type:"text",placeholder:t.getLangs("nicknamePlaceholder")},model:{value:t.params.nickName,callback:function(e){t.$set(t.params,"nickName",e)},expression:"params.nickName"}})],1)],1)],1)],1),n("v-uni-view",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.updNicknameHandler.apply(void 0,arguments)}}},[t._v(t._s(t.getLangs("submit")))])],1)],1)},r=[]},ddc2:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".nickname_class[data-v-2b726f80]{padding:%?40?%}",""]),t.exports=e}}]);