(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-share-index"],{"097a":function(t,e,a){"use strict";a.r(e);var i=a("7608"),n=a("156f");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("1bca");var o,c=a("f0c5"),r=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"8c3aba3e",null,!1,i["a"],o);e["default"]=r.exports},"156f":function(t,e,a){"use strict";a.r(e);var i=a("f64f"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"1bca":function(t,e,a){"use strict";var i=a("ab24"),n=a.n(i);n.a},3778:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".share_class[data-v-8c3aba3e]{padding:%?20?%}.qrcode_share[data-v-8c3aba3e]{color:#aaa;text-align:center;line-height:%?100?%;font-size:%?32?%}.qrcode[data-v-8c3aba3e]{width:100%;text-align:center;position:relative;z-index:1}.qrcode_btn[data-v-8c3aba3e]{margin-top:%?40?%;margin-bottom:%?40?%}.qrcode_btn .btn[data-v-8c3aba3e]{width:40%;margin:%?20?% auto;text-align:center;border:#4493f5 2px solid;line-height:%?80?%;-webkit-border-radius:%?40?%;border-radius:%?40?%;color:#4493f5}.qrcode_inputbar[data-v-8c3aba3e]{width:90%;line-height:%?70?%;color:#aaa;text-align:center;font-weight:700;-webkit-border-radius:%?20?%;border-radius:%?20?%;background:hsla(0,0%,100%,.1);margin:auto;position:relative;padding:0 %?20?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.copy[data-v-8c3aba3e]{color:#007aff;margin-top:%?20?%;text-align:center;display:block}.invite[data-v-8c3aba3e]{text-align:center;margin-top:%?60?%}.invite .p[data-v-8c3aba3e]{display:block;line-height:%?60?%;color:#aaa;font-weight:700}.logo[data-v-8c3aba3e]{width:50px;height:50px;position:absolute;left:50%;top:50%;margin-left:-25px;margin-top:-25px;z-index:2}.qrcode_img[data-v-8c3aba3e]{width:150px;height:150px;display:inline-block;position:relative}",""]),t.exports=e},7608:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"share_class"},[i("v-uni-view",{staticClass:"qrcode_share"},[t._v(t._s(t.getLangs("sp2")))]),i("v-uni-view",{staticClass:"qrcode"},[i("v-uni-canvas",{staticClass:"qrcode_img",attrs:{"canvas-id":"qrcode"}},[t.show?i("v-uni-image",{staticClass:"logo",attrs:{src:a("84f7")}}):t._e()],1)],1),i("v-uni-view",{staticClass:"qrcode_btn"},[i("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save.apply(void 0,arguments)}}},[t._v(t._s(t.getLangs("sp4")))])],1),i("v-uni-view",{staticClass:"qrcode_share"},[t._v(t._s(t.getLangs("sp5")))]),i("v-uni-view",{staticClass:"qrcode_inputbar"},[t._v(t._s(t.url))]),i("v-uni-text",{staticClass:"copy",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copy.apply(void 0,arguments)}}},[t._v(t._s(t.getLangs("sp7")))]),i("v-uni-view",{staticClass:"invite"},[i("v-uni-text",{staticClass:"p"},[t._v(t._s(t.getLangs("sp6")))]),i("v-uni-text",{staticClass:"p"},[t._v(t._s(t.code))])],1)],1)},s=[]},"84f7":function(t,e,a){t.exports=a.p+"static/img/login_logo.4a24109e.png"},ab24:function(t,e,a){var i=a("3778");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("1ae6cb18",i,!0,{sourceMap:!1,shadowMode:!1})},f64f:function(t,e,a){"use strict";var i=a("4ea4");a("ac1f"),a("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var n=i(a("1da1")),s=i(a("9b7a")),o=i(a("2c75")),c=i(a("166c")),r=i(a("ccca")),u=a("7ede"),l={name:"Share",mixins:[s.default,o.default],data:function(){return{code:"",url:"",show:!1,cansWidth:150,cansHeight:150}},methods:{getTgUrlHandler:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.getTgUrl)();case 2:a=e.sent,t.url=a.data.url,t.code=t.url.split("?")[1].split("=")[1],t.createQrCode();case 6:case"end":return e.stop()}}),e)})))()},createQrCode:function(){var t=this,e=this;c.default.make({canvasId:"qrcode",componentInstance:this,text:e.url,size:150,margin:10,backgroundColor:"#ffffff",foregroundColor:"#000000",fileType:"jpg",correctLevel:c.default.defaults.correctLevel,success:function(e){t.qrcode=e,t.show=!0}})},copy:function(){var t=this.url,e=(0,r.default)(t);!1===e?this.$tips.showToast("当前环境不支持"):this.$tips.showToast(this.getLangs("success")),uni.setClipboardData({data:t}),this.$tips.showToast(this.getLangs("success"))},save:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=1.5,i=t,a=1,uni.canvasToTempFilePath({x:0,y:0,width:i.cansWidth*a,height:i.cansHeight*a,destWidth:i.cansWidth*a*2,destHeight:i.cansHeight*a*2,canvasId:"qrcode",success:function(t){uni.hideLoading(),uni.saveImageToPhotosAlbum({filePath:t.tempFilePath,success:function(e){i.$tips.showToast(i.getLangs("success")),i.imgsrc=t.tempFilePath},fail:function(t){"saveImageToPhotosAlbum:fail auth deny"==t.errMsg&&uni.showModal({title:i.getLangs("authp1"),success:function(t){t.confirm&&uni.openSetting({success:function(t){},fail:function(t){console.log(t)}})}})}})},fail:function(t){uni.hideLoading()}},t);case 4:case"end":return e.stop()}}),e)})))()}},onShow:function(){this.setTitle(this.getLangs("sp1")),this.getTgUrlHandler()}};e.default=l}}]);