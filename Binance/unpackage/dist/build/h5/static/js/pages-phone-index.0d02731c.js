(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-phone-index"],{"060f":function(e,t,n){"use strict";var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var r=a(n("1da1")),i=a(n("0696")),o=n("c2cf"),s={methods:{loginHandler:function(e){var t=this;return(0,r.default)(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(""!==e.uname){n.next=2;break}return n.abrupt("return",t.$tips.showToast(t.getLangs("accountPlaceholder")));case 2:if(""!==e.pwd){n.next=4;break}return n.abrupt("return",t.$tips.showToast(t.getLangs("passwordPlaceholder")));case 4:return t.$tips.showLoading(t.getLangs("loadingText")),n.next=7,(0,o.userLogin)(e);case 7:a=n.sent,t.$tips.hideLoading(),i.default.checkCode(a)?(t.$storage.setLocalData("token",a.data.token),t.$storage.setLocalData("nickname",a.data.ncikname),t.$tips.showToast(t.getLangs("success")),setTimeout((function(){t.reLaunch("/pages/home/index")}),1e3)):t.backTips(a);case 10:case"end":return n.stop()}}),n)})))()}}},u=s;t.default=u},"3f8b":function(e,t,n){"use strict";n.r(t);var a=n("d937"),r=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=r.a},"6fb0":function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"login_class unlogin_class"},[n("v-uni-view",{staticClass:"form_class"},[n("v-uni-view",{staticClass:"login_form_content"},[n("Phone",{ref:"phone"})],1),n("v-uni-view",{staticClass:"button",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.PhoneLoginHandler.apply(void 0,arguments)}}},[e._v(e._s(e.getLangs("submit")))])],1)],1)},i=[]},8135:function(e,t,n){"use strict";n.r(t);var a=n("6fb0"),r=n("3f8b");for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);var o,s=n("f0c5"),u=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,"5d3589e2",null,!1,a["a"],o);t["default"]=u.exports},c84c:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{isShowParent:!0}},onLoad:function(e){e.parentId?(this.form.parentId=e.parentId,this.isShowParent=!1):this.isShowParent=!0}},r=a;t.default=r},d937:function(e,t,n){"use strict";var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var r=a(n("1da1")),i=(a(n("ccdd")),a(n("f8c6"))),o=a(n("060f")),s=a(n("0fa7")),u=a(n("c84c")),c=a(n("0068")),d=(a(n("3b0a")),a(n("0696")),{name:"Forget",mixins:[i.default,o.default,s.default,u.default,c.default],data:function(){return{form:{parentId:""}}},methods:{PhoneLoginHandler:function(){var e=this;return(0,r.default)(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.merge()&&(n=e.merge(),a=Object.assign(n,e.form),delete a.verifyType,e.loginHandler(a));case 1:case"end":return t.stop()}}),t)})))()}},onLoad:function(){this.setTitle(this.getLangs("phoneLogin"))}});t.default=d}}]);