(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-add_wallet-index"],{"0c81":function(a,t,e){"use strict";e.r(t);var n=e("65f3"),i=e.n(n);for(var r in n)"default"!==r&&function(a){e.d(t,a,(function(){return n[a]}))}(r);t["default"]=i.a},"5cd2":function(a,t,e){"use strict";var n=e("fea2"),i=e.n(n);i.a},6067:function(a,t,e){"use strict";var n;e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return n}));var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-uni-view",{staticClass:"wallet_class"},[e("v-uni-view",{staticClass:"title"},[a._v(a._s(a.getLangs("currency")))]),e("v-uni-view",{staticClass:"currency_label"},[a._v("USDT")]),e("v-uni-view",{staticClass:"linked_main"},[e("v-uni-view",{staticClass:"name"},[a._v(a._s(a.getLangs("linkname")))]),e("v-uni-view",{staticClass:"linked_list"},a._l(a.chainList,(function(t,n){return e("v-uni-view",{key:n,class:["linked_label",a.chainname===t?"on":""],on:{click:function(e){arguments[0]=e=a.$handleEvent(e),a.changeChain(t)}}},[a._v(a._s(t))])})),1)],1),e("v-uni-view",{staticClass:"linked_main"},[e("v-uni-view",{staticClass:"name"},[a._v(a._s(a.getLangs("walletAddress")))]),e("v-uni-view",{staticClass:"currency_label input_bars"},[e("v-uni-input",{staticClass:"input_bar",attrs:{type:"text",placeholder:a.getLangs("addressInputTips")},model:{value:a.address,callback:function(t){a.address=t},expression:"address"}})],1)],1),e("v-uni-view",{staticClass:"linked_main"},[e("v-uni-view",{staticClass:"name"},[a._v(a._s(a.getLangs("remark")))]),e("v-uni-view",{staticClass:"currency_label input_bars"},[e("v-uni-input",{staticClass:"input_bar",attrs:{type:"text",placeholder:a.getLangs("remarkInputTips")},model:{value:a.remarks,callback:function(t){a.remarks=t},expression:"remarks"}})],1)],1),e("v-uni-view",{staticClass:"linked_main"},[e("v-uni-view",{staticClass:"name"},[a._v(a._s(a.getLangs("walletQrcode")))]),e("v-uni-view",{staticClass:"upload",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.upload.apply(void 0,arguments)}}},[""===a.img?e("v-uni-view",{staticClass:"upload_main"},[e("v-uni-text",{staticClass:"iconfont icon-add"}),e("v-uni-text",{staticClass:"name"},[a._v(a._s(a.getLangs("walletQrcode")))])],1):e("v-uni-image",{staticClass:"img",attrs:{src:a.img}})],1)],1),e("v-uni-view",{staticClass:"form_class"},[e("v-uni-button",{staticClass:"button",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.saveGetPayAddHandler.apply(void 0,arguments)}}},[a._v(a._s(a.getLangs("confirm")))])],1)],1)},r=[]},"65f3":function(a,t,e){"use strict";var n=e("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("96cf");var i=n(e("1da1")),r=n(e("6f5f")),s=n(e("d91a")),o=n(e("7761")),d=e("5a6a"),c=n(e("cc8a")),u={name:"Recharging",mixins:[o.default,s.default],data:function(){return{addr:"",id:"",chainList:["OMINI","ERC20","TRC20"],chainname:"OMINI",address:"",remarks:"",img:""}},methods:{getPayUrlAddsHandler:function(){var a=this;return(0,i.default)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={id:a.id},t.next=3,getPayUrlAdds(e);case 3:n=t.sent,a.chainList=n.data,a.addr=n.data[a.chainId].val,a.createQrCode();case 7:case"end":return t.stop()}}),t)})))()},createQrCode:function(){var a=this;uQRCode.make({canvasId:"qrcode",componentInstance:this,text:a.addr,size:185,margin:10,backgroundColor:"#ffffff",foregroundColor:"#000000",fileType:"jpg",correctLevel:uQRCode.defaults.correctLevel,success:function(a){}})},upload:function(){var a=this;this.$storage.getLocalData("token"),"".concat(r.default.domain,"/user/pay");return uni.chooseImage({success:function(t){var e=t.tempFilePaths;a.img=e[0],a.$tips.showToast(a.getLangs("success"))}})},changeChain:function(a){this.chainname=a},saveGetPayAddHandler:function(){var a=this;return(0,i.default)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!==a.address){t.next=2;break}return t.abrupt("return",a.$tips.showToast(a.getLangs("addressInputTips")));case 2:return{},e={address:a.address,remarks:a.remarks,chainname:a.chainname},"undefined"!=typeof a.id&&Object.assign(e,{id:a.id}),t.next=7,(0,d.saveGetPayAdd)(e);case 7:n=t.sent,a.backTips(n),c.default.checkCode(n)&&setTimeout((function(){a.back()}),1500);case 10:case"end":return t.stop()}}),t)})))()}},onLoad:function(a){"{}"!==JSON.stringify(a)&&(this.id=a.id,this.address=a.address,this.remarks=a.remarks,this.chainname=a.chainname)},onShow:function(){this.setTitle(this.getLangs("addWalletAddress"))}};t.default=u},7761:function(a,t,e){"use strict";var n=e("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(e("5530"));e("96cf");var r=n(e("1da1")),s=e("2f62"),o=n(e("6f5f")),d=n(e("e3e4")),c=n(e("395c")),u=n(e("cc8a")),l=e("54fa"),f={data:function(){return{currentOS:""}},methods:{navigateTo:function(a,t){var e="undefined"===typeof t||"{}"===JSON.stringify(t)?"":"?".concat(c.default.convertObj(t));uni.navigateTo({url:a+e})},redirectTo:function(a){uni.redirectTo({url:a})},reLaunch:function(a){uni.reLaunch({url:a})},switchTab:function(a){uni.switchTab({url:a})},back:function(){var a=d.default.getOS();return"ios"===a||"android"===a?uni.navigateBack():history.back(-1)},setTitle:function(a){uni.setNavigationBarTitle({title:"undefined"===typeof a||""===a?o.default.appName:a})},moveHandle:function(){},getCurrentPageData:function(a){var t=getCurrentPages(),e=t[t.length-1];switch(a){case"opt":return e.options;case"route":return e.route;default:return e}},backToPage:function(a){d.default.getOS();this.navigateTo(a)},backTips:function(a){if(u.default.checkCode(a))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(a.rpMsg)},toServcie:function(){return(0,r.default)(regeneratorRuntime.mark((function a(){var t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,(0,l.getNConfig)();case 2:return t=a.sent,a.abrupt("return",window.location.href=t.data.kfUrl);case 5:case"end":return a.stop()}}),a)})))()},customBack:function(){return window.location.href="/"}},computed:(0,i.default)({createOSClass:function(){return"h5"}},(0,s.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=d.default.getOS()}},v=f;t.default=v},aa16:function(a,t,e){"use strict";e.r(t);var n=e("6067"),i=e("0c81");for(var r in i)"default"!==r&&function(a){e.d(t,a,(function(){return i[a]}))}(r);e("5cd2");var s,o=e("f0c5"),d=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"2a6bd74a",null,!1,n["a"],s);t["default"]=d.exports},ccd3:function(a,t,e){var n=e("24fb");t=n(!1),t.push([a.i,".wallet_class[data-v-2a6bd74a]{height:100%;padding:%?40?%;border-top:1px solid hsla(0,0%,100%,.1);background:#20222c}.wallet_class .title[data-v-2a6bd74a]{font-size:%?32?%;color:#aaa;font-weight:700}.wallet_class .currency_label[data-v-2a6bd74a]{background:hsla(0,0%,100%,.05);margin-top:%?20?%;line-height:%?80?%;padding-left:%?40?%;color:#fff;font-weight:700;-webkit-border-radius:%?10?%;border-radius:%?10?%}.linked_main .name[data-v-2a6bd74a]{margin-top:%?20?%;font-weight:700;color:#aaa;display:block;line-height:%?80?%;font-size:%?28?%}.linked_main .linked_label[data-v-2a6bd74a]{width:%?160?%;display:inline-block;padding:%?10?%;margin-right:%?20?%;color:#aaa;-webkit-border-radius:%?10?%;border-radius:%?10?%;text-align:center;font-size:%?28?%}.linked_main .linked_label.on[data-v-2a6bd74a]{background:#2970e6;border:1px solid #2970e6;color:#fff}.recharge_main[data-v-2a6bd74a]{background:#f9f9f9;padding:%?40?%;text-align:center;margin-top:%?40?%}.recharge_main uni-canvas[data-v-2a6bd74a]{text-align:center;margin:0 auto %?20?% auto}.recharge_main .btns[data-v-2a6bd74a]{font-size:%?24?%;background:#4944b3;margin-top:%?20?%;padding:%?10?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;text-align:center;width:%?180?%;color:#fff}.addr_title[data-v-2a6bd74a]{font-size:%?26?%;color:#8d9dbc;display:block;margin-top:%?40?%;margin-bottom:%?20?%}.addr[data-v-2a6bd74a]{display:block;line-height:%?80?%;font-size:%?26?%;color:#242b46;font-weight:700;text-align:center}.wallet_label[data-v-2a6bd74a]{position:relative;padding-left:%?90?%;margin-bottom:%?30?%;padding-bottom:%?30?%;border-bottom:1px solid #eee}.wallet_label .icon[data-v-2a6bd74a]{width:%?70?%;height:%?70?%;-webkit-border-radius:50%;border-radius:50%;position:absolute;background:#f9f9f9;left:0;top:0;text-align:center;color:#4944b3;line-height:%?50?%}.wallet_label .icon .iconfont[data-v-2a6bd74a]{font-size:%?40?%}.wallet_label .name[data-v-2a6bd74a]{font-size:%?28?%;color:#72899a}.wallet_label .value[data-v-2a6bd74a]{font-size:%?32?%;color:#4944b3}.qrcode[data-v-2a6bd74a]{margin-top:10px}.btns[data-v-2a6bd74a]{font-size:%?24?%;background:#4944b3;margin-top:%?20?%;padding:%?10?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;text-align:center;width:%?180?%;color:#fff}.upload_main[data-v-2a6bd74a]{padding:%?40?%;background:hsla(0,0%,100%,.1);-webkit-box-sizing:border-box;box-sizing:border-box;width:%?300?%;height:%?300?%;text-align:center}.img[data-v-2a6bd74a]{width:%?300?%;height:%?300?%}.upload_main .iconfont[data-v-2a6bd74a]{display:block;line-height:%?140?%;font-size:%?90?%;color:#c6ced3}.upload_main .name[data-v-2a6bd74a]{color:#c6ced3;font-size:%?28?%;display:block;font-weight:400;line-height:0}.tips[data-v-2a6bd74a]{font-size:%?24?%;color:#62759a}.input_bars[data-v-2a6bd74a]{padding:%?20?%}.input_bars .input_bar[data-v-2a6bd74a]{font-size:%?28?%;font-weight:400}",""]),a.exports=t},e3e4:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={setStatusBarColor:function(a){},checkNetWorkStatus:function(){},getOS:function(){var a=uni.getSystemInfoSync().platform;return a}},i=n;t.default=i},fea2:function(a,t,e){var n=e("ccd3");"string"===typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);var i=e("4f06").default;i("00392b69",n,!0,{sourceMap:!1,shadowMode:!1})}}]);