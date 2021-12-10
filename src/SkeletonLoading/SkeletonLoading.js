/**
 * @file SkeletonLoading component
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Vendors
import classNames from 'classnames';
import {hex2rgb} from '../_vendors/Color';

class SkeletonLoading extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {
            className, style,
            size, animationDuration, highlightColor, highlightDegree, highlightTransparency,
            isCircular, isAnimated
        } = this.props;

        const highlightColorRgb = hex2rgb(highlightColor)?.join(',') || '255,255,255';

        return (
            <div className={classNames('skeleton-loading', {
                circular: isCircular,
                animated: isAnimated,
                [className]: className
            })}
                 style={{
                     ...style,
                     width: !isNaN(size) ?
                         isCircular ?
                             size
                             :
                             null
                         :
                         null,
                     height: !isNaN(size) ?
                         size
                         :
                         null,
                     backgroundImage: !isNaN(highlightDegree) && highlightColorRgb && !isNaN(highlightTransparency) ?
                         `linear-gradient(${highlightDegree}deg, rgba(${highlightColorRgb}, 0) 40%, rgba(${highlightColorRgb}, ${highlightTransparency}) 50%, rgba(${highlightColorRgb}, 0) 60%)`
                         :
                         null,
                     animationDuration: !isNaN(animationDuration) ?
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

    size: PropTypes.number,
    animationDuration: PropTypes.number,
    highlightColor: PropTypes.string,
    highlightDegree: PropTypes.number,
    highlightTransparency: PropTypes.number,

    isCircular: PropTypes.bool,
    isAnimated: PropTypes.bool

};

SkeletonLoading.defaultProps = {

    size: 24,
    highlightColor: '#fff',
    highlightDegree: 100,
    highlightTransparency: .4,

    isCircular: false,
    isAnimated: true

};

export default SkeletonLoading;
