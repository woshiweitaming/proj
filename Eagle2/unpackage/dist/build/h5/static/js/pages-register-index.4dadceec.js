(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-index"],{"0480":function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".register_class[data-v-571405df]{padding-top:%?20?%!important}",""]),e.exports=t},2291:function(e,t,a){"use strict";var n=a("fa32"),i=a.n(n);i.a},"23be":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{isShowParent:!0}},onLoad:function(e){e.parentId?(this.form.parentId=e.parentId,this.isShowParent=!1):this.isShowParent=!0}},i=n;t.default=i},"30b9":function(e,t,a){"use strict";a.r(t);var n=a("6b60"),i=a("4fa4");for(var s in i)"default"!==s&&function(e){a.d(t,e,(function(){return i[e]}))}(s);a("2291");var r,o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"571405df",null,!1,n["a"],r);t["default"]=c.exports},"4fa4":function(e,t,a){"use strict";a.r(t);var n=a("c397"),i=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,(function(){return n[e]}))}(s);t["default"]=i.a},"6b60":function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return n}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"register_class unlogin_class"},[a("v-uni-view",{staticClass:"form_class"},[a("v-uni-view",{staticClass:"login_form_content"},[a("v-uni-view",{staticClass:"valid_class"},[a("v-uni-view",{staticClass:"select_valid_action"},e._l(e.validActionList,(function(t,n){return a("v-uni-view",{key:n,class:["action",e.active===n?"on":""],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changeValidAction(n)}}},[e._v(e._s(e.getLangs(t))),a("v-uni-view",{staticClass:"line"})],1)})),1)],1),0===e.active?a("Phone",{ref:"phone"}):e._e(),1===e.active?a("Email",{ref:"email"}):e._e(),a("v-uni-view",{staticClass:"form_label"},[a("v-uni-view",{staticClass:"form_label_name"},[a("v-uni-text",{staticClass:"iconfont icon-lock"})],1),a("v-uni-view",{staticClass:"form_label_main"},[a("v-uni-view",{staticClass:"form_input_bar"},[a("v-uni-input",{staticClass:"input_bar",attrs:{type:"password",placeholder:e.getLangs("passwordPlaceholder")},model:{value:e.form.pwd,callback:function(t){e.$set(e.form,"pwd",t)},expression:"form.pwd"}})],1)],1)],1),e.isShowParent?a("v-uni-view",{staticClass:"form_label"},[a("v-uni-view",{staticClass:"form_label_name"},[a("v-uni-text",{staticClass:"iconfont icon-headlines"})],1),a("v-uni-view",{staticClass:"form_label_main"},[a("v-uni-view",{staticClass:"form_input_bar"},[a("v-uni-input",{staticClass:"input_bar",attrs:{type:"text",placeholder:e.getLangs("recommendationCodePlaceholder")},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.changeInputParentid.apply(void 0,arguments)}},model:{value:e.form.parentId,callback:function(t){e.$set(e.form,"parentId",t)},expression:"form.parentId"}})],1)],1)],1):e._e()],1),a("v-uni-view",{staticClass:"button",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.registerHandler.apply(void 0,arguments)}}},[e._v(e._s(e.getLangs("submit")))])],1)],1)},s=[]},b40f:function(e,t,a){"use strict";var n=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var i=n(a("1da1")),s=n(a("824b")),r=a("8d74"),o={methods:{loginHandler:function(e){var t=this;return(0,i.default)(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(0!=e.uname.length){a.next=2;break}return a.abrupt("return",t.$tips.showToast(t.getLangs("accountPlaceholder")));case 2:if(0!=e.pwd.length){a.next=4;break}return a.abrupt("return",t.$tips.showToast(t.getLangs("passwordPlaceholder")));case 4:return t.$tips.showLoading(t.getLangs("loadingText")),a.next=7,(0,r.userLogin)(e);case 7:n=a.sent,t.$tips.hideLoading(),s.default.checkCode(n)?(t.$storage.setLocalData("token",n.data.token),t.$storage.setLocalData("nickname",n.data.ncikname),t.$tips.showToast(t.getLangs("success")),setTimeout((function(){t.reLaunch("/pages/home/index")}),1e3)):t.backTips(n);case 10:case"end":return a.stop()}}),a)})))()}}},c=o;t.default=c},c397:function(e,t,a){"use strict";var n=a("4ea4");a("ac1f"),a("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var i=n(a("1da1")),s=(n(a("95bf")),n(a("7eaf"))),r=n(a("4b7a")),o=n(a("23be")),c=n(a("b40f")),u=n(a("b61f")),l=n(a("824b")),d=n(a("0a9e")),f=n(a("ea78")),v=a("8d74"),p={name:"Login",mixins:[s.default,r.default,o.default,u.default,c.default],data:function(){return{form:{pwd:"",parentId:""}}},components:{Phone:d.default,Email:f.default},methods:{registerHandler:function(){var e=this;return(0,i.default)(regeneratorRuntime.mark((function t(){var a,n,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.merge()){t.next=12;break}if(0!=e.form.pwd.length){t.next=3;break}return t.abrupt("return",e.$tips.showToast(e.getLangs("passwordPlaceholder")));case 3:return a=e.merge(),n=Object.assign(a,e.form),e.$tips.showLoading(e.getLangs("loadingText")),t.next=8,(0,v.userRegister)(n);case 8:i=t.sent,e.$tips.hideLoading(),e.backTips(i),l.default.checkCode(i)&&(s={uname:n.phone?n.phone:n.email,pwd:e.form.pwd},e.loginHandler(s));case 12:case"end":return t.stop()}}),t)})))()},changeInputUname:function(e){var t=e.detail.value;this.form.uname=t.replace(/\s+/g,"")},changeInputNickname:function(e){var t=e.detail.value;this.form.nickName=t.replace(/\s+/g,"")},changeInputParentid:function(e){var t=this;setTimeout((function(){var a=e.detail.value,n=/^([0]|[1-9][0-9]*)$/;n.test(a)?t.form.parentId=a:t.form.parentId=""}),50)}},onLoad:function(){this.setTitle(this.getLangs("register"))}};t.default=p},fa32:function(e,t,a){var n=a("0480");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("c97be2e0",n,!0,{sourceMap:!1,shadowMode:!1})}}]);