(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-pow_record_detail-index"],{"04ed":function(e,t,a){"use strict";var i=a("4780"),n=a.n(i);n.a},"1ccc":function(e,t,a){"use strict";var i=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var n=i(a("1da1")),s=i(a("f70c")),o=i(a("ab9d")),u=a("96c3"),c={name:"PowSuccess",mixins:[s.default,o.default],data:function(){return{data:{},oid:"",menuList:["powp34","powp35"],buyType:["powp49","powp50"]}},methods:{getPowOrderDetailHandler:function(){var e=this;return(0,n.default)(regeneratorRuntime.mark((function t(){var a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={oid:e.oid},t.next=3,(0,u.getPowOrderDetail)(a);case 3:i=t.sent,e.data=i.data;case 5:case"end":return t.stop()}}),t)})))()},toBuyType:function(e){return this.getLangs(this.buyType[e])},toStatus:function(e){return this.getLangs(this.menuList[e])}},onLoad:function(e){this.oid=e.oid},onShow:function(){this.setTitle(this.getLangs("powp48")),this.getPowOrderDetailHandler()}};t.default=c},"2d11":function(e,t,a){"use strict";a.r(t);var i=a("1ccc"),n=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,(function(){return i[e]}))}(s);t["default"]=n.a},4780:function(e,t,a){var i=a("e1e7");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("47508b6a",i,!0,{sourceMap:!1,shadowMode:!1})},"76b3":function(e,t,a){"use strict";var i;a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return i}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"pow_class"},[a("v-uni-view",{staticClass:"pow_record_label"},[a("v-uni-view",{staticClass:"title"},[e._v(e._s(e.data.mineMachineName))]),a("v-uni-view",{staticClass:"labels"},[a("v-uni-view",{staticClass:"name"},[e._v(e._s(e.getLangs("powp7")))]),a("v-uni-view",{staticClass:"value"},[e._v(e._s(e.data.name))])],1),a("v-uni-view",{staticClass:"labels"},[a("v-uni-view",{staticClass:"name"},[e._v(e._s(e.getLangs("powp45")))]),a("v-uni-view",{staticClass:"value"},[e._v(e._s(e.data.algorithm))])],1),a("v-uni-view",{staticClass:"labels"},[a("v-uni-view",{staticClass:"name"},[e._v(e._s(e.getLangs("powp3")))]),a("v-uni-view",{staticClass:"value"},[e._v(e._s(e.data.mineRate)+e._s(e.data.unit))])],1),a("v-uni-view",{staticClass:"labels"},[a("v-uni-view",{staticClass:"name"},[e._v(e._s(e.getLangs("powp36")))]),a("v-uni-view",{staticClass:"value"},[e._v(e._s(e.data.earnings))])],1),a("v-uni-view",{staticClass:"labels"},[a("v-uni-view",{staticClass:"name"},[e._v(e._s(e.getLangs("powp41")))]),a("v-uni-view",{staticClass:"value"},[e._v(e._s(e.data.mineRate))])],1),a("v-uni-view",{staticClass:"labels"},[a("v-uni-view",{staticClass:"name"},[e._v(e._s(e.getLangs("type")))]),a("v-uni-view",{staticClass:"value type"},[e._v(e._s(e.toBuyType(e.data.buyType)))])],1),a("v-uni-view",{staticClass:"labels"},[a("v-uni-view",{staticClass:"name"},[e._v(e._s(e.getLangs("orderStatus")))]),a("v-uni-view",{staticClass:"value status"},[e._v(e._s(e.toStatus(e.data.status)))])],1),a("v-uni-view",{staticClass:"labels"},[a("v-uni-view",{staticClass:"name"},[e._v(e._s(e.getLangs("orderNumber")))]),a("v-uni-view",{staticClass:"value"},[e._v(e._s(e.data.orderNo))])],1),a("v-uni-view",{staticClass:"labels"},[a("v-uni-view",{staticClass:"name"},[e._v(e._s(e.getLangs("powp40")))]),a("v-uni-view",{staticClass:"value"},[e._v(e._s(e.data.endDate))])],1)],1)],1)},s=[]},a1ab:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={setStatusBarColor:function(e){},checkNetWorkStatus:function(){},getOS:function(){var e=uni.getSystemInfoSync().platform;return e}},n=i;t.default=n},bb66:function(e,t,a){"use strict";a.r(t);var i=a("76b3"),n=a("2d11");for(var s in n)"default"!==s&&function(e){a.d(t,e,(function(){return n[e]}))}(s);a("04ed");var o,u=a("f0c5"),c=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"33eceb06",null,!1,i["a"],o);t["default"]=c.exports},e1e7:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,"uni-page-body[data-v-33eceb06]{background:#f9f9f9}.pow_class[data-v-33eceb06]{text-align:center;height:100%;background:#f9f9f9;border-top:1px solid #f9f9f9}.pow_menu[data-v-33eceb06]{height:%?80?%;background:#242b46;text-align:left}.pow_menu .items[data-v-33eceb06]{display:inline-block;padding:0 %?20?%;text-align:center;color:#fff;line-height:%?80?%;color:hsla(0,0%,100%,.5)}.pow_menu .items.on[data-v-33eceb06]{font-size:%?36?%;color:#fff}.pow_main[data-v-33eceb06]{height:calc(100% - %?80?%)}.pow_record_label[data-v-33eceb06]{padding:%?20?%;border-bottom:1px solid #eee;background:#fff}.pow_record_label .title[data-v-33eceb06]{font-size:%?32?%;color:#081723;font-weight:700;text-align:left;margin-bottom:%?20?%}.pow_record_label .labels[data-v-33eceb06]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?26?%;margin-bottom:%?10?%}.pow_record_label .name[data-v-33eceb06]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;color:#aaa}.pow_record_label .value[data-v-33eceb06]{-webkit-box-flex:2;-webkit-flex:2;flex:2;text-align:right;font-weight:700}.pow_record_label .value.type[data-v-33eceb06]{color:#007aff}.pow_record_label .value.status[data-v-33eceb06]{color:#18b566}.scroll[data-v-33eceb06]{height:100%}body.?%PAGE?%[data-v-33eceb06]{background:#f9f9f9}",""]),e.exports=t},f70c:function(e,t,a){"use strict";var i=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("5530")),s=a("2f62"),o=i(a("fcad")),u=i(a("a1ab")),c=i(a("1b43")),r=i(a("b6b1")),l={data:function(){return{currentOS:""}},methods:{navigateTo:function(e,t){var a="undefined"===typeof t||"{}"===JSON.stringify(t)?"":"?".concat(c.default.convertObj(t));uni.navigateTo({url:e+a})},redirectTo:function(e){uni.redirectTo({url:e})},reLaunch:function(e){uni.reLaunch({url:e})},switchTab:function(e){uni.switchTab({url:e})},back:function(){var e=u.default.getOS();return"ios"===e||"android"===e?uni.navigateBack():history.back(-1)},setTitle:function(e){uni.setNavigationBarTitle({title:"undefined"===typeof e||""===e?o.default.appName:e})},moveHandle:function(){},getCurrentPageData:function(e){var t=getCurrentPages(),a=t[t.length-1];switch(e){case"opt":return a.options;case"route":return a.route;default:return a}},backToPage:function(e){u.default.getOS();this.navigateTo(e)},backTips:function(e){if(r.default.checkCode(e))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(e.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,n.default)({createOSClass:function(){return"h5"}},(0,s.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=u.default.getOS()}},v=l;t.default=v}}]);