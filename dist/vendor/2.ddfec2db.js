(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/_css-loader@0.28.11@css-loader/index.js!./src/modules/Popup/css/CheckCharacters.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader!./src/modules/Popup/css/CheckCharacters.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js */ "./node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".CheckCharacters{}", ""]);

// exports


/***/ }),

/***/ "./node_modules/_css-loader@0.28.11@css-loader/index.js!./src/modules/Popup/css/CoopraidSearch.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader!./src/modules/Popup/css/CoopraidSearch.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js */ "./node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".CoopraidSearch{}", ""]);

// exports


/***/ }),

/***/ "./node_modules/_css-loader@0.28.11@css-loader/index.js!./src/modules/Popup/css/index.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader!./src/modules/Popup/css/index.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js */ "./node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Popup {\r\n    width: 430px;\r\n    height: 460px;\r\n    text-align: center;\r\n    padding: 8px;\r\n    background: #B0E0E6;\r\n    font-size: 14px;\r\n}", ""]);

// exports


/***/ }),

/***/ "./src/modules/Popup/CheckBlackList.js":
/*!*********************************************!*\
  !*** ./src/modules/Popup/CheckBlackList.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _button = __webpack_require__(/*! antd/lib/button */ "./node_modules/_antd@3.8.2@antd/lib/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _notification2 = __webpack_require__(/*! antd/lib/notification */ "./node_modules/_antd@3.8.2@antd/lib/notification/index.js");

var _notification3 = _interopRequireDefault(_notification2);

var _table = __webpack_require__(/*! antd/lib/table */ "./node_modules/_antd@3.8.2@antd/lib/table/index.js");

var _table2 = _interopRequireDefault(_table);

__webpack_require__(/*! antd/lib/button/style/css */ "./node_modules/_antd@3.8.2@antd/lib/button/style/css.js");

__webpack_require__(/*! antd/lib/notification/style/css */ "./node_modules/_antd@3.8.2@antd/lib/notification/style/css.js");

__webpack_require__(/*! antd/lib/table/style/css */ "./node_modules/_antd@3.8.2@antd/lib/table/style/css.js");

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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date: 2018-07-01 10:39:37
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified by: zy9
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-07-18 12:07:28
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
    environment = { store: new _Store2.default('options') };
}
var _environment = environment,
    STORE = _environment.store;

