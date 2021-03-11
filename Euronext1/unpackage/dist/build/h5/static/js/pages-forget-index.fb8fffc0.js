(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-forget-index"],{"74ec":function(e,t,n){"use strict";var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var i=a(n("1da1")),s=(a(n("6c58")),a(n("2b04"))),r=a(n("9723")),c=a(n("6a9c")),o=a(n("6998")),u=a(n("121c")),l=(a(n("4a06")),a(n("ef71"))),d=a(n("ac5b")),f=n("3b9e"),v={name:"Forget",mixins:[s.default,r.default,c.default,o.default],data:function(){return{pwd:""}},components:{Phone:l.default,Email:d.default},methods:{forgetHandler:function(){var e=this;return(0,i.default)(regeneratorRuntime.mark((function t(){var n,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.merge()){t.next=13;break}if(""!==e.pwd){t.next=3;break}return t.abrupt("return",e.$tips.showToast(e.getLangs("passwordEmptyTips")));case 3:return n=Object.assign(e.merge(),{pwd:e.pwd}),delete n.checkType,delete n.verifyType,e.$tips.showLoading(e.getLangs("loadingText")),t.next=9,(0,f.retrievePwd)(n);case 9:a=t.sent,e.$tips.hideLoading(),e.backTips(a),u.default.checkCode(a)&&(i={uname:n.phone?n.phone:n.email,pwd:n.pwd},e.loginHandler(i));case 13:case"end":return t.stop()}}),t)})))()}},onLoad:function(){this.setTitle(this.getLangs("forget"))}};t.default=v},9723:function(e,t,n){"use strict";var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var i=a(n("1da1")),s=a(n("121c")),r=n("3b9e"),c={methods:{loginHandler:function(e){var t=this;return(0,i.default)(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(""!==e.uname){n.next=2;break}return n.abrupt("return",t.$tips.showToast(t.getLangs("accountPlaceholder")));case 2:if(""!==e.pwd){n.next=4;break}return n.abrupt("return",t.$tips.showToast(t.getLangs("passwordPlaceholder")));case 4:return t.$tips.showLoading(t.getLangs("loadingText")),n.next=7,(0,r.userLogin)(e);case 7:a=n.sent,t.$tips.hideLoading(),s.default.checkCode(a)?(t.$storage.setLocalData("token",a.data.token),t.$storage.setLocalData("nickname",a.data.ncikname),t.$tips.showToast(t.getLangs("success")),setTimeout((function(){t.reLaunch("/pages/home/index")}),1e3)):t.backTips(a);case 10:case"end":return n.stop()}}),n)})))()}}},o=c;t.default=o},c79c:function(e,t,n){"use strict";n.r(t);var a=n("74ec"),i=n.n(a);for(var s in a)"default"!==s&&function(e){n.d(t,e,(function(){return a[e]}))}(s);t["default"]=i.a},dd25:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"login_class unlogin_class"},[n("v-uni-view",{staticClass:"form_class"},[n("v-uni-view",{staticClass:"select_valid_action"},e._l(e.validActionList,(function(t,a){return n("v-uni-view",{key:a,class:["action",e.active===a?"on":""],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changeValidAction(a)}}},[e._v(e._s(e.getLangs(t))),n("v-uni-view",{staticClass:"line"})],1)})),1),n("v-uni-view",{staticClass:"form_class"},[n("v-uni-view",{staticClass:"login_form_content"},[0===e.active?n("Phone",{ref:"phone"}):e._e(),1===e.active?n("Email",{ref:"email"}):e._e()],1)],1),n("v-uni-view",{staticClass:"form_label"},[n("v-uni-view",{staticClass:"form_label_name"},[n("v-uni-text",{staticClass:"iconfont icon-lock"})],1),n("v-uni-view",{staticClass:"form_label_main"},[n("v-uni-view",{staticClass:"form_input_bar"},[n("v-uni-input",{staticClass:"input_bar",attrs:{type:"password",placeholder:e.getLangs("passwordPlaceholder")},model:{value:e.pwd,callback:function(t){e.pwd=t},expression:"pwd"}})],1)],1)],1),n("v-uni-view",{staticClass:"button",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.forgetHandler.apply(void 0,arguments)}}},[e._v(e._s(e.getLangs("submit")))])],1)],1)},s=[]},ed0f:function(e,t,n){"use strict";n.r(t);var a=n("dd25"),i=n("c79c");for(var s in i)"default"!==s&&function(e){n.d(t,e,(function(){return i[e]}))}(s);var r,c=n("f0c5"),o=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"09b7d32e",null,!1,a["a"],r);t["default"]=o.exports}}]);