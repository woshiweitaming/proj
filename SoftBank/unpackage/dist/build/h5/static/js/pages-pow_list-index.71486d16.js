(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-pow_list-index"],{"07be":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uEmpty:i("6d77").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"pow_list_class"},[i("v-uni-view",{staticClass:"list"},[0==t.dataList.length?i("u-empty",{attrs:{text:t.getLangs("noData"),mode:"list"}}):t._l(t.dataList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"labels",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navigateTo("/pages/pow_trade/index",{mpid:e.mpid})}}},[i("v-uni-view",{staticClass:"hd"},[i("v-uni-image",{staticClass:"icon",attrs:{src:e.logo}}),i("v-uni-view",{staticClass:"name"},[t._v(t._s(e.mineMachineName))]),i("v-uni-view",{staticClass:"algorithm"},[t._v(t._s(e.algorithm)+t._s(t.getLangs("powp10")))]),i("v-uni-view",{staticClass:"rate"},[t._v(t._s(e.mineRate)+t._s(e.unit))])],1),i("v-uni-view",{staticClass:"bottom"},[i("v-uni-view",{staticClass:"items"},[i("v-uni-view",{staticClass:"value"},[t._v(t._s(e.mineMonthPrice))]),i("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("powp21"))+"(USDT)")])],1),i("v-uni-view",{staticClass:"items"},[i("v-uni-view",{staticClass:"value"},[t._v(t._s(e.minePrice))]),i("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("powp23"))+"(USDT)")])],1)],1)],1)}))],2)],1)},o=[]},"2b8e":function(t,e,i){"use strict";var n=i("f530"),a=i.n(n);a.a},"3a97":function(t,e,i){"use strict";i.r(e);var n=i("f7ec"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"61d1":function(t,e,i){"use strict";i.r(e);var n=i("07be"),a=i("7432");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("d7d0");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"5d5d28c0",null,!1,n["a"],s);e["default"]=c.exports},"6bb4":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-empty[data-v-4b8fe751]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%}.u-image[data-v-4b8fe751]{margin-bottom:%?20?%}.u-slot-wrap[data-v-4b8fe751]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?20?%}',""]),t.exports=e},"6d77":function(t,e,i){"use strict";i.r(e);var n=i("e3a6"),a=i("3a97");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("2b8e");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"4b8fe751",null,!1,n["a"],s);e["default"]=c.exports},7432:function(t,e,i){"use strict";i.r(e);var n=i("b1f6"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},b1f6:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=n(i("1da1")),o=n(i("2c75")),s=n(i("9b7a")),r=i("7ede"),c={name:"PowProductList",mixins:[o.default,s.default],data:function(){return{dataList:[]}},methods:{getMiningProcuteListHandler:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,r.getMiningProcuteList)();case 2:i=e.sent,t.dataList=i.list;case 4:case"end":return e.stop()}}),e)})))()}},onShow:function(){this.getMiningProcuteListHandler()}};e.default=c},bcf2:function(t,e,i){var n=i("f5a3");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("1eb9e53b",n,!0,{sourceMap:!1,shadowMode:!1})},d7d0:function(t,e,i){"use strict";var n=i("bcf2"),a=i.n(n);a.a},e3a6:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uIcon:i("937d").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("v-uni-view",{staticClass:"u-empty",style:{marginTop:t.marginTop+"rpx"}},[i("u-icon",{attrs:{name:t.src?t.src:"empty-"+t.mode,"custom-style":t.iconStyle,label:t.text?t.text:t.icons[t.mode],"label-pos":"bottom","label-color":t.color,"label-size":t.fontSize,size:t.iconSize,color:t.iconColor,"margin-top":"14"}}),i("v-uni-view",{staticClass:"u-slot-wrap"},[t._t("bottom")],2)],1):t._e()},o=[]},f530:function(t,e,i){var n=i("6bb4");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("231f5a76",n,!0,{sourceMap:!1,shadowMode:!1})},f5a3:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-5d5d28c0]{background:#f9f9f9}.pow_list_class[data-v-5d5d28c0]{height:100%;padding-bottom:%?140?%;border-top:1px solid #f9f9f9;background:#f9f9f9}.list[data-v-5d5d28c0]{padding:%?20?%}.list .labels[data-v-5d5d28c0]{padding:%?20?%;-webkit-border-radius:%?20?%;border-radius:%?20?%;padding:%?20?%;background:#fff;border-bottom:%?20?%;-webkit-box-shadow:0 %?10?% %?20?% 0 rgba(0,0,0,.05);box-shadow:0 %?10?% %?20?% 0 rgba(0,0,0,.05);margin-bottom:%?20?%;position:relative}.list .algorithm[data-v-5d5d28c0]{font-size:%?26?%;color:#aaa}.list .name[data-v-5d5d28c0]{font-size:%?32?%;color:#14181f}.list .bottom[data-v-5d5d28c0]{border-top:1px solid #f9f9f9;margin-top:%?20?%;padding-top:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex}.list .bottom .items[data-v-5d5d28c0]{width:50%;text-align:center}.list .bottom .items .name[data-v-5d5d28c0]{color:#7c91c0;font-size:%?24?%}.list .bottom .items .value[data-v-5d5d28c0]{color:#242b46;font-weight:700}.list .hd[data-v-5d5d28c0]{padding-left:%?80?%;position:relative}.list .hd .icon[data-v-5d5d28c0]{width:%?60?%;height:%?60?%;position:absolute;left:0;top:%?10?%}.list .hd .rate[data-v-5d5d28c0]{font-size:%?36?%;position:absolute;right:0;top:%?15?%;font-weight:700;color:#605cf0}body.?%PAGE?%[data-v-5d5d28c0]{background:#f9f9f9}",""]),t.exports=e},f7ec:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-empty",props:{src:{type:String,default:""},text:{type:String,default:""},color:{type:String,default:"#c0c4cc"},iconColor:{type:String,default:"#c0c4cc"},iconSize:{type:[String,Number],default:120},fontSize:{type:[String,Number],default:26},mode:{type:String,default:"data"},imgWidth:{type:[String,Number],default:120},imgHeight:{type:[String,Number],default:"auto"},show:{type:Boolean,default:!0},marginTop:{type:[String,Number],default:0},iconStyle:{type:Object,default:function(){return{}}}},data:function(){return{icons:{car:"购物车为空",page:"页面不存在",search:"没有搜索结果",address:"没有收货地址",wifi:"没有WiFi",order:"订单为空",coupon:"没有优惠券",favor:"暂无收藏",permission:"无权限",history:"无历史记录",news:"无新闻列表",message:"消息列表为空",list:"列表为空",data:"数据为空"}}}};e.default=n}}]);