<template>
	<view class="help_class">
		<view class="listData">
			<view class="label" v-for="(items, index) in listData[getGlobalLang]" :key="index">
				<view class="title">{{items.title}}</view>
				<view class="desc">
					<rich-text :nodes="items.desc"></rich-text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 帮助中心
	 */
	import commonMixins from '@/mixins/common_mixins.js'
	import langsMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'HelpCenter',
		mixins: [commonMixins, langsMixins],
		data(){
			return {
				listData: {
					cn: [
						{
							title: '合约交易的风险度代表什么？',
							desc: '风险度是您合约账户中风险指标，风险度等于100%被视为爆仓。我们建议您，当您的风险度超过50%时，需要谨慎开仓，以免因为爆仓而造成损失。可通过补充合约资产的可用资金，或减少持仓来降低您的风险。'
						},
						{
							title: '什么是限价委托和市价委托？',
							desc: '限价委托指的是：按照您的指定价格委托平台进行交易的价格。<br />市价委托指的是：委托平台直接以当前市场价格进行交易。 <br />在开放交易规则中，市价订单优先于限价订单。 <br />如果您选择限价单，请根据当前货币市场价格合理开仓。'
						},
						{
							title: '合约交易中的保证金是什么？',
							desc: '在合约交易中，用户根据合约价格和数量，根据对应的杠杆倍数，缴纳资金作为履行合约的财力担保，便可参与合约的买卖，这种资金就是合约保证金。用户开仓将占用保证金，占用的开仓保证金越多，账户风险越高。'
						},
						{
							title: '合约交易规则是什么？',
							desc: `交易类型<br />
							       交易类型分为开仓做多（买入）和开仓做空（卖出）两个方向：<br />
								   买入做多（看涨），是指您认为当前指数有涨的可能，希望以您设定的价格或者当前市价，新买入一定数量的某种合约。<br />
								   卖出做空（看跌），是指您认为当前指数有跌的可能，您期望以您设定的价格或当前市价，新卖出一定数量的某种合约。<br />
								   下单方式<br />
                                   限价委托：您需要自己指定下单的价格和数量<br />
                                   市价委托：您只需设定下单的数量，价格为当前市场价格<br />
                                   持仓<br />
                                   当您提交的开仓委托单成交后，即称之为持仓<br />
                                   合约交割问题：<br />
                                   平台合约为永续合约，无设定交割时间。只要未达到系统爆仓条件或您未手动平仓，您可永久持仓。<br />
                                   系统平仓<br />
                                   1.达到止盈止损设定值，系统自动平仓<br />
                                   2.风险度过高，系统强制平仓`
						}
					],
					cns: [
						{
							title: '合約交易的風險度代表什麼？',
							desc: '風險度是您合約帳戶中風險名額，風險度等於100%被視為爆倉。我們建議您，當您的風險度超過50%時，需要謹慎開倉，以免因為爆倉而造成損失。可通過補充合約資產的可用資金，或减少持倉來降低您的風險'
						},
						{
							title: '什麼是限價委託和市價委托？',
							desc: '限價委託指的是：按照您的指定價格委託平臺進行交易的價格。<br />市價委托指的是：委託平臺直接以當前市場價格進行交易。<br />在開放交易規則中，市價訂單優先於限價訂單。<br />如果您選擇限價單，請根據當前貨幣市場價格合理開倉。'
						},
						{
							title: '合約交易中的保證金是什麼？',
							desc: '在合約交易中，用戶根據合約價格和數量，根據對應的杠杆倍數，繳納資金作為履行合約的財力擔保，便可參與合約的買賣，這種資金就是合約保證金。用戶開倉將佔用保證金，佔用的開倉保證金越多，帳戶風險越高。'
						},
						{
							title: '合約交易規則是什麼？',
							desc: `
							              交易類型<br />
							              
							              交易類型分為開倉做多（買入）和開倉做空（賣出）兩個方向：<br />
							              
							              買入做多（看漲），是指您認為當前指數有漲的可能，希望以您設定的價格或者當前市價，新買入一定數量的某種合約。<br />
							              
							              賣出做空（看跌），是指您認為當前指數有跌的可能，您期望以您設定的價格或當前市價，新賣出一定數量的某種合約。<br />
							              
							              下單管道<br />
							              
							              限價委託：您需要自己指定下單的價格和數量<br />
							              
							              市價委托：您只需設定下單的數量，價格為當前市場價格<br />
							              
							              持倉<br />
							              
							              當您提交的開倉委託單成交後，即稱之為持倉<br />
							              
							              合約交割問題：<br />
							              
							              平臺合約為永續合約，無設定交割時間。只要未達到系統爆倉條件或您未手動平倉，您可永久持倉。<br />
							              
							              系統平倉<br />
							              
							              1.達到止盈止損設定值，系統自動平倉<br />
							              
							              2.風險度過高，系統強制平倉
							`
						}
					],
					ja: [
						{
							title: '契約取引のリスクは何ですか？?',
							desc: 'リスク度は契約口座のリスク指標であり、リスク度は100%をバーストと見なします。あなたの危険度が50%を超える場合は、破裂による損失を防ぐために、慎重に倉庫を開けてください。契約資産の使用可能な資金を補充することによって、持ち場を減らすことによって、リスクを低減することができます。'
						},
						{
							title: '価格限定依頼と相場依頼とは？?',
							desc: `価格制限の委託とは、指定された価格に基づいてプラットフォームに取引を委託する価格のことです。<br/>時価の委託とは、委託プラットフォームが直接現在の市場価格で取引することです。<br/>オープン取引規則では、時価注文は限定価格注文より優先されます。<br/>価格制限表を選択したら、現在の貨幣市場価格によって合理的に倉庫を開けてください。`
						},
						{
							title: '契約取引中の保証金は何ですか？',
							desc: '契約取引において、ユーザは契約価格と数量に応じて、対応するてこの倍数に応じて、契約履行の財力保証金として資金を納付することができる。ユーザーが倉庫を開けて保証金を占用して、占用するのは多くて、アカウントのリスクはもっと高いです。'
						},
						{
							title: '契約取引のルールは何ですか？',
							desc: `
							      取引の種類<br/>
							      
							      取引の種類は開倉が多い（買う）と開倉が空いている（売る）の二つの方向に分けられます。
							      
							      買いすぎ（強気）とは、現在の指数が上がる可能性があると思います。設定された価格または現在の相場で、新たに一定の数量の契約を買いたいです。<br/>
							      
							      売りが空振りするということは、現在の指数が下がる可能性があるということです。設定された価格または現在の相場で、新たに一定の数量の契約を売りたいです。<br/>
							      
							      注文の仕方<br/>
							      
							      価格制限依頼：注文の価格と数量を自分で指定してください。
							      
							      市価委託：注文数量を設定するだけで、価格は現在の市場価格です。
							      
							      持ち場<br/>
							      
							      あなたが提出した発注書が成約したら、それを手持ちと言います。<br/>
							      
							      契約の受け渡し問題：<br/>
							      
							      プラットフォーム契約は継続契約で、受け渡し時間は設定されていません。システムのパンク状態に達していない限り、または手動で倉庫を平らにしていない限り、永久に倉庫を持つことができます。<br/>
							      
							      システム平倉<br/>
							      
							      1.ストップロス設定値に到達し、システムは自動的に倉庫を平らにする<br/>
							      
							      2.リスクが高すぎて、システムが倉庫を強制する
							`
						}
					],
					ko: [
						{
							title: '계약 거래 의 위험 도 는 무엇 을 대표 합 니까?',
							desc: '리 스 크 도 는 귀하 의 계약 계 정 에서 리 스 크 기준 으로 리 스 크 도 는 100% 가 창고 폭발 로 간주 된다.저 희 는 귀하 의 위험 도가 50% 를 넘 으 면 창고 가 폭발 로 인해 손실 이 발생 하지 않도록 신중 해 야 합 니 다.계약 자산 의 사용 가능 한 자금 을 보충 하거나 창 고 를 줄 여서 귀하 의 위험 을 낮 출 수 있 습 니 다.'
						},
						{
							title: '가격 제한 의뢰 와 시가 의뢰 는 무엇 입 니까?',
							desc: '가격 제한 의뢰 란 귀하 가 지정 한 가격 으로 플랫폼 에 의뢰 하여 거래 하 는 가격 을 말 합 니 다.<br /> 시가 위탁 이란 위탁 플랫폼 이 현재 시장 가격 으로 직접 거래 하 는 것 을 말한다.<br /> 오픈 거래 규칙 중 시가 주문 이 한정 주문 보다 우선 합 니 다.<br /> 만약 에 귀하 가 제한 가격 표를 선택 하신 다 면 현재 화폐 시장 가격 에 따라 합 리 적 으로 창 고 를 하 십시오.'
						},
						{
							title: '계약 거래 에서 보증금 은 무엇 입 니까?',
							desc: '계약 거래 에서 사용 자 는 계약 가격 과 수량 에 따라 해당 하 는 레버 리 지 배수 에 따라 자금 을 납부 하여 계약 을 이행 하 는 재력 담보 로 하면 계약 의 매매 에 참여 할 수 있다. 이런 자금 은 바로 계약 보증금 이다.사용자 가 창 고 를 개설 하면 보증금 을 점용 하고 사용 하 는 창 고 를 개설 하 는 보증금 이 많 을 수록 계 정 리 스 크 가 높아진다.'
						},
						{
							title: '계약 거래 규칙 이 뭐 예요？',
							desc: `
							     거래 유형 <br /> 거래 유형 은 창 고 를 많이 하 는 것 (매입) 과 창 고 를 오픈 하 는 것 (매출) 두 가지 방향 으로 나 뉜 다. <br /> 매입 많이 (오 를 기미) 란 현재 지수 가 오 를 가능성 이 있다 고 생각 하고 귀하 가 설정 한 가격 또는 현재 시세 로 일정 수량의 특정한 계약 을 새로 구입 하고 자 하 는 것 을 말 합 니 다.<br />매출 이 헛 되 었 다 (하락 세 를 보 였 다) 는 것 은 현재 지수 가 하락 할 가능성 이 있다 고 생각 하 는 것 을 말 합 니 다. 귀 하 는 귀하 가 설정 한 가격 이나 현재 시세 로 특정한 수량의 계약 을 새로 판매 하 기 를 원 합 니 다.<br /> 주문 방식 <br />한정 위탁: 당신 은 자신 이 주문 한 가격 과 수량 <br /> 을 지정 해 야 합 니 다.시가 의뢰: 당신 은 아래 의 수량 만 설정 하면 됩 니 다. 가격 은 현재 시장 가격 <br /> 입 니 다. 창 고 를 보유 <br />당신 이 제출 한 창 고 개설 의뢰 서 가 거래 된 후, 이 를 창 고 를 보유 <br /> 라 고 합 니 다. 계약 결제 문제: <br />플랫폼 계약 은 영구적 인 계약 이 고 거래 시간 을 설정 하지 않 습 니 다.시스템 폭발 조건 이 되 지 않 거나 수 동 으로 창 고 를 정리 하지 않 으 면 영구적 으로 창 고 를 유지 할 수 있 습 니 다.<br /> 시스템 일반 창 고 <br />1. 이윤 정지 설정 치 달성, 시스템 자동 평 창 <br /> 2. 위험 도가 너무 높 고 시스템 이 창고 평 가 를 강제 한다.
								 `
						}
					],
					vi: [
						{
							title: 'Nguy cơ giao dịch hợp đồng là gì?',
							desc: 'Tỷ lệ rủi ro là tỷ lệ rủi ro trong tài khoản hợp đồng của bạn, nếu mức độ rủi ro bằng 100 Name, nó sẽ được coi là một vụ nổ vị trí.Chúng tôi đề nghị khi rủi ro cao hơn 500kg, hãy cẩn thận mở vị trí để tránh tổn thất do tiếp xúc.Bạn có thể giảm rủi ro bằng cách bổ sung thêm quỹ hợp đồng hoặc giảm vị trí của bạn.'
						},
						{
							title: 'Điều gì là giới hạn trật tự và trật tự thị trường?',
							desc: 'Giá cả giao nhiệm vụ là giá mà anh giao dịch dựa theo giá đã xác định.Thậm chí còn có tin đồn về giá cả thị trường là platform tổ chức giao dịch trực tiếp với giá trên thị trường.Trong quy tắc thương mại mở, thị trường đặt ưu tiên trên giới hạn.Nếu bạn chọn một lệnh giới hạn, hãy mở vị trí của bạn dựa theo giá thị trường tiền tệ hiện thời.'
						},
						{
							title: 'Giá trị của giao dịch hợp đồng là bao nhiêu?',
							desc: 'Trong giao dịch hợp đồng, người dùng có thể tham gia giao dịch bằng cách trả quỹ như một bảo đảm tài chính để thực hiện các hợp đồng dựa trên giá và số lượng và tỉ lệ đòn bẩy tương ứng.Càng mở rộng khoảng trống, rủi ro tài khoản càng cao.'
						},
						{
							title: 'Quy tắc hợp đồng？',
							desc: `
							    Trong giao dịch hợp đồng, người dùng có thể tham gia giao dịch bằng cách trả quỹ như một bảo đảm tài chính để thực hiện các hợp đồng dựa trên giá và số lượng và tỉ lệ đòn bẩy tương ứng.Càng mở rộng khoảng trống, rủi ro tài khoản càng cao.Kiểu chuyển giao
							    
							    Các kiểu giao dịch được chia thành hai hướng: vị trí mở cho dài (mua) và ngắn vị trí mở (bán): tập trung trung trung trung trung:: bh
							    
							    Mua dài (màu vàng) có nghĩa là bạn nghĩ rằng chỉ mục hiện thời có khả năng tăng lên và hy vọng mua một số hợp đồng mới nhất định với giá của bạn hoặc giá thị trường hiện thời.David:
							    
							    Bán ít (vẻ gấu) đề cập đến việc bạn nghĩ rằng chỉ mục hiện thời có thể giảm, và bạn mong đợi bán một số hợp đồng nhất vào giá bạn đặt hay giá hiện thời.David:
							    
							    Phương pháp gọi
							    
							    Số giới hạn: bạn cần phải xác định giá và số lượng của đơn đặt
							    
							    Việc giao tin vào thị trường: bạn chỉ cần đặt số lượng lệnh, và giá là giá hiện thời trên thị trường.
							    
							    Vị trí
							    
							    Khi lệnh khai trương được hoàn thành, nó được gọi là vị trí
							    
							    Hệ thống phân phối hợp đồng:
							    
							    Giao kèo platform là hợp đồng bất hợp pháp mà không có thời gian giao hàng.Miễn là hệ thống không đáp ứng yêu cầu của hệ thống hoặc bạn không đóng vị trí bằng tay, bạn có thể giữ vị trí này vĩnh viễn.David:
							    
							    Vị trí đóng hệ thống
							    
							    1. Khi nó đạt tới giá trị đã đặt của lãi suất dừng và giảm lỗ, hệ thống sẽ tự động đóng cửa vị trí.
							    
							    2. Mức độ rủi ro quá cao, và hệ thống buộc phải đóng cửa vị trí.
							`
						}
					],
					en: [
						{
							title: 'What is contract risk?',
							desc: 'When the risk is equal to 100%, it is considered a short position. We recommend that when your risk exceeds 50%, you need to open a position cautiously to avoid losses due to liquidation. You can reduce your risk by replenishing the available funds of contract assets or reducing your positions.'
						},
						{
							title: 'What are limit orders and market orders?',
							desc: `Limit order refers to ：Entrust platform to trade at the price you specify<br />
                                   Market order refers to: the entrusted platform directly trades at the current market price.<br />
                                   In open trading rules,The system will prioritize market orders. If you choose a limit order, please open the position reasonably based on the current currency market price.`
						},
						{
							title: 'What is the margin in contract trading?',
							desc: 'In contract transactions, users can participate in the purchase and sale of contracts by paying funds as a financial guarantee for performing the contract according to the contract price and quantity, and according to the corresponding leverage multiples. Such funds are the contract security. The user will use the margin to open a position. The more opening margin is used, the higher the account risk.'
						},
						{
							title: 'Notes on forced liquidation',
							desc: 'Risk is an indicator of the risk of your assets. When the risk is equal to 100%, your order will be forcibly liquidated by the system. Note: We hope you can reasonably control your risk to avoid unnecessary losses.'
						}
					]
				}
			}
		},
		onShow() {
			this.setTitle(this.getLangs('helpCenter'))
		}
	}
</script>

<style scoped>
	.help_class{
		border-top: 1px solid rgba(255,255,255,.1);
		padding: 40upx 0 0 0;
		background: #20222c;
	}
	.listData{
		padding-left: 40upx;
	}
	.listData .label{
		border-bottom: 1px solid rgba(255,255,255,.1);
		position: relative;
		padding-bottom: 20upx;
		margin-bottom: 20upx;
	}
	.listData .label .title{
		font-size: 30upx;
		color: #fff;
		font-weight: bold;
		line-height: 60upx;
	}
	.listData .label .desc{
		font-size: 26upx;
		display: block;
		color: #aaa;
	}
</style>
