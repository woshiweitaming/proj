(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-pow_list-index"],{"0fb3":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-empty",props:{src:{type:String,default:""},text:{type:String,default:""},color:{type:String,default:"#c0c4cc"},iconColor:{type:String,default:"#c0c4cc"},iconSize:{type:[String,Number],default:120},fontSize:{type:[String,Number],default:26},mode:{type:String,default:"data"},imgWidth:{type:[String,Number],default:120},imgHeight:{type:[String,Number],default:"auto"},show:{type:Boolean,default:!0},marginTop:{type:[String,Number],default:0},iconStyle:{type:Object,default:function(){return{}}}},data:function(){return{icons:{car:"购物车为空",page:"页面不存在",search:"没有搜索结果",address:"没有收货地址",wifi:"没有WiFi",order:"订单为空",coupon:"没有优惠券",favor:"暂无收藏",permission:"无权限",history:"无历史记录",news:"无新闻列表",message:"消息列表为空",list:"列表为空",data:"数据为空"}}}};e.default=i},"1e78":function(t,e,a){"use strict";var i={uEmpty:a("472a").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"pow_list_class"},[a("v-uni-view",{staticClass:"list"},[0==t.dataList.length?a("u-empty",{attrs:{text:t.getLangs("noData"),mode:"list"}}):t._l(t.dataList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"labels",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navigateTo("/pages/pow_trade/index",{mpid:e.mpid})}}},[a("v-uni-view",{staticClass:"hd"},[a("v-uni-image",{staticClass:"icon",attrs:{src:"https://static.bafang.com/cdn/assets/imgs/MjAxOTc/98F3C13AB14C645860397A54084B2C7C.png"}}),a("v-uni-view",{staticClass:"name"},[t._v(t._s(e.mineMachineName))]),a("v-uni-view",{staticClass:"algorithm"},[t._v(t._s(e.algorithm)+t._s(t.getLangs("powp10")))]),a("v-uni-view",{staticClass:"rate"},[t._v(t._s(e.mineRate)+t._s(e.unit))])],1),a("v-uni-view",{staticClass:"bottom"},[a("v-uni-view",{staticClass:"items"},[a("v-uni-view",{staticClass:"value"},[t._v(t._s(e.minePrice))]),a("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("powp21"))+"(USDT)")])],1),a("v-uni-view",{staticClass:"items"},[a("v-uni-view",{staticClass:"value"},[t._v(t._s(e.mineMonthPrice))]),a("v-uni-view",{staticClass:"name"},[t._v(t._s(t.getLangs("powp23"))+"(USDT)")])],1)],1)],1)}))],2)],1)},o=[];a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}))},"366d":function(t,e,a){"use strict";a.r(e);var i=a("82ca"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"472a":function(t,e,a){"use strict";a.r(e);var i=a("e340"),n=a("dda4");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("f1ca");var s,r=a("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"4b8fe751",null,!1,i["a"],s);e["default"]=c.exports},"5e3c":function(t,e,a){"use strict";a.r(e);var i=a("1e78"),n=a("366d");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("b549");var s,r=a("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"8179b2a2",null,!1,i["a"],s);e["default"]=c.exports},"82ca":function(t,e,a){"use strict";var i=a("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var n=i(a("c964")),o=i(a("9f04")),s=i(a("29ab")),r=a("7747"),c={name:"PowProductList",mixins:[o.default,s.default],data:function(){return{dataList:[]}},methods:{getMiningProcuteListHandler:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,r.getMiningProcuteList)();case 2:a=e.sent,t.dataList=a.list;case 4:case"end":return e.stop()}}),e)})))()}},onShow:function(){this.getMiningProcuteListHandler()}};e.default=c},"87b1":function(t,e,a){var i=a("e653");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("317aa3fd",i,!0,{sourceMap:!1,shadowMode:!1})},b549:function(t,e,a){"use strict";var i=a("eecb"),n=a.n(i);n.a},d063:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-8179b2a2]{background:#f9f9f9}.pow_list_class[data-v-8179b2a2]{height:100%;padding-bottom:%?140?%;border-top:1px solid #f9f9f9;background:#f9f9f9}.list[data-v-8179b2a2]{padding:%?20?%}.list .labels[data-v-8179b2a2]{padding:%?20?%;border-radius:%?20?%;padding:%?20?%;background:#fff;border-bottom:%?20?%;box-shadow:0 %?10?% %?20?% 0 rgba(0,0,0,.05);margin-bottom:%?20?%;position:relative}.list .algorithm[data-v-8179b2a2]{font-size:%?26?%;color:#aaa}.list .name[data-v-8179b2a2]{font-size:%?32?%;color:#14181f}.list .bottom[data-v-8179b2a2]{border-top:1px solid #f9f9f9;margin-top:%?20?%;padding-top:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex}.list .bottom .items[data-v-8179b2a2]{width:50%;text-align:center}.list .bottom .items .name[data-v-8179b2a2]{color:#7c91c0;font-size:%?24?%}.list .bottom .items .value[data-v-8179b2a2]{color:#242b46;font-weight:700}.list .hd[data-v-8179b2a2]{padding-left:%?80?%;position:relative}.list .hd .icon[data-v-8179b2a2]{width:%?60?%;height:%?60?%;position:absolute;left:0;top:%?10?%}.list .hd .rate[data-v-8179b2a2]{font-size:%?36?%;position:absolute;right:0;top:%?15?%;font-weight:700;color:#605cf0}body.?%PAGE?%[data-v-8179b2a2]{background:#f9f9f9}",""]),t.exports=e},dda4:function(t,e,a){"use strict";a.r(e);var i=a("0fb3"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},e340:function(t,e,a){"use strict";var i={uIcon:a("7e29").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.show?a("v-uni-view",{staticClass:"u-empty",style:{marginTop:t.marginTop+"rpx"}},[a("u-icon",{attrs:{name:t.src?t.src:"empty-"+t.mode,"custom-style":t.iconStyle,label:t.text?t.text:t.icons[t.mode],"label-pos":"bottom","label-color":t.color,"label-size":t.fontSize,size:t.iconSize,color:t.iconColor,"margin-top":"14"}}),a("v-uni-view",{staticClass:"u-slot-wrap"},[t._t("bottom")],2)],1):t._e()},o=[];a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}))},e653:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-empty[data-v-4b8fe751]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%}.u-image[data-v-4b8fe751]{margin-bottom:%?20?%}.u-slot-wrap[data-v-4b8fe751]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?20?%}',""]),t.exports=e},eecb:function(t,e,a){var i=a("d063");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("f396b710",i,!0,{sourceMap:!1,shadowMode:!1})},f1ca:function(t,e,a){"use strict";var i=a("87b1"),n=a.n(i);n.a}}]);