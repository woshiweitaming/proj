(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-certification-advanced"],{"0388":function(t,e,n){var a=n("6243");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("6e260b38",a,!0,{sourceMap:!1,shadowMode:!1})},1100:function(t,e,n){"use strict";n.r(e);var a=n("ba5e"),i=n("5c76");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("5d88");var s,c=n("f0c5"),o=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"de79b7e6",null,!1,a["a"],s);e["default"]=o.exports},"17ec":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".images_list[data-v-de79b7e6]{padding:%?40?%}.images_list .labels[data-v-de79b7e6]{width:100%;height:%?380?%;margin:%?20?% auto;position:relative}.images_list .labels .img[data-v-de79b7e6]{width:100%;height:%?380?%}.tips[data-v-de79b7e6]{width:100%;position:absolute;top:70%;left:0;text-align:center}",""]),t.exports=e},"35cf":function(t,e,n){"use strict";n.r(e);var a=n("94b0"),i=n("b1ed");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("503b");var s,c=n("f0c5"),o=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"24e149a7",null,!1,a["a"],s);e["default"]=o.exports},"394c":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530")),r=n("2f62"),s=a(n("1593")),c=a(n("bceb")),o=a(n("7f88")),u=a(n("1100")),d={name:"AdvancedCertification",mixins:[s.default,c.default],data:function(){return{stepList:[]}},components:{Audlt:o.default,Upload:u.default},methods:(0,i.default)({createList:function(){this.stepList=[{name:this.getLangs("uploadIdcard"),icon:""},{name:this.getLangs("audlt"),icon:""}]}},(0,r.mapMutations)({setAdvancedCertCurrent:"SET_ADVANCED_CERT_CURRENT"})),computed:(0,i.default)({},(0,r.mapGetters)({getAdvancedCertCurrent:"getAdvancedCertCurrent"})),onShow:function(){this.setTitle(this.getLangs("advancedCert")),this.setAdvancedCertCurrent(0),this.createList()}};e.default=d},"3c9d":function(t,e,n){var a=n("eabf");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("0123186c",a,!0,{sourceMap:!1,shadowMode:!1})},"503b":function(t,e,n){"use strict";var a=n("0388"),i=n.n(a);i.a},"5c76":function(t,e,n){"use strict";n.r(e);var a=n("a9a9"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"5d88":function(t,e,n){"use strict";var a=n("6d32"),i=n.n(a);i.a},6243:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".advacced_certification[data-v-24e149a7]{padding:%?20?%}",""]),t.exports=e},"65d9":function(t,e,n){"use strict";n.r(e);var a=n("a113"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"6d32":function(t,e,n){var a=n("17ec");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("2123edee",a,!0,{sourceMap:!1,shadowMode:!1})},"7e42":function(t,e,n){"use strict";n.r(e);var a=n("fe70"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"7f88":function(t,e,n){"use strict";n.r(e);var a=n("b03e"),i=n("7e42");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("ddf6");var s,c=n("f0c5"),o=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"0c7f9b53",null,!1,a["a"],s);e["default"]=o.exports},"8a82":function(t,e,n){"use strict";var a=n("3c9d"),i=n.n(a);i.a},"93a4":function(t,e,n){var a=n("ddd8");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("13df9d97",a,!0,{sourceMap:!1,shadowMode:!1})},"94b0":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));try{a={uSteps:n("d950").default}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"advacced_certification"},[n("v-uni-view",{staticClass:"steps"},[n("u-steps",{attrs:{list:t.stepList,current:t.getAdvancedCertCurrent,"un-active-color":"#ddd","active-color":"#2970e6"}})],1),n("v-uni-view",{staticClass:"steps_main"},[0==t.getAdvancedCertCurrent?n("Upload"):t._e(),1==t.getAdvancedCertCurrent?n("Audlt"):t._e()],1)],1)},r=[]},a113:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"u-steps",props:{mode:{type:String,default:"dot"},list:{type:Array,default:function(){return[]}},type:{type:String,default:"primary"},current:{type:[Number,String],default:0},activeColor:{type:String,default:"#2979ff"},unActiveColor:{type:String,default:"#606266"},icon:{type:String,default:"checkmark"}},data:function(){return{}}};e.default=a},a496:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));try{a={uIcon:n("00e9").default}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{},[n("v-uni-view",{staticClass:"u-steps"},t._l(t.list,(function(e,a){return n("v-uni-view",{key:a,staticClass:"u-steps-item"},["number"==t.mode&&t.current<a?n("v-uni-view",{staticClass:"u-steps-item-num"},[t._v(t._s(a+1))]):t._e(),"dot"==t.mode?n("v-uni-view",{staticClass:"u-steps-item-dot",style:{backgroundColor:a<=t.current?t.activeColor:t.unActiveColor}}):t._e(),"number"==t.mode&&t.current>=a?n("u-icon",{staticClass:"u-steps-item-checked",style:{backgroundColor:a<=t.current?t.activeColor:t.unActiveColor},attrs:{size:"22",name:t.icon}}):t._e(),n("v-uni-text",{style:{color:a<=t.current?t.activeColor:t.unActiveColor}},[t._v(t._s(e.name))]),n("v-uni-view",{staticClass:"u-steps-item-line",style:{backgroundColor:a<=t.current?t.activeColor:t.unActiveColor,top:"dot"==t.mode?"24rpx":"36rpx"}})],1)})),1)],1)},r=[]},a9a9:function(t,e,n){"use strict";var a=n("4ea4");n("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=a(n("1da1")),r=a(n("5530")),s=n("2f62"),c=a(n("dd72")),o=a(n("1593")),u=a(n("bceb")),d=n("ca3b"),l=a(n("2901")),f={name:"Upload",mixins:[o.default,u.default],data:function(){return{form:{p1:"",p2:"",p3:""},idcardList:[{pic:"/static/images/rz1.png",name:"idcardp1"},{pic:"/static/images/rz2.png",name:"idcardp2"},{pic:"/static/images/rz3.png",name:"idcardp3"}]}},methods:(0,r.default)({submit:function(t){this.setAdvancedCertCurrent(2)},chooseIdcardHandler:function(t){var e=this,n=this.$storage.getLocalData("token"),a="".concat(c.default.domain,"/user/uploadIdImg/").concat(t+1);"".concat(t+1);return uni.chooseImage({success:function(i){var r=i.tempFilePaths;uni.uploadFile({url:a,header:{token:n},name:"f",filePath:r[0],success:function(n){var a=JSON.parse(n.data);e.backTips(a),l.default.checkCode(a)&&(e.form["p"+(t+1)]=r[0])}})}})},uploadIdcardHandler:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==t.form.p1&&""!==t.form.p2&&""!==t.form.p3){e.next=2;break}return e.abrupt("return",t.$tips.showToast(t.getLangs("uploadEmptyTips")));case 2:return e.next=4,(0,d.uploadConfirm)({end:!0});case 4:n=e.sent,t.backTips(n),l.default.checkCode(n)&&t.setAdvancedCertCurrent(1);case 7:case"end":return e.stop()}}),e)})))()}},(0,s.mapMutations)({setAdvancedCertCurrent:"SET_ADVANCED_CERT_CURRENT"}))};e.default=f},b03e:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"audlt_class"},[n("v-uni-view",{staticClass:"tips"},[n("v-uni-rich-text",{attrs:{nodes:t.getLangs("audltTips")}})],1),n("v-uni-view",{staticClass:"form_class"},[n("v-uni-view",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switchTab("/pages/user/index")}}},[t._v(t._s(t.getLangs("backBtn")))])],1)],1)},r=[]},b1ed:function(t,e,n){"use strict";n.r(e);var a=n("394c"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},ba5e:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"upload_class"},[n("v-uni-view",{staticClass:"images_list"},[t._l(t.idcardList,(function(e,a){return n("v-uni-view",{key:a,staticClass:"labels",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseIdcardHandler(a)}}},[""===t.form["p"+(a+1)]?n("v-uni-image",{staticClass:"img",attrs:{src:e.pic}}):t._e(),""===t.form["p"+(a+1)]?n("v-uni-text",{staticClass:"tips"},[t._v(t._s(t.getLangs(e.name)))]):n("v-uni-image",{staticClass:"img",attrs:{src:t.form["p"+(a+1)]}})],1)})),n("v-uni-view",{staticClass:"form_class"},[n("v-uni-view",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.uploadIdcardHandler.apply(void 0,arguments)}}},[t._v(t._s(t.getLangs("confirm")))])],1)],2)],1)},r=[]},d950:function(t,e,n){"use strict";n.r(e);var a=n("a496"),i=n("65d9");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("8a82");var s,c=n("f0c5"),o=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"465611d8",null,!1,a["a"],s);e["default"]=o.exports},ddd8:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".audlt_class[data-v-0c7f9b53]{padding:%?40?%;text-align:center;margin-top:%?40?%;color:#7386b0;font-weight:700}",""]),t.exports=e},ddf6:function(t,e,n){"use strict";var a=n("93a4"),i=n.n(a);i.a},eabf:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-steps[data-v-465611d8]{display:-webkit-box;display:-webkit-flex;display:flex}.u-steps-item[data-v-465611d8]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;position:relative;min-width:%?100?%;font-size:%?26?%;color:#8799a3}.u-steps-item .u-steps-item-line[data-v-465611d8]{content:"";position:absolute;height:%?2?%;width:calc(100% - %?80?%);left:calc(%?0?% - (100% - %?80?%) / 2);top:%?36?%;z-index:0}.u-steps-item:first-child .u-steps-item-line[data-v-465611d8]{display:none}.u-steps-item-num[data-v-465611d8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?44?%;height:%?44?%;border:1px solid #8799a3;-webkit-border-radius:50%;border-radius:50%;margin:%?14?% auto;overflow:hidden}.u-steps-item-dot[data-v-465611d8]{width:%?20?%;height:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-border-radius:50%;border-radius:50%;margin:%?14?% auto}.u-steps-item-checked[data-v-465611d8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?44?%;color:#fff!important;height:%?44?%;-webkit-border-radius:50%;border-radius:50%;margin:%?14?% auto;overflow:hidden}',""]),t.exports=e},fe70:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("1593")),r=a(n("bceb")),s={name:"Audlt",mixins:[i.default,r.default]};e.default=s}}]);