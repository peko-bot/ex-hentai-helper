/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./contentScript/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./contentScript/index.js":
/*!********************************!*\
  !*** ./contentScript/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _inject = __webpack_require__(/*! ./inject */ "./contentScript/inject.js");

var _Request = __webpack_require__(/*! ../util/Request */ "./util/Request.js");

var _GetParams = __webpack_require__(/*! ../util/GetParams */ "./util/GetParams.js");

(0, _inject.injectScript)(chrome.extension.getURL('/inject.js'), chrome.extension.getURL('/main.js')); /*
                                                                                                        * @Author: zy9@github.com/zy410419243
                                                                                                        * @Date: 2018-06-08 11:15:23
                                                                                                        * @Last Modified by: zy9
                                                                                                        * @Last Modified time: 2018-09-23 10:38:34
                                                                                                        */


window.onload = function (e) {
  (0, _Request.dispatchContentScriptToInject)({ message: 'triggerMouseHover' });
};

// const handlePageTurn = pageType => {
// 	const page = parseInt(GetParams('page')) || 0;

// 	window.location.href = EditParam(window.location.href, 'page', pageType + page);
// };

// const eventBind = (ref, method) => {
// 	ref.addEventListener('click', method, false);
// };

// let child, imgHTML = '';

// // 用作接收inject返回的值
// document.getElementById('init_window').addEventListener('inject_to_content_script', e => {
// 	const { message, error, data } = e.detail;

// 	switch (message) {
// 		case 'doGetImgInfos': // 加入遮罩层显示图片
// 			// eslint-disable-next-line
// 			const flag = JSON.parse(GetParams('show') || null);

// 			if (flag) {
// 				child = document.createElement('div');
// 				child.style.position = 'absolute';
// 				child.style.zIndex = 100;
// 				child.style.width = '100%';
// 				child.style.top = '0px';
// 				child.style.left = '0px';
// 				child.style.background = '#CADFF2';

// 				for (let item of data) {
// 					const { src, href } = item;

// 					imgHTML += `
// 						<div style='float: left; width: 20%;'>
// 							<img src='${ src }' style='height: 376px; width: 100%; cursor: pointer;' onclick='window.open("${ href }?show=false")' />
// 						</div>
// 					`;
// 				}

// 				child.innerHTML = imgHTML + `
// 					<div style='position: fixed; bottom: 0; left: 0; z-index: 101; height: 100px; background: #F96; opacity: 0.7; cursor: crosshair; width: 100%;'>
// 						<div style='float: left; width: 50%; height: 100%;' id='toLast'></div>
// 						<div style='float: left; width: 50%; height: 100%;' id='toNext'></div>
// 					</div>
// 				`;

// 				document.body.appendChild(child);

// 				eventBind(document.getElementById('toLast'), () => {
// 					handlePageTurn(-1);
// 				});

// 				eventBind(document.getElementById('toNext'), () => {
// 					handlePageTurn(1);
// 				});
// 			}

// 			break;

// 		case 'error': // 处理异常
// 			console.error(`注入错误：${error}`);

// 			break;

// 		default:

// 			break;
// 	}
// });

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

/***/ }),

/***/ "./contentScript/inject.js":
/*!*********************************!*\
  !*** ./contentScript/inject.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/*
 * @Author: zy9@github.com/zy410419243
 * @Date: 2018-08-03 15:17:37
 * @Last Modified by: zy9
 * @Last Modified time: 2018-09-23 09:45:29
 */
var injectScript = function injectScript(injectFile, reactFile) {
	var th = document.getElementsByTagName('body')[0];

	var s = document.createElement('script');

	s.setAttribute('type', 'text/javascript');
	s.setAttribute('src', injectFile);

	// 初始化contentScript和inject通信节点
	var windowWraper = document.createElement('script');

	windowWraper.id = 'init_window';

	// 初始化react根节点
	var reactRoot = document.createElement('div');

	reactRoot.id = 'injectReact';

	// 引入react
	var reactWrapper = document.createElement('script');

	reactWrapper.setAttribute('type', 'text/javascript');
	reactWrapper.setAttribute('src', reactFile);

	th.appendChild(s);
	th.appendChild(reactRoot);
	th.appendChild(reactWrapper);
	th.appendChild(windowWraper);
};

exports.injectScript = injectScript;

/***/ }),

/***/ "./util/GetParams.js":
/*!***************************!*\
  !*** ./util/GetParams.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/*
 * @Author: zy9@github.com/zy410419243
 * @Date: 2018-07-31 09:42:48
 * @Last Modified by: zy9
 * @Last Modified time: 2018-09-23 10:37:31
 */
var GetParams = exports.GetParams = function GetParams(name) {
	var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)'); // 匹配目标参数
	var result = window.location.href.split('?').length > 1 ? window.location.href.split('?')[1].match(reg) : 0; // 对querystring匹配目标参数

	if (result != null) {
		return result[2] === 'undefined' ? undefined : result[2];
		// return decodeURIComponent(result[2]);
	}
	return null;
};

var EditParam = exports.EditParam = function EditParam(url, arg, arg_val) {
	var pattern = arg + '=([^&]*)';
	var replaceText = arg + '=' + arg_val;

	if (url.match(pattern)) {
		var tmp = '/(' + arg + '=)([^&]*)/gi';
		tmp = url.replace(eval(tmp), replaceText);
		return tmp;
	} else {
		if (url.match('[\?]')) {
			return url + '&' + replaceText;
		} else {
			return url + '?' + replaceText;
		}
	}
};

/***/ }),

/***/ "./util/Request.js":
/*!*************************!*\
  !*** ./util/Request.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 * @Author: zy9@github.com/zy410419243
 * @Date: 2018-06-08 09:13:33
 * @Last Modified by: zy9
 * @Last Modified time: 2018-08-25 22:37:05
 */
var dispatchInjectToContentScript = function dispatchInjectToContentScript(detail) {
    // document.dispatchEvent(new CustomEvent('inject_to_content_script', { detail }))
    var customEvent = new CustomEvent('inject_to_content_script', {
        detail: detail
    });
    var node = document.getElementById('init_window');

    node.dispatchEvent(customEvent);
};

var dispatchContentScriptToInject = function dispatchContentScriptToInject(detail) {
    var customEvent = new CustomEvent('content_script_to_inject', {
        detail: detail
    });
    var node = document.getElementById('init_window');

    node.dispatchEvent(customEvent);
};

exports.dispatchInjectToContentScript = dispatchInjectToContentScript;
exports.dispatchContentScriptToInject = dispatchContentScriptToInject;

/***/ })

/******/ });
//# sourceMappingURL=contentScript.js.map