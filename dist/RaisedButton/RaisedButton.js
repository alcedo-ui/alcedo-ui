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

var _CircularLoading = require('../CircularLoading/CircularLoading');

var _CircularLoading2 = _interopRequireDefault(_CircularLoading);

var _TouchRipple = require('../TouchRipple/TouchRipple');

var _TouchRipple2 = _interopRequireDefault(_TouchRipple);

require('./RaisedButton.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    RaisedButton: {
        displayName: 'RaisedButton'
    }
};

var _UsersLiangxiaojunProjectsDerbyAlcedoUiNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/liangxiaojun/Projects/Derby/alcedo-ui/src/RaisedButton/RaisedButton.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersLiangxiaojunProjectsDerbyAlcedoUiNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/liangxiaojun/Projects/Derby/alcedo-ui/src/RaisedButton/RaisedButton.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersLiangxiaojunProjectsDerbyAlcedoUiNode_modulesReactTransformHmrLibIndexJs2(_UsersLiangxiaojunProjectsDerbyAlcedoUiNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var RaisedButton = _wrapComponent('RaisedButton')(function (_Component) {
    _inherits(RaisedButton, _Component);

    function RaisedButton(props) {
        _classCallCheck(this, RaisedButton);

        var _this = _possibleConstructorReturn(this, (RaisedButton.__proto__ || Object.getPrototypeOf(RaisedButton)).call(this, props));

        _this.clickHandle = _this.clickHandle.bind(_this);

        return _this;
    }

    _createClass(RaisedButton, [{
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


            return _react3.default.createElement(
                'button',
                { className: 'raised-button ' + className,
                    style: style,
                    type: type,
                    disabled: disabled || isLoading,
                    onMouseDown: this.clickHandle },
                iconCls ? isLoading ? _react3.default.createElement(_CircularLoading2.default, { size: 'small' }) : _react3.default.createElement('i', { className: iconCls,
                    'aria-hidden': 'true' }) : null,
                value,
                children,
                _react3.default.createElement(_TouchRipple2.default, { className: disabled || isLoading ? 'hidden' : '' })
            );
        }
    }]);

    return RaisedButton;
}(_react2.Component));

exports.default = RaisedButton;
;

RaisedButton.propTypes = {

    className: _react2.PropTypes.string,
    style: _react2.PropTypes.object,

    value: _react2.PropTypes.oneOfType([_react2.PropTypes.string, _react2.PropTypes.number]),
    iconCls: _react2.PropTypes.string,
    disabled: _react2.PropTypes.bool,
    type: _react2.PropTypes.string,
    isLoading: _react2.PropTypes.bool,

    onClick: _react2.PropTypes.func

};

RaisedButton.defaultProps = {

    className: '',
    style: null,

    value: '',
    iconCls: '',
    disabled: false,
    type: 'button',
    isLoading: false

};