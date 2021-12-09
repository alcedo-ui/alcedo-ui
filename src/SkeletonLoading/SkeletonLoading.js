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
            className, style, isCircular
        } = this.props;

        return (
            <div className={classNames('skeleton-loading', {
                circular: isCircular,
                [className]: className
            })}
                 style={style}/>
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

    isCircular: PropTypes.bool

};

SkeletonLoading.defaultProps = {
    isCircular: false
};

export default SkeletonLoading;
