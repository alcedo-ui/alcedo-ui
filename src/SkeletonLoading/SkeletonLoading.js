/**
 * @file SkeletonLoading component
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Vendors
import classNames from 'classnames';

class SkeletonLoading extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {
            className, style,
            isCircular, isAnimated, animationDuration
        } = this.props;

        return (
            <div className={classNames('skeleton-loading', {
                circular: isCircular,
                animated: isAnimated,
                [className]: className
            })}
                 style={{
                     ...style,
                     animationDuration: animationDuration && typeof animationDuration === 'number' ?
                         `${animationDuration}ms`
                         :
                         null
                 }}/>
        );

    }
}

SkeletonLoading.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    isCircular: PropTypes.bool,
    isAnimated: PropTypes.bool,

    animationDuration: PropTypes.number

};

SkeletonLoading.defaultProps = {
    isCircular: false,
    isAnimated: true
};

export default SkeletonLoading;
