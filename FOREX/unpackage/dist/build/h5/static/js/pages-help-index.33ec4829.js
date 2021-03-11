(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-help-index"],{"238f":function(t,n,i){var e=i("f0b6");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var r=i("4f06").default;r("a940a03a",e,!0,{sourceMap:!1,shadowMode:!1})},"37d2":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={setStatusBarColor:function(t){},checkNetWorkStatus:function(){},getOS:function(){var t=uni.getSystemInfoSync().platform;return t}},r=e;n.default=r},5971:function(t,n,i){"use strict";i.r(n);var e=i("b091"),r=i("e094");for(var a in r)"default"!==a&&function(t){i.d(n,t,(function(){return r[t]}))}(a);i("e466");var o,c=i("f0c5"),s=Object(c["a"])(r["default"],e["b"],e["c"],!1,null,"4845d109",null,!1,e["a"],o);n["default"]=s.exports},"5fad":function(t,n,i){"use strict";var e=i("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=e(i("e27d")),a=e(i("7650")),o={name:"HelpCenter",mixins:[r.default,a.default],data:function(){return{listData:{cn:[{title:"合约交易的风险度代表什么？",desc:"风险度是您合约账户中风险指标，风险度等于100%被视为爆仓。我们建议您，当您的风险度超过50%时，需要谨慎开仓，以免因为爆仓而造成损失。可通过补充合约资产的可用资金，或减少持仓来降低您的风险。"},{title:"什么是限价委托和市价委托？",desc:"限价委托指的是：按照您的指定价格委托平台进行交易的价格。<br />市价委托指的是：委托平台直接以当前市场价格进行交易。 <br />在开放交易规则中，市价订单优先于限价订单。 <br />如果您选择限价单，请根据当前货币市场价格合理开仓。"},{title:"合约交易中的保证金是什么？",desc:"在合约交易中，用户根据合约价格和数量，根据对应的杠杆倍数，缴纳资金作为履行合约的财力担保，便可参与合约的买卖，这种资金就是合约保证金。用户开仓将占用保证金，占用的开仓保证金越多，账户风险越高。"},{title:"合约交易规则是什么？",desc:"交易类型<br />\n\t\t\t\t\t\t\t       交易类型分为开仓做多（买入）和开仓做空（卖出）两个方向：<br />\n\t\t\t\t\t\t\t\t   买入做多（看涨），是指您认为当前指数有涨的可能，希望以您设定的价格或者当前市价，新买入一定数量的某种合约。<br />\n\t\t\t\t\t\t\t\t   卖出做空（看跌），是指您认为当前指数有跌的可能，您期望以您设定的价格或当前市价，新卖出一定数量的某种合约。<br />\n\t\t\t\t\t\t\t\t   下单方式<br />\n                                   限价委托：您需要自己指定下单的价格和数量<br />\n                                   市价委托：您只需设定下单的数量，价格为当前市场价格<br />\n                                   持仓<br />\n                                   当您提交的开仓委托单成交后，即称之为持仓<br />\n                                   合约交割问题：<br />\n                                   平台合约为永续合约，无设定交割时间。只要未达到系统爆仓条件或您未手动平仓，您可永久持仓。<br />\n                                   系统平仓<br />\n                                   1.达到止盈止损设定值，系统自动平仓<br />\n                                   2.风险度过高，系统强制平仓"}],cns:[{title:"合約交易的風險度代表什麼？",desc:"風險度是您合約帳戶中風險名額，風險度等於100%被視為爆倉。我們建議您，當您的風險度超過50%時，需要謹慎開倉，以免因為爆倉而造成損失。可通過補充合約資產的可用資金，或减少持倉來降低您的風險"},{title:"什麼是限價委託和市價委托？",desc:"限價委託指的是：按照您的指定價格委託平臺進行交易的價格。<br />市價委托指的是：委託平臺直接以當前市場價格進行交易。<br />在開放交易規則中，市價訂單優先於限價訂單。<br />如果您選擇限價單，請根據當前貨幣市場價格合理開倉。"},{title:"合約交易中的保證金是什麼？",desc:"在合約交易中，用戶根據合約價格和數量，根據對應的杠杆倍數，繳納資金作為履行合約的財力擔保，便可參與合約的買賣，這種資金就是合約保證金。用戶開倉將佔用保證金，佔用的開倉保證金越多，帳戶風險越高。"},{title:"合約交易規則是什麼？",desc:"\n\t\t\t\t\t\t\t              交易類型<br />\n\t\t\t\t\t\t\t              \n\t\t\t\t\t\t\t              交易類型分為開倉做多（買入）和開倉做空（賣出）兩個方向：<br />\n\t\t\t\t\t\t\t              \n\t\t\t\t\t\t\t              買入做多（看漲），是指您認為當前指數有漲的可能，希望以您設定的價格或者當前市價，新買入一定數量的某種合約。<br />\n\t\t\t\t\t\t\t              \n\t\t\t\t\t\t\t              賣出做空（看跌），是指您認為當前指數有跌的可能，您期望以您設定的價格或當前市價，新賣出一定數量的某種合約。<br />\n\t\t\t\t\t\t\t              \n\t\t\t\t\t\t\t              下單管道<br />\n\t\t\t\t\t\t\t              \n\t\t\t\t\t\t\t              限價委託：您需要自己指定下單的價格和數量<br />\n\t\t\t\t\t\t\t              \n\t\t\t\t\t\t\t              市價委托：您只需設定下單的數量，價格為當前市場價格<br />\n\t\t\t\t\t\t\t              \n\t\t\t\t\t\t\t              持倉<br />\n\t\t\t\t\t\t\t              \n\t\t\t\t\t\t\t              當您提交的開倉委託單成交後，即稱之為持倉<br />\n\t\t\t\t\t\t\t              \n\t\t\t\t\t\t\t              合約交割問題：<br />\n\t\t\t\t\t\t\t              \n\t\t\t\t\t\t\t              平臺合約為永續合約，無設定交割時間。只要未達到系統爆倉條件或您未手動平倉，您可永久持倉。<br />\n\t\t\t\t\t\t\t              \n\t\t\t\t\t\t\t              系統平倉<br />\n\t\t\t\t\t\t\t              \n\t\t\t\t\t\t\t              1.達到止盈止損設定值，系統自動平倉<br />\n\t\t\t\t\t\t\t              \n\t\t\t\t\t\t\t              2.風險度過高，系統強制平倉\n\t\t\t\t\t\t\t"}],ja:[{title:"契約取引のリスクは何ですか？?",desc:"リスク度は契約口座のリスク指標であり、リスク度は100%をバーストと見なします。あなたの危険度が50%を超える場合は、破裂による損失を防ぐために、慎重に倉庫を開けてください。契約資産の使用可能な資金を補充することによって、持ち場を減らすことによって、リスクを低減することができます。"},{title:"価格限定依頼と相場依頼とは？?",desc:"価格制限の委託とは、指定された価格に基づいてプラットフォームに取引を委託する価格のことです。<br/>時価の委託とは、委託プラットフォームが直接現在の市場価格で取引することです。<br/>オープン取引規則では、時価注文は限定価格注文より優先されます。<br/>価格制限表を選択したら、現在の貨幣市場価格によって合理的に倉庫を開けてください。"},{title:"契約取引中の保証金は何ですか？",desc:"契約取引において、ユーザは契約価格と数量に応じて、対応するてこの倍数に応じて、契約履行の財力保証金として資金を納付することができる。ユーザーが倉庫を開けて保証金を占用して、占用するのは多くて、アカウントのリスクはもっと高いです。"},{title:"契約取引のルールは何ですか？",desc:"\n\t\t\t\t\t\t\t      取引の種類<br/>\n\t\t\t\t\t\t\t      \n\t\t\t\t\t\t\t      取引の種類は開倉が多い（買う）と開倉が空いている（売る）の二つの方向に分けられます。\n\t\t\t\t\t\t\t      \n\t\t\t\t\t\t\t      買いすぎ（強気）とは、現在の指数が上がる可能性があると思います。設定された価格または現在の相場で、新たに一定の数量の契約を買いたいです。<br/>\n\t\t\t\t\t\t\t      \n\t\t\t\t\t\t\t      売りが空振りするということは、現在の指数が下がる可能性があるということです。設定された価格または現在の相場で、新たに一定の数量の契約を売りたいです。<br/>\n\t\t\t\t\t\t\t      \n\t\t\t\t\t\t\t      注文の仕方<br/>\n\t\t\t\t\t\t\t      \n\t\t\t\t\t\t\t      価格制限依頼：注文の価格と数量を自分で指定してください。\n\t\t\t\t\t\t\t      \n\t\t\t\t\t\t\t      市価委託：注文数量を設定するだけで、価格は現在の市場価格です。\n\t\t\t\t\t\t\t      \n\t\t\t\t\t\t\t      持ち場<br/>\n\t\t\t\t\t\t\t      \n\t\t\t\t\t\t\t      あなたが提出した発注書が成約したら、それを手持ちと言います。<br/>\n\t\t\t\t\t\t\t      \n\t\t\t\t\t\t\t      契約の受け渡し問題：<br/>\n\t\t\t\t\t\t\t      \n\t\t\t\t\t\t\t      プラットフォーム契約は継続契約で、受け渡し時間は設定されていません。システムのパンク状態に達していない限り、または手動で倉庫を平らにしていない限り、永久に倉庫を持つことができます。<br/>\n\t\t\t\t\t\t\t      \n\t\t\t\t\t\t\t      システム平倉<br/>\n\t\t\t\t\t\t\t      \n\t\t\t\t\t\t\t      1.ストップロス設定値に到達し、システムは自動的に倉庫を平らにする<br/>\n\t\t\t\t\t\t\t      \n\t\t\t\t\t\t\t      2.リスクが高すぎて、システムが倉庫を強制する\n\t\t\t\t\t\t\t"}],ko:[{title:"계약 거래 의 위험 도 는 무엇 을 대표 합 니까?",desc:"리 스 크 도 는 귀하 의 계약 계 정 에서 리 스 크 기준 으로 리 스 크 도 는 100% 가 창고 폭발 로 간주 된다.저 희 는 귀하 의 위험 도가 50% 를 넘 으 면 창고 가 폭발 로 인해 손실 이 발생 하지 않도록 신중 해 야 합 니 다.계약 자산 의 사용 가능 한 자금 을 보충 하거나 창 고 를 줄 여서 귀하 의 위험 을 낮 출 수 있 습 니 다."},{title:"가격 제한 의뢰 와 시가 의뢰 는 무엇 입 니까?",desc:"가격 제한 의뢰 란 귀하 가 지정 한 가격 으로 플랫폼 에 의뢰 하여 거래 하 는 가격 을 말 합 니 다.<br /> 시가 위탁 이란 위탁 플랫폼 이 현재 시장 가격 으로 직접 거래 하 는 것 을 말한다.<br /> 오픈 거래 규칙 중 시가 주문 이 한정 주문 보다 우선 합 니 다.<br /> 만약 에 귀하 가 제한 가격 표를 선택 하신 다 면 현재 화폐 시장 가격 에 따라 합 리 적 으로 창 고 를 하 십시오."},{title:"계약 거래 에서 보증금 은 무엇 입 니까?",desc:"계약 거래 에서 사용 자 는 계약 가격 과 수량 에 따라 해당 하 는 레버 리 지 배수 에 따라 자금 을 납부 하여 계약 을 이행 하 는 재력 담보 로 하면 계약 의 매매 에 참여 할 수 있다. 이런 자금 은 바로 계약 보증금 이다.사용자 가 창 고 를 개설 하면 보증금 을 점용 하고 사용 하 는 창 고 를 개설 하 는 보증금 이 많 을 수록 계 정 리 스 크 가 높아진다."},{title:"계약 거래 규칙 이 뭐 예요？",desc:"\n\t\t\t\t\t\t\t     거래 유형 <br /> 거래 유형 은 창 고 를 많이 하 는 것 (매입) 과 창 고 를 오픈 하 는 것 (매출) 두 가지 방향 으로 나 뉜 다. <br /> 매입 많이 (오 를 기미) 란 현재 지수 가 오 를 가능성 이 있다 고 생각 하고 귀하 가 설정 한 가격 또는 현재 시세 로 일정 수량의 특정한 계약 을 새로 구입 하고 자 하 는 것 을 말 합 니 다.<br />매출 이 헛 되 었 다 (하락 세 를 보 였 다) 는 것 은 현재 지수 가 하락 할 가능성 이 있다 고 생각 하 는 것 을 말 합 니 다. 귀 하 는 귀하 가 설정 한 가격 이나 현재 시세 로 특정한 수량의 계약 을 새로 판매 하 기 를 원 합 니 다.<br /> 주문 방식 <br />한정 위탁: 당신 은 자신 이 주문 한 가격 과 수량 <br /> 을 지정 해 야 합 니 다.시가 의뢰: 당신 은 아래 의 수량 만 설정 하면 됩 니 다. 가격 은 현재 시장 가격 <br /> 입 니 다. 창 고 를 보유 <br />당신 이 제출 한 창 고 개설 의뢰 서 가 거래 된 후, 이 를 창 고 를 보유 <br /> 라 고 합 니 다. 계약 결제 문제: <br />플랫폼 계약 은 영구적 인 계약 이 고 거래 시간 을 설정 하지 않 습 니 다.시스템 폭발 조건 이 되 지 않 거나 수 동 으로 창 고 를 정리 하지 않 으 면 영구적 으로 창 고 를 유지 할 수 있 습 니 다.<br /> 시스템 일반 창 고 <br />1. 이윤 정지 설정 치 달성, 시스템 자동 평 창 <br /> 2. 위험 도가 너무 높 고 시스템 이 창고 평 가 를 강제 한다.\n\t\t\t\t\t\t\t\t "}],vi:[{title:"Nguy cơ giao dịch hợp đồng là gì?",desc:"Tỷ lệ rủi ro là tỷ lệ rủi ro trong tài khoản hợp đồng của bạn, nếu mức độ rủi ro bằng 100 Name, nó sẽ được coi là một vụ nổ vị trí.Chúng tôi đề nghị khi rủi ro cao hơn 500kg, hãy cẩn thận mở vị trí để tránh tổn thất do tiếp xúc.Bạn có thể giảm rủi ro bằng cách bổ sung thêm quỹ hợp đồng hoặc giảm vị trí của bạn."},{title:"Điều gì là giới hạn trật tự và trật tự thị trường?",desc:"Giá cả giao nhiệm vụ là giá mà anh giao dịch dựa theo giá đã xác định.Thậm chí còn có tin đồn về giá cả thị trường là platform tổ chức giao dịch trực tiếp với giá trên thị trường.Trong quy tắc thương mại mở, thị trường đặt ưu tiên trên giới hạn.Nếu bạn chọn một lệnh giới hạn, hãy mở vị trí của bạn dựa theo giá thị trường tiền tệ hiện thời."},{title:"Giá trị của giao dịch hợp đồng là bao nhiêu?",desc:"Trong giao dịch hợp đồng, người dùng có thể tham gia giao dịch bằng cách trả quỹ như một bảo đảm tài chính để thực hiện các hợp đồng dựa trên giá và số lượng và tỉ lệ đòn bẩy tương ứng.Càng mở rộng khoảng trống, rủi ro tài khoản càng cao."},{title:"Quy tắc hợp đồng？",desc:"\n\t\t\t\t\t\t\t    Trong giao dịch hợp đồng, người dùng có thể tham gia giao dịch bằng cách trả quỹ như một bảo đảm tài chính để thực hiện các hợp đồng dựa trên giá và số lượng và tỉ lệ đòn bẩy tương ứng.Càng mở rộng khoảng trống, rủi ro tài khoản càng cao.Kiểu chuyển giao\n\t\t\t\t\t\t\t    \n\t\t\t\t\t\t\t    Các kiểu giao dịch được chia thành hai hướng: vị trí mở cho dài (mua) và ngắn vị trí mở (bán): tập trung trung trung trung trung:: bh\n\t\t\t\t\t\t\t    \n\t\t\t\t\t\t\t    Mua dài (màu vàng) có nghĩa là bạn nghĩ rằng chỉ mục hiện thời có khả năng tăng lên và hy vọng mua một số hợp đồng mới nhất định với giá của bạn hoặc giá thị trường hiện thời.David:\n\t\t\t\t\t\t\t    \n\t\t\t\t\t\t\t    Bán ít (vẻ gấu) đề cập đến việc bạn nghĩ rằng chỉ mục hiện thời có thể giảm, và bạn mong đợi bán một số hợp đồng nhất vào giá bạn đặt hay giá hiện thời.David:\n\t\t\t\t\t\t\t    \n\t\t\t\t\t\t\t    Phương pháp gọi\n\t\t\t\t\t\t\t    \n\t\t\t\t\t\t\t    Số giới hạn: bạn cần phải xác định giá và số lượng của đơn đặt\n\t\t\t\t\t\t\t    \n\t\t\t\t\t\t\t    Việc giao tin vào thị trường: bạn chỉ cần đặt số lượng lệnh, và giá là giá hiện thời trên thị trường.\n\t\t\t\t\t\t\t    \n\t\t\t\t\t\t\t    Vị trí\n\t\t\t\t\t\t\t    \n\t\t\t\t\t\t\t    Khi lệnh khai trương được hoàn thành, nó được gọi là vị trí\n\t\t\t\t\t\t\t    \n\t\t\t\t\t\t\t    Hệ thống phân phối hợp đồng:\n\t\t\t\t\t\t\t    \n\t\t\t\t\t\t\t    Giao kèo platform là hợp đồng bất hợp pháp mà không có thời gian giao hàng.Miễn là hệ thống không đáp ứng yêu cầu của hệ thống hoặc bạn không đóng vị trí bằng tay, bạn có thể giữ vị trí này vĩnh viễn.David:\n\t\t\t\t\t\t\t    \n\t\t\t\t\t\t\t    Vị trí đóng hệ thống\n\t\t\t\t\t\t\t    \n\t\t\t\t\t\t\t    1. Khi nó đạt tới giá trị đã đặt của lãi suất dừng và giảm lỗ, hệ thống sẽ tự động đóng cửa vị trí.\n\t\t\t\t\t\t\t    \n\t\t\t\t\t\t\t    2. Mức độ rủi ro quá cao, và hệ thống buộc phải đóng cửa vị trí.\n\t\t\t\t\t\t\t"}],en:[{title:"What is contract risk?",desc:"When the risk is equal to 100%, it is considered a short position. We recommend that when your risk exceeds 50%, you need to open a position cautiously to avoid losses due to liquidation. You can reduce your risk by replenishing the available funds of contract assets or reducing your positions."},{title:"What are limit orders and market orders?",desc:"Limit order refers to ：Entrust platform to trade at the price you specify<br />\n                                   Market order refers to: the entrusted platform directly trades at the current market price.<br />\n                                   In open trading rules,The system will prioritize market orders. If you choose a limit order, please open the position reasonably based on the current currency market price."},{title:"What is the margin in contract trading?",desc:"In contract transactions, users can participate in the purchase and sale of contracts by paying funds as a financial guarantee for performing the contract according to the contract price and quantity, and according to the corresponding leverage multiples. Such funds are the contract security. The user will use the margin to open a position. The more opening margin is used, the higher the account risk."},{title:"Notes on forced liquidation",desc:"Risk is an indicator of the risk of your assets. When the risk is equal to 100%, your order will be forcibly liquidated by the system. Note: We hope you can reasonably control your risk to avoid unnecessary losses."}]}}},onShow:function(){this.setTitle(this.getLangs("helpCenter"))}};n.default=o},b091:function(t,n,i){"use strict";var e;i.d(n,"b",(function(){return r})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){return e}));var r=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"help_class"},[i("v-uni-view",{staticClass:"listData"},t._l(t.listData[t.getGlobalLang],(function(n,e){return i("v-uni-view",{key:e,staticClass:"label"},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(n.title))]),i("v-uni-view",{staticClass:"desc"},[i("v-uni-rich-text",{attrs:{nodes:n.desc}})],1)],1)})),1)],1)},a=[]},e094:function(t,n,i){"use strict";i.r(n);var e=i("5fad"),r=i.n(e);for(var a in e)"default"!==a&&function(t){i.d(n,t,(function(){return e[t]}))}(a);n["default"]=r.a},e27d:function(t,n,i){"use strict";var e=i("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=e(i("5530")),a=i("2f62"),o=e(i("a10d")),c=e(i("37d2")),s=e(i("33a8")),h=e(i("bea6")),u={data:function(){return{currentOS:""}},methods:{navigateTo:function(t,n){var i="undefined"===typeof n||"{}"===JSON.stringify(n)?"":"?".concat(s.default.convertObj(n));uni.navigateTo({url:t+i})},redirectTo:function(t){uni.redirectTo({url:t})},reLaunch:function(t){uni.reLaunch({url:t})},switchTab:function(t){uni.switchTab({url:t})},back:function(){var t=c.default.getOS();return"ios"===t||"android"===t?uni.navigateBack():history.back(-1)},setTitle:function(t){uni.setNavigationBarTitle({title:"undefined"===typeof t||""===t?o.default.appName:t})},moveHandle:function(){},getCurrentPageData:function(t){var n=getCurrentPages(),i=n[n.length-1];switch(t){case"opt":return i.options;case"route":return i.route;default:return i}},backToPage:function(t){c.default.getOS();this.navigateTo(t)},backTips:function(t){if(h.default.checkCode(t))return this.$tips.showToast(this.getLangs("success"));this.$tips.showToast(t.rpMsg)},toServcie:function(){this.navigateTo("/pages/kefu/index")},customBack:function(){return window.location.href="/"}},computed:(0,r.default)({createOSClass:function(){return"h5"}},(0,a.mapGetters)({getWSData:"getWSData",getProductData:"getProductData"})),onLoad:function(){this.currentOS=c.default.getOS()}},g=u;n.default=g},e466:function(t,n,i){"use strict";var e=i("238f"),r=i.n(e);r.a},f0b6:function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,".help_class[data-v-4845d109]{border-top:1px solid #f9f9f9;padding:%?40?% 0 0 0;background:#fff}.listData[data-v-4845d109]{padding-left:%?40?%}.listData .label[data-v-4845d109]{border-bottom:1px solid #f9f9f9;position:relative;padding-bottom:%?20?%;margin-bottom:%?20?%}.listData .label .title[data-v-4845d109]{font-size:%?30?%;color:#333;font-weight:700;line-height:%?60?%}.listData .label .desc[data-v-4845d109]{font-size:%?26?%;display:block;color:#aaa}",""]),t.exports=n}}]);