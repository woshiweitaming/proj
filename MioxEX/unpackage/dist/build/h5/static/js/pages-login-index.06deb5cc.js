(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-index"],{"0dc7":function(t,e,n){t.exports=n.p+"static/img/login_logo.0fb6d263.png"},"13ea":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".kefu_icon.left[data-v-85cb82be]{left:20px;right:auto;top:calc(0px + %?40?%)}",""]),t.exports=e},"2bfd":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".lang[data-v-49692211]{position:fixed;top:calc(0px + %?40?%);right:%?40?%;width:%?120?%;border-radius:%?40?%;border:1px solid #eee;display:-webkit-box;display:-webkit-flex;display:flex;padding:%?5?%}.lang .lang_items[data-v-49692211]{width:%?60?%;height:%?60?%;text-align:center;font-size:%?28?%;line-height:%?60?%;color:#666;box-sizing:border-box}.lang .lang_items.on[data-v-49692211]{background:#2970e6;color:#fff;border-radius:50%}.login_class[data-v-49692211]{padding-top:%?160?%}.third_login[data-v-49692211]{margin-top:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;padding-top:%?30?%\n\t/* border-top: 1px solid rgba(255,255,255,.1); */}.third_login .third_items[data-v-49692211]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center}.third_login .third_items .icon[data-v-49692211]{width:40px;height:40px}.login_tips[data-v-49692211]{display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?30?%;border-bottom:1px solid #eee;padding-bottom:%?30?%}.login_tips .w50[data-v-49692211]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;line-height:%?80?%;font-size:%?28?%;text-align:center;color:#666}.logo[data-v-49692211]{width:%?300?%;height:%?300?%;margin:0 auto %?40?% auto;display:block}",""]),t.exports=e},"2db2":function(t,e,n){"use strict";n.r(e);var a=n("ac29"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"37b5":function(t,e,n){"use strict";var a=n("dae9"),i=n.n(a);i.a},"4dfd":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{isShowParent:!0}},onLoad:function(t){t.parentId?(this.form.parentId=t.parentId,this.isShowParent=!1):this.isShowParent=!0}},i=a;e.default=i},"71a0":function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"login_class unlogin_class"},[a("v-uni-image",{staticClass:"logo",attrs:{src:n("0dc7")}}),a("Kefu",{attrs:{location:"left"}}),a("v-uni-view",{class:["lang",t.createOSClass]},t._l(t.langList,(function(e,n){return a("v-uni-view",{key:n,class:["lang_items",e.value===t.getGlobalLang?"on":""],on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.changeLang(e.value)}}},[t._v(t._s(e.name))])})),1),a("v-uni-view",{staticClass:"form_class"},[a("v-uni-view",{staticClass:"login_form_content"},[a("v-uni-view",{staticClass:"form_label"},[a("v-uni-view",{staticClass:"form_label_name"},[a("v-uni-text",{staticClass:"iconfont icon-group"})],1),a("v-uni-view",{staticClass:"form_label_main"},[a("v-uni-view",{staticClass:"form_input_bar"},[a("v-uni-input",{staticClass:"input_bar",attrs:{type:"text",placeholder:t.getLangs("accountPlaceholder")},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.changeInput.apply(void 0,arguments)}},model:{value:t.form.uname,callback:function(e){t.$set(t.form,"uname",e)},expression:"form.uname"}})],1)],1)],1),a("v-uni-view",{staticClass:"form_label"},[a("v-uni-view",{staticClass:"form_label_name"},[a("v-uni-text",{staticClass:"iconfont icon-lock"})],1),a("v-uni-view",{staticClass:"form_label_main"},[a("v-uni-view",{staticClass:"form_input_bar"},[a("v-uni-input",{staticClass:"input_bar",attrs:{type:"password",placeholder:t.getLangs("passwordPlaceholder")},model:{value:t.form.pwd,callback:function(e){t.$set(t.form,"pwd",e)},expression:"form.pwd"}})],1)],1)],1)],1),a("v-uni-view",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toLoginHandler.apply(void 0,arguments)}}},[t._v(t._s(t.getLangs("login")))])],1),a("v-uni-view",{staticClass:"login_tips"},[a("v-uni-view",{staticClass:"w50",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateTo("/pages/register/index")}}},[t._v(t._s(t.getLangs("register")))]),a("v-uni-view",{staticClass:"w50",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateTo("/pages/forget/index")}}},[t._v(t._s(t.getLangs("forget")))])],1),a("v-uni-view",{staticClass:"third_login"},t._l(t.thirdLoginList,(function(e,n){return a("v-uni-view",{key:n,staticClass:"third_items",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.thirdLoginHandler(e.type)}}},[a("v-uni-image",{staticClass:"icon",attrs:{src:e.icon}})],1)})),1)],1)},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}))},"85ed":function(t,e,n){var a=n("2bfd");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("695cf3d0",a,!0,{sourceMap:!1,shadowMode:!1})},8700:function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{class:["kefu_icon",t.location],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toServcie.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"iconfont icon-customerservice_fill"})],1)},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}))},"9f04":function(t,e,n){"use strict";var a=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("f3f3")),o=n("2f62"),r=a(n("f2f7")),s=a(n("a3a7")),c=a(n("4e02")),u=a(n("327c")),l={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,e){var n="undefined"===typeof e||"{}"===JSON.stringify(e)?"":"?".concat(c.default.convertObj(e));uni.navigateTo({url:t+n})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=s.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?r.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var e=getCurrentPages(),n=e[e.length-1];switch(t){case"opt":return n.options;case"route":return n.route;default:return n}},backToPage:function(t){s.default.getOS();this.navigateTo(t)},backTips:function(t){if(u.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,i.default)({createOSClass:function(){return"h5"}},(0,o.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=s.default.getOS()}},d=l;e.default=d},a3a7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},i=a;e.default=i},ac29:function(t,e,n){"use strict";var a=n("ee27");n("99af"),n("ac1f"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("f2f7")),o=a(n("9f04")),r=a(n("b2ae")),s=a(n("29ab")),c=a(n("4dfd")),u=(a(n("a3a7")),a(n("fe2c"))),l={name:"Login",mixins:[o.default,r.default,s.default,c.default],components:{Kefu:u.default},data:function(){return{form:{uname:"",pwd:"",parentId:""},langList:[{value:"en",name:"EN"},{value:"ja",name:"JA"}]}},methods:{toLoginHandler:function(){this.loginHandler(this.form)},thirdLoginHandler:function(t){if(1===t||2===t){var e=window.location.protocol+"//"+window.location.host;return void 0!==this.parentId&&""!==this.parentId?window.location.href="".concat(i.default.domain,"/pub/getLoginUrl?urlPath=").concat(e,"&type=").concat(t,"&parentId=").concat(this.parentId):window.location.href="".concat(i.default.domain,"/pub/getLoginUrl?urlPath=").concat(e,"&type=").concat(t)}if(3===t)return this.navigateTo("/pages/phone/index")},changeInput:function(t){var e=t.detail.value;this.form.uname=e.replace(/\s+/g,"")}},computed:{thirdLoginList:function(){return i.default.thirdLogin.h5}}};e.default=l},b2ae:function(t,e,n){"use strict";var a=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=a(n("c964")),o=a(n("327c")),r=n("7747"),s={methods:{loginHandler:function(t){var e=this;return(0,i.default)(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(""!==t.uname){n.next=2;break}return n.abrupt("return",e.$tips.showToast(e.getLangs("accountPlaceholder")));case 2:if(""!==t.pwd){n.next=4;break}return n.abrupt("return",e.$tips.showToast(e.getLangs("passwordPlaceholder")));case 4:return e.$tips.showLoading(e.getLangs("loadingText")),n.next=7,(0,r.userLogin)(t);case 7:a=n.sent,e.$tips.hideLoading(),o.default.checkCode(a)?(e.$storage.setLocalData("token",a.data.token),e.$storage.setLocalData("nickname",a.data.ncikname),e.$tips.showToast(e.getLangs("success")),setTimeout((function(){e.reLaunch("/pages/home/index")}),1e3)):e.backTips(a);case 10:case"end":return n.stop()}}),n)})))()}}},c=s;e.default=c},d6ae:function(t,e,n){"use strict";n.r(e);var a=n("71a0"),i=n("2db2");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("d8b9");var r,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"49692211",null,!1,a["a"],r);e["default"]=c.exports},d8b9:function(t,e,n){"use strict";var a=n("85ed"),i=n.n(a);i.a},d9d6:function(t,e,n){"use strict";var a=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("9f04")),o=a(n("29ab")),r={name:"Kefu",props:["location"],mixins:[i.default,o.default]};e.default=r},dae9:function(t,e,n){var a=n("13ea");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("790e2f06",a,!0,{sourceMap:!1,shadowMode:!1})},ed69:function(t,e,n){"use strict";n.r(e);var a=n("d9d6"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},fe2c:function(t,e,n){"use strict";n.r(e);var a=n("8700"),i=n("ed69");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("37b5");var r,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"85cb82be",null,!1,a["a"],r);e["default"]=c.exports}}]);