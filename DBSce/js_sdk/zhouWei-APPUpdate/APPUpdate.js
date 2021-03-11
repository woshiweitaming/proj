import storage from '@/utils/storage.js'
// #ifdef APP-PLUS 
// 请求配置说明：https://ext.dcloud.net.cn/plugin?id=822
const platform = uni.getSystemInfoSync().platform;
// 主颜色
const $mainColor = "FF5B78";
// 弹窗图标url
const $iconUrl = "/static/ic_ar.png";

const langs = {
	cn: {
		p1: '暂无新版本',
		p2: '正在安装文件...',
		p3: '应用资源更新完成！',
		p4: '安装文件失败',
		p5: '文件下载失败...',
		p6: '准备下载...',
		p7: '开始下载...',
		p8: '已下载',
		p9: '已取消下载',
		p10: '发现新版本',
		p11: '暂不升级',
		p12: '立即升级',
		p13: '后台下载',
		p14: '关闭',
		p15: '正在为您更新，请耐心等待',
		p16: '升级APP'
	},
	cns: {
		p1: '暫無新版本',
		p2: '正在安裝檔案...',
		p3: '應用資源更新完成！',
		p4: '安裝檔案失敗',
		p5: '文件下載失敗...',
		p6: '準備下載...',
		p7: '開始下載...',
		p8: '已下載',
		p9: '已取消下載',
		p10: '發現新版本',
		p11: '暫不陞級',
		p12: '立即陞級',
		p13: '後臺下載',
		p14: '關閉',
		p15: '正在為您更新，請耐心等待',
		p16: '陞級APP'
	},
	en: {
		p1: 'No new version',
		p2: 'Installing files...',
		p3: 'Application resource update complete！',
		p4: 'Setup file failed',
		p5: 'File download failed...',
		p6: 'Ready to download...',
		p7: 'Start downloading...',
		p8: 'Downloaded',
		p9: 'Download cancelled',
		p10: 'New version found',
		p11: 'Do not upgrade',
		p12: 'Upgrade now',
		p13: 'Background download',
		p14: 'Close',
		p15: 'We are updating for you, please wait patiently',
		p16: 'Upgrade app'
	},
	ja: {
		p1: '新しいバージョンがありません',
		p2: 'ファイルをインストール中...',
		p3: 'リソースの更新が完了しました！',
		p4: 'ファイルのインストールに失敗しました',
		p5: 'ファイルのダウンロードに失敗しました...',
		p6: 'ダウンロード準備...',
		p7: 'ダウンロードを開始...',
		p8: 'ダウンロード済み',
		p9: 'ダウンロードをキャンセルしました',
		p10: '新しいバージョンが見つかりました',
		p11: '昇進を見合わせる',
		p12: '即時アップグレード',
		p13: 'バックグラウンドのダウンロード',
		p14: '閉じる',
		p15: '更新しますので、お待ちください。',
		p16: 'アップグレードアプリ'
	},
	ko: {
		p1: '새 버 전 없 음',
		p2: '파일 설치 중...',
		p3: '응용 자원 업데이트 완료！',
		p4: '파일 설치 실패',
		p5: '파일 다운로드 실패...',
		p6: '다운로드 준비...',
		p7: '다운로드 시작...',
		p8: '다운로드 됨',
		p9: '다운로드 가 취소 되 었 습 니 다',
		p10: '새로운 판본 을 발견 하 다',
		p11: '잠시 진급 하지 않다',
		p12: '즉시 승급',
		p13: '백 스테이지 다운로드',
		p14: '폐쇄 하 다',
		p15: '업데이트 중 입 니 다. 기 다 려 주세요',
		p16: 'APP 업그레이드'
	},
	vi: {
		p1: 'Không có phiên bản mới',
		p2: 'Cài tập tin...',
		p3: 'Chương trình cập nhật đầy đủ！',
		p4: 'Lỗi thiết lập tập tin',
		p5: 'Lỗi tải tập tin...',
		p6: 'Sẵn sàng tải về...',
		p7: 'Bắt đầu tải...',
		p8: 'Tải',
		p9: 'Tải về',
		p10: 'Tìm phiên bản mới',
		p11: 'Không nâng cấp',
		p12: 'nâng cấp ngay',
		p13: 'Tải về',
		p14: 'đóng',
		p15: 'Chúng tôi đang cập nhật tình hình',
		p16: 'Ứng dụng cấp cao'
	},
}
const localLang = storage.getLocalData('lang')
console.log(localLang)
const lang = localLang == '' || localLang == null ? 'en' : localLang



