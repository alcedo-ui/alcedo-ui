/**
 * Created by DT314 on 2017/5/5.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Event from '../_vendors/Event';

import './TextArea.css';

export default class TextArea extends Component {
    constructor(props) {
        super();

        this.state = {
            focus: false,
            width: props.initialWidth,
            height: props.initialHeight,
            value: props.value
        };

        this.onFocus = this :: this.onFocus;
        this.onBlur = this :: this.onBlur;
        this.onChange = this :: this.onChange;
        this.resizeHandle = this :: this.resizeHandle;
        this.mouseUpHandle = this :: this.mouseUpHandle;

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

    resizeHandle(e) {
        this.setState({
            width: e.target.clientWidth + 2,
            height: e.target.clientHeight + 2
        });
    }

    mouseUpHandle(e) {
        if (e.target.clientWidth + 2 !== this.state.width || e.target.clientHeight + 2 !== this.state.height) {
            this.resizeHandle(e);
        }
    }

    onChange(ev) {
        const {initialHeight, maxHeight, autoSize} = this.props;
        const oEvent = ev || event;
        const {target} = oEvent;

        if (autoSize) {

            const {style} = target;

            style.height = initialHeight + 'px';
            style.overflow = 'hidden';
            if (initialHeight < target.scrollHeight + 2) {
                if (maxHeight && maxHeight > target.scrollHeight + 2) {
                    style.height = target.scrollHeight + 2 + 'px';
                } else {
                    style.height = maxHeight + 'px';
                    style.overflow = 'auto';
                }
            }
        }

        this.setState({
            value: target.value
        }, () => this.props.onChange && this.props.onChange());

    }

    componentWillReceiveProps(nextProps) {
        const {width, height, value} = this.state;

        if (nextProps.initialWidth !== width || nextProps.initialHeight !== height || nextProps.value !== value) {
            this.setState({
                width: nextProps.initialWidth,
                height: nextProps.initialHeight,
                value: nextProps.value
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
        const {className, style, cols, rows, autoSize, placeholder, maxWidth} = this.props;
        const {focus, width, height, value} = this.state;

        let textStyle = {
            height: height,
            width: width,
            overflow: autoSize ? 'hidden' : 'auto',
            resize: autoSize ? 'none' : 'both',
            maxWidth: maxWidth,
            ...style
        };

        return (
            <textarea cols={cols}
                      rows={rows}
                      placeholder={placeholder}
                      value={value}
                      onFocus={this.onFocus}
                      onBlur={this.onBlur}
                      onChange={this.onChange}
                      className={`text-area ${focus ? 'area-focus' : ''} ${className}`}
                      style={{...textStyle}}
                      ref='textarea'>
            </textarea>
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