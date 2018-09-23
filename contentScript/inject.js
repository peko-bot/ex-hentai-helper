/*
 * @Author: zy9@github.com/zy410419243
 * @Date: 2018-08-03 15:17:37
 * @Last Modified by: zy9
 * @Last Modified time: 2018-09-23 09:45:29
 */
const injectScript = (injectFile, reactFile) => {
	let th = document.getElementsByTagName('body')[0];

	let s = document.createElement('script');

	s.setAttribute('type', 'text/javascript');
	s.setAttribute('src', injectFile);

	// 初始化contentScript和inject通信节点
	let windowWraper = document.createElement('script');

	windowWraper.id = 'init_window';

	// 初始化react根节点
	let reactRoot = document.createElement('div');

	reactRoot.id = 'injectReact';

	// 引入react
	let reactWrapper = document.createElement('script');

	reactWrapper.setAttribute('type', 'text/javascript');
	reactWrapper.setAttribute('src', reactFile);

	th.appendChild(s);
	th.appendChild(reactRoot);
	th.appendChild(reactWrapper);
	th.appendChild(windowWraper);
};

export { injectScript };