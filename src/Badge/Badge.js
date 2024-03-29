/**
 * @file Badge component
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Statics
import BadgeType from '../_statics/BadgeType';

// Vendors
import classNames from 'classnames';
import Util from '../_vendors/Util';

class Badge extends Component {

    static Type = BadgeType;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    /**
     * handle display when value overflow
     * @returns {string}
     */
    handleOverflow = () => {

        const {value, overflowValue, overflowRenderer} = this.props;

        if (!overflowRenderer) {
            return `${overflowValue}+`;
        }

        if (typeof overflowRenderer === 'function') {
            return overflowRenderer?.(value, overflowValue);
        }

        return overflowRenderer;

    };

    /**
     * handle display number
     * @param value
     * @returns {string|null|Number}
     */
    handleValue = (value = this.props.value) => {

        const {type, overflowValue} = this.props;

        if (type !== BadgeType.NUMBER) {
            return null;
        }

        if (overflowValue == null || value <= overflowValue) {
            return value;
        }

        return this.handleOverflow();

    };

    render() {

        const {

            children, className, style, visible, type,

            // not passing down these props
            value, overflowValue, overflowRenderer,

            ...restProps

        } = this.props;

        return (
            <span {...restProps}
                  className={classNames('badge-wrapper', {
                      'no-child': !children,
                      [className]: className
                  })}
                  style={style}>

                {children}

                {
                    visible ?
                        <sup className={classNames('badge', `badge-${type}`)}>
                            {this.handleValue()}
                        </sup>
                        :
                        null
                }

            </span>
        );

    }
}

Badge.propTypes = {

    children: PropTypes.any,

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    visible: PropTypes.bool,
    type: PropTypes.oneOf(Util.enumerateValue(BadgeType)),

    value: PropTypes.number,
    overflowValue: PropTypes.number,
    overflowRenderer: PropTypes.any

};

Badge.defaultProps = {
    visible: true,
    type: BadgeType.DOT
};

export default Badge;
