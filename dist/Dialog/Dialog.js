'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require('C:\\zhangchao\\alcedo-ui\\node_modules\\redbox-react\\lib\\index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('C:\\zhangchao\\alcedo-ui\\node_modules\\react-transform-catch-errors\\lib\\index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('C:\\zhangchao\\alcedo-ui\\node_modules\\react-transform-hmr\\lib\\index.js');

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('./dialog.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Dialog: {
        displayName: 'Dialog'
    }
};

var _CZhangchaoAlcedoUiNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'C:/zhangchao/alcedo-ui/src/Dialog/Dialog.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _CZhangchaoAlcedoUiNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'C:/zhangchao/alcedo-ui/src/Dialog/Dialog.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _CZhangchaoAlcedoUiNode_modulesReactTransformHmrLibIndexJs2(_CZhangchaoAlcedoUiNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
} /**
   * Created by DT314 on 2017/4/6.
   */


var Dialog = _wrapComponent('Dialog')(function (_Component) {
    _inherits(Dialog, _Component);

    function Dialog(props) {
        _classCallCheck(this, Dialog);

        var _this = _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this));

        _this.state = {
            hide: 'show'
        };
        _this.shadowClickHandle = _this.shadowClickHandle.bind(_this);
        return _this;
    }

    _createClass(Dialog, [{
        key: 'shadowClickHandle',
        value: function shadowClickHandle() {
            this.setState({
                hide: 'hide'
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react3.default.createElement(
                'div',
                { className: "dialog-cover " + this.props.className },
                _react3.default.createElement('div', { className: 'dialog-shadow', onClick: this.props.onHide }),
                _react3.default.createElement(
                    'div',
                    { className: 'dialog-box' },
                    _react3.default.createElement(
                        'h3',
                        null,
                        this.props.title
                    ),
                    _react3.default.createElement(
                        'p',
                        null,
                        this.props.desc
                    ),
                    _react3.default.createElement(
                        'div',
                        { className: 'dialog-button-group' },
                        _react3.default.createElement(
                            'button',
                            { className: 'button', onClick: this.props.onHide },
                            'cancel'
                        ),
                        _react3.default.createElement(
                            'button',
                            { className: 'button', onClick: this.props.onSure },
                            'commit'
                        )
                    )
                )
            );
        }
    }]);

    return Dialog;
}(_react2.Component));

exports.default = Dialog;


Dialog.propTypes = {
    title: _react2.PropTypes.string,
    desc: _react2.PropTypes.string,
    buttonBool: _react2.PropTypes.array,
    className: _react2.PropTypes.string,
    onHide: _react2.PropTypes.func,
    onSure: _react2.PropTypes.func
};

Dialog.defaultProps = {
    title: "Dialog",
    desc: "here is a desc",
    buttonBool: [true, true],
    className: "hide"
};