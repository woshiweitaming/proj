(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-valid-index"],{"4b96":function(e,t,n){"use strict";n.r(t);var a=n("9f22"),i=n("e4b5");for(var s in i)"default"!==s&&function(e){n.d(t,e,(function(){return i[e]}))}(s);var r,c=n("f0c5"),o=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"0b4a55eb",null,!1,a["a"],r);t["default"]=o.exports},"638e":function(e,t,n){"use strict";var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var i=a(n("1da1")),s=a(n("2b04")),r=a(n("9723")),c=a(n("6a9c")),o=a(n("6998")),u=a(n("121c")),l=n("3b9e"),d={name:"Valid",mixins:[s.default,c.default,r.default,o.default],methods:{registerHandler:function(){var e=this;return(0,i.default)(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.merge()){t.next=9;break}return n=e.merge(),e.$tips.showLoading(e.getLangs("loadingText")),t.next=5,(0,l.userRegister)(n);case 5:a=t.sent,e.$tips.hideLoading(),e.backTips(a),u.default.checkCode(a)&&(e.$tips.showToast(e.getLangs("success")),e.loginHandler(n));case 9:case"end":return t.stop()}}),t)})))()},validParams:function(e){return"undefined"!==typeof e&&(!(!e.uname||""===e.uname)&&(!(!e.nickName||""===e.nickName)&&!(!e.pwd||""===e.pwd)))}},onLoad:function(e){var t=this;this.validParams(e)?this.baseParams=e:(this.$tips.showToast("您填写的信息不完整，请重新填写"),setTimeout((function(){t.navigateTo("/pages/register/index"),t.back()}),1e3))}};t.default=d},9723:function(e,t,n){"use strict";var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var i=a(n("1da1")),s=a(n("121c")),r=n("3b9e"),c={methods:{loginHandler:function(e){var t=this;return(0,i.default)(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(0!=e.uname.length){n.next=2;break}return n.abrupt("return",t.$tips.showToast(t.getLangs("accountPlaceholder")));case 2:if(0!=e.pwd.length){n.next=4;break}return n.abrupt("return",t.$tips.showToast(t.getLangs("passwordPlaceholder")));case 4:return t.$tips.showLoading(t.getLangs("loadingText")),n.next=7,(0,r.userLogin)(e);case 7:a=n.sent,t.$tips.hideLoading(),s.default.checkCode(a)?(t.$storage.setLocalData("token",a.data.token),t.$storage.setLocalData("nickname",a.data.ncikname),t.$tips.showToast(t.getLangs("success")),setTimeout((function(){t.reLaunch("/pages/home/index")}),1e3)):t.backTips(a);case 10:case"end":return n.stop()}}),n)})))()}}},o=c;t.default=o},"9f22":function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"valid_class"},[n("v-uni-view",{staticClass:"valid_title"},[n("v-uni-text",{staticClass:"title_text"},[n("v-uni-text",{staticClass:"iconfont icon-undo back_arrow",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.backToPage("/pages/register/index")}}}),e._v(e._s(e.getLangs("validAccount")))],1),n("v-uni-text",{staticClass:"sub_title_text"},[e._v("Validate Account")])],1),n("v-uni-view",{staticClass:"select_valid_action"},e._l(e.validActionList,(function(t,a){return n("v-uni-view",{key:a,class:["action",e.active===a?"on":""],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changeValidAction(a)}}},[e._v(e._s(t))])})),1),n("v-uni-view",{staticClass:"form_class"},[n("v-uni-view",{staticClass:"login_form_content"},[0===e.active?n("Phone",{ref:"phone"}):e._e(),1===e.active?n("Email",{ref:"email"}):e._e()],1),n("v-uni-view",{staticClass:"button",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.registerHandler.apply(void 0,arguments)}}},[e._v(e._s(e.getLangs("register")))])],1)],1)},s=[]},e4b5:function(e,t,n){"use strict";n.r(t);var a=n("638e"),i=n.n(a);for(var s in a)"default"!==s&&function(e){n.d(t,e,(function(){return a[e]}))}(s);t["default"]=i.a}}]);