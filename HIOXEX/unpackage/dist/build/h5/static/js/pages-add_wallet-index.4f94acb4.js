(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-add_wallet-index"],{"151b":function(t,a,e){var n=e("e77d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("30e68d10",n,!0,{sourceMap:!1,shadowMode:!1})},20763:function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return n}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"wallet_class"},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.getLangs("currency")))]),e("v-uni-view",{staticClass:"currency_label"},[t._v("USDT")]),e("v-uni-view",{staticClass:"linked_main"},[e("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("linkname")))]),e("v-uni-view",{staticClass:"linked_list"},t._l(t.chainList,(function(a,n){return e("v-uni-view",{key:n,class:["linked_label",t.chainname===a?"on":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeChain(a)}}},[t._v(t._s(a))])})),1)],1),e("v-uni-view",{staticClass:"linked_main"},[e("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("walletAddress")))]),e("v-uni-view",{staticClass:"currency_label input_bars"},[e("v-uni-input",{staticClass:"input_bar",attrs:{type:"text",placeholder:t.getLangs("addressInputTips")},model:{value:t.address,callback:function(a){t.address=a},expression:"address"}})],1)],1),e("v-uni-view",{staticClass:"linked_main"},[e("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("remark")))]),e("v-uni-view",{staticClass:"currency_label input_bars"},[e("v-uni-input",{staticClass:"input_bar",attrs:{type:"text",placeholder:t.getLangs("remarkInputTips")},model:{value:t.remarks,callback:function(a){t.remarks=a},expression:"remarks"}})],1)],1),e("v-uni-view",{staticClass:"linked_main"},[e("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("walletQrcode")))]),e("v-uni-view",{staticClass:"upload",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.upload.apply(void 0,arguments)}}},[""===t.img?e("v-uni-view",{staticClass:"upload_main"},[e("v-uni-text",{staticClass:"iconfont icon-add"}),e("v-uni-text",{staticClass:"name"},[t._v(t._s(t.getLangs("walletQrcode")))])],1):e("v-uni-image",{staticClass:"img",attrs:{src:t.img}})],1)],1),e("v-uni-view",{staticClass:"form_class"},[e("v-uni-button",{staticClass:"button",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.saveGetPayAddHandler.apply(void 0,arguments)}}},[t._v(t._s(t.getLangs("confirm")))])],1)],1)},r=[]},"212e":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},i=n;a.default=i},"2e10":function(t,a,e){"use strict";e.r(a);var n=e("20763"),i=e("8762");for(var r in i)"default"!==r&&function(t){e.d(a,t,(function(){return i[t]}))}(r);e("a1d4");var s,o=e("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"81266280",null,!1,n["a"],s);a["default"]=c.exports},"4d0d":function(t,a,e){"use strict";var n=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("96cf");var i=n(e("1da1")),r=n(e("5be9")),s=n(e("cecb")),o=n(e("cc16")),c=e("e361"),d=n(e("a591")),l={name:"Recharging",mixins:[o.default,s.default],data:function(){return{addr:"",id:"",chainList:["OMINI","ERC20","TRC20"],chainname:"OMINI",address:"",remarks:"",img:""}},methods:{getPayUrlAddsHandler:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function a(){var e,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e={id:t.id},a.next=3,getPayUrlAdds(e);case 3:n=a.sent,t.chainList=n.data,t.addr=n.data[t.chainId].val,t.createQrCode();case 7:case"end":return a.stop()}}),a)})))()},createQrCode:function(){var t=this;uQRCode.make({canvasId:"qrcode",componentInstance:this,text:t.addr,size:185,margin:10,backgroundColor:"#ffffff",foregroundColor:"#000000",fileType:"jpg",correctLevel:uQRCode.defaults.correctLevel,success:function(t){}})},upload:function(){var t=this;this.$storage.getLocalData("token"),"".concat(r.default.domain,"/user/pay");return uni.chooseImage({success:function(a){var e=a.tempFilePaths;t.img=e[0],t.$tips.showToast(t.getLangs("success"))}})},changeChain:function(t){this.chainname=t},saveGetPayAddHandler:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function a(){var e,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(""!==t.address){a.next=2;break}return a.abrupt("return",t.$tips.showToast(t.getLangs("addressInputTips")));case 2:return{},e={address:t.address,remarks:t.remarks,chainname:t.chainname},"undefined"!=typeof t.id&&Object.assign(e,{id:t.id}),a.next=7,(0,c.saveGetPayAdd)(e);case 7:n=a.sent,t.backTips(n),d.default.checkCode(n)&&setTimeout((function(){t.back()}),1500);case 10:case"end":return a.stop()}}),a)})))()}},onLoad:function(t){"{}"!==JSON.stringify(t)&&(this.id=t.id,this.address=t.address,this.remarks=t.remarks,this.chainname=t.chainname)},onShow:function(){this.setTitle(this.getLangs("addWalletAddress"))}};a.default=l},8762:function(t,a,e){"use strict";e.r(a);var n=e("4d0d"),i=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);a["default"]=i.a},a1d4:function(t,a,e){"use strict";var n=e("151b"),i=e.n(n);i.a},cc16:function(t,a,e){"use strict";var n=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("5530")),r=e("2f62"),s=n(e("5be9")),o=n(e("212e")),c=n(e("5f81")),d=n(e("a591")),l={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,a){var e="undefined"===typeof a||"{}"===JSON.stringify(a)?"":"?".concat(c.default.convertObj(a));uni.navigateTo({url:t+e})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=o.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?s.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var a=getCurrentPages(),e=a[a.length-1];switch(t){case"opt":return e.options;case"route":return e.route;default:return e}},backToPage:function(t){o.default.getOS();this.navigateTo(t)},backTips:function(t){if(d.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,i.default)({createOSClass:function(){return"h5"}},(0,r.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=o.default.getOS()}},u=l;a.default=u},e77d:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,".wallet_class[data-v-81266280]{height:100%;padding:%?20?%;border-top:1px solid hsla(0,0%,100%,.1);background:#fff}.wallet_class .title[data-v-81266280]{font-size:%?32?%;color:#333;font-weight:700}.wallet_class .currency_label[data-v-81266280]{background:#f9f9f9;margin-top:%?20?%;line-height:%?80?%;padding-left:%?40?%;color:#333;font-weight:700;border-radius:%?10?%}.linked_main[data-v-81266280]{padding:%?20?%;background:#fff;margin-bottom:%?20?%}.linked_main .name[data-v-81266280]{margin-top:%?20?%;font-weight:700;color:#333;display:block;line-height:%?80?%;font-size:%?28?%}.linked_main .linked_label[data-v-81266280]{width:%?160?%;display:inline-block;padding:%?10?%;margin-right:%?20?%;color:#aaa;border-radius:%?10?%;text-align:center;font-size:%?28?%}.linked_main .linked_label.on[data-v-81266280]{background:#2970e6;border:1px solid #2970e6;color:#fff}.recharge_main[data-v-81266280]{background:#f9f9f9;padding:%?40?%;text-align:center;margin-top:%?40?%}.recharge_main uni-canvas[data-v-81266280]{text-align:center;margin:0 auto %?20?% auto}.recharge_main .btns[data-v-81266280]{font-size:%?24?%;background:#4944b3;margin-top:%?20?%;padding:%?10?%;border-radius:%?10?%;text-align:center;width:%?180?%;color:#fff}.addr_title[data-v-81266280]{font-size:%?26?%;color:#8d9dbc;display:block;margin-top:%?40?%;margin-bottom:%?20?%}.addr[data-v-81266280]{display:block;line-height:%?80?%;font-size:%?26?%;color:#242b46;font-weight:700;text-align:center}.wallet_label[data-v-81266280]{position:relative;padding-left:%?90?%;margin-bottom:%?30?%;padding-bottom:%?30?%;border-bottom:1px solid #eee}.wallet_label .icon[data-v-81266280]{width:%?70?%;height:%?70?%;border-radius:50%;position:absolute;background:#f9f9f9;left:0;top:0;text-align:center;color:#4944b3;line-height:%?50?%}.wallet_label .icon .iconfont[data-v-81266280]{font-size:%?40?%}.wallet_label .name[data-v-81266280]{font-size:%?28?%;color:#72899a}.wallet_label .value[data-v-81266280]{font-size:%?32?%;color:#4944b3}.qrcode[data-v-81266280]{margin-top:10px}.btns[data-v-81266280]{font-size:%?24?%;background:#4944b3;margin-top:%?20?%;padding:%?10?%;border-radius:%?10?%;text-align:center;width:%?180?%;color:#fff}.upload_main[data-v-81266280]{padding:%?40?%;background:#f9f9f9;box-sizing:border-box;width:%?300?%;height:%?300?%;text-align:center}.img[data-v-81266280]{width:%?300?%;height:%?300?%}.upload_main .iconfont[data-v-81266280]{display:block;line-height:%?140?%;font-size:%?90?%;color:#c6ced3}.upload_main .name[data-v-81266280]{color:#c6ced3;font-size:%?28?%;display:block;font-weight:400;line-height:0}.tips[data-v-81266280]{font-size:%?24?%;color:#62759a}.input_bars[data-v-81266280]{padding:%?20?%;background:#f9f9f9!important;color:#333}.input_bars .input_bar[data-v-81266280]{font-size:%?28?%;font-weight:400;color:#333}",""]),t.exports=a}}]);