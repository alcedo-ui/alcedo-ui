/**
 * @file SpanLoading component
 * @author wendy(wendy.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class SpanLoading extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            spanning: props.spanning
        };

    }

    componentWillReceiveProps(nextProps) {

        const spanning = nextProps.spanning;
        const {delay} = this.props;

        if (spanning && delay && !isNaN(Number(delay))) {
            this.delayTimeout = setTimeout(() => this.setState({spanning}), delay);
        } else {
            this.setState({spanning});
        }

    }

    componentWillUnmount() {
        this.delayTimeout && clearTimeout(this.delayTimeout);
    }

    render() {

        const {className, style, description, size, children} = this.props,
            {spanning} = this.state,

            loadingClassName = classNames('span-loading', {
                [`span-loading-${size}`]: size,
                [className]: className
            });

        return (
            <div className={loadingClassName}
                 style={style}>

                {
                    spanning ?
                        <span className={`span-loading-dot ${size ? size : ''}`}>
                            <i/><i/><i/><i/>
                        </span>
                        :
                        null

                }

                {children}

                {
                    description ?
                        <div className={`span-loading-text`}>{description}</div>
                        :
                        null
                }

            </div>
        );
    }
}

SpanLoading.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * If true,will show a span loading animation.
     */
    spanning: PropTypes.bool,

    /**
     * Set the tip text,there will be a description under the loading.
     */
    tip: PropTypes.string,

    /**
     * Set the size of loading,can use small or large.
     */
    size: PropTypes.string,

    /**
     * Set the delay time of loading animation.
     */
    delay: PropTypes.number

};

SpanLoading.defaultProps = {
    spanning: true,
    tip: '',
    type: ''
};

export default SpanLoading;