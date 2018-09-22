/*
 * @Author: zy9@github.com/zy410419243
 * @Date: 2018-06-08 11:15:23
 * @Last Modified by: zy9
 * @Last Modified time: 2018-09-22 10:17:40
 */
import { injectScript } from './inject';
import { dispatchContentScriptToInject } from '../util/Request';

injectScript(chrome.extension.getURL('/inject.js'));

window.onload = e => {
	dispatchContentScriptToInject({ message: 'triggerMouseHover' });
};

// 用作接收inject返回的值
document.getElementById('init_window').addEventListener('inject_to_content_script', e => {
	const { message, url, count, error, status } = e.detail;

	switch (message) {
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