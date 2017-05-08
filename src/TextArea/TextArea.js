/**
 * Created by DT314 on 2017/5/5.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';


import './TextArea.css';

export default class TextArea extends Component {
    constructor(props) {
        super();

        this.state = {
            focus: false
        };

        this.onFocus = this :: this.onFocus;
        this.onBlur = this :: this.onBlur;
        this.onChange = this :: this.onChange;

    }

    onFocus() {
        this.setState({
            focus: true
        });
    }

    onBlur() {
        this.setState({
            focus: false
        });
    }

    onChange(ev) {
        const {initialHeight, maxHeight, autoSize} = this.props;

        if (autoSize) {
            const oEvent = ev || event;
            const {target} = oEvent;
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
    }

    render() {
        const {className, style, cols, rows, initialHeight, autoSize} = this.props;
        const {focus} = this.state;

        let textStyle = {
            height: initialHeight,
            overflow: autoSize ? 'hidden' : 'auto'
        };

        return (
            <div className={`text-area ${className}`}
                 style={style}>
                <textarea cols={cols}
                          rows={rows}
                          placeholder="Please input something."
                          onFocus={this.onFocus}
                          onBlur={this.onBlur}
                          onChange={this.onChange}
                          className={focus ? 'area-focus' : ''}
                          style={{...textStyle}}>
                </textarea>
            </div>
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
     * The max height of textArea.
     */
    maxHeight: PropTypes.number,

    /**
     * If true, the textArea will change its size by words.
     */
    autoSize: PropTypes.bool
};

TextArea.defaultProps = {

    className: '',
    style: null,

    cols: 50,
    rows: 3,
    initialHeight: 30,
    maxHeight: 100,
    autoSize: true

};