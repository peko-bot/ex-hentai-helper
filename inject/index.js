/*
 * @Author: zy9@github.com/zy410419243
 * @Date: 2018-07-08 09:26:10
 * @Last Modified by: zy9
 * @Last Modified time: 2018-09-22 10:46:36
 */
import { dispatchInjectToContentScript } from '../util/Request';

// show_image_pane(1276701);
// const hrefs = document.getElementsByClassName('it5');
// const imgWrappers = document.getElementsByClassName('it2');

// for(let item of hrefs) {
// 	item.getElementsByTagName('a')[0].onmouseover();
// }

// for(let item of imgWrappers) {
// 	window.open(item.getElementsByTagName('img')[0].src);
// }

const getPreloadImgParams = (doms = document.getElementsByClassName('itd'), callback) => {
	for(let item of Array.from(doms)) {
		const { onmouseover } = item;

		if(onmouseover) {
			let params = onmouseover.toString().split('{')[1].split('}')[0];

			params = params.split('(')[1].split(')')[0];

			preload_pane_image_delayed(params);

		}
	}
};

let imgWrappers;

document.getElementById('init_window').addEventListener('content_script_to_inject', e => {
	try {
		const { message, data, url } = e.detail;

		switch (message) {
			case 'triggerMouseHover':
				getPreloadImgParams(document.getElementsByClassName('itd'));

				setTimeout(() => {
					imgWrappers = Array.from(document.getElementsByClassName('it2'));

					for(let item of imgWrappers) {
						const src = item.firstChild.src;

						console.log(src);
					}
				}, 1000);

				break;

			default:

				break;
		}
	} catch (error) {
		dispatchInjectToContentScript({ message: 'error', error });
	}
});