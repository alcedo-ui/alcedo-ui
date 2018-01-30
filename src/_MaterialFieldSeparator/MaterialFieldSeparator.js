/**
 * @file MaterialFieldSeparator component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Theme from '../Theme';

import Util from '../_vendors/Util';

export default class MaterialFieldSeparator extends Component {

    static Theme = Theme;
    static propTypes = {

        className: PropTypes.string,
        style: PropTypes.object,
        theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

        isHover: PropTypes.bool,
        isFocus: PropTypes.bool

    };
    static defaultProps = {

        className: '',
        style: null,
        theme: Theme.DEFAULT,

        isHover: false,
        isFocus: false

    };

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {theme, isHover, isFocus} = this.props,

            className = (isHover ? ' hover' : '') + (isFocus ? ' focused' : '') + (theme ? ` theme-${theme}` : '');

        return (
            <div className={'material-field-separator' + className}>
                <div className="material-field-separator-hover"></div>
                <div className="material-field-separator-focus"></div>
            </div>
        );
    }
};