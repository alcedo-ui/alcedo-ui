/**
 * @file Percent component
 * @author chao(chao.zhang@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Percent extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            percent: 0
        };

    }

    /**
     * 百分比数字递增
     */
    numberChange() {
        if (this.state.percent < 100) {
            if (this.state.percent < this.props.endNum) {
                this.setState({
                    percent: this.state.percent + 1
                });
                const time = 300 / (this.props.endNum - this.state.percent);
                this.timer = setTimeout(() => this.numberChange(), time);
                return;
            }
            this.timer = setTimeout(() => this.numberChange(), 30);
        }
    }

    componentDidMount() {
        this.timer = setTimeout(() => this.numberChange(), 30);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {

        const {move, endNum, style, className} = this.props,
            {percent} = this.state;

        const widthStyle = move === true ? {
            width: endNum + '%',
            textAlign: 'right',
            ...style
        } : {
            ...style
        };

        return (
            <div>
                <div className={`circular-progress-percent ${className}`}
                     style={widthStyle}>
                    {React.Children.map(this.props.children, function (child) {
                        return <span>{child}</span>;
                    })}
                    <span>{percent}%</span>
                </div>
            </div>
        );

    }
};

Percent.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,

    endNum: PropTypes.number,
    move: PropTypes.bool
};

Percent.defaultProps = {
    className: '',
    style: {},

    endNum: 100,
    move: false
};