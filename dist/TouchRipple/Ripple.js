'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _index = require('E:\\git\\alcedo-ui\\node_modules\\babel-preset-react-hmre\\node_modules\\redbox-react\\lib\\index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('E:\\git\\alcedo-ui\\node_modules\\babel-preset-react-hmre\\node_modules\\react-transform-catch-errors\\lib\\index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('E:\\git\\alcedo-ui\\node_modules\\babel-preset-react-hmre\\node_modules\\react-transform-hmr\\lib\\index.js');

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	Ripple: {
		displayName: 'Ripple'
	}
};

var _EGitAlcedoUiNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	filename: 'E:/git/alcedo-ui/src/TouchRipple/Ripple.js',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _EGitAlcedoUiNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	filename: 'E:/git/alcedo-ui/src/TouchRipple/Ripple.js',
	components: _components,
	locals: [],
	imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _EGitAlcedoUiNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2(_EGitAlcedoUiNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	};
}

var Ripple = _wrapComponent('Ripple')(function (_Component) {
	_inherits(Ripple, _Component);

	function Ripple(props) {
		_classCallCheck(this, Ripple);

		var _this = _possibleConstructorReturn(this, (Ripple.__proto__ || Object.getPrototypeOf(Ripple)).call(this, props));

		_this.hasMounted = false;

		return _this;
	}

	_createClass(Ripple, [{
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


			return _react3.default.createElement('div', { className: 'ripple ' + className,
				style: style });
		}
	}]);

	return Ripple;
}(_react2.Component));

exports.default = Ripple;
;

Ripple.propTypes = {
	className: _react2.PropTypes.string,
	style: _react2.PropTypes.object
};

Ripple.defaultProps = {
	className: '',
	style: null
};