var CheckBlackList = function (_Component) {
    _inherits(CheckBlackList, _Component);

    function CheckBlackList(props) {
        _classCallCheck(this, CheckBlackList);

        var _this = _possibleConstructorReturn(this, (CheckBlackList.__proto__ || Object.getPrototypeOf(CheckBlackList)).call(this, props));

        _this.componentDidMount = function () {
            // 不在人员页面时，检查功能禁用
            chrome.extension && chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                var port = chrome.tabs.connect(tabs[0].id, { name: 'popup_to_content' });

                port.postMessage({ message: 'isCharacterPage' });

                port.onMessage.addListener(function (response) {
                    var flag = response.flag;


                    _this.setState({ disabled: !flag });
                });
            });
        };

        _this.handleExportBlackList = function () {
            var data = JSON.stringify(STORE.get('blackList'));

            // 下载json文件
            var vLink = document.createElement('a'),
                vBlob = new Blob([data], { type: 'octet/stream' }),
                vName = 'black_list.json',
                vUrl = window.URL.createObjectURL(vBlob);

            vLink.setAttribute('href', vUrl);
            vLink.setAttribute('download', vName);

            vLink.click();
        };

        _this.handleCheckBlackList = function () {
            chrome.extension && chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                _this.setState({ checkLoading: true });

                var port = chrome.tabs.connect(tabs[0].id, { name: 'popup_to_content' });

                port.postMessage({ message: 'checkBlackList' });

                port.onMessage.addListener(function (response) {
                    var datas = response.datas;


                    var targetUsers = [];

                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = datas[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var item = _step.value;
                            var nickName = item.nickName,
                                userId = item.userId;
                            var _iteratorNormalCompletion2 = true;
                            var _didIteratorError2 = false;
                            var _iteratorError2 = undefined;

                            try {

                                for (var _iterator2 = STORE.get('blackList')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                    var jtem = _step2.value;
                                    var id = jtem.id,
                                        description = jtem.description;


                                    if (userId == id) {
                                        targetUsers.push({ id: id, nickName: nickName, description: description });
                                    }
                                }
                            } catch (err) {
                                _didIteratorError2 = true;
                                _iteratorError2 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                        _iterator2.return();
                                    }
                                } finally {
                                    if (_didIteratorError2) {
                                        throw _iteratorError2;
                                    }
                                }
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

                    var haveTarget = _react2.default.createElement(_table2.default, { scroll: { y: 280 }, columns: columns, dataSource: targetUsers, pagination: false, rowKey: 'id' });

                    _notification3.default.open({
                        message: targetUsers.length ? '有目标人物' : '无目标人物',
                        description: targetUsers.length ? haveTarget : '\u4F60\u548C\u53E6' + datas.length + '\u4E2A\u4EBA\u7684\u5173\u7CFB\u5C1A\u672A\u53D1\u751F\uFF0C\u53EF\u80FD\u6709\u65B0\u7684\u57FA\u4F1A\u3002\u54A6\uFF1F\u4E3A\u4EC0\u4E48\u4F1A\u591A\u4E86\u4E00\u4E2A\u4EBA\uFF1F',
                        duration: null
                    });

                    _this.setState({ checkLoading: false });
                });
            });
        };

        _this.render = function () {
            var _this$state = _this.state,
                exportLoading = _this$state.exportLoading,
                checkLoading = _this$state.checkLoading,
                disabled = _this$state.disabled;


            return _react2.default.createElement(
                'div',
                { className: 'CheckBlackList' },
                _react2.default.createElement(
                    _button2.default,
                    { type: 'primary', loading: exportLoading, onClick: _this.handleExportBlackList, style: { width: '90%' } },
                    '\u4E0B\u8F7D\u9ED1\u540D\u5355'
                ),
                _react2.default.createElement(_whiteSpace2.default, null),
                _react2.default.createElement(
                    _button2.default,
                    { type: 'primary', loading: checkLoading, disabled: disabled, onClick: _this.handleCheckBlackList, style: { width: '90%' } },
                    '\u68C0\u67E5\u9ED1\u540D\u5355'
                ),
                _react2.default.createElement(_whiteSpace2.default, null)
            );
        };

        _this.state = {
            exportLoading: false,
            checkLoading: false,
            disabled: false
        };
        return _this;
    }

    return CheckBlackList;
}(_react.Component);

exports.default = CheckBlackList;


var columns = [{
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    align: 'center',
    width: 60
}, {
    title: '姓名',
    dataIndex: 'nickName',
    key: 'nickName',
    align: 'center',
    width: 100
}, {
    title: '描述',
    dataIndex: 'description',
    key: 'description',
    align: 'center'
}];

/***/ }),

/***/ "./src/modules/Popup/CheckCharacters.js":
/*!**********************************************!*\
  !*** ./src/modules/Popup/CheckCharacters.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _button = __webpack_require__(/*! antd/lib/button */ "./node_modules/_antd@3.8.2@antd/lib/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _notification2 = __webpack_require__(/*! antd/lib/notification */ "./node_modules/_antd@3.8.2@antd/lib/notification/index.js");

var _notification3 = _interopRequireDefault(_notification2);

var _table = __webpack_require__(/*! antd/lib/table */ "./node_modules/_antd@3.8.2@antd/lib/table/index.js");

var _table2 = _interopRequireDefault(_table);

__webpack_require__(/*! antd/lib/button/style/css */ "./node_modules/_antd@3.8.2@antd/lib/button/style/css.js");

__webpack_require__(/*! antd/lib/notification/style/css */ "./node_modules/_antd@3.8.2@antd/lib/notification/style/css.js");

__webpack_require__(/*! antd/lib/table/style/css */ "./node_modules/_antd@3.8.2@antd/lib/table/style/css.js");

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.4.2@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _whiteSpace = __webpack_require__(/*! ../../component/white-space */ "./src/component/white-space/index.js");

var _whiteSpace2 = _interopRequireDefault(_whiteSpace);

var _Request = __webpack_require__(/*! ../../../util/Request */ "./util/Request.js");