// 获取当前应用的版本号
export const getCurrentNo = function(callback) {
	// 获取本地应用资源版本号
	plus.runtime.getProperty(plus.runtime.appid, function(inf) {
		callback && callback({
			versionCode: inf.version.replace(/\./g, ""),
			version: inf.version
		});
	});
} 
// 发起ajax请求获取服务端版本号
export const getServerNo = function(version,isPrompt = false, callback) {
	let httpData = {
		version:version
	};
	if (platform == "android") {
		httpData.type = 1101;
	} else {
		httpData.type = 1102;
	}
	/* 接口入参说明
	 * version: 应用当前版本号（已自动获取）
	 * type：平台（1101是安卓，1102是IOS）
	 */
	uni.request({
			url: `{apiConfig.domian}/pub/getUpdate?edition=${version}`,  
			data: {
				edition: version  
			}, 
			type: 'get',
			success: (res) =>{  
				if (res.data.state == 0 && res.data.url) {
					callback && callback(res);
				} else if (isPrompt) {
					uni.showToast({
						title: langs[lang].p1,
						icon: "none"
					});
				}
			}   
	})  
}
// 从服务器下载应用资源包（wgt文件）
export const getDownload = function(data) {
	let popupData = {
		progress:true,
		buttonNum: 2
	};
	if(data.forceUpdate){
		popupData.buttonNum = 0;
	}
	let dtask;
	let lastProgressValue = 0;
	downloadPopup(popupData, function(res) {
		dtask = plus.downloader.createDownload(data.downloadUrl, {
			filename: "_doc/update/"
		}, function(download, status) {
			if (status == 200) {
				res.change({
					progressValue: 100,
					progressTip: langs[lang].p2,
					progress: true,
					buttonNum: 0
				});
				plus.runtime.install(download.filename, {}, function() {
					res.change({
						contentText: langs[lang].p3,
						buttonNum: 1,
						progress: false
					});
				}, function(e) {
					res.cancel();
					plus.nativeUI.alert(langs[lang].p4);
				});
			} else {
				res.change({
					contentText: langs[lang].p5,
					buttonNum: 1,
					progress: false
				});
			}
		});
		dtask.start();
		dtask.addEventListener("statechanged", function(task, status) {
			switch (task.state) {
				case 1: // 开始
					res.change({
						progressValue:0,
						progressTip: langs[lang].p6,
						progress: true
					});
					break;
				case 2: // 已连接到服务器  
					res.change({
						progressValue:0,
						progressTip: langs[lang].p7,
						progress: true
					});
					break;
				case 3:
					const progress = parseInt(task.downloadedSize / task.totalSize * 100);
					if(progress - lastProgressValue >= 2){
						lastProgressValue = progress;
						res.change({
							progressValue:progress,
							progressTip: langs[lang].p8 + progress + "%",
							progress: true
						});
					}
					
					break;
			}
		});
	},function(){
		// 取消下载
		dtask && dtask.abort();
		uni.showToast({
			title: langs[lang].p9,
			icon:"none"
		});
	},
	function(){
		// 重启APP
		plus.runtime.restart();
	});
}
// 文字换行
function drawtext(text, maxWidth) {
	let textArr = text.split("");
	let len = textArr.length;
	// 上个节点
	let previousNode = 1;
	// 记录节点宽度
	let nodeWidth = 0;
	// 文本换行数组
	let rowText = [];
	for (let i = 0; i < len; i++) {
		if (/[\u4e00-\u9fa5]/g.test(textArr[i])) {
			nodeWidth += 24;
		} else {
			nodeWidth += 12;
		}
		if (nodeWidth >= maxWidth) {
			rowText.push(text.substring(previousNode, i));
			previousNode = i;
			nodeWidth = 0;
		}
	}
	if (previousNode < text.length) {
		rowText.push(text.substring(previousNode, text.length));
	}
	return rowText.length;
}
// 是否更新弹窗
function updatePopup(data, callback) {
	// 弹窗遮罩层
	let maskLayer = new plus.nativeObj.View("maskLayer", { //先创建遮罩层
		top: '0px',
		left: '0px',
		height: '100%',
		width: '100%',
		backgroundColor: 'rgba(0,0,0,0.5)'
	});

	// 以下为计算菜单的nview绘制布局，为固定算法，使用者无关关心
	const screenWidth = plus.screen.resolutionWidth;
	const screenHeight = plus.screen.resolutionHeight;
	//弹窗容器宽度
	const popupViewWidth = screenWidth * 0.7;
	// 弹窗容器的Padding
	const viewContentPadding = 20;
	// 弹窗容器的宽度
	const viewContentWidth = parseInt(popupViewWidth - (viewContentPadding * 2));
	// 文本高度
	let viewContentHeight = parseInt(drawtext(data.versionInfo, viewContentWidth) * 16) + 10;
	// 弹窗容器高度
	const popupViewHeight = viewContentHeight + 80 + 20 + 20 + 90;
	// 弹窗内容
	let popupView = new plus.nativeObj.View("popupView", { //创建底部图标菜单
		tag: "rect",
		top: (screenHeight - popupViewHeight) / 2 + "px",
		left: '15%',
		height: popupViewHeight + "px",
		width: "70%"
	});
	// 绘制白色背景
	popupView.drawRect({
		color: "#FFFFFF",
		radius: "8px"
	}, {
		top: "40px",
		height: popupViewHeight - 40 + "px",
	});
	// 绘制底边按钮
	popupView.drawRect({
		radius: "3px",
		borderColor: "#f1f1f1",
		borderWidth: "1px",
	}, {
		bottom: viewContentPadding + 'px',
		left: viewContentPadding + "px",
		width: (viewContentWidth - viewContentPadding) / 2 + "px",
		height: "30px",
	});
	// 绘制底边按钮
	popupView.drawRect({
		radius: "3px",
		color: $mainColor,
	}, {
		bottom: viewContentPadding + 'px',
		left: ((viewContentWidth - viewContentPadding) / 2 + viewContentPadding * 2) + "px",
		width: (viewContentWidth - viewContentPadding) / 2 + "px",
		height: "30px",
	});
	popupView.draw([{
			src: $iconUrl,
			id: "logo",
			tag: "img",
			position: {
				top: "0px",
				left: (popupViewWidth - 124) / 2 + "px",
				width: "124px",
				height: "80px",
			}
		},
		{
			tag: 'font',
			id: 'title',
			text: langs[lang].p10 + data.versionName,
			textStyles: {
				size: '18px',
				color: "#333",
				weight: "bold",
				whiteSpace: "normal"
			},
			position: {
				top: '90px',
				left: viewContentPadding + "px",
				width: viewContentWidth + "px",
				height: "30px",
			}
		},
		{
			tag: 'font',
			id: 'content23',
			text: data.versionInfo,
			textStyles: {
				size: '14px',
				color: "#666",
				lineSpacing: "50%",
				whiteSpace: "normal"
			},
			position: {
				top: '130px',
				left: viewContentPadding + "px",
				width: viewContentWidth + "px",
				height: viewContentHeight + "px",
			}
		},
		{
			tag: 'font',
			id: 'cancelText',
			text: langs[lang].p11,
			textStyles: {
				size: '14px',
				color: "#666",
				lineSpacing: "0%",
				whiteSpace: "normal"
			},
			position: {
				bottom: viewContentPadding + 'px',
				left: viewContentPadding + "px",
				width: (viewContentWidth - viewContentPadding) / 2 + "px",
				height: "30px",
			}
		},
		{
			tag: 'font',
			id: 'confirmText',
			text: langs[lang].p12,
			textStyles: {
				size: '14px',
				color: "#FFF",
				lineSpacing: "0%",
				whiteSpace: "normal"
			},
			position: {
				bottom: viewContentPadding + 'px',
				left: ((viewContentWidth - viewContentPadding) / 2 + viewContentPadding * 2) + "px",
				width: (viewContentWidth - viewContentPadding) / 2 + "px",
				height: "30px",
			}
		},
	]);
	popupView.addEventListener("click", function(e) {
		let maxTop = popupViewHeight - viewContentPadding;
		let maxLeft = popupViewWidth - viewContentPadding;
		let buttonWidth = (viewContentWidth - viewContentPadding) / 2;
		if (e.clientY > maxTop - 30 && e.clientY < maxTop) {
			// 暂不升级
			if (e.clientX > viewContentPadding && e.clientX < maxLeft - buttonWidth - viewContentPadding) {
				maskLayer.hide();
				popupView.hide();
			} else if (e.clientX > maxLeft - buttonWidth && e.clientX < maxLeft) {
				// 立即升级
				maskLayer.hide();
				popupView.hide();
				callback && callback();
			}
		}
	});
	// 点击遮罩层
	maskLayer.addEventListener("click", function() { //处理遮罩层点击
		maskLayer.hide();
		popupView.hide();
	});
	// 显示弹窗
	maskLayer.show();
	popupView.show();
}
// 文件下载的弹窗绘图
function downloadPopupDrawing(data){
	// 以下为计算菜单的nview绘制布局，为固定算法，使用者无关关心
	const screenWidth = plus.screen.resolutionWidth;
	const screenHeight = plus.screen.resolutionHeight;
	//弹窗容器宽度
	const popupViewWidth = screenWidth * 0.7;
	// 弹窗容器的Padding
	const viewContentPadding = 20;
	// 弹窗容器的宽度
	const viewContentWidth = popupViewWidth - (viewContentPadding * 2);
	// 弹窗容器高度
	let popupViewHeight = viewContentPadding * 3 + 60;
	let progressTip = data.progressTip || langs[lang].p6;
	let contentText = data.contentText || langs[lang].p15;
	let elementList = [
		{
			tag: 'rect', //背景色
			color: '#FFFFFF',
			rectStyles:{
				radius: "8px"
			}
		},
		{
			tag: 'font',
			id: 'title',
			text: langs[lang].p16,
			textStyles: {
				size: '16px',
				color: "#333",
				weight: "bold",
				verticalAlign: "middle",
				whiteSpace: "normal"
			},
			position: {
				top: viewContentPadding + 'px',
				height: "30px",
			}
		},
		{
			tag: 'font',
			id: 'content',
			text: contentText,
			textStyles: {
				size: '14px',
				color: "#333",
				verticalAlign: "middle",
				whiteSpace: "normal"
			},
			position: {
				top: viewContentPadding * 2 + 30 + 'px',
				height: "20px",
			}
		}
	];
	// 是否有进度条
	if(data.progress){
		popupViewHeight += viewContentPadding + 40;
		elementList = elementList.concat([
			{
				tag: 'font',
				id: 'progressValue',
				text: progressTip,
				textStyles: {
					size: '14px',
					color: $mainColor,
					whiteSpace: "normal"
				},
				position: {
					top: viewContentPadding * 4 + 20 + 'px',
					height: "30px"
				}
			},
			{
				tag: 'rect', //绘制进度条背景
				id: 'progressBg',
				rectStyles:{
					radius: "4px",
					borderColor: "#f1f1f1",
					borderWidth: "1px",
				},
				position:{
					top: viewContentPadding * 4 + 60 + 'px',
					left: viewContentPadding + "px",
					width: viewContentWidth + "px",
					height: "8px"
				}
			},
		]);
	}
	if (data.buttonNum == 2) {
		popupViewHeight += viewContentPadding + 30;
		elementList = elementList.concat([
			{
				tag: 'rect', //绘制底边按钮
				rectStyles:{
					radius: "3px",
					borderColor: "#f1f1f1",
					borderWidth: "1px",
				},
				position:{
					bottom: viewContentPadding + 'px',
					left: viewContentPadding + "px",
					width: (viewContentWidth - viewContentPadding) / 2 + "px",
					height: "30px"
				}
			},
			{
				tag: 'rect', //绘制底边按钮
				rectStyles:{
					radius: "3px",
					color: $mainColor
				},
				position:{
					bottom: viewContentPadding + 'px',
					left: ((viewContentWidth - viewContentPadding) / 2 + viewContentPadding * 2) + "px",
					width: (viewContentWidth - viewContentPadding) / 2 + "px",
					height: "30px"
				}
			},
			{
				tag: 'font',
				id: 'cancelText',
				text: lang[lang].p13,
				textStyles: {
					size: '14px',
					color: "#666",
					lineSpacing: "0%",
					whiteSpace: "normal"
				},
				position: {
					bottom: viewContentPadding + 'px',
					left: viewContentPadding + "px",
					width: (viewContentWidth - viewContentPadding) / 2 + "px",
					height: "30px",
				}
			},
			{
				tag: 'font',
				id: 'confirmText',
				text: lang[lang].p14,
				textStyles: {
					size: '14px',
					color: "#FFF",
					lineSpacing: "0%",
					whiteSpace: "normal"
				},
				position: {
					bottom: viewContentPadding + 'px',
					left: ((viewContentWidth - viewContentPadding) / 2 + viewContentPadding * 2) + "px",
					width: (viewContentWidth - viewContentPadding) / 2 + "px",
					height: "30px",
				}
			}
		]);
	}
	if (data.buttonNum == 1) {
		popupViewHeight += viewContentPadding + 40;
		elementList = elementList.concat([
			{
				tag: 'rect', //绘制底边按钮
				rectStyles:{
					radius: "6px",
					color: $mainColor
				},
				position:{
					bottom: viewContentPadding + 'px',
					left: viewContentPadding + "px",
					width: viewContentWidth + "px",
					height: "40px"
				}
			},
			{
				tag: 'font',
				id: 'confirmText',
				text: langs[lang].p14,
				textStyles: {
					size: '14px',
					color: "#FFF",
					lineSpacing: "0%",
				},
				position: {
					bottom: viewContentPadding + 'px',
					left: viewContentPadding + "px",
					width: viewContentWidth + "px",
					height: "40px"
				}
			}
		]);
	}
	return {
		popupViewHeight:popupViewHeight,
		popupViewWidth:popupViewWidth,
		screenHeight:screenHeight,
		viewContentWidth:viewContentWidth,
		viewContentPadding:viewContentPadding,
		elementList: elementList
	};
}
// 文件下载的弹窗
function downloadPopup(data, callback, cancelCallback,rebootCallback) {
	// 弹窗遮罩层
	let maskLayer = new plus.nativeObj.View("maskLayer", { //先创建遮罩层
		top: '0px',
		left: '0px',
		height: '100%',
		width: '100%',
		backgroundColor: 'rgba(0,0,0,0.5)'
	});
	let popupViewData = downloadPopupDrawing(data);
	// 弹窗内容
	let popupView = new plus.nativeObj.View("popupView", { //创建底部图标菜单
		tag: "rect",
		top: (popupViewData.screenHeight - popupViewData.popupViewHeight) / 2 + "px",
		left: '15%',
		height: popupViewData.popupViewHeight + "px",
		width: "70%",
	});
	let progressValue = 0;
	let progressTip = 0;
	let contentText = 0;
	let buttonNum = 2;
	if(data.buttonNum >= 0){
		buttonNum = data.buttonNum;
	}
	popupView.draw(popupViewData.elementList);
	popupView.addEventListener("click", function(e) {
		let maxTop = popupViewData.popupViewHeight - popupViewData.viewContentPadding;
		let maxLeft = popupViewData.popupViewWidth - popupViewData.viewContentPadding;
		if (e.clientY > maxTop - 40 && e.clientY < maxTop) {
			if(buttonNum == 1){
				// 单按钮
				if (e.clientX > popupViewData.viewContentPadding && e.clientX < maxLeft) {
					maskLayer.hide();
					popupView.hide();
					rebootCallback && rebootCallback();
				}
			}else if(buttonNum == 2){
				// 双按钮
				let buttonWidth = (popupViewData.viewContentWidth - popupViewData.viewContentPadding) / 2;
				if (e.clientX > popupViewData.viewContentPadding && e.clientX < maxLeft - buttonWidth - popupViewData.viewContentPadding) {
					maskLayer.hide();
					popupView.hide();
					cancelCallback && cancelCallback();
				} else if (e.clientX > maxLeft - buttonWidth && e.clientX < maxLeft) {
					maskLayer.hide();
					popupView.hide();
				}
			}
		}
	});
	// 显示弹窗
	maskLayer.show();
	popupView.show();
	// 改变进度条
	callback({
		change: function(res) {
			let progressElement = [];
			if(res.progressValue){
				progressValue = res.progressValue;
				// 绘制进度条
				progressElement.push({
					tag: 'rect', //绘制进度条背景
					id: 'progressValueBg',
					rectStyles:{
						radius: "4px",
						color: $mainColor
					},
					position:{
						top: popupViewData.viewContentPadding * 4 + 60 + 'px',
						left: popupViewData.viewContentPadding + "px",
						width: popupViewData.viewContentWidth * (res.progressValue / 100) + "px",
						height: "8px"
					}
				});
			}
			if(res.progressTip){
				progressTip = res.progressTip;
				progressElement.push({
					tag: 'font',
					id: 'progressValue',
					text: res.progressTip,
					textStyles: {
						size: '14px',
						color: $mainColor,
						whiteSpace: "normal"
					},
					position: {
						top: popupViewData.viewContentPadding * 4 + 20 + 'px',
						height: "30px"
					}
				});
			}
			if(res.contentText){
				contentText = res.contentText;
				progressElement.push({
					tag: 'font',
					id: 'content',
					text: res.contentText,
					textStyles: {
						size: '16px',
						color: "#333",
						whiteSpace: "normal"
					},
					position: {
						top: popupViewData.viewContentPadding * 2 + 30 + 'px',
						height: "30px",
					}
				});
			}
			if(res.buttonNum >= 0 && buttonNum != res.buttonNum){
				buttonNum = res.buttonNum;
				popupView.reset();
				popupViewData = downloadPopupDrawing(Object.assign({
					progressValue:progressValue,
					progressTip:progressTip,
					contentText:contentText,
				},res));
				let newElement = [];
				popupViewData.elementList.map((item,index) => {
					let have = false;
					progressElement.forEach((childItem,childIndex) => {
						if(item.id == childItem.id){
							have = true;
						}
					});
					if(!have){
						newElement.push(item);
					}
				});
				progressElement = newElement.concat(progressElement);
				popupView.setStyle({
					tag: "rect",
					top: (popupViewData.screenHeight - popupViewData.popupViewHeight) / 2 + "px",
					left: '15%',
					height: popupViewData.popupViewHeight + "px",
					width: "70%",
				});
				popupView.draw(progressElement); 
			}else{
				popupView.draw(progressElement);
			}
		},
		cancel: function() { 
			maskLayer.hide();
			popupView.hide();
		}
	});
}
export default function(isPrompt = false) {
	getCurrentNo(version => {
		getServerNo(version.versionCode,isPrompt, res => {
			if (res.forceUpdate) {
				if (/\.wgt$/i.test(res.downloadUrl)) {
					getDownload(res);
				} else {
					if (platform == "android") {
						getDownload(res);
					} else {
						plus.runtime.openURL(res.downloadUrl);
					}
				}
			} else {
				updatePopup(res, function() {
					if (/\.wgt$/i.test(res.downloadUrl)) {
						getDownload(res);
					} else {
						if (platform == "android") {
							getDownload(res);
						} else {
							plus.runtime.openURL(res.downloadUrl);
						}
					}
				});
			}
		});
	});
}
// #endif