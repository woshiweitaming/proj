(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-index"],{"0916":function(t,e,a){var n=a("13d51");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("5b135d6a",n,!0,{sourceMap:!1,shadowMode:!1})},"0ad0":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530")),o=a("2f62"),r=n(a("16db")),c=n(a("5c80")),s=n(a("95ff")),u=n(a("9278")),d={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,e){var a="undefined"===typeof e||"{}"===JSON.stringify(e)?"":"?".concat(s.default.convertObj(e));uni.navigateTo({url:t+a})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=c.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?r.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var e=getCurrentPages(),a=e[e.length-1];switch(t){case"opt":return a.options;case"route":return a.route;default:return a}},backToPage:function(t){c.default.getOS();this.navigateTo(t)},backTips:function(t){if(u.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,i.default)({createOSClass:function(){return"h5"}},(0,o.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=c.default.getOS()}},l=d;e.default=l},"0c3a":function(t,e,a){"use strict";var n=a("4ea4");a("99af"),a("ac1f"),a("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("16db")),o=n(a("0ad0")),r=n(a("a95a")),c=n(a("0d96")),s=n(a("378b")),u=(n(a("5c80")),n(a("e361"))),d={name:"Login",mixins:[o.default,r.default,c.default,s.default],components:{Kefu:u.default},data:function(){return{form:{uname:"",pwd:"",parentId:""},langList:[{value:"en",name:"EN"},{value:"ja",name:"JA"}]}},methods:{toLoginHandler:function(){this.loginHandler(this.form)},thirdLoginHandler:function(t){if(1===t||2===t){var e=window.location.protocol+"//"+window.location.host;return void 0!==this.parentId&&""!==this.parentId?window.location.href="".concat(i.default.domain,"/pub/getLoginUrl?urlPath=").concat(e,"&type=").concat(t,"&parentId=").concat(this.parentId):window.location.href="".concat(i.default.domain,"/pub/getLoginUrl?urlPath=").concat(e,"&type=").concat(t)}if(3===t)return this.navigateTo("/pages/phone/index")},changeInput:function(t){var e=t.detail.value;this.form.uname=e.replace(/\s+/g,"")}},computed:{thirdLoginList:function(){return i.default.thirdLogin.h5}}};e.default=d},"13d51":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".kefu_icon.left[data-v-07dab9a3]{left:20px;right:auto;top:calc(0px + %?40?%)}",""]),t.exports=e},"27b0":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{class:["kefu_icon",t.location],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toServcie.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"iconfont icon-customerservice_fill"})],1)},o=[]},"378b":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{isShowParent:!0}},onLoad:function(t){t.parentId?(this.form.parentId=t.parentId,this.isShowParent=!1):this.isShowParent=!0}},i=n;e.default=i},"39b5":function(t,e,a){"use strict";a.r(e);var n=a("0c3a"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"5c80":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},i=n;e.default=i},"66c0":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"login_class unlogin_class"},[n("v-uni-image",{staticClass:"logo",attrs:{src:a("fae9")}}),n("Kefu",{attrs:{location:"left"}}),n("v-uni-view",{class:["lang",t.createOSClass]},t._l(t.langList,(function(e,a){return n("v-uni-view",{key:a,class:["lang_items",e.value===t.getGlobalLang?"on":""],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.changeLang(e.value)}}},[t._v(t._s(e.name))])})),1),n("v-uni-view",{staticClass:"form_class"},[n("v-uni-view",{staticClass:"login_form_content"},[n("v-uni-view",{staticClass:"form_label"},[n("v-uni-view",{staticClass:"form_label_name"},[n("v-uni-text",{staticClass:"iconfont icon-group"})],1),n("v-uni-view",{staticClass:"form_label_main"},[n("v-uni-view",{staticClass:"form_input_bar"},[n("v-uni-input",{staticClass:"input_bar",attrs:{type:"text",placeholder:t.getLangs("accountPlaceholder")},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.changeInput.apply(void 0,arguments)}},model:{value:t.form.uname,callback:function(e){t.$set(t.form,"uname",e)},expression:"form.uname"}})],1)],1)],1),n("v-uni-view",{staticClass:"form_label"},[n("v-uni-view",{staticClass:"form_label_name"},[n("v-uni-text",{staticClass:"iconfont icon-lock"})],1),n("v-uni-view",{staticClass:"form_label_main"},[n("v-uni-view",{staticClass:"form_input_bar"},[n("v-uni-input",{staticClass:"input_bar",attrs:{type:"password",placeholder:t.getLangs("passwordPlaceholder")},model:{value:t.form.pwd,callback:function(e){t.$set(t.form,"pwd",e)},expression:"form.pwd"}})],1)],1)],1)],1),n("v-uni-view",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toLoginHandler.apply(void 0,arguments)}}},[t._v(t._s(t.getLangs("login")))])],1),n("v-uni-view",{staticClass:"login_tips"},[n("v-uni-view",{staticClass:"w50",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateTo("/pages/register/index")}}},[t._v(t._s(t.getLangs("register")))]),n("v-uni-view",{staticClass:"w50",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateTo("/pages/forget/index")}}},[t._v(t._s(t.getLangs("forget")))])],1),n("v-uni-view",{staticClass:"third_login"},t._l(t.thirdLoginList,(function(e,a){return n("v-uni-view",{key:a,staticClass:"third_items",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.thirdLoginHandler(e.type)}}},[n("v-uni-image",{staticClass:"icon",attrs:{src:e.icon}})],1)})),1)],1)},o=[]},7230:function(t,e,a){var n=a("fb30");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("250f004e",n,!0,{sourceMap:!1,shadowMode:!1})},"86c8":function(t,e,a){"use strict";var n=a("0916"),i=a.n(n);i.a},"8e08":function(t,e,a){"use strict";var n=a("7230"),i=a.n(n);i.a},a4c5:function(t,e,a){"use strict";a.r(e);var n=a("adeb"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},a95a:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var i=n(a("1da1")),o=n(a("9278")),r=a("f90e"),c={methods:{loginHandler:function(t){var e=this;return(0,i.default)(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(0!=t.uname.length){a.next=2;break}return a.abrupt("return",e.$tips.showToast(e.getLangs("accountPlaceholder")));case 2:if(0!=t.pwd.length){a.next=4;break}return a.abrupt("return",e.$tips.showToast(e.getLangs("passwordPlaceholder")));case 4:return e.$tips.showLoading(e.getLangs("loadingText")),a.next=7,(0,r.userLogin)(t);case 7:n=a.sent,e.$tips.hideLoading(),o.default.checkCode(n)?(e.$storage.setLocalData("token",n.data.token),e.$storage.setLocalData("nickname",n.data.ncikname),e.$tips.showToast(e.getLangs("success")),setTimeout((function(){e.reLaunch("/pages/home/index")}),1e3)):e.backTips(n);case 10:case"end":return a.stop()}}),a)})))()}}},s=c;e.default=s},adeb:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("0ad0")),o=n(a("0d96")),r={name:"Kefu",props:["location"],mixins:[i.default,o.default]};e.default=r},cfbc:function(t,e,a){"use strict";a.r(e);var n=a("66c0"),i=a("39b5");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("8e08");var r,c=a("f0c5"),s=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"7dcd21dc",null,!1,n["a"],r);e["default"]=s.exports},e361:function(t,e,a){"use strict";a.r(e);var n=a("27b0"),i=a("a4c5");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("86c8");var r,c=a("f0c5"),s=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"07dab9a3",null,!1,n["a"],r);e["default"]=s.exports},fae9:function(t,e,a){t.exports=a.p+"static/img/login_logo.9d6d959f.png"},fb30:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-7dcd21dc]{background:#20222c}.lang[data-v-7dcd21dc]{position:fixed;top:calc(0px + %?40?%);right:%?40?%;width:%?150?%;border-radius:%?40?%;border:1px solid hsla(0,0%,100%,.1);display:-webkit-box;display:-webkit-flex;display:flex;padding:%?5?%}.lang .lang_items[data-v-7dcd21dc]{width:%?70?%;height:%?60?%;text-align:center;font-size:%?28?%;line-height:%?60?%;color:#666}.lang .lang_items.on[data-v-7dcd21dc]{background:#4944b3;color:#fff;border-radius:50%}.login_class[data-v-7dcd21dc]{padding-top:%?160?%}.third_login[data-v-7dcd21dc]{margin-top:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;padding-top:%?30?%\n\t/* border-top: 1px solid rgba(255,255,255,.1); */}.third_login .third_items[data-v-7dcd21dc]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center}.third_login .third_items .icon[data-v-7dcd21dc]{width:40px;height:40px}.login_tips[data-v-7dcd21dc]{display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?30?%;border-bottom:1px solid hsla(0,0%,100%,.1);padding-bottom:%?30?%}.login_tips .w50[data-v-7dcd21dc]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;line-height:%?80?%;font-size:%?28?%;text-align:center;color:#fff}.logo[data-v-7dcd21dc]{width:%?300?%;height:%?300?%;margin:0 auto %?80?% auto;display:block}body.?%PAGE?%[data-v-7dcd21dc]{background:#20222c}",""]),t.exports=e}}]);