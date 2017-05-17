import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';

import RaisedButton from '../RaisedButton';
import FlatButton from '../FlatButton';

import './DropdownSelect.css';

export default class DropdownSelect extends Component {

    constructor(props) {

        super(props);

        this.state = {
            value: props.value,
            optionsVisible: false
        };

        this.mousedownHandle = this::this.mousedownHandle;
        this.isAbove = this::this.isAbove;
        this.select = this::this.select;

    }

    mousedownHandle(e) {
        !this.props.disabled && this.setState({
            optionsVisible: Event.triggerPopupEventHandle(
                e.target,
                require('react-dom').findDOMNode(this.refs.trigger),
                this.refs.options,
                this.state.optionsVisible
            )
        });
    }

    isAbove(optionsHeight) {

        if (optionsHeight && this.refs.DropdownSelect) {
            const {top} = Util.getOffset(this.refs.DropdownSelect),
                scrollTop = SCROLL_EL ? SCROLL_EL.scrollTop : document.body.scrollTop;
            if (top + this.triggerHeight + optionsHeight - scrollTop > window.innerHeight) {
                return true;
            }
        }

        return false;

    }

    select(value) {

        const {disabled, autoClose, onChange} = this.props;

        let state = {value};
        autoClose && (state.optionsVisible = false);

        this.setState(state, () => {
            !disabled && onChange && onChange(value);
        });

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({
                value: nextProps.value
            });
        }
    }

    componentDidMount() {
        this.triggerHeight = require('react-dom').findDOMNode(this).clientHeight;
        Event.addEvent(window, 'mousedown', this.mousedownHandle);
    }

    componentWillUnmount() {
        Event.removeEvent(window, 'mousedown', this.mousedownHandle);
    }

    render() {

        const {
            className, style, name, placeholder, disabled,
            textFormat, data, optionHeight, optionsMaxHeight
        } = this.props;
        const {optionsVisible, value} = this.state;
        const {triggerHeight} = this;

        // 计算 options 高度
        const dataLen = data.length;

        let optionsHeight = optionHeight * dataLen;
        optionsHeight = optionsHeight > optionsMaxHeight ? optionsMaxHeight : optionsHeight;

        let above = this.isAbove(optionsHeight),
            wrapperStyle = {
                top: above && optionsVisible ? -optionsHeight : 0,
                height: optionsVisible ? triggerHeight + optionsHeight : triggerHeight
            },
            triggerStyle = {
                height: triggerHeight
            },
            optionsStyle = {
                top: above ? 0 : triggerHeight,
                height: optionsHeight,
                maxHeight: optionsMaxHeight
            };

        if (above) {
            triggerStyle.bottom = 0;
        } else {
            triggerStyle.top = 0;
        }

        return (
            <div ref="DropdownSelect"
                 className={`dropdown-select ${className}`}
                 style={style}
                 disabled={disabled}>

                {
                    name && value ?
                        <input type="hidden"
                               name={name}
                               value={value}/>
                        :
                        null
                }

                <div className={`dropdown-select-inner ${above ? 'above' : ''} ${optionsVisible ? '' : 'hidden'}`}
                     style={wrapperStyle}>

                    <RaisedButton ref="trigger"
                                  className={`dropdown-select-trigger ${value ? '' : 'empty'}`}
                                  style={triggerStyle}
                                  value={(typeof value === 'object' ? value.text : value) || placeholder}
                                  iconCls={`fa fa-angle-${above ? 'down' : 'up'} dropdown-select-trigger-right-icon`}/>

                    <div ref="options"
                         className="dropdown-select-options"
                         style={optionsStyle}>

                        {
                            data.map((item, index) => {

                                const isObject = typeof item === 'object',
                                    text = isObject ? item.text : item,
                                    isActivated = JSON.stringify(item) == JSON.stringify(value);

                                return (
                                    <FlatButton key={index}
                                                className={`dropdown-select-option ${isActivated ? 'activated' : ''}`}
                                                iconCls={isObject ? item.iconCls : ''}
                                                value={textFormat && typeof textFormat === 'function'
                                                    ? textFormat(text) : text}
                                                disabled={isObject ? item.disabled : false}
                                                onTouchTap={() => {
                                                    this.select(item);
                                                }}/>
                                );
                            })
                        }

                    </div>

                </div>

            </div>
        );

    }
};

DropdownSelect.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The name of the dropDownSelect.
     */
    name: PropTypes.string,

    /**
     * The value of the dropDownSelect.
     */
    value: PropTypes.any,

    /**
     * The placeholder of the dropDownSelect.
     */
    placeholder: PropTypes.string,

    /**
     * The options data.
     */
    data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({

        // 图标 class
        /**
         * Use this property to display an icon of the options.
         */
        iconCls: PropTypes.string,

        // 值
        /**
         * The dropDownSelect input value.Type can be string,number or bool.
         */
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),

        // 显示文本
        /**
         * The options's text.Type can be string,number or bool.
         */
        text: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),

        // 是否禁止选择
        /**
         * Disables the option if set to true.
         */
        disabled: PropTypes.bool

    }), PropTypes.string, PropTypes.number])).isRequired,

    /**
     * The invalid message of dropDownSelect.
     */
    invalidMsg: PropTypes.string,

    /**
     * If true,the dropDownSelect will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * The message of the dropDownSelect.
     */
    infoMsg: PropTypes.string,

    /**
     * Use this function to format the options's text.
     */
    textFormat: PropTypes.func,

    /**
     * If true,the drop-down box automatically closed after selection.
     */
    autoClose: PropTypes.bool,

    /**
     * The height of the option.
     */
    optionHeight: PropTypes.number,

    /**
     * The maxHeight of the drop-down box.
     */
    optionsMaxHeight: PropTypes.number,

    /**
     * Callback function fired when a menu item is selected.
     */
    onChange: PropTypes.func

};

DropdownSelect.defaultProps = {

    className: '',
    style: null,

    name: '',
    value: '',
    placeholder: 'Please select ...',
    data: [],
    invalidMsg: '',
    disabled: false,
    infoMsg: '',
    autoClose: true,
    optionHeight: 50,
    optionsMaxHeight: 250

};