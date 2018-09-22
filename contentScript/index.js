/*
 * @Author: zy9@github.com/zy410419243
 * @Date: 2018-06-08 11:15:23
 * @Last Modified by: zy9
 * @Last Modified time: 2018-09-22 11:36:52
 */
import { injectScript } from './inject';
import { dispatchContentScriptToInject } from '../util/Request';

injectScript(chrome.extension.getURL('/inject.js'));

window.onload = e => {
	dispatchContentScriptToInject({ message: 'triggerMouseHover' });
};

let child, imgHTML = '';

// 用作接收inject返回的值
document.getElementById('init_window').addEventListener('inject_to_content_script', e => {
	const { message, error, data } = e.detail;

	switch (message) {
		case 'doGetImgInfos': // 加入遮罩层显示图片
			// eslint-disable-next-line
			child = document.createElement('div');
			child.style.position = 'absolute';
			child.style.zIndex = 100;
			child.style.width = '100%';
			child.style.height = '100%';
			child.style.top = '0px';
			child.style.left = '0px';
			child.style.background = '#CADFF2';

			for(let item of data) {
				const { src, href } = item;

				imgHTML += `
					<img src='${ src }' onclick='window.open("${ href }?show=false")' style='float: left; width: 33%:' />
				`;
			}
			child.innerHTML = `
				<div style='width: 100%;'>
					${ imgHTML }
				</div>
			`;

			document.body.appendChild(child);

			break;

		case 'error': // 处理异常
			console.error(`注入错误：${ error }`);

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