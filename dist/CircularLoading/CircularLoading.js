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

require('./CircularLoading.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CircularLoading = function (_Component) {
    (0, _inherits3.default)(CircularLoading, _Component);

    function CircularLoading(props) {
        (0, _classCallCheck3.default)(this, CircularLoading);
        return (0, _possibleConstructorReturn3.default)(this, (CircularLoading.__proto__ || (0, _getPrototypeOf2.default)(CircularLoading)).call(this, props));
    }

    (0, _createClass3.default)(CircularLoading, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                style = _props.style,
                size = _props.size;


            return _react2.default.createElement(
                'div',
                { className: 'circular-loading ' + size + ' ' + className,
                    style: style },
                _react2.default.createElement(
                    'div',
                    { className: 'spinner' },
                    _react2.default.createElement(
                        'div',
                        { className: 'circle left' },
                        _react2.default.createElement('div', null)
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'gap' },
                        _react2.default.createElement('div', null)
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'circle right' },
                        _react2.default.createElement('div', null)
                    )
                )
            );
        }
    }]);
    return CircularLoading;
}(_react.Component);

exports.default = CircularLoading;
;

CircularLoading.propTypes = {

    className: _react.PropTypes.string,
    style: _react.PropTypes.object,

    size: _react.PropTypes.string

};

CircularLoading.defaultProps = {

    className: '',
    style: null,

    size: '' // big / small / ''

};