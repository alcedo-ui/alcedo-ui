/**
 * @file RemoteAutoComplete component
 * @author chao(chao.zhang@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';
import debounce from 'lodash/debounce';
import classNames from 'classnames';

import TextField from '../TextField/TextField';
import CircularLoading from '../CircularLoading/CircularLoading';
import Popup from '../Popup';

import Event from '../_vendors/Event';
import ComponentUtil from '../_vendors/ComponentUtil';

class RemoteAutoComplete extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.liHeight = 40;
        this.maxHeight = 401;
        this.inputHeight = 50;
        this.borderWidth = 1;
        this.trigger = createRef();
        this.triggerEl = null;

        this.state = {
            value: props.value,
            focus: false,
            loading: props.loading
        };

    }

    /**
     * 获取当前元素及父元素的类名
     */
    getClassName = element => {
        let className = element.className;
        let current = element.offsetParent;
        while (current !== null) {
            className += current.className;
            current = current.offsetParent;
        }
        return className;
    };

    /**
     * input变化时改变loading状态并触发onChange
     */
    changeText = text => {
        this.setState({
            value: text
        }, () => {
            this.setState({
                loading: true
            }, () => {
                const {onChange} = this.props;
                onChange && onChange(text, true);
            });
        });
    };

    handleChange = debounce((text) => {
        this.changeText(text);
    }, 250);

    handleFocus = () => {
        this.setState({
            focus: true
        }, () => {
            const {onFocus} = this.props;
            onFocus && onFocus();
        });
    };

    handleClick = ev => {
        const {onBlur} = this.props;
        const className = this.getClassName(ev.target);

        if (className.indexOf('auto-complete-li') > -1) {
            let oEvent = ev.srcElement ? ev.srcElement : ev.target;
            this.setState({
                focus: true
            }, () => {
                const {onChange} = this.props;
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
    };

    componentDidMount() {
        this.triggerEl = this.trigger && this.trigger.current && findDOMNode(this.trigger.current);
        Event.addEvent(document, 'click', this.handleClick);
    }

    componentWillUnmount() {
        Event.removeEvent(document, 'click', this.handleClick);
        if (this.handleChange) {
            this.handleChange.cancel();
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            value: ComponentUtil.getDerivedState(props, state, 'value'),
            loading: ComponentUtil.getDerivedState(props, state, 'loading')
        };
    }

    render() {

        const {data, className, style, placeholder, resetPopPositionWait, parentEl} = this.props,
            {value, focus, loading} = this.state,
            ulHeight = loading ? 50 : ((data.length > 0) ? data.length * this.liHeight + this.borderWidth : 0);

        return (
            <div className={classNames('remote-auto-complete', {
                [className]: className
            })}
                 style={style}>

                <div className={classNames('auto-complete-inner', {
                    focused: focus
                })}
                     style={{
                         height: this.inputHeight
                     }}>

                    <TextField ref={this.trigger}
                               style={{
                                   height: this.inputHeight
                               }}
                               value={value}
                               onFocus={this.handleFocus}
                               placeholder={placeholder}
                               onChange={this.handleChange}/>

                    <Popup visible={focus}
                           triggerEl={this.triggerEl}
                           parentEl={parentEl}
                           hasTriangle={false}
                           style={{width: this.triggerEl && getComputedStyle(this.triggerEl).width}}
                           resetPositionWait={resetPopPositionWait}>
                        <ul className="auto-complete-list"
                            style={{
                                height: ulHeight > this.maxHeight ? this.maxHeight : ulHeight
                            }}>
                            {
                                loading ?
                                    <li className="auto-complete-li-loading">
                                        <CircularLoading className="loading"
                                                         size={CircularLoading.Size.DEFAULT}/>
                                    </li>
                                    :
                                    data && data.map(value =>
                                        <li key={value}
                                            className="auto-complete-li"
                                            style={{
                                                height: this.liHeight,
                                                lineHeight: this.liHeight + 'px'
                                            }}
                                            title={value}>
                                            {value}
                                        </li>
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

    resetPopPositionWait: PropTypes.number,
    parentEl: PropTypes.object,

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
    loading: false,
    resetPopPositionWait: 250
};

export default RemoteAutoComplete;
