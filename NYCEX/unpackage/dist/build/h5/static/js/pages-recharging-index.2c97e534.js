(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-recharging-index"],{"0e77":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));try{n={uButton:a("7375").default}}catch(o){if(-1===o.message.indexOf("Cannot find module")||-1===o.message.indexOf(".vue"))throw o;console.error(o.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"wallet_class"},[a("v-uni-view",{staticClass:"order_labels"},[a("v-uni-view",{staticClass:"order",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateTo("/pages/order_list/index?type=0")}}},[a("v-uni-text",{staticClass:"iconfont icon-document_fill"}),t._v(t._s(t.getLangs("order")))],1)],1),a("v-uni-view",{staticClass:"recharge_main"},[a("v-uni-view",{staticClass:"qrcode"},[a("v-uni-canvas",{staticStyle:{width:"185px",height:"185px"},attrs:{"canvas-id":"qrcode"}}),a("u-button",{attrs:{type:"primary",plain:!0,size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.capture.apply(void 0,arguments)}}},[t._v(t._s(t.getLangs("saveQrcode")))])],1),a("v-uni-text",{staticClass:"addr_title"},[t._v(t._s(t.getLangs("rechargeAddress")))]),a("v-uni-view",{staticClass:"addr"},[t._v(t._s(t.addr))]),a("u-button",{attrs:{plain:!0,size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copy.apply(void 0,arguments)}}},[t._v(t._s(t.getLangs("copy")))])],1),a("v-uni-view",{staticClass:"linked_main"},[a("v-uni-view",{staticClass:"title"},[t._v(t._s(t.getLangs("rechargeCoin")))]),a("v-uni-view",{staticClass:"recharge_input_main"},[a("v-uni-input",{staticClass:"input_bar",attrs:{type:"idcard",placeholder:t.getLangs("numEmptyTips")},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.checkInput.apply(void 0,arguments)}},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}})],1)],1),a("v-uni-view",{staticClass:"linked_main"},[a("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("linkname")))]),a("v-uni-view",{staticClass:"linked_list"},t._l(t.chainList,(function(e,n){return a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:""!==e.val||""!==e.name,expression:"items.val !== '' || items.name !== ''"}],key:n,class:["linked_label",e.name===t.chainName?"on":""],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.changeChain(e.name)}}},[t._v(t._s(e.name))])})),1)],1),a("v-uni-view",{staticClass:"linked_main"},[a("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("uploadPicture")))]),""===t.img?a("v-uni-view",{staticClass:"upload",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.upload.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"upload_main"},[a("v-uni-text",{staticClass:"iconfont icon-add"}),a("v-uni-text",{staticClass:"name"},[t._v(t._s(t.getLangs("uploadText")))])],1)],1):a("v-uni-image",{staticClass:"img",attrs:{src:t.img}})],1),a("v-uni-view",{staticClass:"linked_main"},[a("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("rechargeTipsText")))]),a("v-uni-view",{staticClass:"tips"},[a("v-uni-rich-text",{attrs:{nodes:t.getLangs("rechargeTips")}})],1)],1),a("v-uni-view",{staticClass:"form_class"},[a("v-uni-button",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submitRecharge.apply(void 0,arguments)}}},[t._v(t._s(t.getLangs("rechargeBtn")))])],1)],1)},r=[]},"12d7":function(t,e,a){"use strict";var n=a("6446"),i=a.n(n);i.a},2585:function(t,e,a){"use strict";a.r(e);var n=a("0e77"),i=a("7611");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("f857");var o,s=a("f0c5"),d=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"5f50d472",null,!1,n["a"],o);e["default"]=d.exports},"58c3":function(t,e,a){var n=a("b5ff");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("040cdf33",n,!0,{sourceMap:!1,shadowMode:!1})},6446:function(t,e,a){var n=a("e5dd");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("aaa04868",n,!0,{sourceMap:!1,shadowMode:!1})},7375:function(t,e,a){"use strict";a.r(e);var n=a("b3da"),i=a("965a");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("12d7");var o,s=a("f0c5"),d=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"41917922",null,!1,n["a"],o);e["default"]=d.exports},7611:function(t,e,a){"use strict";a.r(e);var n=a("f20d"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"965a":function(t,e,a){"use strict";a.r(e);var n=a("fe8a"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},b3da:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-button",{staticClass:"u-btn u-line-1 u-fix-ios-appearance",class:["u-size-"+t.size,t.plain?"u-btn--"+t.type+"--plain":"",t.loading?"u-loading":"","circle"==t.shape?"u-round-circle":"",t.hairLine?t.showHairLineBorder:"u-btn--bold-border","u-btn--"+t.type,t.disabled?"u-btn--"+t.type+"--disabled":""],style:[t.customStyle],attrs:{id:"u-wave-btn",disabled:t.disabled,"form-type":t.formType,"open-type":t.openType,"app-parameter":t.appParameter,"hover-stop-propagation":t.hoverStopPropagation,"send-message-title":t.sendMessageTitle,"send-message-path":"sendMessagePath",lang:t.lang,"data-name":t.dataName,"session-from":t.sessionFrom,"send-message-img":t.sendMessageImg,"show-message-card":t.showMessageCard,"hover-class":t.getHoverClass,loading:t.loading},on:{getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.getphonenumber.apply(void 0,arguments)},getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.getuserinfo.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.error.apply(void 0,arguments)},opensetting:function(e){arguments[0]=e=t.$handleEvent(e),t.opensetting.apply(void 0,arguments)},launchapp:function(e){arguments[0]=e=t.$handleEvent(e),t.launchapp.apply(void 0,arguments)},click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.click(e)}}},[t._t("default"),t.ripple?a("v-uni-view",{staticClass:"u-wave-ripple",class:[t.waveActive?"u-wave-active":""],style:{top:t.rippleTop+"px",left:t.rippleLeft+"px",width:t.fields.targetWidth+"px",height:t.fields.targetWidth+"px","background-color":t.rippleBgColor||"rgba(0, 0, 0, 0.15)"}}):t._e()],2)},r=[]},b5ff:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".wallet_class[data-v-5f50d472]{border-top:1px solid hsla(0,0%,100%,.2);background:#f9f9f9}.order_labels[data-v-5f50d472]{text-align:right;color:#333;width:100%;padding-right:%?20?%;margin-top:%?20?%}.wallet_class .title[data-v-5f50d472]{font-size:%?40?%;color:#222;font-weight:700}.wallet_class .currency_label[data-v-5f50d472]{background:#fff;margin-top:%?20?%;line-height:%?80?%;padding-left:%?40?%;color:#0;font-weight:700;border-radius:%?10?%}.linked_main[data-v-5f50d472]{padding:%?20?%;background:#fff;margin-bottom:%?20?%}.linked_main .name[data-v-5f50d472]{margin-top:%?20?%;font-weight:700;color:#222;display:block;line-height:%?80?%;font-size:%?32?%}.linked_main .linked_label[data-v-5f50d472]{width:%?160?%;display:inline-block;padding:%?10?%;margin-right:%?20?%;border-radius:%?10?%;text-align:center;font-size:%?28?%;color:#aaa}.linked_main .linked_label.on[data-v-5f50d472]{background:#2970e6;border:1px solid #2970e6;color:#fff}.recharge_main[data-v-5f50d472]{background:#fff;padding:%?40?%;text-align:center;margin-top:%?40?%;margin-bottom:%?20?%}.recharge_main uni-canvas[data-v-5f50d472]{text-align:center;margin:0 auto %?20?% auto}.recharge_main .btns[data-v-5f50d472]{font-size:%?24?%;background:#2970e6;margin-top:%?20?%;padding:%?10?%;border-radius:%?10?%;text-align:center;width:%?180?%;color:#fff}.addr_title[data-v-5f50d472]{font-size:%?26?%;color:#8d9dbc;display:block;margin-top:%?40?%;margin-bottom:%?20?%}.addr[data-v-5f50d472]{display:block;line-height:%?80?%;font-size:%?26?%;color:#333;font-weight:700;text-align:center}.wallet_label[data-v-5f50d472]{position:relative;padding-left:%?90?%;margin-bottom:%?30?%;padding-bottom:%?30?%;border-bottom:1px solid #eee}.wallet_label .icon[data-v-5f50d472]{width:%?70?%;height:%?70?%;border-radius:50%;position:absolute;background:#f9f9f9;left:0;top:0;text-align:center;color:#4944b3;line-height:%?50?%}.wallet_label .icon .iconfont[data-v-5f50d472]{font-size:%?40?%}.wallet_label .name[data-v-5f50d472]{font-size:%?28?%;color:#72899a}.wallet_label .value[data-v-5f50d472]{font-size:%?32?%;color:#4944b3}.qrcode[data-v-5f50d472]{margin-top:10px}.btns[data-v-5f50d472]{font-size:%?24?%;background:#4944b3;margin-top:%?20?%;padding:%?10?%;border-radius:%?10?%;text-align:center;width:%?180?%;color:#fff}.upload_main[data-v-5f50d472]{padding:%?40?%;background:#f9f9f9;box-sizing:border-box;width:%?300?%;height:%?300?%;text-align:center}.upload_main .iconfont[data-v-5f50d472]{display:block;line-height:%?140?%;font-size:%?90?%;color:#c6ced3}.upload_main .name[data-v-5f50d472]{color:#c6ced3;font-size:%?28?%;display:block;font-weight:400;line-height:0}.tips[data-v-5f50d472]{font-size:%?24?%;color:#62759a}.img[data-v-5f50d472]{width:%?300?%;height:%?300?%}.input_bar[data-v-5f50d472]{font-size:%?28?%;text-align:center;border:1px solid #eee;padding:%?20?% 0;border-radius:%?20?%;background:hsla(0,0%,100%,.05);color:#333}.form_class[data-v-5f50d472]{padding:%?20?%}",""]),t.exports=e},e5dd:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-btn[data-v-41917922]::after{border:none}.u-btn[data-v-41917922]{position:relative;border:0;display:inline-block;overflow:hidden;line-height:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;cursor:pointer;padding:0 %?40?%;z-index:1;box-sizing:border-box;-webkit-transition:all .15s;transition:all .15s}.u-btn--bold-border[data-v-41917922]{border:1px solid #fff}.u-btn--default[data-v-41917922]{color:#606266;border-color:#c0c4cc;background-color:#fff}.u-btn--primary[data-v-41917922]{color:#fff;border-color:#2979ff;background-color:#2979ff}.u-btn--success[data-v-41917922]{color:#fff;border-color:#19be6b;background-color:#19be6b}.u-btn--error[data-v-41917922]{color:#fff;border-color:#fa3534;background-color:#fa3534}.u-btn--warning[data-v-41917922]{color:#fff;border-color:#f90;background-color:#f90}.u-btn--default--disabled[data-v-41917922]{color:#fff;border-color:#e4e7ed;background-color:#fff}.u-btn--primary--disabled[data-v-41917922]{color:#fff!important;border-color:#a0cfff!important;background-color:#a0cfff!important}.u-btn--success--disabled[data-v-41917922]{color:#fff!important;border-color:#71d5a1!important;background-color:#71d5a1!important}.u-btn--error--disabled[data-v-41917922]{color:#fff!important;border-color:#fab6b6!important;background-color:#fab6b6!important}.u-btn--warning--disabled[data-v-41917922]{color:#fff!important;border-color:#fcbd71!important;background-color:#fcbd71!important}.u-btn--primary--plain[data-v-41917922]{color:#2979ff!important;border-color:#a0cfff!important;background-color:#ecf5ff!important}.u-btn--success--plain[data-v-41917922]{color:#19be6b!important;border-color:#71d5a1!important;background-color:#dbf1e1!important}.u-btn--error--plain[data-v-41917922]{color:#fa3534!important;border-color:#fab6b6!important;background-color:#fef0f0!important}.u-btn--warning--plain[data-v-41917922]{color:#f90!important;border-color:#fcbd71!important;background-color:#fdf6ec!important}.u-hairline-border[data-v-41917922]:after{content:" ";position:absolute;pointer-events:none;box-sizing:border-box;-webkit-transform-origin:0 0;transform-origin:0 0;left:0;top:0;width:199.8%;height:199.7%;-webkit-transform:scale(.5);transform:scale(.5);border:1px solid currentColor;z-index:1}.u-wave-ripple[data-v-41917922]{z-index:0;position:absolute;border-radius:100%;background-clip:padding-box;pointer-events:none;-webkit-user-select:none;user-select:none;-webkit-transform:scale(0);transform:scale(0);opacity:1;-webkit-transform-origin:center;transform-origin:center}.u-wave-ripple.u-wave-active[data-v-41917922]{opacity:0;-webkit-transform:scale(2);transform:scale(2);-webkit-transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,transform .4s linear;transition:opacity 1s linear,transform .4s linear,-webkit-transform .4s linear}.u-round-circle[data-v-41917922]{border-radius:%?100?%}.u-round-circle[data-v-41917922]::after{border-radius:%?100?%}.u-loading[data-v-41917922]::after{background-color:hsla(0,0%,100%,.35)}.u-size-default[data-v-41917922]{font-size:%?30?%;height:%?80?%;line-height:%?80?%}.u-size-medium[data-v-41917922]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;width:auto;font-size:%?26?%;height:%?70?%;line-height:%?70?%;padding:0 %?80?%}.u-size-mini[data-v-41917922]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;width:auto;font-size:%?22?%;padding-top:1px;height:%?50?%;line-height:%?50?%;padding:0 %?20?%}.u-primary-plain-hover[data-v-41917922]{color:#fff!important;background:#2b85e4!important}.u-default-plain-hover[data-v-41917922]{color:#2b85e4!important;background:#ecf5ff!important}.u-success-plain-hover[data-v-41917922]{color:#fff!important;background:#18b566!important}.u-warning-plain-hover[data-v-41917922]{color:#fff!important;background:#f29100!important}.u-error-plain-hover[data-v-41917922]{color:#fff!important;background:#dd6161!important}.u-info-plain-hover[data-v-41917922]{color:#fff!important;background:#82848a!important}.u-default-hover[data-v-41917922]{color:#2b85e4!important;border-color:#2b85e4!important;background-color:#ecf5ff!important}.u-primary-hover[data-v-41917922]{background:#2b85e4!important;color:#fff}.u-success-hover[data-v-41917922]{background:#18b566!important;color:#fff}.u-info-hover[data-v-41917922]{background:#82848a!important;color:#fff}.u-warning-hover[data-v-41917922]{background:#f29100!important;color:#fff}.u-error-hover[data-v-41917922]{background:#dd6161!important;color:#fff}',""]),t.exports=e},f20d:function(t,e,a){"use strict";var n=a("4ea4");a("4de4"),a("ac1f"),a("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var i=n(a("1da1")),r=n(a("ccdd")),o=n(a("0fa7")),s=n(a("f8c6")),d=a("c2cf"),l=n(a("0696")),c=n(a("1a88")),u=n(a("aed5")),f={name:"Recharging",mixins:[s.default,o.default],data:function(){return{addr:"",id:"",amount:"",name:"",chainList:[],chainName:"",rechareStatus:!1,qrcode:"",img:""}},methods:{getPayAddsHanlder:function(t){var e=this;return(0,i.default)(regeneratorRuntime.mark((function a(){var n,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n={orderno:t},a.next=3,(0,d.getWalletAddr)(n);case 3:i=a.sent,l.default.checkCode(i)&&(e.addr=i.data);case 5:case"end":return a.stop()}}),a)})))()},getPayUrlAddsHandler:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={id:t.id},e.next=3,(0,d.getPayUrlAdds)(a);case 3:n=e.sent,t.chainList=n.data,t.addr=n.data[0].val,t.chainName=n.data[0].name,t.createQrCode();case 8:case"end":return e.stop()}}),e)})))()},createQrCode:function(){var t=this,e=this;c.default.make({canvasId:"qrcode",componentInstance:this,text:e.addr,size:185,margin:10,backgroundColor:"#ffffff",foregroundColor:"#000000",fileType:"jpg",correctLevel:c.default.defaults.correctLevel,success:function(e){t.qrcode=e}})},copy:function(){var t=this.addr,e=(0,u.default)(t);!1===e?this.$tips.showToast("当前环境不支持"):this.$tips.showToast(this.getLangs("success"))},upload:function(){var t=this;return uni.chooseImage({success:function(e){var a=e.tempFilePaths;t.img=a[0],t.$tips.showToast(t.getLangs("success"))}})},changeChain:function(t){this.chainName=t,this.addr=this.chainList.filter((function(e){return e.name===t}))[0].val,this.createQrCode()},submitRecharge:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var a,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0!==t.amount.length){e.next=2;break}return e.abrupt("return",t.$tips.showToast(t.getLangs("numEmptyTips")));case 2:if(""!==t.img){e.next=4;break}return e.abrupt("return",t.$tips.showToast(t.getLangs("uploadEmptyTips")));case 4:t,a=t.$storage.getLocalData("token"),n="".concat(r.default.domain,"/user/pay"),i={id:t.id,amount:t.amount,add:t.chainName},t.$tips.showLoading(t.getLangs("loadingText")),uni.uploadFile({url:n,header:{token:a},name:"head_img",formData:i,filePath:t.img,success:function(e){t.$tips.hideLoading();var a=JSON.parse(e.data);t.backTips(a),l.default.checkCode(a)&&setTimeout((function(){t.redirectTo("/pages/success_tips/index?name=recharge")}),1500)}});case 10:case"end":return e.stop()}}),e)})))()},capture:function(){var t=this;uni.saveImageToPhotosAlbum({filePath:t.qrcode,success:function(){t.$tips.showToast(t.getLangs("success"))},fail:function(){t.$tips.showToast(t.getLangs("error"))}})},checkInput:function(t){var e=this;setTimeout((function(){var a=/^(\d+|\d+\.\d{0,4})$/,n=t.detail.value;if(a.test(n))e.amount=n;else{var i=n.split("."),r=i[0],o=i[1];o.length>4?e.amount=r+"."+o.substring(0,4):e.amount=r+"."+o}}),20)}},onLoad:function(t){t.id?(this.id=t.id,this.name=t.name,this.getPayUrlAddsHandler()):this.$tips.showToast(this.getLangs("noData"))},onShow:function(){this.setTitle(this.getLangs("recharging"))}};e.default=f},f857:function(t,e,a){"use strict";var n=a("58c3"),i=a.n(n);i.a},fe8a:function(t,e,a){"use strict";a("c975"),a("d3b7"),a("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-button",props:{hairLine:{type:Boolean,default:!0},type:{type:String,default:"default"},size:{type:String,default:"default"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},openType:{type:String,default:""},formType:{type:String,default:""},appParameter:{type:String,default:""},hoverStopPropagation:{type:Boolean,default:!1},lang:{type:String,default:"en"},sessionFrom:{type:String,default:""},sendMessageTitle:{type:String,default:""},sendMessagePath:{type:String,default:""},sendMessageImg:{type:String,default:""},showMessageCard:{type:Boolean,default:!1},hoverBgColor:{type:String,default:""},rippleBgColor:{type:String,default:""},ripple:{type:Boolean,default:!1},hoverClass:{type:String,default:""},customStyle:{type:Object,default:function(){return{}}},dataName:{type:String,default:""}},computed:{getHoverClass:function(){if(this.loading||this.disabled||this.ripple||this.hoverClass)return"";var t="";return t=this.plain?"u-"+this.type+"-plain-hover":"u-"+this.type+"-hover",t},showHairLineBorder:function(){return["primary","success","error","warning"].indexOf(this.type)>=0&&!this.plain?"":"u-hairline-border"}},data:function(){return{rippleTop:0,rippleLeft:0,fields:{},waveActive:!1}},methods:{click:function(t){!0!==this.loading&&!0!==this.disabled&&(this.ripple&&(this.waveActive=!1,this.$nextTick((function(){this.getWaveQuery(t)}))),this.$emit("click"))},getWaveQuery:function(t){var e=this;this.getElQuery().then((function(a){var n=a[0];if(n.width&&n.width&&(n.targetWidth=n.height>n.width?n.height:n.width,n.targetWidth)){e.fields=n;var i="",r="";i=t.touches[0].clientX,r=t.touches[0].clientY,e.rippleTop=r-n.top-n.targetWidth/2,e.rippleLeft=i-n.left-n.targetWidth/2,e.$nextTick((function(){e.waveActive=!0}))}}))},getElQuery:function(){var t=this;return new Promise((function(e){var a="";a=uni.createSelectorQuery().in(t),a.select(".u-btn").boundingClientRect(),a.exec((function(t){e(t)}))}))},getphonenumber:function(t){this.$emit("getphonenumber",t)},getuserinfo:function(t){this.$emit("getuserinfo",t)},error:function(t){this.$emit("error",t)},opensetting:function(t){this.$emit("opensetting",t)},launchapp:function(t){this.$emit("launchapp",t)}}};e.default=n}}]);