/**
 * @file ColorBlock component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Vendors
import classNames from 'classnames';

class ColorBlock extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    isHex = (value = this.props.value) => {
        return /^\#?(([0-9a-fA-F]{3})|([0-9a-fA-F]{6}))$/.test(value);
    };

    getColor = (value = this.props.value) => {

        if (this.isHex(value)) {
            return value[0] === '#' ? value : `#${value}`;
        }

        return value;

    };

    render() {

        const {

            className, style, opacity,

            // not passing down these props
            value,

            ...restProps

        } = this.props;

        return (
            <div {...restProps}
                 className={classNames('color-block', {
                     [className]: className
                 })}
                 style={style}>
                <div className="color-block-overlay"
                     style={{background: this.getColor(), opacity}}></div>
            </div>
        );

    }
}

ColorBlock.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * rgb hex value
     */
    value: PropTypes.string,

    opacity: PropTypes.number

};

ColorBlock.defaultProps = {
    value: 'ff0000',
    opacity: 1
};

export default ColorBlock;
