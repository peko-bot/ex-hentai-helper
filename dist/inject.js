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


var _Request = __webpack_require__(/*! ../util/Request */ "./util/Request.js");

document.getElementById('init_window').addEventListener('content_script_to_inject', function (e) {
	try {
		var _e$detail = e.detail,
		    message = _e$detail.message,
		    data = _e$detail.data,
		    url = _e$detail.url;


		switch (message) {
			case 'triggerMouseHover':
				console.log(preload_pane_image_delayed);
				break;

			default:

				break;
		}
	} catch (error) {
		(0, _Request.dispatchInjectToContentScript)({ message: 'error', error: error });
	}
}); /*
     * @Author: zy9@github.com/zy410419243
     * @Date: 2018-07-08 09:26:10
     * @Last Modified by: zy9
     * @Last Modified time: 2018-08-25 20:44:24
     */

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
 * @Last Modified time: 2018-08-25 20:49:13
 */
// 上传数据到服务器
var uploadToServer = exports.uploadToServer = function uploadToServer(url, data, callback) {
	if (!url) return;

	var params = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
		}
	};

	params = Object.assign(params, data);

	fetch(url, params).then(function (result) {
		return result.text();
	}).then(function (result) {
		return callback(result);
	}).catch(function (error) {
		console.log(error);
	});
};

var getByCookie = exports.getByCookie = function getByCookie(url, data, callback) {
	if (!url) return;

	var params = {
		credentials: 'include' // 加入cookie
	};

	params = Object.assign(params, data);

	fetch(url, params).then(function (result) {
		return result.json();
	}).then(function (result) {
		return callback(result);
	}).catch(function (error) {
		console.log(error);
	});
};

var postByCookie = exports.postByCookie = function postByCookie(url, data, callback) {
	if (!url) return;

	var params = {
		method: 'POST',
		// mode:'no-cors',
		credentials: 'include', // 加入cookie
		headers: {
			'Content-Type': 'application/json; charset=UTF-8'
		}
	};

	params = Object.assign(params, data);

	fetch(url, params).then(function (result) {
		console.log(result);

		return result.text();
	}).then(function (result) {
		console.log(result);
		callback(JSON.parse(result));
	}).catch(function (error) {
		console.log(error);
	});
};

var dispatchInjectToContentScript = exports.dispatchInjectToContentScript = function dispatchInjectToContentScript(detail) {
	return document.getElementById('init_window').dispatchEvent(new CustomEvent('inject_to_content_script', { detail: detail }));
};

var dispatchContentScriptToInject = exports.dispatchContentScriptToInject = function dispatchContentScriptToInject(detail) {
	return document.getElementById('init_window').dispatchEvent(new CustomEvent('content_script_to_inject', { detail: detail }));
};

/***/ })

/******/ });
//# sourceMappingURL=inject.js.map