(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-index"],{"1e41":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{class:["kefu_icon",t.location],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toServcie.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"iconfont icon-customerservice_fill"})],1)},o=[]},"212e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},i=a;e.default=i},"2b61":function(t,e,n){"use strict";var a=n("4ea4");n("99af"),n("ac1f"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5be9")),o=a(n("cc16")),r=a(n("6240")),s=a(n("cecb")),c=a(n("9399")),u=(a(n("212e")),a(n("385f"))),l={name:"Login",mixins:[o.default,r.default,s.default,c.default],components:{Kefu:u.default},data:function(){return{form:{uname:"",pwd:"",parentId:""},langList:[{value:"en",name:"EN"},{value:"cns",name:"繁"}]}},methods:{toLoginHandler:function(){this.loginHandler(this.form)},thirdLoginHandler:function(t){if(1===t||2===t){var e=window.location.protocol+"//"+window.location.host;return void 0!==this.parentId&&""!==this.parentId?window.location.href="".concat(i.default.domain,"/pub/getLoginUrl?urlPath=").concat(e,"&type=").concat(t,"&parentId=").concat(this.parentId):window.location.href="".concat(i.default.domain,"/pub/getLoginUrl?urlPath=").concat(e,"&type=").concat(t)}if(3===t)return this.navigateTo("/pages/phone/index")},changeInput:function(t){var e=t.detail.value;this.form.uname=e.replace(/\s+/g,"")}},computed:{thirdLoginList:function(){return i.default.thirdLogin.h5}}};e.default=l},3201:function(t,e,n){var a=n("345b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("4cba23ea",a,!0,{sourceMap:!1,shadowMode:!1})},"345b":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".kefu_icon.left[data-v-85cb82be]{left:20px;right:auto;top:calc(0px + %?40?%)}",""]),t.exports=e},"372b":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"login_class unlogin_class"},[a("v-uni-image",{staticClass:"logo",attrs:{src:n("801b")}}),a("Kefu",{attrs:{location:"left"}}),a("v-uni-view",{class:["lang",t.createOSClass]},t._l(t.langList,(function(e,n){return a("v-uni-view",{key:n,class:["lang_items",e.value===t.getGlobalLang?"on":""],on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.changeLang(e.value)}}},[t._v(t._s(e.name))])})),1),a("v-uni-view",{staticClass:"form_class"},[a("v-uni-view",{staticClass:"login_form_content"},[a("v-uni-view",{staticClass:"form_label"},[a("v-uni-view",{staticClass:"form_label_name"},[a("v-uni-text",{staticClass:"iconfont icon-group"})],1),a("v-uni-view",{staticClass:"form_label_main"},[a("v-uni-view",{staticClass:"form_input_bar"},[a("v-uni-input",{staticClass:"input_bar",attrs:{type:"text",placeholder:t.getLangs("accountPlaceholder")},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.changeInput.apply(void 0,arguments)}},model:{value:t.form.uname,callback:function(e){t.$set(t.form,"uname",e)},expression:"form.uname"}})],1)],1)],1),a("v-uni-view",{staticClass:"form_label"},[a("v-uni-view",{staticClass:"form_label_name"},[a("v-uni-text",{staticClass:"iconfont icon-lock"})],1),a("v-uni-view",{staticClass:"form_label_main"},[a("v-uni-view",{staticClass:"form_input_bar"},[a("v-uni-input",{staticClass:"input_bar",attrs:{type:"password",placeholder:t.getLangs("passwordPlaceholder")},model:{value:t.form.pwd,callback:function(e){t.$set(t.form,"pwd",e)},expression:"form.pwd"}})],1)],1)],1)],1),a("v-uni-view",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toLoginHandler.apply(void 0,arguments)}}},[t._v(t._s(t.getLangs("login")))])],1),a("v-uni-view",{staticClass:"login_tips"},[a("v-uni-view",{staticClass:"w50",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateTo("/pages/register/index")}}},[t._v(t._s(t.getLangs("register")))]),a("v-uni-view",{staticClass:"w50",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateTo("/pages/forget/index")}}},[t._v(t._s(t.getLangs("forget")))])],1),a("v-uni-view",{staticClass:"third_login"},t._l(t.thirdLoginList,(function(e,n){return a("v-uni-view",{key:n,staticClass:"third_items",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.thirdLoginHandler(e.type)}}},[a("v-uni-image",{staticClass:"icon",attrs:{src:e.icon}})],1)})),1)],1)},o=[]},"385f":function(t,e,n){"use strict";n.r(e);var a=n("1e41"),i=n("cfd2");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("9195");var r,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"85cb82be",null,!1,a["a"],r);e["default"]=c.exports},6240:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=a(n("1da1")),o=a(n("a591")),r=n("e361"),s={methods:{loginHandler:function(t){var e=this;return(0,i.default)(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(""!==t.uname){n.next=2;break}return n.abrupt("return",e.$tips.showToast(e.getLangs("accountPlaceholder")));case 2:if(""!==t.pwd){n.next=4;break}return n.abrupt("return",e.$tips.showToast(e.getLangs("passwordPlaceholder")));case 4:return e.$tips.showLoading(e.getLangs("loadingText")),n.next=7,(0,r.userLogin)(t);case 7:a=n.sent,e.$tips.hideLoading(),o.default.checkCode(a)?(e.$storage.setLocalData("token",a.data.token),e.$storage.setLocalData("nickname",a.data.ncikname),e.$tips.showToast(e.getLangs("success")),setTimeout((function(){e.reLaunch("/pages/home/index")}),1e3)):e.backTips(a);case 10:case"end":return n.stop()}}),n)})))()}}},c=s;e.default=c},"640f":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("cc16")),o=a(n("cecb")),r={name:"Kefu",props:["location"],mixins:[i.default,o.default]};e.default=r},"6b10":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-df2a54f2]{background:#fff}.lang[data-v-df2a54f2]{position:fixed;top:calc(0px + %?40?%);right:%?40?%;width:%?130?%;border-radius:%?40?%;border:1px solid #eee;display:-webkit-box;display:-webkit-flex;display:flex;padding:%?5?%}.lang .lang_items[data-v-df2a54f2]{width:%?60?%;height:%?60?%;text-align:center;font-size:%?28?%;line-height:%?60?%;color:#666}.lang .lang_items.on[data-v-df2a54f2]{background:#007aff;color:#fff;border-radius:50%}.login_class[data-v-df2a54f2]{padding-top:%?160?%}.third_login[data-v-df2a54f2]{margin-top:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;padding-top:%?30?%\n\t/* border-top: 1px solid rgba(255,255,255,.1); */}.third_login .third_items[data-v-df2a54f2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center}.third_login .third_items .icon[data-v-df2a54f2]{width:40px;height:40px}.login_tips[data-v-df2a54f2]{display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?30?%;border-bottom:1px solid #eee;padding-bottom:%?30?%}.login_tips .w50[data-v-df2a54f2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;line-height:%?80?%;font-size:%?28?%;text-align:center;color:#333}.logo[data-v-df2a54f2]{width:%?300?%;height:%?300?%;margin:0 auto %?80?% auto;display:block}body.?%PAGE?%[data-v-df2a54f2]{background:#fff}",""]),t.exports=e},"801b":function(t,e,n){t.exports=n.p+"static/img/login_logo.85d52baf.png"},9195:function(t,e,n){"use strict";var a=n("3201"),i=n.n(a);i.a},9399:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{isShowParent:!0}},onLoad:function(t){t.parentId?(this.form.parentId=t.parentId,this.isShowParent=!1):this.isShowParent=!0}},i=a;e.default=i},b0e9:function(t,e,n){"use strict";n.r(e);var a=n("2b61"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},b0f1:function(t,e,n){"use strict";n.r(e);var a=n("372b"),i=n("b0e9");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("dd82");var r,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"df2a54f2",null,!1,a["a"],r);e["default"]=c.exports},cc16:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530")),o=n("2f62"),r=a(n("5be9")),s=a(n("212e")),c=a(n("5f81")),u=a(n("a591")),l={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,e){var n="undefined"===typeof e||"{}"===JSON.stringify(e)?"":"?".concat(c.default.convertObj(e));uni.navigateTo({url:t+n})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=s.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?r.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var e=getCurrentPages(),n=e[e.length-1];switch(t){case"opt":return n.options;case"route":return n.route;default:return n}},backToPage:function(t){s.default.getOS();this.navigateTo(t)},backTips:function(t){if(u.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,i.default)({createOSClass:function(){return"h5"}},(0,o.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=s.default.getOS()}},f=l;e.default=f},cfd2:function(t,e,n){"use strict";n.r(e);var a=n("640f"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},d6b3:function(t,e,n){var a=n("6b10");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("b44b21de",a,!0,{sourceMap:!1,shadowMode:!1})},dd82:function(t,e,n){"use strict";var a=n("d6b3"),i=n.n(a);i.a}}]);