__webpack_require__(/*! ./css/CheckCharacters.css */ "./src/modules/Popup/css/CheckCharacters.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Author: zy9@github.com/zy410419243
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date: 2018-06-30 15:03:11
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified by: zy9
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-07-28 07:57:54
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var profile = 'http://game.granbluefantasy.jp/profile/content/index/';

var CheckCharacters = function (_Component) {
    _inherits(CheckCharacters, _Component);

    function CheckCharacters(props) {
        _classCallCheck(this, CheckCharacters);

        var _this = _possibleConstructorReturn(this, (CheckCharacters.__proto__ || Object.getPrototypeOf(CheckCharacters)).call(this, props));

        _this.componentDidMount = function () {
            // 不在人员页面时，检查功能禁用
            chrome.extension && chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                var port = chrome.tabs.connect(tabs[0].id, { name: 'popup_to_content' });

                port.postMessage({ message: 'isCharacterPage' });

                port.onMessage.addListener(function (response) {
                    var flag = response.flag;


                    _this.setState({ disabled: !flag });
                });
            });
        };

        _this.handleCheckUbCharacters = function () {
            var disabled = _this.state.disabled;


            if (disabled) {
                return;
            }
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                var port = chrome.tabs.connect(tabs[0].id, { name: 'popup_to_content' });

                _this.setState({ checkUbCharactersBtnLoading: true });

                port.postMessage({ message: 'check_ub_characters' });

                port.onMessage.addListener(function (response) {
                    var datas = response.datas;
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {

                        for (var _iterator = datas[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var item = _step.value;
                            var _item$userId = item.userId,
                                userId = _item$userId === undefined ? 1 : _item$userId;


                            item.url = profile + userId;
                            item.hasCharacter = '';
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

                    _this.recursionRequest(datas, 0, function (result) {
                        // 这段判断天人图片太僵硬了，得用正则
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = result[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var _item = _step2.value;
                                var data = _item.data;

                                var splitStr = 'http%3A%2F%2Fgame-a.granbluefantasy.jp%2Fassets%2Fimg_light%2Fsp%2Fassets%2Fnpc%2Fquest';
                                var characterList = [];

                                var _iteratorNormalCompletion3 = true;
                                var _didIteratorError3 = false;
                                var _iteratorError3 = undefined;

                                try {
                                    for (var _iterator3 = data.split(splitStr)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                        var jtem = _step3.value;
                                        var _iteratorNormalCompletion4 = true;
                                        var _didIteratorError4 = false;
                                        var _iteratorError4 = undefined;

                                        try {

                                            for (var _iterator4 = characterImgs[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                                var ktem = _step4.value;
                                                var key = ktem.key,
                                                    url = ktem.url;


                                                if (jtem.includes(url)) {
                                                    characterList.push(key);
                                                }
                                            }
                                        } catch (err) {
                                            _didIteratorError4 = true;
                                            _iteratorError4 = err;
                                        } finally {
                                            try {
                                                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                                    _iterator4.return();
                                                }
                                            } finally {
                                                if (_didIteratorError4) {
                                                    throw _iteratorError4;
                                                }
                                            }
                                        }
                                    }

                                    // 去重
                                } catch (err) {
                                    _didIteratorError3 = true;
                                    _iteratorError3 = err;
                                } finally {
                                    try {
                                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                            _iterator3.return();
                                        }
                                    } finally {
                                        if (_didIteratorError3) {
                                            throw _iteratorError3;
                                        }
                                    }
                                }

                                _item.hasCharacter = Array.from(new Set(characterList)).toString();
                            }

                            // 生成气泡节点
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                    _iterator2.return();
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }

                        var popup = _react2.default.createElement(_table2.default, { scroll: { y: 280 }, columns: columns, dataSource: result, pagination: false, rowKey: 'id' });

                        _notification3.default.open({
                            message: '红茶已泡好，跟谁喝自便，但请注意卫生',
                            description: popup,
                            duration: null
                        });

                        _this.setState({ checkUbCharactersBtnLoading: false });
                    });
                });
            });
        };

        _this.recursionRequest = function (datas, index, callback) {
            if (index >= datas.length) {
                callback(datas);

                return;
            }

            var item = datas[index];
            var url = item.url;


            (0, _Request.getByCookie)(url, {}, function (result) {
                var _result$data = result.data,
                    data = _result$data === undefined ? '' : _result$data;


                item.data = decodeURI(data);

                _this.recursionRequest(datas, ++index, callback);
            });
        };

        _this.render = function () {
            var _this$state = _this.state,
                checkUbCharactersBtnLoading = _this$state.checkUbCharactersBtnLoading,
                disabled = _this$state.disabled;


            return _react2.default.createElement(
                'div',
                { className: 'CheckCharacters' },
                _react2.default.createElement(
                    _button2.default,
                    { type: 'primary', loading: checkUbCharactersBtnLoading, disabled: disabled, onClick: _this.handleCheckUbCharacters, style: { width: '90%' } },
                    '\u4E25\u683C\u68C0\u67E5\u9A91\u7A7A\u58EB\u961F\u53CB\u662F\u5426\u5931\u683C'
                ),
                _react2.default.createElement(_whiteSpace2.default, null)
            );
        };

        _this.state = {
            checkUbCharactersBtnLoading: false,
            disabled: false
        };
        return _this;
    }

    // TODO: 需要通过/profile/npc/[data-id]/[user-id]获得角色信息而不是图片


    // 递归请求队友人物页数据


    return CheckCharacters;
}(_react.Component);

