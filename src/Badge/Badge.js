/**
 * @file Badge component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import BadgeType from '../_statics/BadgeType';

import Util from '../_vendors/Util';

class Badge extends Component {

    static Type = BadgeType;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {children, visible, type, value} = this.props;

        return (
            <span className="badge">

                {children}

                {
                    visible ?
                        type === BadgeType.NUMBER ?
                            <sup className="badge-number">
                                {value}
                            </sup>
                            :
                            <sup className="badge-dot"></sup>
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
    overflowValue: PropTypes.number

};

Badge.defaultProps = {};

export default Badge;
