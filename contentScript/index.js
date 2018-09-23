/*
 * @Author: zy9@github.com/zy410419243
 * @Date: 2018-06-08 11:15:23
 * @Last Modified by: zy9
 * @Last Modified time: 2018-09-23 10:01:43
 */
import { injectScript } from './inject';
import { dispatchContentScriptToInject } from '../util/Request';
import { GetParams, EditParam } from '../util/GetParams';

injectScript(chrome.extension.getURL('/inject.js'), chrome.extension.getURL('/main.js'));

window.onload = e => {
	dispatchContentScriptToInject({ message: 'triggerMouseHover' });
};

const handlePageTurn = pageType => {
	const page = parseInt(GetParams('page')) || 0;

	window.location.href = EditParam(window.location.href, 'page', pageType + page);
};

const eventBind = (ref, method) => {
	ref.addEventListener('click', method, false);
};

let child, imgHTML = '';

// 用作接收inject返回的值
document.getElementById('init_window').addEventListener('inject_to_content_script', e => {
	const { message, error, data } = e.detail;

	switch (message) {
		case 'doGetImgInfos': // 加入遮罩层显示图片
			// eslint-disable-next-line
			const flag = JSON.parse(GetParams('show') || null);

			if (flag) {
				child = document.createElement('div');
				child.style.position = 'absolute';
				child.style.zIndex = 100;
				child.style.width = '100%';
				child.style.top = '0px';
				child.style.left = '0px';
				child.style.background = '#CADFF2';

				for (let item of data) {
					const { src, href } = item;

					imgHTML += `
						<div style='float: left; width: 20%;'>
							<img src='${ src }' style='height: 376px; width: 100%; cursor: pointer;' onclick='window.open("${ href }?show=false")' />
						</div>
					`;
				}

				child.innerHTML = imgHTML + `
					<div style='position: fixed; bottom: 0; left: 0; z-index: 101; height: 100px; background: #F96; opacity: 0.7; cursor: crosshair; width: 100%;'>
						<div style='float: left; width: 50%; height: 100%;' id='toLast'></div>
						<div style='float: left; width: 50%; height: 100%;' id='toNext'></div>
					</div>
				`;

				document.body.appendChild(child);

				eventBind(document.getElementById('toLast'), () => {
					handlePageTurn(-1);
				});

				eventBind(document.getElementById('toNext'), () => {
					handlePageTurn(1);
				});
			}

			break;

		case 'error': // 处理异常
			console.error(`注入错误：${error}`);

			break;

		default:

			break;
	}
});

// 长连接监听统一写在这
// chrome.runtime.onConnect.addListener(port => {
// 	const { name } = port;

// 	switch (name) {
// 		case 'popup_to_content':
// 			port.onMessage.addListener(response => {
// 				const { zoom, message, search, type, status, battleId, groupId, interval } = response;

// 				switch (message) {
// 					case 'test':
// 						break;

// 					default:

// 						break;
// 				}
// 			});
// 			break;

// 		default:

// 			break;
// 	}
// });