(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/_css-loader@0.28.11@css-loader/index.js!./src/component/white-space/css/index.css":
/*!***********************************************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader!./src/component/white-space/css/index.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js */ "./node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".white-space {\r\n    margin-top: 8px;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n}", ""]);

// exports


/***/ }),

/***/ "./src/component/white-space/css/index.css":
/*!*************************************************!*\
  !*** ./src/component/white-space/css/index.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/_css-loader@0.28.11@css-loader!./index.css */ "./node_modules/_css-loader@0.28.11@css-loader/index.js!./src/component/white-space/css/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/_style-loader@0.21.0@style-loader/lib/addStyles.js */ "./node_modules/_style-loader@0.21.0@style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/component/white-space/index.js":
/*!********************************************!*\
  !*** ./src/component/white-space/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.4.2@react/index.js");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./css/index.css */ "./src/component/white-space/css/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Author: zy9@github.com/zy410419243
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date: 2018-06-30 15:03:24
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified by: zy9
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-07-03 21:34:37
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var index = function (_Component) {
  _inherits(index, _Component);

  function index(props) {
    _classCallCheck(this, index);

    var _this = _possibleConstructorReturn(this, (index.__proto__ || Object.getPrototypeOf(index)).call(this, props));

    _this.render = function () {
      var _this$props = _this.props,
          clear = _this$props.clear,
          style = _this$props.style;


      return _react2.default.createElement('div', { className: 'white-space', style: Object.assign({ clear: clear ? 'both' : 'none' }, style) });
    };

    _this.state = {};
    return _this;
  }

  return index;
}(_react.Component);

exports.default = index;

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
 * @Last Modified time: 2018-08-25 20:48:36
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
	document.getElementById('init_window').dispatchEvent(new CustomEvent('content_script_to_inject', { detail: detail }));
};

/***/ }),

/***/ "./util/Store.js":
/*!***********************!*\
  !*** ./util/Store.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * @Author: zy9@github.com/zy410419243
 * @Date: 2018-06-25 22:28:14
 * @Last Modified by: zy9
 * @Last Modified time: 2018-07-18 11:47:28
 */
var Store = function Store(name, defaults) {
    _classCallCheck(this, Store);

    _initialiseProps.call(this);

    this.name = name;

    if (defaults !== undefined) {
        for (var key in defaults) {
            if (defaults.hasOwnProperty(key) && this.get(key) === undefined) {
                this.set(key, defaults[key]);
            }
        }
    }
};

var _initialiseProps = function _initialiseProps() {
    var _this = this;

    this.get = function (propsName) {
        var name = 'store.' + _this.name + '.' + propsName;

        if (localStorage.getItem(name) === null) {
            return undefined;
        }

        try {
            return JSON.parse(localStorage.getItem(name));
        } catch (e) {
            return null;
        }
    };

    this.set = function (name, value) {
        if (value === undefined) {
            _this.remove(name);
        } else {
            if (typeof value === 'function') {
                value = null;
            } else {
                try {
                    value = JSON.stringify(value);
                } catch (e) {
                    value = null;
                }
            }

            localStorage.setItem('store.' + _this.name + '.' + name, value);
        }

        return _this;
    };

    this.remove = function (name) {
        localStorage.removeItem('store.' + _this.name + '.' + name);

        return _this;
    };

    this.removeAll = function () {
        var name = 'store.' + _this.name + '.';

        for (var i = localStorage.length - 1; i >= 0; i--) {
            if (localStorage.key(i).substring(0, name.length) === name) {
                localStorage.removeItem(localStorage.key(i));
            }
        }

        return _this;
    };

    this.toObject = function () {
        var values = {},
            key = void 0,
            value = void 0;

        var name = 'store.' + _this.name + '.';

        for (var i = localStorage.length - 1; i >= 0; i--) {
            if (localStorage.key(i).substring(0, name.length) === name) {
                key = localStorage.key(i).substring(name.length);
                value = _this.get(key);
                if (value !== undefined) {
                    values[key] = value;
                }
            }
        }

        return values;
    };

    this.fromObject = function (values, merge) {
        if (merge !== true) {
            _this.removeAll();
        }
        for (var key in values) {
            if (values.hasOwnProperty(key)) {
                _this.set(key, values[key]);
            }
        }

        return _this;
    };
};

exports.default = Store;

/***/ })

}]);
//# sourceMappingURL=1.4eaf7023.js.map