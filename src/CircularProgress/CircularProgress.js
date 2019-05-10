/**
 * @file CircularProgress component
 * @author chao(chao.zhang@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Percent from '../_Percent';

class CircularProgress extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            percent: [0, 0]
        };

    }

    render() {

        const {children, className, style, r, width, word, percent, percentStyle} = this.props,

            l = 2 * r * Math.PI,
            svgStyle = {
                ...style,
                width: (r + width) * 2,
                height: (r + width) * 2
            };

        return (
            <div className={classNames('circular-progress', {
                [className]: className
            })}
                 style={svgStyle}>

                <svg className="circular-progress-svg">
                    <circle className="circular-progress-circle"
                            cx={r + width}
                            cy={r + width}
                            r={r}
                            strokeWidth={width}
                            fill="none"
                            style={{
                                strokeDasharray: percent / 100 * l + ',' + l
                            }}>
                    </circle>
                </svg>

                {
                    word ?
                        <Percent endNum={percent}
                                 style={percentStyle}>
                            {children}
                        </Percent>
                        :
                        null
                }

            </div>
        );
    }

}

CircularProgress.propTypes = {

    children: PropTypes.any,

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
    // rgba: PropTypes.string,

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

    percentStyle: {},
    r: 48,
    width: 2,
    // rgba: 'rgb(0, 188, 212)',
    percent: 0,
    word: true

};

export default CircularProgress;
