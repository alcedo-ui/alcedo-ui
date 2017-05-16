/**
 * Created by DT314 on 2017/5/15.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Event from '../_vendors/Event';

import TextField from '../TextField/TextField';
import './OutComplete.css';

export default class OutComplete extends Component {
    constructor(props) {
        super();

        this.state = {
            value: props.value,
            focus: false
        };

        this.liHeight = 25;
        this.maxHeight = 251;
        this.inputHeight = 50;
        this.borderWidth = 1;

        this.onChange = this :: this.onChange;
        this.onClick = this :: this.onClick;
        this.getClassName = this :: this.getClassName;
        this.onFocus = this :: this.onFocus;

    }

    getClassName(element) {
        let className = element.className;
        let current = element.offsetParent;
        while (current !== null) {
            className += current.className;
            current = current.offsetParent;
        }
        return className;
    }

    onChange(text) {
        const {onChange} = this.props;

        onChange && onChange(text, true);
    }

    onFocus() {
        const {onFocus} = this.props;

        this.setState({
            focus: true
        }, () => {
            onFocus && onFocus();
        });
    }

    onClick(ev) {
        const {onBlur} = this.props;
        const className = this.getClassName(ev.target);

        if (className.indexOf('out-complete-li') > -1) {
            const {onChange} = this.props;
            let oEvent = ev.srcElement ? ev.srcElement : ev.target;

            this.setState({
                focus: true
            }, () => {
                onChange && onChange(oEvent.innerText, false);
            });
        } else if (className.indexOf('text-field') > -1) {
            return false;
        } else {
            this.setState({
                focus: false
            }, () => {
                onBlur && onBlur();
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        const {value} = this.state;

        if (nextProps.value !== value) {
            this.setState({
                value: nextProps.value
            });
        }
    }

    componentDidMount() {
        Event.addEvent(document, 'click', this.onClick);
    }

    componentWillUnmount() {
        Event.removeEvent(document, 'click', this.onClick);
    }

    render() {
        const {data, searchLength, className, style, placeholder} = this.props;
        const {value, focus} = this.state;
        const {liHeight, maxHeight, inputHeight, borderWidth} = this;

        let ulHeight = (data.length > 0 && value.length >= searchLength) ? data.length * liHeight + borderWidth : 0;
        let ulStyle = {
            height: ulHeight > maxHeight ? maxHeight : ulHeight,
            maxHeight: maxHeight
        }, innerStyle = {
            height: ulStyle.height + inputHeight
        }, liStyle = {
            height: liHeight,
            lineHeight: liHeight + 'px'
        }, inputStyle = {
            height: inputHeight
        };

        return (
            <div className={`out-complete ${className}`}
                 style={style}>
                <div className={`out-complete-inner ${focus === true ? 'focused' : ''}`}
                     style={innerStyle}>
                    <TextField onChange={this.onChange}
                               value={value}
                               onFocus={this.onFocus}
                               placeholder={placeholder}
                               style={inputStyle}/>
                    <ul style={ulStyle}>
                        {
                            data.length > 0 && value.length >= searchLength
                                ?
                                (
                                    data.map((value) => {
                                        return <li className="out-complete-li"
                                                   key={value}
                                                   style={liStyle}>{value}</li>;
                                    })
                                )
                                : null
                        }
                    </ul>
                </div>
            </div>
        );
    }
};

OutComplete.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The value of input.
     */
    value: PropTypes.string,

    /**
     * The options data.
     */
    data: PropTypes.array,

    /**
     * The length of input will be completed.
     */
    searchLength: PropTypes.number,

    /**
     * The placeholder of input.
     */
    placeholder: PropTypes.string,

    /**
     * Callback function fired when value change.
     */
    onChange: PropTypes.func,

    /**
     * Callback function fired when input blur.
     */
    onBlur: PropTypes.func,

    /**
     * Callback function fired when input focus.
     */
    onFocus: PropTypes.func
};

OutComplete.defaultProps = {
    className: '',
    style: {},

    value: '',
    data: [],
    searchLength: 1
};