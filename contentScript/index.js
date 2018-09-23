/*
 * @Author: zy9@github.com/zy410419243
 * @Date: 2018-06-08 11:15:23
 * @Last Modified by: zy9
 * @Last Modified time: 2018-09-23 11:37:46
 */
import { injectScript } from './inject';
import { dispatchContentScriptToInject } from '../util/Request';

injectScript(chrome.extension.getURL('/inject.js'), chrome.extension.getURL('/main.js'));

window.onload = e => {
	dispatchContentScriptToInject({ message: 'triggerMouseHover' });
};