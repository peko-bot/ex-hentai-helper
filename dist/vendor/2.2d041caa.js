(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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

/***/ "./node_modules/_css-loader@0.28.11@css-loader/index.js!./src/modules/Option/css/Option.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader!./src/modules/Option/css/Option.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js */ "./node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Option{}", ""]);

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

/***/ "./src/modules/Option/CheckHomework.js":
/*!*********************************************!*\
  !*** ./src/modules/Option/CheckHomework.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _button = __webpack_require__(/*! antd/lib/button */ "./node_modules/_antd@3.8.2@antd/lib/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _inputNumber = __webpack_require__(/*! antd/lib/input-number */ "./node_modules/_antd@3.8.2@antd/lib/input-number/index.js");

var _inputNumber2 = _interopRequireDefault(_inputNumber);

var _tooltip = __webpack_require__(/*! antd/lib/tooltip */ "./node_modules/_antd@3.8.2@antd/lib/tooltip/index.js");

var _tooltip2 = _interopRequireDefault(_tooltip);

var _table = __webpack_require__(/*! antd/lib/table */ "./node_modules/_antd@3.8.2@antd/lib/table/index.js");

var _table2 = _interopRequireDefault(_table);

var _datePicker = __webpack_require__(/*! antd/lib/date-picker */ "./node_modules/_antd@3.8.2@antd/lib/date-picker/index.js");

var _datePicker2 = _interopRequireDefault(_datePicker);

__webpack_require__(/*! antd/lib/button/style/css */ "./node_modules/_antd@3.8.2@antd/lib/button/style/css.js");

__webpack_require__(/*! antd/lib/input-number/style/css */ "./node_modules/_antd@3.8.2@antd/lib/input-number/style/css.js");

__webpack_require__(/*! antd/lib/tooltip/style/css */ "./node_modules/_antd@3.8.2@antd/lib/tooltip/style/css.js");

__webpack_require__(/*! antd/lib/table/style/css */ "./node_modules/_antd@3.8.2@antd/lib/table/style/css.js");

__webpack_require__(/*! antd/lib/date-picker/style/css */ "./node_modules/_antd@3.8.2@antd/lib/date-picker/style/css.js");

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.4.2@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

__webpack_require__(/*! moment/locale/zh-cn */ "./node_modules/_moment@2.22.2@moment/locale/zh-cn.js");

var _whiteSpace = __webpack_require__(/*! ../../component/white-space */ "./src/component/white-space/index.js");

var _whiteSpace2 = _interopRequireDefault(_whiteSpace);

var _Store = __webpack_require__(/*! ../../../util/Store */ "./util/Store.js");

var _Store2 = _interopRequireDefault(_Store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Author: zy9@github.com/zy410419243
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date: 2018-07-17 21:31:53
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified by: zy9
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-07-26 17:41:50
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var RangePicker = _datePicker2.default.RangePicker;


/**
 * start时是没有chrome的api的，用到localStorage的地方都会报错，
 * 这会让我感觉很多无关紧要的代码白写了，很气，
 * 于是有了以下容错
 * TODO: 这些初始化到background中
*/
var environment = void 0;

if (chrome.extension) {
    environment = chrome.extension.getBackgroundPage();
} else {
    environment = { store: new _Store2.default() };
}
var _environment = environment,
    STORE = _environment.store;

var CheckHomework = function (_Component) {
    _inherits(CheckHomework, _Component);

    function CheckHomework(props) {
        _classCallCheck(this, CheckHomework);

        var _this = _possibleConstructorReturn(this, (CheckHomework.__proto__ || Object.getPrototypeOf(CheckHomework)).call(this, props));

        _this.handleHomework = function () {
            var groupId = _this.state.groupId;


            _this.setState({ loading: true });

            chrome.tabs.query({ active: false }, function (tabs) {
                var tabId = void 0;

                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = tabs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var tab = _step.value;
                        var id = tab.id,
                            url = tab.url;


                        if (tab.url.includes('game')) {
                            tabId = id;

                            break;
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

                var port = chrome.tabs.connect(tabId, { name: 'popup_to_content' });

                port.postMessage({ message: 'check_homework', groupId: groupId });
            });

            // 轮询获得团员id
            var timer = void 0;

            timer = setInterval(function () {
                if (window.memberDatas && window.memberDatas.length > 0) {
                    _this.setState({ dataSource: window.memberDatas, loading: false });

                    clearInterval(timer);
                }
            }, 800);
        };

        _this.handleRangePicker = function (date, dateString) {
            window.checkHomeworkStart = parseInt(new Date(dateString[0]).getTime() / 1000);
            window.checkHomeworkEnd = parseInt(new Date(dateString[1]).getTime() / 1000);
        };

        _this.handleGroupId = function (groupId) {
            return _this.setState({ groupId: groupId });
        };

        _this.render = function () {
            var _this$state = _this.state,
                dataSource = _this$state.dataSource,
                loading = _this$state.loading;


            var table = _react2.default.createElement(_table2.default, { dataSource: dataSource, columns: _this.columns, rowKey: 'id' });

            return _react2.default.createElement(
                'div',
                { className: 'CheckHomework', style: { marginLeft: '1%' } },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        _tooltip2.default,
                        { title: '\u8D77\u6B62\u65F6\u95F4\u90FD\u662F\u5F53\u65E50\u70B9' },
                        _react2.default.createElement(
                            'span',
                            { style: { marginRight: 10 } },
                            '\u5386\u53F2\u65F6\u6BB5\uFF1A'
                        )
                    ),
                    _react2.default.createElement(RangePicker, { onChange: _this.handleRangePicker, placeholder: ['开始时间', '结束时间'], style: { width: 220 } })
                ),
                _react2.default.createElement(_whiteSpace2.default, null),
                _react2.default.createElement(
                    'div',
                    { style: { marginRight: 10, display: 'inline' } },
                    _react2.default.createElement(
                        _tooltip2.default,
                        { title: '\u8FD9\u91CC\u8F93\u5165\u56E2id\uFF0C\u4E0D\u586B\u9ED8\u8BA4\u770B\u81EA\u5DF1\u56E2\u7684' },
                        _react2.default.createElement(
                            'span',
                            { style: { marginRight: 10 } },
                            '\u975E\u672C\u56E2id\uFF1A'
                        ),
                        _react2.default.createElement(_inputNumber2.default, { style: { width: 220 }, onChange: _this.handleGroupId })
                    )
                ),
                _react2.default.createElement(
                    _tooltip2.default,
                    { title: '\u672C\u6218\u672A\u5F00\u59CB\u65F6\uFF0C\u6570\u636E\u4F1A\u6709\u8BEF\u5DEE\u3002\u56E0\u4E3A\u65F6\u95F4\u662F\u4ECE\u5F53\u5929\u65E9\u4E0A\u4E94\u70B9\u5F00\u59CB\u8BA1\u7B97\u8D21\u732E\u7684\uFF0C\u9884\u9009\u671F\u95F4\u56E0\u4E3A\u5F53\u65E5\u8D21\u732E\u5EA6\u6E05\u96F6\u4E0D\u5728\u4E94\u70B9\uFF0C\u6240\u4EE5\u4F1A\u4EA7\u751F\u8BEF\u5DEE\uFF0C\u4E5F\u5C31\u662F\u5F53\u65E5\u8D21\u732E\u8FD9\u5217\u53EF\u4EE5\u4E0D\u770B\uFF0C\u4F46\u603B\u8D21\u732E\u59CB\u7EC8\u90FD\u662F\u51C6\u7684' },
                    _react2.default.createElement(
                        _button2.default,
                        { loading: loading, type: 'primary', onClick: _this.handleHomework },
                        '\u68C0\u67E5\u4F5C\u4E1A'
                    )
                ),
                _react2.default.createElement(_whiteSpace2.default, null),
                dataSource && dataSource.length != 0 && table
            );
        };

        _this.columns = [{
            title: '名字',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: 'id',
            dataIndex: 'id',
            key: 'id'
        }, {
            title: '等级',
            dataIndex: 'level',
            key: 'level'
        }, {
            title: '时段内贡献',
            dataIndex: 'singleDayPoint',
            key: 'singleDayPoint'
        }, {
            title: '累计贡献',
            dataIndex: 'totalPoint',
            key: 'totalPoint'
        }, {
            title: '排名',
            dataIndex: 'rank',
            key: 'rank'
        }, {
            title: '上次登录时间',
            dataIndex: 'last_login',
            key: 'last_login'
        }, {
            title: '最后更新时间',
            dataIndex: 'timeStamp',
            key: 'timeStamp'
        }];


        _this.state = {
            dataSource: [],
            loading: false,
            groupId: ''
        };

        window.checkHomeworkStart = parseInt(new Date((0, _moment2.default)().format('YYYY/MM/DD') + ' 00:00:00').getTime() / 1000);
        window.checkHomeworkEnd = parseInt(new Date((0, _moment2.default)().add(1, 'days').format('YYYY/MM/DD') + '00:00:00').getTime() / 1000);
        return _this;
    }

    return CheckHomework;
}(_react.Component);

exports.default = CheckHomework;

/***/ }),

