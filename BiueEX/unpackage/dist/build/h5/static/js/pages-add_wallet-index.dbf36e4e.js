(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-add_wallet-index"],{"12ad":function(t,e,a){"use strict";a.r(e);var n=a("8f31"),i=a("da07");for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("d1d9");var o,r=a("f0c5"),d=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"f591e742",null,!1,n["a"],o);e["default"]=d.exports},"451e":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var i=n(a("1da1")),s=n(a("8ff3")),o=n(a("95b1")),r=n(a("8d05")),d=a("6ed4"),c=n(a("16f1")),l={name:"Recharging",mixins:[r.default,o.default],data:function(){return{addr:"",id:"",chainList:["OMINI","ERC20","TRC20"],chainname:"OMINI",address:"",remarks:"",img:"",type:0,typeList:["USDT","BTC","ETH"],show:!1}},methods:{openDrop:function(){this.show=!this.show},changeDrop:function(t){this.type=t,this.show=!1},stopClick:function(t){t.stopPropagation()},eventClick:function(){this.show=!1},getPayUrlAddsHandler:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={id:t.id},e.next=3,getPayUrlAdds(a);case 3:n=e.sent,t.chainList=n.data,t.addr=n.data[t.chainId].val,t.createQrCode();case 7:case"end":return e.stop()}}),e)})))()},createQrCode:function(){var t=this;uQRCode.make({canvasId:"qrcode",componentInstance:this,text:t.addr,size:185,margin:10,backgroundColor:"#ffffff",foregroundColor:"#000000",fileType:"jpg",correctLevel:uQRCode.defaults.correctLevel,success:function(t){}})},upload:function(){var t=this;this.$storage.getLocalData("token"),"".concat(s.default.domain,"/user/pay");return uni.chooseImage({success:function(e){var a=e.tempFilePaths;t.img=a[0],t.$tips.showToast(t.getLangs("success"))}})},changeChain:function(t){this.chainname=t},saveGetPayAddHandler:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==t.address){e.next=2;break}return e.abrupt("return",t.$tips.showToast(t.getLangs("addressInputTips")));case 2:return{},a={address:t.address,remarks:t.remarks,chainname:"",type:t.type},"undefined"!=typeof t.id&&Object.assign(a,{id:t.id}),e.next=7,(0,d.saveGetPayAdd)(a);case 7:n=e.sent,t.backTips(n),c.default.checkCode(n)&&setTimeout((function(){t.back()}),1500);case 10:case"end":return e.stop()}}),e)})))()}},onLoad:function(t){"{}"!==JSON.stringify(t)&&(this.id=t.id,this.address=t.address,this.remarks=t.remarks,this.chainname=t.chainname,this.type=t.type)},onShow:function(){this.setTitle(this.getLangs("addWalletAddress"))}};e.default=l},"8d05":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530")),s=a("2f62"),o=n(a("8ff3")),r=n(a("d9a6")),d=n(a("d61a")),c=n(a("16f1")),l={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,e){var a="undefined"===typeof e||"{}"===JSON.stringify(e)?"":"?".concat(d.default.convertObj(e));uni.navigateTo({url:t+a})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=r.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?o.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var e=getCurrentPages(),a=e[e.length-1];switch(t){case"opt":return a.options;case"route":return a.route;default:return a}},backToPage:function(t){r.default.getOS();this.navigateTo(t)},backTips:function(t){if(c.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,i.default)({createOSClass:function(){return"h5"}},(0,s.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=r.default.getOS()}},u=l;e.default=u},"8f31":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"wallet_class"},[a("v-uni-view",{staticClass:"linked_main"},[a("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("currency")))]),a("v-uni-view",{staticClass:"select",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopClick.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"select_label",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!t.show}}},[a("v-uni-view",{staticClass:"select_name"},[t._v(t._s(t.typeList[t.type]))]),a("v-uni-text",{staticClass:"iconfont icon-unfold"})],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"select_drop"},[a("v-uni-view",{staticClass:"selelct_drop_main",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopClick.apply(void 0,arguments)}}},t._l(t.typeList,(function(e,n){return a("v-uni-view",{key:n,staticClass:"select_drop_label",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeDrop(n)}}},[t._v(t._s(e))])})),1)],1)],1)],1),a("v-uni-view",{staticClass:"linked_main"},[a("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("walletAddress")))]),a("v-uni-view",{staticClass:"currency_label input_bars"},[a("v-uni-input",{staticClass:"input_bar",attrs:{type:"text",placeholder:t.getLangs("addressInputTips")},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1)],1),a("v-uni-view",{staticClass:"linked_main"},[a("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("remark")))]),a("v-uni-view",{staticClass:"currency_label input_bars"},[a("v-uni-input",{staticClass:"input_bar",attrs:{type:"text",placeholder:t.getLangs("remarkInputTips")},model:{value:t.remarks,callback:function(e){t.remarks=e},expression:"remarks"}})],1)],1),a("v-uni-view",{staticClass:"linked_main"},[a("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("walletQrcode")))]),a("v-uni-view",{staticClass:"upload",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.upload.apply(void 0,arguments)}}},[""===t.img?a("v-uni-view",{staticClass:"upload_main"},[a("v-uni-text",{staticClass:"iconfont icon-add"}),a("v-uni-text",{staticClass:"name"},[t._v(t._s(t.getLangs("walletQrcode")))])],1):a("v-uni-image",{staticClass:"img",attrs:{src:t.img}})],1)],1),a("v-uni-view",{staticClass:"form_class"},[a("v-uni-button",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.saveGetPayAddHandler.apply(void 0,arguments)}}},[t._v(t._s(t.getLangs("confirm")))])],1)],1)},s=[]},"9fba":function(t,e,a){var n=a("e0ff");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("6fc02223",n,!0,{sourceMap:!1,shadowMode:!1})},d1d9:function(t,e,a){"use strict";var n=a("9fba"),i=a.n(n);i.a},d9a6:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},i=n;e.default=i},da07:function(t,e,a){"use strict";a.r(e);var n=a("451e"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},e0ff:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".wallet_class[data-v-f591e742]{height:100%;padding:%?20?%;border-top:1px solid hsla(0,0%,100%,.1);background:#fff}.wallet_class .title[data-v-f591e742]{font-size:%?32?%;color:#333;font-weight:700}.wallet_class .currency_label[data-v-f591e742]{background:#f9f9f9;margin-top:%?20?%;line-height:%?80?%;padding-left:%?40?%;color:#333;font-weight:700;-webkit-border-radius:%?10?%;border-radius:%?10?%}.linked_main[data-v-f591e742]{padding:%?20?%;background:#fff;margin-bottom:%?20?%}.linked_main .name[data-v-f591e742]{margin-top:%?20?%;font-weight:700;color:#333;display:block;line-height:%?80?%;font-size:%?28?%}.linked_main .linked_label[data-v-f591e742]{width:%?160?%;display:inline-block;padding:%?10?%;margin-right:%?20?%;color:#aaa;-webkit-border-radius:%?10?%;border-radius:%?10?%;text-align:center;font-size:%?28?%}.linked_main .linked_label.on[data-v-f591e742]{background:#2970e6;border:1px solid #2970e6;color:#fff}.recharge_main[data-v-f591e742]{background:#f9f9f9;padding:%?40?%;text-align:center;margin-top:%?40?%}.recharge_main uni-canvas[data-v-f591e742]{text-align:center;margin:0 auto %?20?% auto}.recharge_main .btns[data-v-f591e742]{font-size:%?24?%;background:#4944b3;margin-top:%?20?%;padding:%?10?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;text-align:center;width:%?180?%;color:#fff}.addr_title[data-v-f591e742]{font-size:%?26?%;color:#8d9dbc;display:block;margin-top:%?40?%;margin-bottom:%?20?%}.addr[data-v-f591e742]{display:block;line-height:%?80?%;font-size:%?26?%;color:#242b46;font-weight:700;text-align:center}.wallet_label[data-v-f591e742]{position:relative;padding-left:%?90?%;margin-bottom:%?30?%;padding-bottom:%?30?%;border-bottom:1px solid #eee}.wallet_label .icon[data-v-f591e742]{width:%?70?%;height:%?70?%;-webkit-border-radius:50%;border-radius:50%;position:absolute;background:#f9f9f9;left:0;top:0;text-align:center;color:#4944b3;line-height:%?50?%}.wallet_label .icon .iconfont[data-v-f591e742]{font-size:%?40?%}.wallet_label .name[data-v-f591e742]{font-size:%?28?%;color:#72899a}.wallet_label .value[data-v-f591e742]{font-size:%?32?%;color:#4944b3}.qrcode[data-v-f591e742]{margin-top:10px}.btns[data-v-f591e742]{font-size:%?24?%;background:#4944b3;margin-top:%?20?%;padding:%?10?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;text-align:center;width:%?180?%;color:#fff}.upload_main[data-v-f591e742]{padding:%?40?%;background:#f9f9f9;-webkit-box-sizing:border-box;box-sizing:border-box;width:%?300?%;height:%?300?%;text-align:center}.img[data-v-f591e742]{width:%?300?%;height:%?300?%}.upload_main .iconfont[data-v-f591e742]{display:block;line-height:%?140?%;font-size:%?90?%;color:#c6ced3}.upload_main .name[data-v-f591e742]{color:#c6ced3;font-size:%?28?%;display:block;font-weight:400;line-height:0}.tips[data-v-f591e742]{font-size:%?24?%;color:#62759a}.input_bars[data-v-f591e742]{padding:%?20?%;background:#f9f9f9!important;color:#333}.input_bars .input_bar[data-v-f591e742]{font-size:%?28?%;font-weight:400;color:#333}.select[data-v-f591e742]{background:#f9f9f9}.select_drop[data-v-f591e742]{z-index:10000}",""]),t.exports=e}}]);