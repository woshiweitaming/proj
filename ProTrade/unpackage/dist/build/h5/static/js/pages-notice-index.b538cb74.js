(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-notice-index"],{"2e40":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,"uni-page-body[data-v-8e0e73c6]{background:#fff}body.?%PAGE?%[data-v-8e0e73c6]{background:#fff}",""]),e.exports=t},4105:function(e,t,n){"use strict";var a=n("d079"),r=n.n(a);r.a},"44d7":function(e,t,n){"use strict";n.r(t);var a=n("4656"),r=n("657c");for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("4105"),n("82ee");var c,u=n("f0c5"),i=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"8e0e73c6",null,!1,a["a"],c);t["default"]=i.exports},4656:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"notice"},[n("v-uni-rich-text",{attrs:{nodes:e.content}})],1)},o=[]},"50d7":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".notice[data-v-8e0e73c6]{padding:20px}",""]),e.exports=t},"657c":function(e,t,n){"use strict";n.r(t);var a=n("e2b3"),r=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=r.a},"82ee":function(e,t,n){"use strict";var a=n("e1d3"),r=n.n(a);r.a},d079:function(e,t,n){var a=n("2e40");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=n("4f06").default;r("c6e79186",a,!0,{sourceMap:!1,shadowMode:!1})},e1d3:function(e,t,n){var a=n("50d7");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=n("4f06").default;r("30ab475c",a,!0,{sourceMap:!1,shadowMode:!1})},e2b3:function(e,t,n){"use strict";var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var r=a(n("1da1")),o=n("0a19"),c={name:"Notice",data:function(){return{content:""}},methods:{getConfigHandler:function(){var e=this;return(0,r.default)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,o.getNConfig)();case 2:n=t.sent,null!==n.data.notice&&(e.content=n.data.notice.content);case 4:case"end":return t.stop()}}),t)})))()}},onLoad:function(){this.getConfigHandler()}};t.default=c}}]);