/***/ "./src/modules/Option/EntryScene.js":
/*!******************************************!*\
  !*** ./src/modules/Option/EntryScene.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _input = __webpack_require__(/*! antd/lib/input */ "./node_modules/_antd@3.8.2@antd/lib/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _inputNumber = __webpack_require__(/*! antd/lib/input-number */ "./node_modules/_antd@3.8.2@antd/lib/input-number/index.js");

var _inputNumber2 = _interopRequireDefault(_inputNumber);

var _switch = __webpack_require__(/*! antd/lib/switch */ "./node_modules/_antd@3.8.2@antd/lib/switch/index.js");

var _switch2 = _interopRequireDefault(_switch);

var _tooltip = __webpack_require__(/*! antd/lib/tooltip */ "./node_modules/_antd@3.8.2@antd/lib/tooltip/index.js");

var _tooltip2 = _interopRequireDefault(_tooltip);

__webpack_require__(/*! antd/lib/input/style/css */ "./node_modules/_antd@3.8.2@antd/lib/input/style/css.js");

__webpack_require__(/*! antd/lib/input-number/style/css */ "./node_modules/_antd@3.8.2@antd/lib/input-number/style/css.js");

__webpack_require__(/*! antd/lib/switch/style/css */ "./node_modules/_antd@3.8.2@antd/lib/switch/style/css.js");

__webpack_require__(/*! antd/lib/tooltip/style/css */ "./node_modules/_antd@3.8.2@antd/lib/tooltip/style/css.js");

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.4.2@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _whiteSpace = __webpack_require__(/*! ../../component/white-space */ "./src/component/white-space/index.js");

var _whiteSpace2 = _interopRequireDefault(_whiteSpace);

var _Store = __webpack_require__(/*! ../../../util/Store */ "./util/Store.js");

