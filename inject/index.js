/*
 * @Author: zy9@github.com/zy410419243
 * @Date: 2018-07-08 09:26:10
 * @Last Modified by: zy9
 * @Last Modified time: 2018-08-25 22:08:29
 */
import { dispatchInjectToContentScript } from '../util/Request';

// show_image_pane(1276701);
const hrefs = document.getElementsByClassName('it5');
const imgWrappers = document.getElementsByClassName('it2');

for(let item of hrefs) {
	item.getElementsByTagName('a')[0].onmouseover();
}

for(let item of imgWrappers) {
	window.open(item.getElementsByTagName('img')[0].src);
}

document.getElementById('init_window').addEventListener('content_script_to_inject', e => {
	console.log(e);
	try {
		const { message, data, url } = e.detail;

		switch (message) {
			case 'triggerMouseHover':
				console.log(preload_pane_image_delayed);
				break;

			default:

				break;
		}
	} catch (error) {
		dispatchInjectToContentScript({ message: 'error', error });
	}
});