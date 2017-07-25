import React, {Component} from 'react';
import PropTypes from 'prop-types';

import EditableField from '../EditableField';

import Util from '../_vendors/Util';
import CharSize from '../_vendors/CharSize';

import './TagField.css';

export default class TagField extends Component {

    constructor(props) {

        super(props);

        this.inputSymbol = Symbol('input');

        this.state = {
            data: props.data,
            inputValue: '',
            inputIndex: props.data.length
        };

        this.mouseDownHandler = this::this.mouseDownHandler;
        this.inputChangeHandler = this::this.inputChangeHandler;
        this.inputKeyDownHandler = this::this.inputKeyDownHandler;

    }

    mouseDownHandler(e) {
        if (e.target == this.refs.wrapper) {
            setTimeout(() => {
                this.refs.input.focus();
            }, 0);
        }
    }

    inputChangeHandler(e) {

        const inputValue = e.target.value;

        this.setState({
            inputValue
        }, () => {
            const width = CharSize.calculateStringWidth(inputValue, this.refs.test);
            this.refs.input.style.width = `${width + 1}px`;
        });

    }

    inputKeyDownHandler(e) {

        if (e.keyCode === 13) {

            const {data, inputValue, inputIndex} = this.state;

            data.splice(inputIndex, 0, {
                value: inputValue
            });

            this.setState({
                data,
                inputValue: '',
                inputIndex: inputIndex + 1
            }, () => {
                const {onChange} = this.props;
                onChange && onChange(data);
            });

        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.data !== this.state.data) {
            this.setState({
                data: nextProps.data
            });
        }
    }

    render() {

        const {className, style, valueField, displayField} = this.props,
            {data, inputValue, inputIndex} = this.state,

            tagFieldClassName = (className ? ' ' + className : '');

        const indexData = Util.genIndexArray(data.length);
        indexData.splice(inputIndex, 0, this.inputSymbol);

        return (
            <div ref="wrapper"
                 className={'tag-field' + tagFieldClassName}
                 style={style}
                 onMouseDown={this.mouseDownHandler}>

                {
                    indexData.map(index => {
                        return index === this.inputSymbol ?
                            (
                                <input key="input"
                                       ref="input"
                                       className="tag-field-input"
                                       autoFocus="true"
                                       value={inputValue}
                                       onChange={this.inputChangeHandler}
                                       onKeyDown={this.inputKeyDownHandler}/>
                            )
                            :
                            (
                                <span key={index}
                                      className="tag-field-item">
                                    <EditableField className="tag-field-item-field"
                                                   value={Util.getTextByDisplayField(data[index], displayField, valueField)}/>
                                    {', '}
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
    onChange: PropTypes.func

};

TagField.defaultProps = {

    className: '',
    style: null,

    data: [],

    valueField: 'value',
    displayField: 'text'

};