var _Store2 = _interopRequireDefault(_Store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Author: zy9@github.com/zy410419243
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date: 2018-07-21 09:53:59
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified by: zy9
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-08-06 22:40:48
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * start时是没有chrome的api的，用到localStorage的地方都会报错，
 * 这会让我感觉很多无关紧要的代码白写了，很气，
 * 于是有了以下容错
 * TODO: 这些初始化到background中
*/
var environment = void 0;

if (chrome.extension) {
    environment = chrome.extension.getBackgroundPage();
} else {
    environment = { store: new _Store2.default() };
}
var _environment = environment,
    STORE = _environment.store;

var EntryScene = function (_Component) {
    _inherits(EntryScene, _Component);

    function EntryScene() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, EntryScene);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EntryScene.__proto__ || Object.getPrototypeOf(EntryScene)).call.apply(_ref, [this].concat(args))), _this), _this.handleApLimit = function (value) {
            return STORE.set('entrySceneApLowerLimit', value);
        }, _this.handleHref = function (e) {
            return STORE.set('sceneHref', e.target.value);
        }, _this.handleSwitchOnChange = function (checked) {
            STORE.set('isListenToKeyBoard', checked);

            chrome.extension && chrome.tabs.query({ active: false }, function (tabs) {
                var tabId = void 0;

                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = tabs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var tab = _step.value;
                        var id = tab.id,
                            url = tab.url;


                        if (tab.url.includes('game')) {
                            tabId = id;

                            break;
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

                var port = chrome.tabs.connect(tabId, { name: 'popup_to_content' });

                port.postMessage({ message: 'listen_to_key_board', status: checked });
            });

            _this.setState({});
        }, _this.handleHasHL = function (checked) {
            return STORE.set('checkHL', checked);
        }, _this.handleRedoSwitchOnChange = function (checked) {
            return STORE.set('isRedoEntryScene', checked);
        }, _this.render = function () {
            return _react2.default.createElement(
                'div',
                { className: 'EntryScene', style: { marginLeft: '1%', marginTop: 10 } },
                _react2.default.createElement(
                    _tooltip2.default,
                    { title: '\u5F00\u542F\u8BE5\u9009\u9879\u65F6\uFF0C\u952E\u76D8\u529F\u80FD\uFF0C\u6BD4\u5982F\u952E\u6309\u4E0B\u53BB\u624D\u4F1A\u5237\u65B0' },
                    _react2.default.createElement(
                        'span',
                        { style: { float: 'left', color: '#666' } },
                        '\u662F\u5426\u76D1\u542C\u952E\u76D8'
                    )
                ),
                _react2.default.createElement(_switch2.default, { onChange: _this.handleSwitchOnChange, defaultChecked: STORE.get('isListenToKeyBoard'), style: { float: 'right', marginRight: '85%' } }),
                _react2.default.createElement(_whiteSpace2.default, { clear: true }),
                _react2.default.createElement(
                    _tooltip2.default,
                    { title: '\u5F00\u542F\u8BE5\u9009\u9879\u65F6\uFF0C\u4F1A\u5728\u7ED3\u7B97\u9875\u81EA\u52A8\u8DF3\u8F6C\u5230\u4E0B\u9762\u7684\u5730\u5740' },
                    _react2.default.createElement(
                        'span',
                        { style: { float: 'left', color: '#666' } },
                        '\u662F\u5426\u81EA\u52A8\u8DF3\u8F6C'
                    )
                ),
                _react2.default.createElement(_switch2.default, { onChange: _this.handleRedoSwitchOnChange, defaultChecked: STORE.get('isRedoEntryScene'), style: { float: 'right', marginRight: '85%' }, disabled: !STORE.get('isListenToKeyBoard') }),
                _react2.default.createElement(_whiteSpace2.default, { clear: true, style: { height: 8 } }),
                _react2.default.createElement(
                    _tooltip2.default,
                    { title: '\uFF08\u5468\u56DE\u65E0HL\u672C\u65F6\uFF0C\u4E0D\u5EFA\u8BAE\u5F00\u542F\u8BE5\u9009\u9879\uFF09\u5F00\u542F\u8BE5\u9009\u9879\u65F6\uFF0C\u5728\u7ED3\u7B97\u9875\u4F1A\u5224\u65AD\u662F\u5426\u51FA\u73B0HL\uFF0C\u5982\u679C\u6709\uFF0C\u5219\u505C\u6B62\u5E76\u5F39\u6846\u63D0\u793A\uFF1B\u5426\u5219\u7EE7\u7EED\u5468\u56DE' },
                    _react2.default.createElement(
                        'span',
                        null,
                        '\u662F\u5426\u68C0\u67E5HL\uFF1A'
                    )
                ),
                _react2.default.createElement(_switch2.default, { onChange: _this.handleHasHL, defaultChecked: STORE.get('checkHL'), style: { float: 'right', marginRight: '85%' }, disabled: !STORE.get('isListenToKeyBoard') }),
                _react2.default.createElement(_whiteSpace2.default, { clear: true }),
                _react2.default.createElement(
                    _tooltip2.default,
                    { title: '\u5F53ap\u5C0F\u4E8E\u8FD9\u4E2A\u503C\u65F6\uFF0C\u4F1A\u5403\u4E00\u4E2A\u5C0F\u7EA2\uFF0C\u9ED8\u8BA4\u4E3A40' },
                    _react2.default.createElement(
                        'span',
                        null,
                        'AP\u4E0B\u9650\uFF1A\xA0\xA0\xA0'
                    )
                ),
                _react2.default.createElement(_inputNumber2.default, { onChange: _this.handleApLimit, defaultValue: STORE.get('entrySceneApLowerLimit'), disabled: !STORE.get('isListenToKeyBoard') }),
                _react2.default.createElement(_whiteSpace2.default, { clear: true }),
                _react2.default.createElement(
                    _tooltip2.default,
                    { title: '\u8FD9\u91CC\u586B\u4E00\u4E2A\u5B8C\u6574\u5730\u5740\uFF0C\u6BD4\u5982http://game.granbluefantasy.jp/#quest/supporter/730571/1\uFF0C\u6309D\u952E\u65F6\u4F1A\u8DF3\u5230\u8FD9\u4E2A\u5730\u5740\u5E76\u81EA\u52A8\u5403\u836F' },
                    _react2.default.createElement(
                        'span',
                        null,
                        '\u8DF3\u8F6C\u5730\u5740\uFF1A'
                    )
                ),
                _react2.default.createElement(_input2.default, { style: { width: 400 }, onChange: _this.handleHref, defaultValue: STORE.get('sceneHref'), disabled: !STORE.get('isListenToKeyBoard') }),
                _react2.default.createElement(_whiteSpace2.default, { clear: true })
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return EntryScene;
}(_react.Component);

exports.default = EntryScene;

/***/ }),

/***/ "./src/modules/Option/MultiBattle.js":
/*!*******************************************!*\
  !*** ./src/modules/Option/MultiBattle.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _switch = __webpack_require__(/*! antd/lib/switch */ "./node_modules/_antd@3.8.2@antd/lib/switch/index.js");

var _switch2 = _interopRequireDefault(_switch);

var _tooltip = __webpack_require__(/*! antd/lib/tooltip */ "./node_modules/_antd@3.8.2@antd/lib/tooltip/index.js");

var _tooltip2 = _interopRequireDefault(_tooltip);

__webpack_require__(/*! antd/lib/switch/style/css */ "./node_modules/_antd@3.8.2@antd/lib/switch/style/css.js");

__webpack_require__(/*! antd/lib/tooltip/style/css */ "./node_modules/_antd@3.8.2@antd/lib/tooltip/style/css.js");

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.4.2@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _whiteSpace = __webpack_require__(/*! ../../component/white-space */ "./src/component/white-space/index.js");

var _whiteSpace2 = _interopRequireDefault(_whiteSpace);

var _Store = __webpack_require__(/*! ../../../util/Store */ "./util/Store.js");

