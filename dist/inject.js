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
/******/ 	return __webpack_require__(__webpack_require__.s = "./inject/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./inject/index.js":
/*!*************************!*\
  !*** ./inject/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @Author: zy9@github.com/zy410419243
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @Date: 2018-07-08 09:26:10
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @Last Modified by: zy9
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @Last Modified time: 2018-09-22 12:52:21
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


var _Request = __webpack_require__(/*! ../util/Request */ "./util/Request.js");

var getPreloadImgParams = function getPreloadImgParams() {
	var doms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.getElementsByClassName('itd');
	var callback = arguments[1];
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = Array.from(doms)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var item = _step.value;
			var onmouseover = item.onmouseover;


			if (onmouseover) {
				var params = onmouseover.toString().split('{')[1].split('}')[0];

				params = params.split('(')[1].split(')')[0];

				var _params$split = params.split(','),
				    _params$split2 = _slicedToArray(_params$split, 3),
				    a = _params$split2[0],
				    b = _params$split2[1],
				    c = _params$split2[2];

				load_pane_image(document.getElementById('i' + c));
				load_pane_image(document.getElementById('i' + b));
				load_pane_image(document.getElementById('i' + a));
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}
};

var srcs = [],
    hrefs = [],
    imgInfos = [];

document.getElementById('init_window').addEventListener('content_script_to_inject', function (e) {
	try {
		var _e$detail = e.detail,
		    message = _e$detail.message,
		    data = _e$detail.data,
		    url = _e$detail.url;


		switch (message) {
			case 'triggerMouseHover':
				// 模拟鼠标移入事件获得缩略图图片地址和链接地址
				getPreloadImgParams(document.getElementsByClassName('itd'));

				srcs = Array.from(document.getElementsByClassName('it2'));
				hrefs = Array.from(document.getElementsByClassName('it5'));

				for (var i = 0, len = srcs.length; i < len; i++) {
					var ins = {
						src: srcs[i].firstChild.src,
						href: hrefs[i].firstChild.href
					};

					imgInfos.push(ins);
				}

				(0, _Request.dispatchInjectToContentScript)({ message: 'doGetImgInfos', data: imgInfos });

				break;

			default:

				break;
		}
	} catch (error) {
		(0, _Request.dispatchInjectToContentScript)({ message: 'error', error: error });
	}
});

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
//# sourceMappingURL=inject.js.map