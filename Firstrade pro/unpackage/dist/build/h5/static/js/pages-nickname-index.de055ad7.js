(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-nickname-index"],{"32f5":function(t,e,a){"use strict";a.r(e);var n=a("590c1"),i=a("8b81");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("4ad1");var u,c=a("f0c5"),s=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"6a777da6",null,!1,n["a"],u);e["default"]=s.exports},"4ad1":function(t,e,a){"use strict";var n=a("e96e"),i=a.n(n);i.a},"590c1":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"nickname_class"},[a("v-uni-view",{staticClass:"form_class"},[a("v-uni-view",{staticClass:"login_form_content"},[a("v-uni-view",{staticClass:"form_label"},[a("v-uni-view",{staticClass:"form_label_name"},[a("v-uni-text",{staticClass:"iconfont icon-barrage"})],1),a("v-uni-view",{staticClass:"form_label_main"},[a("v-uni-view",{staticClass:"form_input_bar"},[a("v-uni-input",{staticClass:"input_bar",attrs:{type:"text",placeholder:t.getLangs("nicknamePlaceholder")},model:{value:t.params.nickName,callback:function(e){t.$set(t.params,"nickName",e)},expression:"params.nickName"}})],1)],1)],1)],1),a("v-uni-view",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.updNicknameHandler.apply(void 0,arguments)}}},[t._v(t._s(t.getLangs("submit")))])],1)],1)},r=[]},"8b81":function(t,e,a){"use strict";a.r(e);var n=a("cb54"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"92ee":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".nickname_class[data-v-6a777da6]{padding:%?40?%}",""]),t.exports=e},abdf:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},i=n;e.default=i},cb54:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var i=n(a("1da1")),r=n(a("aae5")),u=n(a("eac9")),c=a("9501"),s={name:"Nickname",mixins:[r.default,u.default],data:function(){return{params:{nickName:""}}},methods:{updNicknameHandler:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==t.params.nickName){e.next=2;break}return e.abrupt("return",t.$tips.showToast(t.getLangs("nicknamePlaceholder")));case 2:return e.next=4,(0,c.updNickName)(t.params);case 4:a=e.sent,t.backTips(a);case 6:case"end":return e.stop()}}),e)})))()}},onShow:function(){this.setTitle(this.getLangs("nickname"))}};e.default=s},e96e:function(t,e,a){var n=a("92ee");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("98200fea",n,!0,{sourceMap:!1,shadowMode:!1})},eac9:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530")),r=a("2f62"),u=n(a("34ec")),c=n(a("abdf")),s=n(a("967f")),o=n(a("f737")),f={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,e){var a="undefined"===typeof e||"{}"===JSON.stringify(e)?"":"?".concat(s.default.convertObj(e));uni.navigateTo({url:t+a})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=c.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?u.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var e=getCurrentPages(),a=e[e.length-1];switch(t){case"opt":return a.options;case"route":return a.route;default:return a}},backToPage:function(t){c.default.getOS();this.navigateTo(t)},backTips:function(t){if(o.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,i.default)({createOSClass:function(){return"h5"}},(0,r.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=c.default.getOS()}},l=f;e.default=l}}]);