var _Store2 = _interopRequireDefault(_Store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Author: zy9@github.com/zy410419243
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date: 2018-07-03 17:20:19
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified by: zy9
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-07-21 11:05:51
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * start时是没有chrome的api的，用到localStorage的地方都会报错，
 * 这会让我感觉很多无关紧要的代码白写了，很气，
 * 于是有了以下容错
 * TODO: 这些初始化到background中
*/
var environment = void 0;

if (chrome.extension) {
    environment = chrome.extension.getBackgroundPage();
} else {
    environment = { store: new _Store2.default() };
}
var _environment = environment,
    STORE = _environment.store;

var MultiBattle = function (_Component) {
    _inherits(MultiBattle, _Component);

    function MultiBattle(props) {
        _classCallCheck(this, MultiBattle);

        var _this = _possibleConstructorReturn(this, (MultiBattle.__proto__ || Object.getPrototypeOf(MultiBattle)).call(this, props));

        _this.componentDidMount = function () {};

        _this.handleSwitchOnChange = function (name, checked) {
            STORE.set(name, checked);

            // 舔婊模式开启时，令popup失效
            name == 'isMultil' && chrome.browserAction.setPopup({ popup: checked ? '' : 'index.html' });

            _this.setState(_defineProperty({}, name, checked));
        };

        _this.render = function () {
            var _this$state = _this.state,
                isMultil = _this$state.isMultil,
                isListenBoard = _this$state.isListenBoard,
                isListenBp = _this$state.isListenBp,
                isRape = _this$state.isRape;

            /* 上一个选项未开启时，禁用下方所有选项 */

            return _react2.default.createElement(
                'div',
                { className: 'MultiBattle', style: { marginLeft: '1%' } },
                _react2.default.createElement(
                    _tooltip2.default,
                    { title: '\u5F00\u542F\u8BE5\u9009\u9879\u65F6\uFF0C\u70B9\u51FBicon\u5C06\u4E0D\u4F1A\u70B9\u5F00\u9762\u677F\uFF0C\u800C\u4F1A\u7167\u7740\u4E0B\u65B9\u51E0\u4E2A\u9009\u9879\u51B3\u5B9A\u884C\u4E3A\uFF0C\u9ED8\u8BA4\u4E3A\u8BFB\u53D6\u526A\u5207\u677F\u4E2D\u5185\u5BB9\u8BF7\u6C42battle\u4FE1\u606F\uFF0C\u4E0D\u62A5\u9519\u5219\u8FDB\u623F' },
                    _react2.default.createElement(
                        'span',
                        { style: { float: 'left', color: '#666' } },
                        '\u662F\u5426\u5F00\u542F\u8214\u5A4A\u6A21\u5F0F'
                    )
                ),
                _react2.default.createElement(_switch2.default, { onChange: function onChange(checked) {
                        return _this.handleSwitchOnChange('isMultil', checked);
                    }, checked: isMultil, style: { float: 'right', marginRight: '85%' } }),
                _react2.default.createElement(_whiteSpace2.default, { clear: true }),
                _react2.default.createElement(
                    _tooltip2.default,
                    { title: '\u5F00\u542F\u8BE5\u9009\u9879\u65F6\uFF0C\u5F53\u4F60\u7684\u526A\u5207\u677F\u5185\u5BB9\u53D1\u751F\u53D8\u5316\u4E14\u5185\u5BB9\u50CFbattle id\u65F6\uFF0C\u4F1A\u76F4\u63A5\u8FDB\u623F\uFF0C\u800C\u4E0D\u7528\u70B9icon\u3002\u521D\u6B21\u5F00\u542F\u65F6\uFF0C\u4E24\u4E2A\u7A97\u53E3\u90FD\u9700\u8981\u5237\u65B0\u4E0B' },
                    _react2.default.createElement(
                        'span',
                        { style: { float: 'left', color: '#666' } },
                        '\u662F\u5426\u76D1\u89C6\u526A\u5207\u677F'
                    )
                ),
                _react2.default.createElement(_switch2.default, { onChange: function onChange(checked) {
                        return _this.handleSwitchOnChange('isListenBoard', checked);
                    }, checked: isListenBoard, disabled: !isMultil, style: { float: 'right', marginRight: '85%' } }),
                _react2.default.createElement(_whiteSpace2.default, { clear: true })
            );
        };

        _this.state = {
            isMultil: STORE.get('isMultil'), // 是否开启舔婊模式
            isListenBoard: STORE.get('isListenBoard'), // 是否监视剪切板
            isListenBp: STORE.get('isListenBp'), // 是否监视bp
            isRape: STORE.get('isRape') // 是否强行进入
        };
        return _this;
    }

    return MultiBattle;
}(_react.Component);

exports.default = MultiBattle;

/***/ }),

/***/ "./src/modules/Option/MyPageOptions.js":
/*!*********************************************!*\
  !*** ./src/modules/Option/MyPageOptions.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inputNumber = __webpack_require__(/*! antd/lib/input-number */ "./node_modules/_antd@3.8.2@antd/lib/input-number/index.js");

var _inputNumber2 = _interopRequireDefault(_inputNumber);

var _switch = __webpack_require__(/*! antd/lib/switch */ "./node_modules/_antd@3.8.2@antd/lib/switch/index.js");

var _switch2 = _interopRequireDefault(_switch);

var _tooltip = __webpack_require__(/*! antd/lib/tooltip */ "./node_modules/_antd@3.8.2@antd/lib/tooltip/index.js");

var _tooltip2 = _interopRequireDefault(_tooltip);

__webpack_require__(/*! antd/lib/input-number/style/css */ "./node_modules/_antd@3.8.2@antd/lib/input-number/style/css.js");

__webpack_require__(/*! antd/lib/switch/style/css */ "./node_modules/_antd@3.8.2@antd/lib/switch/style/css.js");

__webpack_require__(/*! antd/lib/tooltip/style/css */ "./node_modules/_antd@3.8.2@antd/lib/tooltip/style/css.js");

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.4.2@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _whiteSpace = __webpack_require__(/*! ../../component/white-space */ "./src/component/white-space/index.js");

var _whiteSpace2 = _interopRequireDefault(_whiteSpace);

var _Store = __webpack_require__(/*! ../../../util/Store */ "./util/Store.js");

