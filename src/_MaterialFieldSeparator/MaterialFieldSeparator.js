/**
 * @file MaterialFieldSeparator component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Theme from '../Theme';

import Util from '../_vendors/Util';

class MaterialFieldSeparator extends Component {

    static Theme = Theme;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {theme, isHover, isFocus, disabled} = this.props;

        return (
            <div className={classNames('material-field-separator', {
                hover: isHover,
                focused: isFocus,
                [`theme-${theme}`]: theme
            })}
                 disabled={disabled}>
                <div className="material-field-separator-hover"></div>
                <div className="material-field-separator-focus"></div>
            </div>
        );

    }
}

MaterialFieldSeparator.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    isHover: PropTypes.bool,
    isFocus: PropTypes.bool,
    disabled: PropTypes.bool

};

MaterialFieldSeparator.defaultProps = {

    theme: Theme.DEFAULT,

    isHover: false,
    isFocus: false,
    disabled: false

};

export default MaterialFieldSeparator;
