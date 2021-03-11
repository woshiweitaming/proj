
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/home/index","pages/fund/index","pages/order/index","pages/user/index","pages/login/index","pages/register/index","pages/forget/index","pages/phone/index","pages/k/index","pages/trade/index","pages/valid/index","pages/recharge/index","pages/recharging/index","pages/pwd/index","pages/nickname/index","pages/information/index","pages/certification/primary","pages/certification/advanced","pages/setting/index","pages/lang/index","pages/history_record_detail/index","pages/withdraw/index","pages/withdraw_record/index","pages/futures_position/index","pages/exchange/index","pages/transfer/index","pages/futures_trade/index","pages/white_paper/index","pages/kefu/index","pages/desc/index","pages/help/index","pages/withdraw_record/index","pages/wallet/index","pages/add_wallet/index","pages/consume_record/index","pages/coin_pool/index","pages/coin_pool_buy/index","pages/coin_pool_rules/index","pages/coin_pool_confirm/index","pages/coin_pool_success/index","pages/coin_pool_record/index","pages/coin_pool_record_detail/index","pages/coin_pool_redeem/index","pages/share/index","pages/pool/index","pages/staking/index","pages/pool_trade/index","pages/pool_redeem/index","pages/pool_redeem_confirm/index","pages/pool_statking_order/index","pages/pool_success/index","pages/success_tips/index","pages/pool_confirm/index","pages/pool_yield/index","pages/order_list/index","pages/pow_detail/index","pages/pow_list/index","pages/pow_trade/index","pages/pow_success/index","pages/pow_record/index","pages/pow_record_detail/index"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"GOLD","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#20222c"},"tabBar":{"color":"#666","selectedColor":"#2970e6","borderStyle":"black","backgroundColor":"#fff","list":[{"pagePath":"pages/home/index","iconPath":"/static/images/tabbar/home.png","selectedIconPath":"/static/images/tabbar/home_selected.png","text":"交易区"},{"pagePath":"pages/pool/index","iconPath":"/static/images/tabbar/pool.png","selectedIconPath":"/static/images/tabbar/pool_selected.png","text":"矿池"},{"pagePath":"pages/order/index","iconPath":"/static/images/tabbar/order.png","selectedIconPath":"/static/images/tabbar/order_selected.png","text":"订单"},{"pagePath":"pages/fund/index","iconPath":"/static/images/tabbar/fund.png","selectedIconPath":"/static/images/tabbar/fund_selected.png","text":"资产"},{"pagePath":"pages/user/index","iconPath":"/static/images/tabbar/user.png","selectedIconPath":"/static/images/tabbar/user_selected.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"GOLD","compilerVersion":"2.9.2","entryPagePath":"pages/home/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/home/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/fund/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTextStyle":"black","color":"#ffffff","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/order/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTextStyle":"black","color":"#ffffff","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/user/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/login/index","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/register/index","meta":{},"window":{"navigationBarTextStyle":"black","color":"#ffffff","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/forget/index","meta":{},"window":{"navigationBarTextStyle":"black","color":"#ffffff","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/phone/index","meta":{},"window":{"navigationBarTextStyle":"black","color":"#ffffff","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/k/index","meta":{},"window":{"navigationBarTextStyle":"black","color":"#ffffff","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/trade/index","meta":{},"window":{"navigationBarTextStyle":"black","color":"#ffffff","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/valid/index","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/recharge/index","meta":{},"window":{"navigationBarTextStyle":"white","color":"#ffffff","navigationBarBackgroundColor":"#0e0440"}},{"path":"/pages/recharging/index","meta":{},"window":{"navigationBarTextStyle":"black","color":"#ffffff","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/pwd/index","meta":{},"window":{"navigationBarTextStyle":"black","color":"#ffffff","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/nickname/index","meta":{},"window":{"navigationBarTextStyle":"black","color":"#ffffff","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/information/index","meta":{},"window":{"navigationBarTextStyle":"black","color":"#ffffff","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/certification/primary","meta":{},"window":{"navigationBarTextStyle":"black","color":"#ffffff","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/certification/advanced","meta":{},"window":{"navigationBarTextStyle":"black","color":"#ffffff","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/setting/index","meta":{},"window":{"navigationBarTextStyle":"black","color":"#ffffff","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/lang/index","meta":{},"window":{"navigationBarTextStyle":"black","color":"#ffffff","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/history_record_detail/index","meta":{},"window":{"navigationBarTextStyle":"black","color":"#ffffff","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/withdraw/index","meta":{},"window":{"navigationBarTextStyle":"black","color":"#ffffff","navigationBarBackgroundColor":"#fff","titleNView":{"buttons":[{"text":"","fontSrc":"/static/fonts/iconfont.ttf"}]}}},{"path":"/pages/withdraw_record/index","meta":{},"window":{"navigationBarTextStyle":"black","color":"#ffffff","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/futures_position/index","meta":{},"window":{"navigationBarTextStyle":"black","color":"#ffffff","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/exchange/index","meta":{},"window":{"navigationBarTextStyle":"black","color":"#ffffff","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/transfer/index","meta":{},"window":{"navigationBarTextStyle":"black","color":"#ffffff","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/futures_trade/index","meta":{},"window":{"navigationBarTextStyle":"black","color":"#ffffff","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/white_paper/index","meta":{},"window":{"navigationBarTextStyle":"white","color":"#ffffff","navigationBarBackgroundColor":"#1c1d31"}},{"path":"/pages/kefu/index","meta":{},"window":{"navigationBarTextStyle":"black","color":"#ffffff","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/desc/index","meta":{},"window":{"navigationBarTextStyle":"black","color":"#ffffff","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/help/index","meta":{},"window":{"navigationBarTextStyle":"black","color":"#ffffff","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/wallet/index","meta":{},"window":{"navigationBarTextStyle":"black","color":"#ffffff","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/add_wallet/index","meta":{},"window":{"navigationBarTextStyle":"black","color":"#ffffff","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/consume_record/index","meta":{},"window":{"navigationBarTextStyle":"black","color":"#ffffff","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/coin_pool/index","meta":{},"window":{"navigationBarTextStyle":"white","navigationBarBackgroundColor":"#3063d9","titleNView":"transparent"}},{"path":"/pages/coin_pool_buy/index","meta":{},"window":{"navigationBarTextStyle":"white","navigationBarBackgroundColor":"#3063d9"}},{"path":"/pages/coin_pool_rules/index","meta":{},"window":{"navigationBarTextStyle":"white","navigationBarBackgroundColor":"#3063d9"}},{"path":"/pages/coin_pool_confirm/index","meta":{},"window":{"navigationBarTextStyle":"white","color":"#ffffff","navigationBarBackgroundColor":"#2351bd"}},{"path":"/pages/coin_pool_success/index","meta":{},"window":{"navigationBarTitleText":"","color":"#000000","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/coin_pool_record/index","meta":{},"window":{"navigationBarTextStyle":"white","navigationBarBackgroundColor":"#2351bd"}},{"path":"/pages/coin_pool_record_detail/index","meta":{},"window":{"navigationBarTextStyle":"white","navigationBarBackgroundColor":"#2351bd"}},{"path":"/pages/coin_pool_redeem/index","meta":{},"window":{"navigationBarTextStyle":"white","navigationBarBackgroundColor":"#2351bd"}},{"path":"/pages/share/index","meta":{},"window":{"navigationBarTextStyle":"black","color":"#ffffff","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/pool/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTextStyle":"white","navigationBarBackgroundColor":"#323457","navigationStyle":"custom","enablePullDownRefresh":true}},{"path":"/pages/staking/index","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff","navigationStyle":"custom"}},{"path":"/pages/pool_trade/index","meta":{},"window":{"navigationBarTextStyle":"white","navigationBarBackgroundColor":"#323457"}},{"path":"/pages/pool_redeem/index","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/pool_redeem_confirm/index","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/pool_statking_order/index","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/pool_success/index","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/success_tips/index","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/pool_confirm/index","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/pool_yield/index","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff","navigationStyle":"custom"}},{"path":"/pages/order_list/index","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarBackgroundColor":"#f9f9f9"}},{"path":"/pages/pow_detail/index","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/pow_list/index","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/pow_trade/index","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/pow_success/index","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/pow_record/index","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/pow_record_detail/index","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
