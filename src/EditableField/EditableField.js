/**
 * @file EditableField component
 * @author chao(chao.zhang@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import trim from 'lodash/trim';

import TextField from '../TextField/TextField';
import TipProvider from '../TipProvider';

import Event from '../_vendors/Event';

class EditableField extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            hide: true,
            text: props.value,
            changeText: props.value,
            inputAutoWidth: 0
        };

        this.onInputChange = ::this.onInputChange;
        this.showInput = ::this.showInput;
        this.downHandle = ::this.downHandle;
        this.triggerElement = ::this.triggerElement;
        this.keyDownHandle = ::this.keyDownHandle;
        this.finishEdit = ::this.finishEdit;

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
    showInput(e) {
        this.setState({
            hide: false
        }, () => {
            this.refs.textField.refs.input.focus();
            this.props.onEditStart && this.props.onEditStart(e);
        });
    }

    /**
     * 通过坐标判断是否在input区域内点击，防止点击‘清空’时，input消失
     */
    downHandle(ev) {
        let oEvent = ev || event;
        if (this.state.hide === false && (!this.triggerElement(oEvent.target, this.refs.editableField))) {
            this.finishEdit(ev);
        }
    }

    finishEdit(ev) {
        const change = this.state.text !== this.state.changeText;

        if (change && this.props.beforeChange && this.props.beforeChange(this.state.changeText) === false) {
            ev.preventDefault();
            return;
        }

        this.setState({
            hide: true,
            text: trim(this.state.changeText),
            changeText: trim(this.state.changeText)
        }, () => {
            this.props.onEditEnd && this.props.onEditEnd(ev);
            change && this.props.onChange && this.props.onChange(this.state.text);
        });
    }

    keyDownHandle(ev) {
        const {regExp} = this.props;

        if (regExp && !regExp.test(ev.key)) {
            event.preventDefault();
            return false;
        }
        if (ev.keyCode === 13) {
            this.finishEdit(ev);
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

    componentDidUpdate() {
        const {inputAutoWidth} = this.state;

        let newAutoWidth = this.refs.editableFieldText && this.refs.editableFieldText.offsetWidth;

        if (inputAutoWidth !== newAutoWidth) {
            this.setState({
                inputAutoWidth: newAutoWidth
            });
        }
    }

    render() {

        const {
                children, className, style, name, disabled, tip, tipPosition, title,
                onMouseDown, onTouchTap, showModal, maxLength, autoWidth
            } = this.props,
            {changeText, text, hide, inputAutoWidth} = this.state,
            fieldClassName = classNames('editable-field', {
                [className]: className
            });
        let inputStyle = autoWidth && typeof inputAutoWidth === 'number' ? {width: parseInt(inputAutoWidth) + 42} : {};

        return (
            <TipProvider text={tip}
                         position={tipPosition}>
                <div ref="editableField"
                     className={fieldClassName}
                     style={style}
                     title={`${disabled ? '' : title}`}
                     onMouseDown={onMouseDown}
                     onTouchTap={onTouchTap}>

                    <span className={`editable-field-hidden-text`}
                          ref="editableFieldText"
                          disabled={disabled}>
                        {changeText}
                    </span>

                    <span className={`editable-field-text`}
                          disabled={disabled}>
                        {text}
                    </span>

                    {
                        hide === true ?
                            <span className="editable-field-span"
                                  onTouchTap={this.showInput}>{text}
                                <i className="fas fa-pencil-alt editable-field-icon"
                                   aria-hidden="true"></i>
                            </span>
                            :
                            <TextField ref="textField"
                                       style={inputStyle}
                                       className={'editable-field-input'}
                                       maxLength={maxLength}
                                       value={changeText}
                                       onChange={this.onInputChange}/>
                    }

                    <input type="hidden"
                           value={text}
                           readOnly
                           name={name}/>

                    {
                        showModal && !hide ?
                            <div className="editable-modal"
                                 ref="editableModal"
                                 onTouchTap={this.finishEdit}></div>
                            :
                            null
                    }

                    {children}

                </div>
            </TipProvider>
        );
    }
}

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
     * The title of the editableField.
     */
    title: PropTypes.string,

    /**
     * The maximum length of editableField to enter.
     */
    maxLength: PropTypes.number,

    /**
     * The tip of the editableField.
     */
    tip: PropTypes.string,

    /**
     * The tipPosition of the editableField.
     */
    tipPosition: PropTypes.string,

    /**
     * The regular expression of the input.
     */
    regExp: PropTypes.object,

    /**
     * If true, the input is disabled.
     */
    disabled: PropTypes.bool,

    /**
     * If true, the shadow is under the input.
     */
    showModal: PropTypes.bool,

    /**
     * If true, the input will be auto width.
     */
    autoWidth: PropTypes.bool,

    onMouseDown: PropTypes.func,

    /**
     * Callback function when touch the editableField.
     */
    onTouchTap: PropTypes.func,

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
    onEditEnd: PropTypes.func,

    /**
     * Callback function fired when before editableField change.
     */
    beforeChange: PropTypes.func

};

EditableField.defaultProps = {

    title: '',
    value: 'text',
    name: '',
    disabled: false,
    showModal: false,
    autoWidth: false

};

export default EditableField;