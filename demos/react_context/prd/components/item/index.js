/*
 * @Author: weiu.cao
 * @Date: 2019-06-21 15:13:21
 * @Last Modified by: weiju.cao
 * @Last Modified time: 2019-06-21 17:00:13
*/
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Text from '../text/index.js';

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            var data = this.context,
                _ref = data || {},
                _ref$list = _ref.list,
                list = _ref$list === undefined ? [] : _ref$list,
                _ref$currLan = _ref.currLan,
                currLan = _ref$currLan === undefined ? '' : _ref$currLan,
                _props = props,
                index = _props.index;


            return React.createElement(
                'div',
                { className: 'm-home-item' },
                React.createElement(Text, null)
            );
        }
    }]);

    return App;
}(React.Component);

App.contextType = LenContext;
export default App;