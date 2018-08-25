/*
 * @Author: zy9@github.com/zy410419243
 * @Date: 2018-06-09 21:42:02
 * @Last Modified by: zy9
 * @Last Modified time: 2018-08-25 20:19:22
 */
// import { local } from './initLocalStorage';

// window.store = local;

// chrome.browserAction.setPopup({ popup: local.get('isMultil') ? '' : 'index.html' });

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	const { url, status } = tab;

	if (status == 'complete') {
	}

	if (status == 'loading') {
	}
});

chrome.runtime.onMessage.addListener((response, sender, sendResponse) => {
	const { message, zoom, search, url, data, error, status } = response;
	let tasks = { error: '', tasks: '' };

	switch (message) {
		case 'test':
			tasks = Object.assign(tasks, { zoom: local.get('zoom') });
			break;

		default:

			break;
	}

	sendResponse(tasks);
});