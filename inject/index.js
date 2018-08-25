/*
 * @Author: zy9@github.com/zy410419243
 * @Date: 2018-07-08 09:26:10
 * @Last Modified by: zy9
 * @Last Modified time: 2018-08-25 20:44:24
 */
import { dispatchInjectToContentScript } from '../util/Request';

document.getElementById('init_window').addEventListener('content_script_to_inject', e => {
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