// 天人图片


exports.default = CheckCharacters;
var characterImgs = [{ key: 1, name: '', url: '3040030000' }, { key: 2, name: '', url: '3040031000' }, { key: 3, name: '', url: '3040032000' }, { key: 4, name: '', url: '3040033000' }, { key: 5, name: '', url: '3040034000' }, { key: 6, name: '', url: '3040035000' }, { key: 7, name: '', url: '3040036000' }, { key: 7, name: '', url: '3710074000' }, { key: 8, name: '', url: '3040037000' }, { key: 9, name: '', url: '3040038000' }, { key: 10, name: '', url: '3040039000' }];

var columns = [{
    title: '姓名',
    dataIndex: 'nickName',
    key: 'nickName'
}, {
    title: '年龄',
    dataIndex: 'userRank',
    key: 'userRank'
}, {
    title: '天人',
    dataIndex: 'hasCharacter',
    key: 'hasCharacter'
}];

/***/ }),

/***/ "./src/modules/Popup/CoopraidSearch.js":
/*!*********************************************!*\
  !*** ./src/modules/Popup/CoopraidSearch.js ***!
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

var _input = __webpack_require__(/*! antd/lib/input */ "./node_modules/_antd@3.8.2@antd/lib/input/index.js");

var _input2 = _interopRequireDefault(_input);

__webpack_require__(/*! antd/lib/switch/style/css */ "./node_modules/_antd@3.8.2@antd/lib/switch/style/css.js");

__webpack_require__(/*! antd/lib/tooltip/style/css */ "./node_modules/_antd@3.8.2@antd/lib/tooltip/style/css.js");

__webpack_require__(/*! antd/lib/input/style/css */ "./node_modules/_antd@3.8.2@antd/lib/input/style/css.js");

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.4.2@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _whiteSpace = __webpack_require__(/*! ../../component/white-space */ "./src/component/white-space/index.js");

var _whiteSpace2 = _interopRequireDefault(_whiteSpace);

var _Store = __webpack_require__(/*! ../../../util/Store */ "./util/Store.js");

var _Store2 = _interopRequireDefault(_Store);

__webpack_require__(/*! ./css/CoopraidSearch.css */ "./src/modules/Popup/css/CoopraidSearch.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Author: zy9@github.com/zy410419243
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date: 2018-06-30 15:11:32
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified by: zy9
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-07-18 11:30:59
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
    environment = { store: new _Store2.default('options') };
}
var _environment = environment,
    STORE = _environment.store;

