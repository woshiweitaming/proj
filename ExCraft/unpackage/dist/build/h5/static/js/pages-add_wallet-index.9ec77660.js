(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-add_wallet-index"],{"1ad3":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},i=n;e.default=i},"35aa":function(t,e,a){"use strict";a.r(e);var n=a("d819"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},"433e":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".wallet_class[data-v-37c88907]{height:100%;padding:%?40?%;border-top:1px solid hsla(0,0%,100%,.1);background:#151936}.wallet_class .title[data-v-37c88907]{font-size:%?32?%;color:#aaa;font-weight:700}.wallet_class .currency_label[data-v-37c88907]{background:hsla(0,0%,100%,.05);margin-top:%?20?%;line-height:%?80?%;padding-left:%?40?%;color:#fff;font-weight:700;-webkit-border-radius:%?10?%;border-radius:%?10?%}.linked_main .name[data-v-37c88907]{margin-top:%?20?%;font-weight:700;color:#aaa;display:block;line-height:%?80?%;font-size:%?28?%}.linked_main .linked_label[data-v-37c88907]{width:%?160?%;display:inline-block;padding:%?10?%;margin-right:%?20?%;color:#aaa;-webkit-border-radius:%?10?%;border-radius:%?10?%;text-align:center;font-size:%?28?%}.linked_main .linked_label.on[data-v-37c88907]{background:#2970e6;border:1px solid #2970e6;color:#fff}.recharge_main[data-v-37c88907]{background:#f9f9f9;padding:%?40?%;text-align:center;margin-top:%?40?%}.recharge_main uni-canvas[data-v-37c88907]{text-align:center;margin:0 auto %?20?% auto}.recharge_main .btns[data-v-37c88907]{font-size:%?24?%;background:#343a5e;margin-top:%?20?%;padding:%?10?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;text-align:center;width:%?180?%;color:#fff}.addr_title[data-v-37c88907]{font-size:%?26?%;color:#8d9dbc;display:block;margin-top:%?40?%;margin-bottom:%?20?%}.addr[data-v-37c88907]{display:block;line-height:%?80?%;font-size:%?26?%;color:#242b46;font-weight:700;text-align:center}.wallet_label[data-v-37c88907]{position:relative;padding-left:%?90?%;margin-bottom:%?30?%;padding-bottom:%?30?%;border-bottom:1px solid #eee}.wallet_label .icon[data-v-37c88907]{width:%?70?%;height:%?70?%;-webkit-border-radius:50%;border-radius:50%;position:absolute;background:#f9f9f9;left:0;top:0;text-align:center;color:#343a5e;line-height:%?50?%}.wallet_label .icon .iconfont[data-v-37c88907]{font-size:%?40?%}.wallet_label .name[data-v-37c88907]{font-size:%?28?%;color:#72899a}.wallet_label .value[data-v-37c88907]{font-size:%?32?%;color:#343a5e}.qrcode[data-v-37c88907]{margin-top:10px}.btns[data-v-37c88907]{font-size:%?24?%;background:#343a5e;margin-top:%?20?%;padding:%?10?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;text-align:center;width:%?180?%;color:#fff}.upload_main[data-v-37c88907]{padding:%?40?%;background:hsla(0,0%,100%,.1);-webkit-box-sizing:border-box;box-sizing:border-box;width:%?300?%;height:%?300?%;text-align:center}.img[data-v-37c88907]{width:%?300?%;height:%?300?%}.upload_main .iconfont[data-v-37c88907]{display:block;line-height:%?140?%;font-size:%?90?%;color:#c6ced3}.upload_main .name[data-v-37c88907]{color:#c6ced3;font-size:%?28?%;display:block;font-weight:400;line-height:0}.tips[data-v-37c88907]{font-size:%?24?%;color:#62759a}.input_bars[data-v-37c88907]{padding:%?20?%}.input_bars .input_bar[data-v-37c88907]{font-size:%?28?%;font-weight:400}.select_drop[data-v-37c88907]{z-index:10000}",""]),t.exports=e},"6cfe":function(t,e,a){"use strict";var n=a("aa00"),i=a.n(n);i.a},"85cb":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"wallet_class"},[a("v-uni-view",{staticClass:"linked_main"},[a("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("currency")))]),a("v-uni-view",{staticClass:"select",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopClick.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"select_label",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!t.show}}},[a("v-uni-view",{staticClass:"select_name"},[t._v(t._s(t.typeList.length>0&&t.typeList[t.type].pname))]),a("v-uni-text",{staticClass:"iconfont icon-unfold"})],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"select_drop"},[a("v-uni-view",{staticClass:"selelct_drop_main",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopClick.apply(void 0,arguments)}}},t._l(t.typeList,(function(e,n){return a("v-uni-view",{key:n,staticClass:"select_drop_label",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.changeDrop(e.type)}}},[t._v(t._s(e.pname))])})),1)],1)],1)],1),a("v-uni-view",{staticClass:"linked_main"},[a("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("walletAddress")))]),a("v-uni-view",{staticClass:"currency_label input_bars"},[a("v-uni-input",{staticClass:"input_bar",attrs:{type:"text",placeholder:t.getLangs("addressInputTips")},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1)],1),a("v-uni-view",{staticClass:"linked_main"},[a("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("remark")))]),a("v-uni-view",{staticClass:"currency_label input_bars"},[a("v-uni-input",{staticClass:"input_bar",attrs:{type:"text",placeholder:t.getLangs("remarkInputTips")},model:{value:t.remarks,callback:function(e){t.remarks=e},expression:"remarks"}})],1)],1),a("v-uni-view",{staticClass:"linked_main"},[a("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("walletQrcode")))]),a("v-uni-view",{staticClass:"upload",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.upload.apply(void 0,arguments)}}},[""===t.img?a("v-uni-view",{staticClass:"upload_main"},[a("v-uni-text",{staticClass:"iconfont icon-add"}),a("v-uni-text",{staticClass:"name"},[t._v(t._s(t.getLangs("walletQrcode")))])],1):a("v-uni-image",{staticClass:"img",attrs:{src:t.img}})],1)],1),a("v-uni-view",{staticClass:"form_class"},[a("v-uni-button",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.saveGetPayAddHandler.apply(void 0,arguments)}}},[t._v(t._s(t.getLangs("confirm")))])],1)],1)},s=[]},aa00:function(t,e,a){var n=a("433e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("26743ef0",n,!0,{sourceMap:!1,shadowMode:!1})},b1fc:function(t,e,a){"use strict";a.r(e);var n=a("85cb"),i=a("35aa");for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("6cfe");var r,o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"37c88907",null,!1,n["a"],r);e["default"]=c.exports},d819:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var i=n(a("1da1")),s=n(a("7b9c")),r=n(a("86eb")),o=n(a("f9e1")),c=a("36e9"),d=n(a("4c57")),l={name:"Recharging",mixins:[o.default,r.default],data:function(){return{addr:"",id:"",chainList:["OMINI","ERC20","TRC20"],chainname:"OMINI",address:"",remarks:"",img:"",type:0,typeList:[],show:!1}},methods:{openDrop:function(){this.show=!this.show},changeDrop:function(t){this.type=t,this.show=!1},stopClick:function(t){t.stopPropagation()},eventClick:function(){this.show=!1},getPayUrlAddsHandler:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={id:t.id},e.next=3,getPayUrlAdds(a);case 3:n=e.sent,t.chainList=n.data,t.addr=n.data[t.chainId].val,t.createQrCode();case 7:case"end":return e.stop()}}),e)})))()},createQrCode:function(){var t=this;uQRCode.make({canvasId:"qrcode",componentInstance:this,text:t.addr,size:185,margin:10,backgroundColor:"#ffffff",foregroundColor:"#151936",fileType:"jpg",correctLevel:uQRCode.defaults.correctLevel,success:function(t){}})},upload:function(){var t=this;this.$storage.getLocalData("token"),"".concat(s.default.domain,"/user/pay");return uni.chooseImage({success:function(e){var a=e.tempFilePaths;t.img=a[0],t.$tips.showToast(t.getLangs("success"))}})},changeChain:function(t){this.chainname=t},saveGetPayAddHandler:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==t.address){e.next=2;break}return e.abrupt("return",t.$tips.showToast(t.getLangs("addressInputTips")));case 2:return{},a={address:t.address,remarks:t.remarks,chainname:t.chainname,type:t.type},"undefined"!=typeof t.id&&Object.assign(a,{id:t.id}),e.next=7,(0,c.saveGetPayAdd)(a);case 7:n=e.sent,t.backTips(n),d.default.checkCode(n)&&setTimeout((function(){t.back()}),1500);case 10:case"end":return e.stop()}}),e)})))()},getWithdrawalTypeListHandler:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,c.getWithdrawalTypeList)();case 2:a=e.sent,t.typeList=a.list;case 4:case"end":return e.stop()}}),e)})))()}},onLoad:function(t){"{}"!==JSON.stringify(t)&&(this.id=t.id,this.address=t.address,this.remarks=t.remarks,this.chainname=t.chainname)},onShow:function(){this.setTitle(this.getLangs("addWalletAddress")),this.getWithdrawalTypeListHandler()}};e.default=l},f9e1:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530")),s=a("2f62"),r=n(a("7b9c")),o=n(a("1ad3")),c=n(a("b8c8")),d=n(a("4c57")),l={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,e){var a="undefined"===typeof e||"{}"===JSON.stringify(e)?"":"?".concat(c.default.convertObj(e));uni.navigateTo({url:t+a})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=o.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?r.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var e=getCurrentPages(),a=e[e.length-1];switch(t){case"opt":return a.options;case"route":return a.route;default:return a}},backToPage:function(t){o.default.getOS();this.navigateTo(t)},backTips:function(t){if(d.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,i.default)({createOSClass:function(){return"h5"}},(0,s.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=o.default.getOS()}},u=l;e.default=u}}]);