(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-valid-index"],{"0b89":function(e,t,a){"use strict";a.r(t);var n=a("eda6"),i=a("6116");for(var s in i)"default"!==s&&function(e){a.d(t,e,(function(){return i[e]}))}(s);var r,c=a("f0c5"),o=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"0b4a55eb",null,!1,n["a"],r);t["default"]=o.exports},6116:function(e,t,a){"use strict";a.r(t);var n=a("f023"),i=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,(function(){return n[e]}))}(s);t["default"]=i.a},b0ff:function(e,t,a){"use strict";var n=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var i=n(a("1da1")),s=n(a("b6b1")),r=a("96c3"),c={methods:{loginHandler:function(e){var t=this;return(0,i.default)(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(""!==e.uname){a.next=2;break}return a.abrupt("return",t.$tips.showToast(t.getLangs("accountPlaceholder")));case 2:if(""!==e.pwd){a.next=4;break}return a.abrupt("return",t.$tips.showToast(t.getLangs("passwordPlaceholder")));case 4:return t.$tips.showLoading(t.getLangs("loadingText")),a.next=7,(0,r.userLogin)(e);case 7:n=a.sent,t.$tips.hideLoading(),s.default.checkCode(n)?(t.$storage.setLocalData("token",n.data.token),t.$storage.setLocalData("nickname",n.data.ncikname),t.$tips.showToast(t.getLangs("success")),setTimeout((function(){t.reLaunch("/pages/home/index")}),1e3)):t.backTips(n);case 10:case"end":return a.stop()}}),a)})))()}}},o=c;t.default=o},eda6:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return n}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"valid_class"},[a("v-uni-view",{staticClass:"valid_title"},[a("v-uni-text",{staticClass:"title_text"},[a("v-uni-text",{staticClass:"iconfont icon-undo back_arrow",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.backToPage("/pages/register/index")}}}),e._v(e._s(e.getLangs("validAccount")))],1),a("v-uni-text",{staticClass:"sub_title_text"},[e._v("Validate Account")])],1),a("v-uni-view",{staticClass:"select_valid_action"},e._l(e.validActionList,(function(t,n){return a("v-uni-view",{key:n,class:["action",e.active===n?"on":""],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changeValidAction(n)}}},[e._v(e._s(t))])})),1),a("v-uni-view",{staticClass:"form_class"},[a("v-uni-view",{staticClass:"login_form_content"},[0===e.active?a("Phone",{ref:"phone"}):e._e(),1===e.active?a("Email",{ref:"email"}):e._e()],1),a("v-uni-view",{staticClass:"button",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.registerHandler.apply(void 0,arguments)}}},[e._v(e._s(e.getLangs("register")))])],1)],1)},s=[]},f023:function(e,t,a){"use strict";var n=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var i=n(a("1da1")),s=n(a("f70c")),r=n(a("b0ff")),c=n(a("ab9d")),o=n(a("1338")),u=n(a("b6b1")),d=a("96c3"),l={name:"Valid",mixins:[s.default,c.default,r.default,o.default],methods:{registerHandler:function(){var e=this;return(0,i.default)(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.merge()){t.next=9;break}return a=e.merge(),e.$tips.showLoading(e.getLangs("loadingText")),t.next=5,(0,d.userRegister)(a);case 5:n=t.sent,e.$tips.hideLoading(),e.backTips(n),u.default.checkCode(n)&&(e.$tips.showToast(e.getLangs("success")),e.loginHandler(a));case 9:case"end":return t.stop()}}),t)})))()},validParams:function(e){return"undefined"!==typeof e&&(!(!e.uname||""===e.uname)&&(!(!e.nickName||""===e.nickName)&&!(!e.pwd||""===e.pwd)))}},onLoad:function(e){var t=this;this.validParams(e)?this.baseParams=e:(this.$tips.showToast("您填写的信息不完整，请重新填写"),setTimeout((function(){t.navigateTo("/pages/register/index"),t.back()}),1e3))}};t.default=l}}]);