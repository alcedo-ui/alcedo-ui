/**
 * Created by DT314 on 2017/5/15.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Event from '../_vendors/Event';

import TextField from '../TextField/TextField';
import CircularLoading from '../CircularLoading/CircularLoading';

import './AutoComplete.css';

export default class AutoComplete extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value,
            focus: false,
            loading: props.loading
        };

        this.liHeight = 40;
        this.maxHeight = 401;
        this.inputHeight = 50;
        this.borderWidth = 1;

        this.onChange = this :: this.onChange;
        this.onClick = this :: this.onClick;
        this.getClassName = this :: this.getClassName;
        this.onFocus = this :: this.onFocus;

    }

    /**
     * 获取当前元素及父元素的类名
     */
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

        this.setState({
            value: text
        }, () => {
            this.setState({
                loading: true
            }, () => {
                onChange && onChange(text, true);
            });
        });
    }

    onFocus() {
        const {onFocus} = this.props;

        this.setState({
            focus: true
        }, () => {
            onFocus && onFocus();
        });
    }

    /**
     * 点击下拉选项时自动填充且不再auto complete
     */
    onClick(ev) {
        const {onBlur} = this.props;
        const className = this.getClassName(ev.target);

        if (className.indexOf('auto-complete-li') > -1) {
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
                onBlur && onBlur(this.state.value);
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        const {value, loading} = this.state;

        if (nextProps.value !== value || nextProps.loading !== loading) {
            this.setState({
                value: nextProps.value,
                loading: nextProps.loading
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
        const {data, className, style, placeholder} = this.props;
        const {value, focus, loading} = this.state;
        const {liHeight, maxHeight, inputHeight, borderWidth} = this;

        let ulHeight = loading ? 50 : ((data.length > 0) ? data.length * liHeight + borderWidth : 0);
        let ulStyle = {
            height: ulHeight > maxHeight ? maxHeight : ulHeight
        }, innerStyle = {
            height: ulStyle.height + inputHeight
        }, liStyle = {
            height: liHeight,
            lineHeight: liHeight + 'px'
        }, inputStyle = {
            height: inputHeight
        };

        return (
            <div className={`auto-complete ${className}`}
                 style={style}>
                <div className={`auto-complete-inner ${focus === true ? 'focused' : ''}`}
                     style={innerStyle}>
                    <TextField onChange={this.onChange}
                               value={value}
                               onFocus={this.onFocus}
                               placeholder={placeholder}
                               style={inputStyle}/>
                    <ul style={ulStyle}>
                        {
                            loading
                                ?
                                <li className="auto-complete-li-loading"><CircularLoading className="loading"
                                                                                          size={CircularLoading.Size.DEFAULT}/>
                                </li>
                                :
                                (
                                    data.length > 0
                                        ?
                                        (
                                            data.map((value) => {
                                                return <li className="auto-complete-li"
                                                           key={value}
                                                           style={liStyle}>{value}</li>;
                                            })
                                        )
                                        : null
                                )
                        }
                    </ul>
                </div>
            </div>
        );
    }
};

AutoComplete.propTypes = {

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
     * If true, the list is loading.
     */
    loading: PropTypes.bool,

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

AutoComplete.defaultProps = {
    className: '',
    style: {},

    value: '',
    data: [],
    searchLength: 1,
    loading: false
};