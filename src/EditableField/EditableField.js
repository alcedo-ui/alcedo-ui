/**
 * Created by DT314 on 2017/4/18.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TextField from '../TextField/TextField';
import Event from '../_vendors/Event';

import './EditableField.css';

export default class EditableField extends Component {
    constructor(props) {
        super();

        this.state = {
            hide: true,
            text: props.value,
            changeText: props.value
        };

        this.onInputChange = this :: this.onInputChange;
        this.showInput = this :: this.showInput;
        this.downHandle = this :: this.downHandle;
        this.triggerElement = this :: this.triggerElement;
        this.keyDownHandle = this :: this.keyDownHandle;
    }

    triggerElement(el, targetEl) {
        while (el) {
            if (el == targetEl) {
                return true;
            }
            el = el.parentNode;
        }
        return false;
    }

    onInputChange(text) {
        this.setState({
            changeText: text
        });
    }

    /**
     * 显示input并获得焦点
     */
    showInput() {
        this.setState({
            hide: false
        }, () => {
            this.refs.textField.refs.input.focus();
            this.props.onEditStart && this.props.onEditStart();
        });
    }

    /**
     * 通过坐标判断是否在input区域内点击，防止点击‘清空’时，input消失
     */
    downHandle(ev) {
        let oEvent = ev || event;
        if (this.state.hide === false && !this.triggerElement(oEvent.srcElement, this.refs.editableField)) {
            const change = this.state.text !== this.state.changeText;

            this.setState({
                hide: true,
                text: this.state.changeText
            }, () => {
                this.props.onEditEnd && this.props.onEditEnd();
                change && this.props.onChange && this.props.onChange(this.state.text);
            });
        }
    }

    keyDownHandle(ev) {
        const {regExp} = this.props;

        if (regExp && !regExp.test(ev.key)) {
            event.preventDefault();
            return false;
        }
        return true;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.text) {
            this.setState({
                text: nextProps.value,
                changeText: nextProps.value
            });
        }
        if (nextProps.disabled === true && nextProps.disabled !== this.props.disabled) {
            this.setState({
                hide: true,
                changeText: this.state.text
            }, () => {
                this.props.onEditEnd && this.props.onEditEnd();
            });
        }
    }

    componentDidMount() {
        Event.addEvent(document, 'mousedown', this.downHandle);
        Event.addEvent(document, 'keydown', this.keyDownHandle);
    }

    componentWillUnmount() {
        Event.removeEvent(document, 'mousedown', this.downHandle);
        Event.removeEvent(document, 'keydown', this.keyDownHandle);
    }

    render() {

        const {children, className, style, name, disabled} = this.props;

        return (
            <div ref="editableField"
                 className={`editable-field ${className}`}
                 style={style}
                 title={`${disabled ? '' : 'Click to edit'}`}>

                <span className={`editable-field-text`}
                      disabled={disabled}>{this.state.text}</span>

                {
                    this.state.hide === true
                        ?
                        <span className="editable-field-span"
                              onClick={this.showInput}>{this.state.text}<i className="fa fa-pencil editable-field-icon"
                                                                           aria-hidden="true"></i></span>
                        : <TextField ref="textField"
                                     className={'editable-field-input'}
                                     value={this.state.changeText}
                                     onChange={this.onInputChange}/>
                }

                <input type="hidden"
                       value={this.state.text}
                       readOnly
                       name={name}/>

                {children}

            </div>
        );
    }
};

EditableField.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The value of the editableField.
     */
    value: PropTypes.string,

    /**
     * The name of the editableField.
     */
    name: PropTypes.string,

    /**
     * The regular expression of the input.
     */
    regExp: PropTypes.object,

    /**
     * If true, the input is disabled.
     */
    disabled: PropTypes.bool,

    /**
     * Callback function fired when the editableField blur.
     */
    onBlur: PropTypes.func,

    /**
     * Callback function fired when the editableField change.
     */
    onChange: PropTypes.func,

    /**
     * Callback function fired when start editableField change.
     */
    onEditStart: PropTypes.func,

    /**
     * Callback function fired when end editableField change.
     */
    onEditEnd: PropTypes.func
};

EditableField.defaultProps = {
    className: '',
    style: {},

    value: 'text',
    name: '',
    disabled: false
};