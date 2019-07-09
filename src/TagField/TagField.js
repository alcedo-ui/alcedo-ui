/**
 * @file TagField component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import trim from 'lodash/trim';

import EditableField from '../EditableField';
import IconButton from '../IconButton';

import Util from '../_vendors/Util';
import Dom from '../_vendors/Dom';
import CharSize from '../_vendors/CharSize';
import Event from '../_vendors/Event';
import ComponentUtil from '../_vendors/ComponentUtil';

class TagField extends Component {

    static DEFAULT_SEPARATORS = [','];

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.inputSymbol = Symbol('input');
        this.wrapper = createRef();
        this.wrapperEl = null;
        this.inputWrapper = createRef();
        this.input = createRef();
        this.test = createRef();
        this.testEl = null;

        this.state = {
            wrapperWidth: 'auto',
            data: props.data,
            inputValue: props.inputValue,
            inputIndex: props.data.length,
            itemEditing: false,
            editingItemIndex: -1
        };

    }

    getSeparators = (separators = this.props.separators) => {

        if (separators && separators.length > 0) {
            return separators;
        }

        return DEFAULT_SEPARATORS;

    };

    generateSeparatorReg = (separators = this.props.separators) => {
        const seps = this.getSeparators(separators);
        return new RegExp(`\\s*${seps ? seps.map(sep => `\\${sep}`).join('|') : ''}\\s*`, 'g');
    };

    removeItem = index => {

        const {data} = this.state;

        if (!data || data.length < 1 || !(index in data)) {
            return;
        }

        data.splice(index, 1);

        this.setState({
            data
        }, () => {
            const {onChange} = this.props;
            onChange && onChange(data);
        });

    };

    calInputIndex = e => {

        if (!this.wrapperEl) {
            return -1;
        }

        const offset = Dom.getOffset(this.wrapperEl),
            {left: minX} = offset,
            wrapperWidth = this.wrapperEl.getBoundingClientRect().width,
            maxX = minX + wrapperWidth;

        let x = e.clientX,
            y = e.clientY,
            inputIndex = -1;

        while (x >= minX) {

            const item = document.elementFromPoint(x, y),
                el = Dom.findParentByClassName(item, 'tag-field-item-wrapper');

            if (el) {
                inputIndex = +el.dataset.index + 1;
                break;
            }

            x--;

        }

        if (inputIndex < 0) {
            while (x <= maxX) {

                const item = document.elementFromPoint(x, y),
                    el = Dom.findParentByClassName(item, 'tag-field-item-wrapper');

                if (el) {
                    inputIndex = +el.dataset.index;
                    break;
                }

                x++;

            }
        }

        return inputIndex < 0 ? this.state.data.length : inputIndex;

    };

    handleMouseDown = e => {

        if (this.props.disabled || Dom.findParentByClassName(e.target, 'tag-field-item-wrapper')
            || Dom.hasClass(e.target, 'tag-field-input')) {
            return;
        }

        const callback = (function (e) {

            return () => {

                if (this.state.itemEditing
                    || (this.wrapperEl
                        && Dom.findParentByClassName(e.target, 'tag-field') != this.wrapperEl)) {
                    this.setState({
                        inputIndex: this.state.data.length
                    });
                    return;
                }

                let x = e.clientX,
                    y = e.clientY;

                if (!x || !y || !this.wrapperEl) {
                    return;
                }

                const offset = Dom.getOffset(this.wrapperEl);

                if (!offset) {
                    return;
                }

                const inputIndex = this.calInputIndex(e);

                this.setState({
                    inputIndex
                }, () => {
                    setTimeout(() => {
                        this.input && this.input.current && this.input.current.focus();
                        // wrapperEl.scrollLeft = 0;
                        // wrapperEl.scrollTop = 0;
                    }, 0);
                });

            };

        }.bind(this))(e);

        if (this.state.inputValue) {
            this.insertInputValue(callback);
        } else {
            callback();
        }

    };

    handleInputChange = e => {

        if (this.props.disabled) {
            return;
        }

        const value = e.target.value,
            inputValue = value ? value.replace(/\r?\n/gm, '') : value;

        this.setState({
            inputValue
        }, () => {

            const {onInputChange} = this.props,
                width = CharSize.calculateStringWidth(inputValue, this.testEl),
                inputWrapperEl = this.inputWrapper && this.inputWrapper.current,
                inputEl = this.input && this.input.current;

            inputWrapperEl && (inputWrapperEl.style.width = `${width + 9}px`);
            inputEl && (inputEl.style.height = Math.max(inputEl.scrollHeight, 24) + 'px');
            onInputChange && onInputChange(inputValue);

        });

    };

    handleInputKeyDown = e => {

        if (this.props.disabled) {
            return;
        }

        if (e.keyCode === 13) {
            this.insertInputValue();
        }

    };

    insertInputValue = callback => {

        if (this.props.disabled) {
            return;
        }

        const {data, inputValue, inputIndex} = this.state;

        if (!inputValue) {
            return;
        }

        const splitedValue = trim(inputValue).split(this.generateSeparatorReg()).filter(item => !!item);

        data.splice(inputIndex, 0, ...splitedValue);

        this.setState({
            data,
            inputValue: '',
            inputIndex: inputIndex + splitedValue.length
        }, () => {

            this.inputWrapper && this.inputWrapper.current && (this.inputWrapper.current.style.width = '9px');

            const {onChange} = this.props;
            onChange && onChange(data);

            callback && callback();

        });

    };

    handleItemChange = (value, index) => {

        if (this.props.disabled) {
            return;
        }

        const {data} = this.state;

        if (value) {
            const splitedValue = value.split(this.generateSeparatorReg()).filter(item => item);
            data.splice(index, 1, ...splitedValue);
        } else {
            data.splice(index, 1);
        }

        this.setState({
            data
        }, () => {
            const {onChange} = this.props;
            onChange && onChange(data);
        });

    };

    handleItemEditStart = editingItemIndex => {

        if (this.props.disabled) {
            return;
        }

        this.setState({
            itemEditing: true,
            editingItemIndex
        });

    };

    handleItemEditEnd = () => {

        if (this.props.disabled) {
            return;
        }

        this.setState({
            itemEditing: false
        });

    };

    componentDidMount() {

        this.wrapperEl = this.wrapper && this.wrapper.current;
        this.testEl = this.test && this.test.current;

        Event.addEvent(document, 'mousedown', this.handleMouseDown);

        this.setState({
            wrapperWidth: this.wrapperEl ? this.wrapperEl.clientWidth : 'auto'
        });

    }

    componentWillUnmount() {
        Event.removeEvent(document, 'mousedown', this.handleMouseDown);
    }

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            data: ComponentUtil.getDerivedState(props, state, 'data'),
            inputValue: ComponentUtil.getDerivedState(props, state, 'inputValue')
        };
    }

    render() {

        const {
                className, style, valueField, displayField, disabled,
                placeholder, isTagAutoWidth, tagRemoveIconCls
            } = this.props,
            {wrapperWidth, data, inputValue, inputIndex, itemEditing, editingItemIndex} = this.state,
            indexData = Util.genIndexArray(data.length);

        indexData.splice(inputIndex, 0, this.inputSymbol);

        return (
            <div ref={this.wrapper}
                 className={classNames('tag-field', {
                     [className]: className
                 })}
                 style={style}
                 disabled={disabled}>

                {
                    indexData && indexData.map(index => index === this.inputSymbol ?
                        !disabled ?
                            <div key="input"
                                 ref={this.inputWrapper}
                                 className="tag-field-input-wrapper">
                                <textarea ref={this.input}
                                          className="tag-field-input"
                                          style={{width: wrapperWidth}}
                                          autoFocus={true}
                                          value={inputValue}
                                          placeholder={data.length < 1 && placeholder ? placeholder : ''}
                                          onChange={this.handleInputChange}
                                          onKeyDown={this.handleInputKeyDown}/>
                            </div>
                            :
                            null
                        :
                        <span key={index}
                              data-index={index}
                              className={classNames('tag-field-item-wrapper', {
                                  [data[index].className]: data[index].className
                              })}>
                            <EditableField className="tag-field-item-field"
                                           value={Util.getTextByDisplayField(data[index], displayField, valueField)}
                                           disabled={disabled || (itemEditing && index !== editingItemIndex)}
                                           autoWidth={isTagAutoWidth}
                                           onChange={value => this.handleItemChange(value, index)}
                                           onEditStart={() => this.handleItemEditStart(index)}
                                           onEditEnd={this.handleItemEditEnd}>
                                <IconButton className="tag-field-item-field-delete-button"
                                            iconCls={tagRemoveIconCls}
                                            disabled={disabled || (itemEditing && index !== editingItemIndex)}
                                            onClick={() => this.removeItem(index)}/>
                            </EditableField>
                        </span>
                    )
                }

                <div ref={this.test}
                     className="tag-field-test-container"></div>

            </div>
        );

    }
}

TagField.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    data: PropTypes.array,
    inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    valueField: PropTypes.string,
    displayField: PropTypes.string,
    separators: PropTypes.array,

    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    isTagAutoWidth: PropTypes.bool,
    tagRemoveIconCls: PropTypes.string,

    onChange: PropTypes.func,
    onInputChange: PropTypes.func

};

TagField.defaultProps = {

    data: [],
    inputValue: '',

    valueField: 'value',
    displayField: 'text',
    separators: TagField.DEFAULT_SEPARATORS,

    disabled: false,

    placeholder: '',
    isTagAutoWidth: true,
    tagRemoveIconCls: 'fas fa-times'

};

export default TagField;
