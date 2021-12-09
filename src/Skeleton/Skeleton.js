/**
 * @file Skeleton component
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Vendors
import classNames from 'classnames';

class Skeleton extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {
            className, style
        } = this.props;

        return (
            <div className={classNames('skeleton', {
                [className]: className
            })}
                 style={style}/>
        );

    }
}

Skeleton.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object

};

Skeleton.defaultProps = {};

export default Skeleton;
