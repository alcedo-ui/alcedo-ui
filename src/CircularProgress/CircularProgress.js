/**
 * Created by DT314 on 2017/4/7.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Percent from './Percent';

import './CircularProgress.css';

export default class CircularProgress extends Component {
    constructor(props) {
        super();

        this.state = {
            percent: [0, 0]
        };
    }

    render() {
        const {r, width, rgba, word, percent, style, percentStyle} = this.props;

        const l = 2 * this.props.r * Math.PI;
        const circleStyle = {
            strokeDasharray: this.props.percent / 100 * l + ',' + l
        }, svgStyle = {
            width: (r + width) * 2,
            height: (r + width) * 2,
            ...style
        };

        return (
            <div className="circular-progress"
                 style={svgStyle}>
                <svg className="circular-progress-svg">
                    <circle className="circular-progress-circle"
                            cx={r + width}
                            cy={r + width}
                            r={r}
                            strokeWidth={width}
                            stroke={rgba}
                            fill="none"
                            style={circleStyle}></circle>
                </svg>
                {
                    word
                        ? <Percent endNum={percent}
                                   style={percentStyle}>{this.props.children}</Percent>
                        : null
                }
            </div>
        );
    }

};

CircularProgress.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The style of the percent text description.
     */
    percentStyle: PropTypes.object,

    /**
     * The radius of the progress in pixels.
     */
    r: PropTypes.number,

    /**
     * Stroke width in pixels.
     */
    width: PropTypes.number,

    /**
     * Override the progress's color.
     */
    rgba: PropTypes.string,

    /**
     * The value of progress.
     */
    percent: PropTypes.number,

    /**
     * If true,there will have a text description.
     */
    word: PropTypes.bool
};

CircularProgress.defaultProps = {
    className: '',
    style: {},

    percentStyle: {},
    r: 48,
    width: 2,
    rgba: 'rgb(0, 188, 212)',
    percent: 0,
    word: true
};

