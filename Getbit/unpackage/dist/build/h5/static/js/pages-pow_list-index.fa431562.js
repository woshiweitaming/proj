(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-pow_list-index"],{"42cc":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("1da1")),o=i(n("a29b")),s=i(n("6049")),r=n("ea0f"),c={name:"PowProductList",mixins:[o.default,s.default],data:function(){return{dataList:[]}},methods:{getMiningProcuteListHandler:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,r.getMiningProcuteList)();case 2:n=e.sent,t.dataList=n.list;case 4:case"end":return e.stop()}}),e)})))()}},onShow:function(){this.getMiningProcuteListHandler()}};e.default=c},"4cbe":function(t,e,n){"use strict";n.r(e);var i=n("7886"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},7500:function(t,e,n){"use strict";n.r(e);var i=n("d27b"),a=n("cfc1");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("b031");var s,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"5d5d28c0",null,!1,i["a"],s);e["default"]=c.exports},7886:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-empty",props:{src:{type:String,default:""},text:{type:String,default:""},color:{type:String,default:"#c0c4cc"},iconColor:{type:String,default:"#c0c4cc"},iconSize:{type:[String,Number],default:120},fontSize:{type:[String,Number],default:26},mode:{type:String,default:"data"},imgWidth:{type:[String,Number],default:120},imgHeight:{type:[String,Number],default:"auto"},show:{type:Boolean,default:!0},marginTop:{type:[String,Number],default:0},iconStyle:{type:Object,default:function(){return{}}}},data:function(){return{icons:{car:"购物车为空",page:"页面不存在",search:"没有搜索结果",address:"没有收货地址",wifi:"没有WiFi",order:"订单为空",coupon:"没有优惠券",favor:"暂无收藏",permission:"无权限",history:"无历史记录",news:"无新闻列表",message:"消息列表为空",list:"列表为空",data:"数据为空"}}}};e.default=i},"7a70":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));try{i={uIcon:n("a9f5").default}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("v-uni-view",{staticClass:"u-empty",style:{marginTop:t.marginTop+"rpx"}},[n("u-icon",{attrs:{name:t.src?t.src:"empty-"+t.mode,"custom-style":t.iconStyle,label:t.text?t.text:t.icons[t.mode],"label-pos":"bottom","label-color":t.color,"label-size":t.fontSize,size:t.iconSize,color:t.iconColor,"margin-top":"14"}}),n("v-uni-view",{staticClass:"u-slot-wrap"},[t._t("bottom")],2)],1):t._e()},o=[]},"7e78":function(t,e,n){"use strict";var i=n("b327"),a=n.n(i);a.a},"7e7e":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-empty[data-v-4b8fe751]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%}.u-image[data-v-4b8fe751]{margin-bottom:%?20?%}.u-slot-wrap[data-v-4b8fe751]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?20?%}',""]),t.exports=e},"8f90":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-5d5d28c0]{background:#f9f9f9}.pow_list_class[data-v-5d5d28c0]{height:100%;padding-bottom:%?140?%;border-top:1px solid #f9f9f9;background:#f9f9f9}.list[data-v-5d5d28c0]{padding:%?20?%}.list .labels[data-v-5d5d28c0]{padding:%?20?%;-webkit-border-radius:%?20?%;border-radius:%?20?%;padding:%?20?%;background:#fff;border-bottom:%?20?%;-webkit-box-shadow:0 %?10?% %?20?% 0 rgba(0,0,0,.05);box-shadow:0 %?10?% %?20?% 0 rgba(0,0,0,.05);margin-bottom:%?20?%;position:relative}.list .algorithm[data-v-5d5d28c0]{font-size:%?26?%;color:#aaa}.list .name[data-v-5d5d28c0]{font-size:%?32?%;color:#14181f}.list .bottom[data-v-5d5d28c0]{border-top:1px solid #f9f9f9;margin-top:%?20?%;padding-top:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex}.list .bottom .items[data-v-5d5d28c0]{width:50%;text-align:center}.list .bottom .items .name[data-v-5d5d28c0]{color:#7c91c0;font-size:%?24?%}.list .bottom .items .value[data-v-5d5d28c0]{color:#242b46;font-weight:700}.list .hd[data-v-5d5d28c0]{padding-left:%?80?%;position:relative}.list .hd .icon[data-v-5d5d28c0]{width:%?60?%;height:%?60?%;position:absolute;left:0;top:%?10?%}.list .hd .rate[data-v-5d5d28c0]{font-size:%?36?%;position:absolute;right:0;top:%?15?%;font-weight:700;color:#605cf0}body.?%PAGE?%[data-v-5d5d28c0]{background:#f9f9f9}",""]),t.exports=e},"9d90":function(t,e,n){var i=n("8f90");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("572d2149",i,!0,{sourceMap:!1,shadowMode:!1})},b031:function(t,e,n){"use strict";var i=n("9d90"),a=n.n(i);a.a},b327:function(t,e,n){var i=n("7e7e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("24080b17",i,!0,{sourceMap:!1,shadowMode:!1})},cfc1:function(t,e,n){"use strict";n.r(e);var i=n("42cc"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},d27b:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));try{i={uEmpty:n("dacb").default}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"pow_list_class"},[n("v-uni-view",{staticClass:"list"},[0==t.dataList.length?n("u-empty",{attrs:{text:t.getLangs("noData"),mode:"list"}}):t._l(t.dataList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"labels",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navigateTo("/pages/pow_trade/index",{mpid:e.mpid})}}},[n("v-uni-view",{staticClass:"hd"},[n("v-uni-image",{staticClass:"icon",attrs:{src:e.logo}}),n("v-uni-view",{staticClass:"name"},[t._v(t._s(e.mineMachineName))]),n("v-uni-view",{staticClass:"algorithm"},[t._v(t._s(e.algorithm)+t._s(t.getLangs("powp10")))]),n("v-uni-view",{staticClass:"rate"},[t._v(t._s(e.mineRate)+t._s(e.unit))])],1),n("v-uni-view",{staticClass:"bottom"},[n("v-uni-view",{staticClass:"items"},[n("v-uni-view",{staticClass:"value"},[t._v(t._s(e.mineMonthPrice))]),n("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("powp21"))+"(USDT)")])],1),n("v-uni-view",{staticClass:"items"},[n("v-uni-view",{staticClass:"value"},[t._v(t._s(e.minePrice))]),n("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("powp23"))+"(USDT)")])],1)],1)],1)}))],2)],1)},o=[]},dacb:function(t,e,n){"use strict";n.r(e);var i=n("7a70"),a=n("4cbe");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("7e78");var s,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"4b8fe751",null,!1,i["a"],s);e["default"]=c.exports}}]);