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

    render() {

        const {className, style, value, opacity, ...restProps} = this.props;

        return (
            <div {...restProps}
                 className={classNames('color-block', {
                     [className]: className
                 })}
                 style={style}>
                <div className="color-block-overlay"
                     style={{background: value[0] === '#' ? value : `#${value}`, opacity}}></div>
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
