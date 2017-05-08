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

            if (initialHeight < target.scrollHeight - 8) {
                if (maxHeight && maxHeight > target.scrollHeight - 8) {
                    style.height = target.scrollHeight - 8 + 'px';
                } else {
                    style.height = maxHeight + 'px';
                }
            }
        }
    }

    render() {
        const {className, style, cols, rows, initialHeight} = this.props;
        const {focus} = this.state;

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
                          style={{height: initialHeight}}>
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
     * The number of height.
     */
    initialHeight: PropTypes.number,

    /**
     * Max of height.
     */
    maxHeight: PropTypes.number,

    /**
     * Max of height.
     */
    autoSize: PropTypes.bool
};

TextArea.defaultProps = {
    className: '',
    style: {},
    cols: 50,
    rows: 3,
    initialHeight: 20,
    maxHeight: 100,
    autoSize: true
};