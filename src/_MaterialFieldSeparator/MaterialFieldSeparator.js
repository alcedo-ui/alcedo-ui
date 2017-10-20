/**
 * @file MaterialFieldSeparator component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Theme from '../Theme';

import Util from '../_vendors/Util';

export default class MaterialFieldSeparator extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {
        return (
            <div className="material-text-field-separator"></div>
        );
    }
};

MaterialFieldSeparator.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The popover theme.Can be primary,highlight,success,warning,error.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme))

};

MaterialFieldSeparator.defaultProps = {

    className: '',
    style: null,
    theme: Theme.DEFAULT

};