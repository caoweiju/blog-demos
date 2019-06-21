/*
 * @Author: weiu.cao
 * @Date: 2019-06-21 15:13:21
 * @Last Modified by: weiju.cao
 * @Last Modified time: 2019-06-21 19:52:42
*/
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import List from './components/list/index.js';
var initLenContext = {
    chLan: 'ch',
    enLan: 'en',
    listOne: [{
        en: 'Apple',
        ch: '苹果'
    }, {
        en: 'wifi',
        ch: '无线'
    }, {
        en: 'test',
        ch: '测试'
    }],
    listTwo: [{
        en: 'telphone',
        ch: '手机'
    }, {
        en: 'drink',
        ch: '饮酒'
    }, {
        en: 'computer',
        ch: '电脑'
    }],
    listThree: [{
        en: 'pen',
        ch: '笔'
    }, {
        en: 'game',
        ch: '游戏'
    }, {
        en: 'action',
        ch: '活动'
    }]
};

export var LenContext = React.createContext({ list: initLenContext.listOne, currLan: initLenContext.chLan }); // 默认值：只有没有匹配的context的时候才生效 provider传递空值是不生效

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            list: initLenContext.listTwo,
            currLan: initLenContext.chLan
        };

        _this.changCurreLan = _this.changCurreLan.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'changCurreLan',
        value: function changCurreLan() {
            var currLan = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ch';

            currLan && this.setState({ currLan: currLan });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                list = _state.list,
                currLan = _state.currLan;

            return React.createElement(
                LenContext.Provider,
                { value: { list: list, currLan: currLan } },
                React.createElement(List, { changCurreLan: this.changCurreLan })
            );
        }
    }]);

    return App;
}(React.Component);

var domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(App, null), domContainer);