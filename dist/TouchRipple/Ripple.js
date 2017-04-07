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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Ripple = function (_Component) {
	(0, _inherits3.default)(Ripple, _Component);

	function Ripple(props) {
		(0, _classCallCheck3.default)(this, Ripple);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Ripple.__proto__ || (0, _getPrototypeOf2.default)(Ripple)).call(this, props));

		_this.hasMounted = false;

		return _this;
	}

	(0, _createClass3.default)(Ripple, [{
		key: 'initializeAnimation',
		value: function initializeAnimation(callback) {
			var _this2 = this;

			_reactDom2.default.findDOMNode(this).style.transform = 'scale(0)';

			setTimeout(function () {
				_this2.hasMounted && callback();
			}, 0);
		}
	}, {
		key: 'animate',
		value: function animate() {
			_reactDom2.default.findDOMNode(this).style.transform = 'scale(1)';
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.hasMounted = true;
		}
	}, {
		key: 'componentWillAppear',
		value: function componentWillAppear(callback) {
			this.initializeAnimation(callback);
		}
	}, {
		key: 'componentWillEnter',
		value: function componentWillEnter(callback) {
			this.initializeAnimation(callback);
		}
	}, {
		key: 'componentDidAppear',
		value: function componentDidAppear() {
			this.animate();
		}
	}, {
		key: 'componentDidEnter',
		value: function componentDidEnter() {
			this.animate();
		}
	}, {
		key: 'componentWillLeave',
		value: function componentWillLeave(callback) {
			var _this3 = this;

			_reactDom2.default.findDOMNode(this).style.opacity = 0;

			this.timeout = setTimeout(function () {
				_this3.hasMounted && callback();
			}, 2000);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.timeout && clearTimeout(this.timeout);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    className = _props.className,
			    style = _props.style;


			return _react2.default.createElement('div', { className: 'ripple ' + className,
				style: style });
		}
	}]);
	return Ripple;
}(_react.Component);

exports.default = Ripple;
;

Ripple.propTypes = {
	className: _react.PropTypes.string,
	style: _react.PropTypes.object
};

Ripple.defaultProps = {
	className: '',
	style: null
};