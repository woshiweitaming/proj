(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-wallet-index"],{"1de9":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".swipe_action[data-v-816291e6]{width:100%}",""]),t.exports=e},"251c":function(t,e,n){"use strict";var i=n("3340"),a=n.n(i);a.a},"29a6":function(t,e,n){var i=n("1de9");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("75102c9a",i,!0,{sourceMap:!1,shadowMode:!1})},3340:function(t,e,n){var i=n("4f68");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("14a29dfd",i,!0,{sourceMap:!1,shadowMode:!1})},3961:function(t,e,n){"use strict";n.r(e);var i=n("9536"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"3b20":function(t,e,n){var i=n("d674");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("4a929ade",i,!0,{sourceMap:!1,shadowMode:!1})},"4b23":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("1da1")),o=i(n("a95b")),s=i(n("f6df")),r=i(n("a522")),c=i(n("bb9c")),u=i(n("7b1f")),l=n("b7f0"),d={name:"Wallet",mixins:[o.default,s.default],data:function(){return{dataList:[],options:[{text:"取消",icon:"/static/images/edit_icon.png",style:{backgroundColor:"#fff"}},{text:"确认",icon:"/static/images/del_icon.png",style:{backgroundColor:"#fff"}}]}},components:{uniSwipeAction:r.default,uniSwipeActionItem:c.default},methods:{getPayAddListHandler:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,l.getPayAddList)();case 2:n=e.sent,t.dataList=n.data;case 4:case"end":return e.stop()}}),e)})))()},onClick:function(t,e){var n=t.index;0===n&&this.navigateTo("/pages/add_wallet/index",e),1===n&&this.delPayAddressHander(e.id)},delPayAddressHander:function(t){var e=this;return(0,a.default)(regeneratorRuntime.mark((function n(){var i,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i={id:t},n.next=3,(0,l.delPayAddress)(i);case 3:a=n.sent,e.backTips(a),u.default.checkCode(a)&&e.getPayAddListHandler();case 6:case"end":return n.stop()}}),n)})))()},toType:function(t){var e=["USDT","BTC","ETH"];return e[t]}},onShow:function(){this.setTitle(this.getLangs("walletAddress")),this.getPayAddListHandler()}};e.default=d},"4da6":function(t,e,n){"use strict";var i=n("3b20"),a=n.n(i);a.a},"4f68":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-swipe[data-v-2537a4f2]{overflow:hidden;width:100%}.uni-swipe .icons[data-v-2537a4f2]{width:%?80?%;height:%?80?%}.uni-swipe-box[data-v-2537a4f2]{position:relative;width:100%}.uni-swipe_content[data-v-2537a4f2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;position:relative}.uni-swipe_move-box[data-v-2537a4f2]{display:-webkit-box;display:-webkit-flex;display:flex;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-swipe_box[data-v-2537a4f2]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;width:100%;-webkit-flex-shrink:0;flex-shrink:0;font-size:14px;background-color:#20222c}.uni-swipe_button-group[data-v-2537a4f2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-shrink:0;flex-shrink:0;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-swipe_button[data-v-2537a4f2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 20px}.uni-swipe_button-text[data-v-2537a4f2]{-webkit-flex-shrink:0;flex-shrink:0;font-size:14px}.ani[data-v-2537a4f2]{-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:cubic-bezier(.165,.84,.44,1);transition-timing-function:cubic-bezier(.165,.84,.44,1)}',""]),t.exports=e},"53ec":function(t,e,n){"use strict";var i=function(t){(t.options.wxs||(t.options.wxs={}))["swipe"]=function(t){function e(t,e,n,i){var a=i.getState();if(a.position=JSON.parse(t),a.position&&0!==a.position.length){var o=a.position[0].show;a.left=a.left||a.position[0].left,c(!!o,i,n)}}function n(t,e){var n=t.instance,i=n.getState(),a=t.touches[0].pageX;n.removeClass("ani");for(var o=e.selectAllComponents(".button-hock"),s=0;s<o.length;s++)o[s].removeClass("ani");i.left=i.left||i.position[0].left,i.width=a-i.left,e.callMethod("closeSwipe")}function i(t,e){var n=t.instance,i=n.getDataset().disabled,a=n.getState();if(i=("string"===typeof i?JSON.parse(i):i)||!1,!i){var s=t.touches[0].pageX;o(s-a.width,n,e)}}function a(t,e){var n=t.instance,i=n.getDataset().disabled,a=n.getState();i=("string"===typeof i?JSON.parse(i):i)||!1,i||s(a.left,-40,n,e)}function o(t,e,n){var i=e.getState(),a=Math.max(-i.position[1].width,Math.min(t,0));i.left=a,e.setStyle({transform:"translateX("+a+"px)","-webkit-transform":"translateX("+a+"px)"}),r(a,e,n)}function s(t,e,n,i){var a=n.getState(),o=a.position,s=a.isopen;o[1].width?s?-t<=o[1].width?c(!1,n,i):c(!0,n,i):c(t<=e,n,i):c(!1,n,i)}function r(t,e,n){for(var i=n.selectAllComponents(".button-hock"),a=e.getState(),o=a.position,s=[],r=0,c=0;c<i.length;c++){if(!i[c].getDataset().button)return;var u=JSON.parse(i[c].getDataset().button);"string"===typeof u&&(u=JSON.parse(u));var l=u[c]&&u[c].width||0;r+=l,s.push(-r);var d=s[c-1]+t*(s[c-1]/o[1].width);0!=c&&i[c].setStyle({transform:"translateX("+d+"px)"})}}function c(t,e,n){var i=e.getState(),a=i.position;void 0===i.isopen&&(i.isopen=!1),i.isopen!==t&&n.callMethod("change",{open:t}),i.isopen=t,e.addClass("ani");for(var s=n.selectAllComponents(".button-hock"),r=0;r<s.length;r++)s[r].addClass("ani");o(t?-a[1].width:0,e,n)}return t.exports={sizeReady:e,touchstart:n,touchmove:i,touchend:a},t.exports}({exports:{}})};e["a"]=i},"5b2b":function(t,e,n){"use strict";n.r(e);var i=n("7fda"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"7fda":function(t,e,n){"use strict";n("4160"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},provide:function(){return{swipeaction:this}},created:function(){this.children=[]},methods:{closeOther:function(t){var e=this.children;e.forEach((function(e,n){if(t!==e){var i=e.position[0],a=i.show;a&&(i.show=!1)}}))}}};e.default=i},9165:function(t,e,n){"use strict";n.r(e);var i=n("4b23"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},9536:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("bf77")),o={mixins:[a.default],props:{options:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1},show:{type:Boolean,default:!1},autoClose:{type:Boolean,default:!0}},inject:["swipeaction"]};e.default=o},"984d":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"swipe_action"},[t._t("default")],2)},o=[]},a522:function(t,e,n){"use strict";n.r(e);var i=n("984d"),a=n("5b2b");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("b4ca");var s,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"816291e6",null,!1,i["a"],s);e["default"]=c.exports},a95b:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("5530")),o=n("2f62"),s=i(n("cbe6")),r=i(n("f4b1")),c=i(n("a985")),u=i(n("7b1f")),l={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,e){var n="undefined"===typeof e||"{}"===JSON.stringify(e)?"":"?".concat(c.default.convertObj(e));uni.navigateTo({url:t+n})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=r.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?s.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var e=getCurrentPages(),n=e[e.length-1];switch(t){case"opt":return n.options;case"route":return n.route;default:return n}},backToPage:function(t){r.default.getOS();this.navigateTo(t)},backTips:function(t){if(u.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,a.default)({createOSClass:function(){return"h5"}},(0,o.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=r.default.getOS()}},d=l;e.default=d},b4ca:function(t,e,n){"use strict";var i=n("29a6"),a=n.n(i);a.a},bb9c:function(t,e,n){"use strict";n.r(e);var i=n("ca74"),a=n("3961");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("251c");var s,r=n("f0c5"),c=n("53ec"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"2537a4f2",null,!1,i["a"],s);"function"===typeof c["a"]&&Object(c["a"])(u),e["default"]=u.exports},bf77:function(t,e,n){"use strict";n("4160"),n("a434"),n("ac1f"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{position:[],button:[]}},computed:{pos:function(){return JSON.stringify(this.position)},btn:function(){return JSON.stringify(this.button)}},watch:{show:function(t){if(!this.autoClose){var e=this.position[0];e?(e.show=t,this.$set(this.position,0,e)):this.init()}}},created:function(){void 0!==this.swipeaction.children&&this.swipeaction.children.push(this)},mounted:function(){this.init()},beforeDestroy:function(){var t=this;this.swipeaction.children.forEach((function(e,n){e===t&&t.swipeaction.children.splice(n,1)}))},methods:{init:function(){var t=this;setTimeout((function(){t.getSize(),t.getButtonSize()}),50)},closeSwipe:function(t){this.autoClose&&this.swipeaction.closeOther(this)},change:function(t){this.$emit("change",t.open);var e=this.position[0];e.show!==t.open&&(e.show=t.open,this.$set(this.position,0,e))},onClick:function(t,e){this.$emit("click",{content:e,index:t})},appTouchStart:function(){},appTouchEnd:function(){},getSize:function(){var t=this,e=uni.createSelectorQuery().in(this);e.selectAll(".selector-query-hock").boundingClientRect((function(e){t.autoClose?e[0].show=!1:e[0].show=t.show,t.position=e})).exec()},getButtonSize:function(){var t=this,e=uni.createSelectorQuery().in(this);e.selectAll(".button-hock").boundingClientRect((function(e){t.button=e})).exec()}}};e.default=i},c12a:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAZElEQVQoU2M8ePKiIisL40IGRkbz////n/zz538849Gzlw4xMjLaMsDA//+HGY+du/yDgYGBHS7IwPCT8djZS4cY0FWCzWRlXsjA8N+c4f//k79BZiJpgzMHWHAk+x1rdNArQACPBXEOUr/pSAAAAABJRU5ErkJggg=="},ca74:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-swipe"},[n("v-uni-view",{staticClass:"uni-swipe_content"},[n("v-uni-view",{wxsProps:{"change:prop":"pos"},staticClass:"uni-swipe_move-box selector-query-hock move-hock",attrs:{"data-disabled":t.disabled,"data-position":t.pos,"change:prop":t.swipe.sizeReady,prop:t.pos},on:{touchstart:function(e){e=t.$handleWxsEvent(e),t.swipe.touchstart(e,t.$getComponentDescriptor())},touchmove:function(e){e=t.$handleWxsEvent(e),t.swipe.touchmove(e,t.$getComponentDescriptor())},touchend:function(e){e=t.$handleWxsEvent(e),t.swipe.touchend(e,t.$getComponentDescriptor())},change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-swipe_box"},[t._t("default")],2),n("v-uni-view",{ref:"selector-button-hock",staticClass:"uni-swipe_button-group selector-query-hock move-hock"},t._l(t.options,(function(e,i){return n("v-uni-view",{key:i,staticClass:"uni-swipe_button button-hock",style:{backgroundColor:e.style&&e.style.backgroundColor?e.style.backgroundColor:"#C7C6CD",fontSize:e.style&&e.style.fontSize?e.style.fontSize:"16px"},attrs:{"data-button":t.btn},on:{touchend:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick(i,e)}}},[n("v-uni-view",{staticClass:"uni-swipe_button-text",style:{color:e.style&&e.style.color?e.style.color:"#FFFFFF"}},[n("v-uni-image",{staticClass:"icons",attrs:{src:e.icon}})],1)],1)})),1)],1)],1)],1)},o=[]},d674:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-29a4aef8]{background:#111}.wallet_class[data-v-29a4aef8]{height:100%;padding-bottom:%?130?%;box-sizing:border-box;border-top:1px solid hsla(0,0%,100%,.1)}.wallet_class .wallet_btn[data-v-29a4aef8]{width:100%;height:%?80?%;text-align:center;position:fixed;left:0;bottom:%?40?%;padding:0 %?40?%;box-sizing:border-box}.wallet_class .wallet_btn .buttons[data-v-29a4aef8]{width:100%;height:%?80?%;text-align:center;background:#2970e6;color:#fff;text-align:center;line-height:%?80?%;height:%?80?%;border-radius:%?40?%}.wallet_list[data-v-29a4aef8]{height:100%;margin-top:%?20?%}.wallet_list .labels[data-v-29a4aef8]{padding:%?20?%;box-sizing:border-box;border-bottom:1px solid hsla(0,0%,100%,.1);background:#20222c;position:relative;display:-webkit-box;display:-webkit-flex;display:flex}.wallet_list .items[data-v-29a4aef8]{width:100%}.wallet_list .labels .currency[data-v-29a4aef8],\n.wallet_list .labels .name[data-v-29a4aef8]{font-size:%?32?%;font-weight:700;line-height:%?50?%}.wallet_list .labels .currency[data-v-29a4aef8]{color:#fff}.wallet_list .labels .name[data-v-29a4aef8]{color:#aaa}.wallet_list .labels .address[data-v-29a4aef8]{font-size:%?24?%;color:#90a2b0}.wallet_list .labels .box[data-v-29a4aef8]{font-size:%?24?%;text-align:center;background:#eff5fd;color:#588bf7;display:inline-block;margin-left:%?20?%;font-weight:700;padding:0 5px}.wallet_list .more[data-v-29a4aef8]{position:absolute;width:%?20?%;height:%?20?%;position:absolute;right:0;top:%?50?%}.wallet_list .more .more_icon[data-v-29a4aef8]{width:%?5?%;height:%?30?%}body.?%PAGE?%[data-v-29a4aef8]{background:#111}",""]),t.exports=e},f13e:function(t,e,n){"use strict";n.r(e);var i=n("fba1"),a=n("9165");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("4da6");var s,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"29a4aef8",null,!1,i["a"],s);e["default"]=c.exports},f4b1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},a=i;e.default=a},fba1:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));try{i={uniSwipeAction:n("a522").default,uniSwipeActionItem:n("bb9c").default}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"wallet_class"},[i("v-uni-view",{staticClass:"wallet_list"},[0===t.dataList.length?i("v-uni-view",{staticClass:"no_data"},[t._v(t._s(t.getLangs("noData")))]):t._l(t.dataList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"labels"},[i("uni-swipe-action",[i("uni-swipe-action-item",{attrs:{options:t.options},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick(n,e)}}},[i("v-uni-view",{staticClass:"items"},[i("v-uni-text",{staticClass:"currency"},[t._v(t._s(t.toType(e.type)))]),i("v-uni-text",{staticClass:"box"},[t._v(t._s(e.chainname))])],1),i("v-uni-view",{staticClass:"items"},[i("v-uni-text",{staticClass:"name"},[t._v(t._s(e.remarks))])],1),i("v-uni-view",{staticClass:"items"},[i("v-uni-text",{staticClass:"address"},[t._v(t._s(e.address))])],1),i("v-uni-view",{staticClass:"more"},[i("v-uni-image",{staticClass:"more_icon",attrs:{src:n("c12a")}})],1)],1)],1)],1)}))],2),i("v-uni-view",{staticClass:"wallet_btn"},[i("v-uni-view",{staticClass:"buttons",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateTo("/pages/add_wallet/index")}}},[t._v(t._s(t.getLangs("addWalletAddress")))])],1)],1)},o=[]}}]);