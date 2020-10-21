/**
 * @file EditableField component
 * @author chao(chao.zhang@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';

// Components
import TextField from '../TextField/TextField';
import TipProvider from '../TipProvider';

// Vendors
import classNames from 'classnames';
import trim from 'lodash/trim';
import Event from '../_vendors/Event';
import ComponentUtil from '../_vendors/ComponentUtil';

class EditableField extends Component {

    static getDerivedStateFromProps(props, state) {

        const result = {
                prevProps: props
            },
            value = ComponentUtil.getDerivedState(props, state, 'value', 'text');

        if (value !== state.text) {
            result.text = value;
            result.changeText = value;
        }

        if (props.disabled === true && props.disabled !== state.prevProps?.disabled) {
            result.hide = true;
        }

        return result;

    }

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.editableField = createRef();
        this.editableFieldEl = null;
        this.editableFieldText = createRef();
        this.editableFieldTextEl = null;
        this.textField = createRef();

        this.state = {
            hide: true,
            text: props.value,
            changeText: props.value,
            inputAutoWidth: 0
        };

    }

    componentDidMount() {

        this.editableFieldEl = this.editableField && this.editableField.current;
        this.editableFieldTextEl = this.editableFieldText && this.editableFieldText.current;

        Event.addEvent(document, 'mousedown', this.handleDown);
        Event.addEvent(document, 'keydown', this.handleKeyDown);

    }

    componentDidUpdate() {

        const {inputAutoWidth} = this.state;

        let newAutoWidth = this.editableFieldTextEl && this.editableFieldTextEl.offsetWidth;

        if (inputAutoWidth !== newAutoWidth) {
            this.setState({
                inputAutoWidth: newAutoWidth
            });
        }

    }

    componentWillUnmount() {
        Event.removeEvent(document, 'mousedown', this.handleDown);
        Event.removeEvent(document, 'keydown', this.handleKeyDown);
    }

    triggerElement = (el, targetEl) => {
        while (el) {
            if (el == targetEl) {
                return true;
            }
            el = el.parentNode;
        }
        return false;
    };

    handleInputChange = text => {
        this.setState({
            changeText: text
        });
    };

    /**
     * 显示input并获得焦点
     */
    showInput = e => {
        this.setState({
            hide: false
        }, () => {
            this.textField && this.textField.current && this.textField.current.focus();
            this.props.onEditStart && this.props.onEditStart(e);
        });
    };

    /**
     * 通过坐标判断是否在input区域内点击，防止点击‘清空’时，input消失
     */
    handleDown = ev => {
        let oEvent = ev || event;
        if (this.state.hide === false && (!this.triggerElement(oEvent.target, this.editableFieldEl))) {
            this.finishEdit(ev);
        }
    };

    finishEdit = ev => {
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
    };

    handleKeyDown = ev => {
        const {regExp} = this.props;

        if (regExp && !regExp.test(ev.key)) {
            event.preventDefault();
            return false;
        }
        if (ev.keyCode === 13) {
            this.finishEdit(ev);
        }
        return true;
    };

    render() {

        const {
                children, className, style, name, disabled, tip, tipPosition, title,
                onMouseDown, onClick, showModal, maxLength, autoWidth, parentEl
            } = this.props,
            {changeText, text, hide, inputAutoWidth} = this.state;
        let inputStyle = autoWidth && typeof inputAutoWidth === 'number' ? {width: parseInt(inputAutoWidth) + 42} : {};

        return (
            <TipProvider tipContent={tip}
                         parentEl={parentEl}
                         position={tipPosition}>
                <div ref={this.editableField}
                     className={classNames('editable-field', {
                         [className]: className
                     })}
                     style={style}
                     title={`${disabled ? '' : title}`}
                     onMouseDown={onMouseDown}
                     onClick={onClick}>

                    <span className="editable-field-hidden-text"
                          ref={this.editableFieldText}
                          disabled={disabled}>
                        {changeText}
                    </span>

                    <span className="editable-field-text"
                          disabled={disabled}>
                        {text}
                    </span>

                    {
                        hide === true ?
                            <span className="editable-field-span"
                                  onClick={this.showInput}>{text}
                                <i className="fas fa-pencil-alt editable-field-icon"
                                   aria-hidden="true"/>
                            </span>
                            :
                            <TextField ref={this.textField}
                                       style={inputStyle}
                                       className={'editable-field-input'}
                                       maxLength={maxLength}
                                       value={changeText}
                                       onChange={this.handleInputChange}/>
                    }

                    <input type="hidden"
                           value={text}
                           readOnly
                           name={name}/>

                    {
                        showModal && !hide ?
                            <div className="editable-modal"
                                 onClick={this.finishEdit}/>
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

    children: PropTypes.any,

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

    parentEl: PropTypes.object,

    onMouseDown: PropTypes.func,

    /**
     * Callback function when touch the editableField.
     */
    onClick: PropTypes.func,

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