var _Store2 = _interopRequireDefault(_Store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Author: zy9@github.com/zy410419243
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date: 2018-08-02 12:00:57
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified by: zy9
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-08-06 22:08:24
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * start时是没有chrome的api的，用到localStorage的地方都会报错，
 * 这会让我感觉很多无关紧要的代码白写了，很气，
 * 于是有了以下容错
 * TODO: 这些初始化到background中
*/
var environment = void 0;

if (chrome.extension) {
  environment = chrome.extension.getBackgroundPage();
} else {
  environment = { store: new _Store2.default() };
}
var _environment = environment,
    STORE = _environment.store;

var MyPageOptions = function (_Component) {
  _inherits(MyPageOptions, _Component);

  function MyPageOptions(props) {
    _classCallCheck(this, MyPageOptions);

    var _this = _possibleConstructorReturn(this, (MyPageOptions.__proto__ || Object.getPrototypeOf(MyPageOptions)).call(this, props));

    _this.handleHideSwitch = function (checked) {
      STORE.set('isShowYourWife', checked);

      chrome.extension && chrome.tabs.query({ active: false }, function (tabs) {
        var tabId = void 0;

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = tabs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var tab = _step.value;
            var id = tab.id,
                url = tab.url;


            if (tab.url.includes('game')) {
              tabId = id;

              break;
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

        var port = chrome.tabs.connect(tabId, { name: 'popup_to_content' });

        port.postMessage({ message: 'show_your_wife', status: checked, interval: STORE.get('howLongToShowYourWife') });
      });
    };

    _this.handleTimeInterval = function (value) {
      return STORE.set('howLongToShowYourWife', value);
    };

    _this.render = function () {
      // disabled={ !STORE.get('isShowYourWife') }
      return _react2.default.createElement(
        'div',
        { className: 'MyPageOptions', style: { marginLeft: '1%' } },
        _react2.default.createElement(
          _tooltip2.default,
          { title: '\uFF08\u6682\u65F6\u53EA\u6709\u5F00\u5173\u6709\u6548\uFF09\u5F00\u542F\u8BE5\u9009\u9879\u65F6\uFF0C\u5F53\u4F60\u505C\u5728\u4E3B\u9875\u4E00\u6BB5\u65F6\u95F4\u540E\uFF0C\u65E0\u5173\u9879\u5C06\u4F1A\u88AB\u9690\u85CF\uFF0C\u53EA\u7559\u7ACB\u7ED8\u548C\u80CC\u666F\u3002\u9F20\u6807\u79FB\u5165\u540E\u4F1A\u663E\u793A\u6240\u6709' },
          _react2.default.createElement(
            'span',
            { style: { float: 'left', color: '#666' } },
            '\u9690\u85CF\u4E3B\u9875\u65E0\u5173\u9879'
          )
        ),
        _react2.default.createElement(_switch2.default, { onChange: _this.handleHideSwitch, defaultChecked: STORE.get('isShowYourWife'), style: { float: 'right', marginRight: '85%' } }),
        _react2.default.createElement(_whiteSpace2.default, { clear: true }),
        _react2.default.createElement(
          _tooltip2.default,
          { title: '\u591A\u4E45\u624D\u4F1A\u9690\u85CF\u65E0\u5173\u9879\uFF08\u6682\u65F6\u65E0\u6548\uFF09' },
          _react2.default.createElement(
            'span',
            { style: { float: 'left', color: '#666' } },
            '\u65F6\u95F4\u95F4\u9694\uFF1A'
          )
        ),
        _react2.default.createElement(_inputNumber2.default, { style: { float: 'left', marginLeft: 10, width: 100, marginBottom: 10 }, onChange: _this.handleTimeInterval, defaultValue: STORE.get('howLongToShowYourWife'), disabled: true }),
        _react2.default.createElement(_whiteSpace2.default, { clear: true })
      );
    };

    _this.state = {};
    return _this;
  }

  return MyPageOptions;
}(_react.Component);

exports.default = MyPageOptions;

/***/ }),

/***/ "./src/modules/Option/ScrollOptions.js":
/*!*********************************************!*\
  !*** ./src/modules/Option/ScrollOptions.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _switch = __webpack_require__(/*! antd/lib/switch */ "./node_modules/_antd@3.8.2@antd/lib/switch/index.js");

var _switch2 = _interopRequireDefault(_switch);

var _tooltip = __webpack_require__(/*! antd/lib/tooltip */ "./node_modules/_antd@3.8.2@antd/lib/tooltip/index.js");

var _tooltip2 = _interopRequireDefault(_tooltip);

__webpack_require__(/*! antd/lib/switch/style/css */ "./node_modules/_antd@3.8.2@antd/lib/switch/style/css.js");

__webpack_require__(/*! antd/lib/tooltip/style/css */ "./node_modules/_antd@3.8.2@antd/lib/tooltip/style/css.js");

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.4.2@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _whiteSpace = __webpack_require__(/*! ../../component/white-space */ "./src/component/white-space/index.js");

var _whiteSpace2 = _interopRequireDefault(_whiteSpace);

var _Store = __webpack_require__(/*! ../../../util/Store */ "./util/Store.js");

var _Store2 = _interopRequireDefault(_Store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Author: zy9@github.com/zy410419243
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date: 2018-07-02 16:28:55
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified by: zy9
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-07-18 09:30:28
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * start时是没有chrome的api的，用到localStorage的地方都会报错，
 * 这会让我感觉很多无关紧要的代码白写了，很气，
 * 于是有了以下容错
 * TODO: 这些初始化到background中
*/
var environment = void 0;

if (chrome.extension) {
    environment = chrome.extension.getBackgroundPage();
} else {
    environment = { store: new _Store2.default() };
}
var _environment = environment,
    STORE = _environment.store;

var ScrollOptions = function (_Component) {
    _inherits(ScrollOptions, _Component);

    function ScrollOptions(props) {
        _classCallCheck(this, ScrollOptions);

        var _this = _possibleConstructorReturn(this, (ScrollOptions.__proto__ || Object.getPrototypeOf(ScrollOptions)).call(this, props));

        _this.componentDidMount = function () {};

        _this.handleSwitchOnChange = function (checked) {
            STORE.set('isScrollStyleShow', checked);

            chrome.extension && chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                var port = chrome.tabs.connect(tabs[0].id, { name: 'popup_to_content' });

                port.postMessage({ message: 'scroll_style_status', status: checked });
            });
        };

        _this.render = function () {
            var checked = _this.state.checked;


            return _react2.default.createElement(
                'div',
                { className: 'ScrollOptions' },
                _react2.default.createElement(
                    'div',
                    { style: { marginLeft: '1%' } },
                    _react2.default.createElement(
                        _tooltip2.default,
                        { title: '\u5F00\u542F\u8BE5\u9009\u9879\u65F6\uFF0C\u4F60\u9F20\u6807\u79FB\u5230\u6EDA\u52A8\u6761\u9644\u8FD1\uFF0C\u6EDA\u52A8\u6761\u4F1A\u53D8\u7C97\u4E09\u79D2' },
                        _react2.default.createElement(
                            'span',
                            { style: { float: 'left', color: '#666' } },
                            '\u6EDA\u52A8\u6761\u6837\u5F0F\u53D8\u5316'
                        )
                    ),
                    _react2.default.createElement(_switch2.default, { onChange: _this.handleSwitchOnChange, defaultChecked: checked, style: { float: 'right', marginRight: '85%' } }),
                    _react2.default.createElement(_whiteSpace2.default, { clear: true })
                ),
                _react2.default.createElement(_whiteSpace2.default, { clear: true })
            );
        };

        _this.state = {
            checked: STORE.get('isScrollStyleShow')
        };
        return _this;
    }

    return ScrollOptions;
}(_react.Component);

