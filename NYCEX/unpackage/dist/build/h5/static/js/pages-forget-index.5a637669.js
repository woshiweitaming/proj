(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-forget-index"],{"02a6":function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return n}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"login_class unlogin_class"},[a("v-uni-view",{staticClass:"form_class"},[a("v-uni-view",{staticClass:"select_valid_action"},e._l(e.validActionList,(function(t,n){return a("v-uni-view",{key:n,class:["action",e.active===n?"on":""],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changeValidAction(n)}}},[e._v(e._s(e.getLangs(t))),a("v-uni-view",{staticClass:"line"})],1)})),1),a("v-uni-view",{staticClass:"form_class"},[a("v-uni-view",{staticClass:"login_form_content"},[0===e.active?a("Phone",{ref:"phone"}):e._e(),1===e.active?a("Email",{ref:"email"}):e._e()],1)],1),a("v-uni-view",{staticClass:"form_label"},[a("v-uni-view",{staticClass:"form_label_name"},[a("v-uni-text",{staticClass:"iconfont icon-lock"})],1),a("v-uni-view",{staticClass:"form_label_main"},[a("v-uni-view",{staticClass:"form_input_bar"},[a("v-uni-input",{staticClass:"input_bar",attrs:{type:"password",placeholder:e.getLangs("passwordPlaceholder")},model:{value:e.pwd,callback:function(t){e.pwd=t},expression:"pwd"}})],1)],1)],1),a("v-uni-view",{staticClass:"button",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.forgetHandler.apply(void 0,arguments)}}},[e._v(e._s(e.getLangs("submit")))])],1)],1)},s=[]},"060f":function(e,t,a){"use strict";var n=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var i=n(a("1da1")),s=n(a("0696")),r=a("c2cf"),c={methods:{loginHandler:function(e){var t=this;return(0,i.default)(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(""!==e.uname){a.next=2;break}return a.abrupt("return",t.$tips.showToast(t.getLangs("accountPlaceholder")));case 2:if(""!==e.pwd){a.next=4;break}return a.abrupt("return",t.$tips.showToast(t.getLangs("passwordPlaceholder")));case 4:return t.$tips.showLoading(t.getLangs("loadingText")),a.next=7,(0,r.userLogin)(e);case 7:n=a.sent,t.$tips.hideLoading(),s.default.checkCode(n)?(t.$storage.setLocalData("token",n.data.token),t.$storage.setLocalData("nickname",n.data.ncikname),t.$tips.showToast(t.getLangs("success")),setTimeout((function(){t.reLaunch("/pages/home/index")}),1e3)):t.backTips(n);case 10:case"end":return a.stop()}}),a)})))()}}},o=c;t.default=o},5566:function(e,t,a){"use strict";a.r(t);var n=a("02a6"),i=a("c82f");for(var s in i)"default"!==s&&function(e){a.d(t,e,(function(){return i[e]}))}(s);var r,c=a("f0c5"),o=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"09b7d32e",null,!1,n["a"],r);t["default"]=o.exports},c82f:function(e,t,a){"use strict";a.r(t);var n=a("dba7"),i=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,(function(){return n[e]}))}(s);t["default"]=i.a},dba7:function(e,t,a){"use strict";var n=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var i=n(a("1da1")),s=(n(a("ccdd")),n(a("f8c6"))),r=n(a("060f")),c=n(a("0fa7")),o=n(a("0068")),u=n(a("0696")),l=(n(a("3b0a")),n(a("28ea"))),d=n(a("4b6b")),f=a("c2cf"),v={name:"Forget",mixins:[s.default,r.default,c.default,o.default],data:function(){return{pwd:""}},components:{Phone:l.default,Email:d.default},methods:{forgetHandler:function(){var e=this;return(0,i.default)(regeneratorRuntime.mark((function t(){var a,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.merge()){t.next=13;break}if(""!==e.pwd){t.next=3;break}return t.abrupt("return",e.$tips.showToast(e.getLangs("passwordEmptyTips")));case 3:return a=Object.assign(e.merge(),{pwd:e.pwd}),delete a.checkType,delete a.verifyType,e.$tips.showLoading(e.getLangs("loadingText")),t.next=9,(0,f.retrievePwd)(a);case 9:n=t.sent,e.$tips.hideLoading(),e.backTips(n),u.default.checkCode(n)&&(i={uname:a.phone?a.phone:a.email,pwd:a.pwd},e.loginHandler(i));case 13:case"end":return t.stop()}}),t)})))()}},onLoad:function(){this.setTitle(this.getLangs("forget"))}};t.default=v}}]);