(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-wallet-index"],{"01a5":function(t,e,i){var n=i("5726");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("79582308",n,!0,{sourceMap:!1,shadowMode:!1})},"086a":function(t,e,i){"use strict";i.r(e);var n=i("8790"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"1d77":function(t,e,i){"use strict";var n=function(t){(t.options.wxs||(t.options.wxs={}))["swipe"]=function(t){function e(t,e,i,n){var a=n.getState();if(a.position=JSON.parse(t),a.position&&0!==a.position.length){var o=a.position[0].show;a.left=a.left||a.position[0].left,c(!!o,n,i)}}function i(t,e){var i=t.instance,n=i.getState(),a=t.touches[0].pageX;i.removeClass("ani");for(var o=e.selectAllComponents(".button-hock"),s=0;s<o.length;s++)o[s].removeClass("ani");n.left=n.left||n.position[0].left,n.width=a-n.left,e.callMethod("closeSwipe")}function n(t,e){var i=t.instance,n=i.getDataset().disabled,a=i.getState();if(n=("string"===typeof n?JSON.parse(n):n)||!1,!n){var s=t.touches[0].pageX;o(s-a.width,i,e)}}function a(t,e){var i=t.instance,n=i.getDataset().disabled,a=i.getState();n=("string"===typeof n?JSON.parse(n):n)||!1,n||s(a.left,-40,i,e)}function o(t,e,i){var n=e.getState(),a=Math.max(-n.position[1].width,Math.min(t,0));n.left=a,e.setStyle({transform:"translateX("+a+"px)","-webkit-transform":"translateX("+a+"px)"}),r(a,e,i)}function s(t,e,i,n){var a=i.getState(),o=a.position,s=a.isopen;o[1].width?s?-t<=o[1].width?c(!1,i,n):c(!0,i,n):c(t<=e,i,n):c(!1,i,n)}function r(t,e,i){for(var n=i.selectAllComponents(".button-hock"),a=e.getState(),o=a.position,s=[],r=0,c=0;c<n.length;c++){if(!n[c].getDataset().button)return;var u=JSON.parse(n[c].getDataset().button);"string"===typeof u&&(u=JSON.parse(u));var l=u[c]&&u[c].width||0;r+=l,s.push(-r);var d=s[c-1]+t*(s[c-1]/o[1].width);0!=c&&n[c].setStyle({transform:"translateX("+d+"px)"})}}function c(t,e,i){var n=e.getState(),a=n.position;void 0===n.isopen&&(n.isopen=!1),n.isopen!==t&&i.callMethod("change",{open:t}),n.isopen=t,e.addClass("ani");for(var s=i.selectAllComponents(".button-hock"),r=0;r<s.length;r++)s[r].addClass("ani");o(t?-a[1].width:0,e,i)}return t.exports={sizeReady:e,touchstart:i,touchmove:n,touchend:a},t.exports}({exports:{}})};e["a"]=n},"47c9":function(t,e,i){"use strict";i.r(e);var n=i("fb60"),a=i("e0fc");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("cc2c");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"816291e6",null,!1,n["a"],s);e["default"]=c.exports},"48f0":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".swipe_action[data-v-816291e6]{width:100%}",""]),t.exports=e},"4c97":function(t,e,i){var n=i("48f0");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("5a2cb8d2",n,!0,{sourceMap:!1,shadowMode:!1})},5432:function(t,e,i){"use strict";i("4160"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{}},provide:function(){return{swipeaction:this}},created:function(){this.children=[]},methods:{closeOther:function(t){var e=this.children;e.forEach((function(e,i){if(t!==e){var n=e.position[0],a=n.show;a&&(n.show=!1)}}))}}};e.default=n},5726:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-swipe[data-v-2537a4f2]{overflow:hidden;width:100%}.uni-swipe .icons[data-v-2537a4f2]{width:%?80?%;height:%?80?%}.uni-swipe-box[data-v-2537a4f2]{position:relative;width:100%}.uni-swipe_content[data-v-2537a4f2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;position:relative}.uni-swipe_move-box[data-v-2537a4f2]{display:-webkit-box;display:-webkit-flex;display:flex;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-swipe_box[data-v-2537a4f2]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;width:100%;-webkit-flex-shrink:0;flex-shrink:0;font-size:14px;background-color:#20222c}.uni-swipe_button-group[data-v-2537a4f2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-shrink:0;flex-shrink:0;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-swipe_button[data-v-2537a4f2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 20px}.uni-swipe_button-text[data-v-2537a4f2]{-webkit-flex-shrink:0;flex-shrink:0;font-size:14px}.ani[data-v-2537a4f2]{-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:cubic-bezier(.165,.84,.44,1);transition-timing-function:cubic-bezier(.165,.84,.44,1)}',""]),t.exports=e},"5cdd":function(t,e,i){var n=i("aedc");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("d06e2f64",n,!0,{sourceMap:!1,shadowMode:!1})},"5e9c":function(t,e,i){"use strict";var n=i("5cdd"),a=i.n(n);a.a},"5ef7":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniSwipeAction:i("47c9").default,uniSwipeActionItem:i("79d7").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"wallet_class"},[n("v-uni-view",{staticClass:"wallet_list"},[0===t.dataList.length?n("v-uni-view",{staticClass:"no_data"},[t._v(t._s(t.getLangs("noData")))]):t._l(t.dataList,(function(e,a){return n("v-uni-view",{key:a,staticClass:"labels"},[n("uni-swipe-action",[n("uni-swipe-action-item",{attrs:{options:t.options},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClick(i,e)}}},[n("v-uni-view",{staticClass:"items"},[n("v-uni-text",{staticClass:"currency"},[t._v("USDT")]),n("v-uni-text",{staticClass:"box"},[t._v(t._s(e.chainname))])],1),n("v-uni-view",{staticClass:"items"},[n("v-uni-text",{staticClass:"name"},[t._v(t._s(e.remarks))])],1),n("v-uni-view",{staticClass:"items"},[n("v-uni-text",{staticClass:"address"},[t._v(t._s(e.address))])],1),n("v-uni-view",{staticClass:"more"},[n("v-uni-image",{staticClass:"more_icon",attrs:{src:i("d18e")}})],1)],1)],1)],1)}))],2),n("v-uni-view",{staticClass:"wallet_btn"},[n("v-uni-view",{staticClass:"buttons",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateTo("/pages/add_wallet/index")}}},[t._v(t._s(t.getLangs("addWalletAddress")))])],1)],1)},o=[]},"65ca":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("5530")),o=i("2f62"),s=n(i("f61b")),r=n(i("d639")),c=n(i("8dc7")),u=n(i("a615")),l={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,e){var i="undefined"===typeof e||"{}"===JSON.stringify(e)?"":"?".concat(c.default.convertObj(e));uni.navigateTo({url:t+i})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=r.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?s.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var e=getCurrentPages(),i=e[e.length-1];switch(t){case"opt":return i.options;case"route":return i.route;default:return i}},backToPage:function(t){r.default.getOS();this.navigateTo(t)},backTips:function(t){if(u.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,a.default)({createOSClass:function(){return"h5"}},(0,o.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=r.default.getOS()}},d=l;e.default=d},"78cc":function(t,e,i){"use strict";i.r(e);var n=i("5ef7"),a=i("086a");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("5e9c");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"35b218b0",null,!1,n["a"],s);e["default"]=c.exports},"79d7":function(t,e,i){"use strict";i.r(e);var n=i("a91f"),a=i("8901");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("825ac");var s,r=i("f0c5"),c=i("1d77"),u=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"2537a4f2",null,!1,n["a"],s);"function"===typeof c["a"]&&Object(c["a"])(u),e["default"]=u.exports},"825ac":function(t,e,i){"use strict";var n=i("01a5"),a=i.n(n);a.a},8790:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=n(i("1da1")),o=n(i("65ca")),s=n(i("5922")),r=n(i("47c9")),c=n(i("79d7")),u=n(i("a615")),l=i("4ddf"),d={name:"Wallet",mixins:[o.default,s.default],data:function(){return{dataList:[],options:[{text:"取消",icon:"/static/images/edit_icon.png",style:{backgroundColor:"#20222c"}},{text:"确认",icon:"/static/images/del_icon.png",style:{backgroundColor:"#20222c"}}]}},components:{uniSwipeAction:r.default,uniSwipeActionItem:c.default},methods:{getPayAddListHandler:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,l.getPayAddList)();case 2:i=e.sent,t.dataList=i.data;case 4:case"end":return e.stop()}}),e)})))()},onClick:function(t,e){var i=t.index;0===i&&this.navigateTo("/pages/add_wallet/index",e),1===i&&this.delPayAddressHander(e.id)},delPayAddressHander:function(t){var e=this;return(0,a.default)(regeneratorRuntime.mark((function i(){var n,a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return n={id:t},i.next=3,(0,l.delPayAddress)(n);case 3:a=i.sent,e.backTips(a),u.default.checkCode(a)&&e.getPayAddListHandler();case 6:case"end":return i.stop()}}),i)})))()}},onShow:function(){this.setTitle(this.getLangs("walletAddress")),this.getPayAddListHandler()}};e.default=d},8901:function(t,e,i){"use strict";i.r(e);var n=i("915a"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"915a":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("db84")),o={mixins:[a.default],props:{options:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1},show:{type:Boolean,default:!1},autoClose:{type:Boolean,default:!0}},inject:["swipeaction"]};e.default=o},a91f:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-swipe"},[i("v-uni-view",{staticClass:"uni-swipe_content"},[i("v-uni-view",{wxsProps:{"change:prop":"pos"},staticClass:"uni-swipe_move-box selector-query-hock move-hock",attrs:{"data-disabled":t.disabled,"data-position":t.pos,"change:prop":t.swipe.sizeReady,prop:t.pos},on:{touchstart:function(e){e=t.$handleWxsEvent(e),t.swipe.touchstart(e,t.$getComponentDescriptor())},touchmove:function(e){e=t.$handleWxsEvent(e),t.swipe.touchmove(e,t.$getComponentDescriptor())},touchend:function(e){e=t.$handleWxsEvent(e),t.swipe.touchend(e,t.$getComponentDescriptor())},change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-swipe_box"},[t._t("default")],2),i("v-uni-view",{ref:"selector-button-hock",staticClass:"uni-swipe_button-group selector-query-hock move-hock"},t._l(t.options,(function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-swipe_button button-hock",style:{backgroundColor:e.style&&e.style.backgroundColor?e.style.backgroundColor:"#C7C6CD",fontSize:e.style&&e.style.fontSize?e.style.fontSize:"16px"},attrs:{"data-button":t.btn},on:{touchend:function(i){arguments[0]=i=t.$handleEvent(i),t.onClick(n,e)}}},[i("v-uni-view",{staticClass:"uni-swipe_button-text",style:{color:e.style&&e.style.color?e.style.color:"#FFFFFF"}},[i("v-uni-image",{staticClass:"icons",attrs:{src:e.icon}})],1)],1)})),1)],1)],1)],1)},o=[]},aedc:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-35b218b0]{background:#111}.wallet_class[data-v-35b218b0]{height:100%;padding-bottom:%?130?%;-webkit-box-sizing:border-box;box-sizing:border-box;border-top:1px solid hsla(0,0%,100%,.1)}.wallet_class .wallet_btn[data-v-35b218b0]{width:100%;height:%?80?%;text-align:center;position:fixed;left:0;bottom:%?40?%;padding:0 %?40?%;-webkit-box-sizing:border-box;box-sizing:border-box}.wallet_class .wallet_btn .buttons[data-v-35b218b0]{width:100%;height:%?80?%;text-align:center;background:#2970e6;color:#fff;text-align:center;line-height:%?80?%;height:%?80?%;-webkit-border-radius:%?40?%;border-radius:%?40?%}.wallet_list[data-v-35b218b0]{height:100%;margin-top:%?20?%}.wallet_list .labels[data-v-35b218b0]{padding:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid hsla(0,0%,100%,.1);background:#20222c;position:relative;display:-webkit-box;display:-webkit-flex;display:flex}.wallet_list .items[data-v-35b218b0]{width:100%}.wallet_list .labels .currency[data-v-35b218b0],\n.wallet_list .labels .name[data-v-35b218b0]{font-size:%?32?%;font-weight:700;line-height:%?50?%}.wallet_list .labels .currency[data-v-35b218b0]{color:#fff}.wallet_list .labels .name[data-v-35b218b0]{color:#aaa}.wallet_list .labels .address[data-v-35b218b0]{font-size:%?24?%;color:#90a2b0}.wallet_list .labels .box[data-v-35b218b0]{font-size:%?24?%;text-align:center;background:#eff5fd;color:#588bf7;display:inline-block;margin-left:%?20?%;font-weight:700;padding:0 5px}.wallet_list .more[data-v-35b218b0]{position:absolute;width:%?20?%;height:%?20?%;position:absolute;right:0;top:%?50?%}.wallet_list .more .more_icon[data-v-35b218b0]{width:%?5?%;height:%?30?%}body.?%PAGE?%[data-v-35b218b0]{background:#111}",""]),t.exports=e},cc2c:function(t,e,i){"use strict";var n=i("4c97"),a=i.n(n);a.a},d18e:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAZElEQVQoU2M8ePKiIisL40IGRkbz////n/zz538849Gzlw4xMjLaMsDA//+HGY+du/yDgYGBHS7IwPCT8djZS4cY0FWCzWRlXsjA8N+c4f//k79BZiJpgzMHWHAk+x1rdNArQACPBXEOUr/pSAAAAABJRU5ErkJggg=="},d639:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},a=n;e.default=a},db84:function(t,e,i){"use strict";i("4160"),i("a434"),i("ac1f"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{position:[],button:[]}},computed:{pos:function(){return JSON.stringify(this.position)},btn:function(){return JSON.stringify(this.button)}},watch:{show:function(t){if(!this.autoClose){var e=this.position[0];e?(e.show=t,this.$set(this.position,0,e)):this.init()}}},created:function(){void 0!==this.swipeaction.children&&this.swipeaction.children.push(this)},mounted:function(){this.init()},beforeDestroy:function(){var t=this;this.swipeaction.children.forEach((function(e,i){e===t&&t.swipeaction.children.splice(i,1)}))},methods:{init:function(){var t=this;setTimeout((function(){t.getSize(),t.getButtonSize()}),50)},closeSwipe:function(t){this.autoClose&&this.swipeaction.closeOther(this)},change:function(t){this.$emit("change",t.open);var e=this.position[0];e.show!==t.open&&(e.show=t.open,this.$set(this.position,0,e))},onClick:function(t,e){this.$emit("click",{content:e,index:t})},appTouchStart:function(){},appTouchEnd:function(){},getSize:function(){var t=this,e=uni.createSelectorQuery().in(this);e.selectAll(".selector-query-hock").boundingClientRect((function(e){t.autoClose?e[0].show=!1:e[0].show=t.show,t.position=e})).exec()},getButtonSize:function(){var t=this,e=uni.createSelectorQuery().in(this);e.selectAll(".button-hock").boundingClientRect((function(e){t.button=e})).exec()}}};e.default=n},e0fc:function(t,e,i){"use strict";i.r(e);var n=i("5432"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},fb60:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"swipe_action"},[t._t("default")],2)},o=[]}}]);