exports.default = ScrollOptions;

/***/ }),

/***/ "./src/modules/Option/SiderOptions.js":
/*!********************************************!*\
  !*** ./src/modules/Option/SiderOptions.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _switch = __webpack_require__(/*! antd/lib/switch */ "./node_modules/_antd@3.8.2@antd/lib/switch/index.js");

var _switch2 = _interopRequireDefault(_switch);

__webpack_require__(/*! antd/lib/switch/style/css */ "./node_modules/_antd@3.8.2@antd/lib/switch/style/css.js");

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.4.2@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _whiteSpace = __webpack_require__(/*! ../../component/white-space */ "./src/component/white-space/index.js");

var _whiteSpace2 = _interopRequireDefault(_whiteSpace);

var _Store = __webpack_require__(/*! ../../../util/Store */ "./util/Store.js");

var _Store2 = _interopRequireDefault(_Store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Author: zy9@github.com/zy410419243
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date: 2018-06-30 22:56:38
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified by: zy9
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-08-02 12:03:24
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * start时是没有chrome的api的，用到localStorage的地方都会报错，
 * 这会让我感觉很多无关紧要的代码白写了，很气，
 * 于是有了以下容错
 * TODO: 这些初始化到background中
*/
var environment = void 0;

if (chrome.extension) {
    environment = chrome.extension.getBackgroundPage();
} else {
    environment = { store: new _Store2.default() };
}
var _environment = environment,
    STORE = _environment.store;

var SiderOptions = function (_Component) {
    _inherits(SiderOptions, _Component);

    function SiderOptions(props) {
        _classCallCheck(this, SiderOptions);

        var _this = _possibleConstructorReturn(this, (SiderOptions.__proto__ || Object.getPrototypeOf(SiderOptions)).call(this, props));

        _this.componentDidMount = function () {};

        _this.handleCoopraidSwitch = function (checked, name) {
            STORE.set(name, checked);

            chrome.extension && chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                var port = chrome.tabs.connect(tabs[0].id, { name: 'popup_to_content' });

                port.postMessage({ message: 'sider_status', type: name, status: checked });
            });
        };

        _this.render = function () {
            var _this$state = _this.state,
                leftChecked = _this$state.leftChecked,
                rightChecked = _this$state.rightChecked;


            return _react2.default.createElement(
                'div',
                { className: 'SiderOptions' },
                _react2.default.createElement(
                    'div',
                    { style: { marginLeft: '1%' } },
                    _react2.default.createElement(
                        'span',
                        { style: { float: 'left', color: '#666' } },
                        '\u5DE6\u4FA7\u9762\u677F'
                    ),
                    _react2.default.createElement(_switch2.default, { onChange: function onChange(checked) {
                            return _this.handleCoopraidSwitch(checked, 'isLeftSiderShow');
                        }, defaultChecked: leftChecked, style: { float: 'right', marginRight: '85%' } }),
                    _react2.default.createElement('div', { style: { clear: 'both' } })
                ),
                _react2.default.createElement(_whiteSpace2.default, null),
                _react2.default.createElement(
                    'div',
                    { style: { marginLeft: '1%' } },
                    _react2.default.createElement(
                        'span',
                        { style: { float: 'left', color: '#666' } },
                        '\u53F3\u4FA7\u9762\u677F'
                    ),
                    _react2.default.createElement(_switch2.default, { onChange: function onChange(checked) {
                            return _this.handleCoopraidSwitch(checked, 'isRightSiderShow');
                        }, defaultChecked: rightChecked, style: { float: 'right', marginRight: '85%' } }),
                    _react2.default.createElement('div', { style: { clear: 'both' } })
                ),
                _react2.default.createElement(_whiteSpace2.default, null)
            );
        };

        _this.state = {
            leftChecked: STORE.get('isLeftSiderShow'),
            rightChecked: STORE.get('isRightSiderShow')
        };
        return _this;
    }

    return SiderOptions;
}(_react.Component);

exports.default = SiderOptions;

/***/ }),

/***/ "./src/modules/Option/UploadItems.js":
/*!*******************************************!*\
  !*** ./src/modules/Option/UploadItems.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _button = __webpack_require__(/*! antd/lib/button */ "./node_modules/_antd@3.8.2@antd/lib/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _input = __webpack_require__(/*! antd/lib/input */ "./node_modules/_antd@3.8.2@antd/lib/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _notification2 = __webpack_require__(/*! antd/lib/notification */ "./node_modules/_antd@3.8.2@antd/lib/notification/index.js");

var _notification3 = _interopRequireDefault(_notification2);

var _select = __webpack_require__(/*! antd/lib/select */ "./node_modules/_antd@3.8.2@antd/lib/select/index.js");

var _select2 = _interopRequireDefault(_select);

__webpack_require__(/*! antd/lib/button/style/css */ "./node_modules/_antd@3.8.2@antd/lib/button/style/css.js");

__webpack_require__(/*! antd/lib/input/style/css */ "./node_modules/_antd@3.8.2@antd/lib/input/style/css.js");

__webpack_require__(/*! antd/lib/notification/style/css */ "./node_modules/_antd@3.8.2@antd/lib/notification/style/css.js");

__webpack_require__(/*! antd/lib/select/style/css */ "./node_modules/_antd@3.8.2@antd/lib/select/style/css.js");

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.4.2@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _whiteSpace = __webpack_require__(/*! ../../component/white-space */ "./src/component/white-space/index.js");

var _whiteSpace2 = _interopRequireDefault(_whiteSpace);

