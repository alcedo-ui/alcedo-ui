import React, {Component, PropTypes} from 'react';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';

import RaisedButton from '../RaisedButton';

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
        this.triggerHeight = require('react-dom').findDOMNode(this.refs.trigger).offsetHeight;
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
            triggerStyle = {},
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
                                    <RaisedButton key={index}
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

    className: PropTypes.string,
    style: PropTypes.object,

    name: PropTypes.string,
    value: PropTypes.any,
    placeholder: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({

        // 图标 class
        iconCls: PropTypes.string,

        // 值
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),

        // 显示文本
        text: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),

        // 是否禁止选择
        disabled: PropTypes.bool

    }), PropTypes.string, PropTypes.number])).isRequired,
    invalidMsg: PropTypes.string,
    disabled: PropTypes.bool,
    infoMsg: PropTypes.string,
    textFormat: PropTypes.func,
    autoClose: PropTypes.bool,
    optionHeight: PropTypes.number,
    optionsMaxHeight: PropTypes.number,

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