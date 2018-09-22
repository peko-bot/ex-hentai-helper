/*
 * @Author: zy9@github.com/zy410419243
 * @Date: 2018-07-08 09:26:10
 * @Last Modified by: zy9
 * @Last Modified time: 2018-09-22 11:27:05
 */
import { dispatchInjectToContentScript } from '../util/Request';

const getPreloadImgParams = (doms = document.getElementsByClassName('itd'), callback) => {
	for (let item of Array.from(doms)) {
		const { onmouseover } = item;

		if (onmouseover) {
			let params = onmouseover.toString().split('{')[1].split('}')[0];

			params = params.split('(')[1].split(')')[0];
			const [a, b, c] = params.split(',');

			load_pane_image(document.getElementById('i' + c));
			load_pane_image(document.getElementById('i' + b));
			load_pane_image(document.getElementById('i' + a));
		}
	}
};

let srcs = [], hrefs = [], imgInfos = [];

document.getElementById('init_window').addEventListener('content_script_to_inject', e => {
	try {
		const { message, data, url } = e.detail;

		switch (message) {
			case 'triggerMouseHover': // 模拟鼠标移入事件获得缩略图图片地址和链接地址
				getPreloadImgParams(document.getElementsByClassName('itd'));

				srcs = Array.from(document.getElementsByClassName('it2'));
				hrefs = Array.from(document.getElementsByClassName('it5'));

				for (let i = 0, len = srcs.length; i < len; i++) {
					const ins = {
						src: srcs[i].firstChild.src,
						href: hrefs[i].firstChild.href
					};

					imgInfos.push(ins);
				}

				dispatchInjectToContentScript({ message: 'doGetImgInfos', data: imgInfos });

				break;

			default:

				break;
		}
	} catch (error) {
		dispatchInjectToContentScript({ message: 'error', error });
	}
});