'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsTransitionGroup = require('react-addons-transition-group');

var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

var _Ripple = require('./Ripple');

var _Ripple2 = _interopRequireDefault(_Ripple);

require('./TouchRipple.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TouchRipple = function (_Component) {
    (0, _inherits3.default)(TouchRipple, _Component);

    function TouchRipple(props) {
        (0, _classCallCheck3.default)(this, TouchRipple);

        var _this = (0, _possibleConstructorReturn3.default)(this, (TouchRipple.__proto__ || (0, _getPrototypeOf2.default)(TouchRipple)).call(this, props));

        _this.ignoreNextMouseDown = false;
        _this.nextKey = 0;
        _this.timeoutIds = [];

        _this.state = {
            ripples: []
        };

        _this.clearRippleTimeout = _this.clearRippleTimeout.bind(_this);
        _this.mouseDownHandle = _this.mouseDownHandle.bind(_this);
        _this.mouseUpHandle = _this.mouseUpHandle.bind(_this);

        return _this;
    }

    (0, _createClass3.default)(TouchRipple, [{
        key: 'getDiag',
        value: function getDiag(a, b) {
            return Math.sqrt(a * a + b * b);
        }
    }, {
        key: 'getOffset',
        value: function getOffset(el) {
            var rect = el.getBoundingClientRect();
            return {
                offsetTop: rect.top + document.body.scrollTop,
                offsetLeft: rect.left + document.body.scrollLeft
            };
        }
    }, {
        key: 'getRippleStyle',
        value: function getRippleStyle(e) {

            // 获取div
            var el = _reactDom2.default.findDOMNode(this);

            // 获取div 宽度、高度 和 偏移
            var elHeight = el.offsetHeight;
            var elWidth = el.offsetWidth;

            var _getOffset = this.getOffset(el),
                offsetTop = _getOffset.offsetTop,
                offsetLeft = _getOffset.offsetLeft;

            // 获取相对于div的点击位置偏移


            var pointerX = e.pageX - offsetLeft;
            var pointerY = e.pageY - offsetTop;

            // 涟漪半径为4个距离的最大值
            var rippleRadius = Math.max(this.getDiag(pointerX, pointerY), this.getDiag(elWidth - pointerX, pointerY), this.getDiag(elWidth - pointerX, elHeight - pointerY), this.getDiag(pointerX, elHeight - pointerY));
            var rippleSize = rippleRadius * 2;

            // 最终偏移量
            var left = pointerX - rippleRadius;
            var top = pointerY - rippleRadius;

            return {
                height: rippleSize,
                width: rippleSize,
                top: top,
                left: left
            };
        }
    }, {
        key: 'addRipple',
        value: function addRipple(e) {
            var _this2 = this;

            if (this.ignoreNextMouseDown) {
                return;
            }

            this.ignoreNextMouseDown = true;
            var ripples = this.state.ripples;


            ripples.push(_react2.default.createElement(_Ripple2.default, { key: this.nextKey++,
                style: this.getRippleStyle(e) }));

            this.setState({
                ripples: ripples
            }, function () {
                _this2.ignoreNextMouseDown = false;
            });
        }
    }, {
        key: 'removeRipple',
        value: function removeRipple() {
            this.clearRippleTimeout();
            this.setState({
                ripples: []
            });
        }
    }, {
        key: 'clearRippleTimeout',
        value: function clearRippleTimeout() {

            if (!this.timeoutIds || this.timeoutIds.length < 1) {
                return;
            }

            this.timeoutIds.forEach(function (item) {
                return clearTimeout(item);
            });
            this.timeoutIds = [];
        }
    }, {
        key: 'mouseDownHandle',
        value: function mouseDownHandle(e) {
            var _this3 = this;

            this.timeoutIds[this.nextKey] = setTimeout(function () {
                _this3.removeRipple();
            }, 1000 / 60);

            this.addRipple(e);
        }
    }, {
        key: 'mouseUpHandle',
        value: function mouseUpHandle() {
            this.removeRipple();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.clearRippleTimeout();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                style = _props.style;
            var ripples = this.state.ripples;


            return _react2.default.createElement(
                _reactAddonsTransitionGroup2.default,
                { component: 'div',
                    className: 'touch-ripple ' + className,
                    style: style,
                    onMouseDown: this.mouseDownHandle,
                    onMouseUp: this.mouseUpHandle },
                ripples && ripples.length > 0 ? ripples : null
            );
        }
    }]);
    return TouchRipple;
}(_react.Component);

exports.default = TouchRipple;
;

TouchRipple.propTypes = {
    className: _react.PropTypes.string,
    style: _react.PropTypes.object
};

TouchRipple.defaultProps = {
    className: '',
    style: null
};