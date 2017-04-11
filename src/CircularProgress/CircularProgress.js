/**
 * Created by DT314 on 2017/4/7.
 */
import React, {Component, PropTypes} from 'react';

import Percent from './Percent';
import './CircularProgress.css'

export default class CircularProgress extends Component{
    constructor(props) {
        super();
        this.state = {
            percent: [0,0]
        }
    }

    render() {
        const l = 2 * this.props.r * Math.PI;
        const circleStyle = {
            strokeDasharray: this.props.percent / 100 * l + ',' + l
        },svgStyle = {
            width: (this.props.r + this.props.width) * 2,
            height: (this.props.r + this.props.width) * 2,
            ...this.props.style
        };
        return (
            <div className="circular-progress" style={svgStyle}>
                <svg className="circular-progress-svg">
                    <circle className="circular-progress-circle" cx={this.props.r + this.props.width} cy={this.props.r + this.props.width} r={this.props.r} strokeWidth={this.props.width} stroke={this.props.rgba} fill="none" style={circleStyle}>
                    </circle>
                </svg>
                {
                    this.props.word ? <Percent endNum={this.props.percent}/> : ''
                }
            </div>
        )
    }

}

CircularProgress.propTypes = {
    r: PropTypes.number,
    width: PropTypes.number,
    rgba: PropTypes.string,
    percent: PropTypes.number,
    word: PropTypes.bool,
    style: PropTypes.object
};

CircularProgress.defaultProps = {
    r: 48,
    width: 2,
    rgba: 'rgb(0, 188, 212)',
    percent: 0,
    word: true,
    style: {}
};

