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
            className, style
        } = this.props;

        return (
            <div className={classNames('skeleton-loading', {
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
    style: PropTypes.object

};

SkeletonLoading.defaultProps = {};

export default SkeletonLoading;
