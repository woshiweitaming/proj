(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-share-index"],{"3cab":function(e,t,a){"use strict";var i=a("4ea4");a("ac1f"),a("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var n=i(a("1da1")),s=i(a("6a9c")),r=i(a("2b04")),o=i(a("e2ee")),c=i(a("881d")),u=a("3b9e"),d={name:"Share",mixins:[s.default,r.default],data:function(){return{code:"",url:"",show:!1,cansWidth:150,cansHeight:150}},methods:{getTgUrlHandler:function(){var e=this;return(0,n.default)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,u.getTgUrl)();case 2:a=t.sent,e.url=a.data.url,e.code=e.url.split("?")[1].split("=")[1],e.createQrCode();case 6:case"end":return t.stop()}}),t)})))()},createQrCode:function(){var e=this,t=this;o.default.make({canvasId:"qrcode",componentInstance:this,text:t.url,size:150,margin:10,backgroundColor:"#ffffff",foregroundColor:"#151936",fileType:"jpg",correctLevel:o.default.defaults.correctLevel,success:function(t){e.qrcode=t,e.show=!0}})},copy:function(){var e=this.url,t=(0,c.default)(e);!1===t?this.$tips.showToast("当前环境不支持"):this.$tips.showToast(this.getLangs("success")),uni.setClipboardData({data:e}),this.$tips.showToast(this.getLangs("success"))},save:function(){var e=this;return(0,n.default)(regeneratorRuntime.mark((function t(){var a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=1.5,i=e,a=1,uni.canvasToTempFilePath({x:0,y:0,width:i.cansWidth*a,height:i.cansHeight*a,destWidth:i.cansWidth*a*2,destHeight:i.cansHeight*a*2,canvasId:"qrcode",success:function(e){uni.hideLoading(),uni.saveImageToPhotosAlbum({filePath:e.tempFilePath,success:function(t){i.$tips.showToast(i.getLangs("success")),i.imgsrc=e.tempFilePath},fail:function(e){"saveImageToPhotosAlbum:fail auth deny"==e.errMsg&&uni.showModal({title:i.getLangs("authp1"),success:function(e){e.confirm&&uni.openSetting({success:function(e){},fail:function(e){console.log(e)}})}})}})},fail:function(e){uni.hideLoading()}},e);case 4:case"end":return t.stop()}}),t)})))()}},onShow:function(){this.setTitle(this.getLangs("sp1")),this.getTgUrlHandler()}};t.default=d},"614e":function(e,t,a){"use strict";var i;a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return i}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"share_class"},[a("v-uni-view",{staticClass:"qrcode_share"},[e._v(e._s(e.getLangs("sp2")))]),a("v-uni-view",{staticClass:"qrcode"},[a("v-uni-canvas",{staticClass:"qrcode_img",attrs:{"canvas-id":"qrcode"}})],1),a("v-uni-view",{staticClass:"qrcode_btn"},[a("v-uni-view",{staticClass:"btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.save.apply(void 0,arguments)}}},[e._v(e._s(e.getLangs("sp4")))])],1),a("v-uni-view",{staticClass:"qrcode_share"},[e._v(e._s(e.getLangs("sp5")))]),a("v-uni-view",{staticClass:"qrcode_inputbar"},[e._v(e._s(e.url))]),a("v-uni-text",{staticClass:"copy",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.copy.apply(void 0,arguments)}}},[e._v(e._s(e.getLangs("sp7")))]),a("v-uni-view",{staticClass:"invite"},[a("v-uni-text",{staticClass:"p"},[e._v(e._s(e.getLangs("sp6")))]),a("v-uni-text",{staticClass:"p"},[e._v(e._s(e.code))])],1)],1)},s=[]},"99c1":function(e,t,a){"use strict";a.r(t);var i=a("3cab"),n=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,(function(){return i[e]}))}(s);t["default"]=n.a},"9b64":function(e,t,a){"use strict";var i=a("c75e"),n=a.n(i);n.a},c603:function(e,t,a){"use strict";a.r(t);var i=a("614e"),n=a("99c1");for(var s in n)"default"!==s&&function(e){a.d(t,e,(function(){return n[e]}))}(s);a("9b64");var r,o=a("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"6e8e1562",null,!1,i["a"],r);t["default"]=c.exports},c75e:function(e,t,a){var i=a("f19a");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("6f80e324",i,!0,{sourceMap:!1,shadowMode:!1})},f19a:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,".share_class[data-v-6e8e1562]{padding:%?20?%}.qrcode_share[data-v-6e8e1562]{color:#aaa;text-align:center;line-height:%?100?%;font-size:%?32?%}.qrcode[data-v-6e8e1562]{width:100%;text-align:center;position:relative;z-index:1}.qrcode_btn[data-v-6e8e1562]{margin-top:%?40?%;margin-bottom:%?40?%}.qrcode_btn .btn[data-v-6e8e1562]{width:40%;margin:%?20?% auto;text-align:center;border:#4493f5 2px solid;line-height:%?80?%;-webkit-border-radius:%?40?%;border-radius:%?40?%;color:#4493f5}.qrcode_inputbar[data-v-6e8e1562]{width:90%;line-height:%?70?%;color:#aaa;text-align:center;font-weight:700;-webkit-border-radius:%?20?%;border-radius:%?20?%;background:hsla(0,0%,100%,.1);margin:auto;position:relative;padding:0 %?20?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.copy[data-v-6e8e1562]{color:#007aff;margin-top:%?20?%;text-align:center;display:block}.invite[data-v-6e8e1562]{text-align:center;margin-top:%?60?%}.invite .p[data-v-6e8e1562]{display:block;line-height:%?60?%;color:#aaa;font-weight:700}.logo[data-v-6e8e1562]{width:50px;height:50px;position:absolute;left:50%;top:50%;margin-left:-25px;margin-top:-25px;z-index:2}.qrcode_img[data-v-6e8e1562]{width:150px;height:150px;display:inline-block;position:relative}",""]),e.exports=t}}]);