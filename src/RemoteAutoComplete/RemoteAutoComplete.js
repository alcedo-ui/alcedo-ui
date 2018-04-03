/**
 * @file RemoteAutoComplete component
 * @author chao(chao.zhang@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import classNames from 'classnames';

import TextField from '../TextField/TextField';
import CircularLoading from '../CircularLoading/CircularLoading';
import Popup from '../Popup';

import PureRender from '../_vendors/PureRender';
import Event from '../_vendors/Event';

@PureRender
class RemoteAutoComplete extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: props.value,
            focus: false,
            loading: props.loading
        };

        this.liHeight = 40;
        this.maxHeight = 401;
        this.inputHeight = 50;
        this.borderWidth = 1;

        this.changeText = ::this.changeText;
        this.onChange = ::this.onChange;
        this.onClick = ::this.onClick;
        this.getClassName = ::this.getClassName;
        this.onFocus = ::this.onFocus;

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

    /**
     * input变化时改变loading状态并触发onChange
     */
    changeText(text) {
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

    onChange = debounce((text) => {
        this.changeText(text);
    }, 250);

    /**
     * 获得焦点时触发onFocus
     */
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

    /**
     * 接收新的props，如果input或loading有变化，则setState
     */
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
        this.triggerEl = require('react-dom').findDOMNode(this.refs.trigger);
    }

    componentWillUnmount() {
        Event.removeEvent(document, 'click', this.onClick);
    }

    render() {

        const {data, className, style, placeholder} = this.props,
            {value, focus, loading} = this.state,
            {liHeight, maxHeight, inputHeight, borderWidth} = this,

            fieldClassName = classNames('remote-auto-complete', {
                [className]: className
            }),

            innerClassName = classNames('auto-complete-inner', {
                focused: focus
            }),

            ulHeight = loading ? 50 : ((data.length > 0) ? data.length * liHeight + borderWidth : 0),

            ulStyle = {
                height: ulHeight > maxHeight ? maxHeight : ulHeight
            },
            innerStyle = {
                height: inputHeight
            },
            liStyle = {
                height: liHeight,
                lineHeight: liHeight + 'px'
            },
            inputStyle = {
                height: inputHeight
            };

        return (
            <div className={fieldClassName}
                 style={style}>

                <div className={innerClassName}
                     style={innerStyle}>

                    <TextField ref="trigger"
                               style={inputStyle}
                               value={value}
                               onFocus={this.onFocus}
                               placeholder={placeholder}
                               onChange={this.onChange}/>

                    <Popup visible={focus}
                           triggerEl={this.triggerEl}
                           hasTriangle={false}
                           style={{width: this.triggerEl && getComputedStyle(this.triggerEl).width}}>
                        <ul className="auto-complete-list"
                            style={ulStyle}>
                            {
                                loading ?
                                    <li className="auto-complete-li-loading">
                                        <CircularLoading className="loading"
                                                         size={CircularLoading.Size.DEFAULT}/>
                                    </li>
                                    :
                                    data && data.map(value =>
                                        <li className="auto-complete-li"
                                            key={value}
                                            style={liStyle}
                                            title={value}>{value}</li>
                                    )
                            }
                        </ul>
                    </Popup>

                </div>
            </div>
        );
    }
}

RemoteAutoComplete.propTypes = {

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

RemoteAutoComplete.defaultProps = {
    value: '',
    data: [],
    searchLength: 1,
    loading: false
};

export default RemoteAutoComplete;