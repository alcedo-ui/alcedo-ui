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

        this.onBlur = this :: this.onBlur;
        this.onChange = this :: this.onChange;
        this.showInput = this :: this.showInput;
        this.downHandle = this :: this.downHandle;
        this.getPosition = this :: this.getPosition;
        this.getElementLeft = this :: this.getElementLeft;
    }

    /**
     * 获取指针坐标
     */
    getPosition(ev) {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
        return {x: ev.clientX + scrollLeft, y: ev.clientY + scrollTop};
    }

    /**
     * 获取元素偏移量
     */
    getElementLeft(element, offset) {
        let offsetX = element[offset];
        let current = element.offsetParent;
        while (current !== null) {
            offsetX += current[offset];
            current = current.offsetParent;
        }
        return offsetX;
    }

    onBlur(text, e) {
        this.setState({
            text: text
        }, () => {
            this.props.onBlur && this.props.onBlur(this.state.text);
        });
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
        let mouseX = this.getPosition(oEvent).x,
            mouseY = this.getPosition(oEvent).y,
            inputX = this.getElementLeft(this.refs.editableField, 'offsetLeft'),
            inputY = this.getElementLeft(this.refs.editableField, 'offsetTop'),
            inputWidth = this.refs.editableField.offsetWidth,
            inputHeight = this.refs.editableField.offsetHeight;
        if (mouseX < inputX || mouseX > (inputX + inputWidth) || mouseY < inputY || mouseY > (inputY + inputHeight)) {
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
        const {style, name} = this.props;

        return (
            <div className="editable-field"
                 title="Click to edit"
                 style={style}
                 ref="editableField">
                <span className="editable-field-text">{this.state.text}</span>
                {
                    this.state.hide === true
                        ?
                            <span className="editable-field-span"
                                  onClick={this.showInput}>{this.state.text}<i className="fa fa-pencil"
                                                                               aria-hidden="true"></i></span>
                        : <TextField ref="textField"
                                     value={this.state.changeText}
                                     className={'editable-field-input'}
                                     onBlur={this.onBlur}
                                     onChange={this.onChange}/>
                }
                <input type="hidden" value={this.state.text} readOnly name={name}/>

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
    onChange: PropTypes.func,
};

EditableField.defaultProps = {
    className: '',
    style: {},

    value: 'text',
    name: ''
};