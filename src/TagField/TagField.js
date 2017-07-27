import React, {Component} from 'react';
import PropTypes from 'prop-types';

import EditableField from '../EditableField';
import IconButton from '../IconButton';

import Util from '../_vendors/Util';
import Dom from '../_vendors/Dom';
import CharSize from '../_vendors/CharSize';

import './TagField.css';

export default class TagField extends Component {

    constructor(props) {

        super(props);

        this.inputSymbol = Symbol('input');

        this.state = {
            data: props.data,
            inputValue: '',
            inputIndex: props.data.length,
            itemEditing: false,
            editingItemIndex: -1
        };

        this.removeItem = this::this.removeItem;
        this.mouseDownHandler = this::this.mouseDownHandler;
        this.inputChangeHandler = this::this.inputChangeHandler;
        this.inputKeyDownHandler = this::this.inputKeyDownHandler;
        this.inputBlurHandler = this::this.inputBlurHandler;
        this.itemChangeHandler = this::this.itemChangeHandler;
        this.itemEditStartHandler = this::this.itemEditStartHandler;
        this.itemEditEndHandler = this::this.itemEditEndHandler;

    }

    removeItem(index) {

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

    }

    mouseDownHandler(e) {

        if (this.props.disabled) {
            return;
        }

        if (e.target == this.refs.wrapper) {

            if (this.state.itemEditing) {
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

            const {left: minX} = offset,
                wrapperWidth = wrapperEl.getBoundingClientRect().width,
                maxX = minX + wrapperWidth;

            let inputIndex = -1;
            while (x >= minX) {

                const item = document.elementFromPoint(x, y),
                    wrapperEl = Dom.findParent(item, 'tag-field-item-wrapper');

                if (wrapperEl) {
                    inputIndex = +wrapperEl.dataset.index + 1;
                    break;
                }

                x--;

            }

            if (inputIndex < 0) {
                while (x <= maxX) {

                    const item = document.elementFromPoint(x, y),
                        wrapperEl = Dom.findParent(item, 'tag-field-item-wrapper');

                    if (wrapperEl) {
                        inputIndex = +wrapperEl.dataset.index;
                        break;
                    }

                    x++;

                }
            }

            this.setState({
                inputIndex: inputIndex < 0 ? this.state.data.length : inputIndex
            }, () => {
                setTimeout(() => {
                    this.refs.input.focus();
                }, 0);
            });

        }
    }

    inputChangeHandler(e) {

        if (this.props.disabled) {
            return;
        }

        const inputValue = e.target.value;

        this.setState({
            inputValue
        }, () => {
            const width = CharSize.calculateStringWidth(inputValue, this.refs.test);
            this.refs.input.style.width = `${width + 1}px`;
        });

    }

    inputKeyDownHandler(e) {

        if (this.props.disabled) {
            return;
        }

        if (e.keyCode === 13) {
            this.inputBlurHandler();
        }

    }

    inputBlurHandler() {

        if (this.props.disabled) {
            return;
        }

        const {data, inputValue, inputIndex} = this.state;

        if (!inputValue) {
            return;
        }

        const splitedValue = inputValue.split(',').map(value => ({
            value
        }));

        data.splice(inputIndex, 0, ...splitedValue);

        this.setState({
            data,
            inputValue: '',
            inputIndex: inputIndex + splitedValue.length
        }, () => {

            this.refs.input.style.width = '1px';

            const {onChange} = this.props;
            onChange && onChange(data);

        });

    }

    itemChangeHandler(value, index) {

        if (this.props.disabled) {
            return;
        }

        const {data} = this.state;

        if (value) {
            data[index] = value;
        } else {
            data.splice(index, 1);
        }

        this.setState({
            data
        }, () => {
            const {onChange} = this.props;
            onChange && onChange(data);
        });

    }

    itemEditStartHandler(editingItemIndex) {

        if (this.props.disabled) {
            return;
        }

        this.setState({
            itemEditing: true,
            editingItemIndex
        });

    }

    itemEditEndHandler() {

        if (this.props.disabled) {
            return;
        }

        this.setState({
            itemEditing: false
        });

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.data !== this.state.data) {
            this.setState({
                data: nextProps.data
            });
        }
    }

    render() {

        const {className, style, valueField, displayField, disabled} = this.props,
            {data, inputValue, inputIndex, itemEditing, editingItemIndex} = this.state,

            tagFieldClassName = (className ? ' ' + className : '');

        const indexData = Util.genIndexArray(data.length);
        indexData.splice(inputIndex, 0, this.inputSymbol);

        return (
            <div ref="wrapper"
                 className={'tag-field' + tagFieldClassName}
                 style={style}
                 onMouseDown={this.mouseDownHandler}
                 disabled={disabled}>

                {
                    indexData.map(index => {
                        return index === this.inputSymbol ?
                            (
                                !disabled ?
                                    <input key="input"
                                           ref="input"
                                           className="tag-field-input"
                                           autoFocus="true"
                                           value={inputValue}
                                           onChange={this.inputChangeHandler}
                                           onKeyDown={this.inputKeyDownHandler}
                                           onBlur={this.inputBlurHandler}/>
                                    :
                                    null
                            )
                            :
                            (
                                <span key={index}
                                      data-index={index}
                                      className={'tag-field-item-wrapper' + (data[index].className ? ' ' + data[index].className : '')}>
                                    <EditableField className="tag-field-item-field"
                                                   value={Util.getTextByDisplayField(data[index], displayField, valueField)}
                                                   disabled={disabled || (itemEditing && index !== editingItemIndex)}
                                                   onChange={(value) => {
                                                       this.itemChangeHandler(value, index);
                                                   }}
                                                   onEditStart={() => {
                                                       this.itemEditStartHandler(index);
                                                   }}
                                                   onEditEnd={this.itemEditEndHandler}>

                                        <IconButton className="tag-field-item-field-delete-button"
                                                    iconCls="fa fa-times"
                                                    disabled={disabled || (itemEditing && index !== editingItemIndex)}
                                                    onTouchTap={() => {
                                                        this.removeItem(index);
                                                    }}/>

                                    </EditableField>
                                </span>
                            );
                    })
                }

                <div ref="test"
                     className="tag-field-test-container"></div>

            </div>
        );

    }
};

TagField.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     *
     */
    data: PropTypes.array,

    /**
     *
     */
    valueField: PropTypes.string,

    /**
     *
     */
    displayField: PropTypes.string,

    /**
     *
     */
    disabled: PropTypes.bool,

    /**
     *
     */
    onChange: PropTypes.func

};

TagField.defaultProps = {

    className: '',
    style: null,

    data: [],

    valueField: 'value',
    displayField: 'text',

    disabled: false

};