var _Request = __webpack_require__(/*! ../../../util/Request */ "./util/Request.js");

var Request = _interopRequireWildcard(_Request);

var _Store = __webpack_require__(/*! ../../../util/Store */ "./util/Store.js");

var _Store2 = _interopRequireDefault(_Store);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Author: zy9@github.com/zy410419243
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date: 2018-06-30 15:34:22
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified by: zy9
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-07-21 11:02:37
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Option = _select2.default.Option;

/**
 * start时是没有chrome的api的，用到localStorage的地方都会报错，
 * 这会让我感觉很多无关紧要的代码白写了，很气，
 * 于是有了以下容错
 * TODO: 这些初始化到background中
*/
var environment = void 0;

if (chrome.extension) {
    environment = chrome.extension.getBackgroundPage();
} else {
    environment = { store: new _Store2.default() };
}
var _environment = environment,
    STORE = _environment.store;

// item第二页，红跟豆那页

var article = 'http://game.granbluefantasy.jp/item/article_list_by_filter_mode';
// item第一页，日常素材
var recovery = 'http://game.granbluefantasy.jp/item/recovery_and_evolution_list_by_filter_mode';

var UploadItems = function (_Component) {
    _inherits(UploadItems, _Component);

    function UploadItems(props) {
        _classCallCheck(this, UploadItems);

        var _this = _possibleConstructorReturn(this, (UploadItems.__proto__ || Object.getPrototypeOf(UploadItems)).call(this, props));

        _this.componentDidMount = function () {};

        _this.handleAddress = function (event) {
            return _this.setState({ address: event.target.value });
        };

        _this.handleHeadAddress = function (headAddress) {
            return _this.setState({ headAddress: headAddress });
        };

        _this.handleUpload = function () {
            var _this$state = _this.state,
                headAddress = _this$state.headAddress,
                address = _this$state.address;


            STORE.set('address', address);
            STORE.set('headAddress', headAddress);

            _this.setState({ btnLoading: true });

            var userId = STORE.get('userId');

            if (!userId) {
                _notification3.default.open({
                    message: '非法操作',
                    description: '没获得到userId',
                    duration: 3
                });

                _this.setState({ btnLoading: false });

                return;
            }

            Request.getByCookie(article, {}, function (result) {
                Request.getByCookie(recovery, {}, function (recovery) {
                    recovery = _this.steamRoller(recovery);

                    result = [].concat(_toConsumableArray(result), _toConsumableArray(recovery));

                    var body = 'user_id=' + userId + '&data=' + JSON.stringify(result);

                    Request.uploadToServer('' + headAddress + address + '/Memo/gbf/i_item.do', { body: body }, function (result) {
                        if (result == 'success') {
                            _notification3.default.open({
                                message: '上传成功',
                                description: '',
                                duration: 3
                            });
                        }

                        _this.setState({ btnLoading: false });
                    });
                });
            });
        };

        _this.steamRoller = function (arr) {
            var newArr = [];

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var item = _step.value;

                    Array.isArray(item) ? newArr.push.apply(newArr, _this.steamRoller(item)) : newArr.push(item);
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

            return newArr;
        };

        _this.render = function () {
            var _this$state2 = _this.state,
                address = _this$state2.address,
                headAddress = _this$state2.headAddress,
                btnLoading = _this$state2.btnLoading;


            var selectBefore = _react2.default.createElement(
                _select2.default,
                { defaultValue: headAddress, style: { width: 90 }, onChange: _this.handleHeadAddress },
                _react2.default.createElement(
                    Option,
                    { value: 'http://' },
                    'http://'
                ),
                _react2.default.createElement(
                    Option,
                    { value: 'https://' },
                    'https://'
                ),
                _react2.default.createElement(
                    Option,
                    { value: 'ftp://' },
                    'ftp://'
                )
            );

            return _react2.default.createElement(
                'div',
                { className: 'UploadItems', style: { marginLeft: '1%' } },
                _react2.default.createElement(
                    'span',
                    null,
                    '\u4E0A\u4F20\u5730\u5740\uFF1A'
                ),
                _react2.default.createElement(_input2.default, { addonBefore: selectBefore, style: { width: '20%' }, onChange: _this.handleAddress, value: address }),
                _react2.default.createElement(
                    _button2.default,
                    { type: 'primary', loading: btnLoading, onClick: _this.handleUpload, style: { marginLeft: '2%', width: '15%' } },
                    '\u4E0A\u4F20\u7D20\u6750'
                ),
                _react2.default.createElement(_whiteSpace2.default, null)
            );
        };

        _this.state = {
            address: STORE.get('address'),
            headAddress: STORE.get('headAddress'),
            btnLoading: false
        };
        return _this;
    }

    // 数组扁平化


    return UploadItems;
}(_react.Component);

exports.default = UploadItems;

/***/ }),

/***/ "./src/modules/Option/css/Option.css":
/*!*******************************************!*\
  !*** ./src/modules/Option/css/Option.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/_css-loader@0.28.11@css-loader!./Option.css */ "./node_modules/_css-loader@0.28.11@css-loader/index.js!./src/modules/Option/css/Option.css");

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

/***/ "./src/modules/Option/index.js":
/*!*************************************!*\
  !*** ./src/modules/Option/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _menu = __webpack_require__(/*! antd/lib/menu */ "./node_modules/_antd@3.8.2@antd/lib/menu/index.js");

var _menu2 = _interopRequireDefault(_menu);

