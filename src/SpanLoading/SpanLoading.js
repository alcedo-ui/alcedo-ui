/**
 * @file SpanLoading component
 * @author wendy(wendy.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Vendors
import classNames from 'classnames';
import ComponentUtil from '../_vendors/ComponentUtil';

class SpanLoading extends Component {

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            spanning: ComponentUtil.getDerivedState(props, state, 'spanning')
        };
    }

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            spanning: props.spanning
        };

    }

    render() {

        const {className, style, description, size, children} = this.props,
            {spanning} = this.state;

        return (
            <div className={classNames('span-loading', {
                [`span-loading-${size}`]: size,
                [className]: className
            })}
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
                        <div className="span-loading-text">
                            {description}
                        </div>
                        :
                        null
                }

            </div>
        );
    }
}

SpanLoading.propTypes = {

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

    description: PropTypes.any

};

SpanLoading.defaultProps = {
    spanning: true,
    tip: '',
    type: ''
};

export default SpanLoading;
