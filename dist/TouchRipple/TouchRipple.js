'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require('/Users/liangxiaojun/Projects/Derby/alcedo-ui/node_modules/redbox-react/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('/Users/liangxiaojun/Projects/Derby/alcedo-ui/node_modules/react-transform-catch-errors/lib/index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('/Users/liangxiaojun/Projects/Derby/alcedo-ui/node_modules/react-transform-hmr/lib/index.js');

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsTransitionGroup = require('react-addons-transition-group');

var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

var _Ripple = require('./Ripple');

var _Ripple2 = _interopRequireDefault(_Ripple);

require('TouchRipple.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    TouchRipple: {
        displayName: 'TouchRipple'
    }
};

var _UsersLiangxiaojunProjectsDerbyAlcedoUiNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/liangxiaojun/Projects/Derby/alcedo-ui/lib/TouchRipple/TouchRipple.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersLiangxiaojunProjectsDerbyAlcedoUiNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/liangxiaojun/Projects/Derby/alcedo-ui/lib/TouchRipple/TouchRipple.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersLiangxiaojunProjectsDerbyAlcedoUiNode_modulesReactTransformHmrLibIndexJs2(_UsersLiangxiaojunProjectsDerbyAlcedoUiNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var TouchRipple = _wrapComponent('TouchRipple')(function (_Component) {
    _inherits(TouchRipple, _Component);

    function TouchRipple(props) {
        _classCallCheck(this, TouchRipple);

        var _this = _possibleConstructorReturn(this, (TouchRipple.__proto__ || Object.getPrototypeOf(TouchRipple)).call(this, props));

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

    _createClass(TouchRipple, [{
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


            ripples.push(_react3.default.createElement(_Ripple2.default, { key: this.nextKey++,
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


            return _react3.default.createElement(
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
}(_react2.Component));

exports.default = TouchRipple;
;

TouchRipple.propTypes = {
    className: _react2.PropTypes.string,
    style: _react2.PropTypes.object
};

TouchRipple.defaultProps = {
    className: '',
    style: null
};