/**
 * @file TagField component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import trim from 'lodash/trim';

import EditableField from '../EditableField';
import IconButton from '../IconButton';

import Util from '../_vendors/Util';
import Dom from '../_vendors/Dom';
import CharSize from '../_vendors/CharSize';
import Event from '../_vendors/Event';

class TagField extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.inputSymbol = Symbol('input');

        this.state = {
            data: props.data,
            inputValue: props.inputValue,
            inputIndex: props.data.length,
            itemEditing: false,
            editingItemIndex: -1
        };

    }

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

        const wrapperEl = this.refs.wrapper,
            offset = Dom.getOffset(wrapperEl),
            {left: minX} = offset,
            wrapperWidth = wrapperEl.getBoundingClientRect().width,
            maxX = minX + wrapperWidth;

        let x = e.clientX,
            y = e.clientY,
            inputIndex = -1;

        while (x >= minX) {

            const item = document.elementFromPoint(x, y),
                wrapperEl = Dom.findParentByClassName(item, 'tag-field-item-wrapper');

            if (wrapperEl) {
                inputIndex = +wrapperEl.dataset.index + 1;
                break;
            }

            x--;

        }

        if (inputIndex < 0) {
            while (x <= maxX) {

                const item = document.elementFromPoint(x, y),
                    wrapperEl = Dom.findParentByClassName(item, 'tag-field-item-wrapper');

                if (wrapperEl) {
                    inputIndex = +wrapperEl.dataset.index;
                    break;
                }

                x++;

            }
        }

        return inputIndex < 0 ? this.state.data.length : inputIndex;

    };

    mouseDownHandler = e => {

        if (this.props.disabled || Dom.findParentByClassName(e.target, 'tag-field-item-wrapper')
            || Dom.hasClass(e.target, 'tag-field-input')) {
            return;
        }

        const callback = (function (e) {

            return () => {

                if (Dom.findParentByClassName(e.target, 'tag-field') != this.refs.wrapper || this.state.itemEditing) {
                    this.setState({
                        inputIndex: this.state.data.length
                    });
                    return;
                }

                let x = e.clientX,
                    y = e.clientY;

                if (!x || !y) {
                    return;
                }

                const wrapperEl = this.refs.wrapper,
                    offset = Dom.getOffset(wrapperEl);

                if (!offset) {
                    return;
                }

                const inputIndex = this.calInputIndex(e);

                this.setState({
                    inputIndex
                }, () => {
                    setTimeout(() => {
                        this.refs.input.focus();
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

    inputChangeHandler = e => {

        if (this.props.disabled) {
            return;
        }

        const inputValue = e.target.value;

        this.setState({
            inputValue
        }, () => {

            const width = CharSize.calculateStringWidth(inputValue, this.refs.test);
            this.refs.inputWrapper.style.width = `${width + 9}px`;

            const {onInputChange} = this.props;
            onInputChange && onInputChange(inputValue);

        });

    };

    inputKeyDownHandler = e => {

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

        const {separator} = this.props,
            {data, inputValue, inputIndex} = this.state;

        if (!inputValue) {
            return;
        }

        const splitedValue = trim(inputValue).split(separator).filter(item => !!item);

        data.splice(inputIndex, 0, ...splitedValue);

        this.setState({
            data,
            inputValue: '',
            inputIndex: inputIndex + splitedValue.length
        }, () => {

            this.refs.inputWrapper.style.width = '9px';

            const {onChange} = this.props;
            onChange && onChange(data);

            callback && callback();

        });

    };

    itemChangeHandler = (value, index) => {

        if (this.props.disabled) {
            return;
        }

        const {separator} = this.props,
            {data} = this.state;

        if (value) {
            const splitedValue = value.split(separator).filter(item => item);
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

    itemEditStartHandler = editingItemIndex => {

        if (this.props.disabled) {
            return;
        }

        this.setState({
            itemEditing: true,
            editingItemIndex
        });

    };

    itemEditEndHandler = () => {

        if (this.props.disabled) {
            return;
        }

        this.setState({
            itemEditing: false
        });

    };

    clearHandler = () => {

        this.setState({
            data: [],
            inputValue: '',
            inputIndex: 0,
            itemEditing: false,
            editingItemIndex: -1
        }, () => {

            const {onChange, onInputChange} = this.props;

            onChange && onChange([]);
            onInputChange && onInputChange('');

        });

    };

    componentDidMount() {
        Event.addEvent(document, 'mousedown', this.mouseDownHandler);
    }

    componentWillReceiveProps(nextProps) {

        let state;

        if (nextProps.data !== this.state.data) {
            if (!state) {
                state = {};
            }
            state.data = nextProps.data;
        }

        if (nextProps.inputValue !== this.state.inputValue) {
            if (!state) {
                state = {};
            }
            state.inputValue = nextProps.inputValue;
        }

        this.setState(state);

    }

    componentWillUnmount() {
        Event.removeEvent(document, 'mousedown', this.mouseDownHandler);
    }

    render() {

        const {
                className, style, valueField, displayField, disabled,
                placeholder, clearButtonVisible, isTagAutoWidth
            } = this.props,
            {data, inputValue, inputIndex, itemEditing, editingItemIndex} = this.state,

            fieldClassName = classNames('tag-field', {
                'with-clear': clearButtonVisible,
                [className]: className
            }),

            indexData = Util.genIndexArray(data.length);

        indexData.splice(inputIndex, 0, this.inputSymbol);

        return (
            <div ref="wrapper"
                 className={fieldClassName}
                 style={style}
                 disabled={disabled}
                 onWheel={e => Event.wheelHandler(e, this.props)}>

                {
                    indexData.map(index => index === this.inputSymbol ?
                        !disabled ?
                            <div key="input"
                                 ref="inputWrapper"
                                 className="tag-field-input-wrapper">
                                <input ref="input"
                                       className="tag-field-input"
                                       autoFocus="true"
                                       value={inputValue}
                                       placeholder={data.length < 1 && placeholder ? placeholder : ''}
                                       onChange={this.inputChangeHandler}
                                       onKeyDown={this.inputKeyDownHandler}/>
                            </div>
                            :
                            null
                        :
                        <span key={index}
                              data-index={index}
                              className={'tag-field-item-wrapper' + (data[index].className ? ' ' + data[index].className : '')}>
                            <EditableField className="tag-field-item-field"
                                           value={Util.getTextByDisplayField(data[index], displayField, valueField)}
                                           disabled={disabled || (itemEditing && index !== editingItemIndex)}
                                           autoWidth={isTagAutoWidth}
                                           onChange={value => this.itemChangeHandler(value, index)}
                                           onEditStart={() => this.itemEditStartHandler(index)}
                                           onEditEnd={this.itemEditEndHandler}>

                                <IconButton className="tag-field-item-field-delete-button"
                                            iconCls="fas fa-times"
                                            disabled={disabled || (itemEditing && index !== editingItemIndex)}
                                            onTouchTap={() => this.removeItem(index)}/>

                            </EditableField>
                        </span>
                    )
                }

                {
                    clearButtonVisible ?
                        <IconButton className="tag-field-clear-button"
                                    iconCls="fas fa-trash-alt"
                                    onTouchTap={this.clearHandler}/>
                        :
                        null
                }

                <div ref="test"
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
    separator: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    clearButtonVisible: PropTypes.bool,
    shouldPreventContainerScroll: PropTypes.bool,
    isTagAutoWidth: PropTypes.bool,

    onChange: PropTypes.func,
    onInputChange: PropTypes.func,

    /**
     * Callback function fired when wrapper wheeled.
     */
    onWheel: PropTypes.func

};

TagField.defaultProps = {

    data: [],
    inputValue: '',

    valueField: 'value',
    displayField: 'text',
    separator: /\s*,\s*/,

    disabled: false,

    placeholder: '',
    clearButtonVisible: true,
    shouldPreventContainerScroll: true,
    isTagAutoWidth: true

};

export default TagField;