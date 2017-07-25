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

        this.onChange = this :: this.onChange;
        this.showInput = this :: this.showInput;
        this.downHandle = this :: this.downHandle;
        this.triggerElement = this :: this.triggerElement;
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

    onChange(text) {
        this.setState({
            changeText: text
        }, () => {
            this.props.onChange && this.props.onChange(text);
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
        });
    }

    /**
     * 通过坐标判断是否在input区域内点击，防止点击‘清空’时，input消失
     */
    downHandle(ev) {
        let oEvent = ev || event;
        if (this.state.hide === false && !this.triggerElement(oEvent.srcElement, this.refs.editableField)) {
            this.setState({
                hide: true,
                text: this.state.changeText
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.text) {
            this.setState({
                text: nextProps.value
            });
        }
    }

    componentDidMount() {
        Event.addEvent(document, 'mousedown', this.downHandle);
    }

    componentWillUnmount() {
        Event.removeEvent(document, 'mousedown', this.downHandle);
    }

    render() {
        const {style, name, className} = this.props;

        return (
            <div ref="editableField"
                 className={`editable-field ${className}`}
                 style={style}
                 title="Click to edit">
                <span className="editable-field-text">{this.state.text}</span>
                {
                    this.state.hide === true
                        ?
                        <span className="editable-field-span"
                              onClick={this.showInput}>{this.state.text}<i className="fa fa-pencil"
                                                                           aria-hidden="true"></i></span>
                        : <TextField ref="textField"
                                     className={'editable-field-input'}
                                     value={this.state.changeText}
                                     onChange={this.onChange}/>
                }
                <input type="hidden"
                       value={this.state.text}
                       readOnly
                       name={name}/>

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
     * Callback function fired when the editableField blur.
     */
    onBlur: PropTypes.func,

    /**
     * Callback function fired when the editableField change.
     */
    onChange: PropTypes.func
};

EditableField.defaultProps = {
    className: '',
    style: {},

    value: 'text',
    name: ''
};