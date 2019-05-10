/**
 * @file Percent component
 * @author chao(chao.zhang@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Percent extends Component {

    static Status = {
        LOADING: 'loading',
        SUCCESS: 'success',
        FAILURE: 'failure'
    };

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            percent: 0
        };

    }

    numberChange = () => {
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
    };

    componentDidMount() {
        this.timer = setTimeout(() => this.numberChange(), 30);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {

        const {className, style, move, endNum, status, showIcon, successIcon, failureIcon} = this.props,
            {percent} = this.state;

        return (
            <div className={classNames('circular-progress-percent', {
                [className]: className,
                [status]: status
            })}
                 style={move === true ? {
                     width: endNum + '%',
                     textAlign: 'right',
                     ...style
                 } : style}>

                {React.Children.map(this.props.children, child => <span>{child}</span>)}

                {
                    status === 'loading' ?
                        <span>{percent}%</span>
                        :
                        null
                }

                {
                    showIcon && status === 'success' ?
                        <i className={successIcon || 'fa fa-check-circle'}></i>
                        :
                        null
                }

                {
                    showIcon && status === 'failure' ?
                        <i className={failureIcon || 'fa fa-times-circle'}></i>
                        :
                        null
                }

            </div>
        );

    }
}

Percent.propTypes = {

    children: PropTypes.any,

    className: PropTypes.string,
    style: PropTypes.object,

    /**
     * The status of loading.
     */
    status: PropTypes.oneOf(Object.keys(Percent.Status).map(key => Percent.Status[key])),

    endNum: PropTypes.number,
    move: PropTypes.bool,

    showIcon: PropTypes.string,
    successIcon: PropTypes.string,
    failureIcon: PropTypes.string

};

Percent.defaultProps = {
    endNum: 100,
    move: false
};

export default Percent;
