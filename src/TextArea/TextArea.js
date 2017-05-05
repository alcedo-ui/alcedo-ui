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
        let oEvent = ev || event;
        const {offsetHeight, scrollHeight} = oEvent.target;
        if (offsetHeight < scrollHeight) {
            oEvent.target.style.height = scrollHeight + 'px';
        }
    }

    render() {
        const {className, style, cols, rows} = this.props;
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
                          className={focus ? 'area-focus' : ''}>
                </textarea>
            </div>
        );
    }
};

TextArea.PropTypes = {
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
    rows: PropTypes.number
};

TextArea.defaultProps = {
    className: '',
    style: {},
    cols: 20,
    rows: 3
};