/**
 * @file Percent component
 * @author chao(chao.zhang@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Percent extends Component {

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

        const {className, style, move, endNum} = this.props,
            {percent} = this.state,

            wrapperClassName = (className ? ' ' + className : ''),
            wrapperStyle = move === true ?
                {
                    width: endNum + '%',
                    textAlign: 'right',
                    ...style
                }
                :
                {...style};

        return (
            <div className={'circular-progress-percent' + wrapperClassName}
                 style={wrapperStyle}>

                {
                    React.Children.map(this.props.children, child => (
                        <span>{child}</span>
                    ))
                }

                <span>{percent}%</span>

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

    className: null,
    style: null,

    endNum: 100,
    move: false

};

export default Percent;