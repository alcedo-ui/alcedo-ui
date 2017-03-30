'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('CircularLoading.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CircularLoading = function (_Component) {
    _inherits(CircularLoading, _Component);

    function CircularLoading(props) {
        _classCallCheck(this, CircularLoading);

        return _possibleConstructorReturn(this, (CircularLoading.__proto__ || Object.getPrototypeOf(CircularLoading)).call(this, props));
    }

    _createClass(CircularLoading, [{
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