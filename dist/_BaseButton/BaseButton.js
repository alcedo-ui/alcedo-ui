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

var _CircularLoading = require('../CircularLoading/CircularLoading');

var _CircularLoading2 = _interopRequireDefault(_CircularLoading);

var _TouchRipple = require('../TouchRipple/TouchRipple');

var _TouchRipple2 = _interopRequireDefault(_TouchRipple);

require('./BaseButton.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseButton = function (_Component) {
    (0, _inherits3.default)(BaseButton, _Component);

    function BaseButton(props) {
        (0, _classCallCheck3.default)(this, BaseButton);

        var _this = (0, _possibleConstructorReturn3.default)(this, (BaseButton.__proto__ || (0, _getPrototypeOf2.default)(BaseButton)).call(this, props));

        _this.clickHandle = _this.clickHandle.bind(_this);

        return _this;
    }

    (0, _createClass3.default)(BaseButton, [{
        key: 'clickHandle',
        value: function clickHandle(e) {
            !this.props.disabled && !this.props.isLoading && this.props.onClick && this.props.onClick(e);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                style = _props.style,
                iconCls = _props.iconCls,
                type = _props.type,
                value = _props.value,
                disabled = _props.disabled,
                isLoading = _props.isLoading;


            return _react2.default.createElement(
                'button',
                { className: 'base-button ' + className,
                    style: style,
                    type: type,
                    disabled: disabled || isLoading,
                    onMouseDown: this.clickHandle },
                iconCls ? isLoading ? _react2.default.createElement(_CircularLoading2.default, { size: 'small' }) : _react2.default.createElement('i', { className: iconCls,
                    'aria-hidden': 'true' }) : null,
                value,
                children,
                _react2.default.createElement(_TouchRipple2.default, { className: disabled || isLoading ? 'hidden' : '' })
            );
        }
    }]);
    return BaseButton;
}(_react.Component);

exports.default = BaseButton;
;

BaseButton.propTypes = {

    className: _react.PropTypes.string,
    style: _react.PropTypes.object,

    value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    iconCls: _react.PropTypes.string,
    disabled: _react.PropTypes.bool,
    type: _react.PropTypes.string,
    isLoading: _react.PropTypes.bool,

    onClick: _react.PropTypes.func

};

BaseButton.defaultProps = {

    className: '',
    style: null,

    value: '',
    iconCls: '',
    disabled: false,
    type: 'button',
    isLoading: false

};