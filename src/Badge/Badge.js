/**
 * @file Badge component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import BadgeType from '../_statics/BadgeType';

import Util from '../_vendors/Util';

class Badge extends Component {

    static Type = BadgeType;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    handleValue = (value = this.props.value) => {

        const {type, overflowValue} = this.props;

        if (type !== BadgeType.NUMBER) {
            return null;
        }

        if (overflowValue == null || value <= overflowValue) {
            return value;
        }

        return `${overflowValue}+`;

    };

    render() {

        const {children, visible, type} = this.props;

        return (
            <span className="badge-wrapper">

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
    overflowValue: PropTypes.number

};

Badge.defaultProps = {
    visible: true,
    type: BadgeType.DOT
};

export default Badge;