var _icon = __webpack_require__(/*! antd/lib/icon */ "./node_modules/_antd@3.8.2@antd/lib/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _breadcrumb = __webpack_require__(/*! antd/lib/breadcrumb */ "./node_modules/_antd@3.8.2@antd/lib/breadcrumb/index.js");

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _layout = __webpack_require__(/*! antd/lib/layout */ "./node_modules/_antd@3.8.2@antd/lib/layout/index.js");

var _layout2 = _interopRequireDefault(_layout);

__webpack_require__(/*! antd/lib/menu/style/css */ "./node_modules/_antd@3.8.2@antd/lib/menu/style/css.js");

__webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/_antd@3.8.2@antd/lib/icon/style/css.js");

__webpack_require__(/*! antd/lib/breadcrumb/style/css */ "./node_modules/_antd@3.8.2@antd/lib/breadcrumb/style/css.js");

__webpack_require__(/*! antd/lib/layout/style/css */ "./node_modules/_antd@3.8.2@antd/lib/layout/style/css.js");

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.4.2@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _UploadItems = __webpack_require__(/*! ./UploadItems */ "./src/modules/Option/UploadItems.js");

var _UploadItems2 = _interopRequireDefault(_UploadItems);

var _SiderOptions = __webpack_require__(/*! ./SiderOptions */ "./src/modules/Option/SiderOptions.js");

var _SiderOptions2 = _interopRequireDefault(_SiderOptions);

var _ScrollOptions = __webpack_require__(/*! ./ScrollOptions */ "./src/modules/Option/ScrollOptions.js");

var _ScrollOptions2 = _interopRequireDefault(_ScrollOptions);

var _MultiBattle = __webpack_require__(/*! ./MultiBattle */ "./src/modules/Option/MultiBattle.js");

var _MultiBattle2 = _interopRequireDefault(_MultiBattle);

var _CheckHomework = __webpack_require__(/*! ./CheckHomework */ "./src/modules/Option/CheckHomework.js");

var _CheckHomework2 = _interopRequireDefault(_CheckHomework);

var _EntryScene = __webpack_require__(/*! ./EntryScene */ "./src/modules/Option/EntryScene.js");

var _EntryScene2 = _interopRequireDefault(_EntryScene);

var _MyPageOptions = __webpack_require__(/*! ./MyPageOptions */ "./src/modules/Option/MyPageOptions.js");

var _MyPageOptions2 = _interopRequireDefault(_MyPageOptions);

__webpack_require__(/*! ./css/Option.css */ "./src/modules/Option/css/Option.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Author: zy9@github.com/zy410419243
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date: 2018-07-02 21:36:02
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified by: zy9
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-08-03 21:14:36
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Content = _layout2.default.Content,
    Footer = _layout2.default.Footer,
    Sider = _layout2.default.Sider;
// const SubMenu = Menu.SubMenu;

// import GachaOptions from './GachaOptions'

var Option = function (_Component) {
    _inherits(Option, _Component);

    function Option(props) {
        _classCallCheck(this, Option);

        var _this = _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));

        _this.componentDidMount = function () {};

        _this.handleMenuItem = function (menu) {
            var item = menu.item,
                key = menu.key,
                keyPath = menu.keyPath;


            _this.setState({ key: key });
        };

        _this.render = function () {
            var _this$state = _this.state,
                collapsed = _this$state.collapsed,
                key = _this$state.key;


            var globalStyle = _react2.default.createElement(
                Content,
                { style: { margin: '0 16px' } },
                _react2.default.createElement(
                    _breadcrumb2.default,
                    { style: { margin: '16px 0' } },
                    _react2.default.createElement(
                        _breadcrumb2.default.Item,
                        null,
                        '\u901A\u7528\u8BBE\u7F6E'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { style: { padding: 24, background: '#fff', minHeight: 360 } },
                    _react2.default.createElement(_SiderOptions2.default, null),
                    _react2.default.createElement(_ScrollOptions2.default, null),
                    _react2.default.createElement(_MyPageOptions2.default, null),
                    _react2.default.createElement(_CheckHomework2.default, null)
                )
            );

            var multiBattle = _react2.default.createElement(
                Content,
                { style: { margin: '0 16px' } },
                _react2.default.createElement(
                    _breadcrumb2.default,
                    { style: { margin: '16px 0' } },
                    _react2.default.createElement(
                        _breadcrumb2.default.Item,
                        null,
                        '\u6218\u6597\u76F8\u5173'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { style: { padding: 24, background: '#fff', minHeight: 360 } },
                    _react2.default.createElement(_MultiBattle2.default, null),
                    _react2.default.createElement(_EntryScene2.default, null)
                )
            );

            var uploadItems = _react2.default.createElement(
                Content,
                { style: { margin: '0 16px' } },
                _react2.default.createElement(
                    _breadcrumb2.default,
                    { style: { margin: '16px 0' } },
                    _react2.default.createElement(
                        _breadcrumb2.default.Item,
                        null,
                        '\u8BB0\u5F55\u4E0A\u4F20'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { style: { padding: 24, background: '#fff', minHeight: 360 } },
                    _react2.default.createElement(_UploadItems2.default, null)
                )
            );

            return _react2.default.createElement(
                _layout2.default,
                { style: { minHeight: '100vh' } },
                _react2.default.createElement(
                    Sider,
                    { collapsible: true },
                    _react2.default.createElement('div', { className: 'logo' }),
                    _react2.default.createElement(
                        _menu2.default,
                        { theme: 'dark', defaultSelectedKeys: [key], mode: 'inline' },
                        menuItems.map(function (item) {
                            var key = item.key,
                                type = item.type,
                                text = item.text;


                            return _react2.default.createElement(
                                _menu2.default.Item,
                                { key: key, onClick: _this.handleMenuItem },
                                _react2.default.createElement(_icon2.default, { type: type }),
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    text
                                )
                            );
                        })
                    )
                ),
                _react2.default.createElement(
                    _layout2.default,
                    null,
                    key == 0 && globalStyle,
                    key == 1 && multiBattle,
                    key == 2 && uploadItems,
                    _react2.default.createElement(
                        Footer,
                        { style: { textAlign: 'center' } },
                        _react2.default.createElement(
                            'div',
                            null,
                            '\u8D2B\u7A77\u4F7F\u6211\u4EEC\u76F8\u9047\uFF0C\u4F46\u540E\u6765\uFF0C\u4F60\u5374\u53D1\u51FA\u4E86\u6BCD\u732A\u7684\u58F0\u97F3\u3002\u800C\u6211\uFF0C\u53EA\u60F3\u4E3A\u4F60\u8C79\u8DF3\u4E00\u66F2\uFF0C\u5982\u82B1\u51C0\u571F...'
                        ),
                        _react2.default.createElement(
                            'div',
                            null,
                            'Poverty makes us meet, but later, only you come out of the closet. But for me, I just want to marry to you...'
                        )
                    )
                )
            );
        };

        _this.state = {
            key: '1'
        };
        return _this;
    }

    return Option;
}(_react.Component);

exports.default = Option;


var menuItems = [{
    key: 0,
    type: 'desktop',
    text: '通用设置'
}, {
    key: 1,
    type: 'team',
    text: '战斗相关'
}, {
    key: 2,
    type: 'upload',
    text: '记录上传'
}];

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
//# sourceMappingURL=2.2d041caa.js.map