var CoopraidSearch = function (_Component) {
    _inherits(CoopraidSearch, _Component);

    function CoopraidSearch(props) {
        _classCallCheck(this, CoopraidSearch);

        var _this = _possibleConstructorReturn(this, (CoopraidSearch.__proto__ || Object.getPrototypeOf(CoopraidSearch)).call(this, props));

        _initialiseProps.call(_this);

        var coopraidSearchValue = STORE.get('search') || '';

        _this.state = {
            coopraidSearchValue: coopraidSearchValue,
            coopraidSwitchChecked: !!coopraidSearchValue
        };

        !!coopraidSearchValue && _this.handleSearch();
        return _this;
    }

    return CoopraidSearch;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.componentDidMount = function () {};

    this.handleSearch = function () {
        var coopraidSearchValue = _this2.state.coopraidSearchValue;


        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            var port = chrome.tabs.connect(tabs[0].id, { name: 'popup_to_content' });

            STORE.set('search', coopraidSearchValue);

            port.postMessage({ message: 'open_coopraid_search', search: coopraidSearchValue });
        });
    };

    this.handleCoopraidSearch = function (event) {
        return _this2.setState({ coopraidSearchValue: event.target.value });
    };

    this.handleCoopraidSwitch = function (checked) {
        if (checked) {
            _this2.handleSearch();
        } else {
            STORE.remove('search');
            _this2.setState({ coopraidSearchValue: '' });
        }

        _this2.setState({ coopraidSwitchChecked: checked });
    };

    this.render = function () {
        var _state = _this2.state,
            coopraidSearchValue = _state.coopraidSearchValue,
            coopraidSwitchChecked = _state.coopraidSwitchChecked;


        return _react2.default.createElement(
            'div',
            { className: 'CoopraidSearch' },
            _react2.default.createElement(_input2.default, { style: { width: '90%' }, onChange: _this2.handleCoopraidSearch, value: coopraidSearchValue, placeholder: '\u8FD9\u91CC\u586B\u623F\u95F4\u63CF\u8FF0' }),
            _react2.default.createElement(_whiteSpace2.default, null),
            _react2.default.createElement(
                'div',
                { style: { marginLeft: '6%' } },
                _react2.default.createElement(
                    _tooltip2.default,
                    { title: '\u770B\u89C1\u4E0A\u9762\u7684\u6587\u672C\u6846\u4E86\u4E48\uFF0C\u586B\u4E86\u8FD9\u4E2A\u4F60\u624D\u80FD\u5F00\u542F\u641C\u7D22' },
                    _react2.default.createElement(
                        'span',
                        { style: { float: 'left', color: '#666' } },
                        '\u662F\u5426\u5F00\u542F\u5171\u6597\u641C\u7D22'
                    )
                ),
                _react2.default.createElement(_switch2.default, { disabled: !coopraidSearchValue, onChange: _this2.handleCoopraidSwitch, checked: coopraidSwitchChecked, style: { float: 'right', marginRight: '6%' } }),
                _react2.default.createElement('div', { style: { clear: 'both' } })
            ),
            _react2.default.createElement(_whiteSpace2.default, null)
        );
    };
};

exports.default = CoopraidSearch;

/***/ }),

/***/ "./src/modules/Popup/GachaOptions.js":
/*!*******************************************!*\
  !*** ./src/modules/Popup/GachaOptions.js ***!
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Author: zy9@github.com/zy410419243
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date: 2018-07-13 19:35:55
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified by: zy9
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-07-18 09:30:50
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

var GachaOptions = function (_Component) {
    _inherits(GachaOptions, _Component);

    function GachaOptions(props) {
        _classCallCheck(this, GachaOptions);

        var _this = _possibleConstructorReturn(this, (GachaOptions.__proto__ || Object.getPrototypeOf(GachaOptions)).call(this, props));

        _this.handleSwitchOnChange = function (checked) {
            STORE.set('isEunuch', checked);

            if (chrome.extension && checked) {
                chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                    var port = chrome.tabs.connect(tabs[0].id, { name: 'popup_to_content' });

                    port.postMessage({ message: 'to_be_a_eunuch', status: checked });
                });

                _this.setState({ title: '这就是我想要的生活（便乘' });
            }

            if (chrome.extension && !checked) {
                chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                    var port = chrome.tabs.connect(tabs[0].id, { name: 'popup_to_content' });

                    port.postMessage({ message: 'to_be_a_gbfer', status: checked });
                });

                _this.setState({ title: '开启该选项时，你将成为穷空士' });
            }

            _this.setState({ checked: checked });
        };

        _this.render = function () {
            var _this$state = _this.state,
                checked = _this$state.checked,
                title = _this$state.title;


            return _react2.default.createElement(
                'div',
                { className: 'GachaOptions' },
                _react2.default.createElement(
                    'div',
                    { style: { marginLeft: '6%' } },
                    _react2.default.createElement(
                        _tooltip2.default,
                        { title: title },
                        _react2.default.createElement(
                            'span',
                            { style: { float: 'left', color: '#666' } },
                            '\u662F\u5426\u7CBE\u795E\u9609\u5272\u9A91\u7A7A\u58EB'
                        )
                    ),
                    _react2.default.createElement(_switch2.default, { onChange: _this.handleSwitchOnChange, defaultChecked: checked, disabled: checked, style: { float: 'right', marginRight: '6%' } }),
                    _react2.default.createElement(_whiteSpace2.default, { clear: true })
                ),
                _react2.default.createElement(_whiteSpace2.default, { clear: true })
            );
        };

        _this.state = {
            checked: STORE.get('isEunuch'),
            title: '开启该选项时，你将成为穷空士'
        };
        return _this;
    }

    return GachaOptions;
}(_react.Component);

exports.default = GachaOptions;

/***/ }),

/***/ "./src/modules/Popup/css/CheckCharacters.css":
/*!***************************************************!*\
  !*** ./src/modules/Popup/css/CheckCharacters.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/_css-loader@0.28.11@css-loader!./CheckCharacters.css */ "./node_modules/_css-loader@0.28.11@css-loader/index.js!./src/modules/Popup/css/CheckCharacters.css");

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

/***/ "./src/modules/Popup/css/CoopraidSearch.css":
/*!**************************************************!*\
  !*** ./src/modules/Popup/css/CoopraidSearch.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/_css-loader@0.28.11@css-loader!./CoopraidSearch.css */ "./node_modules/_css-loader@0.28.11@css-loader/index.js!./src/modules/Popup/css/CoopraidSearch.css");

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

/***/ "./src/modules/Popup/css/index.css":
/*!*****************************************!*\
  !*** ./src/modules/Popup/css/index.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/_css-loader@0.28.11@css-loader!./index.css */ "./node_modules/_css-loader@0.28.11@css-loader/index.js!./src/modules/Popup/css/index.css");

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

/***/ "./src/modules/Popup/index.js":
/*!************************************!*\
  !*** ./src/modules/Popup/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.4.2@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _CoopraidSearch = __webpack_require__(/*! ./CoopraidSearch */ "./src/modules/Popup/CoopraidSearch.js");

var _CoopraidSearch2 = _interopRequireDefault(_CoopraidSearch);

var _CheckCharacters = __webpack_require__(/*! ./CheckCharacters */ "./src/modules/Popup/CheckCharacters.js");

var _CheckCharacters2 = _interopRequireDefault(_CheckCharacters);

var _CheckBlackList = __webpack_require__(/*! ./CheckBlackList */ "./src/modules/Popup/CheckBlackList.js");

var _CheckBlackList2 = _interopRequireDefault(_CheckBlackList);

var _GachaOptions = __webpack_require__(/*! ./GachaOptions */ "./src/modules/Popup/GachaOptions.js");

var _GachaOptions2 = _interopRequireDefault(_GachaOptions);

__webpack_require__(/*! ./css/index.css */ "./src/modules/Popup/css/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Author: zy9@github.com/zy410419243
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date: 2018-05-20 14:46:14
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified by: zy9
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-07-20 08:35:05
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


// import UploadItems from './UploadItems'

// import SetZoom from './SetZoom';

// import SiderOptions from './SiderOptions'

// import ScrollOptions from './ScrollOptions'


var Popup = function (_Component) {
    _inherits(Popup, _Component);

    function Popup() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Popup);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Popup.__proto__ || Object.getPrototypeOf(Popup)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            return _react2.default.createElement(
                'div',
                { className: 'Popup' },
                _react2.default.createElement(_CoopraidSearch2.default, null),
                _react2.default.createElement(_CheckBlackList2.default, null),
                _react2.default.createElement(_CheckCharacters2.default, null),
                _react2.default.createElement(_GachaOptions2.default, null)
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Popup;
}(_react.Component);

exports.default = Popup;

/***/ })

}]);
//# sourceMappingURL=2.ddfec2db.js.map