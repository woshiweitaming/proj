(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-futures_record-index"],{"04b7":function(e,t,r){"use strict";var n=r("4ea4");r("d3b7"),r("ac1f"),r("25f0"),r("5319"),r("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("96cf");var a=n(r("1da1")),u=r("fa7c"),s=n(r("a914")),i={data:function(){return{dataList:[]}},methods:{getEntrustOrderHandler:function(e){var t=this;return(0,a.default)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,(0,u.getEntrustOrder)(e);case 2:n=r.sent,t.dataList=n.data;case 4:case"end":return r.stop()}}),r)})))()},closeContact:function(e){var t=this;return(0,a.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$tips.showModel(t.getLangs("sysTips"),t.getLangs("confirmClose"),t.getLangs("cancel"),t.getLangs("confirm"),function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(n){var a,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!n.confirm){r.next=7;break}return a={orderNo:e},r.next=4,(0,u.endContractOrder)(a);case 4:i=r.sent,s.default.checkCode(i)&&t.getEntrustOrderHandler({type:1}),t.backTips(i);case 7:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}());case 1:case"end":return r.stop()}}),r)})))()},closeCommission:function(e){var t=this;return(0,a.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$tips.showModel(t.getLangs("sysTips"),t.getLangs("revokeTips"),t.getLangs("cancel"),t.getLangs("confirm"),function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(n){var a,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!n.confirm){r.next=7;break}return a={orderNo:e},r.next=4,(0,u.revokeEntrust)(a);case 4:i=r.sent,s.default.checkCode(i)&&t.getEntrustOrderHandler({type:0}),t.backTips(i);case 7:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}());case 1:case"end":return r.stop()}}),r)})))()},getHistoryOrderHandler:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,u.getQhHistoryOrder)();case 2:r=t.sent,e.dataList=r.data;case 4:case"end":return t.stop()}}),t)})))()},getContractHistoryOrderHandler:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,u.getHistoryOrder)();case 2:r=t.sent,e.dataList=r.data;case 4:case"end":return t.stop()}}),t)})))()},getFuturesPositionHandler:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,u.getQhOrder)();case 2:r=t.sent,s.default.checkCode(r)&&(e.dataList=r.data);case 4:case"end":return t.stop()}}),t)})))()},getCoinHandler:function(e){var t=this;return(0,a.default)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,(0,u.getBbOrder)({type:e});case 2:n=r.sent,s.default.checkCode(n)&&(t.dataList=n.data);case 4:case"end":return r.stop()}}),r)})))()},revokeBbHandler:function(e){var t=this;return(0,a.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$tips.showModel(t.getLangs("sysTips"),t.getLangs("revokeTips"),t.getLangs("cancel"),t.getLangs("confirm"),function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(n){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!n.confirm){r.next=7;break}return{orderNo:e},r.next=4,(0,u.revokeBbEntrust)({orderNo:e});case 4:a=r.sent,s.default.checkCode(a)&&t.getCoinHandler(0),t.backTips(a);case 7:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}());case 1:case"end":return r.stop()}}),r)})))()},toTime:function(e){var t=e.substring(5,e.length-1);t=t.replace("-","/");var r=t.split(" "),n=r[1].toString(),a=r[0].toString();return n.substring(0,n.length-2)+" "+a}}},o=i;t.default=o},"0d8a":function(e,t,r){var n=r("24fb");t=n(!1),t.push([e.i,"uni-page-body[data-v-2bf5bb30]{background:#f9f9f9}.main_class[data-v-2bf5bb30]{padding:0;height:100%}.table_class[data-v-2bf5bb30]{padding-top:%?40?%}.table_menu[data-v-2bf5bb30]{width:100%;border-bottom:1px solid #111;background:#20222c;margin-bottom:%?40?%}.record_menu[data-v-2bf5bb30]{margin:auto;display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:%?20?%;padding:0 %?20?%}.record_menu .label[data-v-2bf5bb30]{width:50%;text-align:center;font-size:%?28?%;line-height:%?60?%;color:#333}.record_menu .label.on[data-v-2bf5bb30]{background:#2970e6;-webkit-border-radius:%?10?%;border-radius:%?10?%;color:#fff}.futures_menu[data-v-2bf5bb30],\n.contract_menu[data-v-2bf5bb30]{width:70%}.table_main[data-v-2bf5bb30]{height:100%}.content[data-v-2bf5bb30]{height:100%}.record_class[data-v-2bf5bb30]{height:calc(100% - %?80?%)!important;overflow:auto!important}body.?%PAGE?%[data-v-2bf5bb30]{background:#f9f9f9}",""]),e.exports=t},1117:function(e,t,r){var n=r("0d8a");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=r("4f06").default;a("7ff29122",n,!0,{sourceMap:!1,shadowMode:!1})},"2d4e":function(e,t,r){"use strict";var n=r("1117"),a=r.n(n);a.a},3153:function(e,t,r){"use strict";r.r(t);var n=r("cb38"),a=r("3424");for(var u in a)"default"!==u&&function(e){r.d(t,e,(function(){return a[e]}))}(u);r("2d4e");var s,i=r("f0c5"),o=Object(i["a"])(a["default"],n["b"],n["c"],!1,null,"2bf5bb30",null,!1,n["a"],s);t["default"]=o.exports},3424:function(e,t,r){"use strict";r.r(t);var n=r("b71f"),a=r.n(n);for(var u in n)"default"!==u&&function(e){r.d(t,e,(function(){return n[e]}))}(u);t["default"]=a.a},b71f:function(e,t,r){"use strict";var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r("2f62");var a=n(r("c81f")),u=n(r("67b4")),s=n(r("2ffb")),i=n(r("ec67")),o={name:"FuturesRecord",mixins:[a.default,u.default],components:{FuturesPositionRecord:s.default,FuturesHistoryRecord:i.default},data:function(){return{futures:{menuList:["position","history"],active:0}}},computed:{getKey:function(){return this.key}},methods:{changeFuturesType:function(e){this.futures.active=e}},onLoad:function(){this.futures.active=0},onShow:function(){this.setTitle(this.getLangs("orderCenter")),this.futures.active=0}};t.default=o},cb38:function(e,t,r){"use strict";var n;r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return u})),r.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{class:["main_class",e.createOSClass]},[r("v-uni-view",{staticClass:"table_class"},[r("v-uni-view",{class:["table_main"]},[r("v-uni-view",{staticClass:"content"},[r("v-uni-view",{staticClass:"record_menu futures_menu"},e._l(e.futures.menuList,(function(t,n){return r("v-uni-view",{key:n,class:["label",n===e.futures.active?"on":""],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changeFuturesType(n)}}},[e._v(e._s(e.getLangs(t)))])})),1),0===e.futures.active?r("FuturesPositionRecord",{attrs:{keys:e.getKey}}):e._e(),1===e.futures.active?r("FuturesHistoryRecord"):e._e()],1)],1)],1)],1)},u=[]},fa7c:function(e,t,r){"use strict";var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.revokeBbEntrust=t.getBbOrder=t.revokeEntrust=t.endContractOrder=t.getEntrustOrder=t.getHisOrderDetails=t.getQhHistoryOrder=t.getQhOrder=t.setEndProfit=t.getOrderDetails=t.revokePay=t.getHistoryOrder=t.getBonds=t.getPay=t.getWithdrawal=void 0;var a=n(r("77be")),u=(n(r("4328")),function(e){return(0,a.default)({url:"/user/getWithdrawal",method:"get",data:e})});t.getWithdrawal=u;var s=function(e){return(0,a.default)({url:"/user/getPay",method:"get",data:e})};t.getPay=s;var i=function(e){return(0,a.default)({url:"/user/getBonds",method:"get",data:e})};t.getBonds=i;var o=function(e){return(0,a.default)({url:"/user/getHistoryOrder",method:"get",data:e})};t.getHistoryOrder=o;var d=function(e){return(0,a.default)({url:"/user/revokePay",method:"get",data:e})};t.revokePay=d;var c=function(e){return(0,a.default)({url:"/user/getOrderDetails",method:"get",data:e})};t.getOrderDetails=c;var f=function(e){return(0,a.default)({url:"/user/setEndProfit",method:"post",data:e})};t.setEndProfit=f;var l=function(e){return(0,a.default)({url:"/user/getQhOrder",method:"get",data:e})};t.getQhOrder=l;var g=function(e){return(0,a.default)({url:"/user/getQhHisOrder",method:"get",data:e})};t.getQhHistoryOrder=g;var v=function(e){return(0,a.default)({url:"/user/getHisOrderDetails",method:"get",data:e})};t.getHisOrderDetails=v;var b=function(e){return(0,a.default)({url:"/user/getEntrustOrder",method:"get",data:e})};t.getEntrustOrder=b;var h=function(e){return(0,a.default)({url:"/user/endContractOrder",method:"get",data:e})};t.endContractOrder=h;var m=function(e){return(0,a.default)({url:"/user/revokeEntrust",method:"get",data:e})};t.revokeEntrust=m;var p=function(e){return(0,a.default)({url:"/user/getBbOrder",method:"get",data:e})};t.getBbOrder=p;var w=function(e){return(0,a.default)({url:"/user/revokeBbEntrust",method:"get",data:e})};t.revokeBbEntrust=w}}]);