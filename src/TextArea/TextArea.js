/**
 * @file TextArea component
 * @author chao(chao.zhang@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Event from '../_vendors/Event';

export default class TextArea extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            focus: false,
            width: props.initialWidth,
            height: props.initialHeight,
            value: props.value
        };

        this.onFocus = ::this.onFocus;
        this.onBlur = ::this.onBlur;
        this.onChange = ::this.onChange;
        this.resizeHandle = ::this.resizeHandle;
        this.mouseUpHandle = ::this.mouseUpHandle;

    }

    onFocus() {
        this.setState({
            focus: true
        }, () => {
            this.props.onFocus && this.props.onFocus();
        });
    }

    onBlur() {
        this.setState({
            focus: false
        }, () => {
            this.props.onBlur && this.props.onBlur();
        });
    }

    /**
     * 根据textArea的宽高设置state中宽高
     */
    resizeHandle(e) {
        this.setState({
            width: e.target.offsetWidth,
            height: e.target.offsetHeight
        });
    }

    /**
     * mouseUp时，若textArea的宽高右边，则resizeHandle
     */
    mouseUpHandle(e) {
        if (e.target.offsetWidth !== this.state.width || e.target.offsetHeight !== this.state.height) {
            this.resizeHandle(e);
        }
    }

    /**
     * input变化时，如果为autoSize，则控制高度，使之随内容变化而变化
     */

    onChange() {
        const {initialHeight, maxHeight, autoSize} = this.props;

        if (autoSize) {
            const {style} = this.refs.textarea;
            style.height = initialHeight + 'px';
            style.overflow = 'hidden';

            if (initialHeight < this.refs.textarea.scrollHeight + 2) {
                if (maxHeight && maxHeight > this.refs.textarea.scrollHeight + 2) {
                    style.height = this.refs.textarea.scrollHeight + 2 + 'px';
                } else {
                    style.height = maxHeight + 'px';
                    style.overflow = 'auto';
                }
            }
        }

        this.setState({
            value: this.refs.textarea.value
        }, () => {
            this.props.onChange && this.props.onChange(this.refs.textarea.value);
        });
    }

    componentWillReceiveProps(nextProps) {
        const {width, height, value} = this.state;

        if (nextProps.initialWidth !== width || nextProps.initialHeight !== height || nextProps.value !== value) {
            this.setState({
                width: nextProps.initialWidth,
                height: nextProps.initialHeight,
                value: nextProps.value
            }, () => {
                this.onChange()
            });
        }
    }

    componentDidMount() {
        const {autoSize, autoFocus} = this.props;

        if (!autoSize) {
            Event.addEvent(this.refs.textarea, 'mouseup', this.mouseUpHandle);
        }

        if (autoFocus === true) {
            this.refs.textarea.focus();
        }
    }

    componentWillUnmount() {
        const {autoSize} = this.props;

        if (!autoSize) {
            Event.removeEvent(this.refs.textarea, 'mouseup', this.mouseUpHandle);
        }
    }

    render() {

        const {className, style, cols, rows, autoSize, placeholder, maxWidth} = this.props,
            {focus, width, height, value} = this.state,

            textStyle = {
                height: height,
                width: width,
                overflow: autoSize ? 'hidden' : 'auto',
                resize: autoSize ? 'none' : 'both',
                maxWidth: maxWidth,
                ...style
            };

        return (
            <textarea ref="textarea"
                      className={`text-area ${focus ? 'area-focus' : ''} ${className}`}
                      style={{...textStyle}}
                      cols={cols}
                      rows={rows}
                      placeholder={placeholder}
                      value={value}
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      onFocus={this.onFocus}
                      onBlur={this.onBlur}
                      onChange={this.onChange}></textarea>
        );

    }
};

TextArea.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The number of cols.
     */
    cols: PropTypes.number,

    /**
     * The number of rows.
     */
    rows: PropTypes.number,

    /**
     * The initial height of textArea.
     */
    initialHeight: PropTypes.number,

    /**
     * The initial height of textArea.
     */
    initialWidth: PropTypes.number,

    /**
     * The value of textArea.
     */
    value: PropTypes.string,

    /**
     * The max height of textArea.
     */
    maxHeight: PropTypes.number,

    /**
     * The max width of textArea.
     */
    maxWidth: PropTypes.number,

    /**
     * If true, the textArea will change its size by words.
     */
    autoSize: PropTypes.bool,

    /**
     * If true,the textField will autoFocus.
     */
    autoFocus: PropTypes.bool,

    /**
     * The placeholder of textArea.
     */
    placeholder: PropTypes.string,

    /**
     * When the value of textArea change, it will execute.
     */
    onChange: PropTypes.func,

    /**
     * When the textArea onBlur, it will execute.
     */
    onBlur: PropTypes.func,

    /**
     * When the textArea onFocus, it will execute.
     */
    onFocus: PropTypes.func

};

TextArea.defaultProps = {

    className: '',
    style: null,

    cols: 50,
    rows: 3,
    initialHeight: 30,
    initialWidth: 200,
    maxHeight: 100,
    maxWidth: 500,
    autoSize: true,
    autoFocus: false,
    placeholder: 'Please input something.